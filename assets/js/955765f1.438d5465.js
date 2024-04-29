"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[49364],{14862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151);const s={},r="Connect to an existing Blockchain network on Machine",a={id:"operation-administration/installation/connect-to-an-existing-network/bare-metal",title:"Connect to an existing Blockchain network on Machine",description:"It is highly recommended to use the Docker Compose Setup guide instead of this Setup guide. Only use this guide if docker cannot be used",source:"@site/docs/operation-administration/installation/connect-to-an-existing-network/bare-metal.md",sourceDirName:"operation-administration/installation/connect-to-an-existing-network",slug:"/operation-administration/installation/connect-to-an-existing-network/bare-metal",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/bare-metal",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-an-existing-network/bare-metal.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1714400699,formattedLastUpdatedAt:"Apr 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/operation-administration/installation/"},next:{title:"Connection Process",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/connection-process"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Get the repository",id:"get-the-repository",level:2},{value:"Blockchain",id:"blockchain",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connect-to-an-existing-blockchain-network-on-machine",children:"Connect to an existing Blockchain network on Machine"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["It is highly recommended to use the ",(0,o.jsx)(n.a,{href:"./docker",children:"Docker Compose Setup guide"})," instead of this Setup guide. Only use this guide if docker cannot be used"]})}),"\n",(0,o.jsxs)(n.p,{children:["This guide describes how to connect to an existing network without the use of Docker, Docker Compose or Kubernetes.\nBefore starting make sure to have ",(0,o.jsx)(n.code,{children:"node"}),",",(0,o.jsx)(n.code,{children:"npm"})," and the ",(0,o.jsx)(n.a,{href:"https://www.multichain.com/download-community/",children:"latest release of MultiChain"})," available on your machine.\nTo check if all required tools are installed correctly use following check commands:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["node: ",(0,o.jsx)(n.code,{children:"node -v"})]}),"\n",(0,o.jsxs)(n.li,{children:["npm: ",(0,o.jsx)(n.code,{children:"npm -v"})]}),"\n",(0,o.jsxs)(n.li,{children:["multichain: ",(0,o.jsx)(n.code,{children:"multichain-util"})," & ",(0,o.jsx)(n.code,{children:"multichaind"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If the above commands cannot be found make sure the tools are installed and the PATH variables are set correctly."}),"\n",(0,o.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#connect-to-an-existing-blockchain-network-on-machine",children:"Connect to an existing Blockchain network on Machine"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#get-the-repository",children:"Get the repository"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#blockchain",children:"Blockchain"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"get-the-repository",children:"Get the repository"}),"\n",(0,o.jsx)(n.p,{children:"Clone the Github repository of the components onto the designated machines."}),"\n",(0,o.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/openkfw/TruBudget.git\ncd TruBudget\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"If you work with an existing checkout, make sure you have the latest changes:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git pull\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,o.jsxs)(n.p,{children:["A blockchain node defines itself as ",(0,o.jsx)(n.code,{children:"beta node"})," if the environment variable ",(0,o.jsx)(n.code,{children:"P2P_HOST"})," is set."]}),"\n",(0,o.jsxs)(n.p,{children:["First make sure the alpha node has set its EXTERNAL_IP environment variable and is available (check firewall), otherwise it will not be possible to connect to the alpha node.\nAdapt and set the environment parameters listed below.\nA detailed description can be found in the ",(0,o.jsx)(n.a,{href:"../../../environment-variables",children:"environment variable overview"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export PRETTY_PRINT="true"\nexport ORGANIZATION="BetaOrga"\nexport MULTICHAIN_RPC_USER="multichainrpc"\nexport MULTICHAIN_RPC_PASSWORD="password"\nexport RPC_ALLOW_IP="0.0.0.0/0"\nexport MULTICHAIN_DIR="/tmp/beta"\nexport PORT=8086\nexport P2P_PORT=7447\nexport MULTICHAIN_RPC_PORT=8000\nexport API_PORT=8080\nexport P2P_HOST=[IP of alpha node]\nexport EXTERNAL_IP=[IP where this node is external available]\nexport API_HOST=[IP of alpha node API]\n'})}),"\n",(0,o.jsx)(n.div,{children:(0,o.jsxs)(n.p,{children:["Use absolute paths for environment variables.\nIf it's not the first start and the ",(0,o.jsx)(n.code,{children:".multichain"}),' folder exists already a multichain error will be shown in the logs but multichain will work as expected.\n(Error while creating Multichain\nerr: "ERROR: Blockchain parameter set was not generated.\\n" )']})}),"\n",(0,o.jsxs)(n.p,{children:["Navigate into the ",(0,o.jsx)(n.code,{children:"blockchain"})," directory and install the node packages defined in the ",(0,o.jsx)(n.code,{children:"package.json"})," and start the blockchain using following lines:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd blockchain/\nnpm install\nnpm start\n"})}),"\n",(0,o.jsx)(n.div,{children:(0,o.jsxs)(n.p,{children:["To run the process as background process use ",(0,o.jsx)(n.code,{children:"npm start > blockchain.log 2>&1 &"}),", the blockchain.log contains the logs of the blockchain process"]})}),"\n",(0,o.jsxs)(n.p,{children:["If the logs are showing the line ",(0,o.jsx)(n.code,{children:"Node ready"})," the node is setup correctly.\nThe blockchain can be checked by HTTP-Request ",(0,o.jsx)(n.code,{children:"localhost:8085/version"})," using postman, curl or even a browser. The response is the current version of TruBudget's blockchain."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);