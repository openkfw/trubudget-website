"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[32330],{83101:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(85893),r=s(11151);const i={},d="project_permission_revoke",o={id:"developer/api-docs/modules/project_permission_revoke",title:"project\\_permission\\_revoke",description:"Api Code Documentation / Exports / project\\permission\\revoke",source:"@site/docs/developer/api-docs/modules/project_permission_revoke.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/project_permission_revoke",permalink:"/docs/developer/api-docs/modules/project_permission_revoke",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/project_permission_revoke.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1727099391,formattedLastUpdatedAt:"Sep 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"project\\_permission\\_grant",permalink:"/docs/developer/api-docs/modules/project_permission_grant"},next:{title:"project\\_permissions\\_list",permalink:"/docs/developer/api-docs/modules/project_permissions_list"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"project_permission_revoke",children:"project_permission_revoke"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(t.a,{href:"../modules",children:"Exports"})," / project_permission_revoke"]}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/developer/api-docs/modules/project_permission_revoke#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,n.jsx)(t.code,{children:"server"}),", ",(0,n.jsx)(t.code,{children:"urlPrefix"}),", ",(0,n.jsx)(t.code,{children:"service"}),"): ",(0,n.jsx)(t.code,{children:"void"})]}),"\n",(0,n.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,n.jsx)(t.code,{children:"/project.intent.revokePermission"})," route"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"server"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"../interfaces/types.AugmentedFastifyInstance",children:(0,n.jsx)(t.code,{children:"AugmentedFastifyInstance"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"urlPrefix"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"service"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Service"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"void"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/2e83742/api/src/project_permission_revoke.ts#L128",children:"src/project_permission_revoke.ts:128"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>d});var n=s(67294);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);