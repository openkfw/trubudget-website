"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[49898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?a.createElement(k,p(p({ref:t},c),{},{components:r})):a.createElement(k,p({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var d=2;d<i;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={},p="service/public_key_update",o={unversionedId:"developer/api-docs/modules/service_public_key_update",id:"developer/api-docs/modules/service_public_key_update",title:"service/public\\_key\\_update",description:"Api Code Documentation / Exports / service/public\\key\\update",source:"@site/docs/developer/api-docs/modules/service_public_key_update.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_public_key_update",permalink:"/docs/developer/api-docs/modules/service_public_key_update",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_public_key_update.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/public\\_key\\_publish",permalink:"/docs/developer/api-docs/modules/service_public_key_publish"},next:{title:"service/storage\\_service\\_url\\_get",permalink:"/docs/developer/api-docs/modules/service_storage_service_url_get"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"updatePublicKey",id:"updatepublickey",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:d},u="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"servicepublic_key_update"},"service/public","_","key","_","update"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,n.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/public","_","key","_","update"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_public_key_update#updatepublickey"},"updatePublicKey"))),(0,n.kt)("h2",{id:"functions-1"},"Functions"),(0,n.kt)("h3",{id:"updatepublickey"},"updatePublicKey"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"updatePublicKey"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"requestData"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PublicKey"),">",">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"conn")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,n.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ctx")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,n.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,n.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"requestData")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_public_key_update.RequestData"},(0,n.kt)("inlineCode",{parentName:"a"},"RequestData")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PublicKey"),">",">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/public_key_update.ts#L18"},"src/service/public_key_update.ts:18")))}s.isMDXComponent=!0}}]);