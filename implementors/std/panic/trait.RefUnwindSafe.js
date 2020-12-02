(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl RefUnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositFactor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSignatories","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UncleGenerations","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EpochDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WeightToFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BondingDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RewardCurve","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxIterations","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WindowSize","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReportLatency","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FieldDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !RefUnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["node_cli"] = [{"text":"impl RefUnwindSafe for Cli","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RunCmd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Subcommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Extensions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; !RefUnwindSafe for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !RefUnwindSafe for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; !RefUnwindSafe for FullDeps&lt;C, P, SC, B&gt;","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; RefUnwindSafe for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; RefUnwindSafe for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; RefUnwindSafe for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; RefUnwindSafe for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; RefUnwindSafe for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; RefUnwindSafe for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Call: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl RefUnwindSafe for IoCmd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SinkCmd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SourceCmd","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl RefUnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositFactor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSignatories","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransferFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreationFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FieldDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SpendPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Burn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipCountdown","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipFindersFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CandidacyBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VotingBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TermDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DesiredMembers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WeightLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PointsLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !RefUnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PubSub","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; RefUnwindSafe for DatalogStore&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl RefUnwindSafe for DealWithFees","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DepositFactor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSignatories","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EpochDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UncleGenerations","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransferFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreationFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BondingDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RewardCurve","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxIterations","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WindowSize","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReportLatency","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FieldDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SpendPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Burn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipCountdown","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipFindersFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CandidacyBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VotingBond","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TermDuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DesiredMembers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WeightLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PointsLimit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !RefUnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Call","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; !RefUnwindSafe for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; RefUnwindSafe for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; RefUnwindSafe for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; !RefUnwindSafe for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl RefUnwindSafe for UInt64","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bool","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for String","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Time","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StateCallRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageHashRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BlockHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageHashReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StateCallReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StateCall","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageSize","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageQuery","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBestHead","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GetBlockHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SystemHealth","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TriggerRes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TriggerReq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Trigger","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()