"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[81839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i="service/workflowitem_create",l={unversionedId:"developer/api-docs/modules/service_workflowitem_create",id:"developer/api-docs/modules/service_workflowitem_create",title:"service/workflowitem\\_create",description:"Api Code Documentation / Exports / service/workflowitem\\_create",source:"@site/docs/developer/api-docs/modules/service_workflowitem_create.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_workflowitem_create",permalink:"/docs/developer/api-docs/modules/service_workflowitem_create",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_workflowitem_create.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/workflowitem\\_close",permalink:"/docs/developer/api-docs/modules/service_workflowitem_close"},next:{title:"service/workflowitem\\_document\\_download",permalink:"/docs/developer/api-docs/modules/service_workflowitem_document_download"}},c={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"References",id:"references",level:3},{value:"Functions",id:"functions",level:3},{value:"References",id:"references-1",level:2},{value:"RequestData",id:"requestdata",level:3},{value:"Functions",id:"functions-1",level:2},{value:"createWorkflowitem",id:"createworkflowitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serviceworkflowitem_create"},"service/workflowitem","_","create"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,n.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/workflowitem","_","create"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_workflowitem_create#requestdata"},"RequestData"))),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_workflowitem_create#createworkflowitem"},"createWorkflowitem"))),(0,n.kt)("h2",{id:"references-1"},"References"),(0,n.kt)("h3",{id:"requestdata"},"RequestData"),(0,n.kt)("p",null,"Re-exports ",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData"},"RequestData")),(0,n.kt)("h2",{id:"functions-1"},"Functions"),(0,n.kt)("h3",{id:"createworkflowitem"},"createWorkflowitem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createWorkflowitem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"storageServiceClient"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"requestData"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_ResourceMap#resourcemap"},(0,n.kt)("inlineCode",{parentName:"a"},"ResourceMap")),">",">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"conn")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,n.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storageServiceClient")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_Client_storage_service_h.StorageServiceClientI"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageServiceClientI")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ctx")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,n.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,n.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"requestData")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData"},(0,n.kt)("inlineCode",{parentName:"a"},"RequestData")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_ResourceMap#resourcemap"},(0,n.kt)("inlineCode",{parentName:"a"},"ResourceMap")),">",">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/workflowitem_create.ts#L26"},"src/service/workflowitem_create.ts:26")))}m.isMDXComponent=!0}}]);