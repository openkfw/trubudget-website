"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[98443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={},o="service/domain/organization/group_get",p={unversionedId:"developer/api-docs/modules/service_domain_organization_group_get",id:"developer/api-docs/modules/service_domain_organization_group_get",title:"service/domain/organization/group\\_get",description:"Api Code Documentation / Exports / service/domain/organization/group\\_get",source:"@site/docs/developer/api-docs/modules/service_domain_organization_group_get.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_group_get",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_get",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_group_get.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1697196969,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/group\\_eventsourcing",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_eventsourcing"},next:{title:"service/domain/organization/group\\_member\\_add",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_add"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getAllGroups",id:"getallgroups",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getOneGroup",id:"getonegroup",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servicedomainorganizationgroup_get"},"service/domain/organization/group","_","get"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/organization/group","_","get"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_get#getallgroups"},"getAllGroups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_get#getonegroup"},"getOneGroup"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"getallgroups"},"getAllGroups"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAllGroups"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,a.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_user")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"repository")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/organization/group_get.ts#L36"},"src/service/domain/organization/group_get.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getonegroup"},"getOneGroup"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getOneGroup"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"groupId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group")),">",">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,a.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_user")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"groupId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"repository")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group")),">",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/organization/group_get.ts#L14"},"src/service/domain/organization/group_get.ts:14")))}u.isMDXComponent=!0}}]);