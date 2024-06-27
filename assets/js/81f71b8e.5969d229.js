"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[89488],{85143:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),r=i(11151);const s={},o="Create a new Network on a Machine",a={id:"operation-administration/installation/create-a-new-network/bare-metal",title:"Create a new Network on a Machine",description:"It is highly recommended to use the Docker Compose Setup guide instead of this Setup guide. Only use",source:"@site/docs/operation-administration/installation/create-a-new-network/bare-metal.md",sourceDirName:"operation-administration/installation/create-a-new-network",slug:"/operation-administration/installation/create-a-new-network/bare-metal",permalink:"/docs/operation-administration/installation/create-a-new-network/bare-metal",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/create-a-new-network/bare-metal.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to an existing Blockchain network using docker",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/docker"},next:{title:"Create a new Network with Docker Compose",permalink:"/docs/operation-administration/installation/create-a-new-network/docker"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Get the repository",id:"get-the-repository",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"API",id:"api",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Direct Connect",id:"direct-connect",level:3},{value:"Reverse Proxy (nginx)",id:"reverse-proxy-nginx",level:3},{value:"Adding a TruBudget Service to the reverse proxy",id:"adding-a-trubudget-service-to-the-reverse-proxy",level:4},{value:"Provisioning",id:"provisioning",level:2},{value:"Excel-Export Service",id:"excel-export-service",level:2},{value:"Frontend",id:"frontend-1",level:3},{value:"Email-Notification Service",id:"email-notification-service",level:2},{value:"Service",id:"service",level:3},{value:"Database",id:"database",level:3},{value:"SMTP-Server",id:"smtp-server",level:3},{value:"Frontend",id:"frontend-2",level:3},{value:"Blockchain",id:"blockchain-1",level:3},{value:"Storage Service",id:"storage-service",level:2},{value:"Service",id:"service-1",level:3},{value:"Storage",id:"storage",level:3},{value:"API",id:"api-1",level:3},{value:"Log-Rotation",id:"log-rotation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-new-network-on-a-machine",children:"Create a new Network on a Machine"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["It is highly recommended to use the ",(0,t.jsx)(n.a,{href:"./docker",children:"Docker Compose Setup guide"})," instead of this Setup guide. Only use\nthis guide if docker cannot be used"]})}),"\n",(0,t.jsxs)(n.p,{children:["This guide describes how to create a new network without the use of Docker, Docker Compose.\nBefore starting make sure to have ",(0,t.jsx)(n.code,{children:"node"}),",",(0,t.jsx)(n.code,{children:"npm"})," and\nthe ",(0,t.jsx)(n.a,{href:"https://www.multichain.com/download-community/",children:"latest release of MultiChain"})," available on your machine.\nTo check if all required tools are installed correctly use following check commands:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["node: ",(0,t.jsx)(n.code,{children:"node -v"})]}),"\n",(0,t.jsxs)(n.li,{children:["npm: ",(0,t.jsx)(n.code,{children:"npm -v"})]}),"\n",(0,t.jsxs)(n.li,{children:["multichain: ",(0,t.jsx)(n.code,{children:"multichain-util"})," & ",(0,t.jsx)(n.code,{children:"multichaind"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the above commands cannot be found make sure the tools are installed and the PATH variables are set correctly."}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#create-a-new-network-on-a-machine",children:"Create a new Network on a Machine"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-the-repository",children:"Get the repository"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#blockchain",children:"Blockchain"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api",children:"API"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#frontend",children:"Frontend"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#direct-connect",children:"Direct Connect"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#reverse-proxy-nginx",children:"Reverse Proxy (nginx)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#adding-a-trubudget-service-to-the-reverse-proxy",children:"Adding a TruBudget Service to the reverse proxy"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#provisioning",children:"Provisioning"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#excel-export-service",children:"Excel-Export Service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#frontend-1",children:"Frontend"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#email-notification-service",children:"Email-Notification Service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#service",children:"Service"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#database",children:"Database"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#smtp-server",children:"SMTP-Server"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#frontend-2",children:"Frontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#blockchain-1",children:"Blockchain"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#storage-service",children:"Storage Service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#service-1",children:"Service"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#storage",children:"Storage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api-1",children:"API"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#log-rotation",children:"Log-Rotation"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-the-repository",children:"Get the repository"}),"\n",(0,t.jsx)(n.p,{children:"Clone the Github repository of the components onto the designated machines."}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/openkfw/TruBudget.git\ncd TruBudget\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"If you work with an existing checkout, make sure you have the latest changes:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git pull\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export PORT=8085\nexport P2P_PORT=7447\nexport MULTICHAIN_RPC_PORT=8000\nexport MULTICHAIN_RPC_USER="multichainrpc"\nexport MULTICHAIN_RPC_PASSWORD="password"\nexport MULTICHAIN_DIR="/tmp"\nexport PRETTY_PRINT="true"\n'})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["Use absolute paths for environment variables.\nIf it's not the first start and the ",(0,t.jsx)(n.code,{children:".multichain"}),' folder exists already a multichain error will be shown in the logs but\nmultichain will work as expected.\n(Error while creating Multichain\nerr: "ERROR: Blockchain parameter set was not generated.\\n" )']})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"blockchain"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start the\nblockchain using following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd blockchain/\nnpm install\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["To run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > blockchain.log 2>&1 &"}),", the blockchain.log contains the logs\nof the blockchain process"]})}),"\n",(0,t.jsxs)(n.p,{children:["If the logs are showing the line ",(0,t.jsx)(n.code,{children:"Node ready"})," the node is setup correctly.\nThe blockchain can be checked by HTTP-Request ",(0,t.jsx)(n.code,{children:"localhost:8085/version"})," using postman, curl or even a browser. The\nresponse is the current version of TruBudget's blockchain."]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export ORGANIZATION=MyOrga\nexport P2P_PORT=7447\nexport MULTICHAIN_RPC_PORT=8000\nexport PORT=8080\nexport MULTICHAIN_RPC_HOST=127.0.0.1\nexport MULTICHAIN_RPC_USER="multichainrpc"\nexport MULTICHAIN_RPC_PASSWORD="password"\nexport ORGANIZATION_VAULT_SECRET=secret\nexport ROOT_SECRET=root-secret\nexport PRETTY_PRINT="true"\nexport NODE_ENV="development"\nexport JWT_SECRET="jwt-secret"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"api"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start the api using\nfollowing lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd api/\nnpm install\nnpm run build\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["To run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > api.log 2>&1 &"}),", the api.log contains the logs of the api\nprocess"]})}),"\n",(0,t.jsxs)(n.p,{children:["If the logs are showing the line ",(0,t.jsx)(n.code,{children:"Node 1ad358tnuTvQd9WpHQLPXmrYt9SeppiwPQNgNL registered"}),"\nand ",(0,t.jsx)(n.code,{children:"Keys successfully published"})," the api is setup correctly.\nThe api can be checked by HTTP-Request ",(0,t.jsx)(n.code,{children:"localhost:8080/api/readiness"})," using postman, curl or even a browser. The\nresponse should be ",(0,t.jsx)(n.code,{children:"OK"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways of starting the frontend using different networking solutions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct connect"}),"\n",(0,t.jsx)(n.li,{children:"Reverse proxy (nginx)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"direct-connect",children:"Direct Connect"}),"\n",(0,t.jsxs)(n.p,{children:["The environment parameters ",(0,t.jsx)(n.code,{children:"API_HOST"})," and ",(0,t.jsx)(n.code,{children:"API_PORT"})," are not used by the frontend direct connect setup, to connect to\nthe api the ",(0,t.jsx)(n.code,{children:"package.json"})," has to be adapted.\nUse the property ",(0,t.jsx)(n.code,{children:"proxy"}),' to pass the API connection "proxy": "http://API_HOST',":API_PORT",'". (e.g. "\nproxy": "',(0,t.jsx)(n.a,{href:"http://20.11.202.22:8080",children:"http://20.11.202.22:8080"}),'")']}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"frontend"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start the frontend\nusing following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd frontend/\nnpm install\nnpm start\n"})}),"\n",(0,t.jsx)(n.h3,{id:"reverse-proxy-nginx",children:"Reverse Proxy (nginx)"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you have installed nginx on your\nmachine: ",(0,t.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/",children:"nginx installation"})]}),"\n",(0,t.jsx)(n.p,{children:"With following commands packages are installed, the frontend is built and copied into the folder of nginx, the nginx\nconfig is copied into your nginx installation and the frontend is started:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd frontend/\nnpm install\nnpm run build\ncp -R build/* /usr/share/nginx/html\ncp nginx.conf /etc/nginx/conf.d/default.conf\n/bin/bash configureServer.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Nginx' configuration is all about the ",(0,t.jsx)(n.code,{children:"default.conf"})," file which is dynamically adapted\nby ",(0,t.jsx)(n.code,{children:"./frontend/configureServer.sh"}),".\nIf any configuration regarding nginx must be made e.g. ssl configuration start at our ",(0,t.jsx)(n.code,{children:"default.conf"}),"\ntemplates ",(0,t.jsx)(n.code,{children:"nginx.conf"}),", ",(0,t.jsx)(n.code,{children:"nginx-ssl.conf"})," or use nginx' example nginx.conf in\ntheir ",(0,t.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/#nginx-conf",children:"official documentation"})]}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["Make sure that port 80 is available for nginx. This can be changed in the nginx.conf.\nCheck out ",(0,t.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/main/frontend/configureServer.sh",children:"configureServer.sh"})," to configure\nall proxy passes.\nTo run the process as background process use ",(0,t.jsx)(n.code,{children:"/bin/bash configureServer.sh > frontend.log 2>&1 &"}),", the frontend.log\ncontains the logs of the frontend process"]})}),"\n",(0,t.jsxs)(n.p,{children:["As soon as the step above is done, the frontend should be available on port 80 (default port of nginx in ",(0,t.jsx)(n.code,{children:"default.conf"}),")\n.\nAdditionally the api can be reached via nginx reverse proxy at ",(0,t.jsx)(n.code,{children:"localhost/test/api/readiness"})]}),"\n",(0,t.jsx)(n.h4,{id:"adding-a-trubudget-service-to-the-reverse-proxy",children:"Adding a TruBudget Service to the reverse proxy"}),"\n",(0,t.jsxs)(n.p,{children:["The configuration of the nginx proxy is done with ",(0,t.jsx)(n.code,{children:"configureServer.sh"})," by using the same environment variables used in\nthe rest of the bare-metal guide.\nFor e.g. the excel-export-service the environment list of the frontend must be applied to the shell where nginx proxy\nwill be started.\nThen the script ",(0,t.jsx)(n.code,{children:"configureServer.sh"})," will adapt your ",(0,t.jsx)(n.code,{children:"/etc/nginx/conf.d/default.conf"})," according to the environment\nvariables set in the shell.\nFor detailed information check out the\nscript ",(0,t.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/main/frontend/configureServer.sh",children:"configureServer.sh"})]}),"\n",(0,t.jsx)(n.h2,{id:"provisioning",children:"Provisioning"}),"\n",(0,t.jsx)(n.p,{children:"The Provisioning generates test-data via TruBudget's API."}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export API_PORT=8080\nexport ORGANIZATION=MyOrga\nexport ROOT_SECRET=root-secret\nexport PRETTY_PRINT="true"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"provisioning"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start the\nprovisioning using following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd provisioning/\nnpm install\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["Make sure the api is started in development mode (NODE_ENV=development), otherwise the api validations won't accept the\nuser creation of the provisioning\nTo run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > provisioning.log 2>&1 &"}),", the provisioning.log contains the\nlogs of the provisioning process"]})}),"\n",(0,t.jsx)(n.p,{children:"To test if the provisioning worked, login with credentials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"username: mstein"}),"\n",(0,t.jsx)(n.li,{children:"password: test"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"excel-export-service",children:"Excel-Export Service"}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export API_HOST=127.0.0.1\nexport API_PORT=8080\nexport PORT=8888\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport PRETTY_PRINT="true"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"excel-export-service"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start\nthe excel-export-service using following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd excel-export-service/\nnpm install\nnpm run build\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["To run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > excel-export.log 2>&1 &"}),", the excel-export.log contains the\nlogs of the excel-export process"]})}),"\n",(0,t.jsx)(n.h3,{id:"frontend-1",children:"Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["To enable the excel-export-service additional environment variables must be provided to the ",(0,t.jsx)(n.code,{children:"frontend"}),".\nMake sure the following lines adapt the environment of the frontend NOT the excel-export-service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export REACT_APP_EXPORT_SERVICE_ENABLED=true\nexport EXPORT_HOST=localhost\nexport EXPORT_PORT=8888\n"})}),"\n",(0,t.jsx)(n.p,{children:"To test if the setup is working correctly, click the export button in Trubudget's frontend. If the button doesn't show\nup check all related environment variables again and try to re-login."}),"\n",(0,t.jsx)(n.h2,{id:"email-notification-service",children:"Email-Notification Service"}),"\n",(0,t.jsx)(n.p,{children:"The email-notification-service consists of two components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"email-service - provides an API to insert/update/delete email data"}),"\n",(0,t.jsx)(n.li,{children:"database - provides a postgres database where email data can be stored"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"service",children:"Service"}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export PORT=8890\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport PRETTY_PRINT="true"\nexport JWT_SECRET="jwt-secret"\nexport DB_TYPE="pg"\nexport DB_NAME="trubudget_email_service"\nexport DB_USER="postgres"\nexport DB_PASSWORD="test"\nexport DB_HOST="localhost"\nexport DB_PORT="5432"\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"email-notification-service"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and\nstart the email-notification-service using following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd email-notification-service/\nnpm install\nnpm run build\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["To run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > email-notification.log 2>&1 &"}),", the email-notification.log\ncontains the logs of the email-notification process"]})}),"\n",(0,t.jsx)(n.h3,{id:"database",children:"Database"}),"\n",(0,t.jsxs)(n.p,{children:["For the email-notification-service a database is needed. In this section postgres is used. To create a postgres database\nfollow a guide on ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/download/",children:"postgres' official website"}),".\nMake sure you install postgres create a user role and a database.\nProvide the information to the email-service via environment variables."]}),"\n",(0,t.jsx)(n.h3,{id:"smtp-server",children:"SMTP-Server"}),"\n",(0,t.jsxs)(n.p,{children:["To actually send emails a running SMTP-server must be connected to the email-service. To test the setup with a local\ntest SMTP mock check and try out ",(0,t.jsx)(n.a,{href:"https://github.com/mailslurper/mailslurper",children:"mailslurper"}),".\nUse the ",(0,t.jsx)(n.a,{href:"../../../environment-variables",children:"environment variables"})," prefixed with SMTP of the email-service to connect\nthe service to your SMTP-server."]}),"\n",(0,t.jsx)(n.h3,{id:"frontend-2",children:"Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["To enable the email-notification-service additional environment variables must be provided to the ",(0,t.jsx)(n.code,{children:"frontend"}),".\nMake sure the following lines adapt the environment of the frontend NOT the excel-export-service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export REACT_APP_EMAIL_SERVICE_ENABLED=true\nexport EMAIL_HOST=localhost\nexport EMAIL_PORT=8890\n"})}),"\n",(0,t.jsx)(n.h3,{id:"blockchain-1",children:"Blockchain"}),"\n",(0,t.jsxs)(n.p,{children:["To enable the email-notification-service additional environment variables must be provided to the ",(0,t.jsx)(n.code,{children:"blockchain"}),".\nMake sure the following lines adapt the environment of the blockchain NOT the excel-export-service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export EMAIL_SERVICE_ENABLED=true\nexport EMAIL_HOST=localhost\nexport EMAIL_PORT=8890\nexport JWT_SECRET="jwt-secret"\n'})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["If the multichain-feed file hasn't execute permissions already following warning will be displayed in the blockchain\nlogs:\n",(0,t.jsx)(n.code,{children:'feed: "sh: 1: [Path-to-Trubudget]/TruBudget/blockchain/src/multichain-feed/multichain-feed: Permission denied\\n"'}),".\nGrant the file execute\npermissions: ",(0,t.jsx)(n.code,{children:"chmod +x [Path-to-Trubudget]/TruBudget/blockchain/src/multichain-feed/multichain-feed"})]})}),"\n",(0,t.jsx)(n.p,{children:"To test if the setup is working correctly, open the side menu in Trubudget's frontend and open the user's profile by\nclicking the settings button next to the username.\nIn the profile setting dialog edit the email address of the user and check if the user can be inserted into your\ndatabase.\nIf the email field doesn't show up check all related environment variables again and try to re-login."}),"\n",(0,t.jsx)(n.h2,{id:"storage-service",children:"Storage Service"}),"\n",(0,t.jsx)(n.p,{children:"The storage-service consists of two components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"storage-service - provides an API to insert/delete files"}),"\n",(0,t.jsx)(n.li,{children:"S3-storage - provides a S3 storage where files can be stored"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"service-1",children:"Service"}),"\n",(0,t.jsx)(n.p,{children:"Set the environment parameters listed below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export PRETTY_PRINT="true"\nexport ACCESS_CONTROL_ALLOW_ORIGIN="*"\nexport STORAGE_SERVICE_PORT=8090\nexport MINIO_ACCESS_KEY="minio"\nexport MINIO_SECRET_KEY="minio123"\nexport MINIO_PORT=9000\nexport MINIO_HOST="localhost"\nexport MINIO_BUCKET_NAME="trubudget"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into the ",(0,t.jsx)(n.code,{children:"storage-service"})," directory, install the node packages defined in the ",(0,t.jsx)(n.code,{children:"package.json"})," and start the\nstorage-service using following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd storage-service/\nnpm install\nnpm run build\nnpm start\n"})}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["To run the process as background process use ",(0,t.jsx)(n.code,{children:"npm start > email-notification.log 2>&1 &"}),", the email-notification.log\ncontains the logs of the email-notification process.\nWithout a running S3 storage the storage-service will throw errors constantly trying to connect to one."]})}),"\n",(0,t.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend to use Minio as S3 storage. To start Minio without docker we refer to\ntheir ",(0,t.jsx)(n.a,{href:"https://docs.min.io/docs/minio-quickstart-guide.html",children:"official documentation"}),".\nProvide the information to the storage-service via ",(0,t.jsx)(n.a,{href:"../../../environment-variables",children:"environment variables"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"api-1",children:"API"}),"\n",(0,t.jsxs)(n.p,{children:["To enable the storage-service additional environment variables must be provided to the ",(0,t.jsx)(n.code,{children:"api"}),".\nMake sure the following lines adapt the environment of the api NOT the storage-service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export DOCUMENT_FEATURE_ENABLED=true\nexport STORAGE_SERVICE_HOST=localhost\nexport STORAGE_SERVICE_PORT=8090\nexport STORAGE_SERVICE_EXTERNAL_URL="localhost:8090"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To test if the setup is working correctly, create a new workflowitem in Trubudget's frontend and add a document during\nthe creation process.\nIn minio usually available at ",(0,t.jsx)(n.code,{children:"localhost:9000"})," the storage can be checked after login in with the MINIO_ACCESS_KEY and\nMINIO_SECRET_KEY.\nIf the document doesn't show up at the minio dashboard check all related environment variables again.\nThe document-download can be checked via workflowitem info button."]}),"\n",(0,t.jsx)(n.p,{children:"In Azure you can check the uploaded documents directly via Azure portal."}),"\n",(0,t.jsx)(n.h2,{id:"log-rotation",children:"Log-Rotation"}),"\n",(0,t.jsxs)(n.p,{children:["As stated above in the hint sections, the logs can be printed to files like ",(0,t.jsx)(n.code,{children:"api.log"}),". For operational purposes it is\nuseful to have an application that manages the logs and takes care of log rotation (i.e. breaking the logs into smaller\nchunks). Luckily, there are several applications that are capable of doing exactly that. One of them is PM2, which we\nwill describe here shortly."]}),"\n",(0,t.jsx)(n.p,{children:"PM2 is an application that handles node processes for you and restarts it after a crash. PM2 can be installed via the\nfollowing command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g pm2\n"})}),"\n",(0,t.jsx)(n.p,{children:'It offers a wide range of plugins called "Modules" that can be installed via PM2 directly. One of these modules is\ncalled "pm2-logrotate" which can be used to rotate logs (e.g. split them into chunks of certain size or create separate\nfiles for each day) and the command to install it is simply'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pm2 install pm2-logrotate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can ",(0,t.jsx)(n.a,{href:"https://github.com/keymetrics/pm2-logrotate",children:"set up"})," pm2-logrotate (if needed) with the following command"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pm2 set pm2-logrotate:<param> <value>\n"})}),"\n",(0,t.jsx)(n.p,{children:"e.g:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pm2 set pm2-logrotate:max_size 1K (sets max. file size to 1KB)\npm2 set pm2-logrotate:compress true (compresses logs when rotated)\npm2 set pm2-logrotate:rotateInterval '*/1 * * * *' (force rotate every minute, syntax similar to CRON)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd api\npm2 start dist/index.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is just an example. Please refer to the ",(0,t.jsx)(n.a,{href:"http://pm2.keymetrics.io/",children:"official documentation"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);