"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[28800],{17723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),i=t(11151);const s={},d="Running TruBudget",o={id:"operation-administration/resource-requirements",title:"Running TruBudget",description:"Resource Requirements",source:"@site/docs/operation-administration/resource-requirements.md",sourceDirName:"operation-administration",slug:"/operation-administration/resource-requirements",permalink:"/docs/operation-administration/resource-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/resource-requirements.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multichain-Cli",permalink:"/docs/operation-administration/multichain-cli"},next:{title:"Updating TruBudget",permalink:"/docs/operation-administration/update-trubudget"}},l={},c=[{value:"Resource Requirements",id:"resource-requirements",level:2},{value:"VMs",id:"vms",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Frontend",id:"frontend",level:3},{value:"API",id:"api",level:3},{value:"Export-Service",id:"export-service",level:3},{value:"Email-Service &amp; Email-DB",id:"email-service--email-db",level:3},{value:"Storage-Service &amp; MinIO",id:"storage-service--minio",level:3},{value:"Scaling TruBudget",id:"scaling-trubudget",level:2},{value:"Scaling Vertically",id:"scaling-vertically",level:2},{value:"Scaling Horizontally",id:"scaling-horizontally",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"running-trubudget",children:"Running TruBudget"}),"\n",(0,r.jsx)(n.h2,{id:"resource-requirements",children:"Resource Requirements"}),"\n",(0,r.jsx)(n.p,{children:"To ensure the best possible experience for your users, we've conducted extensive testing of TruBudget deployments with various configurations. Our top recommendation is to utilize a Kubernetes-based infrastructure, which not only offers exceptional flexibility but also ensures scalability and security for TruBudget deployments. This setup has undergone rigorous testing and has proven to be highly successful in running TruBudget deployments. It's the only infrastructure we can confidently guarantee will deliver a seamless experience."}),"\n",(0,r.jsxs)(n.p,{children:["To simplify the deployment process, we've provided a ",(0,r.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/tree/main/helm",children:"Helm chart template"})," that you can use as a starting point for deploying TruBudget on Kubernetes. While our Helm charts provide a solid foundation, please be aware that additional configuration steps may be required. For more comprehensive guidance, please refer to our Helm documentation."]}),"\n",(0,r.jsx)(n.p,{children:"The resource allocation for your TruBudget instance can be tailored to your specific usage needs. Different components require varying levels of resources, with the API and blockchain typically demanding the most in terms of CPU, memory, and storage capacity. It's worth noting that the resource requirements may fluctuate, especially concerning blockchain data volume. In such cases, it may be necessary to implement scaling mechanisms (refer to the scaling section below) to accommodate these changes effectively."}),"\n",(0,r.jsx)(n.p,{children:"Here are some example configurations to consider. Please keep in mind that the minimal requirements are suitable for TruBudget instances with low parallel user activity and minimal data flow. On the other hand, the recommended usage guidelines are intended for instances that handle more than 10 concurrent users and involve frequent and substantial data exchanges.\nIf you anticipate heavy usage of TruBudget, it's important to be aware that the recommended configuration may not provide sufficient resources."}),"\n",(0,r.jsx)(n.h3,{id:"vms",children:"VMs"}),"\n",(0,r.jsx)(n.p,{children:"If you plan to deploy TruBudget on a single VM with following services: Blockchain, API and Frontend, we recommend the following for minimum setup:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"2 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"8 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"10 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.p,{children:["If you chose the recommended approach using Kubernetes please check the requirements below. TruBudget load and stress tests are run against the minimum and recommend system requirements in a Kubernetes environment to ensure the correctness of the data below. However, depending on your use-case, the recommended approach might need to be adjusted accordingly. We recommend also having a monitoring tool in place to be able to monitor the resource usage and be able to adjust accordingly, check out ",(0,r.jsx)(n.a,{href:"https://trubudget.net/docs/operation-administration/logging-monitoring",children:"monitoring & logging guide"})," for more information."]}),"\n",(0,r.jsx)(n.h3,{id:"blockchain",children:"Blockchain"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"1 vCPU"}),(0,r.jsx)(n.td,{children:"2 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"4 GB"}),(0,r.jsx)(n.td,{children:"8 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"6 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"}),(0,r.jsx)(n.td,{children:"1 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"2 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"}),(0,r.jsx)(n.td,{children:"1 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"2 GB"}),(0,r.jsx)(n.td,{children:"8 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"export-service",children:"Export-Service"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"email-service--email-db",children:"Email-Service & Email-DB"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"}),(0,r.jsx)(n.td,{children:"0.5 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"storage-service--minio",children:"Storage-Service & MinIO"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU\u2020"}),(0,r.jsx)(n.td,{children:"1 vCPU"}),(0,r.jsx)(n.td,{children:"2 vCPU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"2 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"1 GB"}),(0,r.jsx)(n.td,{children:"50* GB"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Depending on the volume of data you intend to store within your components, it's advisable to consider attaching a volume where necessary. This is particularly crucial for components such as Blockchain, MinIO, and Email-DB, as they may handle substantial data loads that require safe and persistent storage. It's worth noting that the Storage-service, in particular, has higher storage demands compared to other components, as it is storing documents."})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u2020 Depending on your or your provider's infrastructure, the strength of one virtual CPU might vary. The above values are based on the Intel\xae Xeon\xae Platinum 8272CL processor (second generation Intel\xae Xeon\xae Scalable processors), Intel\xae Xeon\xae 8171M 2.1GHz (Skylake), Intel\xae Xeon\xae E5-2673 v4 2.3 GHz (Broadwell), or the Intel\xae Xeon\xae E5-2673 v3 2.4 GHz (Haswell) processors."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scaling-trubudget",children:"Scaling TruBudget"}),"\n",(0,r.jsx)(n.p,{children:"Depending on your infrastructure as well as on the specific use-case, you might have to scale TruBudget."}),"\n",(0,r.jsx)(n.h2,{id:"scaling-vertically",children:"Scaling Vertically"}),"\n",(0,r.jsx)(n.p,{children:"This is the approach we used in our current TruBudget instances and tests. Individual components can be scaled up or down by adjusting the resources depending on the necessity."}),"\n",(0,r.jsx)(n.h2,{id:"scaling-horizontally",children:"Scaling Horizontally"}),"\n",(0,r.jsx)(n.p,{children:"Scaling TruBudget horizontally is as easy as adding new instances of the services to your deployment. This is possible on all TruBudget services except the blockchain. Due to the specific architecture of TruBudget, enabling an additional blockchain node would not lead to the desired results but rather add a new node to the blockchain network. The other components (e.g. the API) can be scaled out, however we do not offer a guide for this so you would need to enable the specific infrastructure mechanisms independently."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var r=t(67294);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);