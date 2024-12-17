"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[24349],{11686:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_workflowitem_closed","title":"service/domain/workflow/workflowitem\\\\_closed","description":"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\\\_closed","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_workflowitem_closed","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/workflowitem\\\\_close.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_close_spec"},"next":{"title":"service/domain/workflow/workflowitem\\\\_create","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create"}}');var s=r(74848),d=r(28453);const t={},n="service/domain/workflow/workflowitem_closed",o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mutate",id:"mutate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"servicedomainworkflowworkflowitem_closed",children:"service/domain/workflow/workflowitem_closed"})}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(l.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/workflowitem_closed"]}),"\n",(0,s.jsx)(l.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(l.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:"Event"})}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed#schema",children:"schema"})}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed#createevent",children:"createEvent"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed#mutate",children:"mutate"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed#validate",children:"validate"})}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"variables-1",children:"Variables"}),"\n",(0,s.jsx)(l.h3,{id:"schema",children:"schema"}),"\n",(0,s.jsxs)(l.p,{children:["\u2022 ",(0,s.jsx)(l.code,{children:"Const"})," ",(0,s.jsx)(l.strong,{children:"schema"}),": ",(0,s.jsx)(l.code,{children:"ObjectSchema"}),"<",(0,s.jsx)(l.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_closed.ts#L27",children:"src/service/domain/workflow/workflowitem_closed.ts:27"})}),"\n",(0,s.jsx)(l.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(l.h3,{id:"createevent",children:"createEvent"}),"\n",(0,s.jsxs)(l.p,{children:["\u25b8 ",(0,s.jsx)(l.strong,{children:"createEvent"}),"(",(0,s.jsx)(l.code,{children:"source"}),", ",(0,s.jsx)(l.code,{children:"publisher"}),", ",(0,s.jsx)(l.code,{children:"projectId"}),", ",(0,s.jsx)(l.code,{children:"subprojectId"}),", ",(0,s.jsx)(l.code,{children:"workflowitemId"}),", ",(0,s.jsx)(l.code,{children:"time?"}),", ",(0,s.jsx)(l.code,{children:"rejectReason?"}),", ",(0,s.jsx)(l.code,{children:"metadata?"}),"): ",(0,s.jsx)(l.a,{href:"result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:(0,s.jsx)(l.code,{children:"Event"})}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"source"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"publisher"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"projectId"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"subprojectId"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"workflowitemId"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"time"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"rejectReason?"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"string"})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"metadata?"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata",children:(0,s.jsx)(l.code,{children:"UserMetadata"})})})]})]})]}),"\n",(0,s.jsx)(l.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:(0,s.jsx)(l.code,{children:"Event"})}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_closed.ts#L39",children:"src/service/domain/workflow/workflowitem_closed.ts:39"})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"mutate",children:"mutate"}),"\n",(0,s.jsxs)(l.p,{children:["\u25b8 ",(0,s.jsx)(l.strong,{children:"mutate"}),"(",(0,s.jsx)(l.code,{children:"workflowitem"}),", ",(0,s.jsx)(l.code,{children:"event"}),"): ",(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(l.p,{children:"Applies the event to the given workflowitem, or returns an error."}),"\n",(0,s.jsx)(l.p,{children:"When an error is returned (or thrown), any already applied modifications are\ndiscarded."}),"\n",(0,s.jsxs)(l.p,{children:["This function is not expected to validate its changes; instead, the modified\nworkflowitem is automatically validated when obtained using\n",(0,s.jsx)(l.code,{children:"workflowitem_eventsourcing.ts"}),":",(0,s.jsx)(l.code,{children:"newWorkflowitemFromEvent"}),"."]}),"\n",(0,s.jsx)(l.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"workflowitem"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,s.jsx)(l.code,{children:"Workflowitem"})})})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"event"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:(0,s.jsx)(l.code,{children:"Event"})})})]})]})]}),"\n",(0,s.jsx)(l.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_closed.ts#L82",children:"src/service/domain/workflow/workflowitem_closed.ts:82"})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"validate",children:"validate"}),"\n",(0,s.jsxs)(l.p,{children:["\u25b8 ",(0,s.jsx)(l.strong,{children:"validate"}),"(",(0,s.jsx)(l.code,{children:"input"}),"): ",(0,s.jsx)(l.a,{href:"result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:(0,s.jsx)(l.code,{children:"Event"})}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"input"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"any"})})]})})]}),"\n",(0,s.jsx)(l.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"result#type",children:(0,s.jsx)(l.code,{children:"Type"})}),"<",(0,s.jsx)(l.a,{href:"../interfaces/service_domain_workflow_workflowitem_closed.Event",children:(0,s.jsx)(l.code,{children:"Event"})}),">"]}),"\n",(0,s.jsx)(l.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_closed.ts#L67",children:"src/service/domain/workflow/workflowitem_closed.ts:67"})})]})}function h(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,l,r)=>{r.d(l,{R:()=>t,x:()=>n});var i=r(96540);const s={},d=i.createContext(s);function t(e){const l=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function n(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:l},e.children)}}}]);