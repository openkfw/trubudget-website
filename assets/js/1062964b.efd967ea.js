"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35512],{2897:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=o(85893),n=o(11151);const t={},s="service/domain/workflow/workflowitem_eventsourcing",l={id:"developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing",title:"service/domain/workflow/workflowitem\\_eventsourcing",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\_eventsourcing",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1706714720,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/workflowitem\\_created",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_created"},next:{title:"service/domain/workflow/workflowitem\\_get",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_get"}},d={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"newWorkflowitemFromEvent",id:"newworkflowitemfromevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"parseWorkflowitemFromSnapshot",id:"parseworkflowitemfromsnapshot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"sourceWorkflowitemFromSnapshot",id:"sourceworkflowitemfromsnapshot",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"servicedomainworkflowworkflowitem_eventsourcing",children:"service/domain/workflow/workflowitem_eventsourcing"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,i.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/workflowitem_eventsourcing"]}),"\n",(0,i.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing#newworkflowitemfromevent",children:"newWorkflowitemFromEvent"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing#parseworkflowitemfromsnapshot",children:"parseWorkflowitemFromSnapshot"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_eventsourcing#sourceworkflowitemfromsnapshot",children:"sourceWorkflowitemFromSnapshot"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(r.h3,{id:"newworkflowitemfromevent",children:"newWorkflowitemFromEvent"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"newWorkflowitemFromEvent"}),"(",(0,i.jsx)(r.code,{children:"ctx"}),", ",(0,i.jsx)(r.code,{children:"workflowitem"}),", ",(0,i.jsx)(r.code,{children:"event"}),"): ",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})}),">"]}),"\n",(0,i.jsx)(r.p,{children:"Returns a new workflowitem with the given event applied, or an error."}),"\n",(0,i.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"ctx"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(r.code,{children:"Ctx"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"workflowitem"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"event"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,i.jsx)(r.code,{children:"BusinessEvent"})})})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})}),">"]}),"\n",(0,i.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L154",children:"src/service/domain/workflow/workflowitem_eventsourcing.ts:154"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"parseworkflowitemfromsnapshot",children:"parseWorkflowitemFromSnapshot"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"parseWorkflowitemFromSnapshot"}),"(",(0,i.jsx)(r.code,{children:"workflowitemJson"}),"): ",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})})]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"workflowitemJson"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"any"})})]})})]}),"\n",(0,i.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})})}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L84",children:"src/service/domain/workflow/workflowitem_eventsourcing.ts:84"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"sourceworkflowitemfromsnapshot",children:"sourceWorkflowitemFromSnapshot"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"sourceWorkflowitemFromSnapshot"}),"(",(0,i.jsx)(r.code,{children:"ctx"}),", ",(0,i.jsx)(r.code,{children:"events"}),", ",(0,i.jsx)(r.code,{children:"_withLog"}),", ",(0,i.jsx)(r.code,{children:"workflowitemJson?"}),"): ",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})}),">"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"ctx"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(r.code,{children:"Ctx"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"events"})}),(0,i.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,i.jsx)(r.code,{children:"BusinessEvent"})}),"[]"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"_withLog"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"boolean"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"workflowitemJson?"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"any"})})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,i.jsx)(r.code,{children:"Workflowitem"})}),">"]}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L18",children:"src/service/domain/workflow/workflowitem_eventsourcing.ts:18"})})]})}function a(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,r,o)=>{o.d(r,{Z:()=>l,a:()=>s});var i=o(67294);const n={},t=i.createContext(n);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);