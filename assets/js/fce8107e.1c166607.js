(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9368],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"operation-administration/installation/create-new-network/bare-metal",id:"operation-administration/installation/create-new-network/bare-metal",isDocsHomePage:!1,title:"Create a New Network Directly on Machine",description:"This guide describes how to create a new network without the use of Docker, Docker-Compose or Kubernetes. Before starting the network make sure to install the necessary software on your machine.",source:"@site/docs/operation-administration/installation/create-new-network/bare-metal.md",sourceDirName:"operation-administration/installation/create-new-network",slug:"/operation-administration/installation/create-new-network/bare-metal",permalink:"/trubudget-website/docs/operation-administration/installation/create-new-network/bare-metal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/create-new-network/bare-metal.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1625755493,formattedLastUpdatedAt:"7/8/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to an Existing Network using Docker",permalink:"/trubudget-website/docs/operation-administration/installation/connect-to-existing-node/connect-docker-compose"},next:{title:"Create a New Network with Docker-Compose",permalink:"/trubudget-website/docs/operation-administration/installation/create-new-network/create-new-docker-compose"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Get the repository",id:"get-the-repository",children:[]},{value:"Blockchain",id:"blockchain",children:[]},{value:"API",id:"api",children:[{value:"Log-Rotation",id:"log-rotation",children:[]}]},{value:"Excel Export",id:"excel-export",children:[{value:"Set Environment Variables",id:"set-environment-variables",children:[]},{value:"Install Node Modules",id:"install-node-modules",children:[]},{value:"Start the Service",id:"start-the-service",children:[]}]},{value:"Provisioning",id:"provisioning",children:[{value:"Set environment variables",id:"set-environment-variables-1",children:[]},{value:"Install node-modules",id:"install-node-modules-1",children:[]},{value:"Start the Provisioning",id:"start-the-provisioning",children:[]}]},{value:"Frontend",id:"frontend",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes how to create a new network without the use of Docker, Docker-Compose or Kubernetes. Before starting the network make sure to ",(0,o.kt)("a",{parentName:"p",href:"/trubudget-website/docs/operation-administration/installation/connect-to-existing-node/bare-metal"},"install the necessary software on your machine.")),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-network-directly-on-machine"},"Create a New Network Directly on Machine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-the-repository"},"Get the repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#blockchain"},"Blockchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#api"},"API"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#log-rotation"},"Log-Rotation")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#excel-export"},"Excel Export"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-environment-variables"},"Set Environment Variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-node-modules"},"Install Node Modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#start-the-service"},"Start the Service")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#provisioning"},"Provisioning"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-environment-variables"},"Set environment variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-node-modules"},"Install node-modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#start-the-provisioning"},"Start the Provisioning")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frontend"},"Frontend"))))),(0,o.kt)("h2",{id:"get-the-repository"},"Get the repository"),(0,o.kt)("p",null,"Clone the Github repository of the components onto the designated machines."),(0,o.kt)("p",null,"Clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/openkfw/TruBudget.git\ncd TruBudget\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you work with an existing checkout, make sure you have the latest changes:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"git pull\n")))),(0,o.kt)("h2",{id:"blockchain"},"Blockchain"),(0,o.kt)("p",null,"Set the following environment variables to deploy a new Blockchain network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export P2P_PORT=7447\nexport RPC_PORT=8000\nexport RPC_USER="multichainrpc"\nexport RPC_PASSWORD="password"\nexport MULTICHAIN_DIR="/root"\n')),(0,o.kt)("p",null,"Navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain")," directory and install the node packages defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and start the Blockchain with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd blockchain/\nnpm install\nnpm start > startup.log 2>&1 &\n")),(0,o.kt)("p",null,"The information within ",(0,o.kt)("inlineCode",{parentName:"p"},"startup.log")," should look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> ACMECorp-chain-bc@0.1.0 start /[MULTICHAIN_DIR]/TruBudget/blockchain\n> node src/index.js\n\nProvisioning mc\n\nMultiChain 2.0 alpha 2 Utilities (latest protocol 20002)\n\nBlockchain parameter set was successfully generated.\nYou can edit it in /[MULTICHAIN_DIR]/.multichain/TrubudgetChain/params.dat before running multichaind for the first time.\n\nTo generate blockchain please run "multichaind TrubudgetChain -daemon".\nApp listening on 8085\nstdout: Looking for genesis block...\n\nstdout: Genesis block found\n\n\nstdout: Other nodes can connect to this node using:\nmultichaind TrubudgetChain@172.17.0.3:7447\n\n\nstdout: Node ready.\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"Set the environment parameters listed below on the machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ORGANIZATION=MyOrga\nexport P2P_PORT=7447\nexport RPC_PORT=8000\nexport PORT=8080\nexport RPC_HOST=127.0.0.1\nexport RPC_USER=multichainrpc\nexport RPC_PASSWORD=password\nexport ORGANIZATION_VAULT_SECRET=secret\nexport ROOT_SECRET=root-secret\n")),(0,o.kt)("p",null,"Once Node.js is installed navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," directory and run the following commands to start the API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../api\nnpm install\nnpm run build\nnode dist > api.log 2>&1 &\n")),(0,o.kt)("p",null,"You can then check the api log via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat api.log\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"api.log")," for a new Blockchain network should look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[2018-10-03T09:36:08.872Z] INFO (TruBudget/4858 on 0a18bc69cac8): Connecting to MultiChain node\n    protocol: "http"\n    host: "127.0.0.1"\n    port: 8000\n    username: "multichainrpc"\n    password: "password"\nRegister fastify endpoint\nschema id ignored er58c69eg298c87e3899119e025eff1f\nschema id ignored fe9c2b24ade9a92360b3a898665678ac\n[2018-10-03T09:36:09.193Z] INFO (TruBudget/4858 on 0a18bc69cac8): server is listening on 8080\n[2018-10-03T09:36:09.224Z] INFO (TruBudget/4858 on 0a18bc69cac8): MultiChain connection established\n[2018-10-03T09:36:09.228Z] DEBUG (TruBudget/4858 on 0a18bc69cac8): Created stream org:MyOrga with options {"kind":"organization","name":"org:MyOrga"}\n[2018-10-03T09:36:09.232Z] TRACE (TruBudget/4858 on 0a18bc69cac8):\n    addressFromWallet: "[redacted]"\n    privkey: "[redacted]"\n[2018-10-03T09:36:09.237Z] TRACE (TruBudget/4858 on 0a18bc69cac8): wrote hex string to chain: 282 bytes\n[2018-10-03T09:36:09.237Z] INFO (TruBudget/4858 on 0a18bc69cac8): Initializing organization address to local wallet address: [redacted]\n[2018-10-03T09:36:09.238Z] DEBUG (TruBudget/4858 on 0a18bc69cac8): Publishing wallet address to org:MyOrga/"address"\n[2018-10-03T09:36:09.241Z] INFO (TruBudget/4858 on 0a18bc69cac8): organization address: [redacted]\n[2018-10-03T09:36:09.244Z] DEBUG (TruBudget/4858 on 0a18bc69cac8): Created stream users:MyOrga with options {"kind":"users","name":"users:MyOrga"}\n[2018-10-03T09:36:09.244Z] INFO (TruBudget/4858 on 0a18bc69cac8): organization stream present\n[2018-10-03T09:36:09.247Z] INFO (TruBudget/4858 on 0a18bc69cac8): node registered in nodes stream\nPublishing network.registerNode to nodes/"[redacted]"\n[2018-10-03T09:36:09.257Z] DEBUG (TruBudget/4858 on 0a18bc69cac8): Created stream nodes with options {"kind":"nodes","name":"nodes"}\nPublishing network.registerNode to nodes/"[redacted]"\n')),(0,o.kt)("h3",{id:"log-rotation"},"Log-Rotation"),(0,o.kt)("p",null,"As stated above, the API logs are printed to ",(0,o.kt)("inlineCode",{parentName:"p"},"api.log"),". For operational purposes it is useful to have an application that manages the process and takes care of log rotation (i.e. breaking the logs into smaller chunks). Luckily, there are several applications that are capable of doing exactly that. One of them is PM2, which we will describe here shortly."),(0,o.kt)("p",null,"PM2 is an application that handles node processes for you and restarts it after a crash. PM2 can be installed via the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pm2\n")),(0,o.kt)("p",null,'It offers a wide range of plugins called "Modules" that can be installed via PM2 directly. One of these modules is called "pm2-logrotate" which can be used to rotate logs (e.g. split them into chunks of certain size or create separate files for each day) and the command to install it is simply'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 install pm2-logrotate\n")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keymetrics/pm2-logrotate"},"set up")," pm2-logrotate (if needed) with the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 set pm2-logrotate:<param> <value>\n")),(0,o.kt)("p",null,"e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 set pm2-logrotate:max_size 1K (sets max. file size to 1KB)\npm2 set pm2-logrotate:compress true (compresses logs when rotated)\npm2 set pm2-logrotate:rotateInterval '*/1 * * * *' (force rotate every minute, syntax similar to CRON)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd api\npm2 start dist/index.js\n")),(0,o.kt)("p",null,"This is just an example. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"official documentation")," for more information."),(0,o.kt)("h2",{id:"excel-export"},"Excel Export"),(0,o.kt)("p",null,"To enable the export of TruBudget data into Excel files, a separate service needs to be started. To start that service, first change the directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"excel-export-service")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../excel-export-service\n")),(0,o.kt)("h3",{id:"set-environment-variables"},"Set Environment Variables"),(0,o.kt)("p",null,"The following environment variables need to be set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terminal Mac/Git Bash")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export PROD_API_HOST=127.0.0.1\nexport TEST_API_HOST=127.0.0.1\nexport PROD_API_PORT=8080\nexport TEST_API_PORT=8081\nexport PORT=8888\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terminal Windows/Command Shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SET PROD_API_HOST=127.0.0.1\nSET TEST_API_HOST=127.0.0.1\nSET PROD_API_PORT=8080\nSET TEST_API_PORT=8081\nSET PORT=8888\nSET ACCESS_CONTROL_ALLOW_ORIGIN="*"\n')),(0,o.kt)("h3",{id:"install-node-modules"},"Install Node Modules"),(0,o.kt)("p",null,"Install the node modules via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h3",{id:"start-the-service"},"Start the Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("h2",{id:"provisioning"},"Provisioning"),(0,o.kt)("p",null,"The Provisioning fills the blockchain with test-data.\nTo start the provisioning, open your favorite shell, navigate to your provisioning folder and follow these instructions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../provisioning\n")),(0,o.kt)("h3",{id:"set-environment-variables-1"},"Set environment variables"),(0,o.kt)("p",null,'"API_PORT", "ROOT_SECRET" and "ORGANIZATION" variables have to be the same as when starting the API.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terminal Mac/Git Bash")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export API_PORT=8080\nexport ORGANIZATION="MyOrga"\nexport ROOT_SECRET=root-secret\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terminal Windows/Command Shell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SET API_PORT = 8080\nSET ORGANIZATION = "MyOrga"\nSET ROOT_SECRET = root-secret\n')),(0,o.kt)("h3",{id:"install-node-modules-1"},"Install node-modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("h3",{id:"start-the-provisioning"},"Start the Provisioning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm start\n")),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The first step to deploy the frontend is to ",(0,o.kt)("strong",{parentName:"p"},"adapt")," and set the environment parameters. If you plan to deploy only one API set PROD and TEST parameters, so that it points to the single API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../frontend\n\nexport PROD_API_HOST=127.0.0.1\nexport PROD_API_PORT=8080\nexport TEST_API_HOST=127.0.0.1\nexport TEST_API_PORT=8080\n")),(0,o.kt)("p",null,"Navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," directory and copy the nginx.conf into the designated nginx directory with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp nginx.conf /etc/nginx/conf.d/default.conf\n")),(0,o.kt)("p",null,"Install the node packages and start the production build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n")),(0,o.kt)("p",null,"Once the build was successful copy the build sources into the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," directory of nginx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp -R build/* /usr/share/nginx/html\n")),(0,o.kt)("p",null,"The final step is to modify the nginx configuration, so that nginx points to the previous configured API instances."),(0,o.kt)("p",null,"Caution: It's possible that nginx was automatically started after installation. To check if this is the case run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux | grep nginx\n")),(0,o.kt)("p",null,"If you see matching entries, simply run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s stop\n")),(0,o.kt)("p",null,"to stop all running processes."),(0,o.kt)("p",null,"To start the frontend, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/bin/bash configureServer.sh\n")),(0,o.kt)("p",null,"As soon as the step above is done, the frontend should be available on port 80. Make sure that port 80 is exposed and not blocked by any firewall or other processes."))}d.isMDXComponent=!0}}]);