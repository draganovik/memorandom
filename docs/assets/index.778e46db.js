import{r as B,o as p,c as y,u as w,a as C,b as _,d as o,e as m,w as k,t as A,f as i,g as u,v as h,F as R,h as J,i as D,n as N,p as L,j as x,k as T,l as U,m as W,q as F,s as P}from"./vendor.c385f223.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};q();var Q=(a,s)=>{for(const[d,n]of s)a[d]=n;return a};const X={};function O(a,s){const d=B("router-view");return p(),y(d)}var M=Q(X,[["render",O]]);const H="modulepreload",S={},V="/",K=function(s,d){return!d||d.length===0?s():Promise.all(d.map(n=>{if(n=`${V}${n}`,n in S)return;S[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":H,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((b,v)=>{r.addEventListener("load",b),r.addEventListener("error",v)})})).then(()=>s())};var z="/assets/icon-game-1.315329f5.svg",j="/assets/icon-game-2.55085f00.svg";const l=a=>(L("data-v-4db14cb1"),a=a(),x(),a),G={class:"flex flex-col gap-6 m-auto p-8 w-full h-full text-center bg-gray-900 rounded-none opacity-95 md:mt-6 md:max-w-xl md:h-auto md:rounded-lg md:opacity-100"},Z=l(()=>o("h1",{class:"text-3xl font-black"},"Izaberite vrstu igre",-1)),Y={class:"flex gap-3 justify-between"},$=l(()=>o("img",{class:"h-14",src:z,alt:"game1 image"},null,-1)),ee=l(()=>o("p",{class:"text-lg"},"Prona\u0111i dve iste",-1)),se=l(()=>o("img",{class:"h-14",src:j,alt:"game2 image"},null,-1)),ae=l(()=>o("p",{class:"text-lg"},"Zapamti poziciju",-1)),oe=l(()=>o("h2",{class:"text-2xl font-bold"},"Dodatne opcije",-1)),ge={class:"grid gap-8 grid-rows-3 align-top text-left md:grid-cols-2 md:grid-rows-2"},te={class:"flex flex-col gap-4 row-start-1 md:row-span-2"},ne={class:"text-lg"},re={class:"text-lg"},de=l(()=>o("p",{class:"mb-3 text-lg"},"Tema kartica:",-1)),ie={class:"flex gap-2 h-20"},ce=["value"],le=l(()=>o("p",{class:"mb-3 text-lg"},"Dizajn pozadine:",-1)),ve={class:"flex gap-2 h-20"},pe=["checked","value","onInput"],_e=l(()=>o("a",{class:"text-gray-700",target:"_blank",href:"https://www.vecteezy.com/free-vector/playing-cards"},"Playing Cards inspiration from Vecteezy",-1)),Ee={setup(a){const s=w(),d=C(()=>s.state.obverseDesigns),n=C(()=>s.state.reverseDesigns);let e=C(()=>s.state.gameSettings);function t(v){s.commit("changeBackDesign",v)}function r(v){s.commit("changeRows",Math.floor(v.target.value))}function b(v){s.commit("changeColumns",v.target.value)}return(v,c)=>{const f=B("router-link");return p(),_("form",G,[Z,o("div",Y,[m(f,{to:"/playClassic",class:"ratio-wide grid place-items-center py-2 w-1/2 hover:bg-gray-600 bg-gray-700 rounded"},{default:k(()=>[$,ee]),_:1}),m(f,{to:"/playAdvanced",class:"ratio-wide grid place-items-center py-2 w-1/2 hover:bg-gray-600 bg-gray-700 rounded"},{default:k(()=>[se,ae]),_:1})]),oe,o("div",ge,[o("div",te,[o("p",ne,"Broj redova: "+A(Math.floor(i(e).rows)),1),u(o("input",{"onUpdate:modelValue":c[0]||(c[0]=g=>i(e).rows=g),class:"w-full",type:"range",min:"3",step:"1.5",max:"6",onInput:c[1]||(c[1]=g=>r(g))},null,544),[[h,i(e).rows]]),o("p",re,"Broj kolona: "+A(i(e).columns),1),u(o("input",{"onUpdate:modelValue":c[2]||(c[2]=g=>i(e).columns=g),class:"w-full",type:"range",min:"4",max:"6",onInput:c[3]||(c[3]=g=>b(g))},null,544),[[h,i(e).columns]])]),o("div",null,[de,o("div",ie,[(p(!0),_(R,null,J(i(d),g=>u((p(),_("input",{key:g,"onUpdate:modelValue":c[4]||(c[4]=I=>i(e).cardDesign=I),type:"radio",name:"card-design",value:g.name,style:N({"--bg-image":"url("+g.image+")"}),class:"ratio-narrow"},null,12,ce)),[[D,i(e).cardDesign]])),128))])]),o("div",null,[le,o("div",ve,[(p(!0),_(R,null,J(i(n),g=>(p(),_("input",{key:g,checked:g.name==i(e).backDesign,type:"radio",name:"back-design",value:g.name,style:N({"--bg-image":"url("+g.image+")"}),class:"ratio-narrow",onInput:I=>t(g.name)},null,44,pe))),128))])])]),_e])}}};var be=Q(Ee,[["__scopeId","data-v-4db14cb1"]]);const Be={name:"GameMenu",components:{GamePicker:be}},Ce={class:"home"};function me(a,s,d,n,e,t){const r=B("GamePicker");return p(),_("main",Ce,[m(r)])}var ue=Q(Be,[["render",me]]);const Qe=[{path:"/",name:"Menu",component:ue},{path:"/playClassic",name:"Clasic",component:()=>K(()=>import("./GameBoardClassic.97e18cff.js"),["assets/GameBoardClassic.97e18cff.js","assets/GameBoardAdvanced.b9313639.css","assets/icon-menu.57281e8d.js","assets/vendor.c385f223.js"])},{path:"/playAdvanced",name:"Advanced",component:()=>K(()=>import("./GameBoardAdvanced.0a670958.js"),["assets/GameBoardAdvanced.0a670958.js","assets/GameBoardAdvanced.b9313639.css","assets/icon-menu.57281e8d.js","assets/vendor.c385f223.js"])},{path:"/:pathMatch(.*)*",redirect:{name:"Menu"}}],fe=T({history:U("/"),routes:Qe});var Ie="/assets/default.3adcf284.png",ke="/assets/flora.12888672.png",Ae="/assets/retro.70cb527f.png",he="/assets/royal.43cfe612.png",Re="/assets/design-back-dev-1.832dd68b.png",Je="/assets/design-back-dev-10.a9170ba1.png",Ne="/assets/design-back-dev-11.b57a5940.png",Se="/assets/design-back-dev-12.871ac267.png",Ke="/assets/design-back-dev-13.7fd6315d.png",ye="/assets/design-back-dev-14.800cd77a.png",we="/assets/design-back-dev-15.70dd7f51.png",De="/assets/design-back-dev-16.0b8879c4.png",Le="/assets/design-back-dev-17.b4a64a3f.png",xe="/assets/design-back-dev-18.c0276eca.png",Te="/assets/design-back-dev-19.efb14ccb.png",Ue="/assets/design-back-dev-2.6896db36.png",We="/assets/design-back-dev-20.fc1f32bc.png",Fe="/assets/design-back-dev-21.9b79276c.png",Pe="/assets/design-back-dev-22.2838c2ae.png",qe="/assets/design-back-dev-23.03abd8c7.png",Xe="/assets/design-back-dev-24.6740fb66.png",Oe="/assets/design-back-dev-25.a4c9002c.png",Me="/assets/design-back-dev-26.f3c64c44.png",He="/assets/design-back-dev-27.3a4dad95.png",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAHGCAYAAADquzlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqOSURBVHgB7d1daJX3Acfx/zmxvsS2S6xU2HwJvWirrC/ejqL2or3b6s022At1IOyuo27QMdi0pRcdlaEdjK0M5mB6u2xe7GJjuNKr3mhlTAutizo6ItqEVo0vzTl7nqCgIzFPqNbk/D4fOPH4nP9z9MTw9f/PyZ+nVWbRHTs8MNFZsq3dbm+ufvdkdWioAMxLrfGqU0e6nc4/Jie7w/c++OUjs54x0wMTY8eG2qXs7JbW1upJBwrAwnOoiuHe5Ss3DM80YNoIXho7/oPql13iB/SCKnT7FpdLL7YGN45P89jNLo8dq2Z/dQABespI1banlw2uH7nx4E0RFECgx40sKZc23jgjbF+/Uy+BBRDocUOXy9I/3nhgaiZYvwnSKq3DvgcIROh0X1z6wIY99d32tQ87BRBI0Wq3d9Y//lffb9ezwGoZvK0AhOhWk77LnSXb6vuLyuTkltLX1+jE8YufloNHRsvJcxMFYD4Z6F9UvvrkqrLugWXNTmi3nqs+7mm3+9rPNRl/9PTH5dGfHCp/fne0AMw3757+pDy7+53y6sH3m56ypV4SL+qW9lA9ObyVeub39V8dLm8+/1j52sZVBWA+qltVh3DTwyvKpkdWzDr+Qrmn3hk3tR/4lt5676Py+Nr7BBCY1+ql8OvfXF9++feRRuNb1SSw3WRgXdcnVt9fAOa7J9bcV46e+qTR2PZkZ6BRBAF6lQgC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKItKkE6Fy6WyfMXCzC9vnv7S3t5f0kSFcEPf32gjP3t7QJMb/CZp8rqHdtLEsthIJoIAtFEEIgmgkA0EQSiiSAQTQSBaCIIRBNBIJoIAtGits3NxYPf3lpWfWdrWUhOvPRauXD0eKOxC/H1Hd/2o3J19GyjsfXWr3oLGKWM/mG4nNk/XJiemSAQTQSBaCIIRBNBIJoIAtFEEIgmgkA0EQSiiSAQTQSBaLbNfc4mL1wsJ195o/H4NTu2l3tWrSwLxVxf30M//3FZSC59cKp8+OaBRmPry1eu++kLpan//OK35UrDbYFf/P63ytKH1hY+OxH8nNXXPW66v3ch6vnXd6H561s8x/+8zlfP23RvtOtn3z6Ww0A0EQSiiSAQTQSBaCIIRBNBIJoIAtFEEIgmgkA0EQSiiSAQTQSBaCIIRBNBIJoIAtFEEIgmgkA0EQSiiSAQTQSBaC60xG1VX2Ft8JmnCiwUIsht1be8v6zesb3AQmE5DEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCESzY2QGV8+cLReOHi+325XRs3MaP3HiVONzJs9fLPPBnfi81TpzeH1XR+/Mv9/EB6fmNH4uf4e5vL7666Kp+muZmYngDMb++vbU7W47+cobZSGpg33ipdfK3Ta6f7iU/eWuupOfi//+5kDh9rAcBqKJIBBNBIFoIghEE0EgmggC0UQQiCaCQDQRBKKJIBAtatvc6h9un7r1qnqLVtO9qmf2D0/d7rbH/rKvwN1kJghEE0EgmggC0UQQiCaCQDQRBKKJIBBNBIFoIghEE0EgmqvN9ZB1P3thTpdtBESwp/Qt75+6Ac1ZDgPRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookgEE0EgWgiCEQTQSCaCALRRBCIJoJANBEEookg0FPGL35aBvoXNR5fRbA1Ptugx9fcX95676MCMN8dPf1xWbtyWbPBfX0jVQS7s0Zw88MryslzE+XVg+8XgPnqeqd2f2N9o/GTZXK8NXHuX/ta7dbzTZ782d3vTN3f9MiKAjCf1I2qZ4GvVwH87le+NOv4VrUKXjL46GBr4uw/t7X6+n5XGqqXxfUfBjCffKH/nrKpWrU2/X5gp9v9U/+KDVtbY2OHB5aVZf+ulsUDBSBEt5TvLRtcv689OLhxvNuZ3FsAcozUAazvTP2IzKX2lT31wQIQoJoFvnz9/lQEp2aD1dSwAPS87t7rs8Ba68aHJsaO7aoO7CwAPah6R/hI9Y7wxhuP3bRjpKrjrhuniQA95NDiMvH0/x9sTTeymhFuqR6of2xmqAAsaPWuuM7LSwc37Jn20VudWsVw27Xl8VABWFCq+HU6v++2W3uqVe7IjKNKA/XMsHqyLa12e/O1Q0MFYN5pHaladbIK35Gl5dJwq3rTd7Yz/gfMtamnpmOCzAAAAABJRU5ErkJggg==",ze="/assets/design-back-dev-29.f7123814.png",je="/assets/design-back-dev-3.c11488de.png",Ge="/assets/design-back-dev-30.ffc08539.png",Ze="/assets/design-back-dev-31.fd25ceb9.png",Ye="/assets/design-back-dev-32.f3429db4.png",$e="/assets/design-back-dev-33.dc9355c4.png",es="/assets/design-back-dev-34.a041e0d2.png",ss="/assets/design-back-dev-35.a250764a.png",as="/assets/design-back-dev-36.29a85727.png",os="/assets/design-back-dev-4.ce9197d2.png",gs="/assets/design-back-dev-5.8fcd4d1e.png",ts="/assets/design-back-dev-6.499d4aa9.png",ns="/assets/design-back-dev-7.b1bcd97e.png",rs="/assets/design-back-dev-8.799053db.png",ds="/assets/design-back-dev-9.8f2bd91c.png";function is(a){return new URL({"../assets/obverse/developer/design-back-dev-1.png":Re,"../assets/obverse/developer/design-back-dev-10.png":Je,"../assets/obverse/developer/design-back-dev-11.png":Ne,"../assets/obverse/developer/design-back-dev-12.png":Se,"../assets/obverse/developer/design-back-dev-13.png":Ke,"../assets/obverse/developer/design-back-dev-14.png":ye,"../assets/obverse/developer/design-back-dev-15.png":we,"../assets/obverse/developer/design-back-dev-16.png":De,"../assets/obverse/developer/design-back-dev-17.png":Le,"../assets/obverse/developer/design-back-dev-18.png":xe,"../assets/obverse/developer/design-back-dev-19.png":Te,"../assets/obverse/developer/design-back-dev-2.png":Ue,"../assets/obverse/developer/design-back-dev-20.png":We,"../assets/obverse/developer/design-back-dev-21.png":Fe,"../assets/obverse/developer/design-back-dev-22.png":Pe,"../assets/obverse/developer/design-back-dev-23.png":qe,"../assets/obverse/developer/design-back-dev-24.png":Xe,"../assets/obverse/developer/design-back-dev-25.png":Oe,"../assets/obverse/developer/design-back-dev-26.png":Me,"../assets/obverse/developer/design-back-dev-27.png":He,"../assets/obverse/developer/design-back-dev-28.png":Ve,"../assets/obverse/developer/design-back-dev-29.png":ze,"../assets/obverse/developer/design-back-dev-3.png":je,"../assets/obverse/developer/design-back-dev-30.png":Ge,"../assets/obverse/developer/design-back-dev-31.png":Ze,"../assets/obverse/developer/design-back-dev-32.png":Ye,"../assets/obverse/developer/design-back-dev-33.png":$e,"../assets/obverse/developer/design-back-dev-34.png":es,"../assets/obverse/developer/design-back-dev-35.png":ss,"../assets/obverse/developer/design-back-dev-36.png":as,"../assets/obverse/developer/design-back-dev-4.png":os,"../assets/obverse/developer/design-back-dev-5.png":gs,"../assets/obverse/developer/design-back-dev-6.png":ts,"../assets/obverse/developer/design-back-dev-7.png":ns,"../assets/obverse/developer/design-back-dev-8.png":rs,"../assets/obverse/developer/design-back-dev-9.png":ds}[`../assets/obverse/developer/${a}.png`],self.location).href}function E(a){return new URL({"../assets/reverse/default.png":Ie,"../assets/reverse/flora.png":ke,"../assets/reverse/retro.png":Ae,"../assets/reverse/royal.png":he}[`../assets/reverse/${a}.png`],self.location).href}var cs=W({state:{gameSettings:{rows:3,columns:4,backDesign:"default",cardDesign:"developer"},obverseDesigns:[{name:"developer",image:is("design-back-dev-6")}],reverseDesigns:[{name:"default",image:E("default")},{name:"royal",image:E("royal")},{name:"retro",image:E("retro")},{name:"flora",image:E("flora")}]},mutations:{changeBackDesign(a,s){a.gameSettings.backDesign=s},changeRows(a,s){a.gameSettings.rows=s},changeColumns(a,s){a.gameSettings.columns=s}},actions:{},modules:{},plugins:[F()]});P(M).use(cs).use(fe).mount("body");export{Ge as A,Ze as B,Ye as C,$e as D,es as E,ss as F,as as G,os as H,gs as I,ts as J,ns as K,rs as L,ds as M,Ie as _,ke as a,Ae as b,he as c,Re as d,Je as e,Ne as f,Se as g,Ke as h,ye as i,we as j,De as k,Le as l,xe as m,Te as n,Ue as o,We as p,Fe as q,Pe as r,qe as s,Xe as t,Oe as u,Me as v,He as w,Ve as x,ze as y,je as z};
