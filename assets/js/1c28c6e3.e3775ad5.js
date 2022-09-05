"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},l="Installation",o={unversionedId:"get-started/installation",id:"get-started/installation",title:"Installation",description:"The installation of the plugin is standard and it is the same as all the other community plugins.",source:"@site/docs/get-started/installation.md",sourceDirName:"get-started",slug:"/get-started/installation",permalink:"/obsidian-jira-issue/docs/get-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/obsidian-jira-issue/docs/get-started/introduction"},next:{title:"Basic authentication",permalink:"/obsidian-jira-issue/docs/get-started/basic-authentication"}},s={},u=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Manual installation",id:"manual-installation",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The installation of the plugin is standard and it is the same as all the other community plugins."),(0,i.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access the options of your Obsidian.md installation"),(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("em",{parentName:"li"},"Community plugins")," tab"),(0,i.kt)("li",{parentName:"ul"},"Make sure the ",(0,i.kt)("em",{parentName:"li"},"Restricted Mode")," is disabled"),(0,i.kt)("li",{parentName:"ul"},"Click on the button to Browse the Community plugins"),(0,i.kt)("li",{parentName:"ul"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"Jira Issue")),(0,i.kt)("li",{parentName:"ul"},"Install the plugin"),(0,i.kt)("li",{parentName:"ul"},"Enable the plugin")),(0,i.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/marc0l92/obsidian-jira-issue/releases"},"GitHub releases page")),(0,i.kt)("li",{parentName:"ul"},"Download from the last release the 3 files:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"styles.css")))),(0,i.kt)("li",{parentName:"ul"},"Access to the folder of your Obsidian.md vault"),(0,i.kt)("li",{parentName:"ul"},"Browse to the folder ",(0,i.kt)("inlineCode",{parentName:"li"},".obsidian\\plugins"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This folder may be hidden in some operating systems"))),(0,i.kt)("li",{parentName:"ul"},"Create the folder ",(0,i.kt)("inlineCode",{parentName:"li"},"obsidian-jira-issue")),(0,i.kt)("li",{parentName:"ul"},"Move the 3 downloaded files in the folder ",(0,i.kt)("inlineCode",{parentName:"li"},"obsidian-jira-issue"))))}c.isMDXComponent=!0}}]);