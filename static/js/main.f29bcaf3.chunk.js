!function(n,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["react-app-qiankun-sub-main"]=t():n["react-app-qiankun-sub-main"]=t()}(this,(function(){return(this["webpackJsonp_react-app-qiankun-sub"]=this["webpackJsonp_react-app-qiankun-sub"]||[]).push([[0],{101:function(n,t,e){"use strict";e.r(t),e.d(t,"bootstrap",(function(){return E})),e.d(t,"mount",(function(){return I})),e.d(t,"unmount",(function(){return q}));var a=e(32),c=e.n(a),o=e(58),r=e(81),i=(e(83),e(0)),s=e.n(i),u=e(17),l=e.n(u),p=(e(88),e(59)),b=e(10),j=e(103),f=e(104),d=e(39),m=(e(89),e(90),e(105)),h=e(6),O=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"app-title",children:"React Demo"}),Object(h.jsxs)("p",{className:"app-lib",children:["React version: ",i.version,", AntD version: ",m.a]})]})},x=e(79),v=function(){var n=Object(i.useState)(!1),t=Object(x.a)(n,2),e=t[0],a=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{onClick:function(){return a(!0)},children:"CLICK ME"}),Object(h.jsx)(f.a,{visible:e,onOk:function(){return a(!1)},onCancel:function(){return a(!1)},title:"qiankun",children:"Probably the most complete micro-frontends solution you ever met"})]})},_=function(){return Object(h.jsx)("h2",{className:"app-nav-item",style:{borderColor:"red"},children:"Home"})},y=Object(i.lazy)((function(){return e.e(3).then(e.bind(null,106))})),k=function(){return Object(h.jsxs)(p.a,{basename:window.__POWERED_BY_QIANKUN__?"/react":"/",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(p.b,{exact:!0,to:"/",className:"app-mian-link",activeClassName:"app-mian-link-active",children:"Home"}),Object(h.jsx)(j.a,{type:"vertical"}),Object(h.jsx)(p.b,{exact:!0,to:"/about",className:"app-mian-link",activeClassName:"app-mian-link-active",children:"About"})]}),Object(h.jsx)(i.Suspense,{fallback:null,children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,component:_}),Object(h.jsx)(b.a,{path:"/about",exact:!0,component:y})]})})]})};function N(n){var t,e,a=null===n||void 0===n||null===(t=n.store)||void 0===t||null===(e=t.getGlobalState)||void 0===e?void 0:e.call(t);Object(i.useEffect)((function(){var t;null===n||void 0===n||null===(t=n.store)||void 0===t||t.onGlobalStateChange((function(n,t){f.a.confirm({title:"\u4e3b\u5e94\u7528\u6570\u636e\u53d8\u5316\u4e86",content:"\u4e3b\u5e94\u7528\u6539\u53d8\u540e\u7684\u6570\u636e\u4e3a\uff1a".concat(JSON.stringify(n))})}))}),[]);return Object(h.jsxs)("div",{className:"app-main",children:[Object(h.jsx)("span",{children:"\u5b50\u5e94\u7528react\u4e2d\u663e\u793a-\u4e3b\u5e94\u7528\u7684\u6570\u636e\uff1a".concat(JSON.stringify(a))}),Object(h.jsx)(d.a,{type:"primary",onClick:function(){var t;null===n||void 0===n||null===(t=n.store)||void 0===t||t.setGlobalState({user:{name:"button click"}})},children:"\u66f4\u6539\u4e3b\u5e94\u7528\u6570\u636e"}),Object(h.jsx)(O,{}),Object(h.jsx)(v,{}),Object(h.jsx)(j.a,{}),Object(h.jsx)(k,{})]})}var g=function(n){n&&n instanceof Function&&e.e(4).then(e.bind(null,107)).then((function(t){var e=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),a(n),c(n),o(n),r(n)}))};function w(n){return n?n.querySelector("#sub-react-root"):document.querySelector("#sub-react-root")}function C(n){var t=n.container;l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{store:Object(r.a)({},n)})}),w(t))}function S(n){n.onGlobalStateChange((function(t,e){return console.log("[onGlobalStateChange - ".concat(n.name,"]:"),t,e)}),!0),n.setGlobalState({ignore:n.name,user:{name:n.name}})}function E(){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("react app bootstraped");case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("props from main framework",t),S(t),C(t);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(n){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(c.a.mark((function n(t){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=t.container,l.a.unmountComponentAtNode(w(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||C({}),g()},83:function(n,t,e){window.__POWERED_BY_QIANKUN__&&(e.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},88:function(n,t,e){},90:function(n,t,e){}},[[101,1,2]]])}));
//# sourceMappingURL=main.f29bcaf3.chunk.js.map