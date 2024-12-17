"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[36198],{63235:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developer/api-docs/modules/service_cache","title":"service/cache","description":"Api Code Documentation / Exports / service/cache","source":"@site/docs/developer/api-docs/modules/service_cache.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_cache","permalink":"/docs/developer/api-docs/modules/service_cache","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_cache.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/RpcResponse.h","permalink":"/docs/developer/api-docs/modules/service_RpcResponse_h"},"next":{"title":"service/cache2","permalink":"/docs/developer/api-docs/modules/service_cache2"}}');var n=s(74848),t=s(28453);const d={},l="service/cache",r={},a=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Cache",id:"cache",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"initCache",id:"initcache",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.header,{children:(0,n.jsx)(c.h1,{id:"servicecache",children:"service/cache"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(c.a,{href:"../modules",children:"Exports"})," / service/cache"]}),"\n",(0,n.jsx)(c.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(c.h3,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsx)(c.li,{children:(0,n.jsx)(c.a,{href:"/docs/developer/api-docs/modules/service_cache#cache",children:"Cache"})}),"\n"]}),"\n",(0,n.jsx)(c.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsx)(c.li,{children:(0,n.jsx)(c.a,{href:"/docs/developer/api-docs/modules/service_cache#initcache",children:"initCache"})}),"\n"]}),"\n",(0,n.jsx)(c.h2,{id:"type-aliases-1",children:"Type Aliases"}),"\n",(0,n.jsx)(c.h3,{id:"cache",children:"Cache"}),"\n",(0,n.jsxs)(c.p,{children:["\u01ac ",(0,n.jsx)(c.strong,{children:"Cache"}),": ",(0,n.jsx)(c.code,{children:"Object"})]}),"\n",(0,n.jsx)(c.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(c.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{style:{textAlign:"left"},children:(0,n.jsx)(c.code,{children:"isWriteLocked"})}),(0,n.jsx)(c.td,{style:{textAlign:"left"},children:(0,n.jsx)(c.code,{children:"boolean"})})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{style:{textAlign:"left"},children:(0,n.jsx)(c.code,{children:"projectStreams?"})}),(0,n.jsxs)(c.td,{style:{textAlign:"left"},children:[(0,n.jsx)(c.a,{href:"../interfaces/service_Client_h.Stream",children:(0,n.jsx)(c.code,{children:"Stream"})}),"[]"]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{style:{textAlign:"left"},children:(0,n.jsx)(c.code,{children:"projects"})}),(0,n.jsxs)(c.td,{style:{textAlign:"left"},children:[(0,n.jsx)(c.code,{children:"Map"}),"<",(0,n.jsx)(c.code,{children:"string"}),", ",(0,n.jsx)(c.code,{children:"Project"}),">"]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{style:{textAlign:"left"},children:(0,n.jsx)(c.code,{children:"streamState"})}),(0,n.jsxs)(c.td,{style:{textAlign:"left"},children:[(0,n.jsx)(c.code,{children:"Map"}),"<",(0,n.jsx)(c.code,{children:"StreamName"}),", ",(0,n.jsx)(c.code,{children:"StreamCursor"}),">"]})]})]})]}),"\n",(0,n.jsx)(c.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache.ts#L9",children:"src/service/cache.ts:9"})}),"\n",(0,n.jsx)(c.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(c.h3,{id:"initcache",children:"initCache"}),"\n",(0,n.jsxs)(c.p,{children:["\u25b8 ",(0,n.jsx)(c.strong,{children:"initCache"}),"(): ",(0,n.jsx)(c.a,{href:"/docs/developer/api-docs/modules/service_cache#cache",children:(0,n.jsx)(c.code,{children:"Cache"})})]}),"\n",(0,n.jsx)(c.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.a,{href:"/docs/developer/api-docs/modules/service_cache#cache",children:(0,n.jsx)(c.code,{children:"Cache"})})}),"\n",(0,n.jsx)(c.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache.ts#L20",children:"src/service/cache.ts:20"})})]})}function o(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,c,s)=>{s.d(c,{R:()=>d,x:()=>l});var i=s(96540);const n={},t=i.createContext(n);function d(e){const c=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:c},e.children)}}}]);