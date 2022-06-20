"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8430],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Logging",c={unversionedId:"operation-administration/logging",id:"operation-administration/logging",isDocsHomePage:!1,title:"Logging",description:"API Log",source:"@site/docs/operation-administration/logging.md",sourceDirName:"operation-administration",slug:"/operation-administration/logging",permalink:"/docs/operation-administration/logging",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/logging.md",version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1655725079,formattedLastUpdatedAt:"6/20/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Securing communication between nodes",permalink:"/docs/operation-administration/encryption"},next:{title:"Multichain-Cli",permalink:"/docs/operation-administration/multichain-cli"}},p=[{value:"API Log",id:"api-log",children:[{value:"Bare metal",id:"bare-metal",children:[]},{value:"Docker-Compose",id:"docker-compose",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]},{value:"The EFK stack",id:"the-efk-stack",children:[{value:"EFK &amp; Docker-Compose",id:"efk--docker-compose",children:[]},{value:"EFK and Kubernetes",id:"efk-and-kubernetes",children:[]}]},{value:"Logging Guidelines and information",id:"logging-guidelines-and-information",children:[{value:"Logger - Pino",id:"logger---pino",children:[]},{value:"Logging - format",id:"logging---format",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]}],d={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("h2",{id:"api-log"},"API Log"),(0,o.kt)("p",null,"The API is the central part of the TruBudget application. It handles the requests from the frontend and manages the data that is written to the blockchain. Therefore logging is a cruicial part of the API's operation, so that the administrator is informed of where and when errors occur."),(0,o.kt)("p",null,"TruBudget can be installed in 3 possible flavors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bare Metal - All componends (Node.js, Multichain, nginx, etc.) are installed directly onto the machine that will be running the application"),(0,o.kt)("li",{parentName:"ul"},"Docker-Compose - All parts of the application are available as docker images, so they are pulled from a registry and started by docker on the host machine"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes - The containers with the different parts of the application are managed and orchestrated by Kubernetes")),(0,o.kt)("p",null,"The API logs are printed to the standard output (STDOUT and STDERR) by default. This way the application does not need to worry about file paths, log rotation and other operations topics. We have compiled a list of recomended practices for handling the logs for each installation type."),(0,o.kt)("h3",{id:"bare-metal"},"Bare metal"),(0,o.kt)("p",null,"As stated above, the API logs are printed to STDOUT/STDERR, which means that they are just displayed to the console. We therefore need an application that can take care of the node process and re-route the logs for us. Luckily, there are several applications that are capable of doing exactly that. One of them is PM2, which we will describe here shortly."),(0,o.kt)("p",null,"PM2 is an application that handles node processes for you and restarts it after a crash. PM2 can be installed via the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pm2\n")),(0,o.kt)("p",null,'It offers a wide range of plugins called "Modules" that can be installed via PM2 directly. One of these modules is called "pm2-logrotate" which can be used to rotate logs (e.g. split them into chunks of certain size or create separate files for each day) and the command to install it is simply'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 install pm2-logrotate\n")),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keymetrics/pm2-logrotate"},"setting up")," pm2-logrotate (if needed) you can run the api with pm2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd api\npm2 start dist/index.js\n")),(0,o.kt)("p",null,"This is just an example. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"official documentation")," for more information."),(0,o.kt)("h3",{id:"docker-compose"},"Docker-Compose"),(0,o.kt)("p",null,"When choosing the Docker-Compose setup, all messages that are printed to STDOUT/STDERR are available via the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs")," command. On UNIX systems, the logs are available on ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers/[container-id]/[container-id]-json.log")," and can be processed with applications like Logrotate."),(0,o.kt)("p",null,"Another possibility is to use the EFK stack which will be described below."),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"When operating the application via Kubernetes it is recommended to use the EFK stack, which will be described in more detail below."),(0,o.kt)("h2",{id:"the-efk-stack"},"The EFK stack"),(0,o.kt)("p",null,"The EFK stack consists of the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elasticsearch - A backend for indexing and persisting data"),(0,o.kt)("li",{parentName:"ul"},"Fluentd/Fluentbit - An aggregator for log files"),(0,o.kt)("li",{parentName:"ul"},"Kibana - A frontend to visualize logs and work with them")),(0,o.kt)("p",null,"The EFK stack is a powerful set of software that enables advanced administration of log information. The logs are aggregated from all sources via Fluentd or Fluent Bit, sent to Elasticsearch and can then be viewed in Kibana. Fluentd and Fluent Bit are similar applications that perform similar tasks, but Fluentd is more versatile and heavyweight whereas Fluent Bit is lightweight and not as rich in functionalities."),(0,o.kt)("h3",{id:"efk--docker-compose"},"EFK & Docker-Compose"),(0,o.kt)("p",null,"In the Docker-Compose setup, we have mainly two different options of getting the logs of the containers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Use the "Tail" input plugin and select the path of the docker logs as input'),(0,o.kt)("li",{parentName:"ol"},'Use the "Fluentd" log plugin that is built into Docker that automatically posts the log entries to the TCP port 24224 and then use the input plugin "Forward" to connect to the port 24224 and receive the log messages.')),(0,o.kt)("p",null,"Elasticsearch and Kibana can then be installed in Docker containers or locally."),(0,o.kt)("h3",{id:"efk-and-kubernetes"},"EFK and Kubernetes"),(0,o.kt)("p",null,"The Helm chart for Kubernetes can be configured such that a Fluent Bit pod is created on every node (see the reference architecture). The Fluent Bit pod then gathers all logs from the other pods on the node, adds some Kubernetes meta data (like pod names, cluster name, etc.) and sends it to a defined destination. In the reference architecture this destination is Fluentd, but if no further processing is required, the log data can be sent to Elasticsearch directly.\n",(0,o.kt)("img",{alt:"Reference Architecture EFK stack",src:n(5790).Z})),(0,o.kt)("h2",{id:"logging-guidelines-and-information"},"Logging Guidelines and information"),(0,o.kt)("p",null,"This section contains guidelines and standards regarding logging and should be expanded as the application matures."),(0,o.kt)("h3",{id:"logger---pino"},"Logger - Pino"),(0,o.kt)("p",null,'The logger used in the application is called "Pino" and you can find the documentation ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"here"),". Why was Pino used instead of Winston? The reason is that Pino is compatible with Fastify, whereas Winston is not (at least not out of the box)."),(0,o.kt)("h3",{id:"logging---format"},"Logging - format"),(0,o.kt)("p",null,"Pino supports several log levels (from ",(0,o.kt)("inlineCode",{parentName:"p"},"trace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),"). To make sure that the relevant information is in place, each log entry should include an object containing meta data if possible."),(0,o.kt)("h4",{id:"error"},"Error"),(0,o.kt)("p",null,'The call of the "error" level should always contain data of the situation as an "err" object. Example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'logger.error({ err }, "Stream not found.");\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," is the object containing information on the root cause of the error."),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"There are two settings of the Pino logger that are set via environment variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"PRETTY_PRINT"),' to "true" to enable pretty printing')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),'. This will setting will be used for every service by default.\nThe possible values are: "trace", "debug", "info", "warn", "error" and "fatal".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The developer and operation startup scripts control the log level for each service specifically (see .env_example files in scripts folder). Following Variables can be modified there:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"API_LOG_LEVEL"),". Controls Log Level for API."),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN_LOG_LEVEL"),". Controls Log Level for the Blockchain"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EXCEL_LOG_LEVEL"),". Controls Log Level for Excel Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EMAIL_LOG_LEVEL"),". Controls Log Level for Email Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING_LOG_LEVEL"),". Controls Log Level for Provisioning"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"STORAGE_LOG_LEVEL"),". Controls Log Level for Storage Service")))))}u.isMDXComponent=!0},5790:function(e,t,n){t.Z=n.p+"assets/images/fluentd_architecture-fe14b59248cb9f6c0052b98fae8cc35a.png"}}]);