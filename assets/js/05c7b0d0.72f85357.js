"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74082],{20088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"developer/api-docs/modules/service_user_refresh_token","title":"service/user\\\\_refresh\\\\_token","description":"Api Code Documentation / Exports / service/user\\\\refresh\\\\token","source":"@site/docs/developer/api-docs/modules/service_user_refresh_token.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_user_refresh_token","permalink":"/docs/developer/api-docs/modules/service_user_refresh_token","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_user_refresh_token.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/user\\\\_permissions\\\\_list","permalink":"/docs/developer/api-docs/modules/service_user_permissions_list"},"next":{"title":"service/workflowitem\\\\_assign","permalink":"/docs/developer/api-docs/modules/service_workflowitem_assign"}}');var r=t(74848),i=t(28453);const d={},l="service/user_refresh_token",c={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"authenticateWithToken",id:"authenticatewithtoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getUserAuthData",id:"getuserauthdata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"validateRefreshToken",id:"validaterefreshtoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"serviceuser_refresh_token",children:"service/user_refresh_token"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(n.a,{href:"../modules",children:"Exports"})," / service/user_refresh_token"]}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../interfaces/service_user_refresh_token.UserLoginResponse",children:"UserLoginResponse"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_user_refresh_token#authenticatewithtoken",children:"authenticateWithToken"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_user_refresh_token#getuserauthdata",children:"getUserAuthData"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_user_refresh_token#validaterefreshtoken",children:"validateRefreshToken"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"authenticatewithtoken",children:"authenticateWithToken"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"authenticateWithToken"}),"(",(0,r.jsx)(n.code,{children:"organization"}),", ",(0,r.jsx)(n.code,{children:"organizationSecret"}),", ",(0,r.jsx)(n.code,{children:"conn"}),", ",(0,r.jsx)(n.code,{children:"ctx"}),", ",(0,r.jsx)(n.code,{children:"token"}),", ",(0,r.jsx)(n.code,{children:"csrf"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organization"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organizationSecret"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"conn"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(n.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ctx"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(n.code,{children:"Ctx"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"token"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"csrf"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/user_refresh_token.ts#L200",children:"src/service/user_refresh_token.ts:200"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getuserauthdata",children:"getUserAuthData"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getUserAuthData"}),"(",(0,r.jsx)(n.code,{children:"conn"}),", ",(0,r.jsx)(n.code,{children:"ctx"}),", ",(0,r.jsx)(n.code,{children:"organization"}),", ",(0,r.jsx)(n.code,{children:"organizationSecret"}),", ",(0,r.jsx)(n.code,{children:"userId"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"conn"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(n.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ctx"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(n.code,{children:"Ctx"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organization"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organizationSecret"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"userId"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/user_refresh_token.ts#L121",children:"src/service/user_refresh_token.ts:121"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"validaterefreshtoken",children:"validateRefreshToken"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"validateRefreshToken"}),"(",(0,r.jsx)(n.code,{children:"organization"}),", ",(0,r.jsx)(n.code,{children:"organizationSecret"}),", ",(0,r.jsx)(n.code,{children:"conn"}),", ",(0,r.jsx)(n.code,{children:"dbConnection"}),", ",(0,r.jsx)(n.code,{children:"ctx"}),", ",(0,r.jsx)(n.code,{children:"userId"}),", ",(0,r.jsx)(n.code,{children:"refreshToken"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organization"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"organizationSecret"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"conn"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,r.jsx)(n.code,{children:"ConnToken"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"dbConnection"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"../classes/lib_db.default",children:(0,r.jsx)(n.code,{children:"default"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ctx"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,r.jsx)(n.code,{children:"Ctx"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"userId"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"refreshToken"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"string"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"result#type",children:(0,r.jsx)(n.code,{children:"Type"})}),"<",(0,r.jsx)(n.a,{href:"../interfaces/service_domain_organization_auth_token.AuthToken",children:(0,r.jsx)(n.code,{children:"AuthToken"})}),">>"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/user_refresh_token.ts#L38",children:"src/service/user_refresh_token.ts:38"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);