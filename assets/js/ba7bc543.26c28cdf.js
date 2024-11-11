"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75564],{67056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"developer/api-docs/modules/authenticationUtils","title":"authenticationUtils","description":"Api Code Documentation / Exports / authenticationUtils","source":"@site/docs/developer/api-docs/modules/authenticationUtils.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/authenticationUtils","permalink":"/docs/developer/api-docs/modules/authenticationUtils","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/authenticationUtils.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"app\\\\_upgrade","permalink":"/docs/developer/api-docs/modules/app_upgrade"},"next":{"title":"authz","permalink":"/docs/developer/api-docs/modules/authz"}}');var s=t(74848),r=t(28453);const l={},d="authenticationUtils",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"accessTokenExpirationInMinutesWithrefreshToken",id:"accesstokenexpirationinminuteswithrefreshtoken",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"refreshTokenExpirationInDays",id:"refreshtokenexpirationindays",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createRefreshJWTToken",id:"createrefreshjwttoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"authenticationutils",children:"authenticationUtils"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(n.a,{href:"../modules",children:"Exports"})," / authenticationUtils"]}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/developer/api-docs/modules/authenticationUtils#accesstokenexpirationinminuteswithrefreshtoken",children:"accessTokenExpirationInMinutesWithrefreshToken"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/developer/api-docs/modules/authenticationUtils#refreshtokenexpirationindays",children:"refreshTokenExpirationInDays"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/developer/api-docs/modules/authenticationUtils#createrefreshjwttoken",children:"createRefreshJWTToken"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"variables-1",children:"Variables"}),"\n",(0,s.jsx)(n.h3,{id:"accesstokenexpirationinminuteswithrefreshtoken",children:"accessTokenExpirationInMinutesWithrefreshToken"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Const"})," ",(0,s.jsx)(n.strong,{children:"accessTokenExpirationInMinutesWithrefreshToken"}),": ",(0,s.jsx)(n.code,{children:"10"})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/authenticationUtils.ts#L6",children:"src/authenticationUtils.ts:6"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"refreshtokenexpirationindays",children:"refreshTokenExpirationInDays"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Const"})," ",(0,s.jsx)(n.strong,{children:"refreshTokenExpirationInDays"}),": ",(0,s.jsx)(n.code,{children:"8"})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/authenticationUtils.ts#L5",children:"src/authenticationUtils.ts:5"})}),"\n",(0,s.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"createrefreshjwttoken",children:"createRefreshJWTToken"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"createRefreshJWTToken"}),"(",(0,s.jsx)(n.code,{children:"payload"}),", ",(0,s.jsx)(n.code,{children:"key"}),", ",(0,s.jsx)(n.code,{children:"algorithm?"}),"): ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Creates a refresh JWT Token"}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"payload"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"Object"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"key"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"algorithm"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:'"HS256"'})," | ",(0,s.jsx)(n.code,{children:'"RS256"'})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:'"HS256"'})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.p,{children:"a string containing the encoded JWT token"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/authenticationUtils.ts#L14",children:"src/authenticationUtils.ts:14"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);