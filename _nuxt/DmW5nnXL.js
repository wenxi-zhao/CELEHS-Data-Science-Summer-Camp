const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BYJniiai.js","./DMhU7S1X.js","./zThUh2gR.js","./I-tHJLlU.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as p,u as f}from"./I-tHJLlU.js";import{q as v,w as m,e as g,s as d,j as l,u as h,a as _}from"./zThUh2gR.js";import{R as y,J as C,y as w,Y as P,i as $,Z as N,A as j,H as r}from"./DMhU7S1X.js";import{_ as T}from"./DSijcAZJ.js";const D=async e=>{const{content:t}=y().public;typeof(e==null?void 0:e.params)!="function"&&(e=v(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${g(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(d())return(await C(()=>import("./BYJniiai.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:f().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=w({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=P(e),a=$(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&N("dd-navigation").value){const{navigation:n}=h();return{navigation:n}}const{data:s}=await _(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=j(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),L=E;export{L as default};
