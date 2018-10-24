(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[45,50,51,52,53,54,55],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(0),r=a.n(n),c=a(1),l=a.n(c),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},o.propTypes={value:l.a.string.isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(1),c=a.n(r),l=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(148);t.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(148);t.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:a.n(c).a.string.isRequired},t.default=l},152:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(1),c=a.n(r),l=function(e){var t,a,n=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(a=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return o.a.createElement("span",{key:t},e,t<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},156:function(e,t,a){"use strict";a.r(t);var n=a(147);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(154);a.d(t,"ComponentPreview",function(){return r.default});var c=a(153);a.d(t,"DocHeading",function(){return c.default});var l=a(155);a.d(t,"DocToc",function(){return l.default});var o=a(149);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var s=a(150);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(151);a.d(t,"Icon",function(){return u.default});var i=a(152);a.d(t,"PxScript",function(){return i.default})},195:function(e,t,a){"use strict";a.r(t),a.d(t,"QuickStart",function(){return m}),a.d(t,"Css",function(){return p}),a.d(t,"JavaScript",function(){return d}),a.d(t,"IntroductionText",function(){return f});var n=a(0),r=a.n(n),c=a(157),l=a.n(c),o=a(156),s="/fix/bug-fixes/",u="https://design.payex.com".concat(s,"scripts/px-script.js"),i="https://design.payex.com".concat(s,"styles/px.css"),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"quick-start"},"Quick start"),r.a.createElement("p",null,"To quickly add the designguide to your project, include the snippets below in your project."))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"css"},"CSS"),r.a.createElement("p",null,"Copy-paste the stylesheet ",r.a.createElement(l.a,{className:"language-html"},"<link>")," into your ",r.a.createElement(l.a,{className:"language-html"},"<head>")," before all other stylesheets to load our CSS."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("link",{rel:"stylesheet",href:i})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript"},"JavaScript"),r.a.createElement("p",null,"Many of our components require the use of JavaScript to function. Place the following ",r.a.createElement(l.a,{className:"language-html"},"<script>")," tag near the end of your pages, right before the closing ",r.a.createElement(l.a,{className:"language-html"},"</body>")," tag, to enable them."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("script",{src:u})))},f=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Get started with the PayEx DesignGuide."),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(d,null))};t.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(o.DocToc,{component:f})))}}}]);
//# sourceMappingURL=doc-route.chunk_33.js.map?3a29ba05a3311592adb6