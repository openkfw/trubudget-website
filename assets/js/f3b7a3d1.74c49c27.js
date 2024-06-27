"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76482],{70832:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=s(85893),r=s(11151);const d={sidebar_position:4},i="Load and stress tests",l={id:"developer/load-tests",title:"Load and stress tests",description:"TruBudget uses load and stress tests to ensure the system's stability. Some tests are triggered automatically after a major release, others run on each push to the remote repository or get triggered manually. The automated testing strategy allows to regularly check the system minimal requirements and adjust them as needed. Furthermore, developer get detailed information about the system allowing to search for flaws i.e. bottlenecks.",source:"@site/docs/developer/load-tests.md",sourceDirName:"developer",slug:"/developer/load-tests",permalink:"/docs/developer/load-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/load-tests.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Snapshots of aggregable items in Blockchain",permalink:"/docs/developer/architecture/snapshot-logic"},next:{title:"How to write documentation for TruBudget",permalink:"/docs/developer/documentation"}},o={},a=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"load-and-stress-tests",children:"Load and stress tests"}),"\n",(0,n.jsx)(t.p,{children:"TruBudget uses load and stress tests to ensure the system's stability. Some tests are triggered automatically after a major release, others run on each push to the remote repository or get triggered manually. The automated testing strategy allows to regularly check the system minimal requirements and adjust them as needed. Furthermore, developer get detailed information about the system allowing to search for flaws i.e. bottlenecks."}),"\n",(0,n.jsx)(t.p,{children:"There are three types of load/stress tests:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Stress test: Classic stress to bring the core part of the system (API/Blockchain) to their limits. Although the system capacities are entirely used, the system should not crash nor be unusable"}),"\n",(0,n.jsx)(t.li,{children:"Smoke Tests: Smoke test are regular load-test, configured for minimal load. They are used for sanity checks."}),"\n",(0,n.jsx)(t.li,{children:"Stability Test: The whole system and it's interconnecting services such as Email Service and Storage Service are tested. This test, in terms of requests and users per second, is set up similarly to the stress test."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["TruBudget uses ",(0,n.jsx)(t.a,{href:"https://k6.io",children:"k6"})," to define and run load and stability tests. Tests can be run both locally and using Docker. We highly recommend using docker since the ",(0,n.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/tree/main/api/loadtest/runTests.sh",children:"provided script"})," spins up a complete test setup including Grafana and Influx.\nHowever, if you choose to run the tests locally, ",(0,n.jsx)(t.code,{children:"k6"})," needs to be installed. An optional Grafana and Influx instance are not required, but recommended in order to analyze the data generated by the tests."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["Per default, the test script will run a smoke test against your local TruBudget instance. However, if you want to test a remote instance, the target URL can be changed in ",(0,n.jsx)(t.code,{children:"api/loadtest/k6-tests/script.js"})," by modifying the ",(0,n.jsx)(t.code,{children:"BASE_URL"})," constant.\nThe test type can be changed in the provided script (",(0,n.jsx)(t.code,{children:"api/loadtest/runTests.sh"}),") by modifying the ",(0,n.jsx)(t.code,{children:" --config"})," parameter. Valid options are:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"smoke.config.json"}),": runs a smoke-test (1 virtual user)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"load.config.json"}),": runs a load-test (100 virtual user)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"stress.config.json"}),": runs a stress-test (400 virtual user)"]}),"\n"]})]}),"\n",(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to ",(0,n.jsx)(t.code,{children:"api/loadtest"})]}),"\n",(0,n.jsxs)(t.li,{children:["Configure the test as described above and add execution rights to ",(0,n.jsx)(t.code,{children:"runTests.sh"})]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"./runTests.sh"})]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"visualizing",children:"Visualizing"}),"\n",(0,n.jsx)(t.p,{children:"To visualize the generated data from the tests via Grafana:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open Grafana"}),"\n",(0,n.jsx)(t.li,{children:"Navigate to Dashboard"}),"\n",(0,n.jsx)(t.li,{children:"In the left sidebar, click the + button > Import"}),"\n",(0,n.jsx)(t.li,{children:"Paste the Dashboard ID: 2587 or 11837"}),"\n",(0,n.jsx)(t.li,{children:"Click Load"}),"\n",(0,n.jsx)(t.li,{children:"Select the Influx data-source"}),"\n",(0,n.jsx)(t.li,{children:"Click Import"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Grafana has a bunch of pre-configured dashboards for ",(0,n.jsx)(t.code,{children:"k6"})," we recommend using one of the two predefined dashboards (2587 or 11837) mentioned above. However, if you want to browse the available dashboards, you can do it ",(0,n.jsx)(t.a,{href:"https://grafana.com/grafana/dashboards?search=k6",children:"here"}),". Also, feel free to contribute to the Grafana community by creating your own dashboard and publishing it to the Grafana Hub."]})}),"\n",(0,n.jsx)(t.h1,{id:"minimum-requirements",children:"Minimum requirements"}),"\n",(0,n.jsx)(t.p,{children:"TruBudget can be deployed in different ways. To give your users the best experience, we tested TruBudget with different configurations. The minimum requirements aim to provide a working environment with 50 to 100 parallel user. The recommended environment is capable of handling 100 - 400 parallel user (using Kubernetes)."}),"\n",(0,n.jsx)(t.p,{children:"If you plan to deploy TruBudget on a single VM with following services: Blockchain, API and Frontend, we recommend the following for minimum setup:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"2 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"8 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"10 GB"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"If you plan to have more than 100 parallel users, we strongly recommend using Kubernetes. TruBudget load and stress tests are run against the minimum and recommend system requirements in a Kubernetes environment to ensure the correctness of the data below."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Blockchain"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"1 vCPU"}),(0,n.jsx)(t.td,{children:"2 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"4 GB"}),(0,n.jsx)(t.td,{children:"8 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1* GB"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Frontend"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"}),(0,n.jsx)(t.td,{children:"1 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"2 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"API"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"}),(0,n.jsx)(t.td,{children:"1 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"2 GB"}),(0,n.jsx)(t.td,{children:"8 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Export-Service"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Email-Service"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"}),(0,n.jsx)(t.td,{children:"0.5 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"1 GB"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Storage-Service"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Minimum"}),(0,n.jsx)(t.th,{children:"Recommended"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU\u2020"}),(0,n.jsx)(t.td,{children:"1 vCPU"}),(0,n.jsx)(t.td,{children:"2 vCPU"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"2 GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storage"}),(0,n.jsx)(t.td,{children:"1 GB"}),(0,n.jsx)(t.td,{children:"50* GB"})]})]})]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"\u2020 Depending on your or your provider's infrastructure, the strength of one virtual CPU might vary. The above values are based on the Intel\xae Xeon\xae Platinum 8272CL processor (second generation Intel\xae Xeon\xae Scalable processors), Intel\xae Xeon\xae 8171M 2.1GHz (Skylake), Intel\xae Xeon\xae E5-2673 v4 2.3 GHz (Broadwell), or the Intel\xae Xeon\xae E5-2673 v3 2.4 GHz (Haswell) processors."}),(0,n.jsx)(t.p,{children:"* Assuming you are using off-chain-storage."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);