import{p as Q,S as Z}from"./index.1b2abbf4.js";import{d as X,a as f,b as l,w as A,o as _,u as x,G as ee,X as te,_ as O,f as I,i as ae,S as oe,M as L,N as H,O as M,R as G,m as ne,aD as ie,ag as se,D as le,h as re}from"./vue-router.esm-bundler.5eeb4635.js";import{p as ce,d as z,u as de,a as ue,c as j,f as T,b as fe,e as ve}from"./components.011f3236.js";import{l as W}from"./shared.f77a40d1.js";import{a as be,c as K,d as me}from"./elements.e0af8b84.js";import{R as pe}from"./index.08cd40ac.js";function R(e){return["horizontal","vertical"].includes(e)}const ye={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:R},itemDirection:{type:String,default:"horizontal",validator:R},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},offsetTop:ce(Q,"offsetTop"),onClick:z(),onChange:z(),"onUpdate:active":z()},q=Symbol("TABS_BIND_TAB_KEY"),F=Symbol("TABS_COUNT_TAB_KEY");function Ce(){const{childProviders:e,bindChildren:o}=ue(q),{length:i}=de(F);return{length:i,tabList:e,bindTabList:o}}const{n:he,classes:$e}=j("tabs"),Te=X({name:"VarTabs",components:{VarSticky:Z},inheritAttrs:!1,props:ye,setup(e){const o=f("0px"),i=f("0px"),v=f("0px"),b=f("0px"),n=f(!1),m=f(null),y=l(()=>e.active),w=l(()=>e.activeColor),r=l(()=>e.inactiveColor),S=l(()=>e.disabledColor),g=l(()=>e.itemDirection),{tabList:C,bindTabList:E,length:c}=Ce(),D=a=>{var V;const t=(V=a.name.value)!=null?V:a.index.value,{active:p,onChange:$,onClick:J}=e;T(e["onUpdate:active"],t),T(J,t),t!==p&&T($,t)},N=()=>C.find(({name:a})=>e.active===a.value),k=a=>C.find(({index:t})=>(a!=null?a:e.active)===t.value),P=()=>{if(c.value===0)return;const{active:a}=e;if(te(a)){const t=a>c.value-1?c.value-1:0;return T(e["onUpdate:active"],t),k(t)}},d=()=>{n.value=C.length>=5},u=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,v.value=`${t==null?void 0:t.offsetLeft}px`):(i.value=`${t==null?void 0:t.offsetHeight}px`,b.value=`${t==null?void 0:t.offsetTop}px`)},h=({element:a})=>{if(!n.value)return;const t=m.value,p=a.value;if(e.layoutDirection==="horizontal"){const $=p.offsetLeft+p.offsetWidth/2-t.offsetWidth/2;K(t,{left:$,animation:W})}else{const $=p.offsetTop+p.offsetHeight/2-t.offsetHeight/2;K(t,{top:$,animation:W})}},s=()=>{const a=N()||k()||P();!a||a.disabled.value||(d(),u(a),h(a))};return E({active:y,activeColor:w,inactiveColor:r,disabledColor:S,itemDirection:g,resize:s,onTabClick:D}),A(()=>c.value,async()=>{await me(),s()}),A(()=>e.active,s),_(()=>window.addEventListener("resize",s)),x(()=>window.removeEventListener("resize",s)),{indicatorWidth:o,indicatorHeight:i,indicatorX:v,indicatorY:b,scrollable:n,scrollerEl:m,Transition:ee,toSizeUnit:be,n:he,classes:$e,resize:s}}});function Se(e,o,i,v,b,n){return I(),ae(ie(e.sticky?e.n("$-sticky"):e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:oe(()=>[L("div",ne({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),[e.elevation,e.n("$-elevation--4")],[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[L("div",{ref:"scrollerEl",class:H(e.classes(e.n("tab-wrap"),[e.scrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[M(e.$slots,"default"),L("div",{class:H(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}-indicator`))),style:G({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}const U=O(Te,[["render",Se]]);U.install=function(e){e.component(U.name,U)};const ge={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:z()};function De(){const{parentProvider:e,bindParent:o}=fe(q),{index:i}=ve(F);if(!e||!o||!i)throw Error("<var-tab/> must in <var-tabs/>");return{index:i,tabs:e,bindTabs:o}}const{n:B,classes:ke}=j("tab"),Be=X({name:"VarTab",directives:{Ripple:pe},props:ge,setup(e){const o=f(null),i=l(()=>e.name),v=l(()=>e.disabled),b=l(()=>o.value),{index:n,tabs:m,bindTabs:y}=De(),{onTabClick:w,active:r,activeColor:S,inactiveColor:g,disabledColor:C,itemDirection:E,resize:c}=m,D={name:i,index:n,disabled:v,element:b};y(D);const N=()=>{const{disabled:d,name:u}=e;return d?C.value:r.value===u||r.value===(n==null?void 0:n.value)?S.value:g.value},k=()=>{const{disabled:d,name:u}=e;return d?B("$-tab--disabled"):r.value===u||r.value===(n==null?void 0:n.value)?B("$-tab--active"):B("$-tab--inactive")},P=d=>{const{disabled:u,name:h,onClick:s}=e;u||(T(s,h!=null?h:n.value,d),w(D))};return A(()=>e.name,c),A(()=>e.disabled,c),{n:B,classes:ke,tabEl:o,active:r,activeColor:S,inactiveColor:g,itemDirection:E,computeColorStyle:N,computeColorClass:k,handleClick:P}}});function ze(e,o,i,v,b,n){const m=se("ripple");return le((I(),re("div",{class:H(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:G({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...y)=>e.handleClick&&e.handleClick(...y))},[M(e.$slots,"default")],6)),[[m,{disabled:e.disabled}]])}const Y=O(Be,[["render",ze]]);Y.install=function(e){e.component(Y.name,Y)};export{Y as T,U as a};
