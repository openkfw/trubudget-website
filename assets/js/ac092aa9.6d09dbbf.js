"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[24271],{71306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operation-administration/debugging","title":"Debugging TruBudget","description":"This guide should offer some information on how to debug the TruBudget application and deployments, if any issue appears and you are not sure where to start. This might not cover every possible scenario, so if you tried the following steps and are stuck, you could open a new issue and we will try to help.","source":"@site/docs/operation-administration/debugging.md","sourceDirName":"operation-administration","slug":"/operation-administration/debugging","permalink":"/docs/operation-administration/debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/debugging.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Auth Proxy","permalink":"/docs/operation-administration/auth-proxy"},"next":{"title":"Securing communication between nodes","permalink":"/docs/operation-administration/encryption"}}');var s=t(74848),i=t(28453);const r={},a="Debugging TruBudget",u={},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"debugging-trubudget",children:"Debugging TruBudget"})}),"\n",(0,s.jsx)(n.p,{children:"This guide should offer some information on how to debug the TruBudget application and deployments, if any issue appears and you are not sure where to start. This might not cover every possible scenario, so if you tried the following steps and are stuck, you could open a new issue and we will try to help."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Everything is running:"})," Make sure all your components are up and running. Depending on your setup, please check that all TruBudget components haven't crashed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logs:"})," Check the logs of the TruBudget components that are affected. If you're not sure which component is affected start with the api (as most TruBudget logic happens there) and check components one by one. The logs should tell you exactly what went wrong, by showing an error message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configuration:"})," Make sure the components are configured properly. Common configurations to check are: same environment variables in all components (e.g. the ",(0,s.jsx)(n.code,{children:"api"})," and the ",(0,s.jsx)(n.code,{children:"blockchain"})," need the same ",(0,s.jsx)(n.code,{children:"MULTICHAIN_RPC_PASSWORD"}),"), all mandatory environment variables are set, and others."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Communication between components:"})," Make sure the communication between components is working properly, and the correct environment variables are set to enable the communication (especially IPs and ports in this case)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Insufficient resources:"})," Make sure the components are not failing due to insufficient resources. Especially if the node you are using has a lot of data stored, the blockchain and api components (at least) might need more resources (CPU, RAM and storage)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Always use the latest version:"})," Check that you are using the latest available stable version of TruBudget. The issue you are experiencing might have already been addressed and fixed in the newest version."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bugs:"})," If no other option until now applied to your case and you think there is a problem with the TruBudget software, please open a ",(0,s.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/issues/new?assignees=&labels=bug&projects=&template=1.bug.md",children:"bug request"})," in our repository and we will get back to you."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);