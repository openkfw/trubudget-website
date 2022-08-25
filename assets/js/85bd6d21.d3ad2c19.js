"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[11759],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=i,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13386:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={},s="workflowitem_permissions_list",p={unversionedId:"developer/api-docs/modules/workflowitem_permissions_list",id:"developer/api-docs/modules/workflowitem_permissions_list",isDocsHomePage:!1,title:"workflowitem\\_permissions\\_list",description:"Api Code Documentation / Exports / workflowitem\\permissions\\list",source:"@site/docs/developer/api-docs/modules/workflowitem_permissions_list.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/workflowitem_permissions_list",permalink:"/docs/developer/api-docs/modules/workflowitem_permissions_list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/workflowitem_permissions_list.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1661421758,formattedLastUpdatedAt:"8/25/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"workflowitem\\_permission\\_revoke",permalink:"/docs/developer/api-docs/modules/workflowitem_permission_revoke"},next:{title:"workflowitem\\_update",permalink:"/docs/developer/api-docs/modules/workflowitem_update"}},d=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"addHttpHandler",id:"addhttphandler",children:[]}]}],m={toc:d};function c(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflowitem_permissions_list"},"workflowitem","_","permissions","_","list"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / workflowitem","_","permissions","_","list"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/workflowitem_permissions_list#addhttphandler"},"addHttpHandler"))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"addhttphandler"},"addHttpHandler"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addHttpHandler"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"service"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Creates an http handler that handles incoming http requests for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/workflowitem.intent.listPermissions")," route"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"server")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/types.AugmentedFastifyInstance"},(0,o.kt)("inlineCode",{parentName:"a"},"AugmentedFastifyInstance"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"the current fastify server instance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the prefix of the http url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"service")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Service")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the service {@link Service} object used to offer an interface to the domain logic")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/workflowitem_permissions_list.ts#L116"},"src/workflowitem_permissions_list.ts:116")))}c.isMDXComponent=!0}}]);