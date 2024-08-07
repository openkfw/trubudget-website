"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[30923],{62820:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(85893),n=r(11151);const i={},c="service/ProjectEvents",d={id:"developer/api-docs/modules/service_ProjectEvents",title:"service/ProjectEvents",description:"Api Code Documentation / Exports / service/ProjectEvents",source:"@site/docs/developer/api-docs/modules/service_ProjectEvents.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_ProjectEvents",permalink:"/docs/developer/api-docs/modules/service_ProjectEvents",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_ProjectEvents.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1723038437,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/Client\\_storage\\_service.h",permalink:"/docs/developer/api-docs/modules/service_Client_storage_service_h"},next:{title:"service/RpcClient",permalink:"/docs/developer/api-docs/modules/service_RpcClient"}},l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"applyStreamItems",id:"applystreamitems",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createProjectOnChain",id:"createprojectonchain",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getProject",id:"getproject",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getProjectList",id:"getprojectlist",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getProjectPermissionList",id:"getprojectpermissionlist",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"grantProjectPermission",id:"grantprojectpermission",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"updateProject",id:"updateproject",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"writeProjectAssignedToChain",id:"writeprojectassignedtochain",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"serviceprojectevents",children:"service/ProjectEvents"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/ProjectEvents"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.HistoryEvent",children:"HistoryEvent"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:"Project"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.ProjectUpdate",children:"ProjectUpdate"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#applystreamitems",children:"applyStreamItems"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#createprojectonchain",children:"createProjectOnChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getproject",children:"getProject"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getprojectlist",children:"getProjectList"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getprojectpermissionlist",children:"getProjectPermissionList"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#grantprojectpermission",children:"grantProjectPermission"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#updateproject",children:"updateProject"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#writeprojectassignedtochain",children:"writeProjectAssignedToChain"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"applystreamitems",children:"applyStreamItems"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"applyStreamItems"}),"(",(0,t.jsx)(s.code,{children:"streamItems"}),", ",(0,t.jsx)(s.code,{children:"projectsByName?"}),"): ",(0,t.jsx)(s.code,{children:"Map"}),"<",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamItems"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.a,{href:"../interfaces/service_liststreamkeyitems.Item",children:(0,t.jsx)(s.code,{children:"Item"})}),"[]"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectsByName"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"Map"}),"<",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">"]})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Map"}),"<",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L203",children:"src/service/ProjectEvents.ts:203"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"createprojectonchain",children:"createProjectOnChain"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"createProjectOnChain"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"project"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,t.jsx)(s.code,{children:"Issuer"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"project"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L54",children:"src/service/ProjectEvents.ts:54"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getproject",children:"getProject"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getProject"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"id"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"id"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L148",children:"src/service/ProjectEvents.ts:148"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getprojectlist",children:"getProjectList"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getProjectList"}),"(",(0,t.jsx)(s.code,{children:"conn"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),"[]>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),"[]>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L160",children:"src/service/ProjectEvents.ts:160"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getprojectpermissionlist",children:"getProjectPermissionList"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getProjectPermissionList"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_types#permissions",children:(0,t.jsx)(s.code,{children:"Permissions"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_types#permissions",children:(0,t.jsx)(s.code,{children:"Permissions"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L166",children:"src/service/ProjectEvents.ts:166"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"grantprojectpermission",children:"grantProjectPermission"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"grantProjectPermission"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"grantee"}),", ",(0,t.jsx)(s.code,{children:"intent"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,t.jsx)(s.code,{children:"Issuer"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"grantee"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"intent"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,t.jsx)(s.code,{children:"default"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L174",children:"src/service/ProjectEvents.ts:174"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"updateproject",children:"updateProject"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"updateProject"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"update"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,t.jsx)(s.code,{children:"Issuer"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"update"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.ProjectUpdate",children:(0,t.jsx)(s.code,{children:"ProjectUpdate"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L120",children:"src/service/ProjectEvents.ts:120"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"writeprojectassignedtochain",children:"writeProjectAssignedToChain"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"writeProjectAssignedToChain"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"issuer"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"assignee"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuer"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,t.jsx)(s.code,{children:"Issuer"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"assignee"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/ProjectEvents.ts#L93",children:"src/service/ProjectEvents.ts:93"})})]})}function j(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>c});var t=r(67294);const n={},i=t.createContext(n);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);