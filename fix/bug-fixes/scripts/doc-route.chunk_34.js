(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[46,50,51,52,53,54,55],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return s});var n=t(0),r=t.n(n),l=t(1),c=t.n(l),s=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},o=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},s.propTypes={value:c.a.string.isRequired},a.default=o},148:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return s.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?s.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?s.a.createElement("p",null,l):null,c?"\n":"",c?s.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?s.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",s.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},149:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(148);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(148);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},152:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(1),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return s.a.createElement("span",{key:a},e,s.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return s.a.createElement("span",{key:a},e,a<c.length-1?s.a.createElement("span",{className:"token punctuation"},", "):null)})),s.a.createElement("code",null,s.a.createElement("span",null,"px"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",null,n),s.a.createElement("span",{className:"token punctuation"},"."),t,s.a.createElement("span",{className:"token function"},l),s.a.createElement("span",{className:"token punctuation"},"("),a,s.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},156:function(e,a,t){"use strict";t.r(a);var n=t(147);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(154);t.d(a,"ComponentPreview",function(){return r.default});var l=t(153);t.d(a,"DocHeading",function(){return l.default});var c=t(155);t.d(a,"DocToc",function(){return c.default});var s=t(149);t.d(a,"DeprecatedComponentAlert",function(){return s.default});var o=t(150);t.d(a,"ExperimentalComponentAlert",function(){return o.default});var m=t(151);t.d(a,"Icon",function(){return m.default});var u=t(152);t.d(a,"PxScript",function(){return u.default})},196:function(e,a,t){"use strict";t.r(a),t.d(a,"TextColors",function(){return o}),t.d(a,"BackgroundColors",function(){return m}),t.d(a,"ColorsText",function(){return u});var n=t(0),r=t.n(n),l=t(157),c=t.n(l),s=t(156),o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-colors"},"Text colors"),r.a.createElement("p",null,"To use a color simply prepend ",r.a.createElement("code",{className:"token property"},"color-")," to the desired color and add it to the element class attribute."),r.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"color-brand"},"This text is color-brand."),r.a.createElement("p",{className:"color-default"},"This text is color-default."),r.a.createElement("p",{className:"color-neutral"},"This text is color-neutral."),r.a.createElement("p",{className:"color-success"},"This text is color-success."),r.a.createElement("p",{className:"color-warning"},"This text is color-warning."),r.a.createElement("p",{className:"color-danger"},"This text is color-danger.")),r.a.createElement("h3",null,"With ",r.a.createElement("code",{className:"token property"},".text-muted")),r.a.createElement("p",null,"To get a muted effect on the color you are using, append a ",r.a.createElement(c.a,{className:"language-html"},"<span>"),"-element with the class ",r.a.createElement("code",{className:"token property"},".text-muted")," to the desired element."),r.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"color-brand"},"This text is color-brand, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-default"},"This text is color-default, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-neutral"},"This text is color-neutral, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-success"},"This text is color-success, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-warning"},"This text is color-warning, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending.")),r.a.createElement("p",{className:"color-danger"},"This text is color-danger, ",r.a.createElement("span",{className:"text-muted"},"with a muted ending."))))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"background-colors"},"Background colors"),r.a.createElement("p",null,"To alter the background-color of an element, add the class ",r.a.createElement("code",{className:"token property"},"background-")," appended with the desired color to get the desired background-color."),r.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 bg-brand"},".bg-brand"),r.a.createElement("div",{className:"col-12 bg-default"},".bg-default"),r.a.createElement("div",{className:"col-12 bg-neutral"},".bg-neutral"),r.a.createElement("div",{className:"col-12 bg-success"},".bg-success"),r.a.createElement("div",{className:"col-12 bg-warning"},".bg-warning"),r.a.createElement("div",{className:"col-12 bg-danger"},".bg-danger"),r.a.createElement("div",{className:"col-12 bg-white"},".bg-white")))))},u=function(){return r.a.createElement("div",{className:"col-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Convey meaning through color with a handful of color utility classes."),r.a.createElement(o,null),r.a.createElement(m,null))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(u,null),r.a.createElement(s.DocToc,{component:u}))))}}}]);
//# sourceMappingURL=doc-route.chunk_34.js.map?3a29ba05a3311592adb6