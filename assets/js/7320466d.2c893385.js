(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3453],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7491:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:9},l={unversionedId:"developer/architecture/migration-model",id:"developer/architecture/migration-model",isDocsHomePage:!1,title:"Migration Model",description:"Date: 28/11/2018",source:"@site/docs/developer/architecture/0009-migration-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/migration-model",permalink:"/trubudget-website/docs/developer/architecture/migration-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0009-migration-model.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1625755493,formattedLastUpdatedAt:"7/8/2021",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Git Branching Model",permalink:"/trubudget-website/docs/developer/architecture/git-branching-model"},next:{title:"Multi node setup and user management",permalink:"/trubudget-website/docs/developer/architecture/multi-node-setup-and-user-management"}},d=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[{value:"Explanation of the current implementation",id:"explanation-of-the-current-implementation",children:[]},{value:"Subject for change",id:"subject-for-change",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Decision",id:"decision",children:[{value:"TODOs",id:"todos",children:[]}]},{value:"Consequences",id:"consequences",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Date: 28/11/2018"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Draft"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"This ADR discusses how to handle breaking schema changes of the data-model in the context of a distributed application (TruBudget)."),(0,i.kt)("h3",{id:"explanation-of-the-current-implementation"},"Explanation of the current implementation"),(0,i.kt)("p",null,"Data is currently stored in streams. A stream contains none, 1, or multiple items. These items can either represent the complete data-set at time of creation or data change (for example an event). In streams that represent the complete data in every item, the last item represents the current state. In streams where items only contain data changes, the items are sourced from the first to the latest in order to get the current state of the data (event-sourcing)."),(0,i.kt)("p",null,"Items which represent complete data-sets are called ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource"),". Items which contain only data changes are called ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),"."),(0,i.kt)("p",null,"In order to be able to change the interface of ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.dataVersion")," field can be defined describing the interface version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),"."),(0,i.kt)("p",null,"An item of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource")," currently doesn't contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"dataVersion")," field. Furthermore it is generally using ",(0,i.kt)("inlineCode",{parentName:"p"},"HEX")," as a dataformat, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," which is used as dataformat for ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS")," "),(0,i.kt)("p",null,"For items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," the dataVersion is only checked when performing a read requests. When performing a write/publish request to streams containing items from type ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," no check is performed."),(0,i.kt)("h3",{id:"subject-for-change"},"Subject for change"),(0,i.kt)("p",null,"Before the upcoming release we want to unify the dataformats. More precisly the plan is to get rid of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HEX")," dataformat and only use ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),". Hence, we have to introduce a breaking change regarding in our items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource"),". Items created by a node running the new version of Trubudget will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," and can't be read by Nodes running an older version of TruBudget (which is expecting ",(0,i.kt)("inlineCode",{parentName:"p"},"HEX"),")."),(0,i.kt)("p",null,"For changing the dataformat in the current case there is no technical solution, how to gracefully migrate. Hence, we will do it on an organisational level (updating all versions simultanously)."),(0,i.kt)("p",null,"But for future updates we want to be better prepared handling version conflicts between different distributed nodes in a TruBudget network."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("p",null,"In general we need to distinguish on how data is read from the stream."),(0,i.kt)("p",null,"For streams containing items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," and doing event-sourcing the newest version needs to be able to read items of older version. If an older version of a node tries to read a stream which contains items of a newer version, it is not able to do so and returns an error."),(0,i.kt)("p",null,"For streams containing items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource")," only the last element is read. It is pretty much the same: New versions can read stream with items of older versions. But not vice-versa. The only difference is: Since only the last item is read from the stream, old data versions could be migrated resulting in removing source-code which is needed to read the older versions of the item."),(0,i.kt)("p",null,"Things get more complicated for write operations:"),(0,i.kt)("p",null,"For streams containing items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," it makes no sense for a node with the old data-version to write, since it might not be able to read it upfront or afterwards."),(0,i.kt)("p",null,"For streams containing items of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource")," it is pretty much the same."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"Since read and write operation might return errors for nodes running an older dataVersion, these nodes need to be forced to upgrade to a newer version if they still want to participate in the network."),(0,i.kt)("p",null,"This means:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodes with older dataVersion are not allowed to write to streams"),(0,i.kt)("li",{parentName:"ul"},"Nodes with older dataVersion are allowed to read, but might not be able to get the most recent data"),(0,i.kt)("li",{parentName:"ul"},"Items of type ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Ressource")," extend a DataVersion interface"),(0,i.kt)("li",{parentName:"ul"},"The network is aware of all nodes and it's versions (in order to inform them if they run on an old version).")),(0,i.kt)("h3",{id:"todos"},"TODOs"),(0,i.kt)("h4",{id:"change-hex-to-json-format"},"Change Hex to JSON format"),(0,i.kt)("p",null,"Every item, which is written to a stream has ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," as datatype and should extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataVersion")," interface (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Ressource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Vault"),")"),(0,i.kt)("p",null,"Use a DataVersion interface for all three interfaces (Event, Resource, Vault)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface DataVersion {\ndataVersion: number\n}\n\ninterface Resource extends DataVersion {\n....\n}\n\n")),(0,i.kt)("h4",{id:"set-new-version-in-network"},"Set new version in network"),(0,i.kt)("p",null,'We create a multichain stream named "versions" where all dataversion should be saved. On startup every node checks its version and updates the stream if it is higher.'),(0,i.kt)("p",null,"streamname : versions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  keys: ["1"]\n  data: {\n    json: {\n      dataVersion: 1,\n      any: [this is a example of the data-format in this version]\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"track-versions-in-network"},"Track versions in network"),(0,i.kt)("p",null,"We currently track all nodes that have been registered in the network. For every node an item is saved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," stream. We also have to save an item if the node's dataVersion increases to track versions of every node in the network."),(0,i.kt)("p",null,'streamname: nodes\nnode-address: "1axuNPTudeCHHBwhJD5tYtRaaGWGpkTon5qd"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "keys" : [\n            "1axuNPTudeCHHBwhJD5tYtRaaGWGpkTon5qd"\n    ],\n    "data" : {\n        "json" : {\n            "key" : "1axuNPTudeCHHBwhJD5tYtRaaGWGpkTon5qd",\n            "intent" : "network.registerNode",\n            "createdBy" : "<system>",\n            "createdAt" : "2018-11-12T09:57:19.104Z",\n            "dataVersion" : 1,\n            "data" : {\n                "address" : "1axuNPTudeCHHBwhJD5tYtRaaGWGpkTon5qd",\n                "organization" : "ACMECorp"\n            }\n        }\n    }\n}\n')),(0,i.kt)("h4",{id:"prohibit-writing-with-older-version-when-newer-version-is-set"},"Prohibit writing with older version when newer version is set"),(0,i.kt)("p",null,"Before every write operation, the version needs to be checked. The most efficient way to do so is to query the streamkeys with ",(0,i.kt)("inlineCode",{parentName:"p"},"liststreamkeys")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," stream."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an upgraded node might disable all other nodes because nodes with an older version cannot read/write to the multichain in old data-versions"),(0,i.kt)("li",{parentName:"ul"},"all items in any stream have a ",(0,i.kt)("inlineCode",{parentName:"li"},"dataVersion")," field"),(0,i.kt)("li",{parentName:"ul"},"version needs to be checked before every write operation")))}p.isMDXComponent=!0}}]);