"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1207],{66095:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var t=l(85893),s=l(11151);const n={},d="result",i={id:"developer/api-docs/modules/result",title:"result",description:"Api Code Documentation / Exports / result",source:"@site/docs/developer/api-docs/modules/result.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/result",permalink:"/docs/developer/api-docs/modules/result",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/result.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"provisioning\\_start",permalink:"/docs/developer/api-docs/modules/provisioning_start"},next:{title:"scripts/joiGenerator",permalink:"/docs/developer/api-docs/modules/scripts_joiGenerator"}},c={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Type",id:"type",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"isErr",id:"iserr",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isOk",id:"isok",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"map",id:"map",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"mapErr",id:"maperr",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"unwrap",id:"unwrap",level:3},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"unwrapErr",id:"unwraperr",level:3},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"unwrapOr",id:"unwrapor",level:3},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function x(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"result",children:"result"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(r.a,{href:"../modules",children:"Exports"})," / result"]}),"\n",(0,t.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(r.h3,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#iserr",children:"isErr"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#isok",children:"isOk"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#map",children:"map"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#maperr",children:"mapErr"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#unwrap",children:"unwrap"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#unwraperr",children:"unwrapErr"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#unwrapor",children:"unwrapOr"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases-1",children:"Type Aliases"}),"\n",(0,t.jsx)(r.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(r.p,{children:["\u01ac ",(0,t.jsx)(r.strong,{children:"Type"}),"<",(0,t.jsx)(r.code,{children:"T"}),">: ",(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"Type Result that can either contain a given type T or an Error"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L11",children:"src/result.ts:11"})}),"\n",(0,t.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(r.h3,{id:"iserr",children:"isErr"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"isErr"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"result"}),"): result is Error"]}),"\n",(0,t.jsx)(r.p,{children:"Checks if the given result is an error"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an object wrapped in a Result that might be an error"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"result is Error"}),"\n",(0,t.jsx)(r.p,{children:"a boolean indicating if the given result is an error or not"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L19",children:"src/result.ts:19"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"isok",children:"isOk"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"isOk"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"result"}),"): result is T"]}),"\n",(0,t.jsx)(r.p,{children:"Checks if the given result is Ok"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-2",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an object wrapped in a Result that might be an error"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"result is T"}),"\n",(0,t.jsx)(r.p,{children:"a boolean indicating if the given result is ok or not"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L29",children:"src/result.ts:29"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"map",children:"map"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"map"}),"<",(0,t.jsx)(r.code,{children:"T"}),", ",(0,t.jsx)(r.code,{children:"U"}),">(",(0,t.jsx)(r.code,{children:"result"}),", ",(0,t.jsx)(r.code,{children:"fn"}),"): ",(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"U"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"Maps the result to an error or applies the desired function on the result"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-3",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})}),(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"U"})})})]})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an element wrapped in a Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"fn"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"MapFn"}),"<",(0,t.jsx)(r.code,{children:"T"}),", ",(0,t.jsx)(r.code,{children:"U"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"a callback function that should be applied to the result"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"U"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"the result of the function or an error"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L44",children:"src/result.ts:44"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"maperr",children:"mapErr"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"mapErr"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"result"}),", ",(0,t.jsx)(r.code,{children:"fn"}),"): ",(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"Applies a function to an error or returns the result"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-4",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an element wrapped in a Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"fn"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"MapFn"}),"<",(0,t.jsx)(r.code,{children:"Error"}),", ",(0,t.jsx)(r.code,{children:"Error"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"a callback function that should be applied to the result"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"the result of the function if the element is an error or the given element otherwise"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L59",children:"src/result.ts:59"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"unwrap",children:"unwrap"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"unwrap"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"result"}),", ",(0,t.jsx)(r.code,{children:"message?"}),"): ",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"never"})]}),"\n",(0,t.jsx)(r.p,{children:"Unwraps the result or throws an error"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-5",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an element wrapped in a Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"message?"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an optional message to be used when throwing the error"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"never"})]}),"\n",(0,t.jsx)(r.p,{children:"the unwrapped result"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L74",children:"src/result.ts:74"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"unwraperr",children:"unwrapErr"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"unwrapErr"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"result"}),", ",(0,t.jsx)(r.code,{children:"message?"}),"): ",(0,t.jsx)(r.code,{children:"Error"})," | ",(0,t.jsx)(r.code,{children:"never"})]}),"\n",(0,t.jsx)(r.p,{children:"Unwraps the error or throws an error"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-6",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(r.tbody,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an element wrapped in a Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"message?"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an optional message to be used when throwing the error"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Error"})," | ",(0,t.jsx)(r.code,{children:"never"})]}),"\n",(0,t.jsx)(r.p,{children:"the unwrapped error if the given element was indeed an error"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L93",children:"src/result.ts:93"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"unwrapor",children:"unwrapOr"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"unwrapOr"}),"<",(0,t.jsx)(r.code,{children:"T"}),", ",(0,t.jsx)(r.code,{children:"U"}),">(",(0,t.jsx)(r.code,{children:"result"}),", ",(0,t.jsx)(r.code,{children:"defaultValue"}),"): ",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"U"})]}),"\n",(0,t.jsx)(r.p,{children:"Unwraps the result or returns a default value"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-7",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"T"})})}),(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"U"})})})]})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"result"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Result"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"an element wrapped in a Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"defaultValue"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"U"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"default value"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"U"})]}),"\n",(0,t.jsx)(r.p,{children:"the unwrapped result or the default value in case the given element is an error"}),"\n",(0,t.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/result.ts#L108",children:"src/result.ts:108"})})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,l)=>{l.d(r,{Z:()=>i,a:()=>d});var t=l(67294);const s={},n=t.createContext(s);function d(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);