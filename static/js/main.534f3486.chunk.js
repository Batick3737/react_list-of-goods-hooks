(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(6),o=n.n(c),r=n(4),s=n(7),u=n(1),a=(n(12),n(0)),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var l=function(){var t=Object(u.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)("NONE"),l=Object(r.a)(o,2),b=l[0],j=l[1],h=Object(u.useState)(!1),O=Object(r.a)(h,2),d=O[0],p=O[1],f=function(t,e,n){var c=Object(s.a)(t);switch(e){case"LENGTH":c.sort((function(t,e){return t.length-e.length}));break;case"ALPABET":c.sort((function(t,e){return t.localeCompare(e)}))}return n&&c.reverse(),c}(i,b,n);return Object(a.jsxs)("div",{className:"App",children:[!d&&Object(a.jsx)("button",{className:"button",type:"button",onClick:function(){return p(!0)},children:"Start"}),d&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",onClick:function(){return j("ALPABET")},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",onClick:function(){return j("LENGTH")},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",onClick:function(){return c((function(t){return!t}))},children:"Reverse"}),Object(a.jsx)("button",{type:"button",onClick:function(){j("NONE"),c(!1)},children:"Reset"}),Object(a.jsx)("ul",{className:"Goods",children:f.map((function(t){return Object(a.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};o.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.534f3486.chunk.js.map