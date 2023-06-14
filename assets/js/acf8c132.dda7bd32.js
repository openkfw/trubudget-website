"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[28800],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(n),k=a,s=c["".concat(u,".").concat(k)]||c[k]||p[k]||l;return n?r.createElement(s,i(i({ref:e},d),{},{components:n})):r.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49777:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},u="Running TruBudget",m={unversionedId:"operation-administration/resource-requirements",id:"operation-administration/resource-requirements",isDocsHomePage:!1,title:"Running TruBudget",description:"Minimum Requirements",source:"@site/docs/operation-administration/resource-requirements.md",sourceDirName:"operation-administration",slug:"/operation-administration/resource-requirements",permalink:"/docs/operation-administration/resource-requirements",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/resource-requirements.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1686750426,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multichain-Cli",permalink:"/docs/operation-administration/multichain-cli"},next:{title:"Updating TruBudget",permalink:"/docs/operation-administration/update-trubudget"}},d=[{value:"Minimum Requirements",id:"minimum-requirements",children:[{value:"Blockchain",id:"blockchain",children:[]},{value:"Frontend",id:"frontend",children:[]},{value:"API",id:"api",children:[]},{value:"Export-Service",id:"export-service",children:[]},{value:"Email-Service",id:"email-service",children:[]},{value:"Storage-Service",id:"storage-service",children:[]}]}],p={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"running-trubudget"},"Running TruBudget"),(0,l.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,l.kt)("p",null,"To give your users the best experience, we have tested TruBudget with different configurations. The minimum requirements aim to provide a working environment with 50 to 100 parallel users. The recommended environment is capable of handling 100 - 400 parallel users (using Kubernetes)."),(0,l.kt)("p",null,"If you plan to deploy TruBudget on a single VM with following services: Blockchain, API and Frontend, we recommend the following for minimum setup:\n| | Minimum |\n| ------- | ------- |\n| CPU\u2020 | 2 vCPU |\n| RAM | 8 GB |\n| Storage | 10 GB |"),(0,l.kt)("p",null,"If you plan to have more than 100 parallel users, we strongly recommend using Kubernetes. TruBudget load and stress tests are run against the minimum and recommend system requirements in a Kubernetes environment to ensure the correctness of the data below."),(0,l.kt)("h3",{id:"blockchain"},"Blockchain"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1","*"," GB")))),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("h3",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("h3",{id:"export-service"},"Export-Service"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("h3",{id:"email-service"},"Email-Service"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,l.kt)("h3",{id:"storage-service"},"Storage-Service"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"1 vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2 vCPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"50","*"," GB")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u2020 Depending on your or your provider's infrastructure, the strength of one virtual CPU might vary. The above values are based on the Intel\xae Xeon\xae Platinum 8272CL processor (second generation Intel\xae Xeon\xae Scalable processors), Intel\xae Xeon\xae 8171M 2.1GHz (Skylake), Intel\xae Xeon\xae E5-2673 v4 2.3 GHz (Broadwell), or the Intel\xae Xeon\xae E5-2673 v3 2.4 GHz (Haswell) processors.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"*"," Assuming you are using off-chain-storage.")))}c.isMDXComponent=!0}}]);