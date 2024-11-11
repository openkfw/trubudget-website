"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[46052],{16159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_project_history_get","title":"service/domain/workflow/project\\\\_history\\\\_get","description":"Api Code Documentation / Exports / service/domain/workflow/project\\\\history\\\\get","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_project_history_get.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_project_history_get","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_history_get","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_history_get.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/project\\\\_get.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_get_spec"},"next":{"title":"service/domain/workflow/project\\\\_history\\\\_get.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_history_get_spec"}}');var o=r(74848),i=r(28453);const n={},c="service/domain/workflow/project_history_get",d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getHistory",id:"gethistory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"servicedomainworkflowproject_history_get",children:"service/domain/workflow/project_history_get"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,o.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_history_get"]}),"\n",(0,o.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_history_get#gethistory",children:"getHistory"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,o.jsx)(t.h3,{id:"gethistory",children:"getHistory"}),"\n",(0,o.jsxs)(t.p,{children:["\u25b8 ",(0,o.jsx)(t.strong,{children:"getHistory"}),"(",(0,o.jsx)(t.code,{children:"ctx"}),", ",(0,o.jsx)(t.code,{children:"user"}),", ",(0,o.jsx)(t.code,{children:"projectId"}),", ",(0,o.jsx)(t.code,{children:"repository"}),", ",(0,o.jsx)(t.code,{children:"filter?"}),"): ",(0,o.jsx)(t.code,{children:"Promise"}),"<",(0,o.jsx)(t.a,{href:"result#type",children:(0,o.jsx)(t.code,{children:"Type"})}),"<",(0,o.jsx)(t.a,{href:"../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent",children:(0,o.jsx)(t.code,{children:"ProjectTraceEvent"})}),"[]>>"]}),"\n",(0,o.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"ctx"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,o.jsx)(t.code,{children:"Ctx"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"user"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,o.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"projectId"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"string"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"repository"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Repository"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"filter?"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_historyFilter#filter",children:(0,o.jsx)(t.code,{children:"Filter"})})})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Promise"}),"<",(0,o.jsx)(t.a,{href:"result#type",children:(0,o.jsx)(t.code,{children:"Type"})}),"<",(0,o.jsx)(t.a,{href:"../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent",children:(0,o.jsx)(t.code,{children:"ProjectTraceEvent"})}),"[]>>"]}),"\n",(0,o.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/project_history_get.ts#L17",children:"src/service/domain/workflow/project_history_get.ts:17"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);