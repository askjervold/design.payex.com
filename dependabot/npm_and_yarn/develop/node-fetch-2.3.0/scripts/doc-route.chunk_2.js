(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[20,44,46,47,48,49,51],{421:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return u});var n=t(1),l=t.n(n),r=t(2),c=t.n(r),u=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},u.propTypes={value:c.a.string.isRequired},a.default=s},422:function(e,a,t){"use strict";var n=t(1),u=t.n(n),l=t(2),r=t.n(l),c=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return u.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?u.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?u.a.createElement("p",null,r):null,c?"\n":"",c?u.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?u.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",u.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=c},423:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(422);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(422);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),c=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(r).a.string.isRequired},a.default=c},426:function(e,a,t){"use strict";t.r(a);var n=t(1),u=t.n(n),l=t(2),r=t.n(l),c=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(t=l.map(function(e,a){return u.a.createElement("span",{key:a},e,u.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return u.a.createElement("span",{key:a},e,a<c.length-1?u.a.createElement("span",{className:"token punctuation"},", "):null)})),u.a.createElement("code",null,u.a.createElement("span",null,"px"),u.a.createElement("span",{className:"token punctuation"},"."),u.a.createElement("span",null,n),u.a.createElement("span",{className:"token punctuation"},"."),t,u.a.createElement("span",{className:"token function"},r),u.a.createElement("span",{className:"token punctuation"},"("),a,u.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=c},430:function(e,a,t){"use strict";t.r(a);var n=t(421);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(427);t.d(a,"ComponentPreview",function(){return l.default});var r=t(428);t.d(a,"DocHeading",function(){return r.default});var c=t(429);t.d(a,"DocToc",function(){return c.default});var u=t(423);t.d(a,"DeprecatedComponentAlert",function(){return u.default});var s=t(424);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var o=t(425);t.d(a,"Icon",function(){return o.default});var m=t(426);t.d(a,"PxScript",function(){return m.default})},454:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return c}),t.d(a,"FurtherUsage",function(){return u}),t.d(a,"BadgeText",function(){return s});var n=t(1),l=t.n(n),r=t(430),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"Overview... ",l.a.createElement("code",{className:"token property"},".badge"),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-default"},"default")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-brand"},"brand")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-blue"},"blue")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-purple"},"purple")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-yellow"},"yellow")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-red"},"red"))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"further-usage"},"Further usage"),l.a.createElement("p",null,"Further usage... ",l.a.createElement(r.Property,{value:".badge"}),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Badge ",l.a.createElement("small",{className:"badge badge-default"},"default")),l.a.createElement("h2",null,"Badge ",l.a.createElement("small",{className:"badge badge-brand"},"brand")),l.a.createElement("h3",null,"Badge ",l.a.createElement("small",{className:"badge badge-blue"},"blue")),l.a.createElement("h4",null,"Badge ",l.a.createElement("small",{className:"badge badge-purple"},"purple")),l.a.createElement("h5",null,"Badge ",l.a.createElement("small",{className:"badge badge-yellow"},"yellow")),l.a.createElement("h6",null,"Badge ",l.a.createElement("small",{className:"badge badge-red"},"red"))))},s=function(){return l.a.createElement("div",{className:"col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Badge..."),l.a.createElement(c,null),l.a.createElement(u,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(s,null),l.a.createElement(r.DocToc,{component:s})))}}}]);
//# sourceMappingURL=doc-route.chunk_2.js.map?f124d451079a6c8f481a