"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[20927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={},r="Logging and Monitoring in TruBudget",l={unversionedId:"operation-administration/logging-monitoring",id:"operation-administration/logging-monitoring",title:"Logging and Monitoring in TruBudget",description:"Logs",source:"@site/docs/operation-administration/logging-monitoring.md",sourceDirName:"operation-administration",slug:"/operation-administration/logging-monitoring",permalink:"/docs/operation-administration/logging-monitoring",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/logging-monitoring.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Securing communication between nodes",permalink:"/docs/operation-administration/encryption"},next:{title:"Multichain-Cli",permalink:"/docs/operation-administration/multichain-cli"}},s={},d=[{value:"Logs",id:"logs",level:2},{value:"Bare metal",id:"bare-metal",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Logging and Monitoring Tools",id:"logging-and-monitoring-tools",level:2},{value:"Prometheus/Loki/Grafana",id:"prometheuslokigrafana",level:3},{value:"The EFK Stack",id:"the-efk-stack",level:3},{value:"EFK &amp; Docker Compose",id:"efk--docker-compose",level:4},{value:"EFK and Kubernetes",id:"efk-and-kubernetes",level:4},{value:"Logging Guidelines and information",id:"logging-guidelines-and-information",level:2},{value:"Logger - Pino",id:"logger---pino",level:3},{value:"Logging - format",id:"logging---format",level:3},{value:"Error",id:"error",level:4},{value:"Environment variables",id:"environment-variables",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-and-monitoring-in-trubudget"},"Logging and Monitoring in TruBudget"),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"The API is the central part of the TruBudget application. It handles the requests from the frontend and manages the data that is written to the blockchain. Therefore logging is a crucial part of the API's operation, so that the administrator is informed of where and when errors occur."),(0,o.kt)("p",null,"TruBudget can be installed in 3 possible flavors (but we strongly recommend the usage of Kubernetes, which was mainly used in testing the system):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bare Metal - All components (Node.js, Multichain, nginx, etc.) are installed directly onto the machine that will be running the application"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose - All parts of the application are available as docker images, so they are pulled from a registry and started by docker on the host machine"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes - The containers with the different parts of the application are managed and orchestrated by Kubernetes")),(0,o.kt)("p",null,"The API logs are printed to the standard output (STDOUT and STDERR) by default. This way the application does not need to worry about file paths, log rotation and other operations topics. We have compiled a list of recommended practices for handling the logs for each installation type."),(0,o.kt)("h3",{id:"bare-metal"},"Bare metal"),(0,o.kt)("p",null,"As stated above, the API logs are printed to STDOUT/STDERR, which means that they are just displayed to the console. We therefore need an application that can take care of the node process and re-route the logs for us. Luckily, there are several applications that are capable of doing exactly that. One of them is PM2, which we will describe here shortly."),(0,o.kt)("p",null,"PM2 is an application that handles node processes for you and restarts it after a crash. PM2 can be installed via the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pm2\n")),(0,o.kt)("p",null,'It offers a wide range of plugins called "Modules" that can be installed via PM2 directly. One of these modules is called "pm2-logrotate" which can be used to rotate logs (e.g. split them into chunks of certain size or create separate files for each day) and the command to install it is simply'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 install pm2-logrotate\n")),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keymetrics/pm2-logrotate"},"setting up")," pm2-logrotate (if needed) you can run the api with pm2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd api\npm2 start dist/index.js\n")),(0,o.kt)("p",null,"This is just an example. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"official documentation")," for more information."),(0,o.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"When choosing the Docker Compose setup, all messages that are printed to STDOUT/STDERR are available via the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs")," command. On UNIX systems, the logs are available on ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers/[container-id]/[container-id]-json.log")," and can be processed with applications like Logrotate."),(0,o.kt)("p",null,"Another possibility is to use the EFK stack which will be described below."),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"When operating the application via Kubernetes the logs of the TruBudget components are available via the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs -f <pod_name>"),"."),(0,o.kt)("h2",{id:"logging-and-monitoring-tools"},"Logging and Monitoring Tools"),(0,o.kt)("p",null,"Various logging and monitoring tools can be used with TruBudget, in order to collect, parse and visualize logs and metrics. Setting up monitoring and logging and choosing the right tools is highly dependent on the underlying infrastructure. For our infrastructure we decided for the Prometheus/Loki/Grafanastack. However, other technologies are also a good option, such as the EFK Stack, which is described below."),(0,o.kt)("h3",{id:"prometheuslokigrafana"},"Prometheus/Loki/Grafana"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},(0,o.kt)("strong",{parentName:"a"},"Prometheus"))," is used in collection of metrics from the TruBudget containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki"},(0,o.kt)("strong",{parentName:"a"},"Loki"))," is used in collection of logs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/"},(0,o.kt)("strong",{parentName:"a"},"Grafana"))," is used to visualize the collected metrics and logs.")),(0,o.kt)("p",null,"Following is an example of how a fully configured Grafana dashboard could look like."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-dashboard",src:a(44831).Z,width:"1851",height:"917"})),(0,o.kt)("h3",{id:"the-efk-stack"},"The EFK Stack"),(0,o.kt)("p",null,"The EFK stack consists of the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/elasticsearch/"},"Elasticsearch")," - A backend for indexing and persisting data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.fluentd.org/"},"Fluentd/Fluentbit")," - An aggregator for log files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/kibana/"},"Kibana")," - A frontend to visualize logs and work with them")),(0,o.kt)("p",null,"The EFK stack is a powerful set of software that enables advanced administration of log information. The logs are aggregated from all sources via Fluentd or Fluent Bit, sent to Elasticsearch and can then be viewed in Kibana. Fluentd and Fluent Bit are similar applications that perform similar tasks, but Fluentd is more versatile and heavyweight whereas Fluent Bit is lightweight and not as rich in functionalities."),(0,o.kt)("h4",{id:"efk--docker-compose"},"EFK & Docker Compose"),(0,o.kt)("p",null,"In the Docker Compose setup, we have mainly two different options of getting the logs of the containers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Use the "Tail" input plugin and select the path of the docker logs as input'),(0,o.kt)("li",{parentName:"ol"},'Use the "Fluentd" log plugin that is built into Docker that automatically posts the log entries to the TCP port 24224 and then use the input plugin "Forward" to connect to the port 24224 and receive the log messages.')),(0,o.kt)("p",null,"Elasticsearch and Kibana can then be installed in Docker containers or locally."),(0,o.kt)("h4",{id:"efk-and-kubernetes"},"EFK and Kubernetes"),(0,o.kt)("p",null,"The Helm chart for Kubernetes can be configured such that a Fluent Bit pod is created on every node (see the reference architecture). The Fluent Bit pod then gathers all logs from the other pods on the node, adds some Kubernetes meta data (like pod names, cluster name, etc.) and sends it to a defined destination. In the reference architecture this destination is Fluentd, but if no further processing is required, the log data can be sent to Elasticsearch directly."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reference Architecture EFK stack",src:a(15959).Z,width:"585",height:"585"})),(0,o.kt)("h2",{id:"logging-guidelines-and-information"},"Logging Guidelines and information"),(0,o.kt)("p",null,"This section contains guidelines and standards regarding logging and should be expanded as the application matures."),(0,o.kt)("h3",{id:"logger---pino"},"Logger - Pino"),(0,o.kt)("p",null,'The logger used in the application is called "Pino" and you can find the documentation ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"here"),". Why was Pino used instead of Winston? The reason is that Pino is compatible with Fastify, whereas Winston is not (at least not out of the box)."),(0,o.kt)("h3",{id:"logging---format"},"Logging - format"),(0,o.kt)("p",null,"Pino supports several log levels (from ",(0,o.kt)("inlineCode",{parentName:"p"},"trace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),"). To make sure that the relevant information is in place, each log entry should include an object containing meta data if possible."),(0,o.kt)("h4",{id:"error"},"Error"),(0,o.kt)("p",null,'The call of the "error" level should always contain data of the situation as an "err" object. Example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'logger.error({ err }, "Stream not found.");\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," is the object containing information on the root cause of the error."),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"There are two settings of the Pino logger that are set via environment variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"PRETTY_PRINT"),' to "true" to enable pretty printing')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),'. This will setting will be used for every service by default.\nThe possible values are: "trace", "debug", "info", "warn", "error" and "fatal".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The developer and operation startup scripts control the log level for each service specifically (see .env_example files in scripts folder). Following Variables can be modified there:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"API_LOG_LEVEL"),". Controls Log Level for API."),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN_LOG_LEVEL"),". Controls Log Level for the Blockchain"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EXCEL_LOG_LEVEL"),". Controls Log Level for Excel Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EMAIL_LOG_LEVEL"),". Controls Log Level for Email Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING_LOG_LEVEL"),". Controls Log Level for Provisioning"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"STORAGE_LOG_LEVEL"),". Controls Log Level for Storage Service")))))}u.isMDXComponent=!0},15959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fluentd_architecture-fe14b59248cb9f6c0052b98fae8cc35a.png"},44831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana_dashboard-e58fa4a0a250a9c5071967b1d2eeaa97.png"}}]);