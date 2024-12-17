"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[60839],{82380:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"developer/api-docs/modules/service_workflowitem_assign","title":"service/workflowitem\\\\_assign","description":"Api Code Documentation / Exports / service/workflowitem\\\\_assign","source":"@site/docs/developer/api-docs/modules/service_workflowitem_assign.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_workflowitem_assign","permalink":"/docs/developer/api-docs/modules/service_workflowitem_assign","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_workflowitem_assign.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/user\\\\_refresh\\\\_token","permalink":"/docs/developer/api-docs/modules/service_user_refresh_token"},"next":{"title":"service/workflowitem\\\\_cache\\\\_helper","permalink":"/docs/developer/api-docs/modules/service_workflowitem_cache_helper"}}');var r=t(74848),n=t(28453);const l={},d="service/workflowitem_assign",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"assignWorkflowitem",id:"assignworkflowitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"serviceworkflowitem_assign",children:"service/workflowitem_assign"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/workflowitem_assign"]}),"\n",(0,r.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_workflowitem_assign#assignworkflowitem",children:"assignWorkflowitem"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(s.h3,{id:"assignworkflowitem",children:"assignWorkflowitem"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"assignWorkflowitem"}),"(",(0,r.jsx)(s.code,{children:"conn"}),", ",(0,r.jsx)(s.code,{children:"ctx"}),", ",(0,r.jsx)(s.code,{children:"serviceUser"}),", ",(0,r.jsx)(s.code,{children:"projectId"}),", ",(0,r.jsx)(s.code,{children:"subprojectId"}),", ",(0,r.jsx)(s.code,{children:"workflowitemId"}),", ",(0,r.jsx)(s.code,{children:"assignee"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"conn"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(s.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ctx"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(s.code,{children:"Ctx"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"serviceUser"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,r.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"projectId"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"subprojectId"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"workflowitemId"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"assignee"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/workflowitem_assign.ts#L21",children:"src/service/workflowitem_assign.ts:21"})})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var i=t(96540);const r={},n=i.createContext(r);function l(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);