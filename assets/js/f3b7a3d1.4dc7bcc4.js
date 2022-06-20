"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6482],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3453:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:4},s="Load and stress tests",d={unversionedId:"developer/load-tests",id:"developer/load-tests",isDocsHomePage:!1,title:"Load and stress tests",description:"TruBudget uses load and stress tests to ensure the system's stability. Some tests are triggered automatically after a major release, others run on each push to the remote repository or get triggered manually. The automated testing strategy allows to regularly check the system minimal requirements and adjust them as needed. Furthermore, developer get detailed information about the system allowing to search for flaws i.e. bottlenecks.",source:"@site/docs/developer/load-tests.md",sourceDirName:"developer",slug:"/developer/load-tests",permalink:"/docs/developer/load-tests",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/load-tests.md",version:"current",lastUpdatedBy:"Mayr Martin",lastUpdatedAt:1655711881,formattedLastUpdatedAt:"6/20/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/developer/logging"},next:{title:"How to write documentation for TruBudget",permalink:"/docs/developer/documentation"}},m=[],p={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"load-and-stress-tests"},"Load and stress tests"),(0,l.kt)("p",null,"TruBudget uses load and stress tests to ensure the system's stability. Some tests are triggered automatically after a major release, others run on each push to the remote repository or get triggered manually. The automated testing strategy allows to regularly check the system minimal requirements and adjust them as needed. Furthermore, developer get detailed information about the system allowing to search for flaws i.e. bottlenecks."),(0,l.kt)("p",null,"There are three types of load/stress tests:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stress test: Classic stress to bring the core part of the system (API/Blockchain) to their limits. Although the system capacities are entirely used, the system should not crash nor be unusable"),(0,l.kt)("li",{parentName:"ul"},"Smoke Tests: Smoke test are regular load-test, configured for minimal load. They are used for sanity checks."),(0,l.kt)("li",{parentName:"ul"},"Stability Test: The whole system and it's interconnecting services such as Email Service and Storage Service are tested. This test, in terms of requests and users per second, is set up similarly to the stress test.")),(0,l.kt)("p",null,"TruBudget uses ",(0,l.kt)("a",{parentName:"p",href:"https://k6.io"},"k6")," to define and run load and stability tests. Tests can be run both locally and using Docker. We highly recommend using docker since the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/tree/master/api/loadtest/runTests.sh"},"provided script")," spins up a complete test setup including Grafana and Influx.\nHowever, if you choose to run the tests locally, ",(0,l.kt)("inlineCode",{parentName:"p"},"k6")," needs to be installed. An optional Grafana and Influx instance are not required, but recommended in order to analyze the data generated by the tests."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Per default, the test script will run a smoke test against your local TruBudget instance. However, if you want to test a remote instance, the target URL can be changed in ",(0,l.kt)("inlineCode",{parentName:"p"},"api/loadtest/k6-tests/script.js")," by modifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"BASE_URL")," constant.\nThe test type can be changed in the provided script (",(0,l.kt)("inlineCode",{parentName:"p"},"api/loadtest/runTests.sh"),") by modifying the ",(0,l.kt)("inlineCode",{parentName:"p"}," --config")," parameter. Valid options are:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"smoke.config.json"),": runs a smoke-test (1 virtual user)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load.config.json"),": runs a load-test (100 virtual user)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stress.config.json"),": runs a stress-test (400 virtual user)")))),(0,l.kt)("h1",{id:"getting-started"},"Getting started"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"api/loadtest")),(0,l.kt)("li",{parentName:"ol"},"Configure the test as described above and add execution rights to ",(0,l.kt)("inlineCode",{parentName:"li"},"runTests.sh")),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"./runTests.sh"))),(0,l.kt)("h1",{id:"visualizing"},"Visualizing"),(0,l.kt)("p",null,"To visualize the generated data from the tests via Grafana:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Grafana"),(0,l.kt)("li",{parentName:"ul"},"Navigate to Dashboard"),(0,l.kt)("li",{parentName:"ul"},"In the left sidebar, click the + button > Import"),(0,l.kt)("li",{parentName:"ul"},"Paste the Dashboard ID: 2587 or 11837"),(0,l.kt)("li",{parentName:"ul"},"Click Load"),(0,l.kt)("li",{parentName:"ul"},"Select the Influx data-source"),(0,l.kt)("li",{parentName:"ul"},"Click Import")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Grafana has a bunch of pre-configured dashboards for ",(0,l.kt)("inlineCode",{parentName:"p"},"k6")," we recommend using one of the two predefined dashboards (2587 or 11837) mentioned above. However, if you want to browse the available dashboards, you can do it ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards?search=k6"},"here"),". Also, feel free to contribute to the Grafana community by creating your own dashboard and publishing it to the Grafana Hub."))),(0,l.kt)("h1",{id:"minimum-requirements"},"Minimum requirements"),(0,l.kt)("p",null,"TruBudget can be deployed in different ways. To give your users the best experience, we tested TruBudget with different configurations. The minimum requirements aim to provide a working environment with 50 to 100 parallel user. The recommended environment is capable of handling 100 - 400 parallel user (using Kubernetes)."),(0,l.kt)("p",null,"If you plan to deploy TruBudget on a single VM with following services: Blockchain, API and Frontend, we recommend the following for minimum setup:\n| | Minimum |\n| ------- | ------- |\n| CPU\u2020 | 2 vCPU |\n| RAM | 8 GB |\n| Storage | 10 GB |"),(0,l.kt)("p",null,"If you plan to have more than 100 parallel users, we strongly recommend using Kubernetes. TruBudget load and stress tests are run against the minimum and recommend system requirements in a Kubernetes environment to ensure the correctness of the data below."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Blockchain"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1","*"," GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Frontend"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"API"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Export-Service"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Email-Service"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Storage-Service"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"50","*"," GB")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u2020 Depending on your or your provider's infrastructure, the strength of one virtual CPU might vary. The above values are based on the Intel\xae Xeon\xae Platinum 8272CL processor (second generation Intel\xae Xeon\xae Scalable processors), Intel\xae Xeon\xae 8171M 2.1GHz (Skylake), Intel\xae Xeon\xae E5-2673 v4 2.3 GHz (Broadwell), or the Intel\xae Xeon\xae E5-2673 v3 2.4 GHz (Haswell) processors."),(0,l.kt)("p",{parentName:"div"},"*"," Assuming you are using off-chain-storage."))))}u.isMDXComponent=!0}}]);