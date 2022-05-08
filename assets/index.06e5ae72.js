import{a as x}from"./provide.5bbdf46b.js";import{c as h}from"./components.c8d2cf33.js";import{d as I,b as C,_,h as $,i as A,J as D,H as N,r as P,a as V,x as s,P as o,ag as e,F as T,ai as z,aj as R,M as n,N as d,p as G}from"./elevation.0a6066f5.js";import{I as F}from"./index.d42cde01.js";import{S as M}from"./index.9f4ef045.js";import{O as f}from"./index.1a64f034.js";import{C as L}from"./index.376a82a8.js";import{C as y}from"./index.b115c738.js";import{R as k,a as O}from"./index.b5101b47.js";import{B as c}from"./index.bd4eed85.js";import{S as j}from"./index.abcade8a.js";import{S as H}from"./index.00921ba8.js";import{U as J}from"./index.53a6d99f.js";import{C as Y}from"./index.62fd2d8e.js";import{R as q}from"./index.afc9b616.js";import{S as U}from"./index.31e113e4.js";import{A as B}from"./AppType.b3af8291.js";import{d as K}from"./index.5d153c96.js";import{a as Q,b as W}from"./utils.98d16bca.js";import{u as X,a as w,_ as Z,b as ee,c as ae}from"./en-US.2ec95554.js";import"./index.b1a92e1f.js";import"./elements.50c32b0e.js";import"./index.7780c01f.js";import"./zIndex.06096df9.js";import"./index.15cd2419.js";/* empty css               */import"./index.58807512.js";import"./index.ebf8ba42.js";import"./index.90eb3963.js";import"./index.ad18387f.js";import"./lock.d9bc77cf.js";import"./index.1f9419e2.js";import"./index.038face4.js";import"./provide.10aea2a4.js";import"./index.1b8b3369.js";const le={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const{n:ue}=h("form"),se=I({name:"VarForm",props:le,setup(r){const t=C(()=>r.disabled),p=C(()=>r.readonly),{formItems:m,bindFormItems:i}=x(),g=async()=>(await Promise.all(m.map(({validate:b})=>b()))).every(b=>b===!0),u=()=>m.forEach(({reset:v})=>v()),a=()=>m.forEach(({resetValidation:v})=>v());return i({disabled:t,readonly:p}),{n:ue,validate:g,reset:u,resetValidation:a}}});function te(r,t,p,m,i,g){return $(),A("div",{class:N(r.n())},[D(r.$slots,"default")],2)}var E=_(se,[["render",te]]);E.install=function(r){r.component(E.name,E)};var oe={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},re={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:S,use:ne,pack:l,packs:Ke,merge:Qe}=X(),de=r=>{ae(r),ne(r)};w("zh-CN",Z);w("en-US",ee);S("zh-CN",oe);S("en-US",re);const pe=r=>(z("data-v-020c3e5b"),r=r(),R(),r),me=pe(()=>G("div",{class:"space"},null,-1)),ie={setup(r){const t=P({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),p=V(null),m=V(!1),i=V(!1);return Q(g=>{var u;de(g),(u=p.value)==null||u.reset()}),W(K),(g,u)=>($(),A(T,null,[s(B,null,{default:o(()=>[n(d(e(l).example),1)]),_:1}),s(e(E),{ref_key:"form",ref:p,disabled:m.value,readonly:i.value},{default:o(()=>[s(e(U),{direction:"column",size:[14,0]},{default:o(()=>[s(e(F),{placeholder:e(l).username,rules:[a=>!!a||e(l).usernameMessage],modelValue:e(t).username,"onUpdate:modelValue":u[0]||(u[0]=a=>e(t).username=a)},null,8,["placeholder","rules","modelValue"]),s(e(F),{type:"password",placeholder:e(l).password,rules:[a=>!!a||e(l).passwordMessage],modelValue:e(t).password,"onUpdate:modelValue":u[1]||(u[1]=a=>e(t).password=a)},null,8,["placeholder","rules","modelValue"]),s(e(M),{placeholder:e(l).department,rules:[a=>!!a||e(l).departmentMessage],modelValue:e(t).department,"onUpdate:modelValue":u[2]||(u[2]=a=>e(t).department=a)},{default:o(()=>[s(e(f),{label:`${e(l).eat}${e(l).departmentUnit}`},null,8,["label"]),s(e(f),{label:`${e(l).sleep}${e(l).departmentUnit}`},null,8,["label"]),s(e(f),{label:`${e(l).play}${e(l).departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),s(e(M),{multiple:"",placeholder:e(l).group,rules:[a=>a.length>=1||e(l).groupMessage],modelValue:e(t).group,"onUpdate:modelValue":u[3]||(u[3]=a=>e(t).group=a)},{default:o(()=>[s(e(f),{label:`${e(l).eat}${e(l).groupUnit}`},null,8,["label"]),s(e(f),{label:`${e(l).sleep}${e(l).groupUnit}`},null,8,["label"]),s(e(f),{label:`${e(l).play}${e(l).groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),s(e(O),{rules:[a=>!!a||e(l).genderMessage],modelValue:e(t).gender,"onUpdate:modelValue":u[4]||(u[4]=a=>e(t).gender=a)},{default:o(()=>[s(e(k),{"checked-value":1},{default:o(()=>[n(d(e(l).male),1)]),_:1}),s(e(k),{"checked-value":2},{default:o(()=>[n(d(e(l).female),1)]),_:1})]),_:1},8,["rules","modelValue"]),s(e(L),{rules:[a=>a.length>0||e(l).likeMessage],modelValue:e(t).like,"onUpdate:modelValue":u[5]||(u[5]=a=>e(t).like=a)},{default:o(()=>[s(e(y),{"checked-value":1},{default:o(()=>[n(d(e(l).eat),1)]),_:1}),s(e(y),{"checked-value":2},{default:o(()=>[n(d(e(l).sleep),1)]),_:1}),s(e(y),{"checked-value":3},{default:o(()=>[n(d(e(l).play),1)]),_:1})]),_:1},8,["rules","modelValue"]),s(e(q),{rules:[a=>a>=3||e(l).rateMessage],modelValue:e(t).score,"onUpdate:modelValue":u[6]||(u[6]=a=>e(t).score=a)},null,8,["rules","modelValue"]),s(e(j),{rules:[a=>!!a||e(l).licenseMessage],modelValue:e(t).license,"onUpdate:modelValue":u[7]||(u[7]=a=>e(t).license=a)},null,8,["rules","modelValue"]),s(e(Y),{rules:[a=>a>10||e(l).countMessage],modelValue:e(t).count,"onUpdate:modelValue":u[8]||(u[8]=a=>e(t).count=a)},null,8,["rules","modelValue"]),s(e(H),{rules:[a=>a>10||e(l).rangeMessage],modelValue:e(t).range,"onUpdate:modelValue":u[9]||(u[9]=a=>e(t).range=a)},null,8,["rules","modelValue"]),s(e(J),{rules:[a=>a.length>=1||e(l).filesMessage],modelValue:e(t).files,"onUpdate:modelValue":u[10]||(u[10]=a=>e(t).files=a)},null,8,["rules","modelValue"])]),_:1})]),_:1},8,["disabled","readonly"]),s(B,null,{default:o(()=>[n(d(e(l).controller),1)]),_:1}),s(e(U),{direction:"column",size:[14,0]},{default:o(()=>[s(e(c),{block:"",type:"danger",onClick:u[11]||(u[11]=a=>p.value.reset())},{default:o(()=>[n(d(e(l).reset),1)]),_:1}),s(e(c),{block:"",type:"warning",onClick:u[12]||(u[12]=a=>p.value.resetValidation())},{default:o(()=>[n(d(e(l).resetValidation),1)]),_:1}),s(e(c),{block:"",type:"success",onClick:u[13]||(u[13]=a=>p.value.validate())},{default:o(()=>[n(d(e(l).validate),1)]),_:1}),s(e(c),{block:"",type:"info",onClick:u[14]||(u[14]=a=>m.value=!m.value)},{default:o(()=>[n(d(e(l).disabled),1)]),_:1}),s(e(c),{block:"",type:"primary",onClick:u[15]||(u[15]=a=>i.value=!i.value)},{default:o(()=>[n(d(e(l).readonly),1)]),_:1})]),_:1}),me],64))}};var We=_(ie,[["__scopeId","data-v-020c3e5b"]]);export{We as default};
