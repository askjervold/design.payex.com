(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17,50,51,52,53,54,55],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(0),r=n.n(a),l=n(1),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=i},148:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},152:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,n){"use strict";n.r(t);var a=n(147);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(154);n.d(t,"ComponentPreview",function(){return r.default});var l=n(153);n.d(t,"DocHeading",function(){return l.default});var c=n(155);n.d(t,"DocToc",function(){return c.default});var o=n(149);n.d(t,"DeprecatedComponentAlert",function(){return o.default});var i=n(150);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(151);n.d(t,"Icon",function(){return s.default});var u=n(152);n.d(t,"PxScript",function(){return u.default})},202:function(e,t,n){"use strict";n.r(t);var l=n(0),d=n.n(l),c=n(156),a=n(1),r=n.n(a),o=function(e){var t=e.type,n=e.title,a=e.imgSrc,r=e.icon,l=e.highlightTitle,c=e.highlightSubTitle,o=e.text,i=e.smallText,s=e.btnTxt,u=e.footerTxt,m=e.footerLink,p=e.footerLinkTxt;return d.a.createElement("li",{className:"card".concat(t?" card-".concat(t):"")},n?d.a.createElement("header",null,d.a.createElement("h3",null,d.a.createElement("a",{href:"#"},n))):null,a?d.a.createElement("div",{className:"card-img"},"\n",d.a.createElement("img",{src:a,alt:""}),"\n"):null,d.a.createElement("div",{className:"highlight"},r?d.a.createElement("i",{className:"material-icons"},r):null,d.a.createElement("div",{className:"highlight-wrapper"},l?d.a.createElement("h4",{className:"highlight-title"},l):null,c?d.a.createElement("p",{className:"highlight-subtitle"},c):null)),d.a.createElement("div",{className:"card-body"},d.a.createElement("p",null,o),d.a.createElement("small",null,i)),d.a.createElement("footer",null,d.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},s),u?d.a.createElement("div",{className:"footer-text"},d.a.createElement("p",null,u)):null,p?d.a.createElement("div",{className:"footer-link"},d.a.createElement("a",{href:m||"#"},p)):null))};o.propTypes={type:r.a.oneOf(["brand","default","light"]),title:r.a.string,imgSrc:r.a.string,icon:r.a.string,highlightTitle:r.a.string,highlightSubTitle:r.a.string,text:r.a.string,smallText:r.a.string,btnTxt:r.a.string,footerTxt:r.a.string,footerLink:r.a.string,footerLinkTxt:r.a.string};var i=o;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return h}),n.d(t,"CardText",function(){return E});var h=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"overview"},"Overview"),d.a.createElement("p",null,"Overview... ",d.a.createElement("code",{className:"token property"},".card"),"..."),d.a.createElement("p",null,"... ",d.a.createElement("code",{className:"token property"},".card-default"),"..."),d.a.createElement("p",null,"... ",d.a.createElement("code",{className:"token property"},".card-brand"),"..."),d.a.createElement("p",null,"... ",d.a.createElement("code",{className:"token property"},".card-light"),"..."),d.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement("div",{className:"cards"},d.a.createElement("ul",null,d.a.createElement(i,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300",icon:"account_balance",highlightTitle:"725 NOK",highlightSubTitle:"Outstanding balance",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"}),d.a.createElement(i,{type:"brand",title:"Card brand",imgSrc:"https://picsum.photos/300",icon:"face",highlightTitle:"Bob Corlsan",highlightSubTitle:"bob.corlsan@payex.com",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"}),d.a.createElement(i,{type:"light",title:"Card light",imgSrc:"https://picsum.photos/300",icon:"verified_user",highlightTitle:"75%",highlightSubTitle:"Complete",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"})))))},E=function(){return d.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},d.a.createElement(c.ExperimentalComponentAlert,null),d.a.createElement("p",{className:"lead"},"Card..."),d.a.createElement(h,null))},g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return d.a.createElement("div",{className:"doc-container"},d.a.createElement("div",{className:"row"},d.a.createElement(E,null),d.a.createElement(c.DocToc,{component:E})))}}])&&u(n.prototype,a),r&&u(n,r),t}();t.default=g}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?53f12ba90cda9b6800ed