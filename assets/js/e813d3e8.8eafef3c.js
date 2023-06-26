"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[56509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={sidebar_position:3},l="Data model for projects",i={unversionedId:"developer/architecture/project-data-model",id:"developer/architecture/project-data-model",title:"Data model for projects",description:"Date: 17/04/2018",source:"@site/docs/developer/architecture/0003-project-data-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/project-data-model",permalink:"/docs/developer/architecture/project-data-model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0003-project-data-model.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Access Control Model",permalink:"/docs/developer/architecture/access-control-model"},next:{title:"Resource-level lifetime",permalink:"/docs/developer/architecture/ressource-level-lifetime"}},s={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Definition of terms",id:"definition-of-terms",level:3},{value:"Relations",id:"relations",level:3},{value:"Options",id:"options",level:3},{value:"Decision",id:"decision",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-model-for-projects"},"Data model for projects"),(0,o.kt)("p",null,"Date: 17/04/2018"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"We need to define how to save and query project, subproject and workflow data efficiently."),(0,o.kt)("h3",{id:"definition-of-terms"},"Definition of terms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project: Is the root element of the hierarchy. It contains metadata and Subprojects"),(0,o.kt)("li",{parentName:"ul"},"Subproject: Are a subset of Projects and collect a number of Workflowitems"),(0,o.kt)("li",{parentName:"ul"},"Workflowitems: Are a number of steps which need to be executed in a certain order"),(0,o.kt)("li",{parentName:"ul"},"Resources: Projects, Subprojects, Workflowitems are resources. This means they contain permissions, a log and metadata.")),(0,o.kt)("h3",{id:"relations"},"Relations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD;\n    Project--\x3eSubproject_A;\n    Project--\x3eSubproject_B;\n    Subproject_A--\x3eWorkflowitem_A;\n    Subproject_A--\x3eWorkflowitem_B;\n    Subproject_B--\x3eWorkflowitem_C;\n    Subproject_B--\x3eWorkflowitem_D;\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each resource has its own stream. Each resource has an array which links to the underlying resources (e.g. A Projects has an array of the ids of its Subrojects). That means if we want to query Subprojects of a specific Project, we need to lookup the Subproject ID's inside the projects to afterswards fetch all the underlying Subproject streams. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," We are only fetching the data which is necessary, changes inside the resources are storage efficent. ",(0,o.kt)("strong",{parentName:"li"},"Con:")," Resources with a high number of relations result in multiple (maybe hundreds) of queries."),(0,o.kt)("li",{parentName:"ol"},"Each Project has its own stream. All relational resources of the projects are stored inside a JSON and resolved on the API Layer. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," Only one query necessary to resolve the whole resource tree for one project. ",(0,o.kt)("strong",{parentName:"li"},"Con:")," Large amount of storage needed, since every change inside a single resource would trigger a whole copy of the project tree. Large datastructures have to be kept in memory"),(0,o.kt)("li",{parentName:"ol"},"Each project has its own stream. All relational resources are organized with multiple key-items inside the project stream. This allows to specifically query resources with a single query. Updates to resources will only result in the copy of the affected resource. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," Easy to query, low storage / memory footprint ",(0,o.kt)("strong",{parentName:"li"},"Con:")," None")),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Since we need to be able to scale out to larger projects, it is important to be able to execute fast queries and having a low storage / memory footprint. The goal is to exploit the Multichain API as much as possible, since we can expect it to be more performant than our API. Option 3 is the option, which covers the required capabilities in the best way."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Each project will have its own stream. It contains its own resources specific metadata inside specific keys (e.g. ","_","logs, ","_","permissions, ","_","metdata). All underlying resources will be stored with specific key arrays."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Keys"),(0,o.kt)("th",{parentName:"tr",align:null},"Resource"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'log"'),(0,o.kt)("td",{parentName:"tr",align:null},"Changelog of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'permissions"'),(0,o.kt)("td",{parentName:"tr",align:null},"Permissions of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'metdata"'),(0,o.kt)("td",{parentName:"tr",align:null},"Details of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'["subprojects", "\\<id of subproject',">",'"]'),(0,o.kt)("td",{parentName:"tr",align:null},"Subproject")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'["\\<id of subproject',">",'_workflows", "\\<id of workflow',">",'"]'),(0,o.kt)("td",{parentName:"tr",align:null},"Workflow")))),(0,o.kt)("p",null,"To efficiently query the resources we can execute the following commands:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get project details"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List all subprojects"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx subprojects"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get specific subproject details"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx tenderxyz"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List workflows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx tenderxyz_workflows"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get specific workflow details"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx workflowxyz"))))),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"With this solution we have a minimal amount a calls and fast retrieval of resource data. Performance tests need to be executed but we expect this method to scale well when the amount of resources grows"))}d.isMDXComponent=!0}}]);