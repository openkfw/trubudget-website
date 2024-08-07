"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[48413],{77981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=n(85893),s=n(11151);const r={},i="Environment Variables",c={id:"environment-variables",title:"Environment Variables",description:"In the following you can find all the environment variables used in the TruBudget project. Use this list as reference for development and deployment.",source:"@site/docs/environment-variables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/docs/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/environment-variables.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1723038437,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issues during Developer Setup",permalink:"/docs/known-issues/dev"},next:{title:"Research on potential DLT replacements",permalink:"/docs/research/multichain-replacements"}},l={},h=[{value:"Kubernetes",id:"kubernetes",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,d.jsx)(t.p,{children:"In the following you can find all the environment variables used in the TruBudget project. Use this list as reference for development and deployment."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Project"}),(0,d.jsx)(t.th,{children:"Shortcut"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Frontend"}),(0,d.jsx)(t.td,{children:"ui"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"API"}),(0,d.jsx)(t.td,{children:"api"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Blockchain"}),(0,d.jsx)(t.td,{children:"bc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Provisioning"}),(0,d.jsx)(t.td,{children:"prov"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Excel export service"}),(0,d.jsx)(t.td,{children:"excel"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Storage service"}),(0,d.jsx)(t.td,{children:"storage"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Email notification service"}),(0,d.jsx)(t.td,{children:"email"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Docker-compose"}),(0,d.jsx)(t.td,{children:"scripts"})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["If you need a ",(0,d.jsx)(t.code,{children:".env_example"})," file as a template, use the ",(0,d.jsx)(t.code,{children:".env_example"})," file in ",(0,d.jsx)(t.code,{children:"/scripts/operation"}),". This file has all values pre-filled."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Env Variable"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Used by"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ORGANIZATION"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"bc/api"}),(0,d.jsx)(t.td,{children:"In the blockchain network, each node is represented by its organization name. This environment variable sets this organization name. It is used to create the organization stream on the blockchain and is also displayed in the frontend's top right corner."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ORGANIZATION_VAULT_SECRET"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsxs)(t.td,{children:["This is the key to en-/decrypt user data of an organization. If you want to add a new node for your organization, you want users to be able to log in on either node. Make sure that the api connected to the new node has the same organization vault secret.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Caution:"})," If you want to run TruBudget in production,make sure NOT to use the default value from the ",(0,d.jsx)(t.code,{children:".env_example"})," file!"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"API_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc/prov"}),(0,d.jsx)(t.td,{children:"The IP address of one api which is connected to the node you want to connect to (The IP addresses are usually the same as for the P2P host address)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"API_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8080"}),(0,d.jsx)(t.td,{children:"bc/prov"}),(0,d.jsx)(t.td,{children:"The port used to connect to the api."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"JWT_SECRET"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"[random]"}),(0,d.jsx)(t.td,{children:"api/bc"}),(0,d.jsx)(t.td,{children:"A string that is used to sign JWT which are created by the authenticate endpoint of the api"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"P2P_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"The IP address of the blockchain node you want to connect to."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"P2P_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"7447"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"The port on which all nodes in the blockchain network have exposed their MultiChain daemon for peer-to-peer connections. Beta nodes will connect to the P2P_PORT of the Alpha node through this variable. Alpha nodes will expose their MultiChain daemon through this variable."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8080 for api, 8888 for excel"}),(0,d.jsx)(t.td,{children:"api/export"}),(0,d.jsxs)(t.td,{children:["The port used to expose the API and excel-export for your installation. Example: If you run TruBudget locally and set API_PORT to ",(0,d.jsx)(t.code,{children:"8080"}),", you can reach the API via ",(0,d.jsx)(t.code,{children:"localhost:8080/api"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ROOT_SECRET"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"[random]"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsxs)(t.td,{children:["The root secret is the password for the root user. If you start with an empty blockchain, the root user is needed to add other users, approve new nodes,.. If you don't set a value via the environment variable, the API generates one randomly and prints it to the console",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Caution:"})," If you want to run TruBudget in production, make sure to set a secure root secret."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BLOCKCHAIN_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8085"}),(0,d.jsx)(t.td,{children:"api/bc"}),(0,d.jsx)(t.td,{children:"The Port of the blockchain where the server is available for incoming http connections (e.g. readiness, versions, backup and restore)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MULTICHAIN_RPC_PASSWORD"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"[hardcoded]"}),(0,d.jsx)(t.td,{children:"api/bc"}),(0,d.jsxs)(t.td,{children:["Password used by the API to connect to the blockchain. The password is set by the origin node upon start. Every beta node needs to use the same RPC password in order to be able to connect to the blockchain.",(0,d.jsx)("br",{}),(0,d.jsx)(t.strong,{children:"Hint:"})," Although the MULTICHAIN_RPC_PASSWORD is not required it is highly recommended to set an own secure one"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MULTICHAIN_RPC_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8000"}),(0,d.jsx)(t.td,{children:"api/bc"}),(0,d.jsxs)(t.td,{children:["The port used to expose the multichain daemon of your TruBudget blockchain installation(bc) for RPC connections. The port used to connect to the ",(0,d.jsx)(t.a,{href:"https://www.multichain.com/developers/json-rpc-api/",children:"api of the multichain daemon"}),". This will be used internally for the communication between the API and the multichain daemon."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MULTICHAIN_RPC_USER"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"multichainrpc"}),(0,d.jsx)(t.td,{children:"api/bc"}),(0,d.jsx)(t.td,{children:"The user used to connect to the multichain daemon."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MULTICHAIN_FEED_ENABLED"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"If set to true the multichain-feed go script in src/multichain-feed/multichain-feed is passed to the mutlichain daemon and executed in a separate process."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BUILDTIMESTAMP"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The /version endpoint returns this variable as ",(0,d.jsx)(t.code,{children:"buildTimeStamp"})," property"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"BLOCKNOTIFY_SCRIPT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"Configure the blocknotifiy argument of the multichain configuration like -blocknotify=[BLOCKNOTIFY_SCRIPT]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AUTOSTART"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"true"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"If set to false multichain daemon will not start automatically."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RPC_ALLOW_IP"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"0.0.0.0/0"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"It refers to an allowed IP address range, given either by IP or CIDR notation. 0.0.0.0/0 will allow access from anywhere."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EXTERNAL_IP"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The EXTERNAL_IP option is the IP address with which the current node can be reached. The variable is forwarded to the multichain daemon as ",(0,d.jsx)(t.code,{children:"externalip"})," argument. This will be reported to other nodes in the Trubudget network. By default, daemon will try to automatically detect an external IP address. However, this might not always be accurate, especially if a node is behind a NAT or a firewall. By using EXTERNAL_IP, you can manually specify the IP. This can be useful if you want to ensure that your node is reachable at a specific address. If your node is not actually reachable at the specified IP address (e.g. because of a firewall), other nodes might not be able to connect to it. ",(0,d.jsx)("br",{}),"Example: If you have a VM running on 22.22.22.22 and you want to start a beta node from this VM to connect to an alpha running on 11.11.11.11, you set ",(0,d.jsx)(t.code,{children:"EXTERNAL_IP"})," to 11.11.11.11 on alpha node and 22.22.22.22 on beta node."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"NODE_ENV"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"development or production"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"Environment: Default development when running development-script. Production when running production-script"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CERT_PATH"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The path to the certificate used by the blockchain to authenticate with the connection peer. Note that self-signed certificates are not allowed in production environments. ",(0,d.jsx)(t.a,{href:"https://www.cloudflare.com/en-gb/learning/access-management/what-is-mutual-authentication/",children:"More information can be found here"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CERT_CA_PATH"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The path to the certificate authority root certificate by the blockchain to authenticate with the connection peer. Note that self-signed certificates are not allowed in production environments.",(0,d.jsx)(t.a,{href:"https://www.cloudflare.com/en-gb/learning/access-management/what-is-mutual-authentication/",children:"More information can be found here"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CERT_KEY_PATH"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The path to the certificate key used by the blockchain to authenticate with the connection peer. ",(0,d.jsx)(t.a,{href:"https://www.cloudflare.com/en-gb/learning/access-management/what-is-mutual-authentication/",children:"More information can be found here"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ACCESS_CONTROL_ALLOW_ORIGIN"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:'"*"'}),(0,d.jsx)(t.td,{children:"bc/api/excel/storage/email"}),(0,d.jsxs)(t.td,{children:["Since the services use CORS, the domain by which it can be called needs to be set. Setting this value to ",(0,d.jsx)(t.code,{children:'"*"'})," means that it can be called from any domain. Read more about this topic ",(0,d.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"here"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MULTICHAIN_DIR"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"/root"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["The path to the multichain folder where the blockchain data is persisted. For installations via ",(0,d.jsx)(t.code,{children:"docker compose"}),", this refers to the path within the docker container of the blockchain. For bare metal installations, this refers to the path on the machine the blockchain is running on."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"PRETTY_PRINT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"true"}),(0,d.jsx)(t.td,{children:"*"}),(0,d.jsx)(t.td,{children:"Decides whether the logs printed by services are pretty printed or not. Pretty printed logs are easier to read while non-pretty printed logs are easier to store and use e.g. in the ELK (Elasticsearch-Logstash-Kabana) stack."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"TAG"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"main"}),(0,d.jsx)(t.td,{children:"scripts"}),(0,d.jsx)(t.td,{children:"The tag defines the version of the image that is pulled from the docker hub."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"NODE_ENV"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ui/api"}),(0,d.jsxs)(t.td,{children:["If set to ",(0,d.jsx)(t.code,{children:"development"})," search Trubudget's external services on localhost, api will allow any string as password. If set to ",(0,d.jsx)(t.code,{children:"production"})," disable Redux devtools extension."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_VERSION"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsxs)(t.td,{children:["Injected version via ",(0,d.jsx)(t.code,{children:"$npm_package_version"})," in",(0,d.jsx)(t.code,{children:".env"})," file to ensure the version is shown in the frontend"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"INLINE_RUNTIME_CHUNK"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"frontend"}),(0,d.jsxs)(t.td,{children:['Scripts that are injected by React will not be injected inline but as script with src="...". Important for being able to enforce a stricter ',(0,d.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"Content Security Policy"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_EMAIL_SERVICE_ENABLED"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsxs)(t.td,{children:["When enabled, the frontend requests a email-service readiness call when entering the login screen.",(0,d.jsx)("br",{}),"If true the email section in the user-profile is enabled"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EMAIL_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"IP address of the email notification service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EMAIL_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8890"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Port of the email notification service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_EXPORT_SERVICE_ENABLED"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsxs)(t.td,{children:["If true the frontend requests a export-service readiness call when entering the login screen and ",(0,d.jsx)("br",{}),"the export button is shown at the side navbar"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EXPORT_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"IP address of the excel export service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EXPORT_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8888"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Port of the excel export service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOGGING"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"When enabled, the log/error messages on the frontend are send back to the frontend-collector"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOG_LEVEL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"trace"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Values are: info or error or trace. When set to trace all state transitions of the ui are logged to console & sent back to the frontend-collector"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOGGING_SERVICE_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Host of the frontend-collector"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOGGING_SERVICE_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"3000"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Port on which the frontend-collector is listening"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOGGING_SERVICE_HOST_SSL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsxs)(t.td,{children:["Defines whether the frontend logger uses SSL to communicate with the frontend-collector. When used in production, SSL ",(0,d.jsx)(t.em,{children:"must"})," be enabled!"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"REACT_APP_LOGGING_PUSH_INTERVAL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"20"}),(0,d.jsx)(t.td,{children:"ui"}),(0,d.jsx)(t.td,{children:"Defines in which intervals the collected log-messages should be push to the frontend-collector (in seconds)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_TYPE"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"pg"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsxs)(t.td,{children:["Type of database. A supported list can be found in the ",(0,d.jsx)(t.a,{href:"#database-configuration",children:"Database Configuration section"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_NAME"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"trubudget_email_service"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Name of the database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_USER"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"postgres"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"User name for connected database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_PASSWORD"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"test"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Password for connected database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"IP of connected database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"5432"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Port of connected database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_SCHEMA"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Schema of connected database"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DB_SSL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"If true the DB connection is using the SSL protocol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"USER_TABLE"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"users"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Name of the table which is created if the first email address is inserted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SMTP_USER"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"testuser"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"This is forwarded to the auth prop of the nodemailer's transport-options, to authenticate with the credentials of the configured SMTP server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SMTP_PASSWORD"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"test"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"IP of external SMTP-Server used to actually send notification emails"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SMTP_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"IP of external SMTP-Server used to actually send notification emails"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SMTP_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"2500"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"Port of external SMTP-Server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SMTP_SSL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"If true the external SMTP-Server connection is using the SSL protocol"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SQL_DEBUG"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"The SQL Debug option is forwarded to the knex configuration"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EMAIL_FROM"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"Trubudget Notification Service\ud83d\udc7b"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsxs)(t.td,{children:["This is injected into the ",(0,d.jsx)(t.code,{children:"from"})," field of the email notification"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EMAIL_SUBJECT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"Trubudget Notification"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsxs)(t.td,{children:["This is injected into the ",(0,d.jsx)(t.code,{children:"subject"})," field of the email notification"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EMAIL_TEXT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"You have received a notification."}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsxs)(t.td,{children:["This is injected into the ",(0,d.jsx)(t.code,{children:"body"})," of the email notification"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOG_LEVEL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"info"}),(0,d.jsx)(t.td,{children:"all"}),(0,d.jsxs)(t.td,{children:["Defines the log output. Supported levels are ",(0,d.jsx)(t.code,{children:"trace"}),", ",(0,d.jsx)(t.code,{children:"debug"}),", ",(0,d.jsx)(t.code,{children:"info"}),", ",(0,d.jsx)(t.code,{children:"warn"}),", ",(0,d.jsx)(t.code,{children:"error"}),", ",(0,d.jsx)(t.code,{children:"fatal"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SIGNING_METHOD"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"node"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsxs)(t.td,{children:["Possible signing methods are: ",(0,d.jsx)(t.code,{children:"node"})," and ",(0,d.jsx)(t.code,{children:"user"}),". Transactions on the chain will be signed using either the address of the node or the address of the specific user publishing that transaction."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ENCRYPTION_PASSWORD"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsx)(t.td,{children:"If set, all data that is send to the MultiChain node and external storage will be symmetrically encrypted by the ENCRYPTION_PASSWORD"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"JWT_SECRET"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"- (required)"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"A secret of min length of 32 - It is used to verify the JWT_TOKEN sent by users of the email-service endpoints"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"AUTHENTICATION"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"JWT"}),(0,d.jsx)(t.td,{children:"email"}),(0,d.jsx)(t.td,{children:"If set to none, no JWT-Token is required for all endpoints. If set JWT, a JWT token is necessary"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DOCUMENT_FEATURE_ENABLED"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsx)(t.td,{children:"If true, all uploaded documents are stored using trubudget's storage-service. If false, the document feature of TruBudget is disabled, and trying to upload a document will result in an error."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"DOCUMENT_EXTERNAL_LINKS_ENABLED"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsx)(t.td,{children:'If true, it is possible to use external documents links also without trubudget\'s storage-service. If false, the external documents links feature of TruBudget is still possible to use in case DOCUMENT_FEATURE_ENABLED equals "true".'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"STORAGE_SERVICE_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"IP address of storage service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"STORAGE_SERVICE_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"8090"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"Port of storage service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"STORAGE_SERVICE_EXTERNAL_URL"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsx)(t.td,{children:"IP and port of own connected storage service accessible externally"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"STORAGE_PROVIDER"}),(0,d.jsx)(t.td,{children:"minio"}),(0,d.jsxs)(t.td,{children:["Set to ",(0,d.jsx)(t.code,{children:"azure-storage"})," if you use Azure Storage Account, otherwise defaults to ",(0,d.jsx)(t.code,{children:"minio"})]}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_ACCESS_KEY"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"minio"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"Access key for Minio server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_SECRET_KEY"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"minio123"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"Secret (Password) for Minio server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_PORT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"9000"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"Port of connected Minio"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_HOST"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"IP address of connected Minio server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_BUCKET_NAME"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"trubudget"}),(0,d.jsx)(t.td,{children:"storage"}),(0,d.jsx)(t.td,{children:"Bucket name of the connected Minio server"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MINIO_REGION"}),(0,d.jsx)(t.td,{children:"us-east-1"}),(0,d.jsx)(t.td,{children:"Region where the bucket is created. This parameter is optional. Default value is us-east-1."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOGGER_PORT"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"3000"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"Port where the frontend-collector is exposed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"API_HOST"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"localhost"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"API host"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"API_PORT"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"8080"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"API port"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOG_LEVEL"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"trace"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"Log-level"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOGGING_SERVICE_CACHE_DURATION"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"20"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"Defines how long valid JWT should be cached (in minutes)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"LOGGING_SERVICE_NODE_ENV"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{children:"production"}),(0,d.jsx)(t.td,{children:"logging"}),(0,d.jsx)(t.td,{children:"Environment"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"CI_COMMIT_SHA"}),(0,d.jsx)(t.td,{children:'""'}),(0,d.jsx)(t.td,{children:"bc/api/excel/storage/email"}),(0,d.jsx)(t.td,{children:"Defines the CI_COMMIT_SHA property returned by the version endpoint."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"RATE_LIMIT"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"-"}),(0,d.jsx)(t.td,{children:"api"}),(0,d.jsxs)(t.td,{children:["If set, API will limit the number of requests from any individual IP address to the set number per minute. Can be set to any ",(0,d.jsx)(t.code,{children:"number"}),", but shouldn't be set too low."]})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Env Variable"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Used by"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"EXPOSE_MC"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:"false"}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsxs)(t.td,{children:["If set to true Trubudget tries to expose it's multichain via kubernetes' ingress. First a kubernetes config file is searched in ",(0,d.jsx)(t.code,{children:"/.kube/config"}),". If not found and the MC is deployed in a cluster, it is searching for the service account to get the information. After configuration the ",(0,d.jsx)(t.code,{children:"externalip"})," arg is set to the ip of the service' ingress of the configured clusterSERVICE_NAME and NAMESPACE are required to access the ingress of the service."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"KUBE_SERVICE_NAME"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"This variable is only required if EXPOSE_MC is set to true. It defines which service the kubernetes client should search for in the configured kubernetes cluster"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"KUBE_NAMESPACE"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"bc"}),(0,d.jsx)(t.td,{children:"This variable is only required if EXPOSE_MC is set to true. It defines in which namespace the kubernetes client should search for the given service"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var d=n(67294);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);