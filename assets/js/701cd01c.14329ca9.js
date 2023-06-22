"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[98218],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),k=a,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||i;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,d[1]=o;for(var l=2;l<i;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},58293:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={},p="TruBudgetError",l={unversionedId:"developer/api-docs/classes/error.TruBudgetError",id:"developer/api-docs/classes/error.TruBudgetError",isDocsHomePage:!1,title:"TruBudgetError",description:"Api Code Documentation / Exports / error / TruBudgetError",source:"@site/docs/developer/api-docs/classes/error.TruBudgetError.md",sourceDirName:"developer/api-docs/classes",slug:"/developer/api-docs/classes/error.TruBudgetError",permalink:"/docs/developer/api-docs/classes/error.TruBudgetError",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/classes/error.TruBudgetError.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"workflowitems\\_reorder",permalink:"/docs/developer/api-docs/modules/workflowitems_reorder"},next:{title:"BadRequest",permalink:"/docs/developer/api-docs/classes/http_errors_bad_request.BadRequest"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"address",id:"address",children:[]},{value:"badKeys",id:"badkeys",children:[]},{value:"contentType",id:"contenttype",children:[]},{value:"event",id:"event",children:[]},{value:"filePath",id:"filepath",children:[]},{value:"kind",id:"kind",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"projectId",id:"projectid",children:[]},{value:"stack",id:"stack",children:[]},{value:"subprojectId",id:"subprojectid",children:[]},{value:"targetId",id:"targetid",children:[]},{value:"userId",id:"userid",children:[]},{value:"what",id:"what",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],u={toc:s},c="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trubudgeterror"},"TruBudgetError"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules/error"},"error")," / TruBudgetError"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/error"},"error"),".TruBudgetError"),(0,i.kt)("p",null,"Class representing custom TruBudget errors"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Error")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TruBudgetError"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#constructor"},"constructor"))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#address"},"address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#badkeys"},"badKeys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#contenttype"},"contentType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#event"},"event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#filepath"},"filePath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#kind"},"kind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#message"},"message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#name"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#projectid"},"projectId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#stack"},"stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#subprojectid"},"subprojectId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#targetid"},"targetId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#userid"},"userId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#what"},"what")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#preparestacktrace"},"prepareStackTrace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#stacktracelimit"},"stackTraceLimit"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/error.TruBudgetError#capturestacktrace"},"captureStackTrace"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new TruBudgetError"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"err"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/error#trubudgeterrortype"},(0,i.kt)("inlineCode",{parentName:"a"},"TruBudgetErrorType")))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Error.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L135"},"src/error.ts:135")),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L121"},"src/error.ts:121")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"badkeys"},"badKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"badKeys"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L113"},"src/error.ts:113")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contenttype"},"contentType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"contentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L131"},"src/error.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"event"},"event"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L129"},"src/error.ts:129")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filepath"},"filePath"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"filePath"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L117"},"src/error.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"kind"},"kind"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L133"},"src/error.ts:133")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Error.message"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1055"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Error.name"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"projectid"},"projectId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"projectId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L127"},"src/error.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Error.stack"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1056"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subprojectid"},"subprojectId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"subprojectId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L125"},"src/error.ts:125")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"targetid"},"targetId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"targetId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L123"},"src/error.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userid"},"userId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L119"},"src/error.ts:119")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"what"},"what"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"what"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/error.ts#L115"},"src/error.ts:115")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Optional override for formatting stack traces"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Error.prepareStackTrace"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Error.stackTraceLimit"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:13"),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Create .stack property on a target object"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"Error.captureStackTrace"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:4"))}k.isMDXComponent=!0}}]);