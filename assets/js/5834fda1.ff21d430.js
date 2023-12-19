"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[79716],{25794:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=t(85893),o=t(11151);const r={},i="service/domain/workflow/project_snapshot_publish",d={id:"developer/api-docs/modules/service_domain_workflow_project_snapshot_publish",title:"service/domain/workflow/project\\_snapshot\\_publish",description:"Api Code Documentation / Exports / service/domain/workflow/project\\snapshot\\publish",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_project_snapshot_publish.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_project_snapshot_publish",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_snapshot_publish",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_snapshot_publish.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/project\\_projected\\_budget\\_updated",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_projected_budget_updated"},next:{title:"service/domain/workflow/project\\_snapshot\\_published",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_snapshot_published"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"publishProjectSnapshot",id:"publishprojectsnapshot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"servicedomainworkflowproject_snapshot_publish",children:"service/domain/workflow/project_snapshot_publish"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_snapshot_publish"]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_snapshot_publish#publishprojectsnapshot",children:"publishProjectSnapshot"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"publishprojectsnapshot",children:"publishProjectSnapshot"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"publishProjectSnapshot"}),"(",(0,n.jsx)(s.code,{children:"ctx"}),", ",(0,n.jsx)(s.code,{children:"conn"}),", ",(0,n.jsx)(s.code,{children:"streamName"}),", ",(0,n.jsx)(s.code,{children:"creatingUser"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<{ ",(0,n.jsx)(s.code,{children:"canPublish"}),": ",(0,n.jsx)(s.code,{children:"boolean"})," ; ",(0,n.jsx)(s.code,{children:"eventData"}),": ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(s.code,{children:"Type"})}),"<",(0,n.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,n.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"ctx"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,n.jsx)(s.code,{children:"Ctx"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"conn"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,n.jsx)(s.code,{children:"ConnToken"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"streamName"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"creatingUser"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,n.jsx)(s.code,{children:"ServiceUser"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<{ ",(0,n.jsx)(s.code,{children:"canPublish"}),": ",(0,n.jsx)(s.code,{children:"boolean"})," ; ",(0,n.jsx)(s.code,{children:"eventData"}),": ",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(s.code,{children:"Type"})}),"<",(0,n.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,n.jsx)(s.code,{children:"BusinessEvent"})}),">  }>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_snapshot_publish.ts#L14",children:"src/service/domain/workflow/project_snapshot_publish.ts:14"})})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>i});var n=t(67294);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);