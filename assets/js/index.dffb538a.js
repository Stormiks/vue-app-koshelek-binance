(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},o={index:0},c=[];function u(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-2d0b91da":"f06a0dd9","chunk-2d0d2fa3":"1c74b660","chunk-2d0e4a43":"2c2aa689","chunk-494ad81a":"e7303bed","chunk-bdbc7bcc":"3a71f134"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-494ad81a":1,"chunk-bdbc7bcc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-2d0b91da":"31d6cfe0","chunk-2d0d2fa3":"31d6cfe0","chunk-2d0e4a43":"31d6cfe0","chunk-494ad81a":"e3c03363","chunk-bdbc7bcc":"c31c6675"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-app-koshelek-binance/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("def6"),n("98b9");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},u=c,i=n("2877"),s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,d=n("8c4f");const f=(e,t,n)=>{n()},p=(e,t)=>{r["a"].nextTick(()=>{document.title=e.meta.title||""})},h=()=>n.e("chunk-bdbc7bcc").then(n.bind(null,"9be7")),m=()=>n.e("chunk-2d0b91da").then(n.bind(null,"3227")),b={path:"/",component:h,redirect:{name:"Trade"},children:[{path:"trade",name:"Trade",component:()=>n.e("chunk-494ad81a").then(n.bind(null,"50a1")),meta:{title:"Биржа"}},{path:"statistics",name:"Statistics",component:()=>n.e("chunk-2d0d2fa3").then(n.bind(null,"5b99")),meta:{title:"Статистика"}}]},v={path:"*",component:m,redirect:{name:"Error-Not-Found"},children:[{path:"page-not-found",name:"Error-Not-Found",component:()=>n.e("chunk-2d0e4a43").then(n.bind(null,"90a7"))}]},y=[b,v];r["a"].use(d["a"]);const g={mode:"history",base:"/vue-app-koshelek-binance/",routes:y},k=new d["a"](g);k.beforeEach(f),k.afterEach(p);var S=k,w=n("2f62");r["a"].use(w["a"]);const O="crypto-list",T=JSON.parse(localStorage.getItem(O))||[];var E=new w["a"].Store({state:{symbols:T,availableSymbolsName:["BTCUSDT","BNBBTC","ETHBTC"]},mutations:{setArrayOfSelectedSymbols(e,t){e.symbols=t}},actions:{saveListTikers({commit:e},t){localStorage.setItem(O,JSON.stringify(t)),e("setArrayOfSelectedSymbols",t)}},getters:{symbolNames(e){return e.symbols.map(e=>Object.keys(e)[0])||[]}}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:E,render:e=>e(l)}).$mount("#app")},"98b9":function(e,t,n){},def6:function(e,t,n){}});