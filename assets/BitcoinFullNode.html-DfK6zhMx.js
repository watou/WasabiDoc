import{a as r,_ as c}from"./SettingsBitcoinCore-DgSldI_2.js";import{_ as d,r as l,o as u,c as h,a as e,d as n,w as i,b as o,e as f}from"./app-DNOGlxyx.js";const b={},y=e("h1",{id:"bitcoin-full-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bitcoin-full-node"},[e("span",null,"Bitcoin Full Node")])],-1),p={class:"table-of-contents"},g=e("h2",{id:"the-importance-of-running-a-full-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-importance-of-running-a-full-node"},[e("span",null,"The importance of running a full node")])],-1),w=e("p",null,"When running a Bitcoin full node, you define the precise monetary rules that you voluntarily agree on. Nobody else forces this choice upon you. Thus any sovereign individual who wants to claim financial independence must run a full node. Once your own rules are firmly established, your software discovers other nodes in the Bitcoin peer-to-peer network which do not break your rules. These peers send you transactions and blocks which are valid according to their set of rules, and you verify for yourself if they are also correct for you. If one of the proposed transactions breaks your own rules, then you mark it as invalid, disconnect from and ban the node who sent you the malicious transaction.",-1),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Claim your monetary sovereignty"),e("p",null,"With your full node you define, verify, and enforce the rules of your sound money Bitcoin.")],-1),_=e("p",null,"Only by running a full node, do you verify by yourself that the money you receive is actually valid bitcoin. You do not trust an external third party, and thus you also do not leak any sensitive financial information.",-1),v={href:"https://bitcoincore.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://bitcoinknots.org/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://libbitcoin.info/",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"how-does-wasabi-use-your-bitcoin-full-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-does-wasabi-use-your-bitcoin-full-node"},[e("span",null,"How does Wasabi use your Bitcoin full node")])],-1),x={href:"https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki",target:"_blank",rel:"noopener noreferrer"},T=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"Work in progress"),e("p",null,[o("The Wasabi backend has to be trusted to serve correct filters. This current work in progress integration "),e("strong",null,"does not"),o(" verify consensus within Wasabi.")])],-1),N=e("code",null,"smartfee",-1),P=e("p",null,"The future goal is that the local full node (Knots) is used to generate the BIP 158 block filters from the verified blocks. Only then is there full verification, and no trust in the Wasabi backend server.",-1),I=e("h2",{id:"bitcoind-within-wasabi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bitcoind-within-wasabi"},[e("span",null,"bitcoind within Wasabi")])],-1),U={href:"https://bitcoinknots.org",target:"_blank",rel:"noopener noreferrer"},F=f('<p><img src="'+r+'" alt="Wasabi Wallet Bitcoin Knots full node integration" title="Wasabi Wallet Bitcoin Knots full node integration"></p><h2 id="using-an-already-existing-local-bitcoin-full-node" tabindex="-1"><a class="header-anchor" href="#using-an-already-existing-local-bitcoin-full-node"><span>Using an already existing local Bitcoin full node</span></a></h2><p>If you have a Bitcoin full node already pre-installed on the same computer you use to run Wasabi Wallet, then Wasabi will use your node by default. You do not need to change anything in the settings, it should work plug and play. This is especially useful to save on bandwidth, as you have already downloaded and verified a block with your full node, so you don&#39;t need to download it again with Wasabi.</p><h2 id="using-an-already-existing-remote-bitcoin-full-node" tabindex="-1"><a class="header-anchor" href="#using-an-already-existing-remote-bitcoin-full-node"><span>Using an already existing remote Bitcoin full node</span></a></h2><p>If you have a Bitcoin full node already on a remote computer, then Wasabi Wallet can use this too. In the Bitcoin settings, specify the local IP address and port or the Tor onion service of your full node.</p><p><img src="'+c+'" alt="Wasabi Wallet remote Bitcoin P2P full node endpoint" title="Wasabi Wallet remote Bitcoin P2P full node endpoint"></p><h2 id="verify-that-wasabi-is-connected-to-your-full-node" tabindex="-1"><a class="header-anchor" href="#verify-that-wasabi-is-connected-to-your-full-node"><span>Verify that Wasabi is connected to your full node</span></a></h2><p>There are two ways to confirm that your Wasabi client is connected to your own full node.</p><p>First, in the Wasabi logs. Once you receive a transaction Wasabi downloads the block containing that transaction from your node, and in the logs you should see: <code>Block {hash} acquired from node &#39;{node}&#39;.</code></p><p>Second, by checking the connected peers inside your full node. Wasabi will show up as one of the connected peers while it is downloading a block. You can check this in the Bitcoin Core / Knots GUI by clicking on <code>Window -&gt; Peers</code>. During the period when Wasabi is fetching a block, it will show up in the <code>User Agent</code> column. Alternatively, you can use the Bitcoin RPC call <code>bitcoin-cli getpeerinfo</code> and see the Wasabi client listed.</p>',10);function C(K,V){const t=l("router-link"),a=l("ExternalLinkIcon"),s=l("RouteLink");return u(),h("div",null,[y,e("nav",p,[e("ul",null,[e("li",null,[n(t,{to:"#the-importance-of-running-a-full-node"},{default:i(()=>[o("The importance of running a full node")]),_:1})]),e("li",null,[n(t,{to:"#how-does-wasabi-use-your-bitcoin-full-node"},{default:i(()=>[o("How does Wasabi use your Bitcoin full node")]),_:1})]),e("li",null,[n(t,{to:"#bitcoind-within-wasabi"},{default:i(()=>[o("bitcoind within Wasabi")]),_:1})]),e("li",null,[n(t,{to:"#using-an-already-existing-local-bitcoin-full-node"},{default:i(()=>[o("Using an already existing local Bitcoin full node")]),_:1})]),e("li",null,[n(t,{to:"#using-an-already-existing-remote-bitcoin-full-node"},{default:i(()=>[o("Using an already existing remote Bitcoin full node")]),_:1})]),e("li",null,[n(t,{to:"#verify-that-wasabi-is-connected-to-your-full-node"},{default:i(()=>[o("Verify that Wasabi is connected to your full node")]),_:1})])])]),g,w,m,_,e("p",null,[o("There are several software implementations that function as a full node, for example, "),e("a",v,[o("Bitcoin Core"),n(a)]),o(", "),e("a",k,[o("Bitcoin Knots"),n(a)]),o(", or "),e("a",W,[o("LibBitcoin"),n(a)]),o(".")]),B,e("p",null,[o("Wasabi currently has a work in progress partial Bitcoin Knots integration. As of now, the Wasabi backend server broadcasts "),e("a",x,[o("BIP 158 block filters"),n(a)]),o(" to all Wasabi clients, who locally check if the filter hits for their public keys. Then you know that this block has a transaction of yours included, or maybe it is a false positive.")]),T,e("p",null,[o("If a full node is connected to Wasabi, then the relevant block is fetched from this trusted node, and not from a random P2P node. Wasabi also queries if your local mempool has unconfirmed transactions that are of interest to you. Further, your full node is used to estimate the current mining fee level based on the bitcoind "),N,o(" algorithm. Your full node is not used to broadcast your transactions, as this is done through a random peer-to-peer node with a new tor identity, which is better for your "),n(s,{to:"/why-wasabi/NetworkLevelPrivacy.html"},{default:i(()=>[o("network-level privacy")]),_:1}),o(".")]),P,I,e("p",null,[o("Wasabi Wallet ships with "),e("a",U,[o("Bitcoin Knots"),n(a)]),o(". This means that every Wasabi client has the necessary software to run a Bitcoin full node and define, verify, and enforce monetary consensus with bitcoind, but this verification is not yet used within Wasabi itself, it is a work in progress. By default, bitcoind is not started together with Wasabi. This must be activated explicitly in the settings because this is a bandwidth, CPU and storage-intensive program. It is optional to keep bitcoind running even after Wasabi Wallet is shut down, so as to verify blocks as soon as they are received.")]),F])}const R=d(b,[["render",C],["__file","BitcoinFullNode.html.vue"]]),S=JSON.parse('{"path":"/using-wasabi/BitcoinFullNode.html","title":"Bitcoin Full Node","lang":"en-US","frontmatter":{"title":"Bitcoin Full Node","description":"Information and step-by-step guides on how to use your own Bitcoin Core full node together with Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"The importance of running a full node","slug":"the-importance-of-running-a-full-node","link":"#the-importance-of-running-a-full-node","children":[]},{"level":2,"title":"How does Wasabi use your Bitcoin full node","slug":"how-does-wasabi-use-your-bitcoin-full-node","link":"#how-does-wasabi-use-your-bitcoin-full-node","children":[]},{"level":2,"title":"bitcoind within Wasabi","slug":"bitcoind-within-wasabi","link":"#bitcoind-within-wasabi","children":[]},{"level":2,"title":"Using an already existing local Bitcoin full node","slug":"using-an-already-existing-local-bitcoin-full-node","link":"#using-an-already-existing-local-bitcoin-full-node","children":[]},{"level":2,"title":"Using an already existing remote Bitcoin full node","slug":"using-an-already-existing-remote-bitcoin-full-node","link":"#using-an-already-existing-remote-bitcoin-full-node","children":[]},{"level":2,"title":"Verify that Wasabi is connected to your full node","slug":"verify-that-wasabi-is-connected-to-your-full-node","link":"#verify-that-wasabi-is-connected-to-your-full-node","children":[]}],"git":{"updatedTime":1720428647000},"filePathRelative":"using-wasabi/BitcoinFullNode.md"}');export{R as comp,S as data};
