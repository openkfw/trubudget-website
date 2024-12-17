"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55592],{68676:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developer/api-docs/modules/user_permission_revoke","title":"user\\\\_permission\\\\_revoke","description":"Api Code Documentation / Exports / user\\\\permission\\\\revoke","source":"@site/docs/developer/api-docs/modules/user_permission_revoke.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/user_permission_revoke","permalink":"/docs/developer/api-docs/modules/user_permission_revoke","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/user_permission_revoke.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"user\\\\_permission\\\\_grant","permalink":"/docs/developer/api-docs/modules/user_permission_grant"},"next":{"title":"user\\\\_permissions\\\\_list","permalink":"/docs/developer/api-docs/modules/user_permissions_list"}}');var n=t(74848),i=t(28453);const d={},l="user_permission_revoke",o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"user_permission_revoke",children:"user_permission_revoke"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(s.a,{href:"../modules",children:"Exports"})," / user_permission_revoke"]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/developer/api-docs/modules/user_permission_revoke#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"addHttpHandler"}),"(",(0,n.jsx)(s.code,{children:"server"}),", ",(0,n.jsx)(s.code,{children:"urlPrefix"}),", ",(0,n.jsx)(s.code,{children:"service"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n",(0,n.jsxs)(s.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,n.jsx)(s.code,{children:"/user.intent.revokePermission"})," route"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"server"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,n.jsx)(s.code,{children:"AugmentedFastifyInstance"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"urlPrefix"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"service"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Service"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/user_permission_revoke.ts#L130",children:"src/user_permission_revoke.ts:130"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var r=t(96540);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);