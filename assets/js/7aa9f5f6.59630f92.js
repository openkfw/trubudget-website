"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[84181],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66909:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Create a new Network with Docker-Compose",c={unversionedId:"operation-administration/installation/create-a-new-network/docker",id:"operation-administration/installation/create-a-new-network/docker",isDocsHomePage:!1,title:"Create a new Network with Docker-Compose",description:"This guide describes how to start a new instance of Trubudget using docker-compose.",source:"@site/docs/operation-administration/installation/create-a-new-network/docker.md",sourceDirName:"operation-administration/installation/create-a-new-network",slug:"/operation-administration/installation/create-a-new-network/docker",permalink:"/docs/operation-administration/installation/create-a-new-network/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/create-a-new-network/docker.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a new Network on a Machine",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal"},next:{title:"Architecture in TruBudget",permalink:"/docs/operation-administration/architecture"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Docker &amp; Docker Compose",id:"docker--docker-compose",children:[]},{value:"Ports and IP Addresses for TruBudget",id:"ports-and-ip-addresses-for-trubudget",children:[]},{value:"Verify version of TruBudget",id:"verify-version-of-trubudget",children:[]},{value:"Clean installation",id:"clean-installation",children:[]}]},{value:"Create a new Blockchain network",id:"create-a-new-blockchain-network",children:[]},{value:"Create a new Blockchain network with two organization",id:"create-a-new-blockchain-network-with-two-organization",children:[{value:"Example",id:"example",children:[]}]}],d={toc:p},h="wrapper";function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-new-network-with-docker-compose"},"Create a new Network with Docker-Compose"),(0,r.kt)("p",null,"This guide describes how to start a new instance of Trubudget using docker-compose."),(0,r.kt)("p",null,"We distinguish between two types of deployments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"local")," deployment type which will create images from the code you have on your local machine and includes any\nchanges you might have done"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"alpha")," deployment type that will deploy Docker images out of the Docker Hub")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the alpha deployment, you can use tags to specify the version you want to use"))),(0,r.kt)("p",null,"The deployments are abstracted through shell scripts. We expect you to have a UNIX-like operating system which can\nexecute shell scripts, e.g. Ubuntu. If not, take a look at the scripts and port them according to your operating system."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-new-network-with-docker-compose"},"Create a new Network with Docker-Compose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker--docker-compose"},"Docker & Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ports-and-ip-addresses-for-trubudget"},"Ports and IP Addresses for TruBudget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#verify-version-of-trubudget"},"Verify version of TruBudget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clean-installation"},"Clean installation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-new-blockchain-network"},"Create a new Blockchain network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-new-blockchain-network-with-two-organization"},"Create a new Blockchain network with two organization"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example"},"Example"))))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"docker--docker-compose"},"Docker & Docker Compose"),(0,r.kt)("p",null,"The whole deployment is based on Docker and Docker Compose, therefore you need to\ninstall ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/community-edition#/download"},"Docker")," (version 20.10.7 or higher)\nand ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," (version 1.29.2 or higher)."),(0,r.kt)("h3",{id:"ports-and-ip-addresses-for-trubudget"},"Ports and IP Addresses for TruBudget"),(0,r.kt)("p",null,"Make sure that the following ports are not blocked by other processes: ",(0,r.kt)("inlineCode",{parentName:"p"},"3000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8090"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"9000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"7447"),"\n, ",(0,r.kt)("inlineCode",{parentName:"p"},"7448"),".\nAlso make sure that IPv4 subnet mask ",(0,r.kt)("inlineCode",{parentName:"p"},"172.21.0.0/24")," is free to use on your computer."),(0,r.kt)("p",null,"If the subnet mask or some ports are already used by other processes or programs, you can easily change the port in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file that is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/scripts/operations/"),"."),(0,r.kt)("h3",{id:"verify-version-of-trubudget"},"Verify version of TruBudget"),(0,r.kt)("p",null,"Start with checking out the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openkfw/TruBudget\ncd TruBudget\n")),(0,r.kt)("p",null,"This will create a local copy of the latest source code in a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"TruBudget")," (= your local checkout)."),(0,r.kt)("p",null,"If you work with an existing checkout, make sure you have the latest changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull\n")),(0,r.kt)("h3",{id:"clean-installation"},"Clean installation"),(0,r.kt)("p",null,"If you have previously started a TruBudget instance and want to start a new Blockchain network without previously stored\ndata, remove the Docker volumes with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -r /alphaVolume\nsudo rm -r /beta1Volume\nsudo rm -r /minioVolume\nsudo rm -r /emaildbVolume\n")),(0,r.kt)("p",null,"If this is either your first time starting TruBudget or you want to resume where you left off, skip this step."),(0,r.kt)("h2",{id:"create-a-new-blockchain-network"},"Create a new Blockchain network"),(0,r.kt)("p",null,"Each Blockchain container comes with its own volume that persists the data of the Blockchain.\nTo modify the host path, meaning the path where the data will be persisted on your local machine (docker volume), you\ncan change it in the docker-compose file ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/operation/docker-compose.yml"),"."),(0,r.kt)("p",null,"The next step is to set all required environment properties, otherwise Docker will not receive the required parameters\nto start the deployment.\nIf you want to start with the standard configuration we recommend copying the ",(0,r.kt)("inlineCode",{parentName:"p"},".env_example")," file and rename it\nto ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TruBudget")," base folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd scripts/operation/\ncp .env_example .env\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in scripts/operation/ can be edited directly to fit your needs."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For detailed explanations of the environment variables, see\nthe ",(0,r.kt)("a",{parentName:"p",href:"./../../../environment-variables"},"Environment Variables")))),(0,r.kt)("p",null,"To start the TruBudget in an easy way, use the bash script ",(0,r.kt)("inlineCode",{parentName:"p"},"start-trubudget.sh"),"."),(0,r.kt)("p",null,"If you want to start a setup with one blockchain, frontend, API and provisioning (for test data), run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd scripts/operation/\nbash start-trubudget.sh --slim\n")),(0,r.kt)("p",null,"If you want to add an additional blockchain node, email-notification-service, excel-export-service or storage-service,\nplease take a look at\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/scripts/operation/README.md#trubudget-operation-setup"},"README.md of operation setup")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"frontend")," should be accessible via port 3000 on the server that it is running on: http://localhost:3000/"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"API Swagger documentation")," should be accessible via port 8080 on the server that it is running\non: http://localhost:8080/api/documentation/static/index.html"),(0,r.kt)("h2",{id:"create-a-new-blockchain-network-with-two-organization"},"Create a new Blockchain network with two organization"),(0,r.kt)("p",null,"To connect two blockchains, you need to define exactly one alpha node and one or more beta nodes. The define a beta\nnode, you must set the\ncorrect ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/blockchain/README.md#environment-variables"},"Environmental variables"),"\nin a blockchain node in order to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"start a beta node with correct environmental variables"),(0,r.kt)("li",{parentName:"ol"},"send access requests to the alpha node")),(0,r.kt)("p",null,"To understand how to set the environment variables correctly,\nread ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/docs/operation-administration/installation/connect-to-an-existing-network/docker.md"},"How to connect to a alpha node"),"\n."),(0,r.kt)("p",null,"If you want to know what exactly happens when blockchain nodes are connecting, read the description of\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/blockchain/README.md#Lifecycle"},"Lifecycle"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The docker-compose file in ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/operation/")," comes with one additional blockchain node (beta-node) that tries to\nconnect to the alpha node after starting.\nEach Blockchain container comes with its own volume that persists the data of the Blockchain."),(0,r.kt)("p",null,"To start TruBudget with two organizations (alpha and beta), run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash start-trubudget.sh --slim --add-organization\n")),(0,r.kt)("p",null,"This will create the blockchain, API and frontend for each of both organizations.\nYou can access the frontend of the beta-node with http://localhost:3005/ and the for the alpha-node\nwith http://localhost:3000/. This is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.\nThe beta-node must be approved by the alpha-node. This can be done with the root user in the alpha frontend at the\npage http://localhost:3000/nodes.\nThe name of both organization and other configurations are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file (in the\ndirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/operation/"),")."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need more beta-nodes, you have to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"start-trubudget.sh")," in the\ndirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/operation/")," by yourself."))))}u.isMDXComponent=!0}}]);