"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[17988],{39631:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_subproject_created","title":"service/domain/workflow/subproject\\\\_created","description":"Api Code Documentation / Exports / service/domain/workflow/subproject\\\\_created","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_subproject_created.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_subproject_created","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_created","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_subproject_created.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/subproject\\\\_create.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_create_spec"},"next":{"title":"service/domain/workflow/subproject\\\\_eventsourcing","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_eventsourcing"}}');var d=s(74848),n=s(28453);const c={},i="service/domain/workflow/subproject_created",l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createFrom",id:"createfrom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"servicedomainworkflowsubproject_created",children:"service/domain/workflow/subproject_created"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,d.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/subproject_created"]}),"\n",(0,d.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,d.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:"Event"})}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"variables",children:"Variables"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_created#schema",children:"schema"})}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_created#createevent",children:"createEvent"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_created#createfrom",children:"createFrom"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_created#validate",children:"validate"})}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"variables-1",children:"Variables"}),"\n",(0,d.jsx)(r.h3,{id:"schema",children:"schema"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.code,{children:"Const"})," ",(0,d.jsx)(r.strong,{children:"schema"}),": ",(0,d.jsx)(r.code,{children:"ObjectSchema"}),"<",(0,d.jsx)(r.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_created.ts#L63",children:"src/service/domain/workflow/subproject_created.ts:63"})}),"\n",(0,d.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,d.jsx)(r.h3,{id:"createevent",children:"createEvent"}),"\n",(0,d.jsxs)(r.p,{children:["\u25b8 ",(0,d.jsx)(r.strong,{children:"createEvent"}),"(",(0,d.jsx)(r.code,{children:"source"}),", ",(0,d.jsx)(r.code,{children:"publisher"}),", ",(0,d.jsx)(r.code,{children:"projectId"}),", ",(0,d.jsx)(r.code,{children:"subproject"}),", ",(0,d.jsx)(r.code,{children:"time?"}),", ",(0,d.jsx)(r.code,{children:"metadata?"}),"): ",(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:(0,d.jsx)(r.code,{children:"Event"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"source"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"string"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"publisher"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"string"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"projectId"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"string"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"subproject"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"InitialData"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"time"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"string"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"metadata?"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata",children:(0,d.jsx)(r.code,{children:"UserMetadata"})})})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:(0,d.jsx)(r.code,{children:"Event"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_created.ts#L73",children:"src/service/domain/workflow/subproject_created.ts:73"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"createfrom",children:"createFrom"}),"\n",(0,d.jsxs)(r.p,{children:["\u25b8 ",(0,d.jsx)(r.strong,{children:"createFrom"}),"(",(0,d.jsx)(r.code,{children:"ctx"}),", ",(0,d.jsx)(r.code,{children:"event"}),"): ",(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,d.jsx)(r.code,{children:"Subproject"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"ctx"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,d.jsx)(r.code,{children:"Ctx"})})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"event"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:(0,d.jsx)(r.code,{children:"Event"})})})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,d.jsx)(r.code,{children:"Subproject"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_created.ts#L104",children:"src/service/domain/workflow/subproject_created.ts:104"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"validate",children:"validate"}),"\n",(0,d.jsxs)(r.p,{children:["\u25b8 ",(0,d.jsx)(r.strong,{children:"validate"}),"(",(0,d.jsx)(r.code,{children:"input"}),"): ",(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:(0,d.jsx)(r.code,{children:"Event"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"input"})}),(0,d.jsx)(r.td,{style:{textAlign:"left"},children:(0,d.jsx)(r.code,{children:"any"})})]})})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"result#type",children:(0,d.jsx)(r.code,{children:"Type"})}),"<",(0,d.jsx)(r.a,{href:"../interfaces/service_domain_workflow_subproject_created.Event",children:(0,d.jsx)(r.code,{children:"Event"})}),">"]}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_created.ts#L99",children:"src/service/domain/workflow/subproject_created.ts:99"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>i});var t=s(96540);const d={},n=t.createContext(d);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);