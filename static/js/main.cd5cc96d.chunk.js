(this["webpackJsonpcustom-select"]=this["webpackJsonpcustom-select"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(6),o=n.n(a),s=(n(18),n(2)),i=n.n(s),u=n(3),d=n(4),l=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.abrupt("return",new Promise((function(e,n){setTimeout((function(){t.push({id:1,name:"Apple"},{id:2,name:"Banana"},{id:3,name:"Cherry"},{id:4,name:"Lemon"},{id:5,name:"Lime"}),e(t)}),1e3)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=(n(24),n(5)),j=n(13),f=(n(25),n(12)),b=n.n(f),m=n(1),h=function(e){var t=e.fetchData,n=e.label,r=void 0===n?"name":n,a=e.id,o=void 0===a?"id":a,s=e.prompt,l=void 0===s?"Search...":s,f=e.storeValue,h=e.className,v=(Object(j.a)(e,["fetchData","label","id","prompt","storeValue","className"]),Object(c.useState)(!1)),O=Object(p.a)(v,2),w=O[0],x=O[1],_=Object(c.useState)(null),y=Object(p.a)(_,2),N=y[0],g=y[1],E=Object(c.useState)(""),S=Object(p.a)(E,2),k=S[0],C=S[1],L=Object(c.useState)(null),I=Object(p.a)(L,2),T=I[0],D=I[1],R=Object(c.useRef)(null),V=Object(d.b)();Object(c.useEffect)((function(){function e(e){R.current&&!R.current.contains(e.target)&&x(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[R]);var B=function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,D(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){x((function(e){return!e})),B()},M=function(e){return e.filter((function(e){return e[r].toLowerCase().indexOf(k.toLowerCase())>-1}))},P=function(e){C(""),g(e),V(f({payload:e})),x(!1)};return Object(m.jsxs)("div",{className:b()("dropdown",h),ref:R,children:[Object(m.jsxs)("div",{className:"dropdown__control",children:[Object(m.jsx)("div",{className:"dropdown__control__selected_value",children:Object(m.jsx)("input",{type:"text",placeholder:N?N[r]:l,value:k.length>0?k:N?N[r]:"",onChange:function(e){D(null),B(),g(null),C(e.target.value)},onClick:J,onTouchEnd:J,onKeyPress:function(e){"Enter"===e.key&&J()}})}),Object(m.jsx)("div",{className:"dropdown__control__arrow ".concat(w?"open":"")})]}),Object(m.jsx)("div",{className:"dropdown__options ".concat(w?"open":""),children:T&&T.length>0?M(T).length>0?M(T).map((function(e){return Object(m.jsx)("div",{className:"dropdown__options_option ".concat(N===e?"selected":""),onClick:function(){return P(e)},onTouchEnd:function(){return P(e)},children:e[r]},e[o])})):Object(m.jsx)("div",{className:"dropdown__options_option",children:"Not found..."}):Object(m.jsx)("div",{className:"dropdown__options_option",children:"Loading..."})})]})},v=n(11),O=n(10),w="SELECT_ITEM",x={selectedItem:{}};var _=function(e){return{type:w,payload:e.payload}},y=Object(O.a)({selectReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{selectedItem:n});default:return e}}}),N=Object(O.b)(y),g=function(){var e=Object(d.c)((function(e){return e.selectReducer.selectedItem})),t=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("main",{className:"wrapper",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Custom async select with search"}),Object(m.jsxs)("h4",{children:["Selected item is: ",null===e||void 0===e?void 0:e.name," "]}),Object(m.jsx)(h,{fetchData:t,prompt:"Select...",id:"id",label:"name",storeValue:_})]})})};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(d.a,{store:N,children:Object(m.jsx)(g,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.cd5cc96d.chunk.js.map