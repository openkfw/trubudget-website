"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[85719],{62638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"environment-variables/provisioning-environment-variables","title":"Provisioning","description":"Environment variables","source":"@site/docs/environment-variables/provisioning-environment-variables.md","sourceDirName":"environment-variables","slug":"/environment-variables/provisioning-environment-variables","permalink":"/docs/environment-variables/provisioning-environment-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/environment-variables/provisioning-environment-variables.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Trubudget Frontend","permalink":"/docs/environment-variables/frontend-environment-variables"},"next":{"title":"Trubudget Storage service","permalink":"/docs/environment-variables/storage-service-environment-variables"}}');var s=t(74848),i=t(28453);const o={},d="Provisioning",a={},l=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Kubernetes",id:"kubernetes",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"provisioning",children:"Provisioning"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Env Variable"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Used by"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ORGANIZATION"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"bc/api"}),(0,s.jsx)(n.td,{children:"In the blockchain network, each node is represented by its organization name. This environment variable sets this organization name. It is used to create the organization stream on the blockchain and is also displayed in the frontend's top right corner."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API_HOST"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"bc/prov"}),(0,s.jsx)(n.td,{children:"The IP address of one api which is connected to the node you want to connect to (The IP addresses are usually the same as for the P2P host address)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API_PORT"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"8080"}),(0,s.jsx)(n.td,{children:"bc/prov"}),(0,s.jsx)(n.td,{children:"The port used to connect to the api."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ROOT_SECRET"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"[random]"}),(0,s.jsx)(n.td,{children:"api"}),(0,s.jsxs)(n.td,{children:["The root secret is the password for the root user. If you start with an empty blockchain, the root user is needed to add other users, approve new nodes,.. If you don't set a value via the environment variable, the API generates one randomly and prints it to the console",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Caution:"})," If you want to run TruBudget in production, make sure to set a secure root secret."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOG_LEVEL"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"info"}),(0,s.jsx)(n.td,{children:"all"}),(0,s.jsxs)(n.td,{children:["Defines the log output. Supported levels are ",(0,s.jsx)(n.code,{children:"trace"}),", ",(0,s.jsx)(n.code,{children:"debug"}),", ",(0,s.jsx)(n.code,{children:"info"}),", ",(0,s.jsx)(n.code,{children:"warn"}),", ",(0,s.jsx)(n.code,{children:"error"}),", ",(0,s.jsx)(n.code,{children:"fatal"})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["| JWT_SECRET                         | no       | - (required)                      | email                | A secret of min length of 32 - It is used to verify the JWT_TOKEN sent by users of the email-service endpoints                                                                                                                                                                                                                                                                                  |\n| AUTHENTICATION                     | no       | JWT                               | email                | If set to none, no JWT-Token is required for all endpoints. If set JWT, a JWT token is necessary                                                                                                                                                                                                                                                                                                |\n| DOCUMENT_FEATURE_ENABLED      | no       | false | api         | If true, all uploaded documents are stored using trubudget's storage-service. If false, the document feature of TruBudget is disabled, and trying to upload a document will result in an error.                                                                                                                                                                                    |\n| DOCUMENT_EXTERNAL_LINKS_ENABLED              | no                                 | false         | api | If true, it is possible to use external documents links also without trubudget's storage-service. If false, the external documents links feature of TruBudget is still possible to use in case DOCUMENT_FEATURE_ENABLED equals \"true\".                                                                                                                                                                                    |\n| STORAGE_SERVICE_HOST               | no       | localhost                         | storage              | IP address of storage service                                                                                                                                                                                                                                                                                                                                                                   |\n| STORAGE_SERVICE_PORT               | no       | 8090                              | storage              | Port of storage service                                                                                                                                                                                                                                                                                                                                                                         |\n| STORAGE_SERVICE_EXTERNAL_URL  | no       | -             | api              | IP and port of own connected storage service accessible externally                                                                                                                                                                                                                                                                                                                 |\n| STORAGE_PROVIDER                | minio                                                                                                                                                                                                                                                                                            | Set to ",(0,s.jsx)(n.code,{children:"azure-storage"})," if you use Azure Storage Account, otherwise defaults to ",(0,s.jsx)(n.code,{children:"minio"}),'             |\n| MINIO_ACCESS_KEY                   | no       | minio                             | storage              | Access key for Minio server                                                                                                                                                                                                                                                                                                                                                                     |\n| MINIO_SECRET_KEY                   | no       | minio123                          | storage              | Secret (Password) for Minio server                                                                                                                                                                                                                                                                                                                                                              |\n| MINIO_PORT                         | no       | 9000                              | storage              | Port of connected Minio                                                                                                                                                                                                                                                                                                                                                                         |\n| MINIO_HOST                         | no       | localhost                         | storage              | IP address of connected Minio server                                                                                                                                                                                                                                                                                                                                                            |\n| MINIO_BUCKET_NAME                  | no       | trubudget                         | storage              | Bucket name of the connected Minio server                                                                                                                                                                                                                                                                                                                                                       |\n| MINIO_REGION                    | us-east-1                                                                                                                                                                                                                                                                                        | Region where the bucket is created. This parameter is optional. Default value is us-east-1.        |\n| LOGGER_PORT                        | yes      | 3000                              | logging              | Port where the frontend-collector is exposed                                                                                                                                                                                                                                                                                                                                                       |\n| API_HOST                           | yes      | localhost                         | logging              | API host                                                                                                                                                                                                                                                                                                                                                                                        |\n| API_PORT                           | yes      | 8080                              | logging              | API port                                                                                                                                                                                                                                                                                                                                                                                        |\n| LOG_LEVEL                          | yes      | trace                             | logging              | Log-level                                                                                                                                                                                                                                                                                                                                                                                       |\n| LOGGING_SERVICE_CACHE_DURATION     | yes      | 20                                | logging              | Defines how long valid JWT should be cached (in minutes).                                                                                                                                                                                                                                                                                                                                       |\n| LOGGING_SERVICE_NODE_ENV           | yes      | production                        | logging              | Environment                                                                                                                                                                                                                                                                                                                                                                                     |\n| CI_COMMIT_SHA               | ""            | bc/api/excel/storage/email\t              | Defines the CI_COMMIT_SHA property returned by the version endpoint.                                                                                                                                                                                          |\n| RATE_LIMIT                    | no       | -             | api | If set, API will limit the number of requests from any individual IP address to the set number per minute. Can be set to any ',(0,s.jsx)(n.code,{children:"number"}),", but shouldn't be set too low.                                                                                                                                                                                                               |"]}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Env Variable"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Used by"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"EXPOSE_MC"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"bc"}),(0,s.jsxs)(n.td,{children:["If set to true Trubudget tries to expose it's multichain via kubernetes' ingress. First a kubernetes config file is searched in ",(0,s.jsx)(n.code,{children:"/.kube/config"}),". If not found and the MC is deployed in a cluster, it is searching for the service account to get the information. After configuration the ",(0,s.jsx)(n.code,{children:"externalip"})," arg is set to the ip of the service' ingress of the configured clusterSERVICE_NAME and NAMESPACE are required to access the ingress of the service."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KUBE_SERVICE_NAME"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"bc"}),(0,s.jsx)(n.td,{children:"This variable is only required if EXPOSE_MC is set to true. It defines which service the kubernetes client should search for in the configured kubernetes cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KUBE_NAMESPACE"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"bc"}),(0,s.jsx)(n.td,{children:"This variable is only required if EXPOSE_MC is set to true. It defines in which namespace the kubernetes client should search for the given service"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);