import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{z as c,k as n,l as u,H as o,B as t,I as d,F as l,j as m,e as p,U as y,A as i,n as j,G as b,q as h}from"./framework.506ba982.js";import{w as C}from"./framework.ddfda0ac.js";const V={},O=l("Tag 1"),B=l("Tag 2"),M=l("Tag 3"),I=l("Tag 4"),D=l("Tag 5");function N(g,s){const e=c("el-tag");return n(),u(d,null,[o(e,null,{default:t(()=>[O]),_:1}),o(e,{class:"ml-2",type:"success"},{default:t(()=>[B]),_:1}),o(e,{class:"ml-2",type:"info"},{default:t(()=>[M]),_:1}),o(e,{class:"ml-2",type:"warning"},{default:t(()=>[I]),_:1}),o(e,{class:"ml-2",type:"danger"},{default:t(()=>[D]),_:1})],64)}var K=x(V,[["render",N]]),ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const L=l("Checked"),F=l("Toggle me"),R=m({setup(g){const s=p(!1),e=_=>{s.value=_};return(_,r)=>{const a=c("el-check-tag");return n(),u("div",null,[o(a,{checked:"",style:{"margin-right":"8px"}},{default:t(()=>[L]),_:1}),o(a,{checked:s.value,onChange:e},{default:t(()=>[F]),_:1},8,["checked"])])}}});var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const U=l(" + New Tag "),q=m({setup(g){const s=p(""),e=p(["Tag 1","Tag 2","Tag 3"]),_=p(!1),r=p(),a=T=>{e.value.splice(e.value.indexOf(T),1)},$=()=>{_.value=!0,j(()=>{r.value.input.focus()})},v=()=>{s.value&&e.value.push(s.value),_.value=!1,s.value=""};return(T,k)=>{const S=c("el-tag"),w=c("el-input"),z=c("el-button");return n(),u(d,null,[(n(!0),u(d,null,y(e.value,f=>(n(),i(S,{key:f,class:"mx-1",closable:"","disable-transitions":!1,onClose:se=>a(f)},{default:t(()=>[l(b(f),1)]),_:2},1032,["onClose"]))),128)),_.value?(n(),i(w,{key:0,ref_key:"InputRef",ref:r,modelValue:s.value,"onUpdate:modelValue":k[0]||(k[0]=f=>s.value=f),class:"ml-1 w-20",size:"small",onKeyup:C(v,["enter"]),onBlur:v},null,8,["modelValue","onKeyup"])):(n(),i(z,{key:1,class:"button-new-tag ml-1",size:"small",onClick:$},{default:t(()=>[U]),_:1}))],64)}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const A=m({setup(g){const s=p([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]);return(e,_)=>{const r=c("el-tag");return n(!0),u(d,null,y(s.value,a=>(n(),i(r,{key:a.name,class:"mx-1",closable:"",type:a.type},{default:t(()=>[l(b(a.name),1)]),_:2},1032,["type"]))),128)}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const E={},G=l("Large"),H=l("Default"),P=l("Small"),J=l("Large"),Q=l("Default"),W=l("Small");function X(g,s){const e=c("el-tag"),_=c("el-row");return n(),u(d,null,[o(_,null,{default:t(()=>[o(e,{class:"mx-1",size:"large"},{default:t(()=>[G]),_:1}),o(e,{class:"mx-1"},{default:t(()=>[H]),_:1}),o(e,{class:"mx-1",size:"small"},{default:t(()=>[P]),_:1})]),_:1}),o(_,{class:"mt-4"},{default:t(()=>[o(e,{class:"mx-1",size:"large",closable:""},{default:t(()=>[J]),_:1}),o(e,{class:"mx-1",closable:""},{default:t(()=>[Q]),_:1}),o(e,{class:"mx-1",size:"small",closable:""},{default:t(()=>[W]),_:1})]),_:1})],64)}var Y=x(E,[["render",X]]),pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const Z={class:"tag-group my-2"},ee=h("span",{class:"tag-group__title m-1"},"Dark",-1),te={class:"tag-group my-2"},le=h("span",{class:"tag-group__title m-1"},"Plain",-1),ae=m({setup(g){const s=p([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(e,_)=>{const r=c("el-tag");return n(),u(d,null,[h("div",Z,[ee,(n(!0),u(d,null,y(s.value,a=>(n(),i(r,{key:a.label,class:"mx-1",type:a.type,effect:"dark"},{default:t(()=>[l(b(a.label),1)]),_:2},1032,["type"]))),128))]),h("div",te,[le,(n(!0),u(d,null,y(s.value,a=>(n(),i(r,{key:a.label,class:"mx-1",type:a.type,effect:"plain"},{default:t(()=>[l(b(a.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});export{ce as _,ue as a,re as b,de as c,pe as d,ie as e};
