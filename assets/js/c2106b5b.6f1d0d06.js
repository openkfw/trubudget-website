"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[26043],{31176:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const t={},l="service/domain/workflow/global_permission_grant",o={id:"developer/api-docs/modules/service_domain_workflow_global_permission_grant",title:"service/domain/workflow/global\\_permission\\_grant",description:"Api Code Documentation / Exports / service/domain/workflow/global\\permission\\grant",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_global_permission_grant.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_global_permission_grant",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_global_permission_grant",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_global_permission_grant.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/trace\\_event",permalink:"/docs/developer/api-docs/modules/service_domain_trace_event"},next:{title:"service/domain/workflow/global\\_permission\\_granted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_global_permission_granted"}},d={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"grantGlobalPermission",id:"grantglobalpermission",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"servicedomainworkflowglobal_permission_grant",children:"service/domain/workflow/global_permission_grant"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,i.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/global_permission_grant"]}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_global_permission_grant#grantglobalpermission",children:"grantGlobalPermission"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(s.h3,{id:"grantglobalpermission",children:"grantGlobalPermission"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"grantGlobalPermission"}),"(",(0,i.jsx)(s.code,{children:"ctx"}),", ",(0,i.jsx)(s.code,{children:"issuer"}),", ",(0,i.jsx)(s.code,{children:"issuerOrganization"}),", ",(0,i.jsx)(s.code,{children:"grantee"}),", ",(0,i.jsx)(s.code,{children:"intent"}),", ",(0,i.jsx)(s.code,{children:"repository"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(s.code,{children:"Type"})}),"<",(0,i.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,i.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"ctx"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(s.code,{children:"Ctx"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"issuer"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,i.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"issuerOrganization"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"grantee"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"intent"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,i.jsx)(s.code,{children:"default"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"repository"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Repository"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(s.code,{children:"Type"})}),"<",(0,i.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,i.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/global_permission_grant.ts#L21",children:"src/service/domain/workflow/global_permission_grant.ts:21"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var i=n(67294);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);