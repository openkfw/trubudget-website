"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[77346],{53415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(85893),o=t(11151);const i={},r="Issues during Developer Setup",a={id:"known-issues/dev",title:"Issues during Developer Setup",description:"Docker disables wifi network adapter",source:"@site/docs/known-issues/dev.md",sourceDirName:"known-issues",slug:"/known-issues/dev",permalink:"/docs/known-issues/dev",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/known-issues/dev.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1723038437,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Errors during Local Installation",permalink:"/docs/known-issues/local"},next:{title:"Environment Variables",permalink:"/docs/environment-variables"}},d={},l=[{value:"Docker disables wifi network adapter",id:"docker-disables-wifi-network-adapter",level:2},{value:"Port 8000 is already in use",id:"port-8000-is-already-in-use",level:2},{value:"Port 80 used by PID 4",id:"port-80-used-by-pid-4",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"issues-during-developer-setup",children:"Issues during Developer Setup"}),"\n",(0,s.jsx)(n.h2,{id:"docker-disables-wifi-network-adapter",children:"Docker disables wifi network adapter"}),"\n",(0,s.jsxs)(n.p,{children:["If you install Docker on Windows while using Pulse Secure it's possible that you will experience network issues. The solution is to disable pulse secure to prevent it from disabling your wifi adapter. You can find a detailed solution here: ",(0,s.jsx)(n.a,{href:"https://forums.docker.com/t/wifi-adapter-disabled-when-hyper-v-network-adapter-enabled-native/18063/9",children:"Solution"})," for this issue."]}),"\n",(0,s.jsx)(n.h2,{id:"port-8000-is-already-in-use",children:"Port 8000 is already in use"}),"\n",(0,s.jsx)(n.p,{children:"This means that another process is blocking the port that you want to use for communication. To solve this, you need to find this process and stop it."}),"\n",(0,s.jsx)(n.p,{children:"You can find the process by running"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"netsh http show servicestate\n"})}),"\n",(0,s.jsx)(n.p,{children:"in the Windows Command Prompt (or PowerShell) and looking for the process that is running on port 80 and note down the PID of the proccess.\nIn the task manager, find the process with the PID and end it if it's not needed by the system."}),"\n",(0,s.jsxs)(n.p,{children:["You can find a detailed solution on ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/32873386",children:"Stackoverflow"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"port-80-used-by-pid-4",children:"Port 80 used by PID 4"}),"\n",(0,s.jsxs)(n.p,{children:["This means that there is a system process blocking port 80. If you want to use TruBudget in production, you should find and disable that process. If you want to test TruBudget on your machine, an easy way to fix it is to set the exposed ports in the Yaml file to a different one. Locate the file ",(0,s.jsx)(n.code,{children:"scripts/development/docker-compose.yml"})," and change the following part"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'frontend:\n  build:\n    context: ../../frontend\n  ports:\n    - "80:80" # Mapping the nginx port\n'})}),"\n",(0,s.jsx)(n.p,{children:"to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'frontend:\n  build:\n    context: ../../frontend\n  ports:\n    - "90:80" # Mapping the nginx port\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can access the frontend via ",(0,s.jsx)(n.code,{children:"localhost:90"})," after start."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);