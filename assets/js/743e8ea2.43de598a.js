"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[85262],{7453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"operation-administration/installation/README","title":"Introduction","description":"This guide offers tutorials on some key features of TruBudget, such as creating a new network, connecting to an existing network or updating the TruBudget instance.","source":"@site/docs/operation-administration/installation/README.md","sourceDirName":"operation-administration/installation","slug":"/operation-administration/installation/","permalink":"/docs/operation-administration/installation/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/README.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Security @ TruBudget","permalink":"/docs/operation-administration/security"},"next":{"title":"Connect to an existing Blockchain network on Machine","permalink":"/docs/operation-administration/installation/connect-to-an-existing-network/bare-metal"}}');var i=t(74848),r=t(28453);const s={},a="Introduction",c={},l=[{value:"Kubernetes",id:"kubernetes",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Table of Contents",id:"table-of-contents",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(n.p,{children:"This guide offers tutorials on some key features of TruBudget, such as creating a new network, connecting to an existing network or updating the TruBudget instance."}),"\n",(0,i.jsx)(n.p,{children:"In order to deploy and operate TruBudget, you have a few options. The most suitable option depends on the underlying infrastructure as well as what resources and technologies are available to you. The following options have been tested."}),"\n",(0,i.jsx)(n.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsxs)(n.p,{children:["The most modern option is to deploy TruBudget on a Kubernetes cluster. We recommend using this option as it offers different benefits such as a high availability and fault tolerance (due to the existence of replica sets), as well as scalability and resource optimization. To set up TruBudget on a k8s cluster we offer helm charts and instructions in a ",(0,i.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/tree/main/helm",children:"separate documentation file"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,i.jsx)(n.p,{children:"Another option commonly used to set up TruBudget is using our docker compose setup. This way, each TruBudget component will be started as a separate docker container and the persisted data will be stored using volumes."}),"\n",(0,i.jsx)(n.p,{children:"If for some reason you can't use docker and docker compose, you can follow the bare-metal guidelines."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starting a new network"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./create-a-new-network/docker",children:"Docker"})," (recommended)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./create-a-new-network/bare-metal",children:"Bare-Metal"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connecting to an existing network"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./connect-to-an-existing-network/docker",children:"Docker"})," (recommended)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./connect-to-an-existing-network/bare-metal",children:"Bare-Metal"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);