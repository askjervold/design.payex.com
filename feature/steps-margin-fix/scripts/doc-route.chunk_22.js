(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[22],{475:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(416),r=n.n(a),u=n(400),i=n(2),c=n.n(i),m=n(120),p=n.n(m),s=function(e){var t=e.icon,n=e.text,a=p()("material-icons","menu"===t?"topbar-btn-icon":"");return t||n?l.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",t?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:a},t),"\n\t\t"):null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"topbar-btn-text"},n),"\n\t"):null):null},b=function(e){var t=e.menu.items;return l.a.createElement("nav",{className:"topbar-nav"},t.map(function(e,t){return l.a.createElement(o.Fragment,{key:t},"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e))}),"\n")},f=function(e){var t=e.topbarContent,n=e.fixed,a=e.logout;return l.a.createElement("header",{className:"topbar".concat(n?" topbar-fixed":"")},"\n",l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{icon:t.btn.icon,text:t.btn.text,target:t.id}),"\n",l.a.createElement(b,{menu:t})):null,"\n",l.a.createElement("a",{href:"#",className:"topbar-logo",onClick:function(e){return e.preventDefault()}}),"\n",a?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{icon:"exit_to_app",text:"Log out"}),"\n"):null))};f.propTypes={topbarContent:c.a.object,fixed:c.a.bool,logout:c.a.bool};var y=f,d=n(57);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return k}),n.d(t,"FixedTopbar",function(){return F});var x={btn:{icon:"menu",text:"Menu"},items:["Link 1","Link 2","Link 3"]},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.Property,{value:".topbar"})," wrapper."),l.a.createElement("li",null,"Anchor with class ",l.a.createElement(u.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),l.a.createElement("p",null,"With this you get a topbar with the PayEx logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," and a ",l.a.createElement(r.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",l.a.createElement(u.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),l.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(y,{topbarContent:x,logout:!0})))},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"fixed-topbar"},"Fixed topbar"),l.a.createElement("p",null,"Add ",l.a.createElement(u.Property,{value:".topbar-fixed"})," with your ",l.a.createElement(u.Property,{value:".topbar"})," to get a fixed topbar. For a demonstration of the usage see the documentations top bar or implement it in your own project!"),l.a.createElement(u.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(y,{fixed:!0})))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){d.topbar.init(1)}},{key:"render",value:function(){return l.a.createElement(u.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"The topbar is used to give users an easily available navigational bar at the top of your web application."),l.a.createElement(k,null),l.a.createElement(F,null))}}])&&g(n.prototype,a),r&&g(n,r),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?e0aea64ff900298d936e