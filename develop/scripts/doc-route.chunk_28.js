(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[29,45,47,48,49,50,52],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),l=n.n(a),r=n(2),c=n.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=s},422:function(e,t,n){"use strict";var a=n(1),i=n.n(a),l=n(2),r=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,r=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?i.a.createElement("p",null,r):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},423:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(r).a.string.isRequired},t.default=c},426:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(2),r=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(n=l.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},r),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(427);n.d(t,"ComponentPreview",function(){return l.default});var r=n(428);n.d(t,"DocHeading",function(){return r.default});var c=n(429);n.d(t,"DocToc",function(){return c.default});var i=n(423);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(424);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var o=n(425);n.d(t,"Icon",function(){return o.default});var u=n(426);n.d(t,"PxScript",function(){return u.default})},471:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicList",function(){return l}),n.d(t,"InlineList",function(){return E}),n.d(t,"DescriptionList",function(){return d}),n.d(t,"SettingsList",function(){return f}),n.d(t,"ItemList",function(){return g}),n.d(t,"StatusItemList",function(){return v}),n.d(t,"StripedItemList",function(){return y}),n.d(t,"ListsText",function(){return h});var r=n(1),c=n.n(r),i=n(430),s=n(42);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-list"},"Basic list"),c.a.createElement("p",null,"Basic lists info...",c.a.createElement(i.Property,{value:".list"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,"Bread"),c.a.createElement("li",null,"Coffee beans"),c.a.createElement("li",null,"Milk"),c.a.createElement("li",null,"Butter"))),c.a.createElement("h3",null,"Nested list"),c.a.createElement("p",null,"Nested lists are also pretty sweet..."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,"Coffee"),c.a.createElement("li",null,"Tea",c.a.createElement("ul",null,c.a.createElement("li",null,"Black tea"),c.a.createElement("li",null,"Green tea"),c.a.createElement("li",null,"Ice tea"))),c.a.createElement("li",null,"Milk"))))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"inline-list"},"Inline list"),c.a.createElement("p",null,"Inline lists info...",c.a.createElement(i.Property,{value:".list-inline"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"list list-inline"},c.a.createElement("li",null,"Coffee"),c.a.createElement("li",null,"Tea"),c.a.createElement("li",null,"Milk"))))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"description-list"},"Description list"),c.a.createElement("p",null,"Description lists info...",c.a.createElement(i.Property,{value:".description-list"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("dl",{className:"description-list"},"\n",c.a.createElement("dt",null,"Frog"),c.a.createElement("dd",null,"Wet green thing that croaks."),"\n",c.a.createElement("dt",null,"Rabbit"),c.a.createElement("dd",null,"Warm fluffy thing that jumps."),"\n",c.a.createElement("dt",null,"Color"),c.a.createElement("dd",null,"Any hue except white or black."),"\n")))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"settings-list"},"Settings list"),c.a.createElement("p",null,"Settings lists info...",c.a.createElement(i.Property,{value:".settings-list"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"settings-list"},c.a.createElement("li",null,"\n",c.a.createElement("i",{className:"material-icons color-success"},"check"),"Shovels and tapestry newsletter","\n"),c.a.createElement("li",null,"\n",c.a.createElement("i",{className:"material-icons color-warning"},"remove"),"Spoon collectors weekly newsletter","\n"),c.a.createElement("li",null,"\n",c.a.createElement("i",{className:"material-icons color-danger"},"clear"),"Energetic squirrels newsletter","\n"))))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"item-list"},"Item list "),c.a.createElement("p",null," Item list info...",c.a.createElement(i.Property,{value:".item-list"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"item-list"},c.a.createElement("li",null,"4925*********004"),c.a.createElement("li",null,"4925*********004"),c.a.createElement("li",null,"4925*********004"))))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"status-item-list"},"Status item list "),c.a.createElement("p",null," Status item list info...",c.a.createElement(i.Property,{value:".item-list"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"item-list"},c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("span",{className:"status status-success"},"Active"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("span",{className:"status status-warning"},"Expires soon"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("span",{className:"status status-danger"},"Expired"),"\n"))))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"item-list-striped"},"Striped item list"),c.a.createElement("p",null," Striped item list info...",c.a.createElement(i.Property,{value:".item-list-striped"})),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("ul",{className:"item-list item-list-striped"},c.a.createElement("li",null,c.a.createElement("span",null,"4925*********004"),c.a.createElement("div",{className:"action-list"},"\n",c.a.createElement(i.Icon,{icon:"more_vert"}),"\n",c.a.createElement("div",{className:"action-menu"},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(i.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(i.Icon,{icon:"business_center"}),"Add client"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(i.Icon,{icon:"add_circle"}),"Add document"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(i.Icon,{icon:"person_add"}),"Add user"),"\n"))),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",c.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",c.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("i",{className:"material-icons"},"star"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("span",{className:"status status-success"},"Active"),"\n",c.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},c.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},h=function(){return c.a.createElement("div",{className:"col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Lots of cool info about lists will be here..."),c.a.createElement(l,null),c.a.createElement(E,null),c.a.createElement(d,null),c.a.createElement(f,null),c.a.createElement(g,null),c.a.createElement(v,null),c.a.createElement(y,null))},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){s.a.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(h,null),c.a.createElement(i.DocToc,{component:h})))}}])&&o(n.prototype,a),l&&o(n,l),t}();t.default=b}}]);
//# sourceMappingURL=doc-route.chunk_28.js.map?68aec4092254539e0ef6