(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,41,43,44,45,46,47],{422:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return u});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),u=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},u.propTypes={value:c.a.string.isRequired},a.default=s},423:function(e,a,t){"use strict";var n=t(1),u=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return u.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?u.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?u.a.createElement("p",null,l):null,c?"\n":"",c?u.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?u.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",u.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},424:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),u=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return u.a.createElement("span",{key:a},e,u.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return u.a.createElement("span",{key:a},e,a<c.length-1?u.a.createElement("span",{className:"token punctuation"},", "):null)})),u.a.createElement("code",null,u.a.createElement("span",null,"px"),u.a.createElement("span",{className:"token punctuation"},"."),u.a.createElement("span",null,n),u.a.createElement("span",{className:"token punctuation"},"."),t,u.a.createElement("span",{className:"token function"},l),u.a.createElement("span",{className:"token punctuation"},"("),a,u.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},431:function(e,a,t){"use strict";t.r(a);var n=t(422);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(429);t.d(a,"ComponentPreview",function(){return r.default});var l=t(428);t.d(a,"DocHeading",function(){return l.default});var c=t(430);t.d(a,"DocToc",function(){return c.default});var u=t(424);t.d(a,"DeprecatedComponentAlert",function(){return u.default});var s=t(425);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var o=t(426);t.d(a,"Icon",function(){return o.default});var m=t(427);t.d(a,"PxScript",function(){return m.default})},477:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(432),c=t.n(l),u=t(431),s=t(2),o=function(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Products")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Gadgets")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Gadget #1")))},m=function(e){var a=e.items;return r.a.createElement("ol",{className:"breadcrumb"},a?a.map(function(e,a){return r.a.createElement("li",{key:a},e.href?r.a.createElement("a",{href:e.href},e.title):r.a.createElement("span",null,e.title))}):r.a.createElement(o,null))};m.propTypes={items:t.n(s).a.array};var i=m;t.d(a,"BasicBreadCrumb",function(){return d}),t.d(a,"DisabledBreadcrumb",function(){return p}),t.d(a,"BreadcrumbText",function(){return E});var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-usage"},"Basic usage"),r.a.createElement("p",null,"Add class ",r.a.createElement(u.Property,{value:".breadcrumb"})," to a containing ",r.a.createElement(c.a,{className:"language-html"},"<ol>")," element and nest a ",r.a.createElement(c.a,{className:"language-html"},"<a>")," or ",r.a.createElement(c.a,{className:"language-html"},"<span>")," element inside the ",r.a.createElement(c.a,{className:"language-html"},"<li>")," elements."),r.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(i,{items:[{title:"Home",href:"#"},{title:"Products",href:"#"},{title:"Gadgets",href:"#"},{title:"Gadget #1"}]})))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"disable-a-breadcrumb"},"Disable a breadcrumb"),r.a.createElement("p",null,"To disable a breadcrumb element, simply use a ",r.a.createElement(c.a,{className:"language-html"},"<span>")," element within the ",r.a.createElement(c.a,{className:"language-html"},"<li>")," element (will not work for last-child)."),r.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(i,{items:[{title:"Home",href:"#"},{title:"Products"},{title:"Gadgets",href:"#"},{title:"Gadget #1"}]})))},E=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content."),r.a.createElement(d,null),r.a.createElement(p,null))};a.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null),r.a.createElement(u.DocToc,{component:E})))}}}]);
//# sourceMappingURL=doc-route.chunk_3.js.map?5d9efeea8f0f6b6c6bfb