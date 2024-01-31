"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[73224],{27990:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=s(85893),n=s(11151);const d={},i="httpd/server",c={id:"developer/api-docs/modules/httpd_server",title:"httpd/server",description:"Api Code Documentation / Exports / httpd/server",source:"@site/docs/developer/api-docs/modules/httpd_server.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/httpd_server",permalink:"/docs/developer/api-docs/modules/httpd_server",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/httpd_server.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1706714720,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"httpd/schema",permalink:"/docs/developer/api-docs/modules/httpd_schema"},next:{title:"lib/assertUnreachable",permalink:"/docs/developer/api-docs/modules/lib_assertUnreachable"}},l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"createBasicApp",id:"createbasicapp",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"httpdserver",children:"httpd/server"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,r.jsx)(t.a,{href:"../modules",children:"Exports"})," / httpd/server"]}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/developer/api-docs/modules/httpd_server#createbasicapp",children:"createBasicApp"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(t.h3,{id:"createbasicapp",children:"createBasicApp"}),"\n",(0,r.jsxs)(t.p,{children:["\u25b8 ",(0,r.jsx)(t.strong,{children:"createBasicApp"}),"(",(0,r.jsx)(t.code,{children:"jwtSecret"}),", ",(0,r.jsx)(t.code,{children:"urlPrefix"}),", ",(0,r.jsx)(t.code,{children:"apiPort"}),", ",(0,r.jsx)(t.code,{children:"accessControlAllowOrigin"}),", ",(0,r.jsx)(t.code,{children:"rateLimit"}),"): ",(0,r.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,r.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,r.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,r.jsx)(t.code,{children:"ServerResponse"}),"<",(0,r.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,r.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,r.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"jwtSecret"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"urlPrefix"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"apiPort"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"number"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"accessControlAllowOrigin"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"rateLimit"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"undefined"})," | ",(0,r.jsx)(t.code,{children:"number"})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,r.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,r.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,r.jsx)(t.code,{children:"ServerResponse"}),"<",(0,r.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,r.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,r.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]}),"\n",(0,r.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/965031f/api/src/httpd/server.ts#L139",children:"src/httpd/server.ts:139"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var r=s(67294);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);