"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[52689],{77828:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developer/architecture/git-branching-model","title":"Git Branching Model","description":"Date: 29/08/2018","source":"@site/docs/developer/architecture/0008-git-branching-model.md","sourceDirName":"developer/architecture","slug":"/developer/architecture/git-branching-model","permalink":"/docs/developer/architecture/git-branching-model","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0008-git-branching-model.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Basic architecture overview","permalink":"/docs/developer/architecture/execution-architecture-overview"},"next":{"title":"Migration Model","permalink":"/docs/developer/architecture/migration-model"}}');var i=r(74848),s=r(28453);const o={sidebar_position:8},a="Git Branching Model",c={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"git-branching-model",children:"Git Branching Model"})}),"\n",(0,i.jsx)(n.p,{children:"Date: 29/08/2018"}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:"Accepted"}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"Currently, branches are used to draft releases. Going forward, the branching model needs to satisfy the following criteria:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Releases need to be tagged to ensure that, given a release name, the commit sha can be inferred."}),"\n",(0,i.jsx)(n.li,{children:"We need to support multiple networks (chains), but they are not necessarily running the same version of TruBudget."}),"\n",(0,i.jsx)(n.li,{children:"Each network should have its own deployment URL that does not change on non-breaking version updates."}),"\n",(0,i.jsx)(n.li,{children:"Conversely, in case of breaking changes, the deployment URL should be changed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main"})," continues to be the main development branch."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Releases are tagged using an ",(0,i.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging",children:"annotated Git tag"})," (optionally ",(0,i.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work",children:"signing the tag"}),") like this:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git tag -a "v2.0.0-beta.1" -m "version 2.0.0-beta.1"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For each network, there is a Git branch prefixed by the major version the network is running on - ",(0,i.jsx)(n.strong,{children:"major version upgrades are assumed to break compatibility with the network"}),". For example, branch names may look like this:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"1.x.x_my-example-network\n1.x.x_my-other-example-network\n2.x.x_network-running-a-newer-version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that a branch ",(0,i.jsx)(n.code,{children:"1.x.x_ACMECorp-UmbrellaCorp"})," that is running tag ",(0,i.jsx)(n.code,{children:"v1.0.0"})," may upgrade to a newer minor version like ",(0,i.jsx)(n.code,{children:"v1.1.0"}),", but cannot upgrade to a ",(0,i.jsx)(n.code,{children:"2.x"})," release. If the ACMECorp and the UmbrellaCorp decide to upgrade to the ",(0,i.jsx)(n.code,{children:"2.x"})," series of TruBudget, they need to migrate to a new branch called ",(0,i.jsx)(n.code,{children:"2.x.x_ACMECorp-UmbrellaCorp"}),". The definition of the necessary processes is not in scope of this ADR."]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, there is one release branch for each major version that tracks the most current release (tag) for that major version."}),"\n",(0,i.jsx)(n.p,{children:"The steps required for making a new release are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Increase the version number (see #33)."}),"\n",(0,i.jsx)(n.li,{children:"Update the CHANGELOG.md file to reflect the release."}),"\n",(0,i.jsx)(n.li,{children:"Tag the commit on the main branch (see above)."}),"\n",(0,i.jsxs)(n.li,{children:["Checkout the release branch of the current major version (e.g. ",(0,i.jsx)(n.code,{children:"release_1.x.x"}),") and ",(0,i.jsx)(n.code,{children:"git merge main"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As soon as a network is ready to be upgraded to the new version, its branch may be updated:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Checkout the network branch, e.g. ",(0,i.jsx)(n.code,{children:"1.x.x_my-example-network"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Merge-in the release branch (or a specific tag), e.g. ",(0,i.jsx)(n.code,{children:"git merge release_1.x.x"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Git history shows when a release happened and who released it. Also, there is no\nconfusion between releases and branches."}),"\n",(0,i.jsx)(n.li,{children:"The URL stays the same as long as all nodes in the network are compatible with each other. The URL does change, however, for changes that break compatibility among nodes in the network, as this warrants a new major version number."}),"\n",(0,i.jsx)(n.li,{children:"It is straightforward to roll out updates to different networks running the same major version of TruBudget."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);