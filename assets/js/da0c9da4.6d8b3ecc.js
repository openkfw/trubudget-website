"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[25919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:8},i="Git Branching Model",l={unversionedId:"developer/architecture/git-branching-model",id:"developer/architecture/git-branching-model",title:"Git Branching Model",description:"Date: 29/08/2018",source:"@site/docs/developer/architecture/0008-git-branching-model.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/git-branching-model",permalink:"/docs/developer/architecture/git-branching-model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0008-git-branching-model.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Basic architecture overview",permalink:"/docs/developer/architecture/execution-architecture-overview"},next:{title:"Migration Model",permalink:"/docs/developer/architecture/migration-model"}},s={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-branching-model"},"Git Branching Model"),(0,a.kt)("p",null,"Date: 29/08/2018"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Currently, branches are used to draft releases. Going forward, the branching model needs to satisfy the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Releases need to be tagged to ensure that, given a release name, the commit sha can be inferred."),(0,a.kt)("li",{parentName:"ul"},"We need to support multiple networks (chains), but they are not necessarily running the same version of TruBudget."),(0,a.kt)("li",{parentName:"ul"},"Each network should have its own deployment URL that does not change on non-breaking version updates."),(0,a.kt)("li",{parentName:"ul"},"Conversely, in case of breaking changes, the deployment URL should be changed.")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"main")," continues to be the main development branch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Releases are tagged using an ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging"},"annotated Git tag")," (optionally ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work"},"signing the tag"),") like this:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git tag -a "v2.0.0-beta.1" -m "version 2.0.0-beta.1"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For each network, there is a Git branch prefixed by the major version the network is running on - ",(0,a.kt)("strong",{parentName:"li"},"major version upgrades are assumed to break compatibility with the network"),". For example, branch names may look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"1.x.x_my-example-network\n1.x.x_my-other-example-network\n2.x.x_network-running-a-newer-version\n")),(0,a.kt)("p",null,"Note that a branch ",(0,a.kt)("inlineCode",{parentName:"p"},"1.x.x_ACMECorp-UmbrellaCorp")," that is running tag ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.0.0")," may upgrade to a newer minor version like ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.0"),", but cannot upgrade to a ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x")," release. If the ACMECorp and the UmbrellaCorp decide to upgrade to the ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x")," series of TruBudget, they need to migrate to a new branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x.x_ACMECorp-UmbrellaCorp"),". The definition of the necessary processes is not in scope of this ADR."),(0,a.kt)("p",null,"Additionally, there is one release branch for each major version that tracks the most current release (tag) for that major version."),(0,a.kt)("p",null,"The steps required for making a new release are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Increase the version number (see #33)."),(0,a.kt)("li",{parentName:"ol"},"Update the CHANGELOG.md file to reflect the release."),(0,a.kt)("li",{parentName:"ol"},"Tag the commit on the main branch (see above)."),(0,a.kt)("li",{parentName:"ol"},"Checkout the release branch of the current major version (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"release_1.x.x"),") and ",(0,a.kt)("inlineCode",{parentName:"li"},"git merge main"),".")),(0,a.kt)("p",null,"As soon as a network is ready to be upgraded to the new version, its branch may be updated:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Checkout the network branch, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"1.x.x_my-example-network"),"."),(0,a.kt)("li",{parentName:"ol"},"Merge-in the release branch (or a specific tag), e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"git merge release_1.x.x"),".")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Git history shows when a release happened and who released it. Also, there is no\nconfusion between releases and branches."),(0,a.kt)("li",{parentName:"ul"},"The URL stays the same as long as all nodes in the network are compatible with each other. The URL does change, however, for changes that break compatibility among nodes in the network, as this warrants a new major version number."),(0,a.kt)("li",{parentName:"ul"},"It is straightforward to roll out updates to different networks running the same major version of TruBudget.")))}d.isMDXComponent=!0}}]);