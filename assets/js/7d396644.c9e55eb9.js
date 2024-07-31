"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[84091],{83324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),o=n(11151);const i={},s="Telemetry",a={id:"operation-administration/telemetry",title:"Telemetry",description:"Introduction",source:"@site/docs/operation-administration/telemetry.md",sourceDirName:"operation-administration",slug:"/operation-administration/telemetry",permalink:"/docs/operation-administration/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/telemetry.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1722425965,formattedLastUpdatedAt:"Jul 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running TruBudget",permalink:"/docs/operation-administration/resource-requirements"},next:{title:"Updating TruBudget",permalink:"/docs/operation-administration/update-trubudget"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Instrumented services",id:"instrumented-services",level:2},{value:"API",id:"api",level:3},{value:"Frontend",id:"frontend",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"telemetry",children:"Telemetry"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Telemetry here refers to the collection of data from your TruBudget deployment that you can analyze to provide insights into its usage and performance. It is an optional feature. Telemetry is sent to the collector that you configure (see below) - we do not collect your data. Currently (July 2024) only Azure Monitor/Application Insights is supported with plans to use OpenTelemetry Protocol (OTLP) Exporter alongside."}),"\n",(0,r.jsx)(t.h2,{id:"instrumented-services",children:"Instrumented services"}),"\n",(0,r.jsx)(t.p,{children:"Telemetry is enabled by setting the appropriate environment variables correctly, and turned off by leaving them blank."}),"\n",(0,r.jsx)(t.p,{children:"It is possible to gather metrics and traces only from frontend, or only api, or both. Traces from multiple services are collated in Application Insights."}),"\n",(0,r.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,r.jsxs)(t.p,{children:["To collect telemetry from the API server, set the ",(0,r.jsx)(t.code,{children:"APPLICATIONINSIGHTS_CONNECTION_STRING"})," environment variable to the Application Insights connection string."]}),"\n",(0,r.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To collect telemetry from TruBudget frontend running in a browser, set the ",(0,r.jsx)(t.code,{children:"REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING"})," environment variable to the Application Insights connection string. It may, but doesn't necessarily have to, be the same as the target for api telemetry."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);