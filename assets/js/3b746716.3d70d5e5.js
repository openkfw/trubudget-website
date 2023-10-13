"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="service/domain/organization/group_query",p={unversionedId:"developer/api-docs/modules/service_domain_organization_group_query",id:"developer/api-docs/modules/service_domain_organization_group_query",title:"service/domain/organization/group\\_query",description:"Api Code Documentation / Exports / service/domain/organization/group\\_query",source:"@site/docs/developer/api-docs/modules/service_domain_organization_group_query.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_group_query",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_query",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_group_query.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/group\\_permissions\\_revoked",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_permissions_revoked"},next:{title:"service/domain/organization/group\\_query.spec",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_query_spec"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getGroup",id:"getgroup",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getGroups",id:"getgroups",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getGroupsForUser",id:"getgroupsforuser",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"groupExists",id:"groupexists",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"resolveUsers",id:"resolveusers",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:l},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"servicedomainorganizationgroup_query"},"service/domain/organization/group","_","query"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/organization/group","_","query"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroup"},"getGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroups"},"getGroups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroupsforuser"},"getGroupsForUser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#groupexists"},"groupExists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#resolveusers"},"resolveUsers"))),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"getgroup"},"getGroup"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroup"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),">",">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),">",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_query.ts#L36"},"src/service/domain/organization/group_query.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getgroups"},"getGroups"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroups"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUser"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">",">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_query.ts#L15"},"src/service/domain/organization/group_query.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getgroupsforuser"},"getGroupsForUser"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroupsForUser"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"targetUserId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">",">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"targetUserId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),"[]",">",">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_query.ts#L58"},"src/service/domain/organization/group_query.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"groupexists"},"groupExists"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"groupExists"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">",">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">",">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_query.ts#L75"},"src/service/domain/organization/group_query.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resolveusers"},"resolveUsers"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"resolveUsers"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"identity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getGroupFn?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserFn?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"groupSet?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_organization_user_record#id"},(0,r.kt)("inlineCode",{parentName:"a"},"Id")),"[]",">",">"),(0,r.kt)("p",null,"returns all users for given identity\nif identity is an user return it,\nelse if identity is group resolve identities of the group"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getGroupFn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"conn"),": ",(0,r.kt)("a",{parentName:"td",href:"service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ctx"),": ",(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser"),": ",(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"groupId"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("a",{parentName:"td",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_group.Group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")),">",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getGroup"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getUserFn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"conn"),": ",(0,r.kt)("a",{parentName:"td",href:"service_conn#conntoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnToken")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ctx"),": ",(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"serviceUser"),": ",(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("a",{parentName:"td",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_user_record.UserRecord"},(0,r.kt)("inlineCode",{parentName:"a"},"UserRecord")),">",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getUser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupSet")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_organization_user_record#id"},(0,r.kt)("inlineCode",{parentName:"a"},"Id")),"[]",">",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_query.ts#L95"},"src/service/domain/organization/group_query.ts:95")))}k.isMDXComponent=!0}}]);