import{_ as r,p as c,f as n,h as d,M as a,q as e,S as l,P as s,aq as o}from"./vue-router.esm-bundler.fb287e3c.js";const h={components:{}},p={class:"varlet-site-doc"},m=a("h1",null,"Breadcrumb",-1),b=a("div",{class:"card"},[a("h3",null,"Introduce"),a("p",null,"Displays the location of the current page, making it easier to browser back.")],-1),j={class:"card"},i=a("h3",null,"Basic Usage",-1),u=a("p",null,[s("In "),a("code",null,"var-breadcrumbs"),s(" , each "),a("code",null,"var-breadcrumb"),s(" is a tag that stands for every level starting from homepage.")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},":to"),s("="),a("span",{class:"hljs-string"},`"{ path: '/'}"`),s(">")]),s("Homepage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Second Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Third Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},_=a("h3",null,"Separator",-1),f=a("p",null,[s("This component has a "),a("code",null,"String"),s(" attribute "),a("code",null,"separator"),s(", and it determines the separator. Its default value is "),a("code",null,"/"),s(".")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"\\"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},":to"),s("="),a("span",{class:"hljs-string"},`"{ path: '/' }"`),s(">")]),s("Homepage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Second Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Third Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},x=a("h3",null,"Each Level Separator",-1),L=a("p",null,[s("Each level separator can be set separately\uFF0C"),a("code",null,"var-breadcrumb"),s(" has a "),a("code",null,"String"),s(" attribute "),a("code",null,"separator"),s(", and it determines the separator. Its default value is "),a("code",null,"separator"),s(" in "),a("code",null,"var-breadcrumbs"),s(".")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"\\"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},":to"),s("="),a("span",{class:"hljs-string"},`"{ path: '/' }"`),s(">")]),s("Homepage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"~"'),s(">")]),s("Second Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Third Level"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},T=a("h3",null,"Separator Slot",-1),B=a("p",null,[s("Set the slot to use custom content as the separator, it will cover "),a("code",null,"separator"),s(".")],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},":to"),s("="),a("span",{class:"hljs-string"},`"{ path: '/' }"`),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-right"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    Homepage
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-right"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    Second Level
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-right"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    Third Level
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`)])],-1),N=o('<h2>API</h2><div class="card"><h3>Props</h3><h4>Breadcrumbs Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>separator</code></td><td>separator character</td><td><em>string</em></td><td><code>/</code></td></tr></tbody></table><h4>breadcrumb Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>separator</code></td><td>separator character</td><td><em>string</em></td><td><code>/</code></td></tr><tr><td><code>to</code></td><td>target route of the link, same as <code>to</code> of <code>vue-router</code></td><td><em>string</em> / <em>RouteLocationRow</em></td><td><code>&#39;&#39;</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Breadcrumbs Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>customize default content</td><td><code>-</code></td></tr></tbody></table><h4>breadcrumb Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>customize default content</td><td><code>-</code></td></tr><tr><td><code>separator</code></td><td>customize separator content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>breadcrumb Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--breadcrumb-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--breadcrumb-active-hover-color</code></td><td><code>#233dd2</code></td></tr><tr><td><code>--breadcrumb-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--breadcrumb-separator-margin</code></td><td><code>0 6px</code></td></tr><tr><td><code>---breadcrumb-separator-font-size</code></td><td><code>14px</code></td></tr></tbody></table></div>',4);function k(z,H,I,w,$,C){const t=c("var-site-code-example");return n(),d("div",p,[m,b,a("div",j,[i,u,e(t,null,{default:l(()=>[v]),_:1})]),a("div",g,[_,f,e(t,null,{default:l(()=>[S]),_:1})]),a("div",y,[x,L,e(t,null,{default:l(()=>[P]),_:1})]),a("div",D,[T,B,e(t,null,{default:l(()=>[V]),_:1})]),N])}const U=r(h,[["render",k]]);export{U as default};
