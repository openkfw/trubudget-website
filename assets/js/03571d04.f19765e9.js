"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[81351],{59817:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"developer/architecture/snapshot-logic","title":"Snapshots of aggregable items in Blockchain","description":"Date: 06/11/2023","source":"@site/docs/developer/architecture/0013-snapshot-logic.md","sourceDirName":"developer/architecture","slug":"/developer/architecture/snapshot-logic","permalink":"/docs/developer/architecture/snapshot-logic","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0013-snapshot-logic.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Node Status","permalink":"/docs/developer/architecture/node-connection-info"},"next":{"title":"Load and stress tests","permalink":"/docs/developer/load-tests"}}');var i=s(74848),a=s(28453);const r={sidebar_position:13},o="Snapshots of aggregable items in Blockchain",d={},c=[{value:"Status",id:"status",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Context",id:"context",level:2},{value:"Current implementation with in-memory caching",id:"current-implementation-with-in-memory-caching",level:3},{value:"Decision",id:"decision",level:2},{value:"Event Data Model",id:"event-data-model",level:3},{value:"Common event data",id:"common-event-data",level:4},{value:"Item specific event data",id:"item-specific-event-data",level:4},{value:"Planned implementation with Snapshot logic",id:"planned-implementation-with-snapshot-logic",level:3},{value:"Create and Update requests",id:"create-and-update-requests",level:4},{value:"Get Requests",id:"get-requests",level:4},{value:"Performance metrics on loading times",id:"performance-metrics-on-loading-times",level:2},{value:"Test with 40<del>50 projects, 800</del>1000 subprojects and 16000~20000 workflowitems",id:"test-with-4050-projects-8001000-subprojects-and-1600020000-workflowitems",level:4},{value:"Test with 70<del>80 projects, 1400</del>1600 subprojects and 28000~32000 workflowitems",id:"test-with-7080-projects-14001600-subprojects-and-2800032000-workflowitems",level:4},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"snapshots-of-aggregable-items-in-blockchain",children:"Snapshots of aggregable items in Blockchain"})}),"\n",(0,i.jsx)(t.p,{children:"Date: 06/11/2023"}),"\n",(0,i.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(t.p,{children:"Accepted"}),"\n",(0,i.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Term"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Aggregables/Aggregable item"}),(0,i.jsx)(t.td,{children:"This term refers to projects, subprojects or/and workflowitems"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Snapshot"}),(0,i.jsx)(t.td,{children:"Snapshot is a data model containing the latest state of an aggregable item"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(t.p,{children:"Currently when aggregable items such as projects, subprojects and workflow items are fetched via Api, they are stored in a cache, which is basically an in-memory storage of the Node.js application. Since there is no cache invalidation, the impact on the memory becomes a concern when the number of aggregable items increase over time. We want to be able to still use some form of caching to reduce the memory impact and the data sent over the network by blockchain, but also for the sake of minimalist design, we want to avoid introducing more middleware applications that perform caching operations."}),"\n",(0,i.jsx)(t.h3,{id:"current-implementation-with-in-memory-caching",children:"Current implementation with in-memory caching"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Overview of in-memory caching",src:s(89005).A+"",width:"1006",height:"413"})}),"\n",(0,i.jsx)(t.p,{children:'The diagram above explains how the in-memory caching works in TruBudget. Aside from working similar to a simple cache, the step "Update Cache" has the most impact on the performance of the application. When any aggregable item is requested from the blockchain, the cache fetches all of the available aggregable items and updates the whole cache storage. For example, if requested project is not found in cache storage, the whole cache will be updated including projects, subprojects and workflow items. This results in unnecessary amounts of data processing and data transfer size over the network.'}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(t.p,{children:["In order to reduce application memory load, in-memory cache will be removed with an alternative solution without the help of a middleware application. For this we are utilizing the blockchain on-chain storage. A new type of event for each aggregable item will be created with a ",(0,i.jsx)(t.code,{children:"_snapshot_published"})," suffix. The data stored in this event is called a snapshot."]}),"\n",(0,i.jsx)(t.h3,{id:"event-data-model",children:"Event Data Model"}),"\n",(0,i.jsx)(t.h4,{id:"common-event-data",children:"Common event data"}),"\n",(0,i.jsx)(t.p,{children:"Each snapshot event consists of the following common fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Fields"})})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"type"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"source"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"time"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"publisher"})})]})]}),"\n",(0,i.jsx)(t.h4,{id:"item-specific-event-data",children:"Item specific event data"}),"\n",(0,i.jsx)(t.p,{children:"In addition to the common fields, following fields for given events are present:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"project_snapshot_published"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Fields"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"project*"})})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"subproject_snapshot_published"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Fields"})})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"projectId"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"subproject*"})})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"workflowitem_snapshot_published"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Fields"})})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"projectId"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"subprojectId"})}),(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"workflowitem*"})})]})]}),"\n",(0,i.jsx)(t.p,{children:"With * marked fields are aggregable objects that contain the latest event and item data relevant to the item type. Below you can find more info about how these objects are created and the workflow."}),"\n",(0,i.jsx)(t.h3,{id:"planned-implementation-with-snapshot-logic",children:"Planned implementation with Snapshot logic"}),"\n",(0,i.jsx)(t.h4,{id:"create-and-update-requests",children:"Create and Update requests"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Overview of snapshot logic 2",src:s(72823).A+"",width:"837",height:"452"}),"\nWhen Api receives a request which modifies or creates an aggregable item, it checks if a snapshot for the aggregable item exists. If there is no snapshot available (creation scenario), we create a snapshot with the most up-to-date aggregable data. (e.g if we are creating a project, snapshot would contain the created project data.) If there is a snapshot, the api checks for the following condition:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Did at least 3 events happened after the last snapshot event? (Roughly translates to "Did the item state change at least 3 times since last snapshot?")'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If yes, we make a new snapshot event by applying all event data that happened since last snapshot event on top of the last snapshot including the current event."}),"\n",(0,i.jsx)(t.p,{children:"If no, we apply the event/requested change normally and no snapshots are made."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The event number (by default 3) in the above condition is an environment variable which can be changed per deployment."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"get-requests",children:"Get Requests"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Overview of snapshot logic 1",src:s(37279).A+"",width:"835",height:"454"})}),"\n",(0,i.jsx)(t.p,{children:"Workflow for Get requests are a bit different. Api checks as usual if a snapshot for the aggregable item exists. It then checks if the received snapshot is actually the latest event that was applied to the aggregable item. If it is, this means the snapshot contains the latest up-to-date state of the aggregable. If the latest event is not a snapshot event for the aggregable, then all the events after the latest snapshot event are applied in order to the latest snapshot data and served back from the Api as the up-to-date aggregable data."}),"\n",(0,i.jsx)(t.h2,{id:"performance-metrics-on-loading-times",children:"Performance metrics on loading times"}),"\n",(0,i.jsx)(t.p,{children:"Below are metrics for average request durations over the network on each aggregable items."}),"\n",(0,i.jsxs)(t.h4,{id:"test-with-4050-projects-8001000-subprojects-and-1600020000-workflowitems",children:["Test with 40",(0,i.jsx)(t.del,{children:"50 projects, 800"}),"1000 subprojects and 16000~20000 workflowitems"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"In-memory Caching"}),(0,i.jsx)(t.th,{children:"Blockchain Snapshot"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Projects"}),(0,i.jsx)(t.td,{children:"607.89ms"}),(0,i.jsx)(t.td,{children:"633.11ms"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Subprojects"}),(0,i.jsx)(t.td,{children:"541.56ms"}),(0,i.jsx)(t.td,{children:"95.55ms"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Workflow items"}),(0,i.jsx)(t.td,{children:"496.76ms"}),(0,i.jsx)(t.td,{children:"492.41ms"})]})]})]}),"\n",(0,i.jsxs)(t.h4,{id:"test-with-7080-projects-14001600-subprojects-and-2800032000-workflowitems",children:["Test with 70",(0,i.jsx)(t.del,{children:"80 projects, 1400"}),"1600 subprojects and 28000~32000 workflowitems"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"In-memory Caching"}),(0,i.jsx)(t.th,{children:"Blockchain Snapshot"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Projects"}),(0,i.jsx)(t.td,{children:"848.24ms"}),(0,i.jsx)(t.td,{children:"1.19s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Subprojects"}),(0,i.jsx)(t.td,{children:"967.36ms"}),(0,i.jsx)(t.td,{children:"98.98ms"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Workflow items"}),(0,i.jsx)(t.td,{children:"1.09s"}),(0,i.jsx)(t.td,{children:"228.92ms"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(t.p,{children:"Despite significantly reduced load on the application memory and reduced loading times, we now have an increased amount of network requests due to fetching of snapshots, which means slightly higher chances of network-caused errors occurring when displaying projects, subprojects and workflowitems."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},89005:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/0013-in-memory-caching-d7622672865f85c109241d6d08054652.png"},37279:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/0013-snapshot-logic-1-dfdeb2bdabefa8439c2b8d0201255558.png"},72823:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/0013-snapshot-logic-2a-73246fe443a9d721f828a6815b4eb269.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);