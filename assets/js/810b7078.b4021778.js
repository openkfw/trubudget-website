"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[31460],{34423:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"developer/api-docs/modules/service_user_enable","title":"service/user\\\\_enable","description":"Api Code Documentation / Exports / service/user\\\\_enable","source":"@site/docs/developer/api-docs/modules/service_user_enable.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_user_enable","permalink":"/docs/developer/api-docs/modules/service_user_enable","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_user_enable.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/user\\\\_disable","permalink":"/docs/developer/api-docs/modules/service_user_disable"},"next":{"title":"service/user\\\\_password\\\\_change","permalink":"/docs/developer/api-docs/modules/service_user_password_change"}}');var t=n(74848),i=n(28453);const l={},d="service/user_enable",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"enableUser",id:"enableuser",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"serviceuser_enable",children:"service/user_enable"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/user_enable"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_user_enable#enableuser",children:"enableUser"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"enableuser",children:"enableUser"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"enableUser"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"serviceUser"}),", ",(0,t.jsx)(s.code,{children:"issuerOrganization"}),", ",(0,t.jsx)(s.code,{children:"grantee"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"serviceUser"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,t.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"issuerOrganization"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"grantee"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_user_enable.RequestData",children:(0,t.jsx)(s.code,{children:"RequestData"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/user_enable.ts#L14",children:"src/service/user_enable.ts:14"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(96540);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);