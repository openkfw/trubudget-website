"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,k=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return a?r.createElement(k,d(d({ref:t},m),{},{components:a})):r.createElement(k,d({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,d=new Array(i);d[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:n,d[1]=o;for(var p=2;p<i;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},d="service/domain/organization/group_member_added",o={unversionedId:"developer/api-docs/modules/service_domain_organization_group_member_added",id:"developer/api-docs/modules/service_domain_organization_group_member_added",title:"service/domain/organization/group\\_member\\_added",description:"Api Code Documentation / Exports / service/domain/organization/group\\member\\added",source:"@site/docs/developer/api-docs/modules/service_domain_organization_group_member_added.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_group_member_added",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_added",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_group_member_added.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1697196969,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/group\\_member\\_add.spec",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_add_spec"},next:{title:"service/domain/organization/group\\_member\\_remove",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_remove"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:p},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"servicedomainorganizationgroup_member_added"},"service/domain/organization/group","_","member","_","added"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,n.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/organization/group","_","member","_","added"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../interfaces/service_domain_organization_group_member_added.Event"},"Event"))),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_member_added#schema"},"schema"))),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_member_added#createevent"},"createEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_member_added#validate"},"validate"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"schema"},"schema"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"schema"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ObjectSchema"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/organization/group_member_added.ts#L22"},"src/service/domain/organization/group_member_added.ts:22")),(0,n.kt)("h2",{id:"functions-1"},"Functions"),(0,n.kt)("h3",{id:"createevent"},"createEvent"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createEvent"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"publisher"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"newMembers"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata?"),"): ",(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group_member_added.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"publisher")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"groupId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newMembers")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"metadata?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"UserMetadata")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group_member_added.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/organization/group_member_added.ts#L32"},"src/service/domain/organization/group_member_added.ts:32")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"validate"},"validate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"validate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group_member_added.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"input")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group_member_added.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/organization/group_member_added.ts#L58"},"src/service/domain/organization/group_member_added.ts:58")))}c.isMDXComponent=!0}}]);