(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,3,45,46,47,48,49,50,52],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),r=n.n(a),o=n(2),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=u},423:function(e,t,n){"use strict";var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(423);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(423);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},427:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},428:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),o=n.n(r),p=n(432),c=n(433),f=n.n(c),d=n(434);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,c=e.hideValue,l=e.removeList,t=e.showCasePanel,n=e.codeFigure,u=e.dangerousHTML,i=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&u)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?i(e):l?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?i(a):l?s(a):Object(p.renderToStaticMarkup)(a);else switch(b(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,y({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",y({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",y({key:t},o({token:e,key:t})))}))}))}))},null):null)};l.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=l},431:function(e,t,n){"use strict";n.r(t);var a=n(422);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var o=n(429);n.d(t,"DocHeading",function(){return o.default});var c=n(430);n.d(t,"DocToc",function(){return c.default});var l=n(424);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(425);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(426);n.d(t,"Icon",function(){return i.default});var s=n(427);n.d(t,"PxScript",function(){return s.default})},491:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(184),r=n(435),l=n.n(r),u=n(431),i=n(68),s=n(2),m=n.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,y(n).call(this,e))).state={active:1},t}var t,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,o["Component"]),t=n,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var n=this,e=this.props,t=e.mode,a=e.items;return c.a.createElement("div",{className:"tabs".concat(t?" tabs-horizontal-".concat(t):"")},"\n",c.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),c.a.createElement("ul",null,a.map(function(e,t){return c.a.createElement("li",{key:"tab-item-".concat(e,"-").concat(t),className:n.state.active===t?"active":null},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return n.setActive(e,t)}},e),"\n")})))}}])&&f(t.prototype,a),r&&f(t,r),n}();v.propTypes={mode:m.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:m.a.array.isRequired};var E=v;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return O}),n.d(t,"Collapsed",function(){return C}),n.d(t,"TabsText",function(){return P});var T=["Kort","Rabatter","Transaksjoner","Faktura","Instillinger","Audit trail"],O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"Add class ",c.a.createElement(u.Property,{value:".tabs"})," with a ",c.a.createElement(u.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",c.a.createElement(l.a,{className:"language-html"},"<ul>")," and nest ",c.a.createElement(l.a,{className:"language-html"},"<li>")," as needed. The ",c.a.createElement(u.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",c.a.createElement(a.a,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),c.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(E,{mode:"xl",items:T})))},C=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"collapsed"},"Collapsed"),c.a.createElement("p",null,"If no ",c.a.createElement(u.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),c.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(E,{items:T})))},P=function(){return c.a.createElement("div",{className:"col-lg-10 doc-body"},c.a.createElement(u.ExperimentalComponentAlert,null),c.a.createElement("p",{className:"lead"},"Tabs..."),c.a.createElement(O,null),c.a.createElement(C,null))},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,w(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){i.tabs.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(P,null),c.a.createElement(u.DocToc,{component:P})))}}])&&g(n.prototype,a),r&&g(n,r),t}();t.default=j}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?3ec197c8078c5ccfb6db