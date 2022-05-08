import{d as y,a as u,e as h,f as S,_,t as b,h as p,j as B,p as T,J as C,H as N,K as w,ac as V,T as E,x as c,P as k,i as g,F as $,ad as z,ag as v,M as j,N as I}from"./elevation.0a6066f5.js";import{B as L}from"./index.bd4eed85.js";import{I as M}from"./index.b1a92e1f.js";import{c as U,a as F,w as H,x as O,g as P,y as D}from"./components.c8d2cf33.js";import{c as q,t as A,d as J,e as K,f as G,b as Q}from"./elements.50c32b0e.js";import{C as R}from"./index.669bcb64.js";import{d as W}from"./index.5d153c96.js";import{b as X}from"./utils.98d16bca.js";import"./index.ebf8ba42.js";import"./index.15cd2419.js";/* empty css               */import"./index.90eb3963.js";const Y={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};const{n:Z,classes:x}=U("back-top"),tt=y({name:"VarBackTop",components:{VarButton:L,VarIcon:M},props:Y,setup(t){const o=u(!1),a=u(null),n=u(!0);let e;const d=r=>{F(t.onClick,r);const l=J(e);K(e,{left:l,duration:t.duration,animation:H})},s=O(()=>{o.value=G(e)>=Q(t.visibilityHeight)},200),m=()=>{const{target:r}=t;if(P(r)){const l=document.querySelector(t.target);if(!l)throw Error("[Varlet] BackTop: target element cannot found");return l}if(D(r))return r;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return h(()=>{e=t.target?m():q(a.value),e.addEventListener("scroll",s),n.value=!1}),S(()=>{e.removeEventListener("scroll",s)}),{disabled:n,show:o,backTopEl:a,toSizeUnit:A,n:Z,classes:x,click:d}}});function et(t,o,a,n,e,d){const f=b("var-icon"),s=b("var-button");return p(),B(E,{to:"body",disabled:t.disabled},[T("div",{class:N(t.classes(t.n(),[t.show,t.n("--active")])),ref:"backTopEl",style:w({right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}),onClick:o[0]||(o[0]=V((...m)=>t.click&&t.click(...m),["stop"]))},[C(t.$slots,"default",{},()=>[c(s,{type:"primary",round:"","var-back-top-cover":""},{default:k(()=>[c(f,{name:"chevron-up"})]),_:1})])],6)],8,["disabled"])}var i=_(tt,[["render",et]]);i.install=function(t){t.component(i.name,i)};const ft={setup(t){const o=[...Array(100).keys()];return X(W),(a,n)=>(p(),g("div",null,[(p(),g($,null,z(o,e=>c(v(R),{key:e},{default:k(()=>[j("Scroll to bottom "+I(e),1)]),_:2},1024)),64)),c(v(i),{duration:300})]))}};export{ft as default};
