(this["webpackJsonpmy-app01"]=this["webpackJsonpmy-app01"]||[]).push([[3],{317:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var s=a(7),n=a(9),i=a(8),c=a(22),r=a(23),o=a(2),u=a(0),d=a.n(u),l=a(18),g=a(41),j=function(e){return{isAuth:e.authPage.isAuth}},b=function(e){var t=function(t){Object(c.a)(u,t);var a=Object(r.a)(u);function u(){return Object(n.a)(this,u),a.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(s.a)({},this.props)):Object(o.jsx)(l.a,{to:"/login"})}}]),u}(d.a.Component);return Object(g.b)(j)(t)}},320:function(e,t,a){e.exports={dialogs:"ProfileDialogs_dialogs__3oonZ",dialog:"ProfileDialogs_dialog__1leZ_",message:"ProfileDialogs_message__836la"}},321:function(e,t,a){e.exports={input:"ProfileMessage_input__2hhAF"}},328:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(2),c=a(320),r=a.n(c),o=a(32),u=a(18),d=a(321),l=a.n(d),g=function(e){var t=n.a.createRef();return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:e.archive}),Object(i.jsxs)("div",{className:"md-form",children:[Object(i.jsx)("input",{id:"input-char-counter",ref:t,onChange:function(){var a=t.current.value;e.updateMessageText(a)},placeholder:"Write a message",value:e.newDialogText,length:"80",className:"".concat(l.a.input," form-control")}),Object(i.jsx)("button",{type:"button",onClick:function(){e.sendMessage()},className:"".concat(l.a.button," + btn btn-outline-primary border-0"),children:"Enter"})]})]})},j=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.c,{to:"/messages/"+e.id,children:e.name}),Object(i.jsx)("div",{children:e.message})]})},b=function(e){var t=e.dialogsData.map((function(e){return Object(i.jsx)(j,{name:e.name,id:e.id,message:"Hi, Nysrs"},e.id)})),a=e.messages.map((function(e){return Object(i.jsx)("div",{children:e.message})})),s=e.messages.map((function(t){return Object(i.jsx)(u.b,{path:"/messages/"+t.id,render:function(){return Object(i.jsx)(g,{archive:a,newDialogText:e.newDialogText,updateMessageText:e.updateMessageText,sendMessage:e.sendMessage})}},t.id)}));return Object(i.jsxs)("div",{className:r.a.dialogs,children:[Object(i.jsx)("div",{className:r.a.dialog,children:t}),Object(i.jsx)("div",{className:r.a.message,children:s})]})},p=a(41),f=a(96),m=a(317),h=a(52);t.default=Object(h.d)(Object(p.b)((function(e){return{messages:e.dialogPage.messages,dialogsData:e.dialogPage.dialogsData,newDialogText:e.dialogPage.newDialogText}}),(function(e){return{sendMessage:function(){e(Object(f.a)())},updateMessageText:function(t){e(Object(f.b)(t))}}})),m.a)(b)}}]);
//# sourceMappingURL=3.7a468c36.chunk.js.map