(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10],{549:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(105),r=n(497),l=n.n(r),c=n(489),s=n(74),u=n(2),m=n.n(u),f=n(199),p=n.n(f);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=y(this,h(n).call(this,e))).state={active:"main-0",activeParent:null},t}var t,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,o["Component"]),t=n,(a=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var o=this,e=this.props,t=e.items,n=e.vertsize,a=e.widesize,r=p()("nav",n?"nav-".concat(n,"-vertical"):"",a?"nav-".concat(a,"-vertical-wide"):"");return i.a.createElement("nav",{className:r},i.a.createElement("ul",null,t.map(function(e,n){var t=e.name,a=e.icon,r=e.subItems;return i.a.createElement("li",{key:"nav-item-".concat(t,"-").concat(n)},"\n",r?i.a.createElement("div",{className:"submenu"},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),i.a.createElement("ul",null,r.map(function(e,t){return i.a.createElement("li",{key:"nav-subItems-".concat(e,"-").concat(t),className:o.state.active==="sub-".concat(n,"-").concat(t)?"active":null},i.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"sub-".concat(n,"-").concat(t))}},e))}))):i.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"main-".concat(n))},className:o.state.active==="main-".concat(n)?"active":null},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),"\n"),"\n")})))}}])&&d(t.prototype,a),r&&d(t,r),n}(),g=["xs","sm","md","lg","xl","xxl"];E.propTypes={items:m.a.array.isRequired,vertsize:m.a.oneOf(g),widesize:m.a.oneOf(g)};var w=E;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return k}),n.d(t,"TwoLevels",function(){return T}),n.d(t,"IconsOnly",function(){return j}),n.d(t,"Mix",function(){return z}),n.d(t,"Mobile",function(){return F}),n.d(t,"NavText",function(){return I});var x=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-standard"},"Standard nav"),i.a.createElement("p",null,"Add class ",i.a.createElement(c.Property,{value:".nav"})," and ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",i.a.createElement(l.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",i.a.createElement(l.a,{className:"language-html"},"<i>")," and ",i.a.createElement(l.a,{className:"language-html"},"<span>")," with your desired ",i.a.createElement(a.a,{to:"/docs/core/icons"},"icon")," and text. ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:x})))},T=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),i.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",i.a.createElement(l.a,{className:"language-html"},"<div>")," with class ",i.a.createElement(c.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",i.a.createElement(l.a,{className:"language-html"},"<ul>")," with ",i.a.createElement(l.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:S})))},j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-tablet"},"Icons only"),i.a.createElement("p",null,"To display only icons use class ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",i.a.createElement(c.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",items:S})))},z=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),i.a.createElement("p",null,"You can also use both icons only and wide together."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",widesize:"lg",items:S})))},F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),i.a.createElement("p",null,"To only display mobile view use class ",i.a.createElement(c.Property,{value:".nav"})," alone."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{items:x})))},I=function(){return i.a.createElement("div",{className:"col-lg-10 doc-body"},i.a.createElement(c.ExperimentalComponentAlert,null),i.a.createElement("p",{className:"lead"},"Navs."),i.a.createElement(k,null),i.a.createElement(T,null),i.a.createElement(j,null),i.a.createElement(z,null),i.a.createElement(F,null))},A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,N(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){s.nav.init()}},{key:"componentDidMount",value:function(){s.nav.init()}},{key:"render",value:function(){return i.a.createElement("div",{className:"doc-container"},i.a.createElement("div",{className:"row"},i.a.createElement(I,null),i.a.createElement(c.DocToc,{component:I})))}}])&&_(n.prototype,a),r&&_(n,r),t}();t.default=A}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?fe625f36f23a9f775c99