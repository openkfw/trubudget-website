"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[93201],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11137:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},d="workflowitem_list",p={unversionedId:"developer/api-docs/modules/workflowitem_list",id:"developer/api-docs/modules/workflowitem_list",isDocsHomePage:!1,title:"workflowitem\\_list",description:"Api Code Documentation / Exports / workflowitem\\_list",source:"@site/docs/developer/api-docs/modules/workflowitem_list.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/workflowitem_list",permalink:"/docs/developer/api-docs/modules/workflowitem_list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/workflowitem_list.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687426708,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"workflowitem\\_download\\_document",permalink:"/docs/developer/api-docs/modules/workflowitem_download_document"},next:{title:"workflowitem\\_permission\\_grant",permalink:"/docs/developer/api-docs/modules/workflowitem_permission_grant"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"addHttpHandler",id:"addhttphandler",children:[]}]}],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workflowitem_list"},"workflowitem","_","list"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / workflowitem","_","list"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/workflowitem_list#addhttphandler"},"addHttpHandler"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"addhttphandler"},"addHttpHandler"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addHttpHandler"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Creates an http handler that handles incoming http requests for the ",(0,a.kt)("inlineCode",{parentName:"p"},"/workflowitem.list")," route"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"server")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/types.AugmentedFastifyInstance"},(0,a.kt)("inlineCode",{parentName:"a"},"AugmentedFastifyInstance"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"the current fastify server instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the prefix of the http url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"service")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Service")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the service Service object used to offer an interface to the domain logic")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/workflowitem_list.ts#L181"},"src/workflowitem_list.ts:181")))}u.isMDXComponent=!0}}]);