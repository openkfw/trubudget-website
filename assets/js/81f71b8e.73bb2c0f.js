"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9488],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Create a new Network on a Machine",p={unversionedId:"operation-administration/installation/create-a-new-network/bare-metal",id:"operation-administration/installation/create-a-new-network/bare-metal",isDocsHomePage:!1,title:"Create a new Network on a Machine",description:"It is highly recommended to use the Docker-Compose Setup guide instead of this Setup guide. Only use this guide if docker cannot be used",source:"@site/docs/operation-administration/installation/create-a-new-network/bare-metal.md",sourceDirName:"operation-administration/installation/create-a-new-network",slug:"/operation-administration/installation/create-a-new-network/bare-metal",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/create-a-new-network/bare-metal.md",version:"current",lastUpdatedBy:"IngmarM",lastUpdatedAt:1660570966,formattedLastUpdatedAt:"8/15/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to an existing Blockchain network using docker",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/docker"},next:{title:"Create a new Network with Docker-Compose",permalink:"/docs/operation-administration/installation/create-a-new-network/docker"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Get the repository",id:"get-the-repository",children:[]},{value:"Blockchain",id:"blockchain",children:[]},{value:"API",id:"api",children:[]},{value:"Frontend",id:"frontend",children:[{value:"Direct Connect",id:"direct-connect",children:[]},{value:"Reverse Proxy (nginx)",id:"reverse-proxy-nginx",children:[]}]},{value:"Provisioning",id:"provisioning",children:[]},{value:"Excel-Export Service",id:"excel-export-service",children:[{value:"Frontend",id:"frontend-1",children:[]}]},{value:"Email-Notification Service",id:"email-notification-service",children:[{value:"Service",id:"service",children:[]},{value:"Database",id:"database",children:[]},{value:"SMTP-Server",id:"smtp-server",children:[]},{value:"Frontend",id:"frontend-2",children:[]},{value:"Blockchain",id:"blockchain-1",children:[]}]},{value:"Storage Service",id:"storage-service",children:[{value:"Service",id:"service-1",children:[]},{value:"Storage",id:"storage",children:[]},{value:"API",id:"api-1",children:[]}]},{value:"Log-Rotation",id:"log-rotation",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-new-network-on-a-machine"},"Create a new Network on a Machine"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It is highly recommended to use the ",(0,i.kt)("a",{parentName:"strong",href:"./docker"},"Docker-Compose Setup guide")," instead of this Setup guide. Only use this guide if docker cannot be used")),(0,i.kt)("p",null,"This guide describes how to create a new network without the use of Docker, Docker-Compose.\nBefore starting make sure to have ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),",",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://www.multichain.com/download-community/"},"latest release of MultiChain")," available on your machine.\nTo check if all required tools are installed correctly use following check commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"node: ",(0,i.kt)("inlineCode",{parentName:"li"},"node -v")),(0,i.kt)("li",{parentName:"ul"},"npm: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm -v")),(0,i.kt)("li",{parentName:"ul"},"multichain: ",(0,i.kt)("inlineCode",{parentName:"li"},"multichain-util")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"multichaind"))),(0,i.kt)("p",null,"If the above commands cannot be found make sure the tools are installed and the PATH variables are set correctly."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-new-network-on-a-machine"},"Create a new Network on a Machine"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-repository"},"Get the repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#blockchain"},"Blockchain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#frontend"},"Frontend"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#direct-connect"},"Direct Connect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reverse-proxy-nginx"},"Reverse Proxy (nginx)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-a-trubudget-service-to-the-reverse-proxy"},"Adding a TruBudget Service to the reverse proxy")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#provisioning"},"Provisioning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#excel-export-service"},"Excel-Export Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#frontend-1"},"Frontend")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#email-notification-service"},"Email-Notification Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service"},"Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#database"},"Database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#smtp-server"},"SMTP-Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#frontend-2"},"Frontend")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#blockchain-1"},"Blockchain")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#storage-service"},"Storage Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-1"},"Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#storage"},"Storage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api-1"},"API")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#log-rotation"},"Log-Rotation"))))),(0,i.kt)("h2",{id:"get-the-repository"},"Get the repository"),(0,i.kt)("p",null,"Clone the Github repository of the components onto the designated machines."),(0,i.kt)("p",null,"Clone the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/openkfw/TruBudget.git\ncd TruBudget\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you work with an existing checkout, make sure you have the latest changes:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"git pull\n")))),(0,i.kt)("h2",{id:"blockchain"},"Blockchain"),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export PORT=8085\nexport P2P_PORT=7447\nexport RPC_PORT=8000\nexport RPC_USER="multichainrpc"\nexport RPC_PASSWORD="password"\nexport MULTICHAIN_DIR="/tmp"\nexport PRETTY_PRINT="true"\n')),(0,i.kt)("p",null,":::hint\nUse absolute paths for environment variables.\nIf it's not the first start and the ",(0,i.kt)("inlineCode",{parentName:"p"},".multichain"),' folder exists already a multichain error will be shown in the logs but multichain will work as expected.\n(Error while creating Multichain\nerr: "ERROR: Blockchain parameter set was not generated.\\n" )\n:::'),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the blockchain using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd blockchain/\nnpm install\nnpm start\n")),(0,i.kt)("p",null,":::hint\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > blockchain.log 2>&1 &"),", the blockchain.log contains the logs of the blockchain process\n:::"),(0,i.kt)("p",null,"If the logs are showing the line ",(0,i.kt)("inlineCode",{parentName:"p"},"Node ready")," the node is setup correctly.\nThe blockchain can be checked by HTTP-Request ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8085/version")," using postman, curl or even a browser. The response is the current version of TruBudget's blockchain."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export ORGANIZATION=MyOrga\nexport P2P_PORT=7447\nexport RPC_PORT=8000\nexport PORT=8080\nexport RPC_HOST=127.0.0.1\nexport RPC_USER=multichainrpc\nexport RPC_PASSWORD=password\nexport ORGANIZATION_VAULT_SECRET=secret\nexport ROOT_SECRET=root-secret\nexport PRETTY_PRINT="true"\nexport NODE_ENV="development"\nexport JWT_SECRET="jwt-secret"\n')),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the api using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd api/\nnpm install\nnpm run build\nnpm start\n")),(0,i.kt)("p",null,":::hint\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > api.log 2>&1 &"),", the api.log contains the logs of the api process\n:::"),(0,i.kt)("p",null,"If the logs are showing the line ",(0,i.kt)("inlineCode",{parentName:"p"},"Node 1ad358tnuTvQd9WpHQLPXmrYt9SeppiwPQNgNL registered")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Keys successfully published")," the api is setup correctly.\nThe api can be checked by HTTP-Request ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/readiness")," using postman, curl or even a browser. The response should be ",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,i.kt)("h2",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"There are two ways of starting the frontend using different networking solutions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Direct connect"),(0,i.kt)("li",{parentName:"ul"},"Reverse proxy (nginx)")),(0,i.kt)("h3",{id:"direct-connect"},"Direct Connect"),(0,i.kt)("p",null,"The environment parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"API_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"API_PORT")," are not used by the frontend direct connect setup, to connect to the api the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," has to be adapted.\nUse the property ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy"),' to pass the API connection "proxy": "http://API_HOST:API_PORT". (e.g. "proxy": "',(0,i.kt)("a",{parentName:"p",href:"http://20.11.202.22:8080%22"},'http://20.11.202.22:8080"'),")"),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the frontend using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend/\nnpm install\nnpm start\n")),(0,i.kt)("h3",{id:"reverse-proxy-nginx"},"Reverse Proxy (nginx)"),(0,i.kt)("p",null,"Make sure you have installed nginx on your machine: ",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"nginx installation")),(0,i.kt)("p",null,"With following commands packages are installed, the frontend is built and copied into the folder of nginx, the nginx config is copied into your nginx installation and the frontend is started:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend/\nnpm install\nnpm run build\ncp -R build/* /usr/share/nginx/html\ncp nginx.conf /etc/nginx/conf.d/default.conf\n/bin/bash configureServer.sh\n")),(0,i.kt)("p",null,"Nginx' configuration is all about the ",(0,i.kt)("inlineCode",{parentName:"p"},"default.conf")," file which is dynamically adapted by ",(0,i.kt)("inlineCode",{parentName:"p"},"./frontend/configureServer.sh"),".\nIf any configuration regarding nginx must be made e.g. ssl configuration start at our ",(0,i.kt)("inlineCode",{parentName:"p"},"default.conf")," templates ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-ssl.conf")," or use nginx' example nginx.conf in their ",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/#nginx-conf"},"official documentation")),(0,i.kt)("p",null,":::hint\nMake sure that port 80 is available for nginx. This can be changed in the nginx.conf.\nCheck out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/master/frontend/configureServer.sh"},"configureServer.sh")," to configure all proxy passes.\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/bash configureServer.sh > frontend.log 2>&1 &"),", the frontend.log contains the logs of the frontend process\n:::"),(0,i.kt)("p",null,"As soon as the step above is done, the frontend should be available on port 80 (default port of nginx in ",(0,i.kt)("inlineCode",{parentName:"p"},"default.conf"),").\nAdditionally the api can be reached via nginx reverse proxy at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost/test/api/readiness")),(0,i.kt)("h4",{id:"adding-a-trubudget-service-to-the-reverse-proxy"},"Adding a TruBudget Service to the reverse proxy"),(0,i.kt)("p",null,"The configuration of the nginx proxy is done with ",(0,i.kt)("inlineCode",{parentName:"p"},"configureServer.sh")," by using the same environment variables used in the rest of the bare-metal guide.\nFor e.g. the excel-export-service the environment list of the frontend must be applied to the shell where nginx proxy will be started.\nThen the script ",(0,i.kt)("inlineCode",{parentName:"p"},"configureServer.sh")," will adapt your ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/default.conf")," according to the environment variables set in the shell.\nFor detailed information check out the script ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/master/frontend/configureServer.sh"},"configureServer.sh")),(0,i.kt)("h2",{id:"provisioning"},"Provisioning"),(0,i.kt)("p",null,"The Provisioning generates test-data via TruBudget's API."),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export API_PORT=8080\nexport ORGANIZATION=MyOrga\nexport ROOT_SECRET=root-secret\nexport PRETTY_PRINT="true"\n')),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"provisioning")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the provisioning using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd provisioning/\nnpm install\nnpm start\n")),(0,i.kt)("p",null,":::hint\nMake sure the api is started in development mode (NODE_ENV=development), otherwise the api validations won't accept the user creation of the provisioning\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > provisioning.log 2>&1 &"),", the provisioning.log contains the logs of the provisioning process\n:::"),(0,i.kt)("p",null,"To test if the provisioning worked, login with credentials:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"username: mstein"),(0,i.kt)("li",{parentName:"ul"},"password: test")),(0,i.kt)("h2",{id:"excel-export-service"},"Excel-Export Service"),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export API_HOST=127.0.0.1\nexport API_PORT=8080\nexport PORT=8888\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport PRETTY_PRINT="true"\n')),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"excel-export-service")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the excel-export-service using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd excel-export-service/\nnpm install\nnpm run build\nnpm start\n")),(0,i.kt)("p",null,":::hint\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > excel-export.log 2>&1 &"),", the excel-export.log contains the logs of the excel-export process\n:::"),(0,i.kt)("h3",{id:"frontend-1"},"Frontend"),(0,i.kt)("p",null,"To enable the excel-export-service additional environment variables must be provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend"),".\nMake sure the following lines adapt the environment of the frontend NOT the excel-export-service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export REACT_APP_EXPORT_SERVICE_ENABLED=true\nexport EXPORT_HOST=localhost\nexport EXPORT_PORT=8888\n")),(0,i.kt)("p",null,"To test if the setup is working correctly, click the export button in Trubudget's frontend. If the button doesn't show up check all related environment variables again and try to re-login."),(0,i.kt)("h2",{id:"email-notification-service"},"Email-Notification Service"),(0,i.kt)("p",null,"The email-notification-service consists of two components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"email-service - provides an API to insert/update/delete email data"),(0,i.kt)("li",{parentName:"ul"},"database - provides a postgres database where email data can be stored")),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export PORT=8890\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport PRETTY_PRINT="true"\nexport JWT_SECRET="jwt-secret"\nexport DB_TYPE="pg"\nexport DB_NAME="trubudget_email_service"\nexport DB_USER="postgres"\nexport DB_PASSWORD="test"\nexport DB_HOST="localhost"\nexport DB_PORT="5432"\n\n')),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"email-notification-service")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the email-notification-service using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd email-notification-service/\nnpm install\nnpm run build\nnpm start\n")),(0,i.kt)("p",null,":::hint\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > email-notification.log 2>&1 &"),", the email-notification.log contains the logs of the email-notification process\n:::"),(0,i.kt)("h3",{id:"database"},"Database"),(0,i.kt)("p",null,"For the email-notification-service a database is needed. In this section postgres is used. To create a postgres database follow a guide on ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"postgres' official website"),".\nMake sure you install postgres create a user role and a database.\nProvide the information to the email-service via environment variables."),(0,i.kt)("h3",{id:"smtp-server"},"SMTP-Server"),(0,i.kt)("p",null,"To actually send emails a running SMTP-server must be connected to the email-service. To test the setup with a local test SMTP mock check and try out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mailslurper/mailslurper"},"mailslurper"),".\nUse the ",(0,i.kt)("a",{parentName:"p",href:"../../../environment-variables"},"environment variables")," prefixed with SMTP of the email-service to connect the service to your SMTP-server."),(0,i.kt)("h3",{id:"frontend-2"},"Frontend"),(0,i.kt)("p",null,"To enable the email-notification-service additional environment variables must be provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend"),".\nMake sure the following lines adapt the environment of the frontend NOT the excel-export-service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export REACT_APP_EMAIL_SERVICE_ENABLED=true\nexport EMAIL_HOST=localhost\nexport EMAIL_PORT=8890\n")),(0,i.kt)("h3",{id:"blockchain-1"},"Blockchain"),(0,i.kt)("p",null,"To enable the email-notification-service additional environment variables must be provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain"),".\nMake sure the following lines adapt the environment of the blockchain NOT the excel-export-service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export EMAIL_SERVICE=ENABLED\nexport EMAIL_HOST=localhost\nexport EMAIL_PORT=8890\nexport JWT_SECRET="jwt-secret"\n')),(0,i.kt)("p",null,":::hint\nIf the multichain-feed file hasn't execute permissions already following warning will be displayed in the blockchain logs:\n",(0,i.kt)("inlineCode",{parentName:"p"},'feed: "sh: 1: [Path-to-Trubudget]/TruBudget/blockchain/src/multichain-feed/multichain-feed: Permission denied\\n"'),".\nGrant the file execute permissions: ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x [Path-to-Trubudget]/TruBudget/blockchain/src/multichain-feed/multichain-feed"),"\n:::"),(0,i.kt)("p",null,"To test if the setup is working correctly, open the side menu in Trubudget's frontend and open the user's profile by clicking the settings button next to the username.\nIn the profile setting dialog edit the email address of the user and check if the user can be inserted into your database.\nIf the email field doesn't show up check all related environment variables again and try to re-login."),(0,i.kt)("h2",{id:"storage-service"},"Storage Service"),(0,i.kt)("p",null,"The storage-service consists of two components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"storage-service - provides an API to insert/delete files"),(0,i.kt)("li",{parentName:"ul"},"S3-storage - provides a S3 storage where files can be stored")),(0,i.kt)("h3",{id:"service-1"},"Service"),(0,i.kt)("p",null,"Set the environment parameters listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export PRETTY_PRINT="true"\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport STORAGE_SERVICE_PORT=8090\nexport MINIO_ACCESS_KEY="minio"\nexport MINIO_SECRET_KEY="minio123"\nexport MINIO_PORT=9000\nexport MINIO_HOST="localhost"\nexport MINIO_BUCKET_NAME="trubudget"\n')),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage-service")," directory, install the node packages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and start the storage-service using following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd storage-service/\nnpm install\nnpm run build\nnpm start\n")),(0,i.kt)("p",null,":::hint\nTo run the process as background process use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start > email-notification.log 2>&1 &"),", the email-notification.log contains the logs of the email-notification process.\nWithout a running S3 storage the storage-service will throw errors constantly trying to connect to one.\n:::"),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"We recommend to use Minio as S3 storage. To start Minio without docker we refer to their ",(0,i.kt)("a",{parentName:"p",href:"https://docs.min.io/docs/minio-quickstart-guide.html"},"official documentation"),".\nProvide the information to the storage-service via ",(0,i.kt)("a",{parentName:"p",href:"../../../environment-variables"},"environment variables"),"."),(0,i.kt)("h3",{id:"api-1"},"API"),(0,i.kt)("p",null,"To enable the storage-service additional environment variables must be provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),".\nMake sure the following lines adapt the environment of the api NOT the storage-service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export DOCUMENT_FEATURE_ENABLED=true\nexport STORAGE_SERVICE_HOST=localhost\nexport STORAGE_SERVICE_PORT=8090\nexport STORAGE_SERVICE_EXTERNAL_URL="localhost:8090"\n')),(0,i.kt)("p",null,"To test if the setup is working correctly, create a new workflowitem in Trubudget's frontend and add a document during the creation process.\nIn minio usually available at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9000")," the storage can be checked after login in with the MINIO_ACCESS_KEY and MINIO_SECRET_KEY.\nIf the document doesn't show up at the minio dashboard check all related environment variables again.\nThe document-download can be checked via workflowitem info button."),(0,i.kt)("h2",{id:"log-rotation"},"Log-Rotation"),(0,i.kt)("p",null,"As stated above in the hint sections, the logs can be printed to files like ",(0,i.kt)("inlineCode",{parentName:"p"},"api.log"),". For operational purposes it is useful to have an application that manages the logs and takes care of log rotation (i.e. breaking the logs into smaller chunks). Luckily, there are several applications that are capable of doing exactly that. One of them is PM2, which we will describe here shortly."),(0,i.kt)("p",null,"PM2 is an application that handles node processes for you and restarts it after a crash. PM2 can be installed via the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pm2\n")),(0,i.kt)("p",null,'It offers a wide range of plugins called "Modules" that can be installed via PM2 directly. One of these modules is called "pm2-logrotate" which can be used to rotate logs (e.g. split them into chunks of certain size or create separate files for each day) and the command to install it is simply'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 install pm2-logrotate\n")),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/keymetrics/pm2-logrotate"},"set up")," pm2-logrotate (if needed) with the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 set pm2-logrotate:<param> <value>\n")),(0,i.kt)("p",null,"e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 set pm2-logrotate:max_size 1K (sets max. file size to 1KB)\npm2 set pm2-logrotate:compress true (compresses logs when rotated)\npm2 set pm2-logrotate:rotateInterval '*/1 * * * *' (force rotate every minute, syntax similar to CRON)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd api\npm2 start dist/index.js\n")),(0,i.kt)("p",null,"This is just an example. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"official documentation")," for more information."))}h.isMDXComponent=!0}}]);