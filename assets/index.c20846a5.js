import{p as oe,S as ne}from"./index.cc09bc45.js";import{S as te}from"./index.1bfa17d2.js";import{I as ae}from"./index.753ed6d4.js";import{p as se,P as ie}from"./index.1169345e.js";import{d as re,p as B,c as le,f as Y,m as ce}from"./components.011f3236.js";import{d as ue,a as v,b as pe,w as me,Z as E,_ as de,p as O,f as I,i as N,S as k,q as he,h as F,ai as ve,N as g,M as P,R as ge,F as fe,O as R,m as we,Q as M,j as L,aA as Te,r as Ce,n as Se,W as ye,at as Ie}from"./vue-router.esm-bundler.5eeb4635.js";const Oe={show:{type:Boolean,default:!1},images:{type:Array,default:()=>[]},current:{type:String},zoom:{type:[String,Number],default:2},closeable:{type:Boolean,default:!1},"onUpdate:show":re(),...B(oe,["loop","indicator","onChange"]),...B(se,["lockScroll","teleport","onOpen","onClose","onOpened","onClosed","onRouteChange"])},{n:U,classes:ke}=le("image-preview"),W=12,q=200,Ye=350,H=200,$e=ue({name:"VarImagePreview",components:{VarSwipe:ne,VarSwipeItem:te,VarPopup:ie,VarIcon:ae},inheritAttrs:!1,props:Oe,setup(e){const l=v(!1),i=pe(()=>{const{images:o,current:t}=e,n=o.findIndex(s=>s===t);return n>=0?n:0}),c=v(1),h=v(0),w=v(0),T=v(void 0),C=v(void 0),S=v(!0);let p=null,a=null,r=null;const X=(o,t)=>{const{clientX:n,clientY:s}=o,{clientX:u,clientY:m}=t;return Math.abs(Math.sqrt((u-n)**2+(m-s)**2))},D=(o,t)=>({clientX:o.clientX,clientY:o.clientY,timestamp:Date.now(),target:t}),Z=()=>{c.value=E(e.zoom),S.value=!1,a=null,window.setTimeout(()=>{T.value="linear",C.value="0s"},H)},z=()=>{c.value=1,h.value=0,w.value=0,S.value=!0,a=null,T.value=void 0,C.value=void 0},j=o=>a?X(a,o)<=W&&o.timestamp-a.timestamp<=q&&a.target===o.target:!1,Q=o=>!o||!p||!a?!1:X(p,a)<=W&&Date.now()-a.timestamp<Ye&&(o===p.target||o.parentNode===p.target),G=o=>{r=window.setTimeout(()=>{Q(o.target)&&b(),p=null},q)},J=o=>{r&&window.clearTimeout(r);const{touches:t}=o,n=D(t[0],o.currentTarget);if(p=n,j(n)){c.value>1?z():Z();return}a=n},A=o=>{const{offsetWidth:t,offsetHeight:n}=o,{naturalWidth:s,naturalHeight:u}=o.querySelector(`.${U("image")}`);return{width:t,height:n,imageRadio:u/s,rootRadio:n/t,zoom:E(e.zoom)}},K=o=>{const{zoom:t,imageRadio:n,rootRadio:s,width:u,height:m}=A(o);if(!n)return 0;const y=n>s?m/n:u;return Math.max(0,(t*y-u)/2)/t},_=o=>{const{zoom:t,imageRadio:n,rootRadio:s,width:u,height:m}=A(o);if(!n)return 0;const y=n>s?m:u*n;return Math.max(0,(t*y-m)/2)/t},V=(o,t,n)=>o+t>=n?n:o+t<=-n?-n:o+t,x=o=>{if(!a)return;const t=o.currentTarget,{touches:n}=o,s=D(n[0],t);if(c.value>1){const u=s.clientX-a.clientX,m=s.clientY-a.clientY,y=K(t),ee=_(t);h.value=V(h.value,u,y),w.value=V(w.value,m,ee)}a=s},b=()=>{if(c.value>1){z(),setTimeout(()=>Y(e["onUpdate:show"],!1),H);return}Y(e["onUpdate:show"],!1)};return me(()=>e.show,o=>{l.value=o},{immediate:!0}),{n:U,classes:ke,initialIndex:i,popupShow:l,scale:c,translateX:h,translateY:w,canSwipe:S,transitionTimingFunction:T,transitionDuration:C,handleTouchstart:J,handleTouchmove:x,handleTouchend:G,close:b}}});const Ne=["src","alt"];function Pe(e,l,i,c,h,w){const T=O("var-swipe-item"),C=O("var-swipe"),S=O("var-icon"),p=O("var-popup");return I(),N(p,{class:g(e.n("popup")),"var-image-preview-cover":"",transition:e.n("$-fade"),show:e.popupShow,overlay:!1,"close-on-click-overlay":!1,"lock-scroll":e.lockScroll,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange},{default:k(()=>[he(C,we({class:e.n("swipe"),"var-image-preview-cover":"",touchable:e.canSwipe,indicator:e.indicator&&e.images.length>1,"initial-index":e.initialIndex,loop:e.loop,onChange:e.onChange},e.$attrs),{default:k(()=>[(I(!0),F(fe,null,ve(e.images,a=>(I(),N(T,{class:g(e.n("swipe-item")),"var-image-preview-cover":"",key:a},{default:k(()=>[P("div",{class:g(e.n("zoom-container")),style:ge({transform:`scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,transitionTimingFunction:e.transitionTimingFunction,transitionDuration:e.transitionDuration}),onTouchstart:l[0]||(l[0]=(...r)=>e.handleTouchstart&&e.handleTouchstart(...r)),onTouchmove:l[1]||(l[1]=(...r)=>e.handleTouchmove&&e.handleTouchmove(...r)),onTouchend:l[2]||(l[2]=(...r)=>e.handleTouchend&&e.handleTouchend(...r))},[P("img",{class:g(e.n("image")),src:a,alt:a},null,10,Ne)],38)]),_:2},1032,["class"]))),128))]),indicator:k(({index:a,length:r})=>[R(e.$slots,"indicator",{index:a,length:r},()=>[e.indicator&&e.images.length>1?(I(),F("div",{key:0,class:g(e.n("indicators"))},M(a+1)+" / "+M(r),3)):L("",!0)])]),_:3},16,["class","touchable","indicator","initial-index","loop","onChange"]),R(e.$slots,"close-icon",{},()=>[e.closeable?(I(),N(S,{key:0,class:g(e.n("close-icon")),name:"close-circle","var-image-preview-cover":"",onClick:e.close},null,8,["class","onClick"])):L("",!0)]),P("div",{class:g(e.n("extra"))},[R(e.$slots,"extra")],2)]),_:3},8,["class","transition","show","lock-scroll","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const f=de($e,[["render",Pe]]);let d;function $(e){if(!Te())return;$.close();const l=ye(e)?{images:[e]}:Ie(e)?{images:e}:e,i=Ce(l);i.teleport="body",d=i;const{unmountInstance:c}=ce(f,i,{onClose:()=>Y(i.onClose),onClosed:()=>{Y(i.onClosed),c(),d===i&&(d=null)},onRouteChange:()=>{c(),d===i&&(d=null)},"onUpdate:show":h=>{i.show=h}});i.show=!0}$.close=()=>{if(d!=null){const e=d;d=null,Se().then(()=>{e.show=!1})}};f.install=function(e){e.component(f.name,f)};$.install=function(e){e.component(f.name,f)};$.Component=f;export{$ as I};
