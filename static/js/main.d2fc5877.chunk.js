(this["webpackJsonpoauth-test"]=this["webpackJsonpoauth-test"]||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),i=n(33),a=n.n(i),s=(n(50),n(51),n(26)),o=n(20),l=n(19),u=n(35),j={auth:{clientId:"bfcde4ee-93cd-4b39-89df-1295ec6d44bd",authority:"https://login.microsoftonline.com/73c32d63-f0cc-4e50-90bc-f9d54290581e",redirectUri:"https://finn1018.github.io/OAuth-test-app/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case u.a.Error:return void console.error(t);case u.a.Info:return void console.info(t);case u.a.Verbose:return void console.debug(t);case u.a.Warning:return void console.warn(t)}}}}},d={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",p="https://graph.microsoft.com/v1.0/organization",b="https://graph.microsoft.com/v1.0/contracts",f=n(36),O=n(23),x=n(6),m=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.loginPopup(d).catch((function(e){console.error(e)})):"redirect"===t&&e.loginRedirect(d).catch((function(e){console.error(e)}))};return Object(x.jsxs)(f.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"\ub85c\uadf8\uc778",children:[Object(x.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"\ud31d\uc5c5"}),Object(x.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"\ub9ac\ub2e4\uc774\ub809\ud2b8"})]})},y=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"https://finn1018.github.io/OAuth-test-app/",mainWindowRedirectUri:"https://finn1018.github.io/OAuth-test-app/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"https://finn1018.github.io/OAuth-test-app/"})};return Object(x.jsxs)(f.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(x.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(x.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},g=function(e){var t=Object(l.d)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"nav",style:{padding:"30px",background:"black",width:"100%"},children:[Object(x.jsx)("a",{className:"navbar-brand",style:{color:"white",margin:"0px",fontWeight:600,fontSize:"17px"},href:"https://finn1018.github.io/OAuth-test-app/",children:"Microsoft Graph"}),t?Object(x.jsx)(y,{}):Object(x.jsx)(m,{})]}),Object(x.jsx)("h5",{children:Object(x.jsx)("center",{})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),e.children]})},v=n(21),S=n.n(v),k=n(28);function T(){return(T=Object(k.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(k.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(p,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(k.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(b,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=n(29),I=(n(57),function(){var e=Object(l.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),i=Object(o.a)(r,2),a=i[0],u=i[1],j=Object(c.useState)(null),h=Object(o.a)(j,2),p=h[0],b=h[1],f=Object(c.useState)(null),O=Object(o.a)(f,2),m=O[0],y=O[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h5",{className:"card-title",children:["\ud658\uc601\ud569\ub2c8\ub2e4. ",n[0].name," \ub2d8!"]}),Object(x.jsx)("div",{children:a?Object(x.jsxs)("ul",{style:{padding:"0px"},children:[Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",a.displayName]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Sur Name: ",a.surname]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Given Name: ",a.givenName]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Mail: ",a.mail]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["ID: ",a.id]})]}):Object(x.jsx)(D.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return T.apply(this,arguments)})(e.accessToken).then((function(e){return u(e)}))}))},children:"\ub0b4 \uacc4\uc815 \uc815\ubcf4 \ubcf4\uae30"})}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{children:p?Object(x.jsxs)("ul",{style:{padding:"0px"},children:[Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Tenant ID: ",p.value[0].id]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",p.value[0].displayName]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Initial Domain: ",p.value[0].verifiedDomains[0].name]}),Object(x.jsxs)("li",{style:{listStyleType:"none"},children:["Primary Domain: ",p.value[0].verifiedDomains[1].name]})]}):Object(x.jsx)(D.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return N.apply(this,arguments)})(e.accessToken).then((function(e){return b(e)}))}))},children:"\uc870\uc9c1 \uc815\ubcf4 \ubcf4\uae30"})}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{children:m?Object(x.jsxs)("ul",{style:{padding:"0px"},children:[m.value.map((function(e,t){return Object(x.jsxs)("li",{children:["DisplayName: ",e.displayName,Object(x.jsx)("br",{}),"Default Domain Name: ",e.defaultDomainName,Object(x.jsx)("br",{}),"ID: ",e.id,Object(x.jsx)("br",{}),"Customer ID: ",e.customerId,Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]},t)})),"dsads"]}):Object(x.jsx)(D.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return w.apply(this,arguments)})(e.accessToken).then((function(e){return y(e)}))}))},children:"\uace0\uac1d \uc815\ubcf4 \ubcf4\uae30"})})]})}),A=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(l.a,{children:Object(x.jsx)(I,{})}),Object(x.jsx)(l.c,{children:Object(x.jsx)("h5",{style:{fontFamily:"nanusquare",fontWeight:600,marginTop:"12%",fontSize:"15px",color:"gray"},className:"card-title",children:"\ub85c\uadf8\uc778\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694!"})})]})};function C(){return Object(x.jsx)(g,{children:Object(x.jsx)(A,{})})}var R=new(n(62).a)(j);a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(l.b,{instance:R,children:Object(x.jsx)(C,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.d2fc5877.chunk.js.map