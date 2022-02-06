(this["webpackJsonpoauth-test"]=this["webpackJsonpoauth-test"]||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),i=n(33),s=n.n(i),a=(n(50),n(51),n(32)),o=n(20),l=n(19),u=n(35),d={auth:{clientId:"bfcde4ee-93cd-4b39-89df-1295ec6d44bd",authority:"https://login.microsoftonline.com/73c32d63-f0cc-4e50-90bc-f9d54290581e",redirectUri:"https://finn1018.github.io/OAuth-test-app/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case u.a.Error:return void console.error(t);case u.a.Info:return void console.info(t);case u.a.Verbose:return void console.debug(t);case u.a.Warning:return void console.warn(t)}}}}},j={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",p="https://graph.microsoft.com/v1.0/organization",b=n(36),f=n(22),O=n(8),x=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.loginPopup(j).catch((function(e){console.error(e)})):"redirect"===t&&e.loginRedirect(j).catch((function(e){console.error(e)}))};return Object(O.jsxs)(b.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"\ub85c\uadf8\uc778",children:[Object(O.jsx)(f.a.Item,{as:"button",onClick:function(){return t("popup")},children:"\ud31d\uc5c5"}),Object(O.jsx)(f.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"\ub9ac\ub2e4\uc774\ub809\ud2b8"})]})},m=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(O.jsxs)(b.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(O.jsx)(f.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(O.jsx)(f.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},y=function(e){var t=Object(l.d)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"nav",style:{padding:"30px",background:"black",width:"100%"},children:[Object(O.jsx)("a",{className:"navbar-brand",style:{color:"white",margin:"0px",fontWeight:600,fontSize:"17px"},href:"/",children:"Microsoft Graph"}),t?Object(O.jsx)(m,{}):Object(O.jsx)(x,{})]}),Object(O.jsx)("h5",{children:Object(O.jsx)("center",{})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),e.children]})},g=n(23),v=n.n(g),S=n(29);function k(){return(k=Object(S.a)(v.a.mark((function e(t){var n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(S.a)(v.a.mark((function e(t){var n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(p,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(30),N=(n(57),function(){var e=Object(l.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),i=Object(o.a)(r,2),s=i[0],u=i[1],d=Object(c.useState)(null),h=Object(o.a)(d,2),p=h[0],b=h[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h5",{className:"card-title",children:["\ud658\uc601\ud569\ub2c8\ub2e4. ",n[0].name," \ub2d8!"]}),Object(O.jsx)("div",{children:s?Object(O.jsxs)("ul",{style:{padding:"0px"},children:[Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",s.displayName]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Sur Name: ",s.surname]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Given Name: ",s.givenName]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Mail: ",s.mail]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["ID: ",s.id]})]}):Object(O.jsx)(w.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(a.a)(Object(a.a)({},j),{},{account:n[0]})).then((function(e){(function(e){return k.apply(this,arguments)})(e.accessToken).then((function(e){return u(e)}))}))},children:"\ub0b4 \uacc4\uc815 \uc815\ubcf4 \ubcf4\uae30"})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:p?Object(O.jsxs)("ul",{style:{padding:"0px"},children:[Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Tenant ID: ",p.value[0].id]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",p.value[0].diplayName]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Initial Domain: ",p.value[0].verifiedDomains[0].name]}),Object(O.jsxs)("li",{style:{listStyleType:"none"},children:["Primary Domain: ",p.value[0].verifiedDomains[1].name]})]}):Object(O.jsx)(w.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(a.a)(Object(a.a)({},j),{},{account:n[0]})).then((function(e){(function(e){return T.apply(this,arguments)})(e.accessToken).then((function(e){return b(e)}))}))},children:"\uc870\uc9c1 \uc815\ubcf4 \ubcf4\uae30"})})]})}),I=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(N,{})}),Object(O.jsx)(l.c,{children:Object(O.jsx)("h5",{style:{fontFamily:"nanusquare",fontWeight:600,marginTop:"12%",fontSize:"15px",color:"gray"},className:"card-title",children:"\ub85c\uadf8\uc778\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694!"})})]})};function C(){return Object(O.jsx)(y,{children:Object(O.jsx)(I,{})})}var D=new(n(62).a)(d);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(l.b,{instance:D,children:Object(O.jsx)(C,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2e63087e.chunk.js.map