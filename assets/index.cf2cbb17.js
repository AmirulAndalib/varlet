import{D as m}from"./index.2ba18738.js";import{B as r}from"./index.611ad25d.js";import{I as S}from"./index.eb836c5c.js";import{S as i}from"./index.9fe17f04.js";import{C as g}from"./index.fa4c8f21.js";import{A as w}from"./AppType.2854d891.js";import{d as x}from"./index.5d153c96.js";import{u as N,a as h,_ as T,b as M,c as $}from"./en-US.b4e7e4f0.js";import{a as z,b as I}from"./utils.192e8ffe.js";import{_ as P,r as V,aB as H,f as L,h as R,t as a,ag as e,P as t,aD as y,F as W,M as l,N as n}from"./elevation.712e0ad4.js";import"./index.6294f5a5.js";import"./lock.b9026e5e.js";import"./index.283fa2a3.js";import"./zIndex.18bca173.js";import"./components.a7a7b41a.js";/* empty css               */import"./shared.3c7b3be3.js";import"./index.85cc20eb.js";import"./elements.cf45a08b.js";import"./index.0ac7a6f7.js";var j={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:_,use:G,pack:o,packs:Ce,merge:ge}=N(),J=d=>{$(d),G(d)};h("zh-CN",T);h("en-US",M);_("zh-CN",j);_("en-US",q);const K={setup(d){const C=m.Component,E=V({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=H(E),v={confirm:()=>i.success("confirm"),cancel:()=>i.error("cancel"),close:()=>i.info("close")},D=()=>m({message:o.value.message}),U=async()=>v[await m(o.value.message)](),b=()=>{m({title:o.value.title,message:o.value.message})},F=()=>{m({message:o.value.message,confirmButton:!1,cancelButton:!1})},B=(k,s)=>{i.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[k](),s()},1e3)},A=()=>{m({message:o.value.message,onBeforeClose:B})};return z(J),I(x),(k,s)=>(L(),R(W,null,[a(e(w),null,{default:t(()=>[l(n(e(o).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:D},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:b},{default:t(()=>[l(n(e(o).modifyTitle),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:F},{default:t(()=>[l(n(e(o).hideButton),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:t(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:A},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(w),null,{default:t(()=>[l(n(e(o).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=u=>c.value=!0)},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=u=>y(c)?c.value=u:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(i).success("confirm")),onCancel:s[3]||(s[3]=()=>e(i).error("cancel")),onClosed:s[4]||(s[4]=()=>e(i).info("closed"))},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=u=>p.value=!0)},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(C),{show:e(p),"onUpdate:show":s[6]||(s[6]=u=>y(p)?p.value=u:null),title:e(o).title,message:e(o).message,onBeforeClose:B},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=u=>f.value=!0)},{default:t(()=>[l(n(e(o).customSlots),1)]),_:1}),a(e(C),{show:e(f),"onUpdate:show":s[8]||(s[8]=u=>y(f)?f.value=u:null)},{title:t(()=>[a(e(S),{name:"information",color:"#2979ff"})]),default:t(()=>[a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}};var ye=P(K,[["__scopeId","data-v-05585c3c"]]);export{ye as default};
