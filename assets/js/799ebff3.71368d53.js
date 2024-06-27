"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[37295],{99795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=t(85893),i=t(11151);const r={sidebar_position:1,sidebar_label:"Introduction"},s="TruBudget-API",d={id:"developer/api-docs/README",title:"TruBudget-API",description:"Api Code Documentation / Exports",source:"@site/docs/developer/api-docs/README.md",sourceDirName:"developer/api-docs",slug:"/developer/api-docs/",permalink:"/docs/developer/api-docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/README.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"How to write documentation for TruBudget",permalink:"/docs/developer/documentation"},next:{title:"Table of Contents",permalink:"/docs/developer/api-docs/modules"}},a={},c=[{value:"Setup",id:"setup",level:2},{value:"Development",id:"development",level:3},{value:"Get started",id:"get-started",level:4},{value:"Run tests",id:"run-tests",level:4},{value:"Build a container",id:"build-a-container",level:4},{value:"Code Structure",id:"code-structure",level:4},{value:"API Swagger documentation",id:"api-swagger-documentation",level:3},{value:"API code documentation",id:"api-code-documentation",level:3},{value:"Environment Variables",id:"environment-variables",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"trubudget-api",children:"TruBudget-API"}),"\n",(0,o.jsxs)(n.p,{children:["Api Code Documentation / ",(0,o.jsx)(n.a,{href:"modules",children:"Exports"})]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,o.jsxs)(n.p,{children:["Check out our ",(0,o.jsx)(n.a,{href:"../doc/adr/",children:"ADRs"})," to learn about our current way of doing things."]}),"\n",(0,o.jsx)(n.h4,{id:"get-started",children:"Get started"}),"\n",(0,o.jsxs)(n.p,{children:["Before starting the API, environment variables have to be set under ",(0,o.jsx)(n.code,{children:".env"})," file. The ",(0,o.jsx)(n.code,{children:".env_example"})," file provides the default/example values for the environment variables. Just make a copy of example file via:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cp .env_example .env\n"})}),"\n",(0,o.jsx)(n.p,{children:"Default values are usually enough to setup a working local Trubudget instance. However you are free to change the variable values under .env file."}),"\n",(0,o.jsx)(n.p,{children:"When not yet provisioned, it's recommended to start the server directly with node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run tsc && npm start\n"})}),"\n",(0,o.jsx)(n.p,{children:"After that, live-reloading doesn't hinder provisioning anymore, plus it's quite convenient, so you might want to use this instead:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(n.h4,{id:"run-tests",children:"Run tests"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm test\n"})}),"\n",(0,o.jsx)(n.h4,{id:"build-a-container",children:"Build a container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker build .\n"})}),"\n",(0,o.jsx)(n.h4,{id:"code-structure",children:"Code Structure"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"./src/README",children:"README"})," under source folder, you can find information about the best practices, code structure and layout for the api."]}),"\n",(0,o.jsx)(n.h3,{id:"api-swagger-documentation",children:"API Swagger documentation"}),"\n",(0,o.jsxs)(n.p,{children:["The documentation is hosted by the API itself. Assuming it's running on your local machine on port 8080, you should see it at ",(0,o.jsx)(n.a,{href:"http://localhost:8080/api/documentation",children:"localhost:8080/api/documentation"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"api-code-documentation",children:"API code documentation"}),"\n",(0,o.jsxs)(n.p,{children:["For code documentation the API is using ",(0,o.jsx)(n.a,{href:"https://typedoc.org",children:"TypeDoc"}),".\nTo generate the documentation in ",(0,o.jsx)(n.code,{children:"docs/developer/api-docs"})," use following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd api\nnpm install\nnpm run build-docs\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After executing the above commands the ",(0,o.jsx)(n.code,{children:"api-docs"})," folder is create in ",(0,o.jsx)(n.code,{children:"docs/developer/api-docs"}),"\nThis folder is used by the project ",(0,o.jsx)(n.a,{href:"https://github.com/openkfw/trubudget-website",children:"trubudget-website"})," to show all documented functions of TruBudget's API.\nTo check out how it looks like in production checkout ",(0,o.jsx)(n.a,{href:"https://trubudget.net/docs/developer/api-docs/modules/",children:"trubudget.net"}),".\nTo locally spin up the trubudget-website with the build-docs folder copy the ",(0,o.jsx)(n.code,{children:"build-docs"})," folder into ",(0,o.jsx)(n.code,{children:"trubudget-website/docs/developer/"})," before starting the website locally with ",(0,o.jsx)(n.code,{children:"npm start"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Currently only domain layer functions are documented. If ",(0,o.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/issues/1164",children:"#1164"})," is resolved the entire api will be documented."]}),"\n",(0,o.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["In TruBudget, we use different environment variables to set credentials as well as configurations of the TruBudget services. The environment variables used in the API can be seen here ",(0,o.jsx)(n.a,{href:"./environment-variables",children:"Environment Variables"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);