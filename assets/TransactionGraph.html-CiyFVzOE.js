import{_ as r,r as o,o as c,c as l,a as n,d as t,w as i,b as a,e as h}from"./app-rEpQnwur.js";const u={},d=n("h1",{id:"transaction-graph",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transaction-graph"},[n("span",null,"Transaction Graph")])],-1),p={class:"table-of-contents"},b=h('<h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem"><span>Problem</span></a></h2><h3 id="public-transaction-history" tabindex="-1"><a class="header-anchor" href="#public-transaction-history"><span>Public transaction history</span></a></h3><p>Because of the input and output model of Bitcoin, there is a chain of digital signatures all the way from the coinbase reward to the current UTXO. This transaction history can reveal sensitive information about the spending patterns of individuals. The receiver of a coin can look back into the transaction history of the sender. And the sender can see the future spending of the receiver.</p><h2 id="wasabi-s-solution" tabindex="-1"><a class="header-anchor" href="#wasabi-s-solution"><span>Wasabi&#39;s Solution</span></a></h2><h3 id="wabisabi-coinjoins" tabindex="-1"><a class="header-anchor" href="#wabisabi-coinjoins"><span>WabiSabi coinjoins</span></a></h3>',5),f={href:"https://github.com/WalletWasabi/WabiSabi",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"This means that when sending an anonscore coin, the receiver does not know about the transaction history before the coinjoin. And when the receiver does a coinjoin himself, then the sender cannot spy on the later spending patterns. An outside observer can only guess the correct link at a rate of 1 in the anonscore, for example, 1-in-100, or 1%.",-1);function _(w,y){const e=o("router-link"),s=o("ExternalLinkIcon");return c(),l("div",null,[d,n("nav",p,[n("ul",null,[n("li",null,[t(e,{to:"#problem"},{default:i(()=>[a("Problem")]),_:1}),n("ul",null,[n("li",null,[t(e,{to:"#public-transaction-history"},{default:i(()=>[a("Public transaction history")]),_:1})])])]),n("li",null,[t(e,{to:"#wasabi-s-solution"},{default:i(()=>[a("Wasabi's Solution")]),_:1}),n("ul",null,[n("li",null,[t(e,{to:"#wabisabi-coinjoins"},{default:i(()=>[a("WabiSabi coinjoins")]),_:1})])])])])]),b,n("p",null,[a("In order to obfuscate the link between inputs and outputs, Wasabi uses the "),n("a",f,[a("WabiSabi"),t(s)]),a(" coinjoin protocol. The Wasabi central coordinator cannot steal and cannot spy, it simply helps many peers to build a huge transaction, with many inputs, and many outputs. The non-private inputs can be linked to their previous transaction history. However, the coinjoin outputs with an anonymity score cannot be tied to the inputs.")]),m])}const g=r(u,[["render",_],["__file","TransactionGraph.html.vue"]]),k=JSON.parse(`{"path":"/why-wasabi/TransactionGraph.html","title":"Transaction Graph","lang":"en-US","frontmatter":{"title":"Transaction Graph","description":"On how Bitcoin transactions are interconnected, how this is dangerous for privacy, and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"Problem","slug":"problem","link":"#problem","children":[{"level":3,"title":"Public transaction history","slug":"public-transaction-history","link":"#public-transaction-history","children":[]}]},{"level":2,"title":"Wasabi's Solution","slug":"wasabi-s-solution","link":"#wasabi-s-solution","children":[{"level":3,"title":"WabiSabi coinjoins","slug":"wabisabi-coinjoins","link":"#wabisabi-coinjoins","children":[]}]}],"git":{"updatedTime":1720194849000},"filePathRelative":"why-wasabi/TransactionGraph.md"}`);export{g as comp,k as data};
