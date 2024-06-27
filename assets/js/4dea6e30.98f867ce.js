"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7120],{11472:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=r(85893),i=r(11151);const n={},t="service/domain/workflow/project_permission_revoke",d={id:"developer/api-docs/modules/service_domain_workflow_project_permission_revoke",title:"service/domain/workflow/project\\_permission\\_revoke",description:"Api Code Documentation / Exports / service/domain/workflow/project\\permission\\revoke",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_project_permission_revoke.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_project_permission_revoke",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_revoke",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_permission_revoke.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/project\\_permission\\_granted",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_granted"},next:{title:"service/domain/workflow/project\\_permission\\_revoke.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_revoke_spec"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"revokeProjectPermission",id:"revokeprojectpermission",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"servicedomainworkflowproject_permission_revoke",children:"service/domain/workflow/project_permission_revoke"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,o.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/workflow/project_permission_revoke"]}),"\n",(0,o.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_workflow_project_permission_revoke#revokeprojectpermission",children:"revokeProjectPermission"})}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,o.jsx)(s.h3,{id:"revokeprojectpermission",children:"revokeProjectPermission"}),"\n",(0,o.jsxs)(s.p,{children:["\u25b8 ",(0,o.jsx)(s.strong,{children:"revokeProjectPermission"}),"(",(0,o.jsx)(s.code,{children:"ctx"}),", ",(0,o.jsx)(s.code,{children:"issuer"}),", ",(0,o.jsx)(s.code,{children:"projectId"}),", ",(0,o.jsx)(s.code,{children:"revokee"}),", ",(0,o.jsx)(s.code,{children:"intent"}),", ",(0,o.jsx)(s.code,{children:"repository"}),"): ",(0,o.jsx)(s.code,{children:"Promise"}),"<",(0,o.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,o.jsx)(s.code,{children:"Type"})}),"<",(0,o.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,o.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,o.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"ctx"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,o.jsx)(s.code,{children:"Ctx"})})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"issuer"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,o.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"projectId"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"string"})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"revokee"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"string"})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"intent"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,o.jsx)(s.code,{children:"default"})})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"repository"})}),(0,o.jsx)(s.td,{style:{textAlign:"left"},children:(0,o.jsx)(s.code,{children:"Repository"})})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"Promise"}),"<",(0,o.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,o.jsx)(s.code,{children:"Type"})}),"<",(0,o.jsx)(s.a,{href:"service_domain_business_event.md#businessevent",children:(0,o.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,o.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/project_permission_revoke.ts#L22",children:"src/service/domain/workflow/project_permission_revoke.ts:22"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>t});var o=r(67294);const i={},n=o.createContext(i);function t(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);