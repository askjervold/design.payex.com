(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[27],{470:function(e,a,n){"use strict";n.r(a);var i=n(1),s=n.n(i),t=n(416),l=n.n(t),r=n(400),c=n(2),m=n.n(c),o=n(120),p=n.n(o);function u(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var a=e.name,n=e.squaredFlag,t=e.preview,l=e.previewSize,i=e.size,r=e.className,c=e.type,m=r?r.split(" "):[],o=p.a.apply(void 0,[c,i?"".concat(c,"-").concat(i):"","material-icons"===c?"":"".concat(c,"-").concat(a),n?"flag-icon-squared":""].concat(u(m)));return t||l?s.a.createElement("div",{className:"icon-preview"},s.a.createElement("i",{className:o},o.includes("material-icons")?a:null),s.a.createElement("code",{className:"token property p-0 mt-2"},l?i:a)):s.a.createElement("i",{className:o},o.includes("material-icons")?a:null)};g.propTypes={name:m.a.string.isRequired,type:m.a.oneOf(["material-icons","payment-icon","flag-icon"]),squaredFlag:m.a.bool,preview:m.a.bool,size:m.a.oneOf(["tiny","small","medium","large","huge"]),className:m.a.string};var y=g,f=n(39);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):a}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}n.d(a,"MaterialIcons",function(){return N}),n.d(a,"PaymentIcons",function(){return z}),n.d(a,"Flags",function(){return b});var N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"material-icons"},"Material Icons"),s.a.createElement("p",{className:"lead"},"DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",s.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),s.a.createElement("p",null,"To use an icon, provide the following markup: ",s.a.createElement(l.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{preview:!0,type:"material-icons",name:"android"}),s.a.createElement(y,{preview:!0,type:"material-icons",name:"contact_support"}),s.a.createElement(y,{preview:!0,type:"material-icons",name:"face"}),s.a.createElement(y,{preview:!0,type:"material-icons",name:"star"}),s.a.createElement(y,{preview:!0,type:"material-icons",name:"warning"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"material-icons"},"android"),"\n",s.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",s.a.createElement("i",{className:"material-icons"},"face"),"\n",s.a.createElement("i",{className:"material-icons"},"star"),"\n",s.a.createElement("i",{className:"material-icons"},"warning")),s.a.createElement("h3",null,"Sizes"),s.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",s.a.createElement(r.Property,{value:"material-icons-tiny"}),", ",s.a.createElement(r.Property,{value:"material-icons-small"}),", ",s.a.createElement(r.Property,{value:"material-icons-medium"})," or ",s.a.createElement(r.Property,{value:"material-icons-large"}),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),s.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),s.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),s.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"material-icons material-icons-tiny"},"android"),"\n",s.a.createElement("i",{className:"material-icons material-icons-small"},"android"),"\n",s.a.createElement("i",{className:"material-icons material-icons-medium"},"android"),"\n",s.a.createElement("i",{className:"material-icons material-icons-large"},"android")))},z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),s.a.createElement("p",null,"To use an icon, provide the following markup: ",s.a.createElement(l.a,{className:"language-html"},'<i class="payment-icon payment-icon-{icon_name}"></i>'),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly mb-2"},s.a.createElement(y,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),s.a.createElement("div",{className:"row justify-content-evenly"},s.a.createElement(y,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",s.a.createElement(y,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement(y,{type:"payment-icon",name:"amex"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"diners"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"mastercard"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"visa"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"mobilepay"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"paypal"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"swish"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"vipps"})),s.a.createElement("h3",null,"Sizes"),s.a.createElement("p",null,"Different sizes are available by adding ",s.a.createElement(r.Property,{value:".payment-icon-small"}),", ",s.a.createElement(r.Property,{value:".payment-icon-medium"}),", ",s.a.createElement(r.Property,{value:".payment-icon-large"})," and ",s.a.createElement(r.Property,{value:".payment-icon-huge"}),". If no size is provided ",s.a.createElement(r.Property,{value:".payment-icon-medium"})," is defaulted."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",s.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",s.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",s.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement(y,{type:"payment-icon",name:"visa",size:"small"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"visa",size:"medium"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"visa",size:"large"}),"\n",s.a.createElement(y,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),s.a.createElement("h3",null,"Usage"),s.a.createElement("p",null,"Typical usage would be in for instance an ",s.a.createElement(r.Property,{value:".item-list"}),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement("ul",{className:"item-list item-list-striped"},s.a.createElement("li",null,s.a.createElement("div",{className:"d-flex align-items-center"},"\n",s.a.createElement(y,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",s.a.createElement("span",null,"4925*********004"),"\n"),s.a.createElement("div",{className:"action-list"},"\n",s.a.createElement(r.Icon,{icon:"more_vert"}),"\n",s.a.createElement("div",{className:"action-menu"},"\n",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},s.a.createElement(r.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},s.a.createElement(r.Icon,{icon:"business_center"}),"Add client"),"\n",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},s.a.createElement(r.Icon,{icon:"add_circle"}),"Add document"),"\n",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},s.a.createElement(r.Icon,{icon:"person_add"}),"Add user"),"\n"))),s.a.createElement("li",null,s.a.createElement("div",{className:"d-flex align-items-center"},"\n",s.a.createElement(y,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",s.a.createElement("span",null,"5792*********138"),"\n",s.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",s.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),s.a.createElement("li",null,s.a.createElement("div",{className:"d-flex align-items-center"},"\n",s.a.createElement(y,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",s.a.createElement("span",null,"3651*********701"),"\n"),s.a.createElement("i",{className:"material-icons"},"star"),"\n"),s.a.createElement("li",null,s.a.createElement("div",{className:"d-flex align-items-center"},"\n",s.a.createElement(y,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",s.a.createElement("span",null,"4925*********007"),"\n"),s.a.createElement("span",{className:"status status-success"},"Active"),"\n",s.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},s.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},b=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"flags"},"Flags"),s.a.createElement("p",null,"To use the flag icons add the classes ",s.a.createElement(r.Property,{value:".flag-icon"})," and ",s.a.createElement(r.Property,{value:".flag-icon-xx"})," (where xx is the ",s.a.createElement("a",{href:"https://www.iso.org/obp/ui/#search"},"ISO 3166-1-alpha-2 code")," of a country) to an empty ",s.a.createElement(l.a,{className:"language-html"},"<i>"),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{preview:!0,type:"flag-icon",name:"se"}),s.a.createElement(y,{preview:!0,type:"flag-icon",name:"no"}),s.a.createElement(y,{preview:!0,type:"flag-icon",name:"dk"}),s.a.createElement(y,{preview:!0,type:"flag-icon",name:"fi"}),s.a.createElement(y,{preview:!0,type:"flag-icon",name:"eu"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"flag-icon flag-icon-no"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-sv"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-dk"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-fi"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-eu"}),"\n"),s.a.createElement("h3",null,"Squared"),s.a.createElement("p",null,"To use a squared version of a flag add the class ",s.a.createElement(r.Property,{value:".flag-icon-squared"}),"."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"se"}),s.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"no"}),s.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"dk"}),s.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"fi"}),s.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"eu"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu"}),"\n"),s.a.createElement("h3",null,"Sizes"),s.a.createElement("p",null,"Flags support sizes ",s.a.createElement(r.Property,{value:".payment-icon-tiny"}),", ",s.a.createElement(r.Property,{value:".payment-icon-small"}),", ",s.a.createElement(r.Property,{value:".payment-icon-medium"}),", ",s.a.createElement(r.Property,{value:".payment-icon-large"})," and ",s.a.createElement(r.Property,{value:".payment-icon-huge"}),". If no size is provided ",s.a.createElement(r.Property,{value:".payment-icon-tiny"})," is defaulted."),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"se",size:"tiny"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"no",size:"small"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"dk",size:"medium"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"fi",size:"large"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"eu",size:"huge"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"flag-icon flag-icon-no flag-icon-tiny"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-sv flag-icon-small"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-dk flag-icon-medium"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-fi flag-icon-large"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-eu flag-icon-huge"}),"\n"),s.a.createElement("h3",null,"Squared Sizes"),s.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},s.a.createElement("div",{className:"row justify-content-evenly align-items-end"},s.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"se",size:"tiny"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"no",size:"small"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"dk",size:"medium"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"fi",size:"large"}),s.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"eu",size:"huge"}))),s.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no flag-icon-tiny"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv flag-icon-small"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk flag-icon-medium"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi flag-icon-large"}),"\n",s.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu flag-icon-huge"}),"\n"))},P=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),v(this,w(a).apply(this,arguments))}var n,t,l;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(a,i["Component"]),n=a,(t=[{key:"componentDidMount",value:function(){f.a.init()}},{key:"render",value:function(){return s.a.createElement(r.DocContainer,{docToc:!0},s.a.createElement("p",{className:"lead"},"The PayEx DesignGuide includes a variety of icons. Mainly we use the material icons, but we also include icons for known payment providers, and flags for most nations in the world."),s.a.createElement(N,null),s.a.createElement(z,null),s.a.createElement(b,null))}}])&&d(n.prototype,t),l&&d(n,l),a}();a.default=P}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?b7d942e2f3290c79f189