"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=d(r),u=a,v=l["".concat(p,".").concat(u)]||l[u]||c[u]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[l]="string"==typeof e?e:a,i[1]=m;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i="service/domain/organization/group_member_remove",m={unversionedId:"developer/api-docs/modules/service_domain_organization_group_member_remove",id:"developer/api-docs/modules/service_domain_organization_group_member_remove",title:"service/domain/organization/group\\_member\\_remove",description:"Api Code Documentation / Exports / service/domain/organization/group\\member\\remove",source:"@site/docs/developer/api-docs/modules/service_domain_organization_group_member_remove.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_group_member_remove",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_remove",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_group_member_remove.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/group\\_member\\_added",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_added"},next:{title:"service/domain/organization/group\\_member\\_remove.spec",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_member_remove_spec"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"removeMembers",id:"removemembers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d},l="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servicedomainorganizationgroup_member_remove"},"service/domain/organization/group","_","member","_","remove"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/organization/group","_","member","_","remove"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_group_member_remove#removemembers"},"removeMembers"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"removemembers"},"removeMembers"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"removeMembers"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"groupId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"members"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),">",">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,a.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"issuer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"groupId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"members")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"repository")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_member_remove.ts#L18"},"src/service/domain/organization/group_member_remove.ts:18")))}c.isMDXComponent=!0}}]);