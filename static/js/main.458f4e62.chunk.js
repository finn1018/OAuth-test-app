(this["webpackJsonpoauth-test"]=this["webpackJsonpoauth-test"]||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),i=n(33),a=n.n(i),s=(n(50),n(51),n(23)),o=n(19),u=n(20),l=n(35),j={auth:{clientId:"bfcde4ee-93cd-4b39-89df-1295ec6d44bd",authority:"https://login.microsoftonline.com/73c32d63-f0cc-4e50-90bc-f9d54290581e",redirectUri:"https://finn1018.github.io/OAuth-test-app/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case l.a.Error:return void console.error(t);case l.a.Info:return void console.info(t);case l.a.Verbose:return void console.debug(t);case l.a.Warning:return void console.warn(t)}}}}},d={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",p="https://graph.microsoft.com/v1.0/organization",b="https://graph.microsoft.com/v1.0/contracts?$top=500",f="https://api.partnercenter.microsoft.com/v1/profiles/organization",O=n(36),x=n(24),m=n(6),y=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(d).catch((function(e){console.error(e)})):"redirect"===t&&e.loginRedirect(d).catch((function(e){console.error(e)}))};return Object(m.jsxs)(O.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"\ub85c\uadf8\uc778",children:[Object(m.jsx)(x.a.Item,{as:"button",onClick:function(){return t("popup")},children:"\ud31d\uc5c5"}),Object(m.jsx)(x.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"\ub9ac\ub2e4\uc774\ub809\ud2b8"})]})},v=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"https://finn1018.github.io/OAuth-test-app/",mainWindowRedirectUri:"https://finn1018.github.io/OAuth-test-app/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"https://finn1018.github.io/OAuth-test-app/"})};return Object(m.jsxs)(O.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"\ub85c\uadf8\uc544\uc6c3",children:[Object(m.jsx)(x.a.Item,{as:"button",onClick:function(){return t("popup")},children:"\ud31d\uc5c5"}),Object(m.jsx)(x.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"\ub9ac\ub2e4\uc774\ub809\ud2b8"})]})},g=function(e){var t=Object(u.d)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"nav",style:{padding:"30px",background:"black",width:"100%"},children:[Object(m.jsx)("a",{className:"navbar-brand",style:{color:"white",margin:"0px",fontWeight:600,fontSize:"17px"},href:"https://finn1018.github.io/OAuth-test-app/",children:"Microsoft Graph"}),t?Object(m.jsx)(v,{}):Object(m.jsx)(y,{})]}),Object(m.jsx)("h5",{children:Object(m.jsx)("center",{})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),e.children]})},k=n(21),S=n.n(k),T=n(27);function w(){return(w=Object(T.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(T.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(p,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(T.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(b,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(T.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(f,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=n(28),C=(n(57),function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),i=Object(o.a)(r,2),a=i[0],l=i[1],j=Object(c.useState)(null),h=Object(o.a)(j,2),p=h[0],b=h[1],f=Object(c.useState)(null),O=Object(o.a)(f,2),x=O[0],y=O[1],v=Object(c.useState)(null),g=Object(o.a)(v,2),k=g[0],S=g[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h5",{className:"card-title",children:["\ud658\uc601\ud569\ub2c8\ub2e4. ",n[0].name," \ub2d8!"]}),Object(m.jsx)("div",{children:a?Object(m.jsxs)("ul",{style:{padding:"0px"},children:[Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",a.displayName]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Sur Name: ",a.surname]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Given Name: ",a.givenName]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Mail: ",a.mail]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["ID: ",a.id]})]}):Object(m.jsx)(A.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return w.apply(this,arguments)})(e.accessToken).then((function(e){return l(e)}))}))},children:"\ub0b4 \uacc4\uc815 \uc815\ubcf4 \ubcf4\uae30"})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:p?Object(m.jsxs)("ul",{style:{padding:"0px"},children:[Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Tenant ID: ",p.value[0].id]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Display Name: ",p.value[0].displayName]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Initial Domain: ",p.value[0].verifiedDomains[0].name]}),Object(m.jsxs)("li",{style:{listStyleType:"none"},children:["Primary Domain: ",p.value[0].verifiedDomains[1].name]})]}):Object(m.jsx)(A.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return N.apply(this,arguments)})(e.accessToken).then((function(e){return b(e)}))}))},children:"\uc870\uc9c1 \uc815\ubcf4 \ubcf4\uae30"})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:x?Object(m.jsx)("ul",{style:{padding:"0px"},children:x.value.map((function(e,t){return Object(m.jsxs)("li",{children:[t,".",Object(m.jsx)("br",{}),"DisplayName: ",e.displayName,Object(m.jsx)("br",{}),"Default Domain Name: ",e.defaultDomainName,Object(m.jsx)("br",{}),"ID: ",e.id,Object(m.jsx)("br",{}),"Customer ID: ",e.customerId,Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]},t)}))}):Object(m.jsx)(A.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return D.apply(this,arguments)})(e.accessToken).then((function(e){return y(e)}))}))},children:"\uace0\uac1d \uc815\ubcf4 \ubcf4\uae30"})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:k?Object(m.jsx)("ul",{style:{padding:"0px"}}):Object(m.jsx)(A.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(s.a)(Object(s.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return I.apply(this,arguments)})(e.accessToken).then((function(e){return S(e)}))}))},children:"test"})})]})}),z=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)(C,{})}),Object(m.jsx)(u.c,{children:Object(m.jsx)("h5",{style:{fontFamily:"nanusquare",fontWeight:600,marginTop:"12%",fontSize:"15px",color:"gray"},className:"card-title",children:"\ub85c\uadf8\uc778\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694!"})})]})};function E(){return Object(m.jsx)(g,{children:Object(m.jsx)(z,{})})}var G=new(n(62).a)(j);a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(u.b,{instance:G,children:Object(m.jsx)(E,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.458f4e62.chunk.js.map