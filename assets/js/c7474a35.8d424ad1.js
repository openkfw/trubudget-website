"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[38745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),f=n,c=s["".concat(d,".").concat(f)]||s[f]||k[f]||i;return a?r.createElement(c,o(o({ref:t},m),{},{components:a})):r.createElement(c,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},o="service/domain/workflow/workflowitem_permission_granted",l={unversionedId:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted",id:"developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted",title:"service/domain/workflow/workflowitem\\_permission\\_granted",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\permission\\granted",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/workflowitem\\_permission\\_grant.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_grant_spec"},next:{title:"service/domain/workflow/workflowitem\\_permission\\_revoke",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_revoke"}},d={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mutate",id:"mutate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:p},s="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"servicedomainworkflowworkflowitem_permission_granted"},"service/domain/workflow/workflowitem","_","permission","_","granted"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,n.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/workflowitem","_","permission","_","granted"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},"Event"))),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted#schema"},"schema"))),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted#createevent"},"createEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted#mutate"},"mutate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_permission_granted#validate"},"validate"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"schema"},"schema"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"schema"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ObjectSchema"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem_permission_granted.ts#L27"},"src/service/domain/workflow/workflowitem_permission_granted.ts:27")),(0,n.kt)("h2",{id:"functions-1"},"Functions"),(0,n.kt)("h3",{id:"createevent"},"createEvent"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createEvent"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"publisher"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"subprojectId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"workflowitemId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"permission"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"grantee"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata?"),"): ",(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"publisher")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"projectId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"subprojectId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"workflowitemId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"permission")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,n.kt)("inlineCode",{parentName:"a"},"default")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"grantee")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"metadata?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"UserMetadata")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem_permission_granted.ts#L40"},"src/service/domain/workflow/workflowitem_permission_granted.ts:40")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mutate"},"mutate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"mutate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"workflowitem"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("p",null,"Applies the event to the given workflowitem, or returns an error."),(0,n.kt)("p",null,"When an error is returned (or thrown), any already applied modifications are\ndiscarded."),(0,n.kt)("p",null,"This function is not expected to validate its changes; instead, the modified\nworkflowitem is automatically validated when obtained using\n",(0,n.kt)("inlineCode",{parentName:"p"},"workflowitem_eventsourcing.ts"),":",(0,n.kt)("inlineCode",{parentName:"p"},"newWorkflowitemFromEvent"),"."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"workflowitem")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem"},(0,n.kt)("inlineCode",{parentName:"a"},"Workflowitem")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"event")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem_permission_granted.ts#L86"},"src/service/domain/workflow/workflowitem_permission_granted.ts:86")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"validate"},"validate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"validate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"input")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"result#type"},(0,n.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,n.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem_permission_granted.Event"},(0,n.kt)("inlineCode",{parentName:"a"},"Event")),">"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem_permission_granted.ts#L71"},"src/service/domain/workflow/workflowitem_permission_granted.ts:71")))}k.isMDXComponent=!0}}]);