"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[91881],{76842:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=n(85893),i=n(11151);const d={},t="service/domain/workflow/project_assigned",l={id:"developer/api-docs/modules/service_domain_workflow_project_assigned",title:"service/domain/workflow/project\\_assigned",description:"Api Code Documentation / Exports / service/domain/workflow/project\\_assigned",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_project_assigned.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_project_assigned",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_assigned.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/project\\_assign.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_assign_spec"},next:{title:"service/domain/workflow/project\\_close",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_close"}},c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mutate",id:"mutate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"servicedomainworkflowproject_assigned",children:"service/domain/workflow/project_assigned"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_assigned"]}),"\n",(0,r.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:"Event"})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned#schema",children:"schema"})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned#createevent",children:"createEvent"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned#mutate",children:"mutate"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned#validate",children:"validate"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"variables-1",children:"Variables"}),"\n",(0,r.jsx)(s.h3,{id:"schema",children:"schema"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.code,{children:"Const"})," ",(0,r.jsx)(s.strong,{children:"schema"}),": ",(0,r.jsx)(s.code,{children:"ObjectSchema"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_assigned.ts#L21",children:"src/service/domain/workflow/project_assigned.ts:21"})}),"\n",(0,r.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(s.h3,{id:"createevent",children:"createEvent"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"createEvent"}),"(",(0,r.jsx)(s.code,{children:"source"}),", ",(0,r.jsx)(s.code,{children:"publisher"}),", ",(0,r.jsx)(s.code,{children:"projectId"}),", ",(0,r.jsx)(s.code,{children:"assignee"}),", ",(0,r.jsx)(s.code,{children:"time?"}),", ",(0,r.jsx)(s.code,{children:"metadata?"}),"): ",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:(0,r.jsx)(s.code,{children:"Event"})}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"publisher"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"projectId"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"assignee"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"time"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"metadata?"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata",children:(0,r.jsx)(s.code,{children:"UserMetadata"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:(0,r.jsx)(s.code,{children:"Event"})}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_assigned.ts#L31",children:"src/service/domain/workflow/project_assigned.ts:31"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"mutate",children:"mutate"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"mutate"}),"(",(0,r.jsx)(s.code,{children:"project"}),", ",(0,r.jsx)(s.code,{children:"event"}),"): ",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"Applies the event to the given project, or returns an error."}),"\n",(0,r.jsx)(s.p,{children:"When an error is returned (or thrown), any already applied modifications are\ndiscarded."}),"\n",(0,r.jsxs)(s.p,{children:["This function is not expected to validate its changes; instead, the modified project\nis automatically validated when obtained using\n",(0,r.jsx)(s.code,{children:"project_eventsourcing.ts"}),":",(0,r.jsx)(s.code,{children:"newProjectFromEvent"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"project"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,r.jsx)(s.code,{children:"Project"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"event"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:(0,r.jsx)(s.code,{children:"Event"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_assigned.ts#L70",children:"src/service/domain/workflow/project_assigned.ts:70"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"validate",children:"validate"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"validate"}),"(",(0,r.jsx)(s.code,{children:"input"}),"): ",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:(0,r.jsx)(s.code,{children:"Event"})}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"input"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"any"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project_assigned.Event",children:(0,r.jsx)(s.code,{children:"Event"})}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_assigned.ts#L55",children:"src/service/domain/workflow/project_assigned.ts:55"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(67294);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);