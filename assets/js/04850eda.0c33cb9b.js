"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[60878],{14829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"developer/api-docs/modules/service_document_validation","title":"service/document\\\\_validation","description":"Api Code Documentation / Exports / service/document\\\\_validation","source":"@site/docs/developer/api-docs/modules/service_document_validation.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_document_validation","permalink":"/docs/developer/api-docs/modules/service_document_validation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_document_validation.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/document\\\\_upload","permalink":"/docs/developer/api-docs/modules/service_document_upload"},"next":{"title":"service/domain/ResourceMap","permalink":"/docs/developer/api-docs/modules/service_domain_ResourceMap"}}');var s=n(74848),i=n(28453);const c={},l="service/document_validation",r={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"isSameDocument",id:"issamedocument",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"servicedocument_validation",children:"service/document_validation"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/document_validation"]}),"\n",(0,s.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_document_validation#issamedocument",children:"isSameDocument"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"issamedocument",children:"isSameDocument"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"isSameDocument"}),"(",(0,s.jsx)(t.code,{children:"documentBase64"}),", ",(0,s.jsx)(t.code,{children:"expectedSHA256"}),", ",(0,s.jsx)(t.code,{children:"documentId"}),", ",(0,s.jsx)(t.code,{children:"conn"}),", ",(0,s.jsx)(t.code,{children:"ctx"}),", ",(0,s.jsx)(t.code,{children:"serviceUser"}),", ",(0,s.jsx)(t.code,{children:"projectId"}),", ",(0,s.jsx)(t.code,{children:"subprojectId"}),", ",(0,s.jsx)(t.code,{children:"workflowitemId"}),"): ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(t.code,{children:"Type"})}),"<",(0,s.jsx)(t.code,{children:"boolean"}),">>"]}),"\n",(0,s.jsx)(t.p,{children:"Returns true if the given hash matches the given document."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"documentBase64"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"expectedSHA256"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"documentId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"conn"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(t.code,{children:"ConnToken"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ctx"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(t.code,{children:"Ctx"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"serviceUser"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"projectId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"subprojectId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"workflowitemId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(t.code,{children:"Type"})}),"<",(0,s.jsx)(t.code,{children:"boolean"}),">>"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/document_validation.ts#L27",children:"src/service/document_validation.ts:27"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var d=n(96540);const s={},i=d.createContext(s);function c(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);