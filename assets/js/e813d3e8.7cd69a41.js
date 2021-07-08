(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6509],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2606:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},s={unversionedId:"developer/architecture/project-data-model",id:"developer/architecture/project-data-model",isDocsHomePage:!1,title:"Data model for projects",description:"Date: 17/04/2018",source:"@site/docs/developer/architecture/0003-project-data-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/project-data-model",permalink:"/trubudget-website/docs/developer/architecture/project-data-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0003-project-data-model.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1625755493,formattedLastUpdatedAt:"7/8/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Access Control Model",permalink:"/trubudget-website/docs/developer/architecture/access-control-model"},next:{title:"Resource-level lifetime",permalink:"/trubudget-website/docs/developer/architecture/ressource-level-lifetime"}},c=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[{value:"Definition of terms",id:"definition-of-terms",children:[]},{value:"Relations",id:"relations",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Decision",id:"decision",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Consequences",id:"consequences",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Date: 17/04/2018"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"We need to define how to save and query project, subproject and workflow data efficiently."),(0,o.kt)("h3",{id:"definition-of-terms"},"Definition of terms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project: Is the root element of the hierarchy. It contains metadata and Subprojects"),(0,o.kt)("li",{parentName:"ul"},"Subproject: Are a subset of Projects and collect a number of Workflowitems"),(0,o.kt)("li",{parentName:"ul"},"Workflowitems: Are a number of steps which need to be executed in a certain order"),(0,o.kt)("li",{parentName:"ul"},"Resources: Projects, Subprojects, Workflowitems are resources. This means they contain permissions, a log and metadata.")),(0,o.kt)("h3",{id:"relations"},"Relations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD;\n    Project--\x3eSubproject_A;\n    Project--\x3eSubproject_B;\n    Subproject_A--\x3eWorkflowitem_A;\n    Subproject_A--\x3eWorkflowitem_B;\n    Subproject_B--\x3eWorkflowitem_C;\n    Subproject_B--\x3eWorkflowitem_D;\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each resource has its own stream. Each resource has an array which links to the underlying resources (e.g. A Projects has an array of the ids of its Subrojects). That means if we want to query Subprojects of a specific Project, we need to lookup the Subproject ID's inside the projects to afterswards fetch all the underlying Subproject streams. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," We are only fetching the data which is necessary, changes inside the resources are storage efficent. ",(0,o.kt)("strong",{parentName:"li"},"Con:")," Resources with a high number of relations result in multiple (maybe hundreds) of queries."),(0,o.kt)("li",{parentName:"ol"},"Each Project has its own stream. All relational resources of the projects are stored inside a JSON and resolved on the API Layer. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," Only one query necessary to resolve the whole resource tree for one project. ",(0,o.kt)("strong",{parentName:"li"},"Con:")," Large amount of storage needed, since every change inside a single resource would trigger a whole copy of the project tree. Large datastructures have to be kept in memory"),(0,o.kt)("li",{parentName:"ol"},"Each project has its own stream. All relational resources are organized with multiple key-items inside the project stream. This allows to specifically query resources with a single query. Updates to resources will only result in the copy of the affected resource. ",(0,o.kt)("strong",{parentName:"li"},"Pro:")," Easy to query, low storage / memory footprint ",(0,o.kt)("strong",{parentName:"li"},"Con:")," None")),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Since we need to be able to scale out to larger projects, it is important to be able to execute fast queries and having a low storage / memory footprint. The goal is to exploit the Multichain API as much as possible, since we can expect it to be more performant than our API. Option 3 is the option, which covers the required capabilities in the best way."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Each project will have its own stream. It contains its own resources specific metadata inside specific keys (e.g. ","_","logs, ","_","permissions, ","_","metdata). All underlying resources will be stored with specific key arrays."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Keys"),(0,o.kt)("th",{parentName:"tr",align:null},"Resource"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'log"'),(0,o.kt)("td",{parentName:"tr",align:null},"Changelog of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'permissions"'),(0,o.kt)("td",{parentName:"tr",align:null},"Permissions of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"',"_",'metdata"'),(0,o.kt)("td",{parentName:"tr",align:null},"Details of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'["subprojects", "\\<id of subproject',">",'"]'),(0,o.kt)("td",{parentName:"tr",align:null},"Subproject")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'["\\<id of subproject',">",'_workflows", "\\<id of workflow',">",'"]'),(0,o.kt)("td",{parentName:"tr",align:null},"Workflow")))),(0,o.kt)("p",null,"To efficiently query the resources we can execute the following commands:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get project details"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List all subprojects"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx subprojects"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get specific subproject details"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx tenderxyz"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List workflows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx tenderxyz_workflows"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Get specific workflow details"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"liststreamkeyitems projectx workflowxyz"))))),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"With this solution we have a minimal amount a calls and fast retrieval of resource data. Performance tests need to be executed but we expect this method to scale well when the amount of resources grows"))}p.isMDXComponent=!0}}]);