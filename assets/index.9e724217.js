import{u as x}from"./provide.1183e1dc.js";import{n as ee,h as ae}from"./elements.cf45a08b.js";import{d as te,a as p,b as ne,w as le,o as oe,D as re,W as A,_ as se,f as b,h as k,l as ue,J as V,H as I,K as q,an as ie,F as ve,ad as ce,k as de}from"./elevation.712e0ad4.js";import{c as fe,e as C}from"./components.a7a7b41a.js";const he={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}};const me=250,pe=20,{n:Te,classes:we}=fe("swipe"),ge=te({name:"VarSwipe",props:he,setup(e){const v=p(null),s=p(0),P=ne(()=>e.vertical),i=p(0),r=p(0),u=p(!1),l=p(0),{swipeItems:$,bindSwipeItems:H,length:n}=x();let T=!1,z=-1,w,g,F,f,h;const c=a=>$.find(({index:t})=>t.value===a),R=()=>{!e.loop||(r.value>=0&&c(n.value-1).setTranslate(-i.value),r.value<=-(i.value-s.value)&&c(0).setTranslate(i.value),r.value>-(i.value-s.value)&&r.value<0&&(c(n.value-1).setTranslate(0),c(0).setTranslate(0)))},E=a=>{const t=ie(a)?a:Math.floor((r.value-s.value/2)/-s.value),{loop:o}=e;return t<=-1?o?-1:0:t>=n.value?o?n.value:n.value-1:t},J=a=>{const{loop:t}=e;return a===-1?t?n.value-1:0:a===n.value?t?0:n.value-1:a},D=a=>{const{loop:t}=e;return a<0?t?n.value-1:0:a>n.value-1?t?0:n.value-1:a},N=a=>{const t=r.value>=s.value,o=r.value<=-i.value,d=0,m=-(i.value-s.value);u.value=!0,(t||o)&&(u.value=!0,r.value=o?d:m,c(0).setTranslate(0),c(n.value-1).setTranslate(0)),ee(()=>{u.value=!1,C(a)})},K=()=>{l.value=D(A(e.initialIndex))},B=()=>{const{autoplay:a}=e;!a||n.value<=1||(Y(),z=window.setTimeout(()=>{M(),B()},A(a)))},Y=()=>{z&&clearTimeout(z)},U=(a,t)=>{if(a>t&&a>10)return"horizontal";if(t>a&&t>10)return"vertical"},j=a=>{if(n.value<=1||!e.touchable)return;const{clientX:t,clientY:o}=a.touches[0];w=t,g=o,F=performance.now(),T=!0,Y(),N(()=>{u.value=!0})},G=a=>{const{touchable:t,vertical:o}=e;if(!T||!t)return;const{clientX:d,clientY:m}=a.touches[0],S=Math.abs(d-w),X=Math.abs(m-g);if(U(S,X)===(o?"vertical":"horizontal")){a.preventDefault();const Z=f!==void 0?d-f:0,_=h!==void 0?m-h:0;f=d,h=m,r.value+=o?_:Z,R()}},O=()=>{if(!T)return;const{vertical:a,onChange:t}=e,o=a?h<g:f<w,d=Math.abs(a?g-h:w-f),S=performance.now()-F<=me&&d>=pe?E(o?l.value+1:l.value-1):E();T=!1,u.value=!1,f=void 0,h=void 0,r.value=S*-s.value;const X=l.value;l.value=J(S),B(),X!==l.value&&C(t,l.value)},y=()=>{u.value=!0,s.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,i.value=s.value*n.value,r.value=l.value*-s.value,$.forEach(a=>{a.setTranslate(0)}),B(),setTimeout(()=>{u.value=!1})},M=()=>{if(n.value<=1)return;const{loop:a,onChange:t}=e,o=l.value;l.value=D(o+1),C(t,l.value),N(()=>{if(o===n.value-1&&a){c(0).setTranslate(i.value),r.value=n.value*-s.value;return}o!==n.value-1&&(r.value=l.value*-s.value)})},W=()=>{if(n.value<=1)return;const{loop:a,onChange:t}=e,o=l.value;l.value=D(o-1),C(t,l.value),N(()=>{if(o===0&&a){c(n.value-1).setTranslate(-i.value),r.value=s.value;return}o!==0&&(r.value=l.value*-s.value)})},Q=a=>{if(n.value<=1||a===l.value)return;a=a<0?0:a,a=a>=n.value?n.value:a;const t=a>l.value?M:W;Array.from({length:Math.abs(a-l.value)}).forEach(t)};return H({size:s,vertical:P}),le(()=>n.value,async()=>{await ae(),K(),y()}),oe(()=>{window.addEventListener("resize",y)}),re(()=>{window.removeEventListener("resize",y),Y()}),{n:Te,classes:we,length:n,index:l,swipeEl:v,trackSize:i,translate:r,lockDuration:u,handleTouchstart:j,handleTouchmove:G,handleTouchend:O,next:M,prev:W,to:Q,resize:y,toNumber:A}}}),ye=["onClick"];function Se(e,v,s,P,i,r){return b(),k("div",{class:I(e.n()),ref:"swipeEl"},[ue("div",{class:I(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:q({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...u)=>e.handleTouchstart&&e.handleTouchstart(...u)),onTouchmove:v[1]||(v[1]=(...u)=>e.handleTouchmove&&e.handleTouchmove(...u)),onTouchend:v[2]||(v[2]=(...u)=>e.handleTouchend&&e.handleTouchend(...u))},[V(e.$slots,"default")],38),V(e.$slots,"indicator",{index:e.index,length:e.length},()=>[e.indicator&&e.length?(b(),k("div",{key:0,class:I(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(b(!0),k(ve,null,ce(e.length,(u,l)=>(b(),k("div",{class:I(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:q({background:e.indicatorColor}),key:u,onClick:$=>e.to(l)},null,14,ye))),128))],2)):de("v-if",!0)])],2)}var L=se(ge,[["render",Se]]);L.install=function(e){e.component(L.name,L)};export{L as S,he as p};
