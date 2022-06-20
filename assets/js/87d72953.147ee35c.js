"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9103],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Connect to an Existing Network using Docker",c={unversionedId:"operation-administration/installation/connect-to-existing-node/connect-docker-compose",id:"operation-administration/installation/connect-to-existing-node/connect-docker-compose",isDocsHomePage:!1,title:"Connect to an Existing Network using Docker",description:"This guide describes how to connect a node to an existing TruBudget network. The steps are the same for new organizations and new nodes for an existing organizations. For new nodes of existing organizations, make sure to use the same ORGANIZATIONVAULTSECRET as all the other nodes of this organization.",source:"@site/docs/operation-administration/installation/connect-to-existing-node/connect-docker-compose.md",sourceDirName:"operation-administration/installation/connect-to-existing-node",slug:"/operation-administration/installation/connect-to-existing-node/connect-docker-compose",permalink:"/docs/operation-administration/installation/connect-to-existing-node/connect-docker-compose",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-existing-node/connect-docker-compose.md",version:"current",lastUpdatedBy:"Mayr Martin",lastUpdatedAt:1655711881,formattedLastUpdatedAt:"6/20/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to an Existing Network on Bare Metal",permalink:"/docs/operation-administration/installation/connect-to-existing-node/bare-metal"},next:{title:"Create a new Network on a Machine",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal"}},d=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Docker &amp; Docker Compose",id:"docker--docker-compose",children:[]},{value:"Ports",id:"ports",children:[]}]},{value:"Connect to an existing Blockchain network",id:"connect-to-an-existing-blockchain-network",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-an-existing-network-using-docker"},"Connect to an Existing Network using Docker"),(0,r.kt)("p",null,"This guide describes how to connect a node to an existing TruBudget network. The steps are the same for new organizations and new nodes for an existing organizations. For new nodes of existing organizations, make sure to use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET")," as all the other nodes of this organization."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-an-existing-blockchain-network"},"Connect to an existing Blockchain network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker--docker-compose"},"Docker & Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ports"},"Ports")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents-1"},"Table of Contents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker--docker-compose-1"},"Docker & Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ports-1"},"Ports")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-an-existing-blockchain-network-1"},"Connect to an existing Blockchain network"))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"docker--docker-compose"},"Docker & Docker Compose"),(0,r.kt)("p",null,"The whole deployment is based on Docker and Docker Compose, therefore please follow the instructions on how to setup ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/installation/"},"Docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/#install-compose"},"Docker Compose")," (find an Ubuntu-related guide ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04"},"here"),")."),(0,r.kt)("p",null,"You need at least docker engine version 17.06."),(0,r.kt)("h3",{id:"ports"},"Ports"),(0,r.kt)("p",null,"Make sure that the following ports are not blocked by other processes: ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"7447"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"7448")),(0,r.kt)("p",null,"We distinguish between two types of deployments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"local")," deployment type which will create images from the code you have on your local machine and includes any changes you might have done"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"master")," deployment type that will deploy Docker images out of the Docker Hub")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note: For the master deployment, you can use tags to specify the version you want to use"))),(0,r.kt)("h2",{id:"connect-to-an-existing-blockchain-network"},"Connect to an existing Blockchain network"),(0,r.kt)("p",null,"Each Blockchain container comes with its own volume that persists the data of the Blockchain.\nTo modify the host path, meaning the path where the data will be persisted on your local machine, navigate to the docker-compose file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose/master/slave-node.yml\n")),(0,r.kt)("p",null,"If you want to run the network with your local sources, update the volume in the following file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose/local/slave-node.yml\n")),(0,r.kt)("p",null,"Currently both Blockchain containers store their data in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/bc*")," directories. This works fine for testing, but ",(0,r.kt)("em",{parentName:"p"},"should not be used in productive environments")," since the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/")," folder is emptied after reboot on most Unix-like systems."),(0,r.kt)("p",null,"Adapt the paths to your needs - you can change them in the respective docker-compose file, where you will find them under ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n  - /tmp/bcMasterVolume:/root/.multichain\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Windows users"),": With Docker for Windows it's not possible to mount the volumes with this configuration. To be able do use the Docker-Compose installation you need to comment (or remove) the lines with the ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," configuration."),(0,r.kt)("p",null,"The next step is to set all required environment properties, otherwise Docker will not receive the required parameters to start the deployment.\nIf you want to start with the standard configuration we reccomend copying the ",(0,r.kt)("inlineCode",{parentName:"p"},".env_example")," file and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TruBudget")," base folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env_example .env\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to connect to an existing Blockchain network should consist of the following parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'API_PORT=8080\nRPC_PORT=8000\nORGANIZATION=TheNewOrganization\nORGANIZATION_VAULT_SECRET=secret\nTAG=master\nROOT_SECRET=root-secret\nP2P_TEST_HOST=52.52.52.52\nP2P_TEST_PORT=7448\nAPI_TEST_HOST=52.52.52.52\nAPI_TEST_PORT=8081\nP2P_PROD_HOST=52.52.52.52\nP2P_PROD_PORT=52.52.52.52\nAPI_PROD_HOST=52.52.52.52\nAPI_PROD_PORT=8080\nLOG_LEVEL=INFO\nPRETTY_PRINT=true\nRPC_PASSWORD=s750SiJnj50yIrmwxPnEdSzpfGlTAHzhaUwgqKeb0G1j\nMULTICHAIN_DIR="/root"\nEXTERNAL_IP=50.50.50.50\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For detailed explenations of the environment variables, see the ",(0,r.kt)("a",{parentName:"p",href:"./../../../enviroment-variables"},"Enviroment Variables")))),(0,r.kt)("p",null,"Assuming that all parameters are set, go ahead and start the deployment."),(0,r.kt)("p",null,"To deploy the ",(0,r.kt)("strong",{parentName:"p"},"current codebase")," of the repository, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scripts/local/start-slave-node.sh\n")),(0,r.kt)("p",null,"Deploy images ",(0,r.kt)("strong",{parentName:"p"},"of the Docker registry")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scripts/master/start-slave-node.sh\n")),(0,r.kt)("p",null,"As long as you are not approved by the blockchain network, your blockchain nodes will constantly try to connect. Therefore please ask other ",(0,r.kt)("strong",{parentName:"p"},"organizations")," with admin nodes to approve your registration."),(0,r.kt)("p",null,"Before approval, the log will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"test-bc-slave_1  | multichaind  | Blockchain successfully initialized.\ntest-bc-slave_1  |\ntest-bc-slave_1  | Please ask blockchain admin or user having activate permission to let you connect and/or transact:\ntest-bc-slave_1  | multichain-cli TrubudgetChain grant 1QSUFKSXTmHtpNYykuuFuZaxfMR6sJwS91kG2u connect\ntest-bc-slave_1  | multichain-cli TrubudgetChain grant 1QSUFKSXTmHtpNYykuuFuZaxfMR6sJwS91kG2u connect,send,receive\nbc-slave_1  | multichaind  | Blockchain successfully initialized.\nbc-slave_1  |\nbc-slave_1  | Please ask blockchain admin or user having activate permission to let you connect and/or transact:\nbc-slave_1  | multichain-cli TrubudgetChain grant 1QSUFKSXTmHtpNYykuuFuZaxfMR6sJwS91kG2u connect\nbc-slave_1  | multichain-cli TrubudgetChain grant 1QSUFKSXTmHtpNYykuuFuZaxfMR6sJwS91kG2u connect,send,receive\n")),(0,r.kt)("p",null,"Once your nodes are approved the log should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bc-slave_1       | multichaind  | Other nodes can connect to this node using:\nbc-slave_1       | multichaind TrubudgetChain@172.22.0.2:7447\nbc-slave_1       |\nbc-slave_1       |\nbc-slave_1       | multichaind  | Node ready.\nbc-slave_1       |\nbc-slave_1       |\ntest-bc-slave_1  | >>> Connecting to TrubudgetChain@192.0.0.1:7448\ntest-bc-slave_1  | >>> args=-txindex,-port=7448,-autosubscribe=streams,TrubudgetChain@192.0.0.1:7448\ntest-bc-slave_1  | >> /root/.multichain/multichain.conf rpcport=8000\ntest-bc-slave_1  | rpcuser=multichainrpc\ntest-bc-slave_1  | rpcpassword=[redacted]\ntest-bc-slave_1  | rpcallowip=0.0.0.0/0\ntest-bc-slave_1  |\ntest-bc-slave_1  | >> /root/.multichain/TrubudgetChain/multichain.conf rpcport=8000\ntest-bc-slave_1  | rpcuser=multichainrpc\ntest-bc-slave_1  | rpcpassword=[redacted]\ntest-bc-slave_1  | rpcallowip=0.0.0.0/0\ntest-bc-slave_1  |\ntest-bc-slave_1  | multichaind  | Retrieving blockchain parameters from the seed node 192.0.0.1:7448 ...\ntest-bc-slave_1  |\ntest-bc-slave_1  | multichaind  | Other nodes can connect to this node using:\ntest-bc-slave_1  | multichaind TrubudgetChain@172.22.0.3:7448\ntest-bc-slave_1  |\ntest-bc-slave_1  |\ntest-bc-slave_1  | multichaind  | Node ready.\ntest-bc-slave_1  |\ntest-bc-slave_1  |\napi_1            | Connecting to MultiChain node at http://bc-slave:8000\napi_1            | server is listening on 8080\ntestapi_1        | Connecting to MultiChain node at http://test-bc-slave:8000\ntestapi_1        | server is listening on 8080\napi_1            | [2018-08-10T08:42:37.357Z] DEBUG (TruBudget/1 on e0fdf1eb41e2): Created stream org:TheOrganizat with options {"kind":"organization","name":"org:TheOrganizat"}\napi_1            | [2018-08-10T08:42:37.372Z] TRACE (TruBudget/1 on e0fdf1eb41e2):\napi_1            |     addressFromWallet: "[redacted]"\napi_1            |     privkey: "[redacted]"\ntestapi_1        | [2018-08-10T08:42:37.387Z] DEBUG (TruBudget/1 on 14d2111cc40d): Created stream org:TheOrganizat with options {"kind":"organization","name":"org:TheOrganizat"}\napi_1            | [2018-08-10T08:42:37.387Z] TRACE (TruBudget/1 on e0fdf1eb41e2): wrote hex string to chain: 282 bytes\napi_1            | [2018-08-10T08:42:37.387Z] INFO (TruBudget/1 on e0fdf1eb41e2): Initializing organization address to local wallet address: [redacted]\napi_1            | [2018-08-10T08:42:37.387Z] DEBUG (TruBudget/1 on e0fdf1eb41e2): Publishing wallet address to org:TheOrganizat/"address"\ntestapi_1        | [2018-08-10T08:42:37.399Z] TRACE (TruBudget/1 on 14d2111cc40d):\ntestapi_1        |     addressFromWallet: "[redacted]"\ntestapi_1        |     privkey: "[redacted]"\napi_1            | [2018-08-10T08:42:37.407Z] INFO (TruBudget/1 on e0fdf1eb41e2): organization address: [redacted]\ntestapi_1        | [2018-08-10T08:42:37.420Z] TRACE (TruBudget/1 on 14d2111cc40d): wrote hex string to chain: 282 bytes\ntestapi_1        | [2018-08-10T08:42:37.421Z] INFO (TruBudget/1 on 14d2111cc40d): Initializing organization address to local wallet address: [redacted]\ntestapi_1        | [2018-08-10T08:42:37.421Z] DEBUG (TruBudget/1 on 14d2111cc40d): Publishing wallet address to org:TheOrganizat/"address"\ntestapi_1        | [2018-08-10T08:42:37.435Z] INFO (TruBudget/1 on 14d2111cc40d): organization address: [redacted]\napi_1            | [2018-08-10T08:42:37.445Z] DEBUG (TruBudget/1 on e0fdf1eb41e2): Created stream users:TheOrganiz with options {"kind":"users","name":"users:TheOrganiz"}\ntestapi_1        | [2018-08-10T08:42:37.474Z] DEBUG (TruBudget/1 on 14d2111cc40d): Created stream users:TheOrganiz with options {"kind":"users","name":"users:TheOrganiz"}\n')),(0,r.kt)("p",null,"You are now successfully connected to the network and should be able to access the frontend via port 80 on the server that it is running on. Use the ",(0,r.kt)("strong",{parentName:"p"},"root")," user and the password that was defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to initially login to the frontend and to create users of your organization."))}u.isMDXComponent=!0}}]);