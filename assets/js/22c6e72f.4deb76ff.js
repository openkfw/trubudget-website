"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76676],{60719:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developer/api-docs/modules/service_domain_workflow_project_eventsourcing","title":"service/domain/workflow/project\\\\_eventsourcing","description":"Api Code Documentation / Exports / service/domain/workflow/project\\\\_eventsourcing","source":"@site/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_workflow_project_eventsourcing","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/workflow/project\\\\_created","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_created"},"next":{"title":"service/domain/workflow/project\\\\_get","permalink":"/docs/developer/api-docs/modules/service_domain_workflow_project_get"}}');var n=s(74848),c=s(28453);const i={},o="service/domain/workflow/project_eventsourcing",d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"newProjectFromEvent",id:"newprojectfromevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"parseProjectFromSnapshot",id:"parseprojectfromsnapshot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"sourceProjectFromSnapshot",id:"sourceprojectfromsnapshot",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"sourceProjects",id:"sourceprojects",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"servicedomainworkflowproject_eventsourcing",children:"service/domain/workflow/project_eventsourcing"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_eventsourcing"]}),"\n",(0,n.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing#newprojectfromevent",children:"newProjectFromEvent"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing#parseprojectfromsnapshot",children:"parseProjectFromSnapshot"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing#sourceprojectfromsnapshot",children:"sourceProjectFromSnapshot"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_eventsourcing#sourceprojects",children:"sourceProjects"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(r.h3,{id:"newprojectfromevent",children:"newProjectFromEvent"}),"\n",(0,n.jsxs)(r.p,{children:["\u25b8 ",(0,n.jsx)(r.strong,{children:"newProjectFromEvent"}),"(",(0,n.jsx)(r.code,{children:"ctx"}),", ",(0,n.jsx)(r.code,{children:"project"}),", ",(0,n.jsx)(r.code,{children:"event"}),"): ",(0,n.jsx)(r.a,{href:"result#type",children:(0,n.jsx)(r.code,{children:"Type"})}),"<",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),">"]}),"\n",(0,n.jsx)(r.p,{children:"Returns a new project with the given event applied, or an error."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"ctx"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,n.jsx)(r.code,{children:"Ctx"})})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"project"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"event"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,n.jsx)(r.code,{children:"BusinessEvent"})})})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"result#type",children:(0,n.jsx)(r.code,{children:"Type"})}),"<",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_eventsourcing.ts#L128",children:"src/service/domain/workflow/project_eventsourcing.ts:128"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"parseprojectfromsnapshot",children:"parseProjectFromSnapshot"}),"\n",(0,n.jsxs)(r.p,{children:["\u25b8 ",(0,n.jsx)(r.strong,{children:"parseProjectFromSnapshot"}),"(",(0,n.jsx)(r.code,{children:"projectJson"}),"): ",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})})]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"projectJson"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"any"})})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_eventsourcing.ts#L268",children:"src/service/domain/workflow/project_eventsourcing.ts:268"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"sourceprojectfromsnapshot",children:"sourceProjectFromSnapshot"}),"\n",(0,n.jsxs)(r.p,{children:["\u25b8 ",(0,n.jsx)(r.strong,{children:"sourceProjectFromSnapshot"}),"(",(0,n.jsx)(r.code,{children:"ctx"}),", ",(0,n.jsx)(r.code,{children:"events"}),", ",(0,n.jsx)(r.code,{children:"withLog"}),", ",(0,n.jsx)(r.code,{children:"projectJson?"}),"): ",(0,n.jsx)(r.a,{href:"result#type",children:(0,n.jsx)(r.code,{children:"Type"})}),"<",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"ctx"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,n.jsx)(r.code,{children:"Ctx"})})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"events"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,n.jsx)(r.code,{children:"BusinessEvent"})}),"[]"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"withLog"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"boolean"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"projectJson?"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"any"})})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"result#type",children:(0,n.jsx)(r.code,{children:"Type"})}),"<",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_eventsourcing.ts#L200",children:"src/service/domain/workflow/project_eventsourcing.ts:200"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"sourceprojects",children:"sourceProjects"}),"\n",(0,n.jsxs)(r.p,{children:["\u25b8 ",(0,n.jsx)(r.strong,{children:"sourceProjects"}),"(",(0,n.jsx)(r.code,{children:"ctx"}),", ",(0,n.jsx)(r.code,{children:"events"}),", ",(0,n.jsx)(r.code,{children:"origin?"}),"): ",(0,n.jsx)(r.code,{children:"Object"})]}),"\n",(0,n.jsx)(r.p,{children:"deprecated"}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"ctx"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,n.jsx)(r.code,{children:"Ctx"})})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"events"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,n.jsx)(r.code,{children:"BusinessEvent"})}),"[]"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"origin?"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"Map"}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),">"]})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Object"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"errors"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"Error"}),"[]"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"projects"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,n.jsx)(r.code,{children:"Project"})}),"[]"]})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_eventsourcing.ts#L22",children:"src/service/domain/workflow/project_eventsourcing.ts:22"})})]})}function j(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var t=s(96540);const n={},c=t.createContext(n);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);