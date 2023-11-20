"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[66878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="httpd/router",l={unversionedId:"developer/api-docs/modules/httpd_router",id:"developer/api-docs/modules/httpd_router",title:"httpd/router",description:"Api Code Documentation / Exports / httpd/router",source:"@site/docs/developer/api-docs/modules/httpd_router.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/httpd_router",permalink:"/docs/developer/api-docs/modules/httpd_router",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/httpd_router.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"httpd/lib",permalink:"/docs/developer/api-docs/modules/httpd_lib"},next:{title:"httpd/schema",permalink:"/docs/developer/api-docs/modules/httpd_schema"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"registerRoutes",id:"registerroutes",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httpdrouter"},"httpd/router"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / httpd/router"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/httpd_router#registerroutes"},"registerRoutes"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"registerroutes"},"registerRoutes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"registerRoutes"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blockchainHost"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blockchainPort"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"storageServiceClient"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"invalidateCache"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"FastifyInstance"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"RawServerDefault"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerResponse"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"FastifyBaseLogger"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FastifyTypeProviderDefault"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"server")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FastifyInstance"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"RawServerDefault"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"IncomingMessage"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ServerResponse"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"IncomingMessage"),">",", ",(0,a.kt)("inlineCode",{parentName:"td"},"FastifyBaseLogger"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"FastifyTypeProviderDefault"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"conn")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"blockchainHost")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"blockchainPort")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"storageServiceClient")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../classes/service_Client_storage_service.default"},(0,a.kt)("inlineCode",{parentName:"a"},"default")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"invalidateCache")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FastifyInstance"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"RawServerDefault"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerResponse"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"FastifyBaseLogger"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FastifyTypeProviderDefault"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/httpd/router.ts#L217"},"src/httpd/router.ts:217")))}c.isMDXComponent=!0}}]);