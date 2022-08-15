"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2313],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return k}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=a.createContext({}),u=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(s.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(e),k=r,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||l;return e?a.createElement(m,o(o({ref:n},d),{},{components:e})):a.createElement(m,o({ref:n},d))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}c.displayName="MDXCreateElement"},5266:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=e(7462),r=e(3366),l=(e(7294),e(3905)),o=["components"],i={},s="Connect to an existing Blockchain network using docker",u={unversionedId:"operation-administration/installation/connect-to-an-existing-network/docker",id:"operation-administration/installation/connect-to-an-existing-network/docker",isDocsHomePage:!1,title:"Connect to an existing Blockchain network using docker",description:"This guide describes how to connect to an existing network using of Docker and Docker-Compose.",source:"@site/docs/operation-administration/installation/connect-to-an-existing-network/docker.md",sourceDirName:"operation-administration/installation/connect-to-an-existing-network",slug:"/operation-administration/installation/connect-to-an-existing-network/docker",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-an-existing-network/docker.md",version:"current",lastUpdatedBy:"IngmarM",lastUpdatedAt:1660570557,formattedLastUpdatedAt:"8/15/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Process",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/connection-process"},next:{title:"Create a new Network on a Machine",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal"}},d=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Trubudget Docker Images",id:"trubudget-docker-images",children:[]},{value:"Blockchain",id:"blockchain",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],p={toc:d};function c(t){var n=t.components,e=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"connect-to-an-existing-blockchain-network-using-docker"},"Connect to an existing Blockchain network using docker"),(0,l.kt)("p",null,"This guide describes how to connect to an existing network using of Docker and Docker-Compose.\nBefore starting make sure to have docker and docker-compose available on your machine."),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("h2",{id:"trubudget-docker-images"},"Trubudget Docker Images"),(0,l.kt)("p",null,"Trubudget's docker images are published on ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/trubudget"},"dockerhub"),".\nIt is recommended to use a specific version tag like v.1.20.0 instead of the main or latest tag."),(0,l.kt)("p",null,":::hint\nOnly use main or latest tag if a code change of these versions is needed.\n:::"),(0,l.kt)("h2",{id:"blockchain"},"Blockchain"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"beta node")," is a Trubudget node which connects to an existing Trubudget network.\nTo understand the connection process read the ",(0,l.kt)("a",{parentName:"p",href:"./connection-process"},"approval process documentation"),"."),(0,l.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"To establish a connection to an existing Trubudget network following conditions must be met:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For a description of all Environment variables, see ",(0,l.kt)("a",{parentName:"li",href:"../../../environment-variables"},"environment variables"),".\nThis table gives an overview how to set the env vars correctly, so the slave node can connect to the master node. Empty entries mean that setting that env var has no effect.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name of env var"),(0,l.kt)("th",{parentName:"tr",align:null},"Master API"),(0,l.kt)("th",{parentName:"tr",align:null},"Master Blockchain"),(0,l.kt)("th",{parentName:"tr",align:null},"Slave API"),(0,l.kt)("th",{parentName:"tr",align:null},"Slave Blockchain"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTERNAL_IP"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"must not set")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"public IP-address and Port of the master Blockchain (optional, not necessary if master and slave are in the same network)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2P_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"must not set")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"private IP-address of the master Blockchain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2P_PORT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"P2P_PORT of the master Blockchain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IP-address of master API"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IP-address of the Slave API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PORT of master API"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PORT of the Slave API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"IP-address of master blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PORT of master blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port"),(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PORT of slave blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"set a port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"same password as in master blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"set a password"),(0,l.kt)("td",{parentName:"tr",align:null},"same password as in slave blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"set a password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ORGANIZATION"),(0,l.kt)("td",{parentName:"tr",align:null},"organization name of master node"),(0,l.kt)("td",{parentName:"tr",align:null},"organization name of master node (same as in master API)"),(0,l.kt)("td",{parentName:"tr",align:null},"organization name of slave node"),(0,l.kt)("td",{parentName:"tr",align:null},"organization name of slave node (same as in slave API)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ORGANIZATION_VAULT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"organization vault secret of your master node"),(0,l.kt)("td",{parentName:"tr",align:null},"organization vault secret (same as in master API)"),(0,l.kt)("td",{parentName:"tr",align:null},"organization vault secret of your slave node"),(0,l.kt)("td",{parentName:"tr",align:null},"organization vault secret (same as in slave API)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null))))))}c.isMDXComponent=!0}}]);