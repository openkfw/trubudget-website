"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[61094],{92325:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=d(85893),s=d(11151);const c={},n="service/domain/workflow/subproject_projected_budget_update",o={id:"developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update",title:"service/domain/workflow/subproject\\_projected\\_budget\\_update",description:"Api Code Documentation / Exports / service/domain/workflow/subproject\\projected\\budget\\_update",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1727099391,formattedLastUpdatedAt:"Sep 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/subproject\\_projected\\_budget\\_deleted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_deleted"},next:{title:"service/domain/workflow/subproject\\_projected\\_budget\\_update.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update_spec"}},i={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"updateProjectedBudget",id:"updateprojectedbudget",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"servicedomainworkflowsubproject_projected_budget_update",children:"service/domain/workflow/subproject_projected_budget_update"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/subproject_projected_budget_update"]}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_subproject_projected_budget_update#updateprojectedbudget",children:"updateProjectedBudget"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(t.h3,{id:"updateprojectedbudget",children:"updateProjectedBudget"}),"\n",(0,r.jsxs)(t.p,{children:["\u25b8 ",(0,r.jsx)(t.strong,{children:"updateProjectedBudget"}),"(",(0,r.jsx)(t.code,{children:"ctx"}),", ",(0,r.jsx)(t.code,{children:"issuer"}),", ",(0,r.jsx)(t.code,{children:"projectId"}),", ",(0,r.jsx)(t.code,{children:"subprojectId"}),", ",(0,r.jsx)(t.code,{children:"organization"}),", ",(0,r.jsx)(t.code,{children:"value"}),", ",(0,r.jsx)(t.code,{children:"currencyCode"}),", ",(0,r.jsx)(t.code,{children:"repository"}),"): ",(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.a,{href:"result#type",children:(0,r.jsx)(t.code,{children:"Type"})}),"<{ ",(0,r.jsx)(t.code,{children:"newEvents"}),": ",(0,r.jsx)(t.a,{href:"service_domain_business_event#businessevent",children:(0,r.jsx)(t.code,{children:"BusinessEvent"})}),"[] ; ",(0,r.jsx)(t.code,{children:"projectedBudgets"}),": ",(0,r.jsx)(t.a,{href:"../interfaces/service_domain_workflow_projected_budget.ProjectedBudget",children:(0,r.jsx)(t.code,{children:"ProjectedBudget"})}),"[]  }>>"]}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"ctx"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(t.code,{children:"Ctx"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"issuer"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,r.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"projectId"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"subprojectId"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"organization"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"value"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"currencyCode"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"repository"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Repository"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.a,{href:"result#type",children:(0,r.jsx)(t.code,{children:"Type"})}),"<{ ",(0,r.jsx)(t.code,{children:"newEvents"}),": ",(0,r.jsx)(t.a,{href:"service_domain_business_event#businessevent",children:(0,r.jsx)(t.code,{children:"BusinessEvent"})}),"[] ; ",(0,r.jsx)(t.code,{children:"projectedBudgets"}),": ",(0,r.jsx)(t.a,{href:"../interfaces/service_domain_workflow_projected_budget.ProjectedBudget",children:(0,r.jsx)(t.code,{children:"ProjectedBudget"})}),"[]  }>>"]}),"\n",(0,r.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject_projected_budget_update.ts#L28",children:"src/service/domain/workflow/subproject_projected_budget_update.ts:28"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,d)=>{d.d(t,{Z:()=>o,a:()=>n});var r=d(67294);const s={},c=r.createContext(s);function n(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);