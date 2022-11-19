(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{296:function(t,e,a){"use strict";a.r(e);var i=a(10),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"bitcoin-in-general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-in-general"}},[t._v("#")]),t._v(" Bitcoin in general")]),t._v(" "),e("details",{attrs:{id:"address"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#address","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Address")])]),t._v(" "),e("p",[t._v("A Bitcoin invoice address commits to a public key or script which defines who can spend the coin.\nIt is specified in the output of a transaction, and it should only be used once.\nWasabi uses the bech32 format to encode native segregated witness addresses.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[t._v("Bitcoin addresses")])],1)]),e("details",{attrs:{id:"bitcoin"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Bitcoin")])]),t._v(" "),e("p",[t._v("Bitcoin is a peer-to-peer electronic cash system.\nAn innovative payment network and a new kind of money.\nIt is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin blockchain network without the need for intermediaries.")])]),e("details",{attrs:{id:"bitcoin-core"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-core","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Bitcoin Core")])]),t._v(" "),e("p",[t._v("Bitcoin Core is an open-source project which maintains and releases Bitcoin client software called "),e("code",[t._v("Bitcoin Core")]),t._v(", considered to be Bitcoin's reference implementation.\nIt is a direct descendant of the original Bitcoin software client released by Satoshi Nakamoto after he published the famous Bitcoin whitepaper.")]),t._v(" "),e("p",[t._v("Bitcoin Core consists of both "),e("code",[t._v("full-node")]),t._v(" software for fully validating the blockchain as well as a Bitcoin wallet.\nThe project also currently maintains related software such as the cryptography library libsecp256k1 and others located at GitHub.\nRead more: "),e("a",{attrs:{href:"https://bitcoincore.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core Website"),e("OutboundLink")],1)])]),e("details",{attrs:{id:"bitcoin-improvement-proposal-bip"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-improvement-proposal-bip","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Bitcoin Improvement Proposal (BIP)")])]),t._v(" "),e("p",[t._v("Bitcoin Improvement Proposal.\nA design document for introducing features or information to Bitcoin.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html"}},[t._v("Wasabi Supported BIPs")])],1)]),e("details",{attrs:{id:"bitcoin-knots"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-knots","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Bitcoin Knots")])]),t._v(" "),e("p",[t._v("Bitcoin Knots is a derivative of Bitcoin Core with a collection of improvements backported from and sometimes maintained outside of Core's master git tree.\nSince version 1.1.11, Wasabi has partial Bitcoin Knots integration.\nThis means that it is possible (but not mandatory) to start Bitcoin Knots during the launch of Wasabi, without having to install or configure anything.\nRead more: "),e("a",{attrs:{href:"https://bitcoinknots.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Knots Website"),e("OutboundLink")],1)])]),e("details",{attrs:{id:"block"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#block","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Block")])]),t._v(" "),e("p",[t._v("A block is a batch of valid Bitcoin transactions and its hash must be a value below a certain difficulty target to prove the work of the miner.\nEach block references the hash of the previous block, thus creating a hash chain of blocks.\nOn average a new block is mined every 10 minutes.")])]),e("details",{attrs:{id:"blockchain"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#blockchain","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Blockchain")])]),t._v(" "),e("p",[t._v("The blockchain is the one chain of valid Bitcoin blocks with the most accumulated proof of work.\nIt is an append-only data structure with new blocks being added on average every 10 minutes.\nBecause of its uniquely verifiable and global consensus, it is a revolutionary standard for time, thus some call it timechain.")])]),e("details",{attrs:{id:"change"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#change","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Change")])]),t._v(" "),e("p",[t._v("In a transaction where the provided input coins are larger than the value sent to the destination address, then the leftover change is sent to a new address of the same wallet.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/ChangeCoins.html"}},[t._v("Change coins")])],1)]),e("details",{attrs:{id:"child-pays-for-parent-cpfp"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#child-pays-for-parent-cpfp","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Child Pays For Parent (CPFP)")])]),t._v(" "),e("p",[t._v("Child Pays For Parent (CPFP) is a fee bumping technique where a user spends an output from a low fee rate unconfirmed transaction in a child transaction with a high fee rate in order to encourage miners to include both transactions in a block.")])]),e("details",{attrs:{id:"coinbase"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#coinbase","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Coinbase")])]),t._v(" "),e("p",[t._v("A special field used as the sole input for coinbase transactions.\nThe coinbase allows claiming the block reward and provides up to 100 bytes for arbitrary data.")])]),e("details",{attrs:{id:"coinbase-transaction"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#coinbase-transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Coinbase Transaction")])]),t._v(" "),e("p",[t._v("The first transaction in a block.\nAlways created by a miner, it includes a single coinbase.")])]),e("details",{attrs:{id:"cold-storage"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#cold-storage","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Cold Storage")])]),t._v(" "),e("p",[t._v("Refers to keeping a reserve of important Bitcoin secrets offline.\nCold storage is achieved when Bitcoin private keys are created and stored in a secure offline environment.\nCold storage is important for anyone with bitcoin holdings.\nOnline computers are vulnerable to hackers and should not be used to store a significant amount of bitcoin.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/ColdWasabi.html"}},[t._v("Cold Wasabi Protocol")])],1)]),e("details",{attrs:{id:"confirmations"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#confirmations","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Confirmations")])]),t._v(" "),e("p",[t._v("Once a transaction is included in a block, it has one confirmation.\nAs soon as another block is mined on the same blockchain, the transaction has two confirmations, and so on.\nSix or more confirmations is considered sufficient proof that a transaction cannot be reversed.")])]),e("details",{attrs:{id:"consensus"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#consensus","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Consensus")])]),t._v(" "),e("p",[t._v("When several nodes, usually most nodes on the network, all have the same blocks in their locally-validated best blockchain.")])]),e("details",{attrs:{id:"consensus-rules"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#consensus-rules","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Consensus Rules")])]),t._v(" "),e("p",[t._v("The block validation rules that full nodes follow to stay in consensus with other nodes.")])]),e("details",{attrs:{id:"custodial-wallet-or-mixer"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#custodial-wallet-or-mixer","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Custodial (Wallet or Mixer)")])]),t._v(" "),e("p",[t._v("A custodial wallet is any wallet where the private keys of your coins are in the hands of a third party.\nIn essence, they operate similarly to traditional banks.")]),t._v(" "),e("p",[t._v("A custodial mixer needs you to send your bitcoins to a central part before mixing.\nThis means that you are at risk of being stolen from.")])]),e("details",{attrs:{id:"difficulty"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#difficulty","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Difficulty")])]),t._v(" "),e("p",[t._v("A network-wide setting that controls how much computation is required to produce a proof of work.")])]),e("details",{attrs:{id:"difficulty-retargeting-difficulty-adjustment"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#difficulty-retargeting-difficulty-adjustment","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Difficulty Retargeting (Difficulty Adjustment)")])]),t._v(" "),e("p",[t._v("A network-wide recalculation of the difficulty that occurs once every 2,016 blocks and considers the hashing power of the previous 2,016 blocks.")])]),e("details",{attrs:{id:"difficulty-target"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#difficulty-target","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Difficulty Target")])]),t._v(" "),e("p",[t._v("A difficulty at which all the computation in the network will find blocks approximately every 10 minutes.\nIt specifies the numeric value the hash of a block must not be above to be considered a valid block.")])]),e("details",{attrs:{id:"ecdsa"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#ecdsa","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("ECDSA")])]),t._v(" "),e("p",[t._v("ECDSA (Elliptic Curve Digital Signature Algorithm) is one of the digital signature algorithms used by Bitcoin to ensure that funds can only be spent by their rightful owners.")])]),e("details",{attrs:{id:"fork"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#fork","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Fork")])]),t._v(" "),e("p",[t._v("Fork, also known as accidental fork, occurs when two or more blocks have the same block height, forking the blockchain.\nTypically occurs when two or more miners find blocks at nearly the same time.\nCan also happen as part of an attack.")])]),e("details",{attrs:{id:"full-node"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#full-node","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Full node")])]),t._v(" "),e("p",[t._v("Any computer that connects to the Bitcoin network is called a node.\nNodes that fully verify all of the rules of Bitcoin are called full nodes.\nFull nodes download every block and transaction and check them against Bitcoin's consensus rules.")])]),e("details",{attrs:{id:"fungibility"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#fungibility","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Fungibility")])]),t._v(" "),e("p",[t._v("Fungibility is a desirable property of Bitcoin UTXOs that are indistinguishable from each other.\nRead more: "),e("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#attempt-to-destroy-fungibility"}},[t._v("Transaction surveillance companies attempting to destroy fungibility")])],1)]),e("details",{attrs:{id:"genesis-block"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#genesis-block","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Genesis Block")])]),t._v(" "),e("p",[t._v("The first block in the blockchain, used to initialize the cryptocurrency.")])]),e("details",{attrs:{id:"hard-fork"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hard-fork","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hard Fork")])]),t._v(" "),e("p",[t._v("Hard fork, also known as hard-forking change, is a permanent divergence in the blockchain, it occurs when non-upgraded nodes can not validate blocks created by upgraded nodes that follow newer consensus rules.\nThe upgraded nodes break the rules of the legacy nodes.\nNot to be confused with fork, soft fork, software fork or Git fork.")])]),e("details",{attrs:{id:"hardware-wallet-hww"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-hww","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hardware Wallet (HWW)")])]),t._v(" "),e("p",[t._v("A hardware wallet is a special type of Bitcoin wallet which generates and stores the user's private keys on a dedicated hardware device.\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#hardware-wallet"}},[t._v("Hardware Wallet FAQs")])],1)]),e("details",{attrs:{id:"hash"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hash")])]),t._v(" "),e("p",[t._v("A cryptographic hash function takes any input of arbitrary size [the message] and computes a value of fixed size that is unique to the input, which is called a hash or a digest.\nIf one bit of the input changes, the output will be completely different [avalanche effect].\nAnd there are no two messages that result in the same hash [collision resistance].\nThe only way to get any given input, is by computing all possible inputs, it is a one-way function [pre-image resistance].\nBitcoin uses the SHA256 in many parts of the protocol.")])]),e("details",{attrs:{id:"hierarchical-deterministic-hd-protocol"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hierarchical-deterministic-hd-protocol","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hierarchical Deterministic (HD) Protocol")])]),t._v(" "),e("p",[t._v("The Hierarchical Deterministic key creation and transfer protocol (BIP32), which allows creating child keys from parent keys in a hierarchy.")])]),e("details",{attrs:{id:"hierarchical-deterministitc-hd-wallet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hierarchical-deterministitc-hd-wallet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hierarchical Deterministitc (HD) Wallet")])]),t._v(" "),e("p",[t._v("Wallets using the Hierarchical Deterministic Protocol key creation and transfer protocol (BIP32).")])]),e("details",{attrs:{id:"hot-wallet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#hot-wallet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Hot Wallet")])]),t._v(" "),e("p",[t._v("A hot wallet is a software wallet that runs on a device which is connected to the Internet.\nWasabi is a hot wallet by default.")])]),e("details",{attrs:{id:"input"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Input")])]),t._v(" "),e("p",[t._v("Input, transaction input, or TxIn is an input in a Bitcoin transaction which contains two fields: a unique transaction hash and an index number, which references one utxo of a previous transaction which is spent in this transaction.")])]),e("details",{attrs:{id:"lightning-network-ln"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-ln","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Lightning Network (LN)")])]),t._v(" "),e("p",[t._v("Lightning Network is a proposed implementation of Hashed Timelock Contracts (HTLCs) with bi-directional payment channels which allows payments to be securely routed across multiple peer-to-peer payment channels.\nThis allows the formation of a network where any peer on the network can pay any other peer even if they don't directly have a channel open between each other.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/10Commandments.html#_10-use-lightning"}},[t._v("Use Lightning")])],1)]),e("details",{attrs:{id:"mainnet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#mainnet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Mainnet")])]),t._v(" "),e("p",[t._v("The original and main network for Bitcoin transactions, where satoshis have real economic value.")])]),e("details",{attrs:{id:"mempool"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#mempool","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Mempool")])]),t._v(" "),e("p",[t._v("The Bitcoin Mempool (memory pool) is a collection of all transaction data in a block that have been verified by Bitcoin nodes, but are not yet confirmed.\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-does-wasabi-know-of-incoming-transactions-to-the-mempool"}},[t._v("How does Wasabi know of incoming transactions to the mempool?")])],1)]),e("details",{attrs:{id:"merkle-root"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#merkle-root","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Merkle Root")])]),t._v(" "),e("p",[t._v("The root node of a merkle tree, a descendant of all the hashed pairs in the tree.\nBlock headers must include a valid merkle root descended from all transactions in that block.")])]),e("details",{attrs:{id:"merkle-tree"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#merkle-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Merkle Tree")])]),t._v(" "),e("p",[t._v("A tree constructed by hashing paired data (the leaves), then pairing and hashing the results until a single hash remains, the merkle root.\nIn Bitcoin, the leaves are almost always transactions from a single block.")])]),e("details",{attrs:{id:"miner"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#miner","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Miner")])]),t._v(" "),e("p",[t._v("A Bitcoin user that attempts to find valid proof of work for new candidate blocks, by repeated hashing until the difficulty target is met.")])]),e("details",{attrs:{id:"mining-reward"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#mining-reward","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Mining Reward")])]),t._v(" "),e("p",[t._v("An amount of satoshis included in each new block as a reward by the network to the miner who found the proof of work solution.\nInitially it was 50 bitcoin per block, which is halved every 210 000 blocks, or roughly 4 years.\nThis leads to a total money supply of just below 21 million bitcoin.")])]),e("details",{attrs:{id:"multisignature-multisig"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#multisignature-multisig","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Multisignature (multisig)")])]),t._v(" "),e("p",[t._v("Multisignature (m-of-n multisig) refers to requiring more than one key to authorize a Bitcoin transaction.\nOnly with "),e("code",[t._v("m")]),t._v(" signatures of "),e("code",[t._v("n")]),t._v(" public keys can the bitcoin be spent.\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#can-i-generate-a-multi-signature-script"}},[t._v("Can I generate a multi signature script?")])],1)]),e("details",{attrs:{id:"non-custodial-wallet-or-mixer"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#non-custodial-wallet-or-mixer","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Non-Custodial (Wallet or Mixer)")])]),t._v(" "),e("p",[t._v("A non-custodial wallet is any wallet where the private keys of your coins are in your hands.\nNon-custodial wallets give you full control over your bitcoins.")]),t._v(" "),e("p",[t._v("A non-custodial mixer like Wasabi eliminates the risk that the coordinator can steal your bitcoin.\nEach participant verifies the proposed transaction, and signs it only if it is valid.\nThis signature is only valid for this transaction, so any attempt to change the transaction after the fact is futile.\nThe funds will always be in a Bitcoin address that you control.")])]),e("details",{attrs:{id:"nonce"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#nonce","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Nonce")])]),t._v(" "),e("p",[t._v("The nonce in a Bitcoin block is a 32-bit (4-byte) field whose value is set so that the hash of the block will contain a run of leading zeros.\nThe rest of the fields may not be changed, as they have a defined meaning.")])]),e("details",{attrs:{id:"off-chain-transaction"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Off-chain Transaction")])]),t._v(" "),e("p",[t._v("An off-chain transaction is the movement of value outside of the blockchain.\nWhile an on-chain transaction - usually referred to as simply a transaction - modifies the blockchain and depends on the blockchain to determine its validity.\nAn off-chain transaction relies on other methods to record and validate the transaction.")])]),e("details",{attrs:{id:"output"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Output")])]),t._v(" "),e("p",[t._v("Output, transaction output, or TxOut is an output in a Bitcoin transaction which contains two fields: a value field for transferring zero or more satoshis and a pubkey script for indicating what conditions must be fulfilled for those satoshis to be further spent.")])]),e("details",{attrs:{id:"p2pkh"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#p2pkh","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("P2PKH")])]),t._v(" "),e("p",[t._v("Many transactions processed on the Bitcoin network spend outputs locked with a Pay-to-Public-Key-Hash or "),e("code",[t._v("P2PKH")]),t._v(" script.\nThese outputs contain a locking script that locks the output to a public key hash, more commonly known as a Bitcoin address.\nAn output locked by a P2PKH script can be unlocked (spent) by presenting a public key and a digital signature created by the corresponding private key.")])]),e("details",{attrs:{id:"p2sh"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#p2sh","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("P2SH")])]),t._v(" "),e("p",[t._v("P2SH or Pay-to-Script-Hash is a type of transaction that simplifies the use of complex transaction scripts.\nWith P2SH the complex script that details the spending conditions (redeem script) is committed to with a hash in the locking script.")])]),e("details",{attrs:{id:"p2wpkh"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#p2wpkh","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("P2WPKH")])]),t._v(" "),e("p",[t._v("The signature of a P2WPKH (Pay-to-Witness-Public-Key-Hash) contains the same information as a P2PKH spending, but is located in the witness field instead of the scriptSig field.")])]),e("details",{attrs:{id:"paper-wallet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#paper-wallet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Paper Wallet")])]),t._v(" "),e("p",[t._v("In the most specific sense, a paper wallet is a document containing all the secrets to spend a Bitcoin UTXO.\nIt is a way of storing bitcoin offline as a physical document.")])]),e("details",{attrs:{id:"partially-signed-bitcoin-transaction-psbt"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#partially-signed-bitcoin-transaction-psbt","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Partially Signed Bitcoin Transaction (PSBT)")])]),t._v(" "),e("p",[t._v("PSBT is a binary transaction format which contains the information necessary for a signer to produce signatures for the transaction and holds the signatures for an input while the input does not have a complete set of signatures.\nThe signer can be offline as all necessary information will be provided in the transaction.\nRead more: "),e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 174 Partially Signed Bitcoin Transaction Format"),e("OutboundLink")],1)])]),e("details",{attrs:{id:"pay-to-witness-public-key-hash-p2wpkh"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#pay-to-witness-public-key-hash-p2wpkh","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Pay-to-Witness-Public-Key-Hash (P2WPKH)")])]),t._v(" "),e("p",[t._v("The signature of a P2WPKH contains the same information as a Pay-to-Public-Key-Hash (P2PKH) spending, but is located in the witness field instead of the scriptSig field.\nThe scriptPubKey is also modified.\nRead more: "),e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 84 derivation scheme for P2WPKH based accounts"),e("OutboundLink")],1)])]),e("details",{attrs:{id:"payment-channels"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#payment-channels","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Payment Channels")])]),t._v(" "),e("p",[t._v("A payment channel is class of techniques designed to allow users to make multiple Bitcoin transactions without committing all of the transactions to the Bitcoin blockchain.\nIn a typical payment channel, only two transactions are added to the blockchain, one funding and one closing transaction, but a nearly unlimited number of payments can be made between the participants.")])]),e("details",{attrs:{id:"plausible-deniability"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#plausible-deniability","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Plausible deniability")])]),t._v(" "),e("p",[t._v("Plausible deniability is the ability to deny knowledge of or responsibility for any damnable actions committed by others in an organizational hierarchy because of a lack of evidence that can confirm their participation, even if they were personally involved in or at least willfully ignorant of the actions.")])]),e("details",{attrs:{id:"private-key"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#private-key","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Private Key")])]),t._v(" "),e("p",[t._v("A private key is a large number that must be chosen at random, it is thus a very secure password and should be kept secret.\nWith knowledge of this number, anyone can easily compute the public key, and a signature over any message.\nIt can also be used to decrypt any message that was encrypted to the public key corresponding to the private key.\nIn Bitcoin, a signature over a valid transaction message gives the right to spend a coin, thus knowledge of the private key corresponds to ownership of the bitcoin.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[t._v("Bitcoin private keys")])],1)]),e("details",{attrs:{id:"proof-of-work-pow"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-work-pow","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Proof of Work (POW)")])]),t._v(" "),e("p",[t._v("One of the requirements for a Bitcoin block to be valid is its hash should be below a certain difficulty target.\nIn order to create a valid block, a miner must repeatedly hash a candidate block with a changing nonce until by sheer luck he finds a hash with low value.\nBy providing this pre-image block, anyone can verify the amount of computational energy that a miner on average should have invested in order to find this block, and this is what is known as Proof of Work.")])]),e("details",{attrs:{id:"public-key"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#public-key","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Public Key")])]),t._v(" "),e("p",[t._v("A public key is calculated by multiplying the private key to the generator point of an elliptic curve.\nGiven only the public key, the private key cannot be calculated.\nAnyone can encrypt a message using a public key.\nThis encrypted message (cyphertext) can only be decrypted through the related private key.\nGiven a public key and a signature over a message, anyone can verify that the signer had the private key and the message.\nIn Bitcoin, the public key is the pseudonymous identity of the owner of a coin.\nRead more: "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[t._v("Bitcoin private keys")])],1)]),e("details",{attrs:{id:"regtest"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#regtest","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Regtest")])]),t._v(" "),e("p",[t._v("A local testing environment in which developers can instantly generate blocks on demand for testing events, and can create private satoshis with no real-world value.")])]),e("details",{attrs:{id:"replace-by-fee-rbf"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#replace-by-fee-rbf","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Replace by Fee (RBF)")])]),t._v(" "),e("p",[t._v("Replacing one version of an unconfirmed transaction with a different version of the transaction that pays a higher transaction fee.")])]),e("details",{attrs:{id:"satoshi-sat"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#satoshi-sat","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("satoshi (sat)")])]),t._v(" "),e("p",[t._v("A satoshi is the smallest denomination of bitcoin that can be recorded on the blockchain.\nIt is the equivalent of 0.00000001 bitcoin and is named after the creator of Bitcoin, Satoshi Nakamoto.")])]),e("details",{attrs:{id:"satoshi-nakamoto"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#satoshi-nakamoto","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Satoshi Nakamoto")])]),t._v(" "),e("p",[t._v("Satoshi Nakamoto is the name used by the person or group of people who designed Bitcoin and created its original reference implementation.\nAs a part of the implementation, they also devised the first blockchain database.\nIn the process they were the first to solve the double-spending problem for digital currency in a decentralized and self verifying nature.\nTheir real identity remains unknown.")])]),e("details",{attrs:{id:"schnorr-digital-signature-scheme"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#schnorr-digital-signature-scheme","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Schnorr Digital Signature Scheme")])]),t._v(" "),e("p",[t._v("Schnorr Digital Signature Scheme is one of the digital signature algorithms used by Bitcoin to ensure that funds can only be spent by their rightful owners.\nSchnorr signatures and public keys can be aggregated, meaning that multiple parties with unique private keys can sign the same message, which can be verified in batches instead of individually.")])]),e("details",{attrs:{id:"script"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#script","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Script")])]),t._v(" "),e("p",[t._v("Bitcoin uses a scripting system for transactions.\nForth-like, Script is simple, stack-based and processed from left to right.\nIt is purposefully not Turing-complete, with no loops.")])]),e("details",{attrs:{id:"scriptpubkey"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#scriptpubkey","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("ScriptPubKey")])]),t._v(" "),e("p",[t._v("ScriptPubKey or pubkey script, is a script included in outputs which sets the conditions that must be fulfilled for those satoshis to be spent.\nData for fulfilling the conditions can be provided in a signature script.")])]),e("details",{attrs:{id:"scriptsig"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#scriptsig","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("ScriptSig")])]),t._v(" "),e("p",[t._v("ScriptSig or signature script, is the data generated by a spender which is almost always used as variables to satisfy a pubkey script.")])]),e("details",{attrs:{id:"segregated-witness-segwit"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#segregated-witness-segwit","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Segregated Witness (SegWit)")])]),t._v(" "),e("p",[t._v("Segregated Witness is a structure where the witness [signature or redeem script] is stored separately from the transaction Merkle tree.\nThis is separated because the witness contains only data concerning transaction validity, but not about transaction effect.\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#why-does-wasabi-only-use-segwit-bech32-addresses"}},[t._v("Why Wasabi uses only SegWit")])],1)]),e("details",{attrs:{id:"simplified-payment-verification-spv"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#simplified-payment-verification-spv","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Simplified Payment Verification (SPV)")])]),t._v(" "),e("p",[t._v("SPV is a method for verifying particular transactions were included in a block without downloading the entire block.\nThe method is used by some lightweight Bitcoin clients.")])]),e("details",{attrs:{id:"soft-fork"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#soft-fork","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Soft Fork")])]),t._v(" "),e("p",[t._v("A soft fork is a change to the Bitcoin consensus rules that is backwards compatible.\nUsers of this update do not break the rules of legacy users, but rather restrict themselves to a more narrow rule set.")])]),e("details",{attrs:{id:"taproot"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#taproot","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Taproot")])]),t._v(" "),e("p",[t._v("Taproot is an upgrade to Bitcoin which introduces several new features.\nTaproot integrates the Schnorr digital signature scheme into Bitcoin, upgrading Bitcoin’s core cryptography.\nTaproot builds on the SegWit upgrade to improve Bitcoin’s privacy and lower transaction fees.\nTaproot makes future Bitcoin upgrades easier by reforming Bitcoin’s scripting language.")])]),e("details",{attrs:{id:"testnet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#testnet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Testnet")])]),t._v(" "),e("p",[t._v("A testing environment in which users can obtain and spend satoshis that have no real-world value on a global network that is very similar to the Bitcoin mainnet.")])]),e("details",{attrs:{id:"timechain"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#timechain","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Timechain")])]),t._v(" "),e("p",[t._v("Timechain is a synonym of "),e("RouterLink",{attrs:{to:"/glossary/Glossary-GeneralBitcoin.html#blockchain"}},[t._v("blockchain")]),t._v(".\nIt emphasizes the achievement of the Bitcoin protocol to establish consensus on the temporal order of transactions so to prevent double-spends.")],1)]),e("details",{attrs:{id:"transaction"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Transaction")])]),t._v(" "),e("p",[t._v("In simple terms, a transfer of bitcoin.\nMore precisely, a transaction is a signed data structure expressing a transfer of value and consisting mainly of inputs and outputs.\nTransactions are transmitted over the Bitcoin network, collected by miners, and included into blocks, made permanent on the blockchain.")])]),e("details",{attrs:{id:"transaction-fees"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-fees","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Transaction Fees")])]),t._v(" "),e("p",[t._v("A transaction has a fee payment to the miner who includes the transaction in a valid block.\nIt is implied by the difference of "),e("code",[t._v("inputs - outputs")]),t._v(".\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-fee-should-i-select"}},[t._v("What fee should I select?")])],1)]),e("details",{attrs:{id:"unspent-transaction-output-utxo"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#unspent-transaction-output-utxo","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Unspent Transaction Output (UTXO)")])]),t._v(" "),e("p",[t._v("UTXO is an unspent transaction output that can be spent as an input in a new transaction.\nRead more: "),e("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-select-utxos-for-coinjoin"}},[t._v("How can I select UTXOs for CoinJoin?")])],1)]),e("details",{attrs:{id:"wallet"}},[e("summary",[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("h4",[t._v("Wallet")])]),t._v(" "),e("p",[t._v("Software that holds all your Bitcoin addresses and secret keys.\nUse it to send, receive, and store your bitcoin.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);