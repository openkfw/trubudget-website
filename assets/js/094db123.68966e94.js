"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[71016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),k=o,f=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},38543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={},i="service/workflowitem_close",l={unversionedId:"developer/api-docs/modules/service_workflowitem_close",id:"developer/api-docs/modules/service_workflowitem_close",title:"service/workflowitem\\_close",description:"Api Code Documentation / Exports / service/workflowitem\\_close",source:"@site/docs/developer/api-docs/modules/service_workflowitem_close.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_workflowitem_close",permalink:"/docs/developer/api-docs/modules/service_workflowitem_close",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_workflowitem_close.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/workflowitem\\_assign",permalink:"/docs/developer/api-docs/modules/service_workflowitem_assign"},next:{title:"service/workflowitem\\_create",permalink:"/docs/developer/api-docs/modules/service_workflowitem_create"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"closeWorkflowitem",id:"closeworkflowitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serviceworkflowitem_close"},"service/workflowitem","_","close"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/workflowitem","_","close"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_workflowitem_close#closeworkflowitem"},"closeWorkflowitem"))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"closeworkflowitem"},"closeWorkflowitem"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"closeWorkflowitem"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subprojectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"workflowitemId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rejectReason?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"conn")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,o.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"projectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"subprojectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"workflowitemId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"rejectReason?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/workflowitem_close.ts#L17"},"src/service/workflowitem_close.ts:17")))}m.isMDXComponent=!0}}]);