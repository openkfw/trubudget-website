"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[46112],{70921:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"developer/api-docs/modules/service_cache2","title":"service/cache2","description":"Api Code Documentation / Exports / service/cache2","source":"@site/docs/developer/api-docs/modules/service_cache2.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_cache2","permalink":"/docs/developer/api-docs/modules/service_cache2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_cache2.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/cache","permalink":"/docs/developer/api-docs/modules/service_cache"},"next":{"title":"service/cache\\\\_snapshot","permalink":"/docs/developer/api-docs/modules/service_cache_snapshot"}}');var i=n(74848),d=n(28453);const l={},t="service/cache2",r={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Cache2",id:"cache2",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"TransactionFn",id:"transactionfn",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"getCacheInstance",id:"getcacheinstance",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"initCache",id:"initcache",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"invalidateCache",id:"invalidatecache",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"parseBusinessEvents",id:"parsebusinessevents",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"withCache",id:"withcache",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"servicecache2",children:"service/cache2"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,i.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/cache2"]}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(s.h3,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#cache2",children:"Cache2"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#transactionfn",children:"TransactionFn"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#getcacheinstance",children:"getCacheInstance"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#initcache",children:"initCache"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#invalidatecache",children:"invalidateCache"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#parsebusinessevents",children:"parseBusinessEvents"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#withcache",children:"withCache"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"type-aliases-1",children:"Type Aliases"}),"\n",(0,i.jsx)(s.h3,{id:"cache2",children:"Cache2"}),"\n",(0,i.jsxs)(s.p,{children:["\u01ac ",(0,i.jsx)(s.strong,{children:"Cache2"}),": ",(0,i.jsx)(s.code,{children:"Object"})]}),"\n",(0,i.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"eventsByStream"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"Map"}),"<",(0,i.jsx)(s.code,{children:"StreamName"}),", ",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,i.jsx)(s.code,{children:"BusinessEvent"})}),"[]>"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"globalPermissions"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"../interfaces/service_domain_workflow_global_permissions.GlobalPermissions",children:(0,i.jsx)(s.code,{children:"GlobalPermissions"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"isWriteLocked"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"boolean"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"lockQueue"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"ResolveFunction"}),"[]"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"streamState"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"Map"}),"<",(0,i.jsx)(s.code,{children:"StreamName"}),", ",(0,i.jsx)(s.code,{children:"StreamCursor"}),">"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L72",children:"src/service/cache2.ts:72"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"transactionfn",children:"TransactionFn"}),"\n",(0,i.jsxs)(s.p,{children:["\u01ac ",(0,i.jsx)(s.strong,{children:"TransactionFn"}),"<",(0,i.jsx)(s.code,{children:"T"}),">: (",(0,i.jsx)(s.code,{children:"cache"}),": ",(0,i.jsx)(s.code,{children:"CacheInstance"}),") => ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"})})}),(0,i.jsx)(s.tbody,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"T"})})})})]}),"\n",(0,i.jsx)(s.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 (",(0,i.jsx)(s.code,{children:"cache"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(s.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"cache"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"CacheInstance"})})]})})]}),"\n",(0,i.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L220",children:"src/service/cache2.ts:220"})}),"\n",(0,i.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(s.h3,{id:"getcacheinstance",children:"getCacheInstance"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getCacheInstance"}),"(",(0,i.jsx)(s.code,{children:"ctx"}),", ",(0,i.jsx)(s.code,{children:"cache"}),"): ",(0,i.jsx)(s.code,{children:"CacheInstance"})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"ctx"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(s.code,{children:"Ctx"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"cache"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#cache2",children:(0,i.jsx)(s.code,{children:"Cache2"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"CacheInstance"})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L115",children:"src/service/cache2.ts:115"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"initcache",children:"initCache"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"initCache"}),"(): ",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#cache2",children:(0,i.jsx)(s.code,{children:"Cache2"})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#cache2",children:(0,i.jsx)(s.code,{children:"Cache2"})})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L84",children:"src/service/cache2.ts:84"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"invalidatecache",children:"invalidateCache"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"invalidateCache"}),"(",(0,i.jsx)(s.code,{children:"conn"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"conn"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,i.jsx)(s.code,{children:"ConnToken"})})})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L250",children:"src/service/cache2.ts:250"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"parsebusinessevents",children:"parseBusinessEvents"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"parseBusinessEvents"}),"(",(0,i.jsx)(s.code,{children:"items"}),", ",(0,i.jsx)(s.code,{children:"streamName"}),"): ",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(s.code,{children:"Type"})}),"<",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,i.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"items"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.a,{href:"../interfaces/service_liststreamitems.Item",children:(0,i.jsx)(s.code,{children:"Item"})}),"[]"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"streamName"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,i.jsx)(s.code,{children:"Type"})}),"<",(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent",children:(0,i.jsx)(s.code,{children:"BusinessEvent"})}),">[]"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L495",children:"src/service/cache2.ts:495"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"withcache",children:"withCache"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"withCache"}),"<",(0,i.jsx)(s.code,{children:"T"}),">(",(0,i.jsx)(s.code,{children:"conn"}),", ",(0,i.jsx)(s.code,{children:"ctx"}),", ",(0,i.jsx)(s.code,{children:"transaction"}),", ",(0,i.jsx)(s.code,{children:"doRefresh?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"})})}),(0,i.jsx)(s.tbody,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"T"})})})})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Default value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"conn"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,i.jsx)(s.code,{children:"ConnToken"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"undefined"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"ctx"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,i.jsx)(s.code,{children:"Ctx"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"undefined"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"transaction"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_cache2#transactionfn",children:(0,i.jsx)(s.code,{children:"TransactionFn"})}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"undefined"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"doRefresh"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"boolean"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/cache2.ts#L222",children:"src/service/cache2.ts:222"})})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var c=n(96540);const i={},d=c.createContext(i);function l(e){const s=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(d.Provider,{value:s},e.children)}}}]);