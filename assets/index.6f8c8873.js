import{I as c}from"./index.b1a92e1f.js";import{R as C}from"./index.ebf8ba42.js";import{S as _}from"./index.1577413a.js";import{A as t}from"./AppType.b3af8291.js";import{C as S}from"./clipboard.4312f935.js";import{d as F}from"./index.5d153c96.js";import{u as z,a as b,_ as B,b as I,c as N}from"./en-US.2ec95554.js";import{a as E,b as A}from"./utils.98d16bca.js";import{_ as L,r as D,a as k,e as U,h as d,i as h,x as o,ag as e,P as l,p as g,F as x,ad as $,M as r,N as n,k as T,K as j}from"./elevation.0a6066f5.js";import"./components.c8d2cf33.js";import"./elements.50c32b0e.js";import"./index.15cd2419.js";/* empty css               */import"./index.90eb3963.js";import"./zIndex.06096df9.js";import"./lock.d9bc77cf.js";var M=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json"],V={iconSize:"\u56FE\u6807\u5C3A\u5BF8",iconColor:"\u56FE\u6807\u989C\u8272",useImage:"\u4F7F\u7528\u56FE\u7247",events:"\u6CE8\u518C\u4E8B\u4EF6",iconAnimation:"\u56FE\u6807\u5207\u6362\u52A8\u753B (\u70B9\u51FB\u5207\u6362)",toggle:"\u5207\u6362",iconList:"\u56FE\u6807\u5217\u8868 (\u70B9\u51FB\u590D\u5236)",copySuccess:"\u590D\u5236\u6210\u529F",clickSuccess:"\u70B9\u51FB\u6210\u529F"},R={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"};const{add:v,use:q,pack:a,packs:ue,merge:me}=z(),K=u=>{N(u),q(u)};b("zh-CN",B);b("en-US",I);v("zh-CN",V);v("en-US",R);const P={class:"icon-example__icons"},G=["data-clipboard-text"],H={class:"icon-example__icon-name"},J={setup(u){const w=D(M),m=k("information"),f=k("#fff"),y=()=>{m.value=m.value==="information"?"checkbox-marked-circle":"information"};return U(()=>{new S(".icon-example__icon",{text:i=>`<var-icon name="${i.getAttribute("data-clipboard-text")}" />`}).on("success",i=>{_.success(`${i.text}${a.value.copySuccess}!`)})}),E(K),A(F,p=>{f.value=p==="darkThemes"?"#303030":"#fff"}),(p,i)=>(d(),h(x,null,[o(e(t),null,{default:l(()=>[r(n(e(a).iconSize),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(t),null,{default:l(()=>[r(n(e(a).iconColor),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",size:26}),o(e(t),null,{default:l(()=>[r(n(e(a).useImage),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"https://varlet-varletjs.vercel.app/cat.jpg",size:32}),o(e(t),null,{default:l(()=>[r(n(e(a).events),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",onClick:i[0]||(i[0]=()=>e(_).success(e(a).clickSuccess))}),o(e(t),null,{default:l(()=>[r(n(e(a).iconAnimation),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",color:"#2979ff",size:30,transition:300,name:m.value,onClick:y},null,8,["name"]),o(e(t),null,{default:l(()=>[r(n(e(a).iconList),1)]),_:1}),g("div",P,[(d(!0),h(x,null,$(e(w),s=>T((d(),h("div",{class:"icon-example__icon var-elevation--2",style:j({background:f.value}),"data-clipboard-text":s,key:s},[o(e(c),{name:s},null,8,["name"]),g("div",H,n(s),1)],12,G)),[[e(C)]])),128))])],64))}};var pe=L(J,[["__scopeId","data-v-39afa3b3"]]);export{pe as default};
