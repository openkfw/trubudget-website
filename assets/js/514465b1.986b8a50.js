"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},p="project_update",i={unversionedId:"developer/api-docs/modules/project_update",id:"developer/api-docs/modules/project_update",title:"project\\_update",description:"Api Code Documentation / Exports / project\\_update",source:"@site/docs/developer/api-docs/modules/project_update.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/project_update",permalink:"/docs/developer/api-docs/modules/project_update",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/project_update.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"project\\_permissions\\_list",permalink:"/docs/developer/api-docs/modules/project_permissions_list"},next:{title:"project\\_view\\_details",permalink:"/docs/developer/api-docs/modules/project_view_details"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:l},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project_update"},"project","_","update"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / project","_","update"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/project_update#addhttphandler"},"addHttpHandler"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"addhttphandler"},"addHttpHandler"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addHttpHandler"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Creates an http handler that handles incoming http requests for the ",(0,a.kt)("inlineCode",{parentName:"p"},"/project.update")," route"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"server")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/types.AugmentedFastifyInstance"},(0,a.kt)("inlineCode",{parentName:"a"},"AugmentedFastifyInstance"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"the current fastify server instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the prefix of the http url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"service")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Service")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the service Service object used to offer an interface to the domain logic")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/project_update.ts#L133"},"src/project_update.ts:133")))}u.isMDXComponent=!0}}]);