"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[20344],{88658:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"developer/api-docs/modules/httpd_router","title":"httpd/router","description":"Api Code Documentation / Exports / httpd/router","source":"@site/docs/developer/api-docs/modules/httpd_router.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/httpd_router","permalink":"/docs/developer/api-docs/modules/httpd_router","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/httpd_router.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"httpd/lib","permalink":"/docs/developer/api-docs/modules/httpd_lib"},"next":{"title":"httpd/schema","permalink":"/docs/developer/api-docs/modules/httpd_schema"}}');var d=s(74848),n=s(28453);const l={},c="httpd/router",i={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"registerRoutes",id:"registerroutes",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"httpdrouter",children:"httpd/router"})}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,d.jsx)(t.a,{href:"../modules",children:"Exports"})," / httpd/router"]}),"\n",(0,d.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,d.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/developer/api-docs/modules/httpd_router#registerroutes",children:"registerRoutes"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,d.jsx)(t.h3,{id:"registerroutes",children:"registerRoutes"}),"\n",(0,d.jsxs)(t.p,{children:["\u25b8 ",(0,d.jsx)(t.strong,{children:"registerRoutes"}),"(",(0,d.jsx)(t.code,{children:"server"}),", ",(0,d.jsx)(t.code,{children:"conn"}),", ",(0,d.jsx)(t.code,{children:"urlPrefix"}),", ",(0,d.jsx)(t.code,{children:"blockchainProtocol"}),", ",(0,d.jsx)(t.code,{children:"blockchainHost"}),", ",(0,d.jsx)(t.code,{children:"blockchainPort"}),", ",(0,d.jsx)(t.code,{children:"storageServiceClient"}),", ",(0,d.jsx)(t.code,{children:"invalidateCache"}),"): ",(0,d.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,d.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,d.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,d.jsx)(t.code,{children:"ServerResponse"}),"<",(0,d.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,d.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,d.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]}),"\n",(0,d.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"server"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,d.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,d.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,d.jsx)(t.code,{children:"ServerResponse"}),"<",(0,d.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,d.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,d.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"conn"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,d.jsx)(t.code,{children:"ConnToken"})})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"urlPrefix"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"string"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"blockchainProtocol"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:'"http"'})," | ",(0,d.jsx)(t.code,{children:'"https"'})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"blockchainHost"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"string"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"blockchainPort"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"number"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"storageServiceClient"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"../classes/service_Client_storage_service.default",children:(0,d.jsx)(t.code,{children:"default"})})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"invalidateCache"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,d.jsx)(t.code,{children:"void"})]})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,d.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,d.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,d.jsx)(t.code,{children:"ServerResponse"}),"<",(0,d.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,d.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,d.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]}),"\n",(0,d.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/router.ts#L220",children:"src/httpd/router.ts:220"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var r=s(96540);const d={},n=r.createContext(d);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);