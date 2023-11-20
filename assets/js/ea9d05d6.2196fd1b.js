"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[84267],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>c});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},k="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(i),m=r,c=k["".concat(d,".").concat(m)]||k[m]||f[m]||n;return i?o.createElement(c,a(a({ref:t},s),{},{components:i})):o.createElement(c,a({ref:t},s))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[k]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<n;p++)a[p]=i[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},44620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=i(87462),r=(i(67294),i(3905));const n={},a="Workflowitem",l={unversionedId:"developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem",id:"developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem",title:"Workflowitem",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem / Workflowitem",source:"@site/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RedactedWorkflowitem",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem"},next:{title:"Event:",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem_assigned.Event"}},d={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"additionalData",id:"additionaldata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"amountType",id:"amounttype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"assignee",id:"assignee",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"billingDate",id:"billingdate",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"createdAt",id:"createdat",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"currency",id:"currency",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"displayName",id:"displayname",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"documents",id:"documents",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"dueDate",id:"duedate",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"exchangeRate",id:"exchangerate",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"isRedacted",id:"isredacted",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"log",id:"log",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"rejectReason",id:"rejectreason",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"subprojectId",id:"subprojectid",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"workflowitemType",id:"workflowitemtype",level:3},{value:"Defined in",id:"defined-in-19",level:4}],s={toc:p},k="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(k,(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workflowitem"},"Workflowitem"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules/service_domain_workflow_workflowitem"},"service/domain/workflow/workflowitem")," / Workflowitem"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/service_domain_workflow_workflowitem"},"service/domain/workflow/workflowitem"),".Workflowitem"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#additionaldata"},"additionalData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#amount"},"amount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#amounttype"},"amountType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#assignee"},"assignee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#billingdate"},"billingDate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#createdat"},"createdAt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#currency"},"currency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#description"},"description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#displayname"},"displayName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#documents"},"documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#duedate"},"dueDate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#exchangerate"},"exchangeRate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#isredacted"},"isRedacted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#log"},"log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#permissions"},"permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#rejectreason"},"rejectReason")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#status"},"status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#subprojectid"},"subprojectId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_workflowitem.Workflowitem#workflowitemtype"},"workflowitemType"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"additionaldata"},"additionalData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"additionalData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L41"},"src/service/domain/workflow/workflowitem.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"amount"},"amount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"amount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L30"},"src/service/domain/workflow/workflowitem.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"amounttype"},"amountType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"amountType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"N/A"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"disbursed"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"allocated"')),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L32"},"src/service/domain/workflow/workflowitem.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"assignee"},"assignee"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"assignee"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L36"},"src/service/domain/workflow/workflowitem.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"billingdate"},"billingDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"billingDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L29"},"src/service/domain/workflow/workflowitem.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createdat"},"createdAt"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L25"},"src/service/domain/workflow/workflowitem.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"currency"},"currency"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"currency"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L31"},"src/service/domain/workflow/workflowitem.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L33"},"src/service/domain/workflow/workflowitem.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"displayname"},"displayName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"displayName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L27"},"src/service/domain/workflow/workflowitem.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"documents"},"documents"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"documents"),": ",(0,r.kt)("a",{parentName:"p",href:"service_domain_document_document.DocumentReference"},(0,r.kt)("inlineCode",{parentName:"a"},"DocumentReference")),"[]"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L37"},"src/service/domain/workflow/workflowitem.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"duedate"},"dueDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"dueDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L26"},"src/service/domain/workflow/workflowitem.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exchangerate"},"exchangeRate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"exchangeRate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L28"},"src/service/domain/workflow/workflowitem.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L23"},"src/service/domain/workflow/workflowitem.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isredacted"},"isRedacted"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isRedacted"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L22"},"src/service/domain/workflow/workflowitem.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"log"},"log"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"log"),": ",(0,r.kt)("a",{parentName:"p",href:"service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"WorkflowitemTraceEvent")),"[]"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L39"},"src/service/domain/workflow/workflowitem.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"permissions"},"permissions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"permissions"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_permissions#permissions"},(0,r.kt)("inlineCode",{parentName:"a"},"Permissions"))),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L38"},"src/service/domain/workflow/workflowitem.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rejectreason"},"rejectReason"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"rejectReason"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L35"},"src/service/domain/workflow/workflowitem.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"status"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"closed"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"open"')),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L34"},"src/service/domain/workflow/workflowitem.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subprojectid"},"subprojectId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subprojectId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L24"},"src/service/domain/workflow/workflowitem.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"workflowitemtype"},"workflowitemType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"workflowitemType"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_workflowitem_types_types#default"},(0,r.kt)("inlineCode",{parentName:"a"},"default"))),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem.ts#L42"},"src/service/domain/workflow/workflowitem.ts:42")))}f.isMDXComponent=!0}}]);