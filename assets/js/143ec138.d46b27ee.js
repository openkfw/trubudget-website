"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35029],{90311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developer/api-docs/modules/project_permission_grant","title":"project\\\\_permission\\\\_grant","description":"Api Code Documentation / Exports / project\\\\permission\\\\grant","source":"@site/docs/developer/api-docs/modules/project_permission_grant.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/project_permission_grant","permalink":"/docs/developer/api-docs/modules/project_permission_grant","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/project_permission_grant.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"project\\\\_list.v2","permalink":"/docs/developer/api-docs/modules/project_list_v2"},"next":{"title":"project\\\\_permission\\\\_revoke","permalink":"/docs/developer/api-docs/modules/project_permission_revoke"}}');var s=n(74848),i=n(28453);const d={},l="project_permission_grant",o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"project_permission_grant",children:"project_permission_grant"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(t.a,{href:"../modules",children:"Exports"})," / project_permission_grant"]}),"\n",(0,s.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/project_permission_grant#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,s.jsx)(t.code,{children:"server"}),", ",(0,s.jsx)(t.code,{children:"urlPrefix"}),", ",(0,s.jsx)(t.code,{children:"service"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,s.jsx)(t.code,{children:"/project.intent.grantPermission"})," route"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"server"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,s.jsx)(t.code,{children:"AugmentedFastifyInstance"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"urlPrefix"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"service"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Service"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/project_permission_grant.ts#L130",children:"src/project_permission_grant.ts:130"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);