"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[93485],{66811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"developer/api-docs/modules/lib_symmetricCrypto","title":"lib/symmetricCrypto","description":"Api Code Documentation / Exports / lib/symmetricCrypto","source":"@site/docs/developer/api-docs/modules/lib_symmetricCrypto.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/lib_symmetricCrypto","permalink":"/docs/developer/api-docs/modules/lib_symmetricCrypto","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/lib_symmetricCrypto.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"lib/resourceTypes","permalink":"/docs/developer/api-docs/modules/lib_resourceTypes"},"next":{"title":"lib/symmetricCrypto.spec","permalink":"/docs/developer/api-docs/modules/lib_symmetricCrypto_spec"}}');var n=r(74848),i=r(28453);const d={},l="lib/symmetricCrypto",c={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"decrypt",id:"decrypt",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"encrypt",id:"encrypt",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"libsymmetriccrypto",children:"lib/symmetricCrypto"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(t.a,{href:"../modules",children:"Exports"})," / lib/symmetricCrypto"]}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/developer/api-docs/modules/lib_symmetricCrypto#decrypt",children:"decrypt"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/developer/api-docs/modules/lib_symmetricCrypto#encrypt",children:"encrypt"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"decrypt",children:"decrypt"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"decrypt"}),"(",(0,n.jsx)(t.code,{children:"organizationSecret"}),", ",(0,n.jsx)(t.code,{children:"hexEncodedCiphertext"}),"): ",(0,n.jsx)(t.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(t.code,{children:"Type"})}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Decrypts a hex-encoded ciphertext and returns the resulting string."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"organizationSecret"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hexEncodedCiphertext"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(t.code,{children:"Type"})}),"<",(0,n.jsx)(t.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/lib/symmetricCrypto.ts#L15",children:"src/lib/symmetricCrypto.ts:15"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"encrypt",children:"encrypt"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"encrypt"}),"(",(0,n.jsx)(t.code,{children:"organizationSecret"}),", ",(0,n.jsx)(t.code,{children:"plaintext"}),"): ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"Encrypts a string and returns resulting hex-encoded ciphertext."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"organizationSecret"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"plaintext"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"string"})}),"\n",(0,n.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/lib/symmetricCrypto.ts#L35",children:"src/lib/symmetricCrypto.ts:35"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);