"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1145],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:1},l="Contributing to TruBudget",s={unversionedId:"developer/introduction",id:"developer/introduction",isDocsHomePage:!1,title:"Contributing to TruBudget",description:"Thanks for taking the time to contribute!",source:"@site/docs/developer/introduction.md",sourceDirName:"developer",slug:"/developer/introduction",permalink:"/docs/developer/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/introduction.md",version:"current",lastUpdatedBy:"jzakotnik",lastUpdatedAt:1660562677,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example Use Cases",permalink:"/docs/usecases"},next:{title:"Setup",permalink:"/docs/developer/developer-setup"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"How to get started with TruBudget",id:"how-to-get-started-with-trubudget",children:[]},{value:"How to ask for support",id:"how-to-ask-for-support",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[{value:"Create an issue",id:"create-an-issue",children:[]},{value:"Open a Pull Request",id:"open-a-pull-request",children:[]},{value:"Don&#39;t forget to update the changelog!",id:"dont-forget-to-update-the-changelog",children:[]}]},{value:"Styleguides",id:"styleguides",children:[{value:"Git Commits",id:"git-commits",children:[]},{value:"Git Branches",id:"git-branches",children:[]},{value:"Git Workflow",id:"git-workflow",children:[]}]},{value:"Architecture Decisions",id:"architecture-decisions",children:[]},{value:"Source Layout",id:"source-layout",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-trubudget"},"Contributing to TruBudget"),(0,i.kt)("p",null,"Thanks for taking the time to contribute!"),(0,i.kt)("p",null,"The following is a set of guidelines for contributing. These are mostly\nguidelines, not rules. Use your best judgment, and feel free to propose changes\nto this document in a pull request."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contributing-to-trubudget"},"Contributing to TruBudget"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-get-started-with-trubudget"},"How to get started with TruBudget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-ask-for-support"},"How to ask for support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-contribute"},"How to contribute"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-an-issue"},"Create an issue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#open-a-pull-request"},"Open a Pull Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dont-forget-to-update-the-changelog"},"Don't forget to update the changelog!")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#styleguides"},"Styleguides"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-commits"},"Git Commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-branches"},"Git Branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-workflow"},"Git Workflow")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#architecture-decisions"},"Architecture Decisions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#source-layout"},"Source Layout"))))),(0,i.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,i.kt)("p",null,"This project and everyone participating in it is governed by our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/CODE_OF_CONDUCT.md"},"Code of Conduct"),". By\nparticipating, you are expected to uphold this code. Please report unacceptable\nbehavior to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jzakotnik"},"Jure Zakotnik"),", who is the current project maintainer."),(0,i.kt)("h2",{id:"how-to-get-started-with-trubudget"},"How to get started with TruBudget"),(0,i.kt)("p",null,"If this is your first time starting TruBudget, you should follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/developer-setup#developer-setup/"},"Developer Setup")," for setting up the project."),(0,i.kt)("h2",{id:"how-to-ask-for-support"},"How to ask for support"),(0,i.kt)("p",null,"If you need to ask for support feel free to reach out to us on\n","[discussions]",", check out the existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/tree/main/doc"},"documentation")," or create a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("h3",{id:"create-an-issue"},"Create an issue"),(0,i.kt)("p",null,"Feel free to help out if you noticed a bug or if you want to suggest a new feature by simply opening a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue")),(0,i.kt)("h3",{id:"open-a-pull-request"},"Open a Pull Request"),(0,i.kt)("p",null,"When working on a feature, you can open a PR in as soon as you push the first changes. Please make sure you follow these guidelines regarding PRs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that the PR description clearly describes what you are working on"),(0,i.kt)("li",{parentName:"ul"},"If aplicable, mention what issue will be closed with this pull request, by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"Closes #issueNumber")),(0,i.kt)("li",{parentName:"ul"},"Describe how you are planning on implementing the soultion, maybe by creating a TODO list"),(0,i.kt)("li",{parentName:"ul"},'The PR should be in draft mode if you\'re still making some changes. If it is ready to be reviewed then mark it as "Ready for review"')),(0,i.kt)("h3",{id:"dont-forget-to-update-the-changelog"},"Don't forget to update the changelog!"),(0,i.kt)("p",null,"If you make changes that are relevant to the end user you should add an entry in the CHANGELOG.md file, which can be found in the root folder of the project. Before adding to the changelog, you should read these ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"guidelines")),(0,i.kt)("h2",{id:"styleguides"},"Styleguides"),(0,i.kt)("h3",{id:"git-commits"},"Git Commits"),(0,i.kt)("p",null,"When writing commits you should consider the following guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow these ",(0,i.kt)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"git commit guidelines")),(0,i.kt)("li",{parentName:"ul"},"Always include a prefix in the commit message with the abbreviation of the project you're working on (api, bc, doc, UI, e2e-test, excel-export, email-service)"),(0,i.kt)("li",{parentName:"ul"},"When you're only changing the documentation you can include ",(0,i.kt)("inlineCode",{parentName:"li"},"[ci skip]")," in the commit title")),(0,i.kt)("h3",{id:"git-branches"},"Git Branches"),(0,i.kt)("p",null,"When creating a new branch, you should consider the following guidelines regarding branch names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lead with the number of the issue you are working on"),(0,i.kt)("li",{parentName:"ul"},"Add a short description of what the task is about"),(0,i.kt)("li",{parentName:"ul"},"Use hyphens as separators")),(0,i.kt)("h3",{id:"git-workflow"},"Git Workflow"),(0,i.kt)("p",null,"To get an idea about the workflow used in our project you should read this ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/robertpataki/1b70e22d14ef92e1be1338314809b46e"},"how to / git"),".\nSo when working on a feature branch make sure to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Checkout the main branch and pull the recent changes"),(0,i.kt)("li",{parentName:"ol"},"Create a new feature branch respecting the guidelines mentioned above"),(0,i.kt)("li",{parentName:"ol"},"Try to keep the commits separate and respect the guidelines mentioned above. Don't squash the commits into a single one especially if you changed a lot of files"),(0,i.kt)("li",{parentName:"ol"},"Push to the remote repository and open a pull request respecting the guidelines mentioned above"),(0,i.kt)("li",{parentName:"ol"},"Make sure the pipelines are passing"),(0,i.kt)("li",{parentName:"ol"},"Wait for a review. If you need a specific team member to review the PR you can request a review from them and assign them to the PR"),(0,i.kt)("li",{parentName:"ol"},"When your feature is ready make sure you have the latest changes by running ",(0,i.kt)("inlineCode",{parentName:"li"},"$ git pull --rebase origin main")," on your feature branch and push the changes"),(0,i.kt)("li",{parentName:"ol"},"Merge the pull request into main")),(0,i.kt)("h2",{id:"architecture-decisions"},"Architecture Decisions"),(0,i.kt)("p",null,"When we make a significant decision in how to write code, or how to maintain the\nproject and what we can or cannot support, we will document it using ",(0,i.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"Architecture\nDecision Records (ADR)"),". Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/architecture/intro"},"doc/architecture/decisions")," directory for\nexistings ADRs. If you have a question around how we do things, check to see if it is\ndocumented there. If it is ",(0,i.kt)("em",{parentName:"p"},"not")," documented there, please ask us - chances are you're\nnot the only one wondering. Of course, also feel free to challenge the decisions by\nstarting a discussion on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/discussions"},"GithubDiscussions")," or by opening a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue"),"."),(0,i.kt)("h2",{id:"source-layout"},"Source Layout"),(0,i.kt)("p",null,"Best practices and layout is documented in README files next to the source files they\ndescribe. For example, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/tree/main/api/src"},"api/src/")," to get started."))}h.isMDXComponent=!0}}]);