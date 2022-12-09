import{r as S,ac as U,ay as f,f as g,h as y,q as o,S as t,al as l,F as C,P as n,Q as s,az as m,M as B}from"./vue-router.esm-bundler.efb0b0dc.js";import{S as d}from"./index.ca44d3dc.js";import{d as z}from"./index.43bb0831.js";import{u as E,a as V,_ as w,b as A,c as F}from"./index.63179c09.js";import"./components.2188338f.js";import"./provide.388ea7d2.js";import"./elements.aa8ad7a0.js";import"./shared.657ac379.js";const x={basicUsage:"\u57FA\u672C\u4F7F\u7528",stepSize:"\u6307\u5B9A\u6B65\u957F",dualThumb:"\u53CC\u6ED1\u5757",range:"\u9009\u62E9\u8303\u56F4",disable:"\u7981\u7528",readonly:"\u53EA\u8BFB",sliderSize:"\u4E0D\u540C\u5927\u5C0F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",showLabel:"\u663E\u793A\u6807\u7B7E",customBtn:"\u81EA\u5B9A\u4E49\u6309\u94AE",validateValue:"\u503C\u7684\u6821\u9A8C"},k={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",range:"Range",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value"},{add:p,use:N,pack:r,packs:j,merge:G}=E(),D=i=>{F(i),N(i)};V("zh-CN",w);V("en-US",A);p("zh-CN",x);p("en-US",k);const L={class:"slider-example__block"},H={setup(i){const a=S({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64],value11:0}),b=v=>{console.log(v)};return U(D),f(z),(v,u)=>(g(),y(C,null,[o(l(m),null,{default:t(()=>[n(s(l(r).basicUsage),1)]),_:1}),o(l(d),{modelValue:l(a).value,"onUpdate:modelValue":u[0]||(u[0]=e=>l(a).value=e)},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).stepSize),1)]),_:1}),o(l(d),{modelValue:l(a).value2,"onUpdate:modelValue":u[1]||(u[1]=e=>l(a).value2=e),step:"10"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).dualThumb),1)]),_:1}),o(l(d),{modelValue:l(a).value1,"onUpdate:modelValue":u[2]||(u[2]=e=>l(a).value1=e),range:"",onChange:b,"label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).range),1)]),_:1}),o(l(d),{modelValue:l(a).value11,"onUpdate:modelValue":u[3]||(u[3]=e=>l(a).value11=e),max:"210",min:"-50","label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).disable),1)]),_:1}),o(l(d),{modelValue:l(a).value3,"onUpdate:modelValue":u[4]||(u[4]=e=>l(a).value3=e),disabled:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).readonly),1)]),_:1}),o(l(d),{modelValue:l(a).value3,"onUpdate:modelValue":u[5]||(u[5]=e=>l(a).value3=e),readonly:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).sliderSize),1)]),_:1}),o(l(d),{modelValue:l(a).value10,"onUpdate:modelValue":u[6]||(u[6]=e=>l(a).value10=e),"track-height":"1.5vw",range:""},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).customStyle),1)]),_:1}),o(l(d),{modelValue:l(a).value4,"onUpdate:modelValue":u[7]||(u[7]=e=>l(a).value4=e),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).customBtn),1)]),_:1}),o(l(d),{modelValue:l(a).value9,"onUpdate:modelValue":u[8]||(u[8]=e=>l(a).value9=e),range:"","active-color":"#52af77"},{button:t(({currentValue:e})=>[B("div",L,s(e),1)]),_:1},8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).showLabel),1)]),_:1}),o(l(d),{modelValue:l(a).value5,"onUpdate:modelValue":u[9]||(u[9]=e=>l(a).value5=e),"label-visible":"never"},null,8,["modelValue"]),o(l(d),{modelValue:l(a).value6,"onUpdate:modelValue":u[10]||(u[10]=e=>l(a).value6=e)},null,8,["modelValue"]),o(l(d),{modelValue:l(a).value7,"onUpdate:modelValue":u[11]||(u[11]=e=>l(a).value7=e),"label-visible":"always"},null,8,["modelValue"]),o(l(m),null,{default:t(()=>[n(s(l(r).validateValue),1)]),_:1}),o(l(d),{modelValue:l(a).value8,"onUpdate:modelValue":u[12]||(u[12]=e=>l(a).value8=e),rules:[e=>e>35||"error message"]},null,8,["modelValue","rules"])],64))}};export{H as default};
