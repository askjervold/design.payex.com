(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[53,45,47,48,49,50,52],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),l=a.n(n),r=a(2),i=a.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=a(2),r=a.n(l),i=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,i=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,i?"\n":"",i?c.a.createElement("div",{className:"alert-body"},i):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=i},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),i=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:a.n(r).a.string.isRequired},t.default=i},426:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(2),r=a.n(l),i=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,i=e.params;return l&&(a=l.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return c.a.createElement("span",{key:t},e,t<i.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=i},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var i=a(429);a.d(t,"DocToc",function(){return i.default});var c=a(423);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var o=a(425);a.d(t,"Icon",function(){return o.default});var m=a(426);a.d(t,"PxScript",function(){return m.default})},435:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var D=a(1),M=a.n(D),n=a(2),l=a.n(n),r=a(186),T=a.n(r),C=function(e){var t=e.type,a=e.value,n=e.color;return"button"===t?M.a.createElement("button",{type:"button",className:"btn btn-".concat(n)},a):M.a.createElement("span",{className:"input-group-addon"},"icon"===t?M.a.createElement("i",{className:"material-icons"},a):a)},A=function(e){var t=e.icon;return M.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",M.a.createElement("i",{className:"material-icons"},t),"\n\t")},i=function(e){var t=e.id,a=e.type,n=e.placeholder,l=e.pattern,r=e.validate,i=e.required,c=e.defaultValue,u=e.autoComplete,o=e.disabled,m=e.readOnly,s=e.label,d=e.validationState,p=e.selectOptions,f=e.prefixValue,E=e.prefixType,b=e.prefixBtnColor,v=e.postfixValue,h=e.postfixType,g=e.postfixBtnColor,y=e.feedbackIcon,k=e.helpBlock,x=e.errorMessage,Y=e.successMessage,N={type:a||null,className:"form-control",id:t||null,placeholder:n||null,defaultValue:c||"",disabled:o||null,readOnly:m||null,autoComplete:u||null,required:i||null,pattern:l?"":null,"data-validate":r?"":null},w=T()("input-group",d?"has-".concat(d):null,y?"has-feedback":null);return M.a.createElement("div",{className:"form-group"},"\n",s?M.a.createElement("label",{htmlFor:t},s):null,s?"\n":null,M.a.createElement("div",{className:w},"\n",f?M.a.createElement(C,{type:E,value:f,color:b}):null,f?"\n":null,"textarea"===a?M.a.createElement("textarea",N):"select"===a?M.a.createElement("select",{className:"form-control",disabled:o,readOnly:m},"\n\t\t",p.map(function(e,t){return M.a.createElement(D.Fragment,{key:e+t},M.a.createElement("option",null,e),t!==p.length-1?"\n\t\t":"")}),"\n\t"):M.a.createElement("input",N),"\n",y?M.a.createElement(A,{icon:y}):null," ",y?"\n":null,v?M.a.createElement(C,{type:h,value:v,color:g}):null,v?"\n":null),k?M.a.createElement("div",{className:"help-block","data-success":Y||null,"data-error":x||null},k):null)};i.propTypes={type:l.a.string.isRequired,id:l.a.string,placeholder:l.a.string,pattern:l.a.string,validate:l.a.bool,required:l.a.bool,defaultValue:l.a.string,autoComplete:l.a.string,disabled:l.a.bool,readOnly:l.a.bool,label:l.a.string,validationState:l.a.oneOf(["success","error",""]),selectOptions:l.a.array,prefixValue:l.a.string,prefixType:l.a.oneOf(["button","icon",""]),prefixBtnColor:l.a.oneOf(["primary","secondary","danger"]),postfixValue:l.a.string,postfixType:l.a.oneOf(["button","icon",""]),postfixBtnColor:l.a.oneOf(["primary","secondary","danger"]),feedbackIcon:l.a.string,helpBlock:l.a.string,errorMessag:l.a.string,successMessag:l.a.string},t.b=i},440:function(e,t,a){"use strict";var n=a(1),p=a.n(n),l=a(2),r=a.n(l),i=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"checkbox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};i.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var c=i,f=a(435),u=function(e){var t=e.format,a=e.time,n=e.min,l=e.max,r=e.months,i=e.value,c=e.label,u=e.required,o=e.prefixValue,m=e.prefixType,s=e.id,d={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":a||null,"data-datepicker-min":n||null,"data-datepicker-max":l||null,"data-datepicker-value":i||null,"data-datepicker-months":r||null,"data-required":u||null,id:s};return c?p.a.createElement("div",{className:"form-group"},"\n",p.a.createElement("label",{htmlFor:s||null},c),"\n",p.a.createElement("div",{className:"input-group"},"\n",o?p.a.createElement(f.a,{type:m,value:o}):null,"\n",p.a.createElement("input",d),"\n")):p.a.createElement("input",d)};u.propTypes={format:r.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:r.a.bool,min:r.a.string,max:r.a.string,months:r.a.string,value:r.a.string,label:r.a.string,id:r.a.string,required:r.a.bool};var o=u,m=function(e){var t=e.text,a=e.label;return p.a.createElement("div",{className:"form-group"},"\n",a?p.a.createElement("label",null,a):null,a?"\n":null,p.a.createElement("span",{className:"form-control-text"},t),"\n")};m.propTypes={text:r.a.string.isRequired,label:r.a.string};var s=m,d=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"radio",id:t||null,name:e.name||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"radio"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};d.propTypes={id:r.a.string,name:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var E=d,b=function(e){var t=e.name,a=e.min,n=e.max,l=e.step,r=e.color,i=e.value,c=e.disabled,u=e.valueLabel,o=e.valueLabelPrefix,m=e.valueLabelPostfix,s=e.valueLabelPosition,d={type:"range",name:t,min:a,max:n,step:l,defaultValue:i,disabled:c};return p.a.createElement("div",{className:"rangeslider rangeslider-".concat(r||"brand"," label-").concat(s||"right")},"\n",p.a.createElement("input",d),u?"\n":null,u?p.a.createElement(function(){return p.a.createElement("output",{className:"value-label"},"\n\t\t",p.a.createElement("p",null,"\n\t\t\t",o?p.a.createElement("span",null,o):null,o?"\n\t\t\t":null,p.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",m?p.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,u?"\n":null)};b.propTypes={name:r.a.string,min:r.a.number,max:r.a.number,step:r.a.number,color:r.a.oneOf(["brand","neutral","default"]),value:r.a.number,disabled:r.a.bool,valueLabel:r.a.bool,valueLabelPrefix:r.a.string,valueLabelPostfix:r.a.string,valueLabelPosition:r.a.string};var v=b,h=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"togglebox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};h.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var g=h;a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return E}),a.d(t,"e",function(){return v}),a.d(t,"f",function(){return g})},456:function(e,t,a){"use strict";a.r(t),a.d(t,"SimpleDatepicker",function(){return f}),a.d(t,"InitialValue",function(){return E}),a.d(t,"CustomFormat",function(){return b}),a.d(t,"IncludeTime",function(){return v}),a.d(t,"Required",function(){return h}),a.d(t,"ShowingMultipleMonths",function(){return g}),a.d(t,"DateRange",function(){return y}),a.d(t,"Options",function(){return k}),a.d(t,"DatepickersText",function(){return x});var r=a(1),i=a.n(r),c=a(430),n=a(440),u=a(67);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=window.moment,f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),i.a.createElement("p",null,"Simple datepicker..",i.a.createElement(c.Attribute,{data:!0,name:"datepicker"}),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simle-datepicker"})))},E=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"initial-value"},"Initial value"),i.a.createElement("p",null,"Initial value..",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-value"}),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{value:p().format("YYYY-MM-DD"),label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})),i.a.createElement("p",null,"Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (iso8601 if you have not specified a format)."))},b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"custom-format"},"Custom format"),i.a.createElement("p",null,"Custom format..",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{label:"nb (norwegian):",value:p().format("DD.MM.YYYY"),format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),i.a.createElement(n.b,{label:"sv (swedish):",value:p().format("YYYY-MM-DD"),format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),i.a.createElement(n.b,{label:"da (danish):",value:p().format("DD.MM.YYYY"),format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),i.a.createElement(n.b,{label:"fi (finnish):",value:p().format("DD.MM.YYYY"),format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),i.a.createElement(n.b,{label:"en (english):",value:p().format("DD/MM/YYYY"),format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),i.a.createElement(n.b,{label:"iso8601 (robotic):",value:p().format("YYYY-MM-DD"),format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},v=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"include-time"},"Include time"),i.a.createElement("p",null,"Include time.. ",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-time",value:"true"}),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{time:!0,value:p().format("HH:mm DD.MM.YYYY"),format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"required"},"Required"),i.a.createElement("p",null,"Required.. ",i.a.createElement(c.Attribute,{data:!0,name:"required",value:"true"})," will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{required:!0,label:"Date",prefixType:"icon",prefixValue:"event",id:"required-datepicker"})))},g=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),i.a.createElement("p",null,"Showing multiple months.. ",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-months",value:"[number]"}),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"date-range"},"Date range"),i.a.createElement("p",null,"Date range with ",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-min"})," and ",i.a.createElement(c.Attribute,{data:!0,name:"datepicker-max"}),"..."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{value:p().format("DD.MM.YYYY"),min:p().subtract(5,"d").format("DD.MM.YYYY"),max:p().add(5,"d").format("DD.MM.YYYY"),months:"2",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker"})),i.a.createElement("p",null,i.a.createElement("b",null,"NOTE:")," Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range."))},k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"available-options"},"Available options"),i.a.createElement("p",null,"Options available through ",i.a.createElement(c.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",i.a.createElement(c.Attribute,{value:"false"})," will still render it true.",i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Attribute"),i.a.createElement("th",null,"Default value"),i.a.createElement("th",null,"Description"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-value"})),i.a.createElement("td",null),i.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-format"})),i.a.createElement("td",null,i.a.createElement(c.Attribute,{value:"iso8601"})),i.a.createElement("td",null,i.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),i.a.createElement("p",null,"The following options are available:"),i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"nb"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"sv"}),": YYYY-MM-DD"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"da"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"fi"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"en"}),": DD/MM/YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(c.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-time"})),i.a.createElement("td",null),i.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-months"})),i.a.createElement("td",null,i.a.createElement(c.Attribute,{value:"1"})),i.a.createElement("td",null,"Number of months to display in the datepicker.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-min"})),i.a.createElement("td",null),i.a.createElement("td",null,"Disallow dates before min.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"datepicker-max"})),i.a.createElement("td",null),i.a.createElement("td",null,"Disallow dates past max.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(c.Attribute,{data:!0,name:"required"})),i.a.createElement("td",null),i.a.createElement("td",null,"Forces a value in the input field, but only if an initial value is set or the user clicks/tabs the input.")))))},x=function(){return i.a.createElement("div",{className:"col-lg-10 doc-body"},i.a.createElement("p",{className:"lead"},"Datepickers..."),i.a.createElement(f,null),i.a.createElement(E,null),i.a.createElement(b,null),i.a.createElement(v,null),i.a.createElement(h,null),i.a.createElement(g,null),i.a.createElement(y,null),i.a.createElement(k,null))},Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,s(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){u.datepicker.init()}},{key:"render",value:function(){return i.a.createElement("div",{className:"doc-container"},i.a.createElement("div",{className:"row"},i.a.createElement(x,null),i.a.createElement(c.DocToc,{component:x})))}}])&&o(a.prototype,n),l&&o(a,l),t}();t.default=Y}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?eaa503b88bceee675495