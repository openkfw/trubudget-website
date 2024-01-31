"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13971],{45502:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=i(85893),o=i(11151);const l={},r="Workflowitems",s={id:"user-guide/projects/workflowitem",title:"Workflowitems",description:"- Workflowitems",source:"@site/docs/user-guide/projects/workflowitem.md",sourceDirName:"user-guide/projects",slug:"/user-guide/projects/workflowitem",permalink:"/docs/user-guide/projects/workflowitem",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/projects/workflowitem.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1706714720,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subproject",permalink:"/docs/user-guide/projects/subproject"},next:{title:"Nodes",permalink:"/docs/user-guide/network/nodes"}},d={},c=[{value:"View workflowitems",id:"view-workflowitems",level:2},{value:"View workflowitem details",id:"view-workflowitem-details",level:2},{value:"Create a workflowitem",id:"create-a-workflowitem",level:2},{value:"Update a workflowitem",id:"update-a-workflowitem",level:2},{value:"Update multiple workflowitems",id:"update-multiple-workflowitems",level:2},{value:"Assign an User/Group to a workflowitem",id:"assign-an-usergroup-to-a-workflowitem",level:2},{value:"Close workflowitem",id:"close-workflowitem",level:2},{value:"View and filter the history of a workflowitem",id:"view-and-filter-the-history-of-a-workflowitem",level:2},{value:"Reorder Workflowitems",id:"reorder-workflowitems",level:2},{value:"Documents in TruBudget",id:"documents-in-trubudget",level:2},{value:"Add document to workflowitem",id:"add-document-to-workflowitem",level:3},{value:"Download document from workflowitem (Since Trubudget-v1.10.0)",id:"download-document-from-workflowitem-since-trubudget-v1100",level:3},{value:"Validate a document",id:"validate-a-document",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"workflowitems",children:"Workflowitems"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#workflowitems",children:"Workflowitems"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#view-workflowitems",children:"View workflowitems"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#view-workflowitem-details",children:"View workflowitem details"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#create-a-workflowitem",children:"Create a workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#update-a-workflowitem",children:"Update a workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#update-multiple-workflowitems",children:"Update multiple workflowitems"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#assign-an-usergroup-to-a-workflowitem",children:"Assign an User/Group to a workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#close-workflowitem",children:"Close workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#view-and-filter-the-history-of-a-workflowitem",children:"View and filter the history of a workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#reorder-workflowitems",children:"Reorder Workflowitems"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#documents-in-trubudget",children:"Documents in TruBudget"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#add-document-to-workflowitem",children:"Add document to workflowitem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#download-document-from-workflowitem-since-trubudget-v1100",children:"Download document from workflowitem (Since Trubudget-v1.10.0)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#validate-a-document",children:"Validate a document"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Workflowitems are the lowest level of abstraction in TruBudget. Workflowitems are steps/task that need to be fulfilled\nto mark a suproject as done, like Budget allocation, Tender publication, Contract signature, Payment final\ninstallment,.."}),"\n",(0,n.jsx)(t.p,{children:"There are some different permissions which affect workflowitems."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"workflowitem.intent.listPermissions"}),"\n",(0,n.jsx)(t.li,{children:"workflowitem.intent.grantPermission"}),"\n",(0,n.jsx)(t.li,{children:"workflowitem.intent.revokePermission"}),"\n",(0,n.jsx)(t.li,{children:"workflowitem.list"}),"\n",(0,n.jsx)(t.li,{children:"workflowitem.assign"}),"\n",(0,n.jsx)(t.li,{children:"workflowitem.update"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["More details about the permission model can be found in the ",(0,n.jsx)(t.a,{href:"../users-and-groups/permissions",children:"Permissions section"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"view-workflowitems",children:"View workflowitems"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"View all workflowitems of the current subproject."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n",(0,n.jsx)(t.li,{children:"At the bottom half of the site all workflowitems of the current subproject are viewed."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Workflowitems are viewed as redacted if the user has no permission to view it."})}),"\n",(0,n.jsx)(t.h2,{id:"view-workflowitem-details",children:"View workflowitem details"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"View details like budget or task status of a subproject."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject"}),"\n",(0,n.jsx)(t.li,{children:"Click the info icon on the left side of the workflowitem's title to open the info dialog"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"view workflowitem details",src:i(18661).Z+"",width:"3026",height:"1422"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:'[Optional] Click the "validate"-button to select a document which should be compared with the uploaded one.'}),"\n",(0,n.jsx)(t.li,{children:'[Optional] Depending on the document validation the validate icon shows "OK" or "NOT OK"'}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Most of the details are shown in the workflowitems-list on the subprojects overview."}),"\n",(0,n.jsx)(t.li,{children:"It is possible to validate if an uploaded document is the same the user has locally."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"create-a-workflowitem",children:"Create a workflowitem"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Create a new workflowitem defining title, comment, currency and budget. It is also possible to attach documents to the\nworkflowitem."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n",(0,n.jsx)(t.li,{children:"Click the '+' button on the right to open the creation dialog"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create workflowitem",src:i(7848).Z+"",width:"1901",height:"816"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Fill in the required fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Workflowitem type: Workflowitems behave differently according to their type","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"general: A workflowitem of type general will be created"}),"\n",(0,n.jsx)(t.li,{children:"restricted: When assigning a restricted workflowitem permissions are automatically granted and revoked. The\nassigner will only keep the view permissions."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'"Workflow Title": Title of the workflowitem'}),"\n",(0,n.jsx)(t.li,{children:'"Comment": A little description or comment referring to the workflowitem'}),"\n",(0,n.jsxs)(t.li,{children:["Budget:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Not applicable: The workflowitem does not affect the budget of the subproject"}),"\n",(0,n.jsx)(t.li,{children:"allocated: The workflowitem will affect the budget of the subproject but the budget is not disbursed yet"}),"\n",(0,n.jsx)(t.li,{children:"disbursed: The workflowitem affect the budget of the subproject"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'"Currency": Currency of the workflowitem'}),"\n",(0,n.jsx)(t.li,{children:'"Workflow budget amount": Assigned budget to the workflowitem'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create workflowitem",src:i(28330).Z+"",width:"1914",height:"810"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsx)(t.li,{children:'[Optional] Click the "Next"-button to switch to the next dialog where documents can be uploaded'}),"\n",(0,n.jsxs)(t.li,{children:["[Optional] Fill in the required fields:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Document Name": A unique name of the document'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'[Optional] Click the "Upload"-button to open the file selector.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"upload document",src:i(24675).Z+"",width:"1912",height:"810"})}),"\n",(0,n.jsxs)(t.ol,{start:"10",children:["\n",(0,n.jsx)(t.li,{children:"[Optional] Select the document which should be uploaded"}),"\n",(0,n.jsx)(t.li,{children:"[Optional] All documents can now be seen above the input field"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Submit"-button to create a new workflowitem'}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The root user may not create workflowitems."}),"\n",(0,n.jsx)(t.li,{children:"Do not forget to permit other users to view/edit the newly created workflowitem."}),"\n",(0,n.jsx)(t.li,{children:"It is possible to add more than one documents to a workflowitem."}),"\n",(0,n.jsx)(t.li,{children:"It is not possible to remove/delete documents."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"update-a-workflowitem",children:"Update a workflowitem"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Update details like title, comment, currency and budget of a workflowitem. It is also possible to attach documents to\nthe workflowitem."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click the "Projects" menu point'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click the pen icon next to the assignee field of the worklfowitem which shall be updated"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Fill in the fields that shall be updated:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Workflow Title": Title of the workflowitem'}),"\n",(0,n.jsx)(t.li,{children:'"Comment": A little description or comment referring to the workflowitem'}),"\n",(0,n.jsxs)(t.li,{children:["Budget:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Not applicable: The workflowitem does not affect the budget of the subproject"}),"\n",(0,n.jsx)(t.li,{children:"allocated: The workflowitem will affect the budget of the subproject but the budget is not disbursed yet"}),"\n",(0,n.jsx)(t.li,{children:"disbursed: The workflowitem affect the budget of the subproject"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'"Currency": Currency of the workflowitem'}),"\n",(0,n.jsx)(t.li,{children:'"Workflow budget amount": Assigned budget to the workflowitem'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'[Optional] Click the "Next"-button to switch to the next dialog where documents can be uploaded'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"[Optional] Fill in the required fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Document Name": A unique name of the document'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'[Optional] Click the "Upload"-button to open the file selector.'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"[Optional] Select the document which should be uploaded"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"[Optional] All documents can now be seen above the input field"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click the "Submit"-button to update the workflowitem'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The pen icon can only be viewed if the current user has update permissions."}),"\n",(0,n.jsx)(t.li,{children:"The pen icon disappear if the workflowitem is closed"}),"\n",(0,n.jsx)(t.li,{children:"It is not possible to remove/delete documents."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"update-multiple-workflowitems",children:"Update multiple workflowitems"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Update assignee or workflowitem-permissions for multiple workflowitems at once."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Edit"-button on the left above the workflowitems-list to switch into "Edit"-mode'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"enter &quot;edit&quot;-mode",src:i(28264).Z+"",width:"2740",height:"1484"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:"Select the workflowitems which should be edited by checking the checkboxes to the left of each workflowitem"}),"\n",(0,n.jsx)(t.li,{children:"By selecting one or more workflowitems a side menu opens to the right"}),"\n",(0,n.jsx)(t.li,{children:"[Optional] Click the assignee dropdown field to open a selection where the right user or group can be selected"}),"\n",(0,n.jsx)(t.li,{children:"[Optional] Click on one permission dropdown field to open a selection where the right user or group can be selected"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Update"-button at the top of the side menu to open a preview of all actions the update will trigger.\nActions are differentiated between "possible" and "not possible" actions. "Not possible" actions are assign intents\non closed workflowitems only.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"update selected workflowitems",src:i(29314).Z+"",width:"2740",height:"1484"})}),"\n",(0,n.jsxs)(t.ol,{start:"11",children:["\n",(0,n.jsx)(t.li,{children:'Click on "Submit" to start the update process, which can be followed by the preview'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"update workflowitems preview",src:i(81341).Z+"",width:"2740",height:"1386"})}),"\n",(0,n.jsxs)(t.ol,{start:"12",children:["\n",(0,n.jsx)(t.li,{children:'Click on "Done" to close the dialog and exit "edit"-mode'}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only assignee or permissions can be updated at once."}),"\n",(0,n.jsx)(t.li,{children:"Permissions of identities that are not selected except the one of the current user are revoked during the process"}),"\n",(0,n.jsx)(t.li,{children:'"Not possible" actions are assign intents on closed workflowitems only.'}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"assign-an-usergroup-to-a-workflowitem",children:"Assign an User/Group to a workflowitem"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Assign a User or Group to a workflowitem to show which User or Group is responsible for it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n",(0,n.jsx)(t.li,{children:"Click the assignee dropdown field of a workflowitem in the bottom list to open a selection"}),"\n",(0,n.jsxs)(t.li,{children:["Select and click on an user or group to open a ",(0,n.jsx)(t.a,{href:"../confirmation",children:"confirmation dialog"})]}),"\n",(0,n.jsx)(t.li,{children:"In case the assigner has no project view permissions the user or group cannot be assigned"}),"\n",(0,n.jsx)(t.li,{children:"Confirming the dialog first executes all additional actions listed if there are any, then assigns the user"}),"\n",(0,n.jsx)(t.li,{children:"If no additional permissions have to be granted the user or group is assigned"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"change workflowitem assignee",src:i(97866).Z+"",width:"2878",height:"1234"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Assigning a user/group needs project, subproject and workflowitem view permissions."}),"\n",(0,n.jsxs)(t.li,{children:["If the assignee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they can be granted if the assigner has grant permissions. (see ",(0,n.jsx)(t.a,{href:"../confirmation",children:"confirmation"})," for more\nDetails)"]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"close-workflowitem",children:"Close workflowitem"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Close a workflowitem when the work is done."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject"}),"\n",(0,n.jsx)(t.li,{children:"Click the done-button on the most right of the workflowitem you want to close"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"close workflowitem",src:i(34809).Z+"",width:"3026",height:"1422"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Workflowitems can only be closed one after each other."}),"\n",(0,n.jsx)(t.li,{children:"A workflowitem can only be closed if the user is assigned."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"view-and-filter-the-history-of-a-workflowitem",children:"View and filter the history of a workflowitem"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"The history for each workflowitem can be found in its details dialog. The history contains a chronological list of\nchanges of the selected workflowitem, starting with the newest.\nThe entries in the history can be filtered by 4 different values: publisher, type of event, a start date and a end date,\nwhere a timeframe can be determined. By clicking the search button, all values that are specified are used in the filter\nrequest."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Click on the "i" (information) button of the workflowitem\nto ',(0,n.jsx)(t.a,{href:"#view-workflowitem-details",children:"view the workflowitem details"}),"\n",(0,n.jsx)(t.img,{alt:"view workflowitem details",src:i(18661).Z+"",width:"3026",height:"1422"})]}),"\n",(0,n.jsxs)(t.li,{children:['Navigate to the "History" tab\n',(0,n.jsx)(t.img,{alt:"view the history tab",src:i(28916).Z+"",width:"5120",height:"2400"})]}),"\n",(0,n.jsx)(t.li,{children:"You can now view the history of the selected workflowitem"}),"\n",(0,n.jsxs)(t.li,{children:["To filter the history events, click on the expandable filter area and set the filter options\n",(0,n.jsx)(t.img,{alt:"filter workflowitem history",src:i(47170).Z+"",width:"1685",height:"836"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"reorder-workflowitems",children:"Reorder Workflowitems"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"If workflowitems are not closed or redacted( user has no view permission) the user can reorder them."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(t.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(t.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(t.li,{children:"Click the grey magnifier icon on the most right of the subproject"}),"\n",(0,n.jsx)(t.li,{children:'Click the "edit"-button on the left above the workflowitems-list to switch into "edit"-mode'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"enter &quot;edit&quot;-mode",src:i(28264).Z+"",width:"2740",height:"1484"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:"Click and pull a workflowitem to the new position in the workflowitem queue"}),"\n",(0,n.jsx)(t.li,{children:'When finished reordering submit the change and exit "edit"-mode with a click on the "done"-icon at the same position\nthe "edit" button has been before.'}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If one or more workflowitems between the workflowitems the user want to reorder are redacted the user is not able to\nreorder."}),"\n",(0,n.jsx)(t.li,{children:'Do not forget to submit the new order with a click on the "done"-icon above the workflowitems-list'}),"\n",(0,n.jsx)(t.li,{children:'In "edit"-mode it is not possible to click a button located on a workflowitem'}),"\n",(0,n.jsx)(t.li,{children:'In "edit"-mode workflowitems are selectable in order to update more than one workflowitem at the same time'}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"documents-in-trubudget",children:"Documents in TruBudget"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:["TruBudget features upload/download and validation of documents. If a file (like a contract, invoice, etc.) is part of\nthe general workflow of a subproject, the document can be added to a workflowitem and later be downloaded or validated\nby another user. Before ",(0,n.jsx)(t.code,{children:"Trubudget-v1.10.0"})," a document is not uploaded itself - instead only a computed fingerprint is\nstored on the blockchain. When another user validates the document, the fingerprint of his/her copy is calculated and\ncompared to the original. Since ",(0,n.jsx)(t.code,{children:"Trubdget-v1.10.0"})," a documents can be uploaded and downloaded."]}),"\n",(0,n.jsx)(t.h3,{id:"add-document-to-workflowitem",children:"Add document to workflowitem"}),"\n",(0,n.jsx)(t.p,{children:"Adding a document to a workflowitem can be done either when adding or when creating the document, in the second screen."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Either ",(0,n.jsx)(t.a,{href:"#create-a-workflowitem",children:"create a new workflowitem"}),"\nor ",(0,n.jsx)(t.a,{href:"#update-a-workflowitem",children:"update an existing workflowitem"})]}),"\n",(0,n.jsx)(t.li,{children:'After filling out the fields on the first page, click the "Next" button'}),"\n",(0,n.jsx)(t.li,{children:'In the second screen, enter a name for the document. This name does not have to be the same as the filename! The name\nshould be descriptive of the document that is being uploaded, e.g. "Invoice-Contractor" or "Contract-School". After\ntyping a name, the button "Upload" gets activated'}),"\n",(0,n.jsxs)(t.li,{children:['Click the "Upload" button and select a file from your device\n',(0,n.jsx)(t.img,{alt:"upload document",src:i(24675).Z+"",width:"1912",height:"810"})]}),"\n",(0,n.jsx)(t.li,{children:'Click the "Submit" button to finish'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"download-document-from-workflowitem-since-trubudget-v1100",children:"Download document from workflowitem (Since Trubudget-v1.10.0)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Click on the "i" (information) button of the workflowitem containing the document\nto ',(0,n.jsx)(t.a,{href:"#view-workflowitem-details",children:"view the workflowitem details"}),"\n",(0,n.jsx)(t.img,{alt:"view workflowitem details",src:i(18661).Z+"",width:"3026",height:"1422"})]}),"\n",(0,n.jsxs)(t.li,{children:['Navigate to the "Documents" tab\n',(0,n.jsx)(t.img,{alt:"view the documents tab",src:i(44226).Z+"",width:"5120",height:"2400"})]}),"\n",(0,n.jsxs)(t.li,{children:['If you see the desired document, click the "Download" button\n',(0,n.jsx)(t.img,{alt:"download the document",src:i(44843).Z+"",width:"3840",height:"1876"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"validate-a-document",children:"Validate a document"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Click on the "i" (information) button of the workflowitem containing the document\nto ',(0,n.jsx)(t.a,{href:"#view-workflowitem-details",children:"view the workflowitem details"}),"\n",(0,n.jsx)(t.img,{alt:"view workflowitem details",src:i(18661).Z+"",width:"3026",height:"1422"})]}),"\n",(0,n.jsxs)(t.li,{children:['Navigate to the "Documents" tab\n',(0,n.jsx)(t.img,{alt:"view the documents tab",src:i(44226).Z+"",width:"5120",height:"2400"})]}),"\n",(0,n.jsxs)(t.li,{children:['If you see the desired document, click the "Validate" button\n',(0,n.jsx)(t.img,{alt:"validate the document",src:i(26388).Z+"",width:"5120",height:"2400"})]}),"\n",(0,n.jsx)(t.li,{children:"Select the correct document from your drive"}),"\n",(0,n.jsxs)(t.li,{children:['If the documents match, the validation says "OK"\n',(0,n.jsx)(t.img,{alt:"document ok",src:i(24607).Z+"",width:"1474",height:"842"})]}),"\n",(0,n.jsx)(t.li,{children:'[Optional] If the documents do not match, the label changes to "NOT OK". Click on the "NOT OK" button and choose\nanother document to try again.'}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},97866:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change_workflowitem_assignee-e83bc64f1232d1e4052c582849c3ff8b.jpg"},34809:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/close_workflowitem-3fcdccd945a923b03afc06d2f45d3c0b.jpg"},7848:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_workflowitem-3fc4d8001c8d5d6dcd80ee9172f318bf.jpg"},28330:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_workflowitem_dialog-d16e8231902ccfa5b5d093ea51370d88.jpg"},24607:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/document_ok-d49de28be46a38698191ed0a6080ca86.jpg"},44226:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/documents_tab-feb03e89b9254558fc81c310fcba4878.jpg"},44843:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/download_document-5eb98271db3b5b9b316a9311affc3fa9.jpg"},28264:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enter_edit_mode-a2f29e142a047f5febd453adc7aa8d1e.jpg"},47170:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/filter_workflowitem_history-e0e66ca4125a2618f26872eb0e8c552d.jpg"},28916:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/history_tab-d8e0545732e278ff23870658f1ece3db.jpg"},29314:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/update_selected_workflowitems-ae38fb0d57462f0f6a8909d71164e1c8.jpg"},81341:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/update_workflowitems_preview-1d09a1042ffbf1a37c8083da4c1114b0.jpg"},24675:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/upload_document-8c5467a52e6f08a1341628f43e122310.jpg"},26388:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/validate-698455baee270338bec9fef4df7a2645.jpg"},18661:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view_details_workflowitem-9e905bb27b68fbd26956a1e46b5d67fa.jpg"},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(67294);const o={},l=n.createContext(o);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);