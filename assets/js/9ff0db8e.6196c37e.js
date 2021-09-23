(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1145],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2728:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=r(2122),n=r(9756),i=(r(7294),r(3905)),a=["components"],u={sidebar_position:1},s="Contributing to TruBudget",l={unversionedId:"developer/introduction",id:"developer/introduction",isDocsHomePage:!1,title:"Contributing to TruBudget",description:"Thanks for taking the time to contribute!",source:"@site/docs/developer/introduction.md",sourceDirName:"developer",slug:"/developer/introduction",permalink:"/trubudget-website/docs/developer/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/introduction.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1632418294,formattedLastUpdatedAt:"9/23/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example Use Cases",permalink:"/trubudget-website/docs/usecases"},next:{title:"Setup",permalink:"/trubudget-website/docs/developer/developer-setup"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"How to get started with TruBudget",id:"how-to-get-started-with-trubudget",children:[]},{value:"How to ask for support",id:"how-to-ask-for-support",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[{value:"Create an issue",id:"create-an-issue",children:[]},{value:"Open a Pull Request",id:"open-a-pull-request",children:[]},{value:"Don&#39;t forget to update the changelog!",id:"dont-forget-to-update-the-changelog",children:[]}]},{value:"Styleguides",id:"styleguides",children:[{value:"Git Commits",id:"git-commits",children:[]},{value:"Git Branches",id:"git-branches",children:[]},{value:"Git Workflow",id:"git-workflow",children:[]}]},{value:"Architecture Decisions",id:"architecture-decisions",children:[]},{value:"Source Layout",id:"source-layout",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-trubudget"},"Contributing to TruBudget"),(0,i.kt)("p",null,"Thanks for taking the time to contribute!"),(0,i.kt)("p",null,"The following is a set of guidelines for contributing. These are mostly\nguidelines, not rules. Use your best judgment, and feel free to propose changes\nto this document in a pull request."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contributing-to-trubudget"},"Contributing to TruBudget"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-get-started-with-trubudget"},"How to get started with TruBudget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-ask-for-support"},"How to ask for support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-contribute"},"How to contribute"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-an-issue"},"Create an issue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#open-a-pull-request"},"Open a Pull Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dont-forget-to-update-the-changelog"},"Don't forget to update the changelog!")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#styleguides"},"Styleguides"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-commits"},"Git Commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-branches"},"Git Branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-workflow"},"Git Workflow")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#architecture-decisions"},"Architecture Decisions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#source-layout"},"Source Layout"))))),(0,i.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,i.kt)("p",null,"This project and everyone participating in it is governed by our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct"),". By\nparticipating, you are expected to uphold this code. Please report unacceptable\nbehavior to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jzakotnik"},"Jure Zakotnik"),", who is the current project maintainer."),(0,i.kt)("h2",{id:"how-to-get-started-with-trubudget"},"How to get started with TruBudget"),(0,i.kt)("p",null,"If this is your first time starting TruBudget, you should follow the ",(0,i.kt)("a",{parentName:"p",href:"/trubudget-website/docs/developer/developer-setup#developer-setup/"},"Developer Setup")," for setting up the project."),(0,i.kt)("h2",{id:"how-to-ask-for-support"},"How to ask for support"),(0,i.kt)("p",null,"If you need to ask for support feel free to reach out to us on\n","[discussions]",", check out the existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/tree/master/doc"},"documentation")," or create a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("h3",{id:"create-an-issue"},"Create an issue"),(0,i.kt)("p",null,"Feel free to help out if you noticed a bug or if you want to suggest a new feature by simply opening a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue")),(0,i.kt)("h3",{id:"open-a-pull-request"},"Open a Pull Request"),(0,i.kt)("p",null,"When working on a feature, you can open a PR in as soon as you push the first changes. Please make sure you follow these guidelines regarding PRs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that the PR description clearly describes what you are working on"),(0,i.kt)("li",{parentName:"ul"},"If aplicable, mention what issue will be closed with this pull request, by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"Closes #issueNumber")),(0,i.kt)("li",{parentName:"ul"},"Describe how you are planning on implementing the soultion, maybe by creating a TODO list"),(0,i.kt)("li",{parentName:"ul"},'The PR should be in draft mode if you\'re still making some changes. If it is ready to be reviewed then mark it as "Ready for review"')),(0,i.kt)("h3",{id:"dont-forget-to-update-the-changelog"},"Don't forget to update the changelog!"),(0,i.kt)("p",null,"If you make changes that are relevant to the end user you should add an entry in the CHANGELOG.md file, which can be found in the root folder of the project. Before adding to the changelog, you should read these ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"guidelines")),(0,i.kt)("h2",{id:"styleguides"},"Styleguides"),(0,i.kt)("h3",{id:"git-commits"},"Git Commits"),(0,i.kt)("p",null,"When writing commits you should consider the following guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow these ",(0,i.kt)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"git commit guidelines")),(0,i.kt)("li",{parentName:"ul"},"Always include a prefix in the commit message with the abbreviation of the project you're working on (api, bc, doc, UI, e2e-test, excel-export, email-service)"),(0,i.kt)("li",{parentName:"ul"},"When you're only changing the documentation you can include ",(0,i.kt)("inlineCode",{parentName:"li"},"[ci skip]")," in the commit title")),(0,i.kt)("h3",{id:"git-branches"},"Git Branches"),(0,i.kt)("p",null,"When creating a new branch, you should consider the following guidelines regarding branch names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lead with the number of the issue you are working on"),(0,i.kt)("li",{parentName:"ul"},"Add a short description of what the task is about"),(0,i.kt)("li",{parentName:"ul"},"Use hyphens as separators")),(0,i.kt)("h3",{id:"git-workflow"},"Git Workflow"),(0,i.kt)("p",null,"To get an idea about the workflow used in our project you should read this ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/robertpataki/1b70e22d14ef92e1be1338314809b46e"},"how to / git"),".\nSo when working on a feature branch make sure to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Checkout the master branch and pull the recent changes"),(0,i.kt)("li",{parentName:"ol"},"Create a new feature branch respecting the guidelines mentioned above"),(0,i.kt)("li",{parentName:"ol"},"Try to keep the commits separate and respect the guidelines mentioned above. Don't squash the commits into a single one especially if you changed a lot of files"),(0,i.kt)("li",{parentName:"ol"},"Push to the remote repository and open a pull request respecting the guidelines mentioned above"),(0,i.kt)("li",{parentName:"ol"},"Make sure the pipelines are passing"),(0,i.kt)("li",{parentName:"ol"},"Wait for a review. If you need a specific team member to review the PR you can request a review from them and assign them to the PR"),(0,i.kt)("li",{parentName:"ol"},"When your feature is ready make sure you have the latest changes by running ",(0,i.kt)("inlineCode",{parentName:"li"},"$ git pull --rebase origin master")," on your feature branch and push the changes"),(0,i.kt)("li",{parentName:"ol"},"Merge the pull request into master")),(0,i.kt)("h2",{id:"architecture-decisions"},"Architecture Decisions"),(0,i.kt)("p",null,"When we make a significant decision in how to write code, or how to maintain the\nproject and what we can or cannot support, we will document it using ",(0,i.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"Architecture\nDecision Records (ADR)"),". Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/trubudget-website/docs/developer/architecture/intro"},"doc/architecture/decisions")," directory for\nexistings ADRs. If you have a question around how we do things, check to see if it is\ndocumented there. If it is ",(0,i.kt)("em",{parentName:"p"},"not")," documented there, please ask us - chances are you're\nnot the only one wondering. Of course, also feel free to challenge the decisions by\nstarting a discussion on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/discussions"},"GithubDiscussions")," or by opening a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues"},"github issue"),"."),(0,i.kt)("h2",{id:"source-layout"},"Source Layout"),(0,i.kt)("p",null,"Best practices and layout is documented in README files next to the source files they\ndescribe. For example, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/tree/master/api/src"},"api/src/")," to get started."))}d.isMDXComponent=!0}}]);