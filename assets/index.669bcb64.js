import{I as c}from"./index.b1a92e1f.js";import{c as m}from"./components.c8d2cf33.js";import{d as C,_ as v,t as f,h as a,i as n,H as e,J as l,l as o,p as t,x as u,M as i,N as d}from"./elevation.0a6066f5.js";const y={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const{n:$,classes:g}=m("cell"),S=C({name:"VarCell",components:{VarIcon:c},props:y,setup(){return{n:$,classes:g}}});function N(s,V,k,b,B,I){const p=f("var-icon");return a(),n("div",{class:e(s.classes(s.n(),[s.border,s.n("--border")]))},[s.$slots.icon||s.icon?(a(),n("div",{key:0,class:e(s.classes(s.n("icon"),[s.iconClass,s.iconClass]))},[l(s.$slots,"icon",{},()=>[u(p,{class:"var--flex",name:s.icon},null,8,["name"])])],2)):o("v-if",!0),t("div",{class:e(s.n("content"))},[t("div",{class:e(s.classes(s.n("title"),[s.titleClass,s.titleClass]))},[l(s.$slots,"default",{},()=>[i(d(s.title),1)])],2),s.$slots.desc||s.desc?(a(),n("div",{key:0,class:e(s.classes(s.n("desc"),[s.descClass,s.descClass]))},[l(s.$slots,"desc",{},()=>[i(d(s.desc),1)])],2)):o("v-if",!0)],2),s.$slots.extra?(a(),n("div",{key:1,class:e(s.classes(s.n("extra"),[s.extraClass,s.extraClass]))},[l(s.$slots,"extra")],2)):o("v-if",!0)],2)}var r=v(S,[["render",N]]);r.install=function(s){s.component(r.name,r)};export{r as C};
