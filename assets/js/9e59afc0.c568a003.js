"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[66651],{2417:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_subproject_update","title":"service/domain/workflow/subproject\\\\_update","description":"Api Code Documentation / Exports / service/domain/workflow/subproject\\\\_update","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_subproject_update.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_subproject_update","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_subproject_update.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/subproject\\\\_trace\\\\_event","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_trace_event"},"next":{"title":"service/domain/workflow/subproject\\\\_update.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update_spec"}}');var t=d(74848),i=d(28453);const n={},l="service/domain/workflow/subproject_update",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"RequestData",id:"requestdata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables-1",level:2},{value:"requestDataSchema",id:"requestdataschema",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"updateSubproject",id:"updatesubproject",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"servicedomainworkflowsubproject_update",children:"service/domain/workflow/subproject_update"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/subproject_update"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#requestdata",children:"RequestData"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#requestdataschema",children:"requestDataSchema"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#updatesubproject",children:"updateSubproject"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#validate",children:"validate"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"type-aliases-1",children:"Type Aliases"}),"\n",(0,t.jsx)(s.h3,{id:"requestdata",children:"RequestData"}),"\n",(0,t.jsxs)(s.p,{children:["\u01ac ",(0,t.jsx)(s.strong,{children:"RequestData"}),": ",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject_updated.UpdatedData",children:(0,t.jsx)(s.code,{children:"UpdatedData"})})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_update.ts#L22",children:"src/service/domain/workflow/subproject_update.ts:22"})}),"\n",(0,t.jsx)(s.h2,{id:"variables-1",children:"Variables"}),"\n",(0,t.jsx)(s.h3,{id:"requestdataschema",children:"requestDataSchema"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Const"})," ",(0,t.jsx)(s.strong,{children:"requestDataSchema"}),": ",(0,t.jsx)(s.code,{children:"ObjectSchema"}),"<",(0,t.jsx)(s.code,{children:"any"}),"> = ",(0,t.jsx)(s.code,{children:"SubprojectUpdated.updatedDataSchema"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_update.ts#L23",children:"src/service/domain/workflow/subproject_update.ts:23"})}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"updatesubproject",children:"updateSubproject"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"updateSubproject"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"subprojectId"}),", ",(0,t.jsx)(s.code,{children:"data"}),", ",(0,t.jsx)(s.code,{children:"repository"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,t.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"subprojectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"data"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject_updated.UpdatedData",children:(0,t.jsx)(s.code,{children:"UpdatedData"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"repository"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Repository"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_update.ts#L38",children:"src/service/domain/workflow/subproject_update.ts:38"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"validate",children:"validate"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"validate"}),"(",(0,t.jsx)(s.code,{children:"input"}),"): ",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#requestdata",children:(0,t.jsx)(s.code,{children:"RequestData"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"input"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_update#requestdata",children:(0,t.jsx)(s.code,{children:"RequestData"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/subproject_update.ts#L25",children:"src/service/domain/workflow/subproject_update.ts:25"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>l});var r=d(96540);const t={},i=r.createContext(t);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);