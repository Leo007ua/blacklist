"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{4842:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return _},default:function(){return R}});var t,a=r(9439),o=r(168),i=r(5867),d=i.ZP.form(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-bottom: 60px;\n\n  .contactForm__field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  label {\n    font-weight: 700;\n    text-transform: uppercase;\n    color: var(--global-black-color);\n  }\n\n  input {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 350px;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;\n    :focus {\n      outline: 1px solid green;\n    }\n  }\n\n  button {\n    width: 100px;\n    height: 30px;\n    background-color: aqua;\n    border: none;\n    border-radius: 5px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;\n    cursor: pointer;\n    &:active {\n      background-color: green;\n      color: white;\n    }\n    &:hover{\n        background-color: lightgreen;\n    }\n    transition: background-color 0.5s;\n  }\n"]))),c=r(2791),l=r(3329);var s,p,x=function(n){var e=n.formAddContact,r=(0,c.useState)(""),t=(0,a.Z)(r,2),o=t[0],i=t[1],s=(0,c.useState)(""),p=(0,a.Z)(s,2),x=p[0],u=p[1],h=function(n){var e=n.currentTarget,r=e.name,t=e.value;"name"===r&&i(t),"number"===r&&u(t)},m=function(){i(""),u("")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e({name:o,number:x}),m()},children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Name:"}),(0,l.jsx)("input",{value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:h,placeholder:"Your name"})]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Number:"}),(0,l.jsx)("input",{value:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:h,placeholder:"Your number"})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})})},u=i.ZP.div(s||(s=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 20px;\n"]))),h=r(9126),m=i.ZP.div(p||(p=(0,o.Z)(["\n  display: flex;\n  gap: 20px;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n  }\n\n  button {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    font-size: 14px;\n    background-color: lightgreen;\n    cursor: pointer;\n    &:hover{\n        background-color: red;\n    }\n    transition: background-color 0.5s;\n    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);\n  }"]))),g=r(6318),b=function(n){var e=n.id,r=n.name,t=n.number,a=n.onRemoveContact;return(0,l.jsxs)(m,{children:[(0,l.jsxs)("p",{children:[r,": ",t]}),(0,l.jsx)("button",{type:"button",onClick:function(){return a(e)},children:(0,l.jsx)(h.RXM,{size:g.n.small})})]},e)};var f,v,j=function(n){var e=n.filteredContact,r=n.onRemoveContact;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{children:e.map((function(n){var e=n.id,t=n.name,a=n.number;return(0,l.jsx)(b,{id:e,name:t,number:a,onRemoveContact:r},e)}))})})},C=i.ZP.input(f||(f=(0,o.Z)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 350px;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n"]))),w=r(3853),k=function(n){var e=n.value,r=n.handleOnChangeFilter;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{children:["Find contacts by name ",(0,l.jsx)(w.Ihx,{size:g.n.medium})]}),(0,l.jsx)(C,{type:"text",value:e,onChange:r,placeholder:"Search name"})]})},Z=r(1441),y=i.ZP.section(v||(v=(0,o.Z)(["\n  width: 400px;\n  margin: 50px auto 0;\n  display: flex;\n  flex-direction: column;\n"]))),A=r(9434),F=r(3652),z=r(4818),P=r(6351),_=function(){var n=(0,A.v9)(P.Af),e=(0,A.v9)(P.xU),r=(0,A.v9)(P.zh),t=(0,A.v9)(P.XQ),a=(0,A.I0)();(0,c.useEffect)((function(){a((0,z.x8)())}),[a]);var o=function(n){a((0,F.W)(n.currentTarget.value))},i=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,l.jsxs)(y,{children:[(0,l.jsx)("h1",{children:"Blacklist"}),(0,l.jsx)(x,{formAddContact:function(e){n.find((function(n){return n.name===e.name}))?alert("".concat(e.name," is already in contacts")):a((0,z.je)(e))},contactsArr:n}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(k,{value:t,handleOnChangeFilter:o}),e&&(0,l.jsx)(Z.Z,{}),r&&(0,l.jsxs)(l.Fragment,{children:["Oops something went wrong... Error: ",r]}),(0,l.jsx)(j,{filteredContact:i,onRemoveContact:function(n){a((0,z.xX)(n))},value:t,handleOnChangeFilter:o})]})},R=_}}]);
//# sourceMappingURL=842.89787829.chunk.js.map