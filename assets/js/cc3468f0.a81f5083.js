"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[588],{5414:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return g}});var a=n(7462),i=n(3366),r=n(7294),o=n(3905),u=n(9443);var l=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),c="tabItem_1uMI",d="tabItemActive_2DSg";var h=function(e){var t,n=e.lazy,a=e.block,i=e.defaultValue,o=e.values,u=e.groupId,h=e.className,m=r.Children.toArray(e.children),p=null!=o?o:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=i?i:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,f=l(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,r.useState)(k),y=b[0],w=b[1],I=[];if(null!=u){var C=v[u];null!=C&&C!==y&&p.some((function(e){return e.value===C}))&&w(C)}var N=function(e){var t=e.currentTarget,n=I.indexOf(t),a=p[n].value;w(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,i,r,o,u,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,u=o.innerHeight,l=o.innerWidth,n>=0&&r<=l&&i<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.target)+1;n=I[a]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.target)-1;n=I[i]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var m=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},p=["components"],k={sidebar_position:2},f="Authentication",v={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"Creating API keys",source:"@site/docs/authentication.mdx",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API documentation",permalink:"/docs/intro"}},g=[{value:"Creating API keys",id:"creating-api-keys",children:[]},{value:"Using your API keys",id:"using-your-api-keys",children:[{value:"Fetching an authentication token",id:"fetching-an-authentication-token",children:[]}]}],b={toc:g};function y(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("h2",{id:"creating-api-keys"},"Creating API keys"),(0,o.kt)("p",null,"TBW"),(0,o.kt)("h2",{id:"using-your-api-keys"},"Using your API keys"),(0,o.kt)("h3",{id:"fetching-an-authentication-token"},"Fetching an authentication token"),(0,o.kt)("p",null,"In order to fetch a new authentication token, which you will use to sign all sub-sequent requests, you need to make a call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.agrea.io/token")," endpoint:"),(0,o.kt)(h,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(m,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://auth.agrea.io/token"\n'))),(0,o.kt)(m,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'curl "https://auth.agrea.io/token"\n')))))}y.isMDXComponent=!0}}]);