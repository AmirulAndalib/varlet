import{I as h}from"./index.eb836c5c.js";import{d as B,b as u,_ as $,W as b,s as C,f as a,h as p,t as S,P as _,j as V,v as N,l as k,i as w,N as I,m as P,Q as z,J as D,H as j}from"./elevation.712e0ad4.js";import{c as A}from"./components.a7a7b41a.js";function E(e){return["default","primary","info","success","warning","danger"].includes(e)}function H(e){return["right-top","right-bottom","left-top","left-bottom"].includes(e)}const J={type:{type:String,default:"default",validator:E},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:H},icon:{type:String}};const{n:o,classes:Q}=A("badge"),T=B({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:J,setup(e,{slots:r}){const l=u(()=>{const{type:n,position:t,dot:s,icon:f}=e,m=r.default&&`${o("position")} ${o(`--${t}`)}`,g=s?o("dot"):null,v=d(),y=f?o("icon"):null;return[o(`--${n}`),m,g,v,y]}),c=u(()=>{const{dot:n,value:t,maxValue:s}=e;return n?"":t!==void 0&&s!==void 0&&b(t)>s?`${s}+`:t}),d=()=>{const{position:n,dot:t}=e;if(t&&n.includes("right"))return o("dot--right");if(t&&n.includes("left"))return o("dot--left")};return{n:o,classes:Q,values:c,contentClass:l}}}),W={key:1};function q(e,r,l,c,d,n){const t=C("var-icon");return a(),p("div",{class:j(e.classes(e.n(),"var--box"))},[S(z,{name:"var-badge-fade"},{default:_(()=>[V(k("span",P(e.$attrs,{class:e.classes(e.n("content"),...e.contentClass),style:{background:e.color}}),[e.icon&&!e.dot?(a(),w(t,{key:0,name:e.icon,size:"10px"},null,8,["name"])):(a(),p("span",W,I(e.values),1))],16),[[N,!e.hidden]])]),_:1}),D(e.$slots,"default")],2)}var i=$(T,[["render",q]]);i.install=function(e){e.component(i.name,i)};export{i as B};
