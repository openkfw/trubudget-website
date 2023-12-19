"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[25291],{8373:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=n(85893),r=n(11151);const d={},l="service/cache_snapshot",c={id:"developer/api-docs/modules/service_cache_snapshot",title:"service/cache\\_snapshot",description:"Api Code Documentation / Exports / service/cache\\_snapshot",source:"@site/docs/developer/api-docs/modules/service_cache_snapshot.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_cache_snapshot",permalink:"/docs/developer/api-docs/modules/service_cache_snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_cache_snapshot.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/cache2",permalink:"/docs/developer/api-docs/modules/service_cache2"},next:{title:"service/conn",permalink:"/docs/developer/api-docs/modules/service_conn"}},i={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getLatestSnapshot",id:"getlatestsnapshot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseBusinessEvents",id:"parsebusinessevents",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"publishSnapshot",id:"publishsnapshot",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"servicecache_snapshot",children:"service/cache_snapshot"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/cache_snapshot"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#getlatestsnapshot",children:"getLatestSnapshot"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#parsebusinessevents",children:"parseBusinessEvents"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#publishsnapshot",children:"publishSnapshot"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"getlatestsnapshot",children:"getLatestSnapshot"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"streamName"}),", ",(0,t.jsx)(s.code,{children:"key"}),", ",(0,t.jsx)(s.code,{children:"eventType"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamName"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"key"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"eventType"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:'"project_snapshot_published"'})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,t.jsx)(s.code,{children:"Project"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache_snapshot.ts#L78",children:"src/service/cache_snapshot.ts:78"})}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"streamName"}),", ",(0,t.jsx)(s.code,{children:"key"}),", ",(0,t.jsx)(s.code,{children:"eventType"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,t.jsx)(s.code,{children:"Subproject"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamName"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"key"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"eventType"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:'"subproject_snapshot_published"'})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,t.jsx)(s.code,{children:"Subproject"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache_snapshot.ts#L86",children:"src/service/cache_snapshot.ts:86"})}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"streamName"}),", ",(0,t.jsx)(s.code,{children:"key"}),", ",(0,t.jsx)(s.code,{children:"eventType"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,t.jsx)(s.code,{children:"Workflowitem"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamName"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"key"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"eventType"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:'"workflowitem_snapshot_published"'})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,t.jsx)(s.code,{children:"Workflowitem"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache_snapshot.ts#L94",children:"src/service/cache_snapshot.ts:94"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"parsebusinessevents",children:"parseBusinessEvents"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"parseBusinessEvents"}),"(",(0,t.jsx)(s.code,{children:"items"}),", ",(0,t.jsx)(s.code,{children:"streamName"}),"): ",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"items"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.a,{href:"../interfaces/service_liststreamitems.Item",children:(0,t.jsx)(s.code,{children:"Item"})}),"[]"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamName"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache_snapshot.ts#L335",children:"src/service/cache_snapshot.ts:335"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"publishsnapshot",children:"publishSnapshot"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"publishSnapshot"}),"(",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"streamName"}),", ",(0,t.jsx)(s.code,{children:"key"}),", ",(0,t.jsx)(s.code,{children:"eventType"}),", ",(0,t.jsx)(s.code,{children:"creatingUser"}),", ",(0,t.jsx)(s.code,{children:"createEvent"}),", ",(0,t.jsx)(s.code,{children:"ordering?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<{ ",(0,t.jsx)(s.code,{children:"canPublish"}),": ",(0,t.jsx)(s.code,{children:"boolean"})," ; ",(0,t.jsx)(s.code,{children:"eventData"}),": ",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"streamName"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"key"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"eventType"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"creatingUser"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,t.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"createEvent"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Function"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ordering?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering#workflowitemordering",children:(0,t.jsx)(s.code,{children:"WorkflowitemOrdering"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<{ ",(0,t.jsx)(s.code,{children:"canPublish"}),": ",(0,t.jsx)(s.code,{children:"boolean"})," ; ",(0,t.jsx)(s.code,{children:"eventData"}),": ",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,t.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache_snapshot.ts#L187",children:"src/service/cache_snapshot.ts:187"})})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var t=n(67294);const r={},d=t.createContext(r);function l(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);