(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[28,3,44,45,46,47,48,49,51],{421:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return o});var t=n(1),r=n.n(t),c=n(2),l=n.n(c),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},o.propTypes={value:l.a.string.isRequired},a.default=s},422:function(e,a,n){"use strict";var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a=e.id,n=e.type,t=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},a.a=l},423:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(422);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(422);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(2),l=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};l.propTypes={icon:n.n(c).a.string.isRequired},a.default=l},426:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a,n,t=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(n=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(a=l.map(function(e,a){return o.a.createElement("span",{key:a},e,a<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},a.default=l},427:function(e,a,n){"use strict";n.r(a);var t=n(1),m=n.n(t),r=n(2),c=n.n(r),p=n(431),l=n(432),d=n.n(l),f=n(433);function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var t=e.children,r=e.language,c=e.removeOuterTag,l=e.hideValue,o=e.removeList,a=e.showCasePanel,n=e.codeFigure,s=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(p.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},i=function(e){var a=document.createElement("div");a.innerHTML=Object(p.renderToStaticMarkup)(e);var n=a.querySelectorAll("li"),t="";return n.forEach(function(e){t+="".concat(e.innerHTML," \n")}),t};return m.a.createElement(m.a.Fragment,null,a?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},t)},null):null,n?m.a.createElement(function(){var e,a,n="";if("html"===r&&s)a="","function"==typeof(e=t).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,n=a;else if("html"===r&&t&&"function"==typeof t.map)t.map(function(e){n+=c?u(e):o?i(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=c?u(t):o?i(t):Object(p.renderToStaticMarkup)(t);else switch(v(t)){case"string":n=t;break;case"object":t.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,E({},f.b,{theme:void 0,code:n,language:r}),function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,c=e.getTokenProps;return m.a.createElement("pre",{className:a,style:n},t.map(function(e,a){return m.a.createElement("div",E({key:e+a},r({line:e,key:a})),e.map(function(e,a){return m.a.createElement("span",E({key:a},c({token:e,key:a})))}))}))}))},null):null)};o.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},a.default=o},430:function(e,a,n){"use strict";n.r(a);var t=n(421);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var r=n(427);n.d(a,"ComponentPreview",function(){return r.default});var c=n(428);n.d(a,"DocHeading",function(){return c.default});var l=n(429);n.d(a,"DocToc",function(){return l.default});var o=n(423);n.d(a,"DeprecatedComponentAlert",function(){return o.default});var s=n(424);n.d(a,"ExperimentalComponentAlert",function(){return s.default});var u=n(425);n.d(a,"Icon",function(){return u.default});var i=n(426);n.d(a,"PxScript",function(){return i.default})},470:function(e,a,n){"use strict";n.r(a),n.d(a,"Usage",function(){return s}),n.d(a,"IconsText",function(){return u});var t=n(1),r=n.n(t),c=n(434),l=n.n(c),o=n(430),s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"usage"},"Usage"),r.a.createElement("p",null,"To use an icon, provide the following markup: ",r.a.createElement(l.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("i",{className:"material-icons"},"android"),"\n",r.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",r.a.createElement("i",{className:"material-icons"},"face"),"\n",r.a.createElement("i",{className:"material-icons"},"star"),"\n",r.a.createElement("i",{className:"material-icons"},"warning"),"\n"))},u=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"The PayEx DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",r.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),r.a.createElement(s,null))};a.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(u,null),r.a.createElement(o.DocToc,{component:u})))}}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?0fe42a31ec4f271efe9f