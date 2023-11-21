"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18879],{47597:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(85893),t=i(11151);const r={},l="Logging in TruBudget",s={id:"developer/logging",title:"Logging in TruBudget",description:"Logging Guidelines and information",source:"@site/docs/developer/logging.md",sourceDirName:"developer",slug:"/developer/logging",permalink:"/docs/developer/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/logging.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700572368,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AugmentedFastifyInstance",permalink:"/docs/developer/api-docs/interfaces/types.AugmentedFastifyInstance"},next:{title:"Introduction and Basics",permalink:"/docs/operation-administration/introduction"}},a={},d=[{value:"Logging Guidelines and information",id:"logging-guidelines-and-information",level:2},{value:"Logger - Pino",id:"logger---pino",level:3},{value:"Logging - format",id:"logging---format",level:3},{value:"Error",id:"error",level:4},{value:"Environment variables",id:"environment-variables",level:3},{value:"Frontend Logging",id:"frontend-logging",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"logging-in-trubudget",children:"Logging in TruBudget"}),"\n",(0,o.jsx)(n.h2,{id:"logging-guidelines-and-information",children:"Logging Guidelines and information"}),"\n",(0,o.jsxs)(n.p,{children:["This section contains guidelines and standards regarding logging and should be expanded as the application matures.\nIf you want to know more about logging and monitoring in TruBudget, see the ",(0,o.jsx)(n.a,{href:"./../operation-administration/logging-monitoring",children:"operator guidelines"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"logger---pino",children:"Logger - Pino"}),"\n",(0,o.jsxs)(n.p,{children:['The logger used in the application is called "Pino" and you can find the documentation ',(0,o.jsx)(n.a,{href:"https://github.com/pinojs/pino",children:"here"}),". Why was Pino used instead of Winston? The reason is that Pino is compatible with Fastify, whereas Winston is not (at least not out of the box)."]}),"\n",(0,o.jsx)(n.h3,{id:"logging---format",children:"Logging - format"}),"\n",(0,o.jsxs)(n.p,{children:["Pino supports several log levels (from ",(0,o.jsx)(n.code,{children:"trace"})," to ",(0,o.jsx)(n.code,{children:"fatal"}),"). To make sure that the relevant information is in place, each log entry should include an object containing meta data if possible."]}),"\n",(0,o.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,o.jsx)(n.p,{children:'The call of the "error" level should always contain data of the situation as an "err" object. Example:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'logger.error({ err }, "Stream not found.");\n'})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"err"})," is the object containing information on the root cause of the error."]}),"\n",(0,o.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,o.jsx)(n.p,{children:"There are two settings of the Pino logger that are set via environment variables."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"PRETTY_PRINT"}),' to "true" to enable pretty printing']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"LOG_LEVEL"}),'. This will setting will be used for every service by default.\nThe possible values are: "trace", "debug", "info", "warn", "error" and "fatal".']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The developer and operation startup scripts control the log level for each service specifically (see .env_example files in scripts folder). Following Variables can be modified there:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"API_LOG_LEVEL"}),". Controls Log Level for API."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"BLOCKCHAIN_LOG_LEVEL"}),". Controls Log Level for the Blockchain"]}),"\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"EXCEL_LOG_LEVEL"}),". Controls Log Level for Excel Service"]}),"\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"EMAIL_LOG_LEVEL"}),". Controls Log Level for Email Service"]}),"\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"PROVISIONING_LOG_LEVEL"}),". Controls Log Level for Provisioning"]}),"\n",(0,o.jsxs)(n.li,{children:["Set the log level via ",(0,o.jsx)(n.code,{children:"STORAGE_LOG_LEVEL"}),". Controls Log Level for Storage Service"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"frontend-logging",children:"Frontend Logging"}),"\n",(0,o.jsxs)(n.p,{children:["TruBudget offers the possibility to log frontend events such as errors or crashes. To collect and store this data, the TruBudget logging-service must be enabled.\nTo enable the TruBudget logging-service, the parameter ",(0,o.jsx)(n.code,{children:"--with-frontend-logging"})," must be passed when deploying or when starting TruBudget in development mode with the provided start script.\nMake sure all env variables are set correctly as defined ",(0,o.jsx)(n.a,{href:"./../environment-variables",children:"in the environment description"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>l});var o=i(67294);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);