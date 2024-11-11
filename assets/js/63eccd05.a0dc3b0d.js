"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[30438],{37554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developer/api-docs/modules/user_authenticate","title":"user\\\\_authenticate","description":"Api Code Documentation / Exports / user\\\\_authenticate","source":"@site/docs/developer/api-docs/modules/user_authenticate.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/user_authenticate","permalink":"/docs/developer/api-docs/modules/user_authenticate","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/user_authenticate.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"types","permalink":"/docs/developer/api-docs/modules/types"},"next":{"title":"user\\\\_authenticateAd","permalink":"/docs/developer/api-docs/modules/user_authenticateAd"}}');var d=n(74848),i=n(28453);const r={},l="user_authenticate",c={},a=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"MAX_GROUPS_LENGTH",id:"max_groups_length",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"addHttpHandler",id:"addhttphandler",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"user_authenticate",children:"user_authenticate"})}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,d.jsx)(t.a,{href:"../modules",children:"Exports"})," / user_authenticate"]}),"\n",(0,d.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,d.jsx)(t.h3,{id:"variables",children:"Variables"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/developer/api-docs/modules/user_authenticate#max_groups_length",children:"MAX_GROUPS_LENGTH"})}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/developer/api-docs/modules/user_authenticate#addhttphandler",children:"addHttpHandler"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"variables-1",children:"Variables"}),"\n",(0,d.jsx)(t.h3,{id:"max_groups_length",children:"MAX_GROUPS_LENGTH"}),"\n",(0,d.jsxs)(t.p,{children:["\u2022 ",(0,d.jsx)(t.code,{children:"Const"})," ",(0,d.jsx)(t.strong,{children:"MAX_GROUPS_LENGTH"}),": ",(0,d.jsx)(t.code,{children:"3000"})]}),"\n",(0,d.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/user_authenticate.ts#L22",children:"src/user_authenticate.ts:22"})}),"\n",(0,d.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,d.jsx)(t.h3,{id:"addhttphandler",children:"addHttpHandler"}),"\n",(0,d.jsxs)(t.p,{children:["\u25b8 ",(0,d.jsx)(t.strong,{children:"addHttpHandler"}),"(",(0,d.jsx)(t.code,{children:"server"}),", ",(0,d.jsx)(t.code,{children:"urlPrefix"}),", ",(0,d.jsx)(t.code,{children:"service"}),", ",(0,d.jsx)(t.code,{children:"jwt"}),"): ",(0,d.jsx)(t.code,{children:"void"})]}),"\n",(0,d.jsxs)(t.p,{children:["Creates an http handler that handles incoming http requests for the ",(0,d.jsx)(t.code,{children:"/user.authenticate"})," route"]}),"\n",(0,d.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"server"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"FastifyInstance"}),"<",(0,d.jsx)(t.code,{children:"RawServerDefault"}),", ",(0,d.jsx)(t.code,{children:"IncomingMessage"}),", ",(0,d.jsx)(t.code,{children:"ServerResponse"}),"<",(0,d.jsx)(t.code,{children:"IncomingMessage"}),">, ",(0,d.jsx)(t.code,{children:"FastifyBaseLogger"}),", ",(0,d.jsx)(t.code,{children:"FastifyTypeProviderDefault"}),">"]}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"the current fastify server instance"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"urlPrefix"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"the prefix of the http url"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"service"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"Service"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"the service Service object used to offer an interface to the domain logic"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"jwt"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"../interfaces/config.JwtConfig",children:(0,d.jsx)(t.code,{children:"JwtConfig"})})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.code,{children:"void"})}),"\n",(0,d.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/user_authenticate.ts#L209",children:"src/user_authenticate.ts:209"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const d={},i=s.createContext(d);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);