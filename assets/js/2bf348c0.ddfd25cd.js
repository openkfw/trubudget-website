"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1067],{29466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developer/api-docs/modules/workflowitem_list","title":"workflowitem\\\\_list","description":"Api Code Documentation / Exports / workflowitem\\\\_list","source":"@site/docs/developer/api-docs/modules/workflowitem_list.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/workflowitem_list","permalink":"/docs/developer/api-docs/modules/workflowitem_list","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/workflowitem_list.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"workflowitem\\\\_download\\\\_document","permalink":"/docs/developer/api-docs/modules/workflowitem_download_document"},"next":{"title":"workflowitem\\\\_permission\\\\_grant","permalink":"/docs/developer/api-docs/modules/workflowitem_permission_grant"}}');var l=n(74848),i=n(28453);const r={},d="workflowitem_list",o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"workflowitem_list",children:"workflowitem_list"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,l.jsx)(t.a,{href:"../modules",children:"Exports"})," / workflowitem_list"]}),"\n",(0,l.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,l.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/developer/api-docs/modules/workflowitem_list#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,l.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,l.jsxs)(t.p,{children:["\u25b8 ",(0,l.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,l.jsx)(t.code,{children:"server"}),", ",(0,l.jsx)(t.code,{children:"urlPrefix"}),", ",(0,l.jsx)(t.code,{children:"service"}),"): ",(0,l.jsx)(t.code,{children:"void"})]}),"\n",(0,l.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,l.jsx)(t.code,{children:"/workflowitem.list"})," route"]}),"\n",(0,l.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"server"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,l.jsx)(t.code,{children:"AugmentedFastifyInstance"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"urlPrefix"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"service"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Service"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"void"})}),"\n",(0,l.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/workflowitem_list.ts#L195",children:"src/workflowitem_list.ts:195"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);