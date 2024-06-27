"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90987],{9797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(85893),o=r(11151);const i={},n="service/domain/workflow/subproject_history_get",c={id:"developer/api-docs/modules/service_domain_workflow_subproject_history_get",title:"service/domain/workflow/subproject\\_history\\_get",description:"Api Code Documentation / Exports / service/domain/workflow/subproject\\history\\get",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_subproject_history_get.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_subproject_history_get",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_history_get",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_subproject_history_get.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/subproject\\_get.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_get_spec"},next:{title:"service/domain/workflow/subproject\\_history\\_get.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_history_get_spec"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getHistory",id:"gethistory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"servicedomainworkflowsubproject_history_get",children:"service/domain/workflow/subproject_history_get"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/subproject_history_get"]}),"\n",(0,s.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_history_get#gethistory",children:"getHistory"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"gethistory",children:"getHistory"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"getHistory"}),"(",(0,s.jsx)(t.code,{children:"ctx"}),", ",(0,s.jsx)(t.code,{children:"user"}),", ",(0,s.jsx)(t.code,{children:"projectId"}),", ",(0,s.jsx)(t.code,{children:"subprojectId"}),", ",(0,s.jsx)(t.code,{children:"repository"}),", ",(0,s.jsx)(t.code,{children:"filter?"}),"): ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"result#type",children:(0,s.jsx)(t.code,{children:"Type"})}),"<",(0,s.jsx)(t.a,{href:"../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent",children:(0,s.jsx)(t.code,{children:"SubprojectTraceEvent"})}),"[]>>"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ctx"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(t.code,{children:"Ctx"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"user"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"projectId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"subprojectId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"repository"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Repository"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"filter?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_historyFilter#filter",children:(0,s.jsx)(t.code,{children:"Filter"})})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"result#type",children:(0,s.jsx)(t.code,{children:"Type"})}),"<",(0,s.jsx)(t.a,{href:"../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent",children:(0,s.jsx)(t.code,{children:"SubprojectTraceEvent"})}),"[]>>"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/subproject_history_get.ts#L16",children:"src/service/domain/workflow/subproject_history_get.ts:16"})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>n});var s=r(67294);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);