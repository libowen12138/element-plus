import{a as s,d as a,w as l}from"./with-install.932aa1ce.js";import{j as n,k as r,l as i,v as o,t as d,E as p,x as c}from"./framework.506ba982.js";const v=s({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:a(String),default:"solid"}});var t=n({name:"ElDivider",props:v});function f(e,m,u,y,$,S){return r(),i("div",{class:o(["el-divider",`el-divider--${e.direction}`]),style:c({"--el-border-style":e.borderStyle})},[e.$slots.default&&e.direction!=="vertical"?(r(),i("div",{key:0,class:o(["el-divider__text",`is-${e.contentPosition}`])},[d(e.$slots,"default")],2)):p("v-if",!0)],6)}t.render=f;t.__file="packages/components/divider/src/divider.vue";const b=l(t);export{b as E};
