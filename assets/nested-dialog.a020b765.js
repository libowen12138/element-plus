import{D as w}from"./index.a49d8904.js";import{j as f,e as p,z as s,k as c,l as g,H as e,B as o,q as m,I as b,F as i,a as N,u as v}from"./framework.506ba982.js";const T=i("click to open the Dialog"),U=m("span",null,"This is a message",-1),J={class:"dialog-footer"},z=i("Cancel"),M=i("Confirm"),O=f({setup($){const n=p(!1),u=a=>{w.confirm("Are you sure to close this dialog?").then(()=>{a()}).catch(()=>{})};return(a,t)=>{const r=s("el-button"),d=s("el-dialog");return c(),g(b,null,[e(r,{type:"text",onClick:t[0]||(t[0]=l=>n.value=!0)},{default:o(()=>[T]),_:1}),e(d,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value=l),title:"Tips",width:"30%","before-close":u},{footer:o(()=>[m("span",J,[e(r,{onClick:t[1]||(t[1]=l=>n.value=!1)},{default:o(()=>[z]),_:1}),e(r,{type:"primary",onClick:t[2]||(t[2]=l=>n.value=!1)},{default:o(()=>[M]),_:1})])]),default:o(()=>[U]),_:1},8,["modelValue"])],64)}}});var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const P=i("Click to open the Dialog"),B=m("span",null,"It should be noted that the content will not be aligned in center by default",-1),F={class:"dialog-footer"},R=i("Cancel"),E=i("Confirm"),I=f({setup($){const n=p(!1);return(u,a)=>{const t=s("el-button"),r=s("el-dialog");return c(),g(b,null,[e(t,{type:"text",onClick:a[0]||(a[0]=d=>n.value=!0)},{default:o(()=>[P]),_:1}),e(r,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=d=>n.value=d),title:"Warning",width:"30%",center:""},{footer:o(()=>[m("span",F,[e(t,{onClick:a[1]||(a[1]=d=>n.value=!1)},{default:o(()=>[R]),_:1}),e(t,{type:"primary",onClick:a[2]||(a[2]=d=>n.value=!1)},{default:o(()=>[E]),_:1})])]),default:o(()=>[B]),_:1},8,["modelValue"])],64)}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const Z=i("open a Table nested Dialog"),A=i("open a Form nested Dialog"),W={class:"dialog-footer"},q=i("Cancel"),H=i("Confirm"),L=f({setup($){const n=p(!1),u=p(!1),a="120px",t=N({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),r=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(d,l)=>{const V=s("el-button"),C=s("el-table-column"),x=s("el-table"),y=s("el-dialog"),D=s("el-input"),k=s("el-form-item"),h=s("el-option"),S=s("el-select"),j=s("el-form");return c(),g(b,null,[e(V,{type:"text",onClick:l[0]||(l[0]=_=>n.value=!0)},{default:o(()=>[Z]),_:1}),e(y,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=_=>n.value=_),title:"Shipping address"},{default:o(()=>[e(x,{data:r},{default:o(()=>[e(C,{property:"date",label:"Date",width:"150"}),e(C,{property:"name",label:"Name",width:"200"}),e(C,{property:"address",label:"Address"})]),_:1})]),_:1},8,["modelValue"]),e(V,{type:"text",onClick:l[2]||(l[2]=_=>u.value=!0)},{default:o(()=>[A]),_:1}),e(y,{modelValue:u.value,"onUpdate:modelValue":l[7]||(l[7]=_=>u.value=_),title:"Shipping address"},{footer:o(()=>[m("span",W,[e(V,{onClick:l[5]||(l[5]=_=>u.value=!1)},{default:o(()=>[q]),_:1}),e(V,{type:"primary",onClick:l[6]||(l[6]=_=>u.value=!1)},{default:o(()=>[H]),_:1})])]),default:o(()=>[e(j,{model:v(t)},{default:o(()=>[e(k,{label:"Promotion name","label-width":a},{default:o(()=>[e(D,{modelValue:v(t).name,"onUpdate:modelValue":l[3]||(l[3]=_=>v(t).name=_),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(k,{label:"Zones","label-width":a},{default:o(()=>[e(S,{modelValue:v(t).region,"onUpdate:modelValue":l[4]||(l[4]=_=>v(t).region=_),placeholder:"Please select a zone"},{default:o(()=>[e(h,{label:"Zone No.1",value:"shanghai"}),e(h,{label:"Zone No.2",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const G=i("Click to open Dialog"),K=m("span",null,"Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered",-1),Q=m("div",null,[m("strong",null,"Extra content (Not rendered)")],-1),X={class:"dialog-footer"},Y=i("Cancel"),ee=i("Confirm"),te=f({setup($){const n=p(!1);return(u,a)=>{const t=s("el-button"),r=s("el-dialog");return c(),g(b,null,[e(t,{type:"text",onClick:a[0]||(a[0]=d=>n.value=!0)},{default:o(()=>[G]),_:1}),e(r,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=d=>n.value=d),title:"Notice",width:"30%","destroy-on-close":"",center:""},{footer:o(()=>[m("span",X,[e(t,{onClick:a[1]||(a[1]=d=>n.value=!1)},{default:o(()=>[Y]),_:1}),e(t,{type:"primary",onClick:a[2]||(a[2]=d=>n.value=!1)},{default:o(()=>[ee]),_:1})])]),default:o(()=>[K,Q]),_:1},8,["modelValue"])],64)}}});var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const oe=i("open the outer Dialog"),le={class:"dialog-footer"},ne=i("Cancel"),ae=i("open the inner Dialog"),se=f({setup($){const n=p(!1),u=p(!1);return(a,t)=>{const r=s("el-button"),d=s("el-dialog");return c(),g(b,null,[e(r,{type:"text",onClick:t[0]||(t[0]=l=>n.value=!0)},{default:o(()=>[oe]),_:1}),e(d,{modelValue:n.value,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value=l),title:"Outer Dialog"},{default:o(()=>[e(d,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value=l),width:"30%",title:"Inner Dialog","append-to-body":""},null,8,["modelValue"])]),footer:o(()=>[m("div",le,[e(r,{onClick:t[2]||(t[2]=l=>n.value=!1)},{default:o(()=>[ne]),_:1}),e(r,{type:"primary",onClick:t[3]||(t[3]=l=>u.value=!0)},{default:o(()=>[ae]),_:1})])]),_:1},8,["modelValue"])],64)}}});var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});export{ue as _,re as a,_e as b,me as c,pe as d};
