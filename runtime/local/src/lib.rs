///////////////////////////////////////////////////////////////////////////////
//
//  Copyright 2018-2021 Robonomics Network <research@robonomics.network>
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
///////////////////////////////////////////////////////////////////////////////
//! The Robonomics runtime. This can be compiled with `#[no_std]`, ready for Wasm.
#![cfg_attr(not(feature = "std"), no_std)]
// `construct_runtime!` does a lot of recursion and requires us to increase the limit to 256.
#![recursion_limit = "256"]

// Make the WASM binary available.
#[cfg(feature = "std")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

#[cfg(feature = "std")]
/// Wasm binary unwrapped. If built with `BUILD_DUMMY_WASM_BINARY`, the function panics.
pub fn wasm_binary_unwrap() -> &'static [u8] {
    WASM_BINARY.expect(
        "Development wasm binary is not available. This means the client is \
                        built with `BUILD_DUMMY_WASM_BINARY` flag and it is only usable for \
                        production chains. Please rebuild with the flag disabled.",
    )
}

pub mod constants;

use frame_support::{
    construct_runtime, parameter_types,
    traits::KeyOwnerProofSystem,
    weights::{
        constants::{BlockExecutionWeight, ExtrinsicBaseWeight, RocksDbWeight, WEIGHT_PER_SECOND},
        DispatchClass, IdentityFee, Weight,
    },
};
use frame_system::limits::{BlockLength, BlockWeights};
use pallet_grandpa::{
    fg_primitives, AuthorityId as GrandpaId, AuthorityList as GrandpaAuthorityList,
};
use pallet_transaction_payment::{CurrencyAdapter, Multiplier, TargetedFeeAdjustment};
use pallet_transaction_payment_rpc_runtime_api::{FeeDetails, RuntimeDispatchInfo};
use robonomics_primitives::{AccountId, Balance, BlockNumber, Hash, Index, Moment, Signature};
use sp_api::impl_runtime_apis;
use sp_consensus_aura::sr25519::AuthorityId as AuraId;
use sp_core::{crypto::KeyTypeId, OpaqueMetadata};
use sp_inherents::{CheckInherentsResult, InherentData};
use sp_runtime::traits::{AccountIdLookup, BlakeTwo256, Block as BlockT, NumberFor};
use sp_runtime::transaction_validity::{TransactionSource, TransactionValidity};
use sp_runtime::{
    create_runtime_str, generic, impl_opaque_keys, ApplyExtrinsicResult, FixedPointNumber, Perbill,
    Perquintill,
};
use sp_std::prelude::*;
#[cfg(feature = "std")]
use sp_version::NativeVersion;
use sp_version::RuntimeVersion;

use crate::constants::{currency::*, time::*};

/// This runtime version.
#[sp_version::runtime_version]
pub const VERSION: RuntimeVersion = RuntimeVersion {
    spec_name: create_runtime_str!("robonomics-local"),
    impl_name: create_runtime_str!("robonomics-airalab"),
    authoring_version: 1,
    // Per convention: if the runtime behavior changes, increment spec_version
    // and set impl_version to equal spec_version. If only runtime
    // implementation changes and behavior does not, then leave spec_version as
    // is and increment impl_version.
    spec_version: 1,
    impl_version: 1,
    apis: RUNTIME_API_VERSIONS,
    transaction_version: 1,
};

/// The version infromation used to identify this runtime when compiled natively.
#[cfg(feature = "std")]
pub fn native_version() -> NativeVersion {
    NativeVersion {
        runtime_version: VERSION,
        can_author_with: Default::default(),
    }
}

/// We assume that ~10% of the block weight is consumed by `on_initalize` handlers.
/// This is used to limit the maximal weight of a single extrinsic.
const AVERAGE_ON_INITIALIZE_RATIO: Perbill = Perbill::from_percent(10);
/// We allow `Normal` extrinsics to fill up the block up to 75%, the rest can be used
/// by  Operational  extrinsics.
const NORMAL_DISPATCH_RATIO: Perbill = Perbill::from_percent(75);
/// We allow for 1 seconds of compute with a 2 second average block time.
const MAXIMUM_BLOCK_WEIGHT: Weight = 1 * WEIGHT_PER_SECOND;

parameter_types! {
    pub const BlockHashCount: BlockNumber = 2400;
    pub const Version: RuntimeVersion = VERSION;
    pub RuntimeBlockLength: BlockLength =
        BlockLength::max_with_normal_ratio(5 * 1024 * 1024, NORMAL_DISPATCH_RATIO);
    pub RuntimeBlockWeights: BlockWeights = BlockWeights::builder()
        .base_block(BlockExecutionWeight::get())
        .for_class(DispatchClass::all(), |weights| {
            weights.base_extrinsic = ExtrinsicBaseWeight::get();
        })
        .for_class(DispatchClass::Normal, |weights| {
            weights.max_total = Some(NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT);
        })
        .for_class(DispatchClass::Operational, |weights| {
            weights.max_total = Some(MAXIMUM_BLOCK_WEIGHT);
            // Operational transactions have some extra reserved space, so that they
            // are included even if block reached `MAXIMUM_BLOCK_WEIGHT`.
            weights.reserved = Some(
                MAXIMUM_BLOCK_WEIGHT - NORMAL_DISPATCH_RATIO * MAXIMUM_BLOCK_WEIGHT
            );
        })
        .avg_block_initialization(AVERAGE_ON_INITIALIZE_RATIO)
        .build_or_panic();
    pub SS58Prefix: u8 = 32;
}

impl frame_system::Config for Runtime {
    type Call = Call;
    type BaseCallFilter = frame_support::traits::Everything;
    type BlockWeights = RuntimeBlockWeights;
    type BlockLength = RuntimeBlockLength;
    type Version = Version;
    type AccountId = AccountId;
    type Lookup = AccountIdLookup<AccountId, ()>;
    type Index = Index;
    type BlockNumber = BlockNumber;
    type Hash = Hash;
    type Hashing = BlakeTwo256;
    type Header = generic::Header<BlockNumber, BlakeTwo256>;
    type Event = Event;
    type Origin = Origin;
    type DbWeight = RocksDbWeight;
    type BlockHashCount = BlockHashCount;
    type PalletInfo = PalletInfo;
    type AccountData = pallet_balances::AccountData<Balance>;
    type OnNewAccount = ();
    type OnKilledAccount = ();
    type SystemWeightInfo = ();
    type SS58Prefix = SS58Prefix;
    type OnSetCode = ();
}

parameter_types! {
    pub const MinimumPeriod: Moment = SLOT_DURATION / 2;
}

impl pallet_timestamp::Config for Runtime {
    type Moment = Moment;
    type OnTimestampSet = Aura;
    type MinimumPeriod = MinimumPeriod;
    type WeightInfo = ();
}

parameter_types! {
    pub const ExistentialDeposit: Balance = 1 * COASE;
    // For weight estimation, we assume that the most locks on an individual account will be 50.
    // This number may need to be adjusted in the future if this assumption no longer holds true.
    pub const MaxLocks: u32 = 50;
    pub const MaxReserves: u32 = 50;
}

impl pallet_balances::Config for Runtime {
    type Balance = Balance;
    type DustRemoval = ();
    type Event = Event;
    type ExistentialDeposit = ExistentialDeposit;
    type AccountStore = frame_system::Pallet<Runtime>;
    type MaxLocks = MaxLocks;
    type MaxReserves = MaxReserves;
    type ReserveIdentifier = [u8; 8];
    type WeightInfo = ();
}

parameter_types! {
    pub const TransactionByteFee: Balance = 0;
    pub const TargetBlockFullness: Perquintill = Perquintill::from_percent(25);
    pub AdjustmentVariable: Multiplier = Multiplier::saturating_from_rational(1, 100_000);
    pub MinimumMultiplier: Multiplier = Multiplier::saturating_from_rational(1, 1_000_000_000u128);
}

impl pallet_transaction_payment::Config for Runtime {
    type OnChargeTransaction = CurrencyAdapter<Balances, ()>;
    type TransactionByteFee = TransactionByteFee;
    type WeightToFee = IdentityFee<Balance>;
    type FeeMultiplierUpdate =
        TargetedFeeAdjustment<Self, TargetBlockFullness, AdjustmentVariable, MinimumMultiplier>;
}

impl_opaque_keys! {
    pub struct SessionKeys {
        pub aura: Aura,
        pub grandpa: Grandpa,
    }
}

impl pallet_aura::Config for Runtime {
    type AuthorityId = AuraId;
    type DisabledValidators = ();
}

impl pallet_grandpa::Config for Runtime {
    type Event = Event;
    type Call = Call;

    type KeyOwnerProofSystem = ();

    type KeyOwnerProof =
        <Self::KeyOwnerProofSystem as KeyOwnerProofSystem<(KeyTypeId, GrandpaId)>>::Proof;

    type KeyOwnerIdentification = <Self::KeyOwnerProofSystem as KeyOwnerProofSystem<(
        KeyTypeId,
        GrandpaId,
    )>>::IdentificationTuple;

    type HandleEquivocation = ();
    type WeightInfo = ();
}

impl pallet_sudo::Config for Runtime {
    type Event = Event;
    type Call = Call;
}

parameter_types! {
    pub const WindowSize: u64 = 128;
    pub const MaximumMessageSize: usize = 512;
}

impl pallet_robonomics_datalog::Config for Runtime {
    type Time = Timestamp;
    type Record = Vec<u8>;
    type Event = Event;
    type WindowSize = WindowSize;
    type MaximumMessageSize = MaximumMessageSize;
    type WeightInfo = ();
}

impl pallet_robonomics_launch::Config for Runtime {
    type Parameter = bool;
    type Event = Event;
}

parameter_types! {
    pub const TotalBandwidth: u64 = 100; // 100 TPS allocated for RWS transactions
    pub const WeightLimit: Weight = 1_000_000_000_000_000;
    pub const PointsLimit: u64 = 10_000_000_000; // equal to 10 TPS
}

impl pallet_robonomics_rws::Config for Runtime {
    type TotalBandwidth = TotalBandwidth;
    type WeightLimit = WeightLimit;
    type PointsLimit = PointsLimit;
    type Time = Timestamp;
    type Event = Event;
    type Call = Call;
}

impl pallet_robonomics_digital_twin::Config for Runtime {
    type Event = Event;
}

impl pallet_robonomics_liability::Config for Runtime {
    type Agreement = pallet_robonomics_liability::SignedAgreement<
        Vec<u8>,
        (),
        Self::AccountId,
        sp_runtime::MultiSignature,
    >;
    type Report = pallet_robonomics_liability::SignedReport<
        Self::Index,
        Self::AccountId,
        sp_runtime::MultiSignature,
        Vec<u8>,
    >;
    type Event = Event;
}

parameter_types! {
    pub const BondingDuration: BlockNumber = 7 * 24 * 60 * 5; // 7 days
    pub const StakeReward: Perbill = Perbill::from_parts(40);
    pub const BonusReward: Perbill = Perbill::from_parts(200);
}

impl pallet_robonomics_staking::Config for Runtime {
    type Currency = Balances;
    type Event = Event;
    type BondingDuration = BondingDuration;
    type StakeReward = StakeReward;
    type BonusReward = BonusReward;
}

construct_runtime!(
    pub enum Runtime where
        Block = Block,
        NodeBlock = robonomics_primitives::Block,
        UncheckedExtrinsic = UncheckedExtrinsic
    {
        // Basic stuff.
        System: frame_system::{Pallet, Call, Config, Storage, Event<T>},
        Timestamp: pallet_timestamp::{Pallet, Call, Storage, Inherent},
        Aura: pallet_aura::{Pallet, Config<T>},
        Grandpa: pallet_grandpa::{Pallet, Call, Storage, Config, Event},

        // Native currency and accounts.
        Balances: pallet_balances::{Pallet, Call, Storage, Event<T>, Config<T>},
        TransactionPayment: pallet_transaction_payment::{Pallet, Storage},

        // Robonomics Network modules.
        Datalog: pallet_robonomics_datalog::{Pallet, Call, Storage, Event<T>},
        Launch: pallet_robonomics_launch::{Pallet, Call, Event<T>},
        RWS: pallet_robonomics_rws::{Pallet, Call, Storage, Event<T>},
        DigitalTwin: pallet_robonomics_digital_twin::{Pallet, Call, Storage, Event<T>},
        Liability: pallet_robonomics_liability::{Pallet, Call, Storage, Event<T>},
        Staking: pallet_robonomics_staking::{Pallet, Call, Storage, Event<T>, Config<T>},

        // Sudo. Usable initially.
        Sudo: pallet_sudo::{Pallet, Call, Storage, Event<T>, Config<T>},
    }
);

/// The address format for describing accounts.
pub type Address = sp_runtime::MultiAddress<AccountId, ()>;

/// Block header type as expected by this runtime.
pub type Header = generic::Header<BlockNumber, BlakeTwo256>;

/// Block type as expected by this runtime.
pub type Block = generic::Block<Header, UncheckedExtrinsic>;

/// BlockId type as expected by this runtime.
pub type BlockId = generic::BlockId<Block>;

/// The SignedExtension to the basic transaction logic.
pub type SignedExtra = (
    frame_system::CheckSpecVersion<Runtime>,
    frame_system::CheckTxVersion<Runtime>,
    frame_system::CheckGenesis<Runtime>,
    frame_system::CheckEra<Runtime>,
    frame_system::CheckNonce<Runtime>,
    frame_system::CheckWeight<Runtime>,
    pallet_transaction_payment::ChargeTransactionPayment<Runtime>,
);

/// Unchecked extrinsic type as expected by this runtime.
pub type UncheckedExtrinsic = generic::UncheckedExtrinsic<Address, Call, Signature, SignedExtra>;

/// Extrinsic type that has already been checked.
pub type CheckedExtrinsic = generic::CheckedExtrinsic<AccountId, Call, SignedExtra>;

/// Executive: handles dispatch to the various modules.
pub type Executive = frame_executive::Executive<
    Runtime,
    Block,
    frame_system::ChainContext<Runtime>,
    Runtime,
    AllPallets,
>;

// Implement our runtime API endpoints. This is just a bunch of proxying.
impl_runtime_apis! {
    impl sp_api::Core<Block> for Runtime {
        fn version() -> RuntimeVersion {
            VERSION
        }

        fn execute_block(block: Block) {
            Executive::execute_block(block)
        }

        fn initialize_block(header: &<Block as BlockT>::Header) {
            Executive::initialize_block(header)
        }
    }

    impl sp_api::Metadata<Block> for Runtime {
        fn metadata() -> OpaqueMetadata {
            Runtime::metadata().into()
        }
    }

    impl sp_block_builder::BlockBuilder<Block> for Runtime {
        fn apply_extrinsic(extrinsic: <Block as BlockT>::Extrinsic) -> ApplyExtrinsicResult {
            Executive::apply_extrinsic(extrinsic)
        }

        fn finalize_block() -> <Block as BlockT>::Header {
            Executive::finalize_block()
        }

        fn inherent_extrinsics(data: InherentData) -> Vec<<Block as BlockT>::Extrinsic> {
            data.create_extrinsics()
        }

        fn check_inherents(block: Block, data: InherentData) -> CheckInherentsResult {
            data.check_extrinsics(&block)
        }
    }

    impl sp_transaction_pool::runtime_api::TaggedTransactionQueue<Block> for Runtime {
        fn validate_transaction(
            source: TransactionSource,
            tx: <Block as BlockT>::Extrinsic,
            block_hash: <Block as BlockT>::Hash,
        ) -> TransactionValidity {
            Executive::validate_transaction(source, tx, block_hash)
        }
    }

    impl sp_offchain::OffchainWorkerApi<Block> for Runtime {
        fn offchain_worker(header: &<Block as BlockT>::Header) {
            Executive::offchain_worker(header)
        }
    }

    impl sp_consensus_aura::AuraApi<Block, AuraId> for Runtime {
        fn slot_duration() -> sp_consensus_aura::SlotDuration {
            sp_consensus_aura::SlotDuration::from_millis(Aura::slot_duration())
        }

        fn authorities() -> Vec<AuraId> {
            Aura::authorities()
        }
    }

    impl fg_primitives::GrandpaApi<Block> for Runtime {
        fn grandpa_authorities() -> GrandpaAuthorityList {
            Grandpa::grandpa_authorities()
        }

        fn current_set_id() -> fg_primitives::SetId {
            Grandpa::current_set_id()
        }

        fn submit_report_equivocation_unsigned_extrinsic(
            _equivocation_proof: fg_primitives::EquivocationProof<
                <Block as BlockT>::Hash,
                NumberFor<Block>,
            >,
            _key_owner_proof: fg_primitives::OpaqueKeyOwnershipProof,
        ) -> Option<()> {
            None
        }

        fn generate_key_ownership_proof(
            _set_id: fg_primitives::SetId,
            _authority_id: GrandpaId,
        ) -> Option<fg_primitives::OpaqueKeyOwnershipProof> {
            None
        }
    }

    impl frame_system_rpc_runtime_api::AccountNonceApi<Block, AccountId, Index> for Runtime {
        fn account_nonce(account: AccountId) -> Index {
            System::account_nonce(account)
        }
    }

    impl pallet_transaction_payment_rpc_runtime_api::TransactionPaymentApi<
        Block,
        Balance,
    > for Runtime {
        fn query_info(uxt: <Block as BlockT>::Extrinsic, len: u32) -> RuntimeDispatchInfo<Balance> {
            TransactionPayment::query_info(uxt, len)
        }

        fn query_fee_details(uxt: <Block as BlockT>::Extrinsic, len: u32) -> FeeDetails<Balance> {
            TransactionPayment::query_fee_details(uxt, len)
        }
    }

    impl sp_session::SessionKeys<Block> for Runtime {
        fn generate_session_keys(seed: Option<Vec<u8>>) -> Vec<u8> {
            SessionKeys::generate(seed)
        }

        fn decode_session_keys(
            encoded: Vec<u8>,
        ) -> Option<Vec<(Vec<u8>, sp_core::crypto::KeyTypeId)>> {
            SessionKeys::decode_into_raw_public_keys(&encoded)
        }
    }

    #[cfg(feature = "runtime-benchmarks")]
    impl frame_benchmarking::Benchmark<Block> for Runtime {
        fn dispatch_benchmark(
            config: frame_benchmarking::BenchmarkConfig
        ) -> Result<Vec<frame_benchmarking::BenchmarkBatch>, sp_runtime::RuntimeString> {
            use frame_benchmarking::{Benchmarking, BenchmarkBatch, add_benchmark, TrackedStorageKey};
            use frame_system_benchmarking::Pallet as SystemBench;

            impl frame_system_benchmarking::Config for Runtime {}

            let whitelist: Vec<TrackedStorageKey> = vec![
                // Block Number
                hex_literal::hex!("26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac").to_vec().into(),
                // Total Issuance
                hex_literal::hex!("c2261276cc9d1f8598ea4b6a74b15c2f57c875e4cff74148e4628f264b974c80").to_vec().into(),
                // Execution Phase
                hex_literal::hex!("26aa394eea5630e07c48ae0c9558cef7ff553b5a9862a516939d82b3d3d8661a").to_vec().into(),
                // Event Count
                hex_literal::hex!("26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850").to_vec().into(),
                // System Events
                hex_literal::hex!("26aa394eea5630e07c48ae0c9558cef780d41e5e16056765bc8461851072c9d7").to_vec().into(),
                // Treasury Account
                hex_literal::hex!("26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da95ecffd7b6c0f78751baa9d281e0bfa3a6d6f646c70792f74727372790000000000000000000000000000000000000000").to_vec().into(),
            ];

            let mut batches = Vec::<BenchmarkBatch>::new();
            let params = (&config, &whitelist);

            add_benchmark!(params, batches, pallet_balances, Balances);
            add_benchmark!(params, batches, frame_system, SystemBench::<Runtime>);
            add_benchmark!(params, batches, pallet_timestamp, Timestamp);
            add_benchmark!(params, batches, pallet_robonomics_datalog, Datalog);
            /* TODO
            add_benchmark!(params, batches, pallet_robonomics_digital_twin, DigitalTwin);
            add_benchmark!(params, batches, pallet_robonomics_launch, Launch);
            add_benchmark!(params, batches, pallet_robonomics_rws, RWS);
            */

            if batches.is_empty() { return Err("Benchmark not found for this pallet.".into()) }
            Ok(batches)
        }
    }
}
