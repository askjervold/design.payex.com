(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[49],{201:function(t,e,n){"use strict";n.r(e);var o=n(28),r=n.n(o),i=n(1),s=n.n(i),a=n(2),c=n.n(a),u=n(151),p=n(427);function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(i){function a(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e=l(this,i.call.apply(i,[this].concat(o)))).history=Object(u.a)(e.props),l(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,i),a.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},a.prototype.render=function(){return s.a.createElement(p.a,{history:this.history,children:this.props.children})},a}(s.a.Component);f.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var h=f;function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=function(i){function a(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e=y(this,i.call.apply(i,[this].concat(o)))).history=Object(u.b)(e.props),y(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,i),a.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},a.prototype.render=function(){return s.a.createElement(p.a,{history:this.history,children:this.props.children})},a}(s.a.Component);d.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var b=d,m=n(94),w=n(153);function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var g=function(i){function a(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e=v(this,i.call.apply(i,[this].concat(o)))).history=Object(u.d)(e.props),v(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,i),a.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},a.prototype.render=function(){return s.a.createElement(w.a,{history:this.history,children:this.props.children})},a}(s.a.Component);g.propTypes={initialEntries:c.a.array,initialIndex:c.a.number,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var O=g,j=n(428),R=n(19),T=n.n(R);var P=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.enable=function(t){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(t)},e.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},e.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},e.prototype.componentWillReceiveProps=function(t){t.when?this.props.when&&this.props.message===t.message||this.enable(t.message):this.disable()},e.prototype.componentWillUnmount=function(){this.disable()},e.prototype.render=function(){return null},e}(s.a.Component);P.propTypes={when:c.a.bool,message:c.a.oneOfType([c.a.func,c.a.string]).isRequired},P.defaultProps={when:!0},P.contextTypes={router:c.a.shape({history:c.a.shape({block:c.a.func.isRequired}).isRequired}).isRequired};var E=P,k=n(443),_=n(152),C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function x(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var S=function(t){return"/"===t.charAt(0)?t:"/"+t},L=function(t,e){return t?C({},e,{pathname:S(t)+e.pathname}):e},H=function(t){return"string"==typeof t?t:Object(u.e)(t)},M=function(t){return function(){T()(!1,"You cannot %s with <StaticRouter>",t)}},W=function(){},B=function(i){function a(){var t,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=r=x(this,i.call.apply(i,[this].concat(n)))).createHref=function(t){return S(r.props.basename+H(t))},r.handlePush=function(t){var e=r.props,n=e.basename,o=e.context;o.action="PUSH",o.location=L(n,Object(u.c)(t)),o.url=H(o.location)},r.handleReplace=function(t){var e=r.props,n=e.basename,o=e.context;o.action="REPLACE",o.location=L(n,Object(u.c)(t)),o.url=H(o.location)},r.handleListen=function(){return W},r.handleBlock=function(){return W},x(r,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,i),a.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},a.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},a.prototype.render=function(){var t=this.props,e=t.basename,n=(t.context,t.location),o=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(t,e){if(!t)return e;var n=S(t);return 0!==e.pathname.indexOf(n)?e:C({},e,{pathname:e.pathname.substr(n.length)})}(e,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return s.a.createElement(w.a,C({},o,{history:r}))},a}(s.a.Component);B.propTypes={basename:c.a.string,context:c.a.object.isRequired,location:c.a.oneOfType([c.a.string,c.a.object])},B.defaultProps={basename:"",location:"/"},B.childContextTypes={router:c.a.object.isRequired};var N=B,q=n(430),A=n(444).a,U=n(80).a,I=n(429);n.d(e,"BrowserRouter",function(){return h}),n.d(e,"HashRouter",function(){return b}),n.d(e,"Link",function(){return m.a}),n.d(e,"MemoryRouter",function(){return O}),n.d(e,"NavLink",function(){return j.a}),n.d(e,"Prompt",function(){return E}),n.d(e,"Redirect",function(){return k.a}),n.d(e,"Route",function(){return _.a}),n.d(e,"Router",function(){return p.a}),n.d(e,"StaticRouter",function(){return N}),n.d(e,"Switch",function(){return q.a}),n.d(e,"generatePath",function(){return A}),n.d(e,"matchPath",function(){return U}),n.d(e,"withRouter",function(){return I.a})},435:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(2),r=n.n(o),s=n(442);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function r(t){var e,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=p(this,l(r).call(this,t))).state={headings:(n=e.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(t){if("ExperimentalComponentAlert"!==t.type.name&&"function"==typeof t.type)if("h2"===t.type().props.children.type)o.push({title:t.type().props.children.props.children,id:t.type().props.children.props.id});else{var e=t.type().props.children[0];if("h2"===e.type)o.push({title:e.props.children,id:e.props.id});else if("function"==typeof e.type){var n=e.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===t.type&&o.push({title:t.props.children,id:t.props.id})}),o),windowTopPosition:window.pageYOffset},e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(r,i["Component"]),e=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(t){window.scrollTo({top:t.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(t,e){t.top=0===e?0:document.getElementById(t.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return a.a.createElement("div",{className:"col-2 d-none d-lg-block"},a.a.createElement("div",{className:"doc-toc"},a.a.createElement("ul",null,this.state.headings.map(function(t,e){if(t.id&&t.title){var n=o.state.windowTopPosition>=t.top&&o.state.windowTopPosition<o.state.headings[e+1].top;return a.a.createElement("li",{key:e,className:n?"active":""},a.a.createElement(s.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:o.scrollToElement},t.title))}}))))}}])&&u(e.prototype,n),o&&u(e,o),r}();h.propTypes={component:r.a.func.isRequired},e.default=h},442:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.genericHashLink=d,e.HashLink=b,e.NavHashLink=m;var i=c(n(1)),a=c(n(2)),s=n(201);function c(t){return t&&t.__esModule?t:{default:t}}var u="",p=null,l=null,f=null;function h(){u="",null!==p&&p.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function y(){var t=document.getElementById(u);return null!==t&&(f(t),h(),!0)}function d(e,t){e.scroll,e.smooth;var n=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["scroll","smooth"]);return i.default.createElement(t,o({},n,{onClick:function(t){h(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout(function(){h()},1e4))},0))}}),e.children)}function b(t){return d(t,s.Link)}function m(t){return d(t,s.NavLink)}var w={onClick:a.default.func,children:a.default.node,scroll:a.default.func,to:a.default.oneOfType([a.default.string,a.default.object])};m.propTypes=b.propTypes=w}}]);
//# sourceMappingURL=doc-route.chunk_49.js.map?1c177c342ad56644840a