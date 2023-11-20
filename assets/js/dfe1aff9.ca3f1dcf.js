"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[10955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return r?n.createElement(c,l(l({ref:t},s),{},{components:r})):n.createElement(c,l({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},l="EventSourcingError",o={unversionedId:"developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError",id:"developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError",title:"EventSourcingError",description:"Api Code Documentation / Exports / service/domain/errors/event\\sourcing\\error / EventSourcingError",source:"@site/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError.md",sourceDirName:"developer/api-docs/classes",slug:"/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError",permalink:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlreadyExists",permalink:"/docs/developer/api-docs/classes/service_domain_errors_already_exists.AlreadyExists"},next:{title:"InvalidCommand",permalink:"/docs/developer/api-docs/classes/service_domain_errors_invalid_command.InvalidCommand"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"cause",id:"cause",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"VError",id:"verror",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods-1",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"cause",id:"cause-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"errorForEach",id:"errorforeach",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"errorFromList",id:"errorfromlist",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"findCauseByName",id:"findcausebyname",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"fullStack",id:"fullstack",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"hasCauseWithName",id:"hascausewithname",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-15",level:4}],s={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventsourcingerror"},"EventSourcingError"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules/service_domain_errors_event_sourcing_error"},"service/domain/errors/event","_","sourcing","_","error")," / EventSourcingError"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/service_domain_errors_event_sourcing_error"},"service/domain/errors/event_sourcing_error"),".EventSourcingError"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/classes/http_errors_bad_request.BadRequest#verror"},(0,a.kt)("inlineCode",{parentName:"a"},"VError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EventSourcingError"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#cause"},"cause")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#message"},"message")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#stack"},"stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#verror"},"VError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#preparestacktrace"},"prepareStackTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#stacktracelimit"},"stackTraceLimit"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#capturestacktrace"},"captureStackTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#cause-1"},"cause")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#errorforeach"},"errorForEach")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#errorfromlist"},"errorFromList")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#findcausebyname"},"findCauseByName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#fullstack"},"fullStack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#hascausewithname"},"hasCauseWithName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/classes/service_domain_errors_event_sourcing_error.EventSourcingError#info"},"info"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new EventSourcingError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cause?"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"info")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Info"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cause?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"VError.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/errors/event_sourcing_error.ts#L31"},"src/service/domain/errors/event_sourcing_error.ts:31")),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cause"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"VError.cause"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:31"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"VError.message"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1055"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"VError.name"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"VError.stack"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1056"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verror"},"VError"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"VError"),": typeof ",(0,a.kt)("inlineCode",{parentName:"p"},"VError")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"VError.VError"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:21"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Optional override for formatting stack traces"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"VError.prepareStackTrace"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:11"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,"VError.stackTraceLimit"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:13"),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Create .stack property on a target object"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,"VError.captureStackTrace"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:4"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cause-1"},"cause"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,"VError.cause"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:23"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorforeach"},"errorForEach"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"errorForEach"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"func"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"err"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Error"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,"VError.errorForEach"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:29"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorfromlist"},"errorFromList"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"errorFromList"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"errors"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiError")),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"errors")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"),"[]")))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiError")),(0,a.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.kt)("p",null,"VError.errorFromList"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:28"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"findcausebyname"},"findCauseByName"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"findCauseByName"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,a.kt)("p",null,"VError.findCauseByName"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:26"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fullstack"},"fullStack"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fullStack"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"parameters-7"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,a.kt)("p",null,"VError.fullStack"),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:25"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hascausewithname"},"hasCauseWithName"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"hasCauseWithName"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"parameters-8"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,a.kt)("p",null,"VError.hasCauseWithName"),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:27"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"info"},"info"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"info"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Info")),(0,a.kt)("h4",{id:"parameters-9"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Info")),(0,a.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,a.kt)("p",null,"VError.info"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/verror/index.d.ts:24"))}k.isMDXComponent=!0}}]);