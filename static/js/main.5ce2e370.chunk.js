(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(9),c(0));var j=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("h1",{children:"React App"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)("a",{href:"/",children:"Home"}),Object(i.jsx)("a",{href:"/create",children:"Create"})]})]})},o=c(3);var d=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(!0),i=Object(o.a)(a,2),j=i[0],d=i[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("Couldn't fetch the data.");return e.json()})).then((function(e){r(e),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[e]),{data:s,isPending:j}};var h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending;return Object(i.jsx)("div",{className:"home",children:Object(i.jsxs)("div",{className:"content",children:[c&&Object(i.jsx)("div",{children:"Loading..."}),t&&t.map((function(e){return Object(i.jsxs)("div",{className:"blog-preview",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written By ",e.author]})]},e.id)}))]})})};var l=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(h,{})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.5ce2e370.chunk.js.map