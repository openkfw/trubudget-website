"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74464],{24873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"operation-administration/installation/connect-to-an-existing-network/docker","title":"Connect to an existing Blockchain network using docker","description":"This guide describes how to connect to an existing network using of Docker and Docker Compose.","source":"@site/docs/operation-administration/installation/connect-to-an-existing-network/docker.md","sourceDirName":"operation-administration/installation/connect-to-an-existing-network","slug":"/operation-administration/installation/connect-to-an-existing-network/docker","permalink":"/docs/operation-administration/installation/connect-to-an-existing-network/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-an-existing-network/docker.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Connection Process","permalink":"/docs/operation-administration/installation/connect-to-an-existing-network/connection-process"},"next":{"title":"Create a new Network on a Machine","permalink":"/docs/operation-administration/installation/create-a-new-network/bare-metal"}}');var o=n(74848),i=n(28453);const r={},a="Connect to an existing Blockchain network using docker",d={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Trubudget Docker Images",id:"trubudget-docker-images",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Example setup",id:"example-setup",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"connect-to-an-existing-blockchain-network-using-docker",children:"Connect to an existing Blockchain network using docker"})}),"\n",(0,o.jsx)(t.p,{children:"This guide describes how to connect to an existing network using of Docker and Docker Compose.\nBefore starting make sure to have docker and docker compose available on your machine."}),"\n",(0,o.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsx)(t.h2,{id:"trubudget-docker-images",children:"Trubudget Docker Images"}),"\n",(0,o.jsxs)(t.p,{children:["Trubudget's docker images are published on ",(0,o.jsx)(t.a,{href:"https://hub.docker.com/u/trubudget",children:"docker-hub"}),".\nIt is recommended to use a specific version tag like v.1.20.0 instead of the main or latest tag."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Only use main or latest tag if a code change of these versions is needed."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.code,{children:"beta node"})," is a Trubudget node which connects to an existing Trubudget network.\nTo understand the connection process read the ",(0,o.jsx)(t.a,{href:"./connection-process",children:"approval process documentation"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsx)(t.p,{children:"To establish a connection to an existing Trubudget network following conditions must be met:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["For a description of all Environment variables, see ",(0,o.jsx)(t.a,{href:"../../../environment-variables",children:"environment variables"}),".\nThis table gives an overview how to set the env vars correctly, so the beta node can connect to the alpha node.\nEmpty entries mean that setting that env var has no effect."]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Env Var Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Alpha API"}),(0,o.jsx)(t.th,{children:"Alpha Blockchain"}),(0,o.jsx)(t.th,{children:"Beta API"}),(0,o.jsx)(t.th,{children:"Beta Blockchain"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"EXTERNAL_IP"}),(0,o.jsx)(t.td,{children:"IP address with which the current node can be reached."}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Should be set if nodes are not in the same network."}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Should be set if nodes are not in the same network."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"P2P_HOST"}),(0,o.jsx)(t.td,{children:"Private IP-address of the alpha blockchain for P2P communication"}),(0,o.jsx)(t.td,{children:"Leave Empty"}),(0,o.jsx)(t.td,{children:"Leave empty"}),(0,o.jsx)(t.td,{children:"Leave empty"}),(0,o.jsx)(t.td,{children:"Must be set"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"P2P_PORT"}),(0,o.jsx)(t.td,{children:"Port used for P2P communications by nodes"}),(0,o.jsx)(t.td,{children:"Not Relevant"}),(0,o.jsx)(t.td,{children:"Must be set first in alpha to be used by beta blockchain"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Must be set as the value set by the alpha blockchain"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"API_HOST"}),(0,o.jsx)(t.td,{children:"IP-address of the alpha API"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Must be set so that network registration requests could be sent"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"API_PORT"}),(0,o.jsx)(t.td,{children:"Port of the alpha api"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Must be set for network registration"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"PORT"}),(0,o.jsx)(t.td,{children:"Port for corresponding service"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Must be set"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"MULTICHAIN_RPC_HOST"}),(0,o.jsx)(t.td,{children:"IP-address used in RPC comms between api and blockchain"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Not relevant"}),(0,o.jsx)(t.td,{children:"Must be set"}),(0,o.jsx)(t.td,{children:"Not relevant"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"MULTICHAIN_RPC_PORT"}),(0,o.jsx)(t.td,{children:"Port used in RPC comms between api and blockchain"}),(0,o.jsx)(t.td,{children:"Must be set same port as in alpha node"}),(0,o.jsx)(t.td,{children:"Must be set for alpha node"}),(0,o.jsx)(t.td,{children:"Must be set same port as in beta node"}),(0,o.jsx)(t.td,{children:"Must be set for beta node"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"MULTICHAIN_RPC_PASSWORD"}),(0,o.jsx)(t.td,{children:"Password used in RPC comms between api and blockchain"}),(0,o.jsx)(t.td,{children:"Must be set same password as in alpha node"}),(0,o.jsx)(t.td,{children:"Must be set for alpha node"}),(0,o.jsx)(t.td,{children:"Must be set same password as in beta node"}),(0,o.jsx)(t.td,{children:"Must be set for beta node (different password than alpha)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ORGANIZATION"}),(0,o.jsx)(t.td,{children:"Organization name of alpha/beta nodes"}),(0,o.jsx)(t.td,{children:"Must be set as alpha node organization"}),(0,o.jsx)(t.td,{children:"Must be set as alpha node organization"}),(0,o.jsx)(t.td,{children:"Must be set as beta node organization (different from alpha node organization)"}),(0,o.jsx)(t.td,{children:"Must be set as beta node organization (different from alpha node organization)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ORGANIZATION_VAULT_SECRET"}),(0,o.jsx)(t.td,{children:"Organization vault secrets of alpha/beta nodes\xa0"}),(0,o.jsx)(t.td,{children:"Must be set as alpha node organization"}),(0,o.jsx)(t.td,{children:"Must be set as alpha node organization"}),(0,o.jsx)(t.td,{children:"Must be set as beta node organization (different from alpha node organization)"}),(0,o.jsx)(t.td,{children:"Must be set as beta node organization (different from alpha node organization)"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"example-setup",children:"Example setup"}),"\n",(0,o.jsxs)(t.p,{children:["You can see an example multi-node setup via docker-compose under ",(0,o.jsx)(t.code,{children:"/docker-compose/multi-node"}),". Check out the container env variable setup in ",(0,o.jsx)(t.code,{children:"docker-compose.yml"})," to have a better idea how they are used differently in alpha and beta services."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);