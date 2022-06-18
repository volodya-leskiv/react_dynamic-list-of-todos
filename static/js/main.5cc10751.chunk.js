(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),i=c(2),o=c(1),a=(c(10),c(11),c(12),c(5)),r=c.n(a),l=c(0),d=function(e){var t,c=e.todos,s=e.selectIdOfUser,n=Object(o.useState)(""),a=Object(i.a)(n,2),d=a[0],u=a[1],j=Object(o.useState)(""),b=Object(i.a)(j,2),h=b[0],O=b[1],p=c.filter((function(e){return e.title.includes(d)}));return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"TodoList__list-container",children:[Object(l.jsx)("h4",{children:"Filter by title"}),Object(l.jsx)("input",{"data-cy":"filterByTitle",type:"text",value:d,className:"TodoList__input",placeholder:"Enter a title",onChange:function(e){u(e.target.value)}}),Object(l.jsx)("h4",{children:" Status:"}),Object(l.jsxs)("select",{className:"TodoList__input TodoList__input ",onChange:function(e){O(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:" All "}),Object(l.jsx)("option",{value:"active",children:"Active "}),Object(l.jsx)("option",{value:"completed",children:"Completed "})]}),Object(l.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:(t=p,"completed"===h?t.filter((function(e){return e.completed})):"active"===h?t.filter((function(e){return!e.completed})):t).map((function(e){return Object(l.jsxs)("li",{className:r()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsx)("button",{"data-cy":"userButton",className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){s(e.userId)},children:"User# ".concat(e.userId)})]},e.id)}))})]})]})},u=(c(14),function(e){var t=e.selectedUserId,c=e.selectIdOfUser,s=Object(o.useState)(),n=Object(i.a)(s,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){(function(e){return fetch("".concat("https://mate.academy/students-api/users","/").concat(e)).then((function(e){return e.json()}))})(t).then((function(e){return r(e)}))}),[t]),Object(l.jsxs)("div",{className:"CurrentUser",children:[a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected User: ".concat(a.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:a.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:a.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:a.phone})]}):"Please wait",Object(l.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){c(0)},children:"Clear"})]})}),j=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)([]),a=Object(i.a)(n,2),r=a[0],j=a[1],b=function(e){s(e)};return Object(o.useEffect)((function(){fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(d,{todos:r,selectIdOfUser:b})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(u,{selectedUserId:c,selectIdOfUser:b}):"No user selected"})})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5cc10751.chunk.js.map