"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[26266],{82503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"operation-administration/telemetry","title":"Telemetry","description":"Introduction","source":"@site/docs/operation-administration/telemetry.md","sourceDirName":"operation-administration","slug":"/operation-administration/telemetry","permalink":"/docs/operation-administration/telemetry","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/telemetry.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Running TruBudget","permalink":"/docs/operation-administration/resource-requirements"},"next":{"title":"Updating TruBudget","permalink":"/docs/operation-administration/update-trubudget"}}');var o=n(74848),i=n(28453);const s={},a="Telemetry",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Instrumented services",id:"instrumented-services",level:2},{value:"API",id:"api",level:3},{value:"Frontend",id:"frontend",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"telemetry",children:"Telemetry"})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Telemetry here refers to the collection of data from your TruBudget deployment that you can analyze to provide insights into its usage and performance. It is an optional feature. Telemetry is sent to the collector that you configure (see below) - we do not collect your data. Currently (July 2024) only Azure Monitor/Application Insights is supported with plans to use OpenTelemetry Protocol (OTLP) Exporter alongside."}),"\n",(0,o.jsx)(t.h2,{id:"instrumented-services",children:"Instrumented services"}),"\n",(0,o.jsx)(t.p,{children:"Telemetry is enabled by setting the appropriate environment variables correctly, and turned off by leaving them blank."}),"\n",(0,o.jsx)(t.p,{children:"It is possible to gather metrics and traces only from frontend, or only api, or both. Traces from multiple services are collated in Application Insights."}),"\n",(0,o.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,o.jsxs)(t.p,{children:["To collect telemetry from the API server, set the ",(0,o.jsx)(t.code,{children:"APPLICATIONINSIGHTS_CONNECTION_STRING"})," environment variable to the Application Insights connection string."]}),"\n",(0,o.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsxs)(t.p,{children:["To collect telemetry from TruBudget frontend running in a browser, set the ",(0,o.jsx)(t.code,{children:"REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING"})," environment variable to the Application Insights connection string. It may, but doesn't necessarily have to, be the same as the target for api telemetry."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);