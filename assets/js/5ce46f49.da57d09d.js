"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,f=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Kanban plugin compatibility",c={unversionedId:"extra/kanban-plugin",id:"extra/kanban-plugin",title:"Kanban plugin compatibility",description:"The Jira Issue plugin can be integrated with the obsidian-kanban plugin in order to create nice Kanban board that allows you to track the progress of your task.",source:"@site/docs/extra/kanban-plugin.md",sourceDirName:"extra",slug:"/extra/kanban-plugin",permalink:"/obsidian-jira-issue/docs/extra/kanban-plugin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/obsidian-jira-issue/docs/category/extra"},next:{title:"Changelog",permalink:"/obsidian-jira-issue/docs/changelog/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kanban-plugin-compatibility"},"Kanban plugin compatibility"),(0,a.kt)("p",null,"The Jira Issue plugin can be integrated with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mgmeyers/obsidian-kanban"},"obsidian-kanban plugin")," in order to create nice Kanban board that allows you to track the progress of your task."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kanban1",src:n(1150).Z,width:"1145",height:"453"})),(0,a.kt)("p",null,"It is recommended to use inside the Kanban cards the ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/inline-issue"},"inline issue")," syntax in compact mode. This approach will reduce the amount of information in each card."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JIRA:-TEZ-4431\n- [x] QA validation\n- [ ] Load to production\n- [ ] Client Validation\n")))}u.isMDXComponent=!0},1150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kanban1-282fe10af88a957ce77bafbae4bc3364.png"}}]);