import{q as v}from"./elements-f00c3e04.js";import{f as b,c as N}from"./components-e9444427.js";import{d as w,aw as x,r as P,a as R,ac as U,v as B,a1 as E,f as z,h as F,q as a,S as r,ap as e,F as $,P as u,Q as p,aA as y}from"./vue-router.esm-bundler-de96f312.js";import{R as j}from"./index-ba0f168e.js";import{S as q}from"./index-cf331a6b.js";import{B as h}from"./index-b3c6abbd.js";import{d as A}from"./index-2ba6d771.js";import{u as L,c as O,a as C,_ as D,b as K}from"./index-ed871f6d.js";import"./shared-f14f9930.js";import"./index-edb3b75f.js";import"./provide-42b5b9b7.js";import"./index-5f3889e7.js";import"./index-0f09af22.js";/* empty css               */import"./index-eb1687e0.js";const Q={styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},{n:G}=N("style-provider"),l=w({name:"VarStyleProvider",props:Q,setup(t,{slots:s}){return()=>x(t.tag,{class:G(),style:v(t.styleVars)},b(s.default))}});const g=[];function c(t){g.forEach(o=>document.documentElement.style.removeProperty(o)),g.length=0;const s=v(t??{});Object.entries(s).forEach(([o,n])=>{document.documentElement.style.setProperty(o,n),g.push(o)})}c.Component=l;l.install=function(t){t.component(l.name,l)};c.install=function(t){t.component(l.name,l)};const H={componentCall:"组件调用",functionCall:"函数调用",toggleTheme:"切换样式变量",toggleRootTheme:"切换根节点样式变量"},I={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"},{add:_,use:J,pack:i,packs:ie,merge:de}=L(),M=t=>{O(t),J(t)};C("zh-CN",D);C("en-US",K);_("zh-CN",H);_("en-US",I);const fe={setup(t){const s=c.Component,o=P({score:5,license:!0}),n=R(null),T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V=()=>{n.value=n.value?null:T};let d=null;const S={"--color-primary":"#3f51b5"},k=()=>{d=d?null:S,c(d)};return U(M),B(()=>{c(E()==="darkTheme"?A:null)}),(W,m)=>(z(),F($,null,[a(e(y),null,{default:r(()=>[u(p(e(i).componentCall),1)]),_:1}),a(e(s),{"style-vars":n.value},{default:r(()=>[a(e(j),{modelValue:e(o).score,"onUpdate:modelValue":m[0]||(m[0]=f=>e(o).score=f)},null,8,["modelValue"]),a(e(q),{modelValue:e(o).license,"onUpdate:modelValue":m[1]||(m[1]=f=>e(o).license=f)},null,8,["modelValue"]),a(e(h),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:V},{default:r(()=>[u(p(e(i).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(e(y),null,{default:r(()=>[u(p(e(i).functionCall),1)]),_:1}),a(e(h),{type:"primary",block:"",onClick:k},{default:r(()=>[u(p(e(i).toggleRootTheme),1)]),_:1})],64))}};export{fe as default};
