"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[37295],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84719:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:1,sidebar_label:"Introduction"},d="TruBudget-API",u={unversionedId:"developer/api-docs/README",id:"developer/api-docs/README",isDocsHomePage:!1,title:"TruBudget-API",description:"Api Code Documentation / Exports",source:"@site/docs/developer/api-docs/README.md",sourceDirName:"developer/api-docs",slug:"/developer/api-docs/README",permalink:"/docs/developer/api-docs/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/README.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1661421758,formattedLastUpdatedAt:"8/25/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"How to write documentation for TruBudget",permalink:"/docs/developer/documentation"},next:{title:"Table of Contents",permalink:"/docs/developer/api-docs/modules"}},p=[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Setup",id:"setup",children:[{value:"Development",id:"development",children:[]},{value:"API Swagger documentation",id:"api-swagger-documentation",children:[]},{value:"API code documentation",id:"api-code-documentation",children:[]}]}],s={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trubudget-api"},"TruBudget-API"),(0,o.kt)("p",null,"Api Code Documentation / ",(0,o.kt)("a",{parentName:"p",href:"modules"},"Exports")),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Env Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"info"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the log output. Supported levels are ",(0,o.kt)("inlineCode",{parentName:"td"},"trace"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"fatal"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ORGANIZATION"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"In the blockchain network, each node is represented by its organization name. This environment variable sets this organization name. It is used to create the organization stream on the blockchain and is also displayed in the frontend's top right corner.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ORGANIZATION_VAULT_SECRET"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"This is the key to en-/decrypt user data of an organization. If you want to add a new node for your organization, you want users to be able to log in on either node. ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Caution:")," If you want to run TruBudget in production, make sure NOT to use the default value from the ",(0,o.kt)("inlineCode",{parentName:"td"},".env_example")," file!")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PORT"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"8080"),(0,o.kt)("td",{parentName:"tr",align:null},"The port used to expose the API for your installation. ",(0,o.kt)("br",null),"Example: If you run TruBudget locally and set API_PORT to ",(0,o.kt)("inlineCode",{parentName:"td"},"8080"),", you can reach the API via ",(0,o.kt)("inlineCode",{parentName:"td"},"localhost:8080/api"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PRETTY_PRINT"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Decides whether the logs printed by the API are pretty printed or not. Pretty printed logs are easier to read while non-pretty printed logs are easier to store and use e.g. in the ELK (Elasticsearch-Logstash-Kabana) stack.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ROOT_SECRET"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"[random]"),(0,o.kt)("td",{parentName:"tr",align:null},"The root secret is the password for the root user. If you start with an empty blockchain, the root user is needed to add other users, approve new nodes,.. If you don't set a value via the environment variable, the API generates one randomly and prints it to the console ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Caution:")," If you want to run TruBudget in production, make sure to set a secure root secret.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_HOST"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"localhost"),(0,o.kt)("td",{parentName:"tr",align:null},"The IP address of the blockchain (not multichain daemon,but they are usally the same) you want to connect to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BLOCKCHAIN_PORT"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"8085"),(0,o.kt)("td",{parentName:"tr",align:null},"The Port of the blockchain (not multichain daemon,but they are usally the same) you want to connect to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_USER"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"multichainrpc"),(0,o.kt)("td",{parentName:"tr",align:null},"The user used to connect to the multichain daemon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PASSWORD"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"[hardcoded]"),(0,o.kt)("td",{parentName:"tr",align:null},"Password used by the API to connect to the blockchain. The password is set by the origin node upon start. Every beta node needs to use the same RPC password in order to be able to connect to the blockchain. ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Hint:")," Although the MULTICHAIN_RPC_PASSWORD is not required it is highly recommended to set an own secure one")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MULTICHAIN_RPC_PORT"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"8000"),(0,o.kt)("td",{parentName:"tr",align:null},"The port used to expose the multichain daemon of your Trubudget blockchain installation(bc). The port used to connect to the multichain daemon(api). This will be used internally for the communication between the API and the multichain daemon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SWAGGER_BASEPATH ",(0,o.kt)("inlineCode",{parentName:"td"},"deprecated")),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"/"),(0,o.kt)("td",{parentName:"tr",align:null},"This variable was used to choose which environment (prod or test) is used for testing the requests. The variable is deprecated now, as the Swagger documentation can be used for the prod and test environment separately.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JWT_SECRET"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"[random]"),(0,o.kt)("td",{parentName:"tr",align:null},"A string that is used to sign JWT which are created by the authenticate endpoint of the api")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DOCUMENT_FEATURE_ENABLED"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"If true, all uploaded documents are stored using trubudget's storage-service. If false, the document feature of TruBudget is disabled, and trying to upload a document will result in an error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STORAGE_SERVICE_HOST"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"localhost"),(0,o.kt)("td",{parentName:"tr",align:null},"IP of connected storage service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STORAGE_SERVICE_PORT"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"8090"),(0,o.kt)("td",{parentName:"tr",align:null},"Port of connected storage service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STORAGE_SERVICE_EXTERNAL_URL"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"IP and port of own connected storage service accessible externally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENCRYPTION_PASSWORD"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"If set, all data that is send to the MultiChain node and external storage will be symmetrically encrypted by the ENCRYPTION_PASSWORD")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SIGNING_METHOD"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"node"),(0,o.kt)("td",{parentName:"tr",align:null},"Possible signing methods are: ",(0,o.kt)("inlineCode",{parentName:"td"},"node")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"user"),". Transactions on the chain will be signed using either the address of the node or the address of the specific user publishing that transaction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"production"),(0,o.kt)("td",{parentName:"tr",align:null},"If set to ",(0,o.kt)("inlineCode",{parentName:"td"},"development")," api will allow any string as password. If set to ",(0,o.kt)("inlineCode",{parentName:"td"},"production")," passwords must satisfy safePasswordSchema, see lib/joiValidation-.ts & -.spec.ts files")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ACCESS_CONTROL_ALLOW_ORIGIN"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},'"',"*",'"'),(0,o.kt)("td",{parentName:"tr",align:null},"Since the service uses CORS, the domain by which it can be called needs to be set. Setting this value to ",(0,o.kt)("inlineCode",{parentName:"td"},'"*"')," means that it can be called from any domain. Read more about this topic ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"here"),".")))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"../doc/adr/"},"the ADRs")," to learn about our current way of doing things."),(0,o.kt)("p",null,"HTTP.Project <- Multichain.Project <- Project.Project -> Notification.Project"),(0,o.kt)("h4",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"When not yet provisioned, it's recommended to start the server directly with node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run tsc && node dist/index.js\n")),(0,o.kt)("p",null,"After that, live-reloading doesn't hinder provisioning anymore, plus it's quite convenient, so you might want to use this instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("h4",{id:"run-tests"},"Run tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,o.kt)("h4",{id:"build-a-container"},"Build a container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build .\n")),(0,o.kt)("h3",{id:"api-swagger-documentation"},"API Swagger documentation"),(0,o.kt)("p",null,"The documentation is hosted by the API itself. Assuming it's running on your local machine on port 8080, you should see it at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/documentation"},"localhost:8080/api/documentation"),"."),(0,o.kt)("h3",{id:"api-code-documentation"},"API code documentation"),(0,o.kt)("p",null,"For code documentation the API is using ",(0,o.kt)("a",{parentName:"p",href:"https://typedoc.org"},"TypeDoc"),".\nTo generate the documentation in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/developer/api-docs")," use following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd api\nnpm install\nnpm run build-docs\n")),(0,o.kt)("p",null,"After executing the above commands the ",(0,o.kt)("inlineCode",{parentName:"p"},"api-docs")," folder is create in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/developer/api-docs"),"\nThis folder is used by the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/trubudget-website"},"trubudget-website")," to show all documented functions of TruBudget's API.\nTo check out how it looks like in production checkout ",(0,o.kt)("a",{parentName:"p",href:"https://trubudget.net/docs/developer/api-docs/modules/"},"trubudget.net"),".\nTo locally spin up the trubudget-website with the build-docs folder copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"build-docs")," folder into ",(0,o.kt)("inlineCode",{parentName:"p"},"trubudget-website/docs/developer/")," before starting the website locally with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,o.kt)("p",null,":::hint\nCurrently only domain layer functions are documented. If ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues/1164"},"#1164")," is resolved the entire api will be documented.\n:::"))}c.isMDXComponent=!0}}]);