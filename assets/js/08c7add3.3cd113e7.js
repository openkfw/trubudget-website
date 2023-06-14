"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[56564],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(r),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38199:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(87462),i=r(63366),s=(r(67294),r(3905)),o=["components"],a={},p="service/user_permissions_list",l={unversionedId:"developer/api-docs/modules/service_user_permissions_list",id:"developer/api-docs/modules/service_user_permissions_list",isDocsHomePage:!1,title:"service/user\\_permissions\\_list",description:"Api Code Documentation / Exports / service/user\\permissions\\list",source:"@site/docs/developer/api-docs/modules/service_user_permissions_list.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_user_permissions_list",permalink:"/docs/developer/api-docs/modules/service_user_permissions_list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_user_permissions_list.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1686750426,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/user\\_permission\\_revoke",permalink:"/docs/developer/api-docs/modules/service_user_permission_revoke"},next:{title:"service/workflowitem\\_assign",permalink:"/docs/developer/api-docs/modules/service_workflowitem_assign"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getUserPermissions",id:"getuserpermissions",children:[]}]}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"serviceuser_permissions_list"},"service/user","_","permissions","_","list"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,s.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/user","_","permissions","_","list"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"functions"},"Functions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_user_permissions_list#getuserpermissions"},"getUserPermissions"))),(0,s.kt)("h2",{id:"functions-1"},"Functions"),(0,s.kt)("h3",{id:"getuserpermissions"},"getUserPermissions"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getUserPermissions"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"userId"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,s.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_permissions#permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"Permissions")),">",">"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"conn")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,s.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ctx")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,s.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,s.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"userId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,s.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_permissions#permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"Permissions")),">",">"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/user_permissions_list.ts#L12"},"src/service/user_permissions_list.ts:12")))}m.isMDXComponent=!0}}]);