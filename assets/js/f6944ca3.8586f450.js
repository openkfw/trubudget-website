"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[29591],{40426:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"developer/api-docs/modules/user_listAssignments","title":"user\\\\_listAssignments","description":"Api Code Documentation / Exports / user\\\\_listAssignments","source":"@site/docs/developer/api-docs/modules/user_listAssignments.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/user_listAssignments","permalink":"/docs/developer/api-docs/modules/user_listAssignments","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/user_listAssignments.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"user\\\\_list","permalink":"/docs/developer/api-docs/modules/user_list"},"next":{"title":"user\\\\_logout","permalink":"/docs/developer/api-docs/modules/user_logout"}}');var l=s(74848),i=s(28453);const r={},d="user_listAssignments",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"user_listassignments",children:"user_listAssignments"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,l.jsx)(t.a,{href:"../modules",children:"Exports"})," / user_listAssignments"]}),"\n",(0,l.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,l.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/developer/api-docs/modules/user_listAssignments#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,l.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,l.jsxs)(t.p,{children:["\u25b8 ",(0,l.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,l.jsx)(t.code,{children:"server"}),", ",(0,l.jsx)(t.code,{children:"urlPrefix"}),", ",(0,l.jsx)(t.code,{children:"service"}),"): ",(0,l.jsx)(t.code,{children:"void"})]}),"\n",(0,l.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,l.jsx)(t.code,{children:"/global.listAssignments"})," route"]}),"\n",(0,l.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"server"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,l.jsx)(t.code,{children:"AugmentedFastifyInstance"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"urlPrefix"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"service"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Service"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"void"})}),"\n",(0,l.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/user_listAssignments.ts#L87",children:"src/user_listAssignments.ts:87"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var n=s(96540);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);