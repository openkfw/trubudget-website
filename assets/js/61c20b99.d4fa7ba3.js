"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[46103],{87896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer/api-docs/modules/service_project_history_get","title":"service/project\\\\_history\\\\_get","description":"Api Code Documentation / Exports / service/project\\\\history\\\\get","source":"@site/docs/developer/api-docs/modules/service_project_history_get.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_project_history_get","permalink":"/docs/developer/api-docs/modules/service_project_history_get","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_project_history_get.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/project\\\\_get","permalink":"/docs/developer/api-docs/modules/service_project_get"},"next":{"title":"service/project\\\\_list","permalink":"/docs/developer/api-docs/modules/service_project_list"}}');var c=r(74848),i=r(28453);const n={},o="service/project_history_get",d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getProjectHistory",id:"getprojecthistory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"serviceproject_history_get",children:"service/project_history_get"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,c.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/project_history_get"]}),"\n",(0,c.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,c.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_project_history_get#getprojecthistory",children:"getProjectHistory"})}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,c.jsx)(t.h3,{id:"getprojecthistory",children:"getProjectHistory"}),"\n",(0,c.jsxs)(t.p,{children:["\u25b8 ",(0,c.jsx)(t.strong,{children:"getProjectHistory"}),"(",(0,c.jsx)(t.code,{children:"conn"}),", ",(0,c.jsx)(t.code,{children:"ctx"}),", ",(0,c.jsx)(t.code,{children:"serviceUser"}),", ",(0,c.jsx)(t.code,{children:"projectId"}),", ",(0,c.jsx)(t.code,{children:"filter?"}),"): ",(0,c.jsx)(t.code,{children:"Promise"}),"<",(0,c.jsx)(t.a,{href:"result#type",children:(0,c.jsx)(t.code,{children:"Type"})}),"<",(0,c.jsx)(t.a,{href:"../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent",children:(0,c.jsx)(t.code,{children:"ProjectTraceEvent"})}),"[]>>"]}),"\n",(0,c.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"conn"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,c.jsx)(t.code,{children:"ConnToken"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"ctx"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,c.jsx)(t.code,{children:"Ctx"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"serviceUser"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,c.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"projectId"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"string"})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.code,{children:"filter?"})}),(0,c.jsx)(t.td,{style:{textAlign:"left"},children:(0,c.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_historyFilter#filter",children:(0,c.jsx)(t.code,{children:"Filter"})})})]})]})]}),"\n",(0,c.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Promise"}),"<",(0,c.jsx)(t.a,{href:"result#type",children:(0,c.jsx)(t.code,{children:"Type"})}),"<",(0,c.jsx)(t.a,{href:"../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent",children:(0,c.jsx)(t.code,{children:"ProjectTraceEvent"})}),"[]>>"]}),"\n",(0,c.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/project_history_get.ts#L19",children:"src/service/project_history_get.ts:19"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>o});var s=r(96540);const c={},i=s.createContext(c);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);