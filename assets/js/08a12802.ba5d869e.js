"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[11611],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,k=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30722:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={},p="ProcessEnvVars",l={unversionedId:"developer/api-docs/interfaces/ProcessEnvVars",id:"developer/api-docs/interfaces/ProcessEnvVars",isDocsHomePage:!1,title:"ProcessEnvVars",description:"Api Code Documentation / Exports / ProcessEnvVars",source:"@site/docs/developer/api-docs/interfaces/ProcessEnvVars.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/ProcessEnvVars",permalink:"/docs/developer/api-docs/interfaces/ProcessEnvVars",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/ProcessEnvVars.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Group",permalink:"/docs/developer/api-docs/interfaces/Group"},next:{title:"ProjectNotificationMetadata",permalink:"/docs/developer/api-docs/interfaces/ProjectNotificationMetadata"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"ACCESS_CONTROL_ALLOW_ORIGIN",id:"access_control_allow_origin",children:[]},{value:"BLOCKCHAIN_PORT",id:"blockchain_port",children:[]},{value:"BUILDTIMESTAMP",id:"buildtimestamp",children:[]},{value:"CI_COMMIT_SHA",id:"ci_commit_sha",children:[]},{value:"DOCUMENT_FEATURE_ENABLED",id:"document_feature_enabled",children:[]},{value:"ENCRYPTION_PASSWORD",id:"encryption_password",children:[]},{value:"JWT_SECRET",id:"jwt_secret",children:[]},{value:"MULTICHAIN_RPC_HOST",id:"multichain_rpc_host",children:[]},{value:"MULTICHAIN_RPC_PASSWORD",id:"multichain_rpc_password",children:[]},{value:"MULTICHAIN_RPC_PORT",id:"multichain_rpc_port",children:[]},{value:"MULTICHAIN_RPC_USER",id:"multichain_rpc_user",children:[]},{value:"NODE_ENV",id:"node_env",children:[]},{value:"ORGANIZATION",id:"organization",children:[]},{value:"ORGANIZATION_VAULT_SECRET",id:"organization_vault_secret",children:[]},{value:"PORT",id:"port",children:[]},{value:"ROOT_SECRET",id:"root_secret",children:[]},{value:"SIGNING_METHOD",id:"signing_method",children:[]},{value:"STORAGE_SERVICE_EXTERNAL_URL",id:"storage_service_external_url",children:[]},{value:"STORAGE_SERVICE_HOST",id:"storage_service_host",children:[]},{value:"STORAGE_SERVICE_PORT",id:"storage_service_port",children:[]}]}],d={toc:c},u="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"processenvvars"},"ProcessEnvVars"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ProcessEnvVars"),(0,a.kt)("p",null,"Shows all environment variables that the api can contain"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"notexported"))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#access_control_allow_origin"},"ACCESS","_","CONTROL","_","ALLOW","_","ORIGIN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#blockchain_port"},"BLOCKCHAIN","_","PORT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#buildtimestamp"},"BUILDTIMESTAMP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#ci_commit_sha"},"CI","_","COMMIT","_","SHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#document_feature_enabled"},"DOCUMENT","_","FEATURE","_","ENABLED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#encryption_password"},"ENCRYPTION","_","PASSWORD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#jwt_secret"},"JWT","_","SECRET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#multichain_rpc_host"},"MULTICHAIN","_","RPC","_","HOST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#multichain_rpc_password"},"MULTICHAIN","_","RPC","_","PASSWORD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#multichain_rpc_port"},"MULTICHAIN","_","RPC","_","PORT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#multichain_rpc_user"},"MULTICHAIN","_","RPC","_","USER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#node_env"},"NODE","_","ENV")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#organization"},"ORGANIZATION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#organization_vault_secret"},"ORGANIZATION","_","VAULT","_","SECRET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#port"},"PORT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#root_secret"},"ROOT","_","SECRET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#signing_method"},"SIGNING","_","METHOD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#storage_service_external_url"},"STORAGE","_","SERVICE","_","EXTERNAL","_","URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#storage_service_host"},"STORAGE","_","SERVICE","_","HOST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/ProcessEnvVars#storage_service_port"},"STORAGE","_","SERVICE","_","PORT"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"access_control_allow_origin"},"ACCESS","_","CONTROL","_","ALLOW","_","ORIGIN"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ACCESS","_","CONTROL","_","ALLOW","_","ORIGIN"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L25"},"src/config.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blockchain_port"},"BLOCKCHAIN","_","PORT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"BLOCKCHAIN","_","PORT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L17"},"src/config.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"buildtimestamp"},"BUILDTIMESTAMP"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"BUILDTIMESTAMP"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L20"},"src/config.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ci_commit_sha"},"CI","_","COMMIT","_","SHA"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"CI","_","COMMIT","_","SHA"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L19"},"src/config.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"document_feature_enabled"},"DOCUMENT","_","FEATURE","_","ENABLED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DOCUMENT","_","FEATURE","_","ENABLED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L21"},"src/config.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encryption_password"},"ENCRYPTION","_","PASSWORD"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ENCRYPTION","_","PASSWORD"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L27"},"src/config.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"jwt_secret"},"JWT","_","SECRET"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"JWT","_","SECRET"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L18"},"src/config.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multichain_rpc_host"},"MULTICHAIN","_","RPC","_","HOST"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MULTICHAIN","_","RPC","_","HOST"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L13"},"src/config.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multichain_rpc_password"},"MULTICHAIN","_","RPC","_","PASSWORD"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MULTICHAIN","_","RPC","_","PASSWORD"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L16"},"src/config.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multichain_rpc_port"},"MULTICHAIN","_","RPC","_","PORT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MULTICHAIN","_","RPC","_","PORT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L14"},"src/config.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multichain_rpc_user"},"MULTICHAIN","_","RPC","_","USER"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MULTICHAIN","_","RPC","_","USER"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L15"},"src/config.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"node_env"},"NODE","_","ENV"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NODE","_","ENV"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L26"},"src/config.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"organization"},"ORGANIZATION"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ORGANIZATION"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L9"},"src/config.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"organization_vault_secret"},"ORGANIZATION","_","VAULT","_","SECRET"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ORGANIZATION","_","VAULT","_","SECRET"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L10"},"src/config.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"PORT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PORT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L11"},"src/config.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"root_secret"},"ROOT","_","SECRET"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ROOT","_","SECRET"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L12"},"src/config.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signing_method"},"SIGNING","_","METHOD"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SIGNING","_","METHOD"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L28"},"src/config.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"storage_service_external_url"},"STORAGE","_","SERVICE","_","EXTERNAL","_","URL"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"STORAGE","_","SERVICE","_","EXTERNAL","_","URL"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L24"},"src/config.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"storage_service_host"},"STORAGE","_","SERVICE","_","HOST"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"STORAGE","_","SERVICE","_","HOST"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L22"},"src/config.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"storage_service_port"},"STORAGE","_","SERVICE","_","PORT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"STORAGE","_","SERVICE","_","PORT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/config.ts#L23"},"src/config.ts:23")))}f.isMDXComponent=!0}}]);