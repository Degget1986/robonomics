(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for DepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for DepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Freeze for EpochDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Freeze for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for WeightToFee","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Freeze for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Freeze for BondingDuration","synthetic":true,"types":[]},{"text":"impl Freeze for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Freeze for RewardCurve","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Freeze for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Freeze for MaxIterations","synthetic":true,"types":[]},{"text":"impl Freeze for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Freeze for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Freeze for WindowSize","synthetic":true,"types":[]},{"text":"impl Freeze for ReportLatency","synthetic":true,"types":[]},{"text":"impl Freeze for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Freeze for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Freeze for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Freeze for SessionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Freeze for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Freeze for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["node_cli"] = [{"text":"impl Freeze for Cli","synthetic":true,"types":[]},{"text":"impl Freeze for RunCmd","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl Freeze for Extensions","synthetic":true,"types":[]},{"text":"impl Freeze for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Freeze for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Freeze for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; Freeze for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; Freeze for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; Freeze for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Freeze for OpenMarket&lt;T, A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Freeze for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for AppProofSigner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ProofSigner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Freeze for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Freeze for IoCmd","synthetic":true,"types":[]},{"text":"impl Freeze for SinkCmd","synthetic":true,"types":[]},{"text":"impl Freeze for SourceCmd","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for DepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for DepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Freeze for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Freeze for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for Burn","synthetic":true,"types":[]},{"text":"impl Freeze for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Freeze for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Freeze for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Freeze for VotingBond","synthetic":true,"types":[]},{"text":"impl Freeze for TermDuration","synthetic":true,"types":[]},{"text":"impl Freeze for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Freeze for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Freeze for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Freeze for RococoLocation","synthetic":true,"types":[]},{"text":"impl Freeze for RococoNetwork","synthetic":true,"types":[]},{"text":"impl Freeze for RelayChainOrigin","synthetic":true,"types":[]},{"text":"impl Freeze for Ancestry","synthetic":true,"types":[]},{"text":"impl Freeze for XcmConfig","synthetic":true,"types":[]},{"text":"impl Freeze for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Freeze for WeightLimit","synthetic":true,"types":[]},{"text":"impl Freeze for PointsLimit","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl !Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl !Freeze for PubSub","synthetic":true,"types":[]},{"text":"impl Freeze for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for EreaseCall&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for DatalogStore&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for EpochDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Freeze for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Freeze for WeightLimit","synthetic":true,"types":[]},{"text":"impl Freeze for PointsLimit","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Freeze for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Freeze for FullChain&lt;Client, Block&gt;","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Freeze for FullState&lt;BE, Client, Block&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Freeze for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Freeze for Time","synthetic":true,"types":[]},{"text":"impl Freeze for UInt64","synthetic":true,"types":[]},{"text":"impl Freeze for Bool","synthetic":true,"types":[]},{"text":"impl Freeze for String","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKey","synthetic":true,"types":[]},{"text":"impl Freeze for StateCallReq","synthetic":true,"types":[]},{"text":"impl Freeze for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Freeze for StateCallRes","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHash","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Freeze for ExHash","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Freeze for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Freeze for SystemHealth","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl Freeze for StateCall","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHash","synthetic":true,"types":[]},{"text":"impl Freeze for GetBlock","synthetic":true,"types":[]},{"text":"impl Freeze for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Freeze for StorageSize","synthetic":true,"types":[]},{"text":"impl Freeze for StorageQuery","synthetic":true,"types":[]},{"text":"impl Freeze for StorageKeys","synthetic":true,"types":[]},{"text":"impl Freeze for GetBestHead","synthetic":true,"types":[]},{"text":"impl Freeze for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Freeze for TriggerReq","synthetic":true,"types":[]},{"text":"impl Freeze for TriggerRes","synthetic":true,"types":[]},{"text":"impl Freeze for Trigger","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()