"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[25823],{97206:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(85893),s=n(11151);const i={},r="service/domain/document/document_shared",c={id:"developer/api-docs/modules/service_domain_document_document_shared",title:"service/domain/document/document\\_shared",description:"Api Code Documentation / Exports / service/domain/document/document\\_shared",source:"@site/docs/developer/api-docs/modules/service_domain_document_document_shared.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_document_document_shared",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_shared",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_document_document_shared.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700572368,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/document/document\\_share.spec",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_share_spec"},next:{title:"service/domain/document/document\\_upload",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_upload"}},l={},a=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validateSecret",id:"validatesecret",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function o(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"servicedomaindocumentdocument_shared",children:"service/domain/document/document_shared"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(d.a,{href:"../modules",children:"Exports"})," / service/domain/document/document_shared"]}),"\n",(0,t.jsx)(d.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.Event",children:"Event"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.SecretPublished",children:"SecretPublished"})}),"\n"]}),"\n",(0,t.jsx)(d.h3,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_shared#schema",children:"schema"})}),"\n"]}),"\n",(0,t.jsx)(d.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_shared#createevent",children:"createEvent"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_shared#validate",children:"validate"})}),"\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_shared#validatesecret",children:"validateSecret"})}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"variables-1",children:"Variables"}),"\n",(0,t.jsx)(d.h3,{id:"schema",children:"schema"}),"\n",(0,t.jsxs)(d.p,{children:["\u2022 ",(0,t.jsx)(d.code,{children:"Const"})," ",(0,t.jsx)(d.strong,{children:"schema"}),": ",(0,t.jsx)(d.code,{children:"ObjectSchema"}),"<",(0,t.jsx)(d.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_shared.ts#L28",children:"src/service/domain/document/document_shared.ts:28"})}),"\n",(0,t.jsx)(d.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(d.h3,{id:"createevent",children:"createEvent"}),"\n",(0,t.jsxs)(d.p,{children:["\u25b8 ",(0,t.jsx)(d.strong,{children:"createEvent"}),"(",(0,t.jsx)(d.code,{children:"source"}),", ",(0,t.jsx)(d.code,{children:"publisher"}),", ",(0,t.jsx)(d.code,{children:"docId"}),", ",(0,t.jsx)(d.code,{children:"organization"}),", ",(0,t.jsx)(d.code,{children:"encryptedSecret"}),", ",(0,t.jsx)(d.code,{children:"time?"}),", ",(0,t.jsx)(d.code,{children:"metadata?"}),"): ",(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.Event",children:(0,t.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"source"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"publisher"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"docId"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"organization"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"encryptedSecret"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"time"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"string"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"metadata?"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata",children:(0,t.jsx)(d.code,{children:"UserMetadata"})})})]})]})]}),"\n",(0,t.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.Event",children:(0,t.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_shared.ts#L44",children:"src/service/domain/document/document_shared.ts:44"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h3,{id:"validate",children:"validate"}),"\n",(0,t.jsxs)(d.p,{children:["\u25b8 ",(0,t.jsx)(d.strong,{children:"validate"}),"(",(0,t.jsx)(d.code,{children:"input"}),"): ",(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.Event",children:(0,t.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"input"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(d.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.Event",children:(0,t.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_shared.ts#L39",children:"src/service/domain/document/document_shared.ts:39"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h3,{id:"validatesecret",children:"validateSecret"}),"\n",(0,t.jsxs)(d.p,{children:["\u25b8 ",(0,t.jsx)(d.strong,{children:"validateSecret"}),"(",(0,t.jsx)(d.code,{children:"input"}),"): ",(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.SecretPublished",children:(0,t.jsx)(d.code,{children:"SecretPublished"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"input"})}),(0,t.jsx)(d.td,{style:{textAlign:"left"},children:(0,t.jsx)(d.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(d.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"result#type",children:(0,t.jsx)(d.code,{children:"Type"})}),"<",(0,t.jsx)(d.a,{href:"../interfaces/service_domain_document_document_shared.SecretPublished",children:(0,t.jsx)(d.code,{children:"SecretPublished"})}),">"]}),"\n",(0,t.jsx)(d.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_shared.ts#L79",children:"src/service/domain/document/document_shared.ts:79"})})]})}function h(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);