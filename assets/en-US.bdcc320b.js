import{_ as d,p as o,f as n,h as l,M as e,q as c,S as r,at as s,P as t}from"./vue-router.esm-bundler.42d3c0c2.js";const h={components:{}},i={class:"varlet-site-doc"},p=s('<h1>Menu</h1><div class="card"><h3>Intro</h3><p>Enable elements to display a menu when clicked, freely control the display position of the menu by controlling the alignment and offset of the menu.</p></div><div class="card"><h3>Attention</h3><p>Menu is an <code>inline block</code> element. When you click through the default slot, the menu will be displayed. If you want menu to monopolize a line, it is recommended to package a <code>block</code> element Menu is automatically closed in the area beyond the scope of the component, so you can\u2019t use the same state to bind <code>v-model:show</code>. Otherwise, when the display is triggered, other menu pairs are also triggered Menu cannot be displayed due to the modification of <code>v-model:show</code>.</p></div>',3),m={class:"card"},g=e("h3",null,"\u6CE8\u518C\u4E8B\u4EF6",-1),u=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"script"),t(),e("span",{class:"hljs-attr"},"setup"),t(">")]),e("span",{class:"javascript"},[t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@varlet/ui'"),t(`
  
`),e("span",{class:"hljs-keyword"},"const"),t(" show = ref("),e("span",{class:"hljs-literal"},"false"),t(`)
`)]),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-menu"),t(`
    `),e("span",{class:"hljs-attr"},"v-model:show"),t("="),e("span",{class:"hljs-string"},'"show"'),t(`
    @`),e("span",{class:"hljs-attr"},"open"),t("="),e("span",{class:"hljs-string"},`"() => Snackbar.info('open')"`),t(`
    @`),e("span",{class:"hljs-attr"},"opened"),t("="),e("span",{class:"hljs-string"},`"() => Snackbar.success('opened')"`),t(`
    @`),e("span",{class:"hljs-attr"},"close"),t("="),e("span",{class:"hljs-string"},`"() => Snackbar.warning('close')"`),t(`
    @`),e("span",{class:"hljs-attr"},"closed"),t("="),e("span",{class:"hljs-string"},`"() => Snackbar.error('closed')"`),t(`
  >`)]),t(`
    `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-button"),t(),e("span",{class:"hljs-attr"},"type"),t("="),e("span",{class:"hljs-string"},'"primary"'),t(" @"),e("span",{class:"hljs-attr"},"click"),t("="),e("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Events"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-button"),t(">")]),t(`

    `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"template"),t(" #"),e("span",{class:"hljs-attr"},"menu"),t(">")]),t(`
      `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"div"),t(),e("span",{class:"hljs-attr"},"class"),t("="),e("span",{class:"hljs-string"},'"menu-example-cell-list"'),t(">")]),t(`
        `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Menu Option"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
        `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Menu Option"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
        `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Menu Option"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"div"),t(">")]),t(`
    `),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-menu"),t(">")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"style"),t(">")]),e("span",{class:"css"},[t(`
`),e("span",{class:"hljs-selector-class"},".menu-example-cell-list"),t(` {
  `),e("span",{class:"hljs-attribute"},"background"),t(": "),e("span",{class:"hljs-number"},"#fff"),t(`;
}
`)]),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"style"),t(">")]),t(`
`)])],-1),j=s('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the menu</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>alignment</code></td><td>The alignment of the menu, The optional value is\u2019 <code>top</code> <code>bottom</code>, the origin is the top left corner of the default slot,top is the top of the menu to align the origin,bottom is the bottom of the menu to align the origin</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>offset x, Relative to the aligned position of the menu</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>offset y, Relative to the aligned position of the menu</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Menu to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>menu trigger method, optional value is <code>click</code> <code>hover</code>, <code>click</code> is triggered when clicked, <code>hover</code> is triggered when hovered</td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>placement</code></td><td>menu display position, please refer to <a href="https://popper.js.org/docs/v2/">popper documentation</a></td><td><em>string: cover-top | cover-top-start | cover-top-end | cover-bottom | cover-bottom-start | cover-bottom-end | cover-left | cover-right</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>defaultStyle</code></td><td>whether to enable default styles</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>You can call this method to redraw when a default slot element changes position size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when close-animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>The trigger element associated with the menu</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>Menu content</td><td><code>-</code></td></tr></tbody></table></div>',5);function v(f,b,y,w,_,k){const a=o("var-site-code-example");return n(),l("div",i,[p,e("div",m,[g,c(a,null,{default:r(()=>[u]),_:1})]),j])}const x=d(h,[["render",v]]);export{x as default};
