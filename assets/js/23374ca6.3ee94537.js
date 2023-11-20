"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"README",id:"README",title:"Getting Started",description:"Welcome to the TruBudget documentation! This guide aims to provide you with information about the different parts of TruBudget.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/README.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Example Use Cases",permalink:"/docs/usecases"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Welcome to the TruBudget documentation! This guide aims to provide you with information about the different parts of TruBudget."),(0,a.kt)("p",null,"\ud83d\udca1 If you want to know more about TruBudget click ",(0,a.kt)("a",{parentName:"p",href:"./usecases"},"here"),"\n\u26a1\ufe0f For the ",(0,a.kt)("strong",{parentName:"p"},"latest release"),", the ",(0,a.kt)("strong",{parentName:"p"},"Getting Started")," section or the ",(0,a.kt)("strong",{parentName:"p"},"FAQ")," visit our initial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/README.md"},"README.md")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./operation-administration/introduction"},"Introduction")," - Some basics of TruBudget"),(0,a.kt)("p",null,"Installation - How to install TruBudget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/bare-metal"},"Bare Metal Installation")," - installation without Docker (deprecated)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/docker"},"Deploying using Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/operation-administration/introduction#environment-variables"},"Environment Variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/operation-administration/introduction#organizations-and-nodes-in-trubudget"},"Organizations and Nodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/connection-process"},"Node connection process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/installation/connect-to-an-existing-network/docker"},"Connect to an existing network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/update-trubudget"},"Update TruBudget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/logging"},"Logging")," - Information on the API log and how to handle it"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/security"},"Security")," - Information on the security aspects of Trubudget"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./known-issues/intro"},"Troubleshooting")," - How to solve known issues")),(0,a.kt)("p",null,"Contributing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./developer/developer-setup"},"Developer Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./operation-administration/logging"},"Logging")," - Information on the API log and how to handle it"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./known-issues/intro"},"Troubleshooting")," - How to solve known issues")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./user-guide/README"},"User Guide")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/projects/project"},"Projects/Subprojects/Workflowitems")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/users-and-groups/user"},"Users and Groups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/network/nodes"},"Network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/backup"},"Backup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/notifications"},"Notifications")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-guide/users-and-groups/permissions"},"Permissions"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/#faq"},"FAQ")," - Frequently asked questions"))}d.isMDXComponent=!0}}]);