(self.webpackChunkweb=self.webpackChunkweb||[]).push([[134],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3806:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],i={sidebar_position:2},c="Access Control Model",l={unversionedId:"developer/architecture/access-control-model",id:"developer/architecture/access-control-model",isDocsHomePage:!1,title:"Access Control Model",description:"Date: 03/04/2018",source:"@site/docs/developer/architecture/0002-access-control-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/access-control-model",permalink:"/docs/developer/architecture/access-control-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0002-access-control-model.md",version:"current",lastUpdatedBy:"Stezido",lastUpdatedAt:1644232711,formattedLastUpdatedAt:"2/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Record architecture decisions",permalink:"/docs/developer/architecture/record-architecture-decisions"},next:{title:"Data model for projects",permalink:"/docs/developer/architecture/project-data-model"}},u=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[{value:"Intents",id:"intents",children:[]},{value:"User Groups",id:"user-groups",children:[]},{value:"Implementation Pattern",id:"implementation-pattern",children:[]},{value:"Resource-specific Access Control Lists (ACLs)",id:"resource-specific-access-control-lists-acls",children:[]}]},{value:"Consequences",id:"consequences",children:[]}],p={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"access-control-model"},"Access Control Model"),(0,s.kt)("p",null,"Date: 03/04/2018"),(0,s.kt)("h2",{id:"status"},"Status"),(0,s.kt)("p",null,"Accepted"),(0,s.kt)("h2",{id:"context"},"Context"),(0,s.kt)("p",null,"We need to define our approach to access-control/authorization."),(0,s.kt)("h2",{id:"decision"},"Decision"),(0,s.kt)("p",null,"Since our users' organizations differ a lot in terms of structures and policies, we\nneed to have a very versatile access control mechanism in place. In the industry, the\nmost used technique employed is role-based access control (RBAC). We base our\nmandatory access control (MAC) mechanism on RBAC, but use the notion of ",(0,s.kt)("em",{parentName:"p"},"intent"),"\ninstead of role (an intent can be executed by exactly one role, thus effectively\nreplacing the role concept)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Intent + Resource = Permission",src:n(453).Z})),(0,s.kt)("h3",{id:"intents"},"Intents"),(0,s.kt)("p",null,'An intent is what the user is trying to achieve, for example, "add a workflow to a\nsubproject". By using intents rather than roles, we side-step the problem found in\nmany projects, where over time developers create similar roles on-the-fly, as from\ntheir point of view the implications of re-using a role are not always clear.\nConversely, intents are always specific to a use case (examples: "create project" or\n"list a project\'s subprojects" rather than "admin" or "user").'),(0,s.kt)("p",null,"While roles ",(0,s.kt)("em",{parentName:"p"},"could"),' be used to bundle intent-execution rights (e.g. have one role\nthat is allowed to execute all "view" intents), we think that those roles would have\nto be managed by organizations themselves (as it will depend on their structure).\nSince in most cases this would mean a 1:1 mapping from role to user group, we skip\nroles altogether.'),(0,s.kt)("h3",{id:"user-groups"},"User Groups"),(0,s.kt)("p",null,"Organizations group their users into ",(0,s.kt)("em",{parentName:"p"},"user groups"),". For any given projects, each\n(resource-specific) intent has a list of user groups assigned to it; all users in the\nassigned groups are then allowed to execute the respective intent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"+-------+               +---------------------+                +---------------+\n| User: | is member of  | Group:              | is allowed to  | Intent:       |\n| Alice +--------------\x3e+ Project Maintainers +---------------\x3e+ Add workflow  |\n|       |               |                     |                | to subproject |\n+-------+               +---------------------+                +---------------+\n")),(0,s.kt)("h3",{id:"implementation-pattern"},"Implementation Pattern"),(0,s.kt)("p",null,"The goal is to enable us to follow a clear pattern for our access control needs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTTP controllers call the domain modules and the authorization module (perhaps using a\nmiddleware), but do not deal with intents or groups."),(0,s.kt)("li",{parentName:"ul"},"Domain modules may interact with the chain to fetch domain objects, and/or prepare\nclosures to be authorized and executed later on. They deal with intents, but not with\nusers or groups."),(0,s.kt)("li",{parentName:"ul"},"Finally, the authorization module ensures that the ",(0,s.kt)("em",{parentName:"li"},"user")," executing the ",(0,s.kt)("em",{parentName:"li"},"intent"),"\nbelongs to a ",(0,s.kt)("em",{parentName:"li"},"group")," that is allowed to do that. In order to decide that, the module\nhas to fetch resource-specific ACLs from the chain.")),(0,s.kt)("p",null,'Modifying ACLs is done in the same way: each resource\'s ACL specifies the groups that\nmay execute the "change this ACL" intent (to be renamed). This hints at the necessity\nto provide ',(0,s.kt)("em",{parentName:"p"},"defaults")," for ACLs when creating resources."),(0,s.kt)("h3",{id:"resource-specific-access-control-lists-acls"},"Resource-specific Access Control Lists (ACLs)"),(0,s.kt)("p",null,"With each resource/stream on the chain, an ACL stream-item is stored that lists for\neach intent the groups allowed to execute that intent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "acl": {\n    "view project": ["all users"],\n  },\n  ...\n}\n')),(0,s.kt)("h2",{id:"consequences"},"Consequences"),(0,s.kt)("p",null,"With the proposed changes in place, our users will be able to impose their respective\norganizational structures onto TruBudget's resources in a way that should be flexible\nenough and straight-forward to integrate with their existing directory servers."))}d.isMDXComponent=!0},453:function(e,t,n){"use strict";t.Z=n.p+"assets/images/0002-access-control-model-c8d551ba4f02bb8e71a2b2ed58b43de7.png"}}]);