(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,50,51,52,53,54,55],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(0),l=a.n(n),r=a(1),o=a.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(1),r=a.n(l),o=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=o},149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(148);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(148);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(r).a.string.isRequired},t.default=o},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(1),r=a.n(l),o=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(a=l.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=o},156:function(e,t,a){"use strict";a.r(t);var n=a(147);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(154);a.d(t,"ComponentPreview",function(){return l.default});var r=a(153);a.d(t,"DocHeading",function(){return r.default});var o=a(155);a.d(t,"DocToc",function(){return o.default});var c=a(149);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=a(150);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(151);a.d(t,"Icon",function(){return u.default});var m=a(152);a.d(t,"PxScript",function(){return m.default})},184:function(e,t,a){"use strict";a.r(t),a.d(t,"Overview",function(){return d}),a.d(t,"Options",function(){return E}),a.d(t,"PremadeToasts",function(){return f}),a.d(t,"ToastText",function(){return y});var r=a(0),o=a.n(r),n=a(38),c=a(156),l=a(18);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"You want jam on that toast?"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.toast({ html: "I am a toast!" });'),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button onclick="px.toast({ html: \'I am a toast!\' })" class="btn btn-primary">Toast!</button>'),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:"I am a toast!"})}},"Click for toast!")))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"options"},"Options"),o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"html"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},'""')),o.a.createElement("td",null,"The HTML content of the Toast.")),o.a.createElement("tr",null,o.a.createElement("td",null,"type"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},'""')),o.a.createElement("td",null,"Premade alert types; ",o.a.createElement("code",{className:"token attr-value"},"success"),", ",o.a.createElement("code",{className:"token attr-value"},"neutral"),", ",o.a.createElement("code",{className:"token attr-value"},"warning")," and ",o.a.createElement("code",{className:"token attr-value"},"danger")," are available.")),o.a.createElement("tr",null,o.a.createElement("td",null,"dismissable"),o.a.createElement("td",null,"Boolean"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},"true")),o.a.createElement("td",null,"Wether or not the alert should be dismissable by the user (close button).")),o.a.createElement("tr",null,o.a.createElement("td",null,"icon"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},'""')),o.a.createElement("td",null,"Custom icon for the toast. See ",o.a.createElement(n.a,{to:"/docs/core/icons"},"icons")," for more info.")),o.a.createElement("tr",null,o.a.createElement("td",null,"displayLength"),o.a.createElement("td",null,"Number"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},"4000")),o.a.createElement("td",null,"Length in ms the Toast stays before dismissal.")),o.a.createElement("tr",null,o.a.createElement("td",null,"classes"),o.a.createElement("td",null,"Array of strings"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},"[]")),o.a.createElement("td",null,"Classes to be added to the toast element.")),o.a.createElement("tr",null,o.a.createElement("td",null,"completeCallback"),o.a.createElement("td",null,"Function"),o.a.createElement("td",null,o.a.createElement("code",{className:"token attr-value"},"null")),o.a.createElement("td",null,"Callback function called when toast is dismissed.")))))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"premade-toasts"},"Premade toasts"),o.a.createElement("p",null,"There are four premade toast styles other than the default one; ",o.a.createElement("span",{className:"token attr-value"},"neutral"),", ",o.a.createElement("span",{className:"token attr-value"},"success"),", ",o.a.createElement("span",{className:"token attr-value"},"warning")," and ",o.a.createElement("span",{className:"token attr-value"},"danger"),". Apply the desired one to the options object and be amazed!"),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button type="button" onclick="px.toast({ html: \'I am a neutral toast!\', type: \'neutral\' })" class="btn btn-primary">Neutral toast</button>','<button type="button" onclick="px.toast({ html: \'I am a success toast!\', type: \'success\' })" class="btn btn-primary">Success toast</button>','<button type="button" onclick="px.toast({ html: \'I am a warning toast!\', type: \'warning\' })" class="btn btn-primary">Warning toast</button>','<button type="button" onclick="px.toast({ html: \'I am a danger toast!\', type: \'danger\' })" class="btn btn-primary">Danger toast</button>'),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:"I am a toast!",type:"neutral"})}},"Neutral toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:"I am a toast!",type:"success"})}},"Success toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:"I am a toast!",type:"warning"})}},"Warning toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:"I am a toast!",type:"danger"})}},"Danger toast")))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"custom-html"},"Custom HTML"),o.a.createElement("p",null,"You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks."),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";","\n","px.toast({ html: toastHtml });"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(l.toast)({html:'<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class="btn toast-action">Undo</button>'})}},"Toast with action")))},y=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement(c.ExperimentalComponentAlert,null),o.a.createElement("p",{className:"lead"},"Toast..."),o.a.createElement(d,null),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(b,null))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,i(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),a=t,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(y,null),o.a.createElement(c.DocToc,{component:y})))}}])&&u(a.prototype,n),l&&u(a,l),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?3a29ba05a3311592adb6