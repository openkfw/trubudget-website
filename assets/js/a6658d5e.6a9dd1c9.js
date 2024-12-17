"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2855],{46997:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"developer/api-docs/modules/user_permission_grant","title":"user\\\\_permission\\\\_grant","description":"Api Code Documentation / Exports / user\\\\permission\\\\grant","source":"@site/docs/developer/api-docs/modules/user_permission_grant.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/user_permission_grant","permalink":"/docs/developer/api-docs/modules/user_permission_grant","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/user_permission_grant.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"user\\\\_password\\\\_reset","permalink":"/docs/developer/api-docs/modules/user_password_reset"},"next":{"title":"user\\\\_permission\\\\_revoke","permalink":"/docs/developer/api-docs/modules/user_permission_revoke"}}');var r=s(74848),i=s(28453);const d={},l="user_permission_grant",o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"user_permission_grant",children:"user_permission_grant"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(t.a,{href:"../modules",children:"Exports"})," / user_permission_grant"]}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/developer/api-docs/modules/user_permission_grant#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,r.jsxs)(t.p,{children:["\u25b8 ",(0,r.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,r.jsx)(t.code,{children:"server"}),", ",(0,r.jsx)(t.code,{children:"urlPrefix"}),", ",(0,r.jsx)(t.code,{children:"service"}),"): ",(0,r.jsx)(t.code,{children:"void"})]}),"\n",(0,r.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,r.jsx)(t.code,{children:"/user.intent.grantPermission"})," route"]}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"server"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,r.jsx)(t.code,{children:"AugmentedFastifyInstance"})})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"urlPrefix"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"service"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Service"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"void"})}),"\n",(0,r.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/user_permission_grant.ts#L129",children:"src/user_permission_grant.ts:129"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);