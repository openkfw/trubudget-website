"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[45716],{76892:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var l=i(85893),d=i(11151);const s={},t="lib/validation",r={id:"developer/api-docs/modules/lib_validation",title:"lib/validation",description:"Api Code Documentation / Exports / lib/validation",source:"@site/docs/developer/api-docs/modules/lib_validation.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/lib_validation",permalink:"/docs/developer/api-docs/modules/lib_validation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/lib_validation.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lib/token",permalink:"/docs/developer/api-docs/modules/lib_token"},next:{title:"network/controller/approveNewNodeForExistingOrganization",permalink:"/docs/developer/api-docs/modules/network_controller_approveNewNodeForExistingOrganization"}},c={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"asyncValue",id:"asyncvalue",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"findBadKeysInObject",id:"findbadkeysinobject",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isDate",id:"isdate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isNonemptyString",id:"isnonemptystring",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isNumber",id:"isnumber",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isObject",id:"isobject",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isUserOrUndefined",id:"isuserorundefined",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"value",id:"value",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"libvalidation",children:"lib/validation"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,l.jsx)(n.a,{href:"../modules",children:"Exports"})," / lib/validation"]}),"\n",(0,l.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,l.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#asyncvalue",children:"asyncValue"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#findbadkeysinobject",children:"findBadKeysInObject"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#isdate",children:"isDate"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#isnonemptystring",children:"isNonemptyString"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#isnumber",children:"isNumber"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#isobject",children:"isObject"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#isuserorundefined",children:"isUserOrUndefined"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/lib_validation#value",children:"value"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,l.jsx)(n.h3,{id:"asyncvalue",children:"asyncValue"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"asyncValue"}),"(",(0,l.jsx)(n.code,{children:"multichain"}),", ",(0,l.jsx)(n.code,{children:"name"}),", ",(0,l.jsx)(n.code,{children:"val"}),", ",(0,l.jsx)(n.code,{children:"isValid"}),", ",(0,l.jsx)(n.code,{children:"defaultValue?"}),"): ",(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"multichain"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"name"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"val"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"isValid"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"defaultValue?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L61",children:"src/lib/validation.ts:61"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"findbadkeysinobject",children:"findBadKeysInObject"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"findBadKeysInObject"}),"(",(0,l.jsx)(n.code,{children:"expectedKeys"}),", ",(0,l.jsx)(n.code,{children:"isGood"}),", ",(0,l.jsx)(n.code,{children:"candidate"}),"): ",(0,l.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"expectedKeys"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:"string"}),"[]"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"isGood"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,l.jsx)(n.code,{children:"val"}),": ",(0,l.jsx)(n.code,{children:"unknown"}),") => ",(0,l.jsx)(n.code,{children:"boolean"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"candidate"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L34",children:"src/lib/validation.ts:34"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isdate",children:"isDate"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"isDate"}),"(",(0,l.jsx)(n.code,{children:"date"}),"): ",(0,l.jsx)(n.code,{children:"Date"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"date"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Date"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L41",children:"src/lib/validation.ts:41"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isnonemptystring",children:"isNonemptyString"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"isNonemptyString"}),"(",(0,l.jsx)(n.code,{children:"x"}),"): ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"x"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"unknown"})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L7",children:"src/lib/validation.ts:7"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isnumber",children:"isNumber"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"isNumber"}),"(",(0,l.jsx)(n.code,{children:"x"}),"): ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"x"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L47",children:"src/lib/validation.ts:47"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isobject",children:"isObject"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"isObject"}),"(",(0,l.jsx)(n.code,{children:"x"}),"): ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"x"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L71",children:"src/lib/validation.ts:71"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isuserorundefined",children:"isUserOrUndefined"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"isUserOrUndefined"}),"(",(0,l.jsx)(n.code,{children:"conn"}),", ",(0,l.jsx)(n.code,{children:"ctx"}),", ",(0,l.jsx)(n.code,{children:"issuer"}),", ",(0,l.jsx)(n.code,{children:"input"}),"): ",(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"conn"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,l.jsx)(n.code,{children:"ConnToken"})})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ctx"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,l.jsx)(n.code,{children:"Ctx"})})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"issuer"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,l.jsx)(n.code,{children:"ServiceUser"})})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"input"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L11",children:"src/lib/validation.ts:11"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,l.jsxs)(n.p,{children:["\u25b8 ",(0,l.jsx)(n.strong,{children:"value"}),"(",(0,l.jsx)(n.code,{children:"name"}),", ",(0,l.jsx)(n.code,{children:"val"}),", ",(0,l.jsx)(n.code,{children:"isValid"}),", ",(0,l.jsx)(n.code,{children:"defaultValue?"}),"): ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"name"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"val"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"isValid"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"defaultValue?"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"any"})})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"any"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/lib/validation.ts#L52",children:"src/lib/validation.ts:52"})})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var l=i(67294);const d={},s=l.createContext(d);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);