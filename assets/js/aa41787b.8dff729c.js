"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=g(n),c=o,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(87462),o=(n(67294),n(3905));const i={},a="Logging in TruBudget",l={unversionedId:"developer/logging",id:"developer/logging",title:"Logging in TruBudget",description:"Logging Guidelines and information",source:"@site/docs/developer/logging.md",sourceDirName:"developer",slug:"/developer/logging",permalink:"/docs/developer/logging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/logging.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AugmentedFastifyInstance",permalink:"/docs/developer/api-docs/interfaces/types.AugmentedFastifyInstance"},next:{title:"Introduction and Basics",permalink:"/docs/operation-administration/introduction"}},s={},g=[{value:"Logging Guidelines and information",id:"logging-guidelines-and-information",level:2},{value:"Logger - Pino",id:"logger---pino",level:3},{value:"Logging - format",id:"logging---format",level:3},{value:"Error",id:"error",level:4},{value:"Environment variables",id:"environment-variables",level:3},{value:"Frontend Logging",id:"frontend-logging",level:2}],p={toc:g},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-in-trubudget"},"Logging in TruBudget"),(0,o.kt)("h2",{id:"logging-guidelines-and-information"},"Logging Guidelines and information"),(0,o.kt)("p",null,"This section contains guidelines and standards regarding logging and should be expanded as the application matures.\nIf you want to know more about logging and monitoring in TruBudget, see the ",(0,o.kt)("a",{parentName:"p",href:"./../operation-administration/logging-monitoring"},"operator guidelines"),"."),(0,o.kt)("h3",{id:"logger---pino"},"Logger - Pino"),(0,o.kt)("p",null,'The logger used in the application is called "Pino" and you can find the documentation ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"here"),". Why was Pino used instead of Winston? The reason is that Pino is compatible with Fastify, whereas Winston is not (at least not out of the box)."),(0,o.kt)("h3",{id:"logging---format"},"Logging - format"),(0,o.kt)("p",null,"Pino supports several log levels (from ",(0,o.kt)("inlineCode",{parentName:"p"},"trace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),"). To make sure that the relevant information is in place, each log entry should include an object containing meta data if possible."),(0,o.kt)("h4",{id:"error"},"Error"),(0,o.kt)("p",null,'The call of the "error" level should always contain data of the situation as an "err" object. Example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'logger.error({ err }, "Stream not found.");\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," is the object containing information on the root cause of the error."),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"There are two settings of the Pino logger that are set via environment variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"PRETTY_PRINT"),' to "true" to enable pretty printing')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),'. This will setting will be used for every service by default.\nThe possible values are: "trace", "debug", "info", "warn", "error" and "fatal".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The developer and operation startup scripts control the log level for each service specifically (see .env_example files in scripts folder). Following Variables can be modified there:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"API_LOG_LEVEL"),". Controls Log Level for API."),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN_LOG_LEVEL"),". Controls Log Level for the Blockchain"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EXCEL_LOG_LEVEL"),". Controls Log Level for Excel Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"EMAIL_LOG_LEVEL"),". Controls Log Level for Email Service"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING_LOG_LEVEL"),". Controls Log Level for Provisioning"),(0,o.kt)("li",{parentName:"ul"},"Set the log level via ",(0,o.kt)("inlineCode",{parentName:"li"},"STORAGE_LOG_LEVEL"),". Controls Log Level for Storage Service")))),(0,o.kt)("h2",{id:"frontend-logging"},"Frontend Logging"),(0,o.kt)("p",null,"TruBudget offers the possibility to log frontend events such as errors or crashes. To collect and store this data, the TruBudget logging-service must be enabled.\nTo enable the TruBudget logging-service, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--with-frontend-logging")," must be passed when deploying or when starting TruBudget in development mode with the provided start script.\nMake sure all env variables are set correctly as defined ",(0,o.kt)("a",{parentName:"p",href:"./../environment-variables"},"in the environment description"),"."))}u.isMDXComponent=!0}}]);