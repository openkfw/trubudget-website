"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[72438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={},i="service/password",o={unversionedId:"developer/api-docs/modules/service_password",id:"developer/api-docs/modules/service_password",title:"service/password",description:"Api Code Documentation / Exports / service/password",source:"@site/docs/developer/api-docs/modules/service_password.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_password",permalink:"/docs/developer/api-docs/modules/service_password",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_password.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/notification\\_mark\\_read",permalink:"/docs/developer/api-docs/modules/service_notification_mark_read"},next:{title:"service/project\\_assign",permalink:"/docs/developer/api-docs/modules/service_project_assign"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Digest",id:"digest",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Input",id:"input",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"hashPassword",id:"hashpassword",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isPasswordMatch",id:"ispasswordmatch",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"servicepassword"},"service/password"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,n.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/password"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_password#digest"},"Digest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_password#input"},"Input"))),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_password#hashpassword"},"hashPassword")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_password#ispasswordmatch"},"isPasswordMatch"))),(0,n.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,n.kt)("h3",{id:"digest"},"Digest"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"Digest"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/password.ts#L6"},"src/service/password.ts:6")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"input"},"Input"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"Input"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/password.ts#L5"},"src/service/password.ts:5")),(0,n.kt)("h2",{id:"functions-1"},"Functions"),(0,n.kt)("h3",{id:"hashpassword"},"hashPassword"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"hashPassword"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"password"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"Create a password hash."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/password.ts#L11"},"src/service/password.ts:11")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ispasswordmatch"},"isPasswordMatch"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isPasswordMatch"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"candidatePassword"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"knownPasswordHash"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("p",null,"Validate a given password."),(0,n.kt)("p",null,'Uses a "constant-time" algorithm to counter timing attacks.'),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"candidatePassword")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"knownPasswordHash")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/password.ts#L19"},"src/service/password.ts:19")))}u.isMDXComponent=!0}}]);