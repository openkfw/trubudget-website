"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[27427],{96454:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"developer/api-docs/modules/service_subproject_history_get","title":"service/subproject\\\\_history\\\\_get","description":"Api Code Documentation / Exports / service/subproject\\\\history\\\\get","source":"@site/docs/developer/api-docs/modules/service_subproject_history_get.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_subproject_history_get","permalink":"/docs/developer/api-docs/modules/service_subproject_history_get","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_subproject_history_get.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/subproject\\\\_get","permalink":"/docs/developer/api-docs/modules/service_subproject_get"},"next":{"title":"service/subproject\\\\_list","permalink":"/docs/developer/api-docs/modules/service_subproject_list"}}');var c=s(74848),i=s(28453);const n={},o="service/subproject_history_get",d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getSubprojectHistory",id:"getsubprojecthistory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"servicesubproject_history_get",children:"service/subproject_history_get"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,c.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/subproject_history_get"]}),"\n",(0,c.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,c.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_subproject_history_get#getsubprojecthistory",children:"getSubprojectHistory"})}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,c.jsx)(t.h3,{id:"getsubprojecthistory",children:"getSubprojectHistory"}),"\n",(0,c.jsxs)(t.p,{children:["\u25b8 ",(0,c.jsx)(t.strong,{children:"getSubprojectHistory"}),"(",(0,c.jsx)(t.code,{children:"conn"}),", ",(0,c.jsx)(t.code,{children:"ctx"}),", ",(0,c.jsx)(t.code,{children:"serviceUser"}),", ",(0,c.jsx)(t.code,{children:"projectId"}),", ",(0,c.jsx)(t.code,{children:"subprojectId"}),", ",(0,c.jsx)(t.code,{children:"filter?"}),"): ",(0,c.jsx)(t.code,{children:"Promise"}),"<",(0,c.jsx)(t.a,{href:"result#type",children:(0,c.jsx)(t.code,{children:"Type"})}),"<",(0,c.jsx)(t.a,{href:"../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent",children:(0,c.jsx)(t.code,{children:"SubprojectTraceEvent"})}),"[]>>"]}),"\n",(0,c.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"conn"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,c.jsx)(t.code,{children:"ConnToken"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"ctx"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,c.jsx)(t.code,{children:"Ctx"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"serviceUser"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,c.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"projectId"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"string"})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"subprojectId"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"string"})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"filter?"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_historyFilter#filter",children:(0,c.jsx)(t.code,{children:"Filter"})})})]})]})]}),"\n",(0,c.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Promise"}),"<",(0,c.jsx)(t.a,{href:"result#type",children:(0,c.jsx)(t.code,{children:"Type"})}),"<",(0,c.jsx)(t.a,{href:"../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent",children:(0,c.jsx)(t.code,{children:"SubprojectTraceEvent"})}),"[]>>"]}),"\n",(0,c.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/subproject_history_get.ts#L20",children:"src/service/subproject_history_get.ts:20"})})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var r=s(96540);const c={},i=r.createContext(c);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);