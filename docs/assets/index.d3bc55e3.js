import{r as v,o as _,c as j,u as A,a as h,b as p,d as a,e as y,w as D,t as $,f as i,g as b,v as I,F as P,h as C,i as M,n as L,p as S,j as E,k as G,l as O,m as V,q as z,s as N}from"./vendor.c385f223.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};U();var x=(s,t)=>{for(const[c,n]of t)s[c]=n;return s};const T={};function q(s,t){const c=v("router-view");return _(),j(c)}var F=x(T,[["render",q]]);const W="modulepreload",B={},H="/",R=function(t,c){return!c||c.length===0?t():Promise.all(c.map(n=>{if(n=`${H}${n}`,n in B)return;B[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const l=document.createElement("link");if(l.rel=e?"stylesheet":W,e||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),e)return new Promise((f,m)=>{l.addEventListener("load",f),l.addEventListener("error",m)})})).then(()=>t())};var K="/assets/icon-game-1.315329f5.svg",Z="/assets/icon-game-2.55085f00.svg";const u=s=>(S("data-v-55fe3577"),s=s(),E(),s),J={class:"flex flex-col gap-6 m-auto p-8 max-w-xl text-center bg-gray-900 rounded-lg"},Q=u(()=>a("h1",{class:"text-3xl font-black"},"Izaberite vrstu igre",-1)),X={class:"flex gap-3 justify-between"},Y=u(()=>a("img",{class:"h-14",src:K,alt:"game1 image"},null,-1)),ee=u(()=>a("p",{class:"text-lg"},"Prona\u0111i dve iste",-1)),te=u(()=>a("img",{class:"h-14",src:Z,alt:"game2 image"},null,-1)),se=u(()=>a("p",{class:"text-lg"},"Zapamti poziciju",-1)),ae=u(()=>a("h2",{class:"text-2xl font-bold"},"Dodatne opcije",-1)),oe={class:"grid gap-8 grid-cols-2 grid-rows-2 align-top text-left"},re={class:"flex flex-col gap-4 row-span-2 row-start-1"},ne={class:"text-lg"},le={class:"text-lg"},ce=u(()=>a("p",{class:"mb-3 text-lg"},"Tema kartica:",-1)),ie={class:"flex gap-2 h-20"},de=["value"],ue=u(()=>a("p",{class:"mb-3 text-lg"},"Dizajn pozadine:",-1)),me={class:"flex gap-2 h-20"},_e=["checked","value","onInput"],pe=u(()=>a("a",{class:"text-gray-700",target:"_blank",href:"https://www.vecteezy.com/free-vector/playing-cards"},"Playing Cards inspiration from Vecteezy",-1)),ge={setup(s){const t=A(),c=h(()=>t.state.obverseDesigns),n=h(()=>t.state.reverseDesigns);let e=h(()=>t.state.gameData);function r(m){t.commit("changeBackDesign",m)}function l(m){t.commit("changeRows",Math.floor(m.target.value))}function f(m){t.commit("changeColumns",m.target.value)}return(m,d)=>{const w=v("router-link");return _(),p("form",J,[Q,a("div",X,[y(w,{to:"/playClassic",class:"ratio-wide grid place-items-center py-2 w-1/2 hover:bg-gray-600 bg-gray-700 rounded"},{default:D(()=>[Y,ee]),_:1}),y(w,{to:"/playAdvanced",class:"ratio-wide grid place-items-center py-2 w-1/2 hover:bg-gray-600 bg-gray-700 rounded"},{default:D(()=>[te,se]),_:1})]),ae,a("div",oe,[a("div",re,[a("p",ne,"Broj redova: "+$(Math.floor(i(e).rows)),1),b(a("input",{"onUpdate:modelValue":d[0]||(d[0]=o=>i(e).rows=o),class:"w-full",type:"range",min:"3",step:"1.5",max:"6",onInput:d[1]||(d[1]=o=>l(o))},null,544),[[I,i(e).rows]]),a("p",le,"Broj kolona: "+$(i(e).columns),1),b(a("input",{"onUpdate:modelValue":d[2]||(d[2]=o=>i(e).columns=o),class:"w-full",type:"range",min:"4",max:"6",onInput:d[3]||(d[3]=o=>f(o))},null,544),[[I,i(e).columns]])]),a("div",null,[ce,a("div",ie,[(_(!0),p(P,null,C(i(c),o=>b((_(),p("input",{key:o,"onUpdate:modelValue":d[4]||(d[4]=k=>i(e).cardDesign=k),type:"radio",name:"card-design",value:o.name,style:L({"--bg-image":"url("+o.image+")"}),class:"ratio-narrow"},null,12,de)),[[M,i(e).cardDesign]])),128))])]),a("div",null,[ue,a("div",me,[(_(!0),p(P,null,C(i(n),o=>(_(),p("input",{key:o,checked:o.name==i(e).backDesign,type:"radio",name:"back-design",value:o.name,style:L({"--bg-image":"url("+o.image+")"}),class:"ratio-narrow",onInput:k=>r(o.name)},null,44,_e))),128))])])]),pe])}}};var fe=x(ge,[["__scopeId","data-v-55fe3577"]]);const ve={name:"GameMenu",components:{GamePicker:fe}},he={class:"home"};function ye(s,t,c,n,e,r){const l=v("GamePicker");return _(),p("main",he,[y(l)])}var be=x(ve,[["render",ye],["__scopeId","data-v-de6be51a"]]);const xe=[{path:"/",name:"Menu",component:be},{path:"/playClassic",name:"Clasic",component:()=>R(()=>import("./GameBoardClassic.4602d391.js"),["assets/GameBoardClassic.4602d391.js","assets/GameBoardAdvanced.b9313639.css","assets/design-back-dev-9.8b29f70f.js","assets/vendor.c385f223.js"])},{path:"/playAdvanced",name:"Advanced",component:()=>R(()=>import("./GameBoardAdvanced.1e36a14a.js"),["assets/GameBoardAdvanced.1e36a14a.js","assets/GameBoardAdvanced.b9313639.css","assets/design-back-dev-9.8b29f70f.js","assets/vendor.c385f223.js"])},{path:"/:pathMatch(.*)*",redirect:{name:"Menu"}}],we=G({history:O("/"),routes:xe});var ke="/assets/default.3adcf284.png",De="/assets/flora.12888672.png",$e="/assets/retro.70cb527f.png",Ie="/assets/royal.43cfe612.png";function Pe(s){return new URL({}[`../assets/obverse/${s}.png`],self.location).href}function g(s){return new URL({"../assets/reverse/default.png":ke,"../assets/reverse/flora.png":De,"../assets/reverse/retro.png":$e,"../assets/reverse/royal.png":Ie}[`../assets/reverse/${s}.png`],self.location).href}var Ce=V({state:{gameData:{rows:3,columns:4,backDesign:"default",cardDesign:"developer"},obverseDesigns:[{name:"developer",image:Pe("developer/design-back-dev-6")}],reverseDesigns:[{name:"default",image:g("default")},{name:"royal",image:g("royal")},{name:"retro",image:g("retro")},{name:"flora",image:g("flora")}]},mutations:{changeBackDesign(s,t){s.gameData.backDesign=t},changeRows(s,t){s.gameData.rows=t},changeColumns(s,t){s.gameData.columns=t}},actions:{},modules:{},plugins:[z()]});N(F).use(Ce).use(we).mount("body");export{ke as _,De as a,$e as b,Ie as c};