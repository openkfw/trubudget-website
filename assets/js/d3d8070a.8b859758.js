"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=o,f=m["".concat(s,".").concat(c)]||m[c]||k[c]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a="service/domain/workflow/workflowitem_permission_revoke",l={unversionedId:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",id:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",title:"service/domain/workflow/workflowitem\\_permission\\_revoke",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\permission\\revoke",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/workflowitem\\_permission\\_granted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted"},next:{title:"service/domain/workflow/workflowitem\\_permission\\_revoke.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke_spec"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"revokeWorkflowitemPermission",id:"revokeworkflowitempermission",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"servicedomainworkflowworkflowitem_permission_revoke"},"service/domain/workflow/workflowitem","_","permission","_","revoke"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/workflowitem","_","permission","_","revoke"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke#revokeworkflowitempermission"},"revokeWorkflowitemPermission"))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"revokeworkflowitempermission"},"revokeWorkflowitemPermission"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"revokeWorkflowitemPermission"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subprojectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"workflowitemId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"revokee"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"intent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,o.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"issuer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"projectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"subprojectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"workflowitemId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"revokee")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"intent")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,o.kt)("inlineCode",{parentName:"a"},"default")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"repository")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/workflowitem_permission_revoke.ts#L29"},"src/service/domain/workflow/workflowitem_permission_revoke.ts:29")))}k.isMDXComponent=!0}}]);