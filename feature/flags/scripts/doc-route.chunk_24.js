(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[24,3,46,47,48,49,51,52,53],{250:function(e,t,n){"use strict";n.r(t);var o=n(29),r=n.n(o),a=n(1),i=n.n(a),c=n(2),l=n.n(c),s=n(200),u=n(479);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=p(this,a.call.apply(a,[this].concat(o)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(i.a.Component);f.propTypes={basename:l.a.string,forceRefresh:l.a.bool,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=d(this,a.call.apply(a,[this].concat(o)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(i.a.Component);h.propTypes={basename:l.a.string,getUserConfirmation:l.a.func,hashType:l.a.oneOf(["hashbang","noslash","slash"]),children:l.a.node};var y=h,b=n(107),v=n(202);function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=g(this,a.call.apply(a,[this].concat(o)))).history=Object(s.d)(t.props),g(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(v.a,{history:this.history,children:this.props.children})},c}(i.a.Component);E.propTypes={initialEntries:l.a.array,initialIndex:l.a.number,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var w=E,O=n(480),k=n(20),T=n.n(k);var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);j.propTypes={when:l.a.bool,message:l.a.oneOfType([l.a.func,l.a.string]).isRequired},j.defaultProps={when:!0},j.contextTypes={router:l.a.shape({history:l.a.shape({block:l.a.func.isRequired}).isRequired}).isRequired};var P=j,R=n(494),C=n(201),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?N({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(a){function c(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r=x(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return S(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,o=t.context;o.action="PUSH",o.location=_(n,Object(s.c)(e)),o.url=L(o.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,o=t.context;o.action="REPLACE",o.location=_(n,Object(s.c)(e)),o.url=L(o.location)},r.handleListen=function(){return H},r.handleBlock=function(){return H},x(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},c.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},c.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),o=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:N({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(v.a,N({},o,{history:r}))},c}(i.a.Component);q.propTypes={basename:l.a.string,context:l.a.object.isRequired,location:l.a.oneOfType([l.a.string,l.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:l.a.object.isRequired};var A=q,W=n(482),B=n(496).a,D=n(93).a,F=n(481);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return R.a}),n.d(t,"Route",function(){return C.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return A}),n.d(t,"Switch",function(){return W.a}),n.d(t,"generatePath",function(){return B}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return F.a})},483:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var o=n(1),r=n.n(o),a=n(2),c=n.n(a),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),o,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&o?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},o)):void 0};l.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=l},484:function(e,t,n){"use strict";n.r(t);var o=n(483);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var r=n(486);n.d(t,"ComponentPreview",function(){return r.default});var a=n(492);n.d(t,"DocContainer",function(){return a.default});var c=n(493);n.d(t,"DocHeading",function(){return c.default});var i=n(487);n.d(t,"DocToc",function(){return i.default});var l=n(488);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var s=n(489);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(490);n.d(t,"Icon",function(){return u.default});var p=n(491);n.d(t,"PxScript",function(){return p.default})},485:function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=n(2),a=n.n(r),c=function(e){var t=e.id,n=e.type,o=e.icon,r=e.close,a=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?i.a.createElement("i",{className:"material-icons alert-icon"},o):null,a?"\n":"",a?i.a.createElement("p",null,a):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=c},486:function(e,t,n){"use strict";n.r(t);var o=n(1),p=n.n(o),r=n(2),a=n.n(r),f=n(497),c=n(498),m=n.n(c),d=n(499);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var o=e.children,r=e.language,a=e.removeOuterTag,c=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},o)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&l)t="","function"==typeof(e=o).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&o&&"function"==typeof o.map)o.map(function(e){n+=a?s(e):i?u(e):Object(f.renderToStaticMarkup)(e)});else if("html"===r)n+=a?s(o):i?u(o):Object(f.renderToStaticMarkup)(o);else switch(y(o)){case"string":n=o;break;case"object":o.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=i},487:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(2),r=n.n(o),i=n(495);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)o.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,a["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return c.a.createElement("div",{className:"col-2 d-none d-lg-block"},c.a.createElement("div",{className:"doc-toc"},c.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[t+1].top;return c.a.createElement("li",{key:t,className:n?"active":""},c.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),o&&s(t,o),r}();m.propTypes={component:r.a.func.isRequired},t.default=m},488:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(485);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},489:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(485);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},490:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(a).a.string.isRequired},t.default=c},491:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),c=function(e){var t,n,o=e.component,r=e.subComponents,a=e.func,c=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,o),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},a),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=c},492:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),c=n.n(a),i=n(484),l=function(e){var t=e.docToc,n=e.children,o=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(o,null),t?r.a.createElement(i.DocToc,{component:o}):null))};l.propTypes={docToc:c.a.bool},t.default=l},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=l(n(1)),c=l(n(2)),i=n(250);function l(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,f=null;function m(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,o({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,i.Link)}function b(e){return h(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=y.propTypes=v},554:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(484),c=n(2),i=n.n(c),l=function(e){var t=e.name,n=e.hex;return r.a.createElement("div",{className:"color-preview bg-".concat(t)},r.a.createElement("p",null,t),r.a.createElement("p",null,n))};l.propTypes={name:i.a.string.isRequired,hex:i.a.string.isRequired};var s=l;n.d(t,"ColorPalette",function(){return u});var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"color-palette"},"Color palette"),r.a.createElement("p",null,"The PayEx DesignGuide color palette..."),r.a.createElement(a.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"brand",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"default",hex:"#3c3c3c"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"neutral",hex:"#266c9a"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"success",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"warning",hex:"#ff9f00"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(s,{name:"danger",hex:"#cd2e00"})))))};t.default=function(){return r.a.createElement(a.DocContainer,null,r.a.createElement("p",{className:"lead"},"Here there be colors..."),r.a.createElement(u,null))}}}]);
//# sourceMappingURL=doc-route.chunk_24.js.map?419c3d8d005d7d5d64d0