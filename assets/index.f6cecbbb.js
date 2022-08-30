import{I as h}from"./index.3feb78e9.js";import{B as r}from"./index.4a7981a1.js";import{A}from"./index.2840ce41.js";import{A as y}from"./AppType.ea5687bb.js";import{S as I}from"./index.36cbe06f.js";import{d as N}from"./index.44d39c3e.js";import{u as $,a as b,_ as P,b as z,c as V}from"./en-US.3bb1701f.js";import{a as j,b as L}from"./utils.5daee34b.js";import{I as T}from"./index.f49cad37.js";import{_ as M,a as i,b as H,f as O,h as q,l as S,t as a,ag as e,P as n,F as G,M as l,N as u}from"./elevation.16fb2114.js";import"./index.c3b8dd36.js";import"./provide.363999c5.js";import"./components.246621bc.js";import"./elements.397bc6f0.js";import"./index.b37e305a.js";import"./index.6cf04e22.js";import"./lock.54fa47d9.js";import"./index.12639bc1.js";import"./zIndex.423a9641.js";/* empty css               */import"./index.de5ffe22.js";import"./index.93fd4a7b.js";import"./shared.db4f2363.js";var J={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},K={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"};const{add:F,use:Q,pack:s,packs:ye,merge:Se}=$(),R=v=>{V(v),Q(v)};b("zh-CN",P);b("en-US",z);F("zh-CN",J);F("en-US",K);const W={class:"image-preview-demo"},X={class:"image-preview-demo"},Y={setup(v){const p=h.Component,B=A.Component,c=i(!1),w=i(!1),d=i(!1),C=i(!1),f=i(!1),g=i(!1),m=i(["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"]),k=i(["https://varlet.gitee.io/varlet-ui/cat.jpg"]),D=H(()=>[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]),x=()=>{I({content:s.value.shutdownEvent,duration:1e3})},U=()=>{h(k.value)},_=()=>{h({images:m,onChange:E=>{console.log("index",E)}})};return j(R),L(N),(E,t)=>(O(),q(G,null,[S("div",W,[a(e(y),null,{default:n(()=>[l(u(e(s).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:n(()=>[l(u(e(s).preview),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:_},{default:n(()=>[l(u(e(s).callBack),1)]),_:1})]),S("div",X,[a(e(y),null,{default:n(()=>[l(u(e(s).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:n(()=>[l(u(e(s).basicUse),1)]),_:1}),a(e(p),{images:k.value,show:c.value,"onUpdate:show":t[1]||(t[1]=o=>c.value=o)},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[2]||(t[2]=o=>w.value=!0)},{default:n(()=>[l(u(e(s).specifyInitialPosition),1)]),_:1}),a(e(p),{images:m.value,show:w.value,"onUpdate:show":t[3]||(t[3]=o=>w.value=o),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[4]||(t[4]=o=>d.value=!0)},{default:n(()=>[l(u(e(s).displayCloseButton),1)]),_:1}),a(e(p),{images:m.value,show:d.value,"onUpdate:show":t[5]||(t[5]=o=>d.value=o),closeable:!0},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[6]||(t[6]=o=>C.value=!0)},{default:n(()=>[l(u(e(s).listenCloseEvents),1)]),_:1}),a(e(p),{images:m.value,show:C.value,"onUpdate:show":t[7]||(t[7]=o=>C.value=o),onClose:x},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[8]||(t[8]=o=>f.value=!0)},{default:n(()=>[l(u(e(s).showExtraSlots),1)]),_:1}),a(e(p),{images:m.value,show:f.value,"onUpdate:show":t[11]||(t[11]=o=>f.value=o)},{extra:n(()=>[a(e(T),{name:"menu",size:22,color:"#fff",onClick:t[9]||(t[9]=o=>g.value=!0)}),a(e(B),{actions:e(D),show:g.value,"onUpdate:show":t[10]||(t[10]=o=>g.value=o)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64))}};var be=M(Y,[["__scopeId","data-v-0e56124e"]]);export{be as default};
