"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5919],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:8},s="Git Branching Model",c={unversionedId:"developer/architecture/git-branching-model",id:"developer/architecture/git-branching-model",isDocsHomePage:!1,title:"Git Branching Model",description:"Date: 29/08/2018",source:"@site/docs/developer/architecture/0008-git-branching-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/git-branching-model",permalink:"/docs/developer/architecture/git-branching-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0008-git-branching-model.md",version:"current",lastUpdatedBy:"Mayr Martin",lastUpdatedAt:1655711881,formattedLastUpdatedAt:"6/20/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Basic architecture overview",permalink:"/docs/developer/architecture/execution-architecture-overview"},next:{title:"Migration Model",permalink:"/docs/developer/architecture/migration-model"}},p=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-branching-model"},"Git Branching Model"),(0,o.kt)("p",null,"Date: 29/08/2018"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Currently, branches are used to draft releases. Going forward, the branching model needs to satisfy the following criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Releases need to be tagged to ensure that, given a release name, the commit sha can be inferred."),(0,o.kt)("li",{parentName:"ul"},"We need to support multiple networks (chains), but they are not necessarily running the same version of TruBudget."),(0,o.kt)("li",{parentName:"ul"},"Each network should have its own deployment URL that does not change on non-breaking version updates."),(0,o.kt)("li",{parentName:"ul"},"Conversely, in case of breaking changes, the deployment URL should be changed.")),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"master")," continues to be the main development branch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Releases are tagged using an ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging"},"annotated Git tag")," (optionally ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work"},"signing the tag"),") like this:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git tag -a "v2.0.0-beta.1" -m "version 2.0.0-beta.1"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For each network, there is a Git branch prefixed by the major version the network is running on - ",(0,o.kt)("strong",{parentName:"li"},"major version upgrades are assumed to break compatibility with the network"),". For example, branch names may look like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"1.x.x_my-example-network\n1.x.x_my-other-example-network\n2.x.x_network-running-a-newer-version\n")),(0,o.kt)("p",null,"Note that a branch ",(0,o.kt)("inlineCode",{parentName:"p"},"1.x.x_ACMECorp-UmbrellaCorp")," that is running tag ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0")," may upgrade to a newer minor version like ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.1.0"),", but cannot upgrade to a ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x")," release. If the ACMECorp and the UmbrellaCorp decide to upgrade to the ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x")," series of TruBudget, they need to migrate to a new branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x.x_ACMECorp-UmbrellaCorp"),". The definition of the necessary processes is not in scope of this ADR."),(0,o.kt)("p",null,"Additionally, there is one release branch for each major version that tracks the most current release (tag) for that major version."),(0,o.kt)("p",null,"The steps required for making a new release are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Increase the version number (see #33)."),(0,o.kt)("li",{parentName:"ol"},"Update the CHANGELOG.md file to reflect the release."),(0,o.kt)("li",{parentName:"ol"},"Tag the commit on the master branch (see above)."),(0,o.kt)("li",{parentName:"ol"},"Checkout the release branch of the current major version (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"release_1.x.x"),") and ",(0,o.kt)("inlineCode",{parentName:"li"},"git merge master"),".")),(0,o.kt)("p",null,"As soon as a network is ready to be upgraded to the new version, its branch may be updated:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checkout the network branch, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"1.x.x_my-example-network"),"."),(0,o.kt)("li",{parentName:"ol"},"Merge-in the release branch (or a specific tag), e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"git merge release_1.x.x"),".")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Git history shows when a release happened and who released it. Also, there is no\nconfusion between releases and branches."),(0,o.kt)("li",{parentName:"ul"},"The URL stays the same as long as all nodes in the network are compatible with each other. The URL does change, however, for changes that break compatability among nodes in the network, as this warrants a new major version number."),(0,o.kt)("li",{parentName:"ul"},"It is straightforward to roll out updates to different networks running the same major version of TruBudget.")))}d.isMDXComponent=!0}}]);