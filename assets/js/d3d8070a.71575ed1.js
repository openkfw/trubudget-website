"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76652],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(r),c=o,f=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},71269:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={},s="service/domain/workflow/workflowitem_permission_revoke",p={unversionedId:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",id:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",isDocsHomePage:!1,title:"service/domain/workflow/workflowitem\\_permission\\_revoke",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\permission\\revoke",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1661421758,formattedLastUpdatedAt:"8/25/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/workflowitem\\_permission\\_granted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted"},next:{title:"service/domain/workflow/workflowitem\\_permission\\_revoked",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoked"}},d=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"revokeWorkflowitemPermission",id:"revokeworkflowitempermission",children:[]}]}],m={toc:d};function k(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"servicedomainworkflowworkflowitem_permission_revoke"},"service/domain/workflow/workflowitem","_","permission","_","revoke"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/workflowitem","_","permission","_","revoke"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke#revokeworkflowitempermission"},"revokeWorkflowitemPermission"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"revokeworkflowitempermission"},"revokeWorkflowitemPermission"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"revokeWorkflowitemPermission"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subprojectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"workflowitemId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"revokee"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"intent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,i.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issuer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subprojectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"workflowitemId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"revokee")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"intent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"repository")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/workflowitem_permission_revoke.ts#L29"},"src/service/domain/workflow/workflowitem_permission_revoke.ts:29")))}k.isMDXComponent=!0}}]);