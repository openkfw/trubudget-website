"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[77544],{30705:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"developer/api-docs/modules/service_domain_organization_user_query","title":"service/domain/organization/user\\\\_query","description":"Api Code Documentation / Exports / service/domain/organization/user\\\\_query","source":"@site/docs/developer/api-docs/modules/service_domain_organization_user_query.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_organization_user_query","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_query","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_user_query.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/organization/user\\\\_permission\\\\_revoked","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoked"},"next":{"title":"service/domain/organization/user\\\\_record","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_record"}}');var i=s(74848),d=s(28453);const t={},c="service/domain/organization/user_query",l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getUser",id:"getuser",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getUsers",id:"getusers",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"userExists",id:"userexists",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"servicedomainorganizationuser_query",children:"service/domain/organization/user_query"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,i.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/organization/user_query"]}),"\n",(0,i.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_user_query#getuser",children:"getUser"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_user_query#getusers",children:"getUsers"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_user_query#userexists",children:"userExists"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(r.h3,{id:"getuser",children:"getUser"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"getUser"}),"(",(0,i.jsx)(r.code,{children:"conn"}),", ",(0,i.jsx)(r.code,{children:"ctx"}),", ",(0,i.jsx)(r.code,{children:"serviceUser"}),", ",(0,i.jsx)(r.code,{children:"userId"}),"): ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_user_record.UserRecord",children:(0,i.jsx)(r.code,{children:"UserRecord"})}),">>"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"conn"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,i.jsx)(r.code,{children:"ConnToken"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"ctx"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(r.code,{children:"Ctx"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"serviceUser"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,i.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"userId"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_user_record.UserRecord",children:(0,i.jsx)(r.code,{children:"UserRecord"})}),">>"]}),"\n",(0,i.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/user_query.ts#L31",children:"src/service/domain/organization/user_query.ts:31"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"getusers",children:"getUsers"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"getUsers"}),"(",(0,i.jsx)(r.code,{children:"conn"}),", ",(0,i.jsx)(r.code,{children:"ctx"}),", ",(0,i.jsx)(r.code,{children:"serviceUser"}),"): ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_user_record.UserRecord",children:(0,i.jsx)(r.code,{children:"UserRecord"})}),"[]>>"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"conn"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,i.jsx)(r.code,{children:"ConnToken"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"ctx"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(r.code,{children:"Ctx"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"serviceUser"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,i.jsx)(r.code,{children:"ServiceUser"})})})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_user_record.UserRecord",children:(0,i.jsx)(r.code,{children:"UserRecord"})}),"[]>>"]}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/user_query.ts#L14",children:"src/service/domain/organization/user_query.ts:14"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"userexists",children:"userExists"}),"\n",(0,i.jsxs)(r.p,{children:["\u25b8 ",(0,i.jsx)(r.strong,{children:"userExists"}),"(",(0,i.jsx)(r.code,{children:"conn"}),", ",(0,i.jsx)(r.code,{children:"ctx"}),", ",(0,i.jsx)(r.code,{children:"serviceUser"}),", ",(0,i.jsx)(r.code,{children:"userId"}),"): ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.code,{children:"boolean"}),">>"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"conn"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,i.jsx)(r.code,{children:"ConnToken"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"ctx"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(r.code,{children:"Ctx"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"serviceUser"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,i.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"userId"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(r.code,{children:"Type"})}),"<",(0,i.jsx)(r.code,{children:"boolean"}),">>"]}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/user_query.ts#L51",children:"src/service/domain/organization/user_query.ts:51"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var n=s(96540);const i={},d=n.createContext(i);function t(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);