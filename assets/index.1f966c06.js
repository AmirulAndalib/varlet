import{at as c,X as F,W as I,d as A,q as w,aB as W,F as q}from"./vue-router.esm-bundler.2ed3d3be.js";import{t as i}from"./elements.0bf810d9.js";/* empty css               */import{e as z,c as D}from"./components.b28276ef.js";const b=t=>["mini","small","normal","large"].includes(t),N=t=>b(t)||c(t)||F(t)||I(t),P=t=>["start","end","center","space-around","space-between"].includes(t),X={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:N},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:P},inline:{type:Boolean,default:!1}};const $={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]},k=t=>{Object.assign($,t)},{n:d,classes:v}=D("space"),x=A({name:"VarSpace",props:X,setup(t,{slots:f}){const g={};Object.keys($).forEach(e=>{const a=$[e];g[e]=c(a)?a.map(i):[i(a),i(a)]});const j=(e,a)=>a?g[e]:c(e)?e.map(i):[i(e),i(e)],y=e=>e==="start"||e==="end"?`flex-${e}`:e;return()=>{var h;const{inline:e,justify:a,align:V,wrap:O,direction:l,size:S}=t;let p=(h=z(f.default))!=null?h:[];const B=b(S),[r,o]=j(S,B);p=(m=>{const s=[];return m.forEach(n=>{if(n.type!==W){if(n.type===q&&c(n.children)){n.children.forEach(E=>{s.push(E)});return}s.push(n)}}),s})(p);const u=p.length-1,C=p.map((m,s)=>{let n="0";return l==="row"&&(a==="start"||a==="center"||a==="end"?s!==u?n=`${r/2}px ${o}px ${r/2}px 0`:n=`${r/2}px 0`:a==="space-around"?n=`${r/2}px ${o/2}px`:a==="space-between"&&(s===0?n=`${r/2}px ${o/2}px ${r/2}px 0`:s===u?n=`${r/2}px 0 ${r/2}px ${o/2}px`:n=`${r/2}px ${o/2}px`)),l==="column"&&s!==u&&(n=`0 0 ${r}px 0`),w("div",{style:{margin:n}},[m])});return w("div",{class:v(d(),d("$--box"),[e,d("--inline")]),style:{flexDirection:l,justifyContent:y(a),alignItems:y(V),flexWrap:O?"wrap":"nowrap",margin:l==="row"?`-${r/2}px 0`:void 0}},[C])}}});x.install=function(t,f){k(f),t.component(x.name,x)};export{x as S};
