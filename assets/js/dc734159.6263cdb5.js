"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[89285],{61489:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_project_permission_grant","title":"service/domain/workflow/project\\\\_permission\\\\_grant","description":"Api Code Documentation / Exports / service/domain/workflow/project\\\\permission\\\\grant","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_project_permission_grant.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_project_permission_grant","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_grant","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_permission_grant.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/project\\\\_list.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_list_spec"},"next":{"title":"service/domain/workflow/project\\\\_permission\\\\_grant.spec","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_grant_spec"}}');var t=r(74848),i=r(28453);const o={},d="service/domain/workflow/project_permission_grant",c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"grantProjectPermission",id:"grantprojectpermission",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"servicedomainworkflowproject_permission_grant",children:"service/domain/workflow/project_permission_grant"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_permission_grant"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_grant#grantprojectpermission",children:"grantProjectPermission"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"grantprojectpermission",children:"grantProjectPermission"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"grantProjectPermission"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"grantee"}),", ",(0,t.jsx)(s.code,{children:"intent"}),", ",(0,t.jsx)(s.code,{children:"repository"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,t.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"grantee"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"intent"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,t.jsx)(s.code,{children:"default"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"repository"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Repository"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/project_permission_grant.ts#L23",children:"src/service/domain/workflow/project_permission_grant.ts:23"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);