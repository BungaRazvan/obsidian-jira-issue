(()=>{"use strict";var e,r,t,a,o,n={},f={};function i(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=n,i.c=f,e=[],i.O=(r,t,a,o)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,c=0;c<t.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(f=!1,o<n&&(n=o));if(f){e.splice(b--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,a,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,i.d(o,n),o},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>"assets/js/"+({18:"5f7b5705",23:"5eb660a6",53:"935f2afb",79:"c10eb4f5",85:"1f391b9e",165:"ad721137",237:"1df93b7f",239:"bcfcdef5",362:"ca0c03ea",414:"393be207",495:"1eccb86a",514:"1be78505",561:"7f7039ba",716:"33c01ea7",770:"d8ef5e2a",782:"b945e095",803:"092b22b6",817:"14eb3368",866:"3f9cc1fd",896:"ed1ef8fa",918:"17896441"}[e]||e)+"."+{18:"8e00bdba",23:"2d937851",53:"0ab70ffd",79:"54557335",85:"4cc9d808",165:"42cddf33",237:"3ec77547",239:"1ee4af5f",362:"126c7693",414:"e15a8c55",495:"fd6cbd56",514:"3fce5c2d",561:"8958fe98",666:"810aec87",716:"b57b8a89",770:"a0636e99",782:"f68d50b1",803:"349d7b4d",817:"41b8afc7",866:"e944e7b0",896:"961d759e",918:"faa2d554",972:"03ea057b"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="obsidian-jira-issue:",i.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var f,c;if(void 0!==t)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",o+t),f.src=e),a[e]=[r];var s=(r,t)=>{f.onerror=f.onload=null,clearTimeout(l);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),r)return r(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),c&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/obsidian-jira-issue/",i.gca=function(e){return e={17896441:"918","5f7b5705":"18","5eb660a6":"23","935f2afb":"53",c10eb4f5:"79","1f391b9e":"85",ad721137:"165","1df93b7f":"237",bcfcdef5:"239",ca0c03ea:"362","393be207":"414","1eccb86a":"495","1be78505":"514","7f7039ba":"561","33c01ea7":"716",d8ef5e2a:"770",b945e095:"782","092b22b6":"803","14eb3368":"817","3f9cc1fd":"866",ed1ef8fa:"896"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(r,t)=>{var a=i.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=i.p+i.u(r),f=new Error;i.l(n,(t=>{if(i.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],f=t[1],c=t[2],d=0;if(n.some((r=>0!==e[r]))){for(a in f)i.o(f,a)&&(i.m[a]=f[a]);if(c)var b=c(i)}for(r&&r(t);d<n.length;d++)o=n[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(b)},t=self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();