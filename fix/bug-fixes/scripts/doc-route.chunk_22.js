(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[34,50,51,52,53,54,55],{147:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return o});var t=n(0),l=n.n(t),r=n(1),c=n.n(r),o=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),t,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&t?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=s},148:function(e,a,n){"use strict";var t=n(0),o=n.n(t),l=n(1),r=n.n(l),c=function(e){var a=e.id,n=e.type,t=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=c},149:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(148);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(148);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(1),c=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:n.n(r).a.string.isRequired},a.default=c},152:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),l=n(1),r=n.n(l),c=function(e){var a,n,t=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(n=l.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=c},156:function(e,a,n){"use strict";n.r(a);var t=n(147);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var l=n(154);n.d(a,"ComponentPreview",function(){return l.default});var r=n(153);n.d(a,"DocHeading",function(){return r.default});var c=n(155);n.d(a,"DocToc",function(){return c.default});var o=n(149);n.d(a,"DeprecatedComponentAlert",function(){return o.default});var s=n(150);n.d(a,"ExperimentalComponentAlert",function(){return s.default});var u=n(151);n.d(a,"Icon",function(){return u.default});var m=n(152);n.d(a,"PxScript",function(){return m.default})},186:function(e,a,n){"use strict";n.r(a),n.d(a,"DefaultWell",function(){return c}),n.d(a,"WellSizes",function(){return o}),n.d(a,"WellText",function(){return s});var t=n(0),l=n.n(t),r=n(156),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"default-well"},"Default well"),l.a.createElement("p",null,"Use the ",l.a.createElement("code",{className:"token property"},".well")," as a simple effect on an element to give it an inset effect."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"well"},"Look ma, im in a well!")))},o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"well-sizes"},"Well sizes"),l.a.createElement("p",null,"Use the two optional ",l.a.createElement("code",{className:"token property"},".well-sm")," and ",l.a.createElement("code",{className:"token property"},".well-lg")," classes to control padding and rounded corners."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"well well-sm"},"Look ma, im in a small well!")),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"well well-lg"},"Look ma, im in a large well!")))},s=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement(r.ExperimentalComponentAlert,null),l.a.createElement("p",{className:"lead"},"Well well well, look what the cat dragged in..."),l.a.createElement(c,null),l.a.createElement(o,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(s,null),l.a.createElement(r.DocToc,{component:s})))}}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?3a29ba05a3311592adb6