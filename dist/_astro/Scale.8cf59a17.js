import{r as a}from"./index.ed373d49.js";var p={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=a,f=Symbol.for("react.element"),x=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,g=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,s){var r,n={},d=null,i=null;s!==void 0&&(d=""+s),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)_.call(e,r)&&!S.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:t,key:d,ref:i,props:n,_owner:g.current}}l.Fragment=x;l.jsx=u;l.jsxs=u;p.exports=l;var o=p.exports;const m=({tag:t,label:e,state:s,setState:r})=>o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-0 mt-1",children:[o.jsxs("label",{class:"font-bold sm:text-right sm:pt-2 mr-2 block align-middle",for:t,children:[e,":"," "]}),o.jsx("input",{class:"px-3 py-1 leading-[1.6] shadow-sm border border-1 rounded-md",id:t,value:s,onChange:n=>r(n.target.value)})]});function v(){const[t,e]=a.useState(4),[s,r]=a.useState(20);return a.useState("mA"),a.useState(12),o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:["This will scale from one value to another. ",t]}),o.jsxs("div",{className:"grid grid-cols-1 gap-4 rounded-md shadow-md p-4 bg-white",children:[o.jsx(m,{tag:"fromZero",label:"From Zero",state:t,setState:e}),o.jsx(m,{tag:"fromSpan",label:"From Span",state:s,setState:r})]})]})}export{v as default};
