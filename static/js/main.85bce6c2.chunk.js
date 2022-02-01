(this["webpackJsonpoauth-test"]=this["webpackJsonpoauth-test"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(24),o=n.n(i),a=(n(59),n(60),n(52)),s=n(20),u=n(19),j=n(39),d={auth:{clientId:"bfcde4ee-93cd-4b39-89df-1295ec6d44bd",authority:"https://login.microsoftonline.com/73c32d63-f0cc-4e50-90bc-f9d54290581e",redirectUri:"https://finn1018.github.io/OAuth-test-app/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case j.a.Error:return void console.error(t);case j.a.Info:return void console.info(t);case j.a.Verbose:return void console.debug(t);case j.a.Warning:return void console.warn(t)}}}}},l={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",b=n(54),p=n(40),O=n(25),f=n(9),g=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(l).catch((function(e){console.error(e)})):"redirect"===t&&e.loginRedirect(l).catch((function(e){console.error(e)}))};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},x=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},m=function(e){var t=Object(u.d)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(f.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft 365 OAuth 2.0 TEST"}),t?Object(f.jsx)(x,{}):Object(f.jsx)(g,{})]}),Object(f.jsx)("h5",{children:Object(f.jsx)("center",{})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),e.children]})},v=function(e){return console.log(e.graphData),Object(f.jsxs)("div",{id:"profile-div",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},k=n(32),S=n.n(k),I=n(38);function N(){return(N=Object(I.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(46),y=(n(66),function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h5",{className:"card-title",children:["Welcome ",n[0].name]}),o?Object(f.jsx)(v,{graphData:o}):Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(a.a)(Object(a.a)({},l),{},{account:n[0]})).then((function(e){(function(e){return N.apply(this,arguments)})(e.accessToken).then((function(e){return j(e)}))}))},children:"Request Profile Information"})]})}),R=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(y,{})}),Object(f.jsx)(u.c,{children:Object(f.jsx)("h5",{className:"card-title",children:"Microsoft 365 OAuth 2.0 Test App"})})]})};function A(){return Object(f.jsx)(m,{children:Object(f.jsx)(R,{})})}var C=new(n(72).a)(d);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(u.b,{instance:C,children:Object(f.jsx)(A,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.85bce6c2.chunk.js.map