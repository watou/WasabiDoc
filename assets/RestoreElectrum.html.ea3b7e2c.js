import{_ as r,r as i,o as s,c,a as e,b as t,d as a,w as n,e as d}from"./app.a6409f0d.js";const u={},p=e("h1",{id:"restoring-wasabi-wallet-in-electrum",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#restoring-wasabi-wallet-in-electrum","aria-hidden":"true"},"#"),t(" Restoring Wasabi Wallet in Electrum")],-1),m={class:"custom-container danger"},h=e("p",{class:"custom-container-title"},"Potential privacy leak!",-1),v=e("p",null,"If you do not run your own Electrum server, you will leak all your addresses to random third-party servers, losing anonymity against those entities, so you must make a judgement call by being aware of this.",-1),b={href:"https://github.com/chris-belcher/electrum-personal-server",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/kyuupichan/electrumx",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/romanz/electrs",target:"_blank",rel:"noopener noreferrer"},w={class:"custom-container warning"},_=e("p",{class:"custom-container-title"},"Electrum does currently not support Taproot",-1),f={href:"https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.3",target:"_blank",rel:"noopener noreferrer"},x={class:"table-of-contents"},k=d(`<h2 id="restoring-wasabi-wallet-via-electrum-gui" tabindex="-1"><a class="header-anchor" href="#restoring-wasabi-wallet-via-electrum-gui" aria-hidden="true">#</a> Restoring Wasabi Wallet via Electrum GUI</h2><ol><li><p>Launch Electrum.</p><p>If you don&#39;t have a wallet created on Electrum it should automatically display an Install Wizard. If it opens your default wallet then go to <code>File</code> -&gt; <code>New/Restore</code>.</p></li><li><p>Name your new Electrum wallet.</p></li><li><p>Choose <code>Standard wallet</code>.</p></li><li><p>Choose <code>I already have a seed</code> or <code>Use a master key</code>.</p></li><li><p>Type your seed or paste your master private key.</p><div class="custom-container tip"><p class="custom-container-title">Get your master private key inside Wasabi:</p><ul><li>Go to <code>Wallet Info</code>.</li><li>Copy your <code>Extended Account Private Key zprv</code>.</li></ul></div></li></ol><p>The next steps are only necessary if you have previously chosen the option <code>I already have a seed</code>.</p><ol start="6"><li><p>Click the <code>Options</code> button, then check <code>BIP39 seed</code> and if you created your Wasabi wallet with a password make sure to check <code>Extend this seed with custom words</code> and type your password in the <code>Seed extension</code> window.</p></li><li><p>On <code>Script type and Derivation path</code> window, choose <code>native SegWit (p2wpkh)</code> or manually insert <code>m/84&#39;/0&#39;/0&#39;</code>.</p></li><li><p>Increase the gap limits by opening Electrum&#39;s <code>Console</code> and executing the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wallet.change_gap_limit(100)
wallet.gap_limit_for_change = 100
wallet.synchronize()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="restoring-wasabi-wallet-manually-by-creating-a-new-wallet-file" tabindex="-1"><a class="header-anchor" href="#restoring-wasabi-wallet-manually-by-creating-a-new-wallet-file" aria-hidden="true">#</a> Restoring Wasabi Wallet manually by creating a new wallet file</h2><ol><li><p>Create a new empty text file, this will be your Electrum wallet file.</p></li><li><p>Paste the following code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;keystore&quot;: {
        &quot;type&quot;: &quot;bip32&quot;,
        &quot;xprv&quot;: &quot;vprv9DMUxX4ShgxMLku9TWoPTTt3ZKYhAHCuhULnR9Qmkv1naNQ4g1HfdURhfq65aJKk7zsmnoXbVryeLwtkj9LhuQoKFD5Fyus9kkiwA1S2pEU&quot;,
        &quot;xpub&quot;: &quot;vpub5ZPNxAuehdRrMpX7vQSQzAshpziQUZHnDkzPBZJ4GFbhn8mVxoyxJzCGq482a2BDHvfnMfX1u4hdX1XfS7ZdHJXffydLPHjCXBY86sG6tE1&quot;
    },
    &quot;seed_type&quot;: &quot;bip39&quot;,
    &quot;seed_version&quot;: 18,
    &quot;use_encryption&quot;: false,
    &quot;wallet_type&quot;: &quot;standard&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Replace <code>xprv</code> and <code>xpub</code> sections with your Wasabi wallet&#39;s <code>Extended Account Private Key zprv</code> and <code>Extended Account zpub</code>.</p><div class="custom-container tip"><p class="custom-container-title">Get your master private and public keys inside Wasabi:</p><ul><li>Go to <code>Wallet Info</code>.</li><li>Copy your <code>Extended Account Private Key zprv</code>.</li><li>Copy your <code>Extended Account zpub</code>.</li></ul></div></li><li><p>Open the wallet file you created in Electrum.</p></li><li><p>Increase the gap limits by opening Electrum&#39;s <code>Console</code> and executing the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wallet.change_gap_limit(100)
wallet.gap_limit_for_change = 100
wallet.synchronize()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6);function E(q,W){const o=i("ExternalLinkIcon"),l=i("router-link");return s(),c("div",null,[p,e("div",m,[h,v,e("p",null,[t("To gain some privacy by using Electrum you should set up Tor on Network preferences or by installing your own Electrum server via "),e("a",b,[t("Electrum Personal Server"),a(o)]),t(", "),e("a",y,[t("ElectrumX"),a(o)]),t(" or "),e("a",g,[t("Electrs"),a(o)]),t(".")])]),e("div",w,[_,e("p",null,[t("As of Wasabi "),e("a",f,[t("version 2.0.3"),a(o)]),t(", users may receive Taproot outputs from coinjoin or as a change output from a normal transaction. So when recovering a wallet from Wasabi in Electrum some funds might be missing, as the Taproot (SegWit v1) coins are not shown. An other wallet that does support Taproot should be used for recovering Taproot coins.")])]),e("nav",x,[e("ul",null,[e("li",null,[a(l,{to:"#restoring-wasabi-wallet-via-electrum-gui"},{default:n(()=>[t("Restoring Wasabi Wallet via Electrum GUI")]),_:1})]),e("li",null,[a(l,{to:"#restoring-wasabi-wallet-manually-by-creating-a-new-wallet-file"},{default:n(()=>[t("Restoring Wasabi Wallet manually by creating a new wallet file")]),_:1})])])]),k])}const C=r(u,[["render",E],["__file","RestoreElectrum.html.vue"]]);export{C as default};
