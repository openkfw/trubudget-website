(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6035,9514],{4608:function(e,a,n){"use strict";n.r(a);var t=n(7294),r=n(8115),c=n(4973);a.default=function(){return t.createElement(r.Z,{title:(0,c.I)({id:"theme.NotFound.title",message:"Page Not Found"})},t.createElement("main",{className:"container margin-vert--xl"},t.createElement("div",{className:"row"},t.createElement("div",{className:"col col--6 col--offset-3"},t.createElement("h1",{className:"hero__title"},t.createElement(c.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),t.createElement("p",null,t.createElement(c.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),t.createElement("p",null,t.createElement(c.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,a,n){"use strict";var t=n(7294),r=n(4184),c=n.n(r),o=n(5977),l=n(2263),i=n(8084);a.Z=function(e){var a=(0,t.useRef)(!1),r=(0,t.useRef)(null),s=(0,t.useState)(!1),h=s[0],u=s[1],d=(0,o.k6)(),m=(0,l.Z)(),f=m.siteConfig,p=void 0===f?{}:f,b=m.isClient,g=void 0!==b&&b,E=p.baseUrl,N=(0,i.usePluginData)("docusaurus-lunr-search"),k=function(){a.current||(Promise.all([fetch(""+E+N.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+E+N.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3195))]).then((function(e){var a=e[0],n=e[1],t=e[2].default;0!==a.length&&(!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=E+n.url;document.createElement("a").href=t,d.push(t)}})}(a,n,t),u(!0))})),a.current=!0)},v=(0,t.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return g&&k(),t.createElement("div",{className:"navbar__search",key:"search-box"},t.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),t.createElement("input",{id:"search_input_react",type:"search",placeholder:h?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:k,onMouseOver:k,onFocus:v,onBlur:v,ref:r,disabled:!h}))}}}]);