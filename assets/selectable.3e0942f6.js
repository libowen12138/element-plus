import{j as p,z as h,k as b,A as g,u as f,B as S,q as $,v as w,G as N,e as k,l as j,H as K,I as x}from"./framework.506ba982.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const A=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,a=1,n="node")=>{let r=0;return new Array(o).fill(a).map(()=>{const c=a===e?0:Math.round(Math.random()*t),l=u(n,++r);return{id:l,label:l,children:c?s(e,t,c,a+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,height:208},null,8,["data"])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const O=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,a=1,n="node")=>{let r=0;return new Array(o).fill(a).map(()=>{const c=a===e?0:Math.round(Math.random()*t),l=u(n,++r);return{id:l,label:l,children:c?s(e,t,c,a+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,height:208},{default:S(({node:a})=>[$("span",{class:w(["prefix",{"is-leaf":a.isLeaf}])},"[ElementPlus]",2),$("span",null,N(a.label),1)]),_:1},8,["data"])}}});var T=z(O,[["__scopeId","data-v-9ebdb8d0"]]),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const B=p({setup(v){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,l=1,m="node")=>{let M=0;return new Array(c).fill(l).map(()=>{const y=l===n?0:Math.round(Math.random()*r),i=u(m,++M);return{id:i,label:i,children:y?s(n,r,y,l+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(let n=0;n<d.length;++n){const r=d[n].children;if(r){t.push(d[n].id),e.push(r[0].id);break}}const o=k(e),a=k(t);return(n,r)=>{const c=h("el-tree-v2");return b(),g(c,{data:f(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":a.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const V=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,a=1,n="node")=>{let r=0;return new Array(o).fill(a).map(()=>{const c=a===e?0:Math.round(Math.random()*t),l=u(n,++r);return{id:l,label:l,children:c?s(e,t,c,a+1,l):void 0}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const E=p({setup(v){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,l=1,m="node")=>{let M=0;return new Array(c).fill(l).map(()=>{const y=l===n?0:Math.round(Math.random()*r),i=u(m,++M);return{id:i,label:i,children:y?s(n,r,y,l+1,i):void 0}})},_=k(""),d=k(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=n=>{d.value.filter(n)},a=(n,r)=>r.label.indexOf(n)!==-1;return(n,r)=>{const c=h("el-input"),l=h("el-tree-v2");return b(),j(x,null,[K(c,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=m=>_.value=m),placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),K(l,{ref_key:"treeRef",ref:d,data:f(e),props:t,"filter-method":a,height:208},null,8,["data"])],64)}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const I=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,a=1,n="node")=>{let r=0;return new Array(o).fill(a).map(()=>{const c=a===e?0:Math.round(Math.random()*t),l=u(n,++r);return{id:l,label:l,children:c?s(e,t,c,a+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});export{R as _,D as a,F as b,G as c,H as d,L as e};
