"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90509],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(k,o(o({ref:t},l),{},{components:r})):n.createElement(k,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21790:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},d="service/domain/organization/user_get",p={unversionedId:"developer/api-docs/modules/service_domain_organization_user_get",id:"developer/api-docs/modules/service_domain_organization_user_get",isDocsHomePage:!1,title:"service/domain/organization/user\\_get",description:"Api Code Documentation / Exports / service/domain/organization/user\\_get",source:"@site/docs/developer/api-docs/modules/service_domain_organization_user_get.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_user_get",permalink:"/docs/developer/api-docs/modules/service_domain_organization_user_get",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_user_get.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/user\\_eventsourcing",permalink:"/docs/developer/api-docs/modules/service_domain_organization_user_eventsourcing"},next:{title:"service/domain/organization/user\\_password\\_change",permalink:"/docs/developer/api-docs/modules/service_domain_organization_user_password_change"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getAllUsers",id:"getallusers",children:[]},{value:"getOneUser",id:"getoneuser",children:[]}]}],c={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"servicedomainorganizationuser_get"},"service/domain/organization/user","_","get"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/organization/user","_","get"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_user_get#getallusers"},"getAllUsers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_organization_user_get#getoneuser"},"getOneUser"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"getallusers"},"getAllUsers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllUsers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_serviceUser"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_user_record.UserRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"UserRecord")),"[]",">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,i.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_serviceUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"repository")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_user_record.UserRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"UserRecord")),"[]",">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/user_get.ts#L41"},"src/service/domain/organization/user_get.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getoneuser"},"getOneUser"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getOneUser"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_serviceUser"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_user_record.UserRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"UserRecord")),">",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,i.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_serviceUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"repository")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_organization_user_record.UserRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"UserRecord")),">",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/user_get.ts#L14"},"src/service/domain/organization/user_get.ts:14")))}m.isMDXComponent=!0}}]);