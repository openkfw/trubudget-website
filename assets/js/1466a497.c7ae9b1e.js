"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3539],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2328:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:4},l="Resource-level lifetime",c={unversionedId:"developer/architecture/ressource-level-lifetime",id:"developer/architecture/ressource-level-lifetime",isDocsHomePage:!1,title:"Resource-level lifetime",description:"Date: 23/04/2018",source:"@site/docs/developer/architecture/0004-ressource-level-lifetime.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/ressource-level-lifetime",permalink:"/docs/developer/architecture/ressource-level-lifetime",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0004-ressource-level-lifetime.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1644341581,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data model for projects",permalink:"/docs/developer/architecture/project-data-model"},next:{title:"Workflowitem-ordering",permalink:"/docs/developer/architecture/workflowitem-ordering"}},u=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[{value:"Lifetime of a single resource",id:"lifetime-of-a-single-resource",children:[]},{value:"Impact to child resources",id:"impact-to-child-resources",children:[]}]},{value:"Implementation",id:"implementation",children:[]},{value:"Consequences",id:"consequences",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resource-level-lifetime"},"Resource-level lifetime"),(0,i.kt)("p",null,"Date: 23/04/2018"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Draft"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Resources have semantically a certain lifetime. That means, after a resources is created it will experience state-transition until it reaches the end of its lifetime (e.g. archival). The lifetimes and state-transitions need to be defined in an abstract way, in order to allow the platform to excel for different use-cases."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("h3",{id:"lifetime-of-a-single-resource"},"Lifetime of a single resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\nA[Create resource] --\x3e|Auto-assign to creator| B\nB[State: Open] --\x3e |Do work|B\nB --\x3e |Assign to somebody who can close| C\nC[State: Open & Ready to close] --\x3e |Close| D\nD[Resource closed]\n")),(0,i.kt)("p",null,"Re-Opening is not supported; it could be discussed as long as the parent is still open (hierarchy must hold). Different usage-scenarios are acommodated via ",(0,i.kt)("em",{parentName:"p"},"manual")," steps."),(0,i.kt)("h4",{id:"example-4-eyes-principle"},"Example: 4-Eyes Principle"),(0,i.kt)("p",null,"Scenario: A subproject must only be closed when 2 people A & B (e.g. different departments) checked it."),(0,i.kt)("p",null,"Prereqs: Closing right is given to an administrative person and not to the people signing off"),(0,i.kt)("p",null,"Approach:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Subproject is executed as usual, then for sign-off is assigned to Person A"),(0,i.kt)("li",{parentName:"ol"},"Sign-Off Person A enters a Workflow-Item validating the state and assigns Person B"),(0,i.kt)("li",{parentName:"ol"},"Sign-Off Person B enters a Workflow-Item validating the state and assigns to administrative personell that has the close-rights"),(0,i.kt)("li",{parentName:"ol"},"Administrative person checks whether all required sign-offs are there and then finally closes; otherwise assigns back")),(0,i.kt)("h3",{id:"impact-to-child-resources"},"Impact to child resources"),(0,i.kt)("p",null,"A resource hierarchically describes a node in a tree-like structure. Therefore we need to look at impact of a closed resource to other nodes in the tree."),(0,i.kt)("p",null,"If a resource has no children, there is no impact on other resources."),(0,i.kt)("p",null,"If a resource has children (e.g. subprojects / workflowitems), ",(0,i.kt)("strong",{parentName:"p"},"the resource cannot be closed"),". All children need to be in state closed before a parent can be closed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD;\n    Project--\x3eSubproject_A;\n    Project--\x3eSubproject_B;\n    Subproject_A--\x3eWorkflowitem_A;\n    Subproject_A--\x3eWorkflowitem_B;\n    Subproject_B--\x3eWorkflowitem_C;\n    Subproject_B--\x3eWorkflowitem_D;\n")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"This ADR is desigend to enable a MVP implementation. Implementation consists of a check before closing a project whether all subprojects have already been closed."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Re-opening is not supported"),(0,i.kt)("li",{parentName:"ul"},"No automatic closing in hierarchy for now"),(0,i.kt)("li",{parentName:"ul"},"System blocks closing if there are open children"),(0,i.kt)("li",{parentName:"ul"},"No system-support for specific usage patterns")),(0,i.kt)("p",null,"This approach is on-purpose very lightweight and agnostic to usage pattern. Once needs are understood better system support for scenarios like 4-eyes-principle can be established through a new / updated ADR and formally manifested in the ledger in machine-readable format."))}d.isMDXComponent=!0}}]);