"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[52313],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>c});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),d=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=d(t.components);return a.createElement(p.Provider,{value:n},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=d(e),m=r,c=k["".concat(p,".").concat(m)]||k[m]||s[m]||l;return e?a.createElement(c,o(o({ref:n},u),{},{components:e})):a.createElement(c,o({ref:n},u))}));function c(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=t,i[k]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},24235:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=e(87462),r=(e(67294),e(3905));const l={},o="Connect to an existing Blockchain network using docker",i={unversionedId:"operation-administration/installation/connect-to-an-existing-network/docker",id:"operation-administration/installation/connect-to-an-existing-network/docker",title:"Connect to an existing Blockchain network using docker",description:"This guide describes how to connect to an existing network using of Docker and Docker-Compose.",source:"@site/docs/operation-administration/installation/connect-to-an-existing-network/docker.md",sourceDirName:"operation-administration/installation/connect-to-an-existing-network",slug:"/operation-administration/installation/connect-to-an-existing-network/docker",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-an-existing-network/docker.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Process",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/connection-process"},next:{title:"Create a new Network on a Machine",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal"}},p={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Trubudget Docker Images",id:"trubudget-docker-images",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Environment Variables",id:"environment-variables",level:3}],u={toc:d},k="wrapper";function s(t){let{components:n,...e}=t;return(0,r.kt)(k,(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-an-existing-blockchain-network-using-docker"},"Connect to an existing Blockchain network using docker"),(0,r.kt)("p",null,"This guide describes how to connect to an existing network using of Docker and Docker-Compose.\nBefore starting make sure to have docker and docker-compose available on your machine."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("h2",{id:"trubudget-docker-images"},"Trubudget Docker Images"),(0,r.kt)("p",null,"Trubudget's docker images are published on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/trubudget"},"docker-hub"),".\nIt is recommended to use a specific version tag like v.1.20.0 instead of the main or latest tag."),(0,r.kt)("p",null,":::hint\nOnly use main or latest tag if a code change of these versions is needed.\n:::"),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"beta node")," is a Trubudget node which connects to an existing Trubudget network.\nTo understand the connection process read the ",(0,r.kt)("a",{parentName:"p",href:"./connection-process"},"approval process documentation"),"."),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"To establish a connection to an existing Trubudget network following conditions must be met:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For a description of all Environment variables, see ",(0,r.kt)("a",{parentName:"li",href:"../../../environment-variables"},"environment variables"),".\nThis table gives an overview how to set the env vars correctly, so the beta node can connect to the alpha node.\nEmpty entries mean that setting that env var has no effect.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name of env var"),(0,r.kt)("th",{parentName:"tr",align:null},"Alpha API"),(0,r.kt)("th",{parentName:"tr",align:null},"Alpha Blockchain"),(0,r.kt)("th",{parentName:"tr",align:null},"Beta API"),(0,r.kt)("th",{parentName:"tr",align:null},"Beta Blockchain"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EXTERNAL_IP"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"_","must not"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set","_"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"public IP-address and Port of the alpha Blockchain (optional, not necessary if alpha and beta are in the same network)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P2P_HOST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"_","must not"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set","_"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"private IP-address of the alpha Blockchain"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P2P_PORT"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"P2P_PORT of the alpha Blockchain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_HOST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"IP-address of alpha API"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"IP-address of the Beta API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PORT of alpha API"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PORT of the Beta API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"IP-address of alpha blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PORT of alpha blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port"),(0,r.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PORT of beta blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"set a port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"same password as in alpha blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"set a password"),(0,r.kt)("td",{parentName:"tr",align:null},"same password as in beta blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"set a password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ORGANIZATION"),(0,r.kt)("td",{parentName:"tr",align:null},"organization name of alpha node"),(0,r.kt)("td",{parentName:"tr",align:null},"organization name of alpha node (same as in alpha API)"),(0,r.kt)("td",{parentName:"tr",align:null},"organization name of beta node"),(0,r.kt)("td",{parentName:"tr",align:null},"organization name of beta node (same as in beta API)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ORGANIZATION_VAULT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"organization vault secret of your alpha node"),(0,r.kt)("td",{parentName:"tr",align:null},"organization vault secret (same as in alpha API)"),(0,r.kt)("td",{parentName:"tr",align:null},"organization vault secret of your beta node"),(0,r.kt)("td",{parentName:"tr",align:null},"organization vault secret (same as in beta API)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null))))))}s.isMDXComponent=!0}}]);