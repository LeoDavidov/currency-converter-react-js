(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),r=n(2),s=n(1),i=(n(10),n(4)),o=n(0);function u(e){var t=e.onChange,n=function(e){var n=c[e];t(n)},c={};i.exchangeRates.forEach((function(e){var t=e.code,n=e.rate;return c[t]=n}));var a=i.exchangeRates.map((function(e){return e.code})).sort().map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}));return Object(o.jsxs)("select",{className:"currency",onChange:function(e){var t=e.target;return n(t.value)},children:[Object(o.jsx)("option",{children:"---"}),a]})}function j(e){var t=e.onChange,n=e.inputValue,c=Object(s.useState)(""),a=Object(r.a)(c,2),i=a[0],u=a[1],j=function(e){isNaN(Number(e))?u("\u26d4 enter a number"):u(e<0?"only positive numbers":""),t(e.slice(0,6))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{onChange:function(e){var t=e.target;return j(t.value)},value:n,type:"text"}),Object(o.jsx)("p",{className:"error",children:i})]})}function l(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),i=Object(r.a)(a,2),l=i[0],b=i[1],d=Object(s.useState)(null),x=Object(r.a)(d,2),h=x[0],O=x[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{children:"Currency Converter"}),Object(o.jsxs)("div",{className:"input-box",children:[Object(o.jsxs)("div",{className:"box-left",children:[Object(o.jsx)("div",{className:"text",children:"from"}),Object(o.jsx)(u,{onChange:b}),Object(o.jsx)(j,{onChange:c,inputValue:n})]}),Object(o.jsxs)("div",{className:"box-right",children:[Object(o.jsx)("div",{className:"text",children:"to"}),Object(o.jsx)(u,{onChange:O}),Object(o.jsx)("input",{value:function(){var e=n*l/h;return isNaN(e)||e===-1/0||e===1/0||e!==Math.abs(e)?"":e.toFixed(2)}(),type:"text",disabled:!0})]})]})]})}a.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('{"exchangeRates":[{"code":"USD","rate":1},{"code":"EUR","rate":0.8},{"code":"GBP","rate":0.71},{"code":"MDL","rate":0.05}]}')}},[[12,1,2]]]);
//# sourceMappingURL=main.c2cdd87d.chunk.js.map