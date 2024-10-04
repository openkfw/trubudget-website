"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[57097],{78409:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=r(85893),i=r(11151);const d={},t="service",l={id:"developer/api-docs/modules/service",title:"service",description:"Api Code Documentation / Exports / service",source:"@site/docs/developer/api-docs/modules/service.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service",permalink:"/docs/developer/api-docs/modules/service",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1728052387,formattedLastUpdatedAt:"Oct 4, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"scripts/joiGenerator",permalink:"/docs/developer/api-docs/modules/scripts_joiGenerator"},next:{title:"service/Client",permalink:"/docs/developer/api-docs/modules/service_Client"}},c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"References",id:"references",level:3},{value:"Functions",id:"functions",level:3},{value:"References",id:"references-1",level:2},{value:"ConnToken",id:"conntoken",level:3},{value:"Event",id:"event",level:3},{value:"HistoryEvent",id:"historyevent",level:3},{value:"Issuer",id:"issuer",level:3},{value:"Project",id:"project",level:3},{value:"ProjectUpdate",id:"projectupdate",level:3},{value:"applyStreamItems",id:"applystreamitems",level:3},{value:"createProjectOnChain",id:"createprojectonchain",level:3},{value:"getProject",id:"getproject",level:3},{value:"getProjectList",id:"getprojectlist",level:3},{value:"getProjectPermissionList",id:"getprojectpermissionlist",level:3},{value:"grantProjectPermission",id:"grantprojectpermission",level:3},{value:"throwUnsupportedEventVersion",id:"throwunsupportedeventversion",level:3},{value:"updateProject",id:"updateproject",level:3},{value:"writeProjectAssignedToChain",id:"writeprojectassignedtochain",level:3},{value:"Functions",id:"functions-1",level:2},{value:"assignWorkflowitem",id:"assignworkflowitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"closeWorkflowitem",id:"closeworkflowitem",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getWorkflowitemOrdering",id:"getworkflowitemordering",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"grantGlobalPermission",id:"grantglobalpermission",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"revokeGlobalPermission",id:"revokeglobalpermission",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"updateWorkflowitem",id:"updateworkflowitem",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"service",children:"service"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(s.a,{href:"../modules",children:"Exports"})," / service"]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"references",children:"References"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#conntoken",children:"ConnToken"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#event",children:"Event"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#historyevent",children:"HistoryEvent"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#issuer",children:"Issuer"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#project",children:"Project"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#projectupdate",children:"ProjectUpdate"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#applystreamitems",children:"applyStreamItems"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#createprojectonchain",children:"createProjectOnChain"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#getproject",children:"getProject"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#getprojectlist",children:"getProjectList"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#getprojectpermissionlist",children:"getProjectPermissionList"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#grantprojectpermission",children:"grantProjectPermission"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#throwunsupportedeventversion",children:"throwUnsupportedEventVersion"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#updateproject",children:"updateProject"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#writeprojectassignedtochain",children:"writeProjectAssignedToChain"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#assignworkflowitem",children:"assignWorkflowitem"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#closeworkflowitem",children:"closeWorkflowitem"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#getworkflowitemordering",children:"getWorkflowitemOrdering"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#grantglobalpermission",children:"grantGlobalPermission"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#init",children:"init"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#revokeglobalpermission",children:"revokeGlobalPermission"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service#updateworkflowitem",children:"updateWorkflowitem"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"references-1",children:"References"}),"\n",(0,n.jsx)(s.h3,{id:"conntoken",children:"ConnToken"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:"ConnToken"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"event",children:"Event"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"../interfaces/service_event.Event",children:"Event"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"historyevent",children:"HistoryEvent"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.HistoryEvent",children:"HistoryEvent"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"issuer",children:"Issuer"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:"Issuer"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"project",children:"Project"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.Project",children:"Project"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"projectupdate",children:"ProjectUpdate"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"../interfaces/service_ProjectEvents.ProjectUpdate",children:"ProjectUpdate"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"applystreamitems",children:"applyStreamItems"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#applystreamitems",children:"applyStreamItems"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"createprojectonchain",children:"createProjectOnChain"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#createprojectonchain",children:"createProjectOnChain"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getproject",children:"getProject"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getproject",children:"getProject"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getprojectlist",children:"getProjectList"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getprojectlist",children:"getProjectList"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getprojectpermissionlist",children:"getProjectPermissionList"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#getprojectpermissionlist",children:"getProjectPermissionList"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"grantprojectpermission",children:"grantProjectPermission"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#grantprojectpermission",children:"grantProjectPermission"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"throwunsupportedeventversion",children:"throwUnsupportedEventVersion"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_event#throwunsupportedeventversion",children:"throwUnsupportedEventVersion"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"updateproject",children:"updateProject"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#updateproject",children:"updateProject"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"writeprojectassignedtochain",children:"writeProjectAssignedToChain"}),"\n",(0,n.jsxs)(s.p,{children:["Re-exports ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_ProjectEvents#writeprojectassignedtochain",children:"writeProjectAssignedToChain"})]}),"\n",(0,n.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"assignworkflowitem",children:"assignWorkflowitem"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"assignWorkflowitem"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"newAssignee"}),", ",(0,n.jsx)(s.code,{children:"projectId"}),", ",(0,n.jsx)(s.code,{children:"subprojectId"}),", ",(0,n.jsx)(s.code,{children:"workflowitemId"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,n.jsx)(s.code,{children:"Issuer"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"newAssignee"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"projectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"subprojectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"workflowitemId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L286",children:"src/service/index.ts:286"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"closeworkflowitem",children:"closeWorkflowitem"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"closeWorkflowitem"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"projectId"}),", ",(0,n.jsx)(s.code,{children:"subprojectId"}),", ",(0,n.jsx)(s.code,{children:"workflowitemId"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,n.jsx)(s.code,{children:"Issuer"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"projectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"subprojectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"workflowitemId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L227",children:"src/service/index.ts:227"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getworkflowitemordering",children:"getWorkflowitemOrdering"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getWorkflowitemOrdering"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"projectId"}),", ",(0,n.jsx)(s.code,{children:"subprojectId"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"string"}),"[]>"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"projectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"subprojectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"string"}),"[]>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L185",children:"src/service/index.ts:185"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"grantglobalpermission",children:"grantGlobalPermission"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"grantGlobalPermission"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"grantee"}),", ",(0,n.jsx)(s.code,{children:"intent"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,n.jsx)(s.code,{children:"Issuer"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"grantee"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"intent"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,n.jsx)(s.code,{children:"default"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L61",children:"src/service/index.ts:61"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"init",children:"init"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"init"}),"(",(0,n.jsx)(s.code,{children:"rpcSettings"}),"): ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"rpcSettings"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_RpcClient_h.ConnectionSettings",children:(0,n.jsx)(s.code,{children:"ConnectionSettings"})})})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L49",children:"src/service/index.ts:49"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"revokeglobalpermission",children:"revokeGlobalPermission"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"revokeGlobalPermission"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"recipient"}),", ",(0,n.jsx)(s.code,{children:"intent"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,n.jsx)(s.code,{children:"Issuer"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"recipient"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"intent"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,n.jsx)(s.code,{children:"default"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L110",children:"src/service/index.ts:110"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"updateworkflowitem",children:"updateWorkflowitem"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"updateWorkflowitem"}),"(",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"projectId"}),", ",(0,n.jsx)(s.code,{children:"subprojectId"}),", ",(0,n.jsx)(s.code,{children:"workflowitemId"}),", ",(0,n.jsx)(s.code,{children:"data"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_issuer.Issuer",children:(0,n.jsx)(s.code,{children:"Issuer"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"projectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"subprojectId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"workflowitemId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Update"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/index.ts#L256",children:"src/service/index.ts:256"})})]})}function x(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>t});var n=r(67294);const i={},d=n.createContext(i);function t(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);