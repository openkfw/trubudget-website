"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3936],{67567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(85893),o=n(11151);const r={},s="Auth Proxy",a={id:"operation-administration/auth-proxy",title:"Auth Proxy",description:"Motivation",source:"@site/docs/operation-administration/auth-proxy.md",sourceDirName:"operation-administration",slug:"/operation-administration/auth-proxy",permalink:"/docs/operation-administration/auth-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/auth-proxy.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1728052387,formattedLastUpdatedAt:"Oct 4, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture in TruBudget",permalink:"/docs/operation-administration/architecture"},next:{title:"Debugging TruBudget",permalink:"/docs/operation-administration/debugging"}},d={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"auth-proxy",children:"Auth Proxy"}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"Organization's users want to use their credentials for authentication and authorization, but use a TruBudget user account for interacting with the application.\nSince TruBudget's data store is a blockchain, once personal data is entered, it is practically impossible to delete."}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Auth Proxy exchanges a token in the form of a cookie for TruBudget's access token. For this reason, ",(0,i.jsx)(t.strong,{children:"Auth Proxy needs to be registered in the same domain as the deployed TruBudget instance"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"There are several environment variables that need to be set in the api and frontend, if you want to use the Auth Proxy."}),"\n",(0,i.jsx)(t.p,{children:"In the API:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["AUTHPROXY_ENABLED has to be set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"AUTHPROXY_JWS_SIGNATURE is a secret used to verify JWT stored in a cookie received from the Auth Proxy. Has the same value as the secret configured in Auth Proxy."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In the frontend:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["REACT_APP_AUTHPROXY_ENABLED has to be set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["REACT_APP_AUTHPROXY_URL is a URI string of a location where the user is redirected for sign in via proxy. Typically ",(0,i.jsxs)(t.em,{children:["host(",":port",")"]}),(0,i.jsx)(t.code,{children:"/signin"})," on the same domain as TruBudget."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:""})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);