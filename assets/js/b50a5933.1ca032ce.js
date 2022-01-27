(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4465],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9794:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:0},d="Architecture Decision Records",l={unversionedId:"developer/architecture/intro",id:"developer/architecture/intro",isDocsHomePage:!1,title:"Architecture Decision Records",description:"An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.",source:"@site/docs/developer/architecture/intro.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/intro",permalink:"/trubudget-website/docs/developer/architecture/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/intro.md",version:"current",lastUpdatedBy:"Mayr Martin",lastUpdatedAt:1643289410,formattedLastUpdatedAt:"1/27/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/trubudget-website/docs/developer/developer-setup"},next:{title:"Record architecture decisions",permalink:"/trubudget-website/docs/developer/architecture/record-architecture-decisions"}},u=[],p={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture-decision-records"},"Architecture Decision Records"),(0,o.kt)("p",null,"An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.\nFor more information about what an ADR is visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture_decision_record"},"Architecture decision record project")," on GitHub."),(0,o.kt)("p",null,"Following table shows a list of TruBudget's ADRs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Title"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Record Architecture Decisions (ADRs)"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/record-architecture-decisions"},"Record architecture decisions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Access Control Model/Authorization"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/access-control-model"},"Access control model"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Project Data Model"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/project-data-model"},"Project data model "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Resource (e.g.,Project,Subproject) Lifetime"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/ressource-level-lifetime"},"Ressource-level lifetime"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Workflowitem Ordering"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/workflowitem-ordering"},"Workflowitem ordering"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Multi Node Setup (Superceded)"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/multi-node-setup"},"Multi-node setup"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Basic Execution Architecture"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/execution-architecture-overview"},"Execution-architecture Overview"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Git Branching/Releasing Model"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/git-branching-model"},"Git branching model"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Multichain Migration Model"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/migration-model"},"Migration model"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Multi Node Setup/Address Private Key Handling"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/trubudget-website/docs/developer/architecture/multi-node-setup-and-user-management"},"Multi-node setup"))))))}s.isMDXComponent=!0}}]);