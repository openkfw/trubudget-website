"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74860],{40294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_workflowitem_create","title":"service/domain/workflow/workflowitem\\\\_create","description":"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\\\_create","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_workflowitem_create","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/workflowitem\\\\_closed","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_closed"},"next":{"title":"service/domain/workflow/workflowitem\\\\_create.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create_spec"}}');var s=t(74848),l=t(28453);const o={},n="service/domain/workflow/workflowitem_create",d={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"createWorkflowitem",id:"createworkflowitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"servicedomainworkflowworkflowitem_create",children:"service/domain/workflow/workflowitem_create"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/workflowitem_create"]}),"\n",(0,s.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData",children:"RequestData"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create#createworkflowitem",children:"createWorkflowitem"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_create#validate",children:"validate"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(r.h3,{id:"createworkflowitem",children:"createWorkflowitem"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"createWorkflowitem"}),"(",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"issuer"}),", ",(0,s.jsx)(r.code,{children:"reqData"}),", ",(0,s.jsx)(r.code,{children:"repository"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,s.jsx)(r.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"issuer"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"reqData"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData",children:(0,s.jsx)(r.code,{children:"RequestData"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"repository"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"Repository"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,s.jsx)(r.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/workflowitem_create.ts#L167",children:"src/service/domain/workflow/workflowitem_create.ts:167"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"validate",children:"validate"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"validate"}),"(",(0,s.jsx)(r.code,{children:"input"}),"): ",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData",children:(0,s.jsx)(r.code,{children:"RequestData"})}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"input"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"any"})})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_workflow_workflowitem_create.RequestData",children:(0,s.jsx)(r.code,{children:"RequestData"})}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/workflowitem_create.ts#L80",children:"src/service/domain/workflow/workflowitem_create.ts:80"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>n});var i=t(96540);const s={},l=i.createContext(s);function o(e){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:r},e.children)}}}]);