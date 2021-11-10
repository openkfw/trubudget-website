(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8413],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(n),N=r,g=k["".concat(d,".").concat(N)]||k[N]||m[N]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2793:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},d="Environment Variables",p={unversionedId:"environment-variables",id:"environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"In the following you can find all the environment variables used in the TruBudget project. Use this list as reference for development and deployment.",source:"@site/docs/environment-variables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/trubudget-website/docs/environment-variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/environment-variables.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1636560749,formattedLastUpdatedAt:"11/10/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/trubudget-website/docs/enviroment-variables"}},u=[{value:"Kubernetes",id:"kubernetes",children:[]}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"In the following you can find all the environment variables used in the TruBudget project. Use this list as reference for development and deployment."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Shortcut"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"ui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API"),(0,l.kt)("td",{parentName:"tr",align:null},"api")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"bc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provisioning"),(0,l.kt)("td",{parentName:"tr",align:null},"prov")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Excel export service"),(0,l.kt)("td",{parentName:"tr",align:null},"excel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage service"),(0,l.kt)("td",{parentName:"tr",align:null},"storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Email notification service"),(0,l.kt)("td",{parentName:"tr",align:null},"email")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Docker-compose"),(0,l.kt)("td",{parentName:"tr",align:null},"scripts")))),(0,l.kt)("p",null,"If you need a ",(0,l.kt)("inlineCode",{parentName:"p"},".env_example")," file as a template, use the ",(0,l.kt)("inlineCode",{parentName:"p"},".env_example")," file in ",(0,l.kt)("inlineCode",{parentName:"p"},"/scripts/operation"),". This file has all values pre-filled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Used by"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ORGANIZATION"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"bc/api"),(0,l.kt)("td",{parentName:"tr",align:null},"In the blockchain network, each node is represented by its organization name. This environment variable sets this organization name. It is used to create the organization stream on the blockchain and is also displayed in the frontend's top right corner.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ORGANIZATION_VAULT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"api"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the key to en-/decrypt user data of an organization. If you want to add a new node for your organization, you want users to be able to log in on either node. Make sure that the api connected to the new node has the same organization vault secret.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Caution:")," If you want to run TruBudget in production,make sure NOT to use the default value from the ",(0,l.kt)("inlineCode",{parentName:"td"},".env_example")," file!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bc/prov"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP address of one api which is connected to the node you want to connect to (The IP addresses are usually the same as for the P2P host address).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"bc/prov"),(0,l.kt)("td",{parentName:"tr",align:null},"The port used to connect to the api.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[random]"),(0,l.kt)("td",{parentName:"tr",align:null},"api/bc"),(0,l.kt)("td",{parentName:"tr",align:null},"A string that is used to sign JWT which are created by the authenticate endpoint of the api")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2P_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP address of the blockchain node you want to connect to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2P_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"7447"),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The port on which the node you want to connect to has exposed the blockchain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8080 for api, 8888 for excel"),(0,l.kt)("td",{parentName:"tr",align:null},"api/export"),(0,l.kt)("td",{parentName:"tr",align:null},"The port used to expose the API and excel-export for your installation. Example: If you run TruBudget locally and set API_PORT to ",(0,l.kt)("inlineCode",{parentName:"td"},"8080"),", you can reach the API via ",(0,l.kt)("inlineCode",{parentName:"td"},"localhost:8080/api"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROOT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[random]"),(0,l.kt)("td",{parentName:"tr",align:null},"api"),(0,l.kt)("td",{parentName:"tr",align:null},"The root secret is the password for the root user. If you start with an empty blockchain, the root user is needed to add other users, approve new nodes,.. If you don't set a value via the environment variable, the API generates one randomly and prints it to the console",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Caution:")," If you want to run TruBudget in production, make sure to set a secure root secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[hardcoded]"),(0,l.kt)("td",{parentName:"tr",align:null},"api/bc"),(0,l.kt)("td",{parentName:"tr",align:null},"Password used by the API to connect to the blockchain. The password is set by the origin node upon start. Every slave node needs to use the same RPC password in order to be able to connect to the blockchain.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Hint:")," Although the RPC_PASSWORD is not required it is highly recommended to set an own secure one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8000"),(0,l.kt)("td",{parentName:"tr",align:null},"api/bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The port used to expose the multichain daemon of your Trubudget blockchain installation(bc). The port used to connect to the multichain daemon(api). This will be used internally for the communication between the API and the multichain daemon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPC_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"multichainrpc"),(0,l.kt)("td",{parentName:"tr",align:null},"api/bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The user used to connect to the multichain daemon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTERNAL_IP"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP address with which the current node can be reached. Example: If you have a VM running on 52.52.52.52 and you want to start a slave node from this VM to connect to a master running on 53.53.53.53, you set the ",(0,l.kt)("inlineCode",{parentName:"td"},"EXTERNAL_IP")," to 52.52.52.52 on this node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACCESS_CONTROL_ALLOW_ORIGIN"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"',"*",'"'),(0,l.kt)("td",{parentName:"tr",align:null},"bc/api/excel/storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Since the services use CORS, the domain by which it can be called needs to be set. Setting this value to ",(0,l.kt)("inlineCode",{parentName:"td"},'"*"')," means that it can be called from any domain. Read more about this topic ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"here"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_DIR"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"/root"),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the multichain folder where the blockchain data is persisted. For installations via ",(0,l.kt)("inlineCode",{parentName:"td"},"docker-compose"),", this refers to the path within the docker container of the blockchain. For bare metal installations, this refers to the path on the machine the blockchain is running on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PRETTY_PRINT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Decides whether the logs printed by services are pretty printed or not. Pretty printed logs are easier to read while non-pretty printed logs are easier to store and use e.g. in the ELK (Elasticsearch-Logstash-Kabana) stack.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWAGGER_BASEPATH ",(0,l.kt)("inlineCode",{parentName:"td"},"deprecated")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"api"),(0,l.kt)("td",{parentName:"tr",align:null},"This variable was used to choose which environment (prod or test) is used for testing the requests. The variable is deprecated now, as the Swagger documentation can be used for the prod and test environment separately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TAG"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"master"),(0,l.kt)("td",{parentName:"tr",align:null},"scripts"),(0,l.kt)("td",{parentName:"tr",align:null},"The tag defines the version of the image that is pulled from the docker hub.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ui/api"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"development")," search Trubudget's external services on localhost, api will allow any string as password. If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"production")," disable Redux devtools extension.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_VERSION"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Injected version via ",(0,l.kt)("inlineCode",{parentName:"td"},"$npm_package_version")," in",(0,l.kt)("inlineCode",{parentName:"td"},".env")," file to ensure the version is shown in the frontend")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INLINE_RUNTIME_CHUNK"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"frontend"),(0,l.kt)("td",{parentName:"tr",align:null},'Scripts that are injected by React will not be injected inline but as script with src="...". Important for being able to enforce a stricter ',(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Polify"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_EMAIL_SERVICE_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"When enabled, the frontend requests a email-service readiness call when entering the login screen.",(0,l.kt)("br",null),"If true the email section in the user-profile is enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address of the email notification service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8890"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of the email notification service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_EXPORT_SERVICE_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"If true the frontend requests a export-service readiness call when entering the login screen and ",(0,l.kt)("br",null),"the export button is shown at the side navbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXPORT_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address of the excel export service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXPORT_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8888"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of the excel export service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOGGING"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"When enabled, the log/erro messages on the frontend are send back to the logging-serverice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOG_LEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"trace"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Values are: info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOGGING_SERVICE_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Host of the logging-service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOGGING_SERVICE_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Port on wich the logging-service is listening")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOGGING_SERVICE_HOST_SSL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the frontend logger uses SSL to comunicate with the logging-service. When used in production, SSL ",(0,l.kt)("em",{parentName:"td"},"must")," be enabled!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_LOGGING_PUSH_INTERVAL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines in which intervals the collected log-messages should be pusht to the logging-service (in seconds).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_TYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"pg"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of database. A supported list can be found in the ",(0,l.kt)("a",{parentName:"td",href:"#database-configuration"},"Database Configuration section"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"trubudget_email_service"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"postgres"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"User name for connected database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"test"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for connected database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"IP of connected database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"5432"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of connected database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_SCHEMA"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema of connected database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_SSL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"If true the DB connection is using the SSL protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USER_TABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"users"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table which is created if the first email address is inserted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"testuser"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"This is forwarded to the auth prop of the nodemailer's transport-options, to authenticate with the credentials of the configured SMTP server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"test"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"IP of external SMTP-Server used to actually send notification emails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"IP of external SMTP-Server used to actually send notification emails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"2500"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of external SMTP-Server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_SSL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"If true the external SMTP-Server connection is using the SSL protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL_DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"The SQL Debug option is forwarded to the knex configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_FROM"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Trubudget Notification Service\ud83d\udc7b"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"This is injected into the ",(0,l.kt)("inlineCode",{parentName:"td"},"from")," field of the email notification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_SUBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Trubudget Notificaiton"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"This is injected into the ",(0,l.kt)("inlineCode",{parentName:"td"},"subject")," field of the email notification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"You have received a notification."),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"This is injected into the ",(0,l.kt)("inlineCode",{parentName:"td"},"body")," of the email notification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},"all"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the log output. Supported levels are ",(0,l.kt)("inlineCode",{parentName:"td"},"trace"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"debug"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"warn"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fatal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"- (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"A secret of min length of 32 - It is used to verify the JWT_TOKEN sent by users of the email-service endpoints")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AUTHENTICATION"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"JWT"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to none, no JWT-Token is required for all endpoints. If set JWT, a JWT token is necessary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STORAGE_SERVICE_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address of storage service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STORAGE_SERVICE_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"8090"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of storage service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINIO_ACCESS_KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"minio"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Access key for Minio server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINIO_SECRET_KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"minio123"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret (Password) for Minio server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINIO_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"9000"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of connected Minio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINIO_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address of connected Minio server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINIO_BUCKET_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"trubudget"),(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket name of the connected Minio server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGGER_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Port where the logging-service is exposed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"API host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"API port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"trace"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Log-level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGGING_SERVICE_CACHE_DURATION"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines how long valid JWT should be cached (in minutes).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGGING_SERVICE_NODE_ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"production"),(0,l.kt)("td",{parentName:"tr",align:null},"logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment")))),(0,l.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Used by"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXPOSE_MC"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true Trubudget tries to expose it's multichain via kubernetes' ingress. First a kubernetes config file is searched in ",(0,l.kt)("inlineCode",{parentName:"td"},"/.kube/config"),". If not found and the MC is deployed in a cluster, it is searching for the service account to get the information. After configuration the ",(0,l.kt)("inlineCode",{parentName:"td"},"externalip")," arg is set to the ip of the service' ingress of the configured clusterSERVICE_NAME and NAMESPACE are required to access the ingress of the service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SERVICE_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"This variable is only required if EXPOSE_MC is set to true. It defines which service the kubernetes client should search for in the configured kubernetes cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NAMESPACE"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bc"),(0,l.kt)("td",{parentName:"tr",align:null},"This variable is only required if EXPOSE_MC is set to true. It defines in which namespace the kubernetes client should search for the given service")))))}k.isMDXComponent=!0}}]);