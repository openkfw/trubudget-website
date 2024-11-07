"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[54307],{52789:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"developer/api-docs/modules/service_cache_snapshot","title":"service/cache\\\\_snapshot","description":"Api Code Documentation / Exports / service/cache\\\\_snapshot","source":"@site/docs/developer/api-docs/modules/service_cache_snapshot.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_cache_snapshot","permalink":"/docs/developer/api-docs/modules/service_cache_snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_cache_snapshot.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/cache2","permalink":"/docs/developer/api-docs/modules/service_cache2"},"next":{"title":"service/conn","permalink":"/docs/developer/api-docs/modules/service_conn"}}');var r=n(74848),c=n(28453);const d={},l="service/cache_snapshot",i={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getLatestSnapshot",id:"getlatestsnapshot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseBusinessEvents",id:"parsebusinessevents",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"publishSnapshot",id:"publishsnapshot",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"servicecache_snapshot",children:"service/cache_snapshot"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/cache_snapshot"]}),"\n",(0,r.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#getlatestsnapshot",children:"getLatestSnapshot"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#parsebusinessevents",children:"parseBusinessEvents"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache_snapshot#publishsnapshot",children:"publishSnapshot"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(s.h3,{id:"getlatestsnapshot",children:"getLatestSnapshot"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,r.jsx)(s.code,{children:"ctx"}),", ",(0,r.jsx)(s.code,{children:"conn"}),", ",(0,r.jsx)(s.code,{children:"streamName"}),", ",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"eventType"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,r.jsx)(s.code,{children:"Project"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ctx"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(s.code,{children:"Ctx"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"conn"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(s.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"streamName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"key"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"eventType"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:'"project_snapshot_published"'})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_project.Project",children:(0,r.jsx)(s.code,{children:"Project"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/cache_snapshot.ts#L80",children:"src/service/cache_snapshot.ts:80"})}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,r.jsx)(s.code,{children:"ctx"}),", ",(0,r.jsx)(s.code,{children:"conn"}),", ",(0,r.jsx)(s.code,{children:"streamName"}),", ",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"eventType"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,r.jsx)(s.code,{children:"Subproject"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ctx"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(s.code,{children:"Ctx"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"conn"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(s.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"streamName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"key"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"eventType"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:'"subproject_snapshot_published"'})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_subproject.Subproject",children:(0,r.jsx)(s.code,{children:"Subproject"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/cache_snapshot.ts#L88",children:"src/service/cache_snapshot.ts:88"})}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"getLatestSnapshot"}),"(",(0,r.jsx)(s.code,{children:"ctx"}),", ",(0,r.jsx)(s.code,{children:"conn"}),", ",(0,r.jsx)(s.code,{children:"streamName"}),", ",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"eventType"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,r.jsx)(s.code,{children:"Workflowitem"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ctx"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(s.code,{children:"Ctx"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"conn"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(s.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"streamName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"key"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"eventType"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:'"workflowitem_snapshot_published"'})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,r.jsx)(s.code,{children:"Workflowitem"})}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/cache_snapshot.ts#L96",children:"src/service/cache_snapshot.ts:96"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"parsebusinessevents",children:"parseBusinessEvents"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"parseBusinessEvents"}),"(",(0,r.jsx)(s.code,{children:"items"}),", ",(0,r.jsx)(s.code,{children:"streamName"}),"): ",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,r.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"items"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.a,{href:"../interfaces/service_liststreamitems.Item",children:(0,r.jsx)(s.code,{children:"Item"})}),"[]"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"streamName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,r.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/cache_snapshot.ts#L338",children:"src/service/cache_snapshot.ts:338"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"publishsnapshot",children:"publishSnapshot"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"publishSnapshot"}),"(",(0,r.jsx)(s.code,{children:"ctx"}),", ",(0,r.jsx)(s.code,{children:"conn"}),", ",(0,r.jsx)(s.code,{children:"streamName"}),", ",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"eventType"}),", ",(0,r.jsx)(s.code,{children:"creatingUser"}),", ",(0,r.jsx)(s.code,{children:"createEvent"}),", ",(0,r.jsx)(s.code,{children:"ordering?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<{ ",(0,r.jsx)(s.code,{children:"canPublish"}),": ",(0,r.jsx)(s.code,{children:"boolean"})," ; ",(0,r.jsx)(s.code,{children:"eventData"}),": ",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,r.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ctx"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(s.code,{children:"Ctx"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"conn"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(s.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"streamName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"key"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"eventType"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"creatingUser"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,r.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"createEvent"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Function"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"ordering?"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering#workflowitemordering",children:(0,r.jsx)(s.code,{children:"WorkflowitemOrdering"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<{ ",(0,r.jsx)(s.code,{children:"canPublish"}),": ",(0,r.jsx)(s.code,{children:"boolean"})," ; ",(0,r.jsx)(s.code,{children:"eventData"}),": ",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,r.jsx)(s.code,{children:"Type"})}),"<",(0,r.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,r.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/cache_snapshot.ts#L190",children:"src/service/cache_snapshot.ts:190"})})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var t=n(96540);const r={},c=t.createContext(r);function d(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);