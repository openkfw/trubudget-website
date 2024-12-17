"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7320],{19312:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developer/api-docs/modules/service_domain_organization_user_permission_revoke","title":"service/domain/organization/user\\\\_permission\\\\_revoke","description":"Api Code Documentation / Exports / service/domain/organization/user\\\\permission\\\\revoke","source":"@site/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoke.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_domain_organization_user_permission_revoke","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoke","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoke.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/domain/organization/user\\\\_permission\\\\_granted","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_permission_granted"},"next":{"title":"service/domain/organization/user\\\\_permission\\\\_revoke.spec","permalink":"/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoke_spec"}}');var n=i(74848),o=i(28453);const t={},d="service/domain/organization/user_permission_revoke",l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"revokeUserPermission",id:"revokeuserpermission",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"servicedomainorganizationuser_permission_revoke",children:"service/domain/organization/user_permission_revoke"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/domain/organization/user_permission_revoke"]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_user_permission_revoke#revokeuserpermission",children:"revokeUserPermission"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"revokeuserpermission",children:"revokeUserPermission"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"revokeUserPermission"}),"(",(0,n.jsx)(s.code,{children:"ctx"}),", ",(0,n.jsx)(s.code,{children:"issuer"}),", ",(0,n.jsx)(s.code,{children:"issuerOrganization"}),", ",(0,n.jsx)(s.code,{children:"userId"}),", ",(0,n.jsx)(s.code,{children:"revokee"}),", ",(0,n.jsx)(s.code,{children:"intent"}),", ",(0,n.jsx)(s.code,{children:"repository"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(s.code,{children:"Type"})}),"<",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,n.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"ctx"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,n.jsx)(s.code,{children:"Ctx"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuer"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,n.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"issuerOrganization"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"userId"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"revokee"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"intent"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/authz_intents#default",children:(0,n.jsx)(s.code,{children:"default"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"repository"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Repository"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(s.code,{children:"Type"})}),"<",(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,n.jsx)(s.code,{children:"BusinessEvent"})}),"[]>>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/user_permission_revoke.ts#L23",children:"src/service/domain/organization/user_permission_revoke.ts:23"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>d});var r=i(96540);const n={},o=r.createContext(n);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);