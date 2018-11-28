(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[50],{555:function(e,t,a){"use strict";a.r(t);var o=a(1),d=a.n(o),n=a(105),l=a(489),r=a(2),i=a.n(r),c=function(e){var t=e.type,a=e.title,n=e.imgSrc,r=e.text,o=e.textSection,l=e.smallText,i=e.btnTxt,c=e.footerTxt,s=e.footerLink,m=e.footerLinkTxt,u=e.children;return d.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},a?d.a.createElement("header",null,d.a.createElement("h3",null,d.a.createElement("a",{href:"#"},a))):null,n?d.a.createElement("div",{className:"card-img"},"\n",d.a.createElement("img",{src:n,alt:""}),"\n"):null,u?d.a.createElement("div",{className:"highlight"},u):null,d.a.createElement("div",{className:"card-body"},r?d.a.createElement("p",null,r):null,"\n",o?o.map(function(e,t){return d.a.createElement("p",{key:"card-p-".concat(t)},e)}):null,l?d.a.createElement("small",null,l):null),i||c||m?d.a.createElement("footer",null,i?d.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},i):null,c?d.a.createElement("div",{className:"footer-text"},d.a.createElement("p",null,c)):null,m?d.a.createElement("div",{className:"footer-link"},d.a.createElement("a",{href:s||"#"},m)):null):null)};c.propTypes={type:i.a.oneOf(["brand","default","light"]),title:i.a.string,imgSrc:i.a.string,icon:i.a.string,text:i.a.string,smallText:i.a.string,textSection:i.a.array,btnTxt:i.a.string,footerTxt:i.a.string,footerLink:i.a.string,footerLinkTxt:i.a.string};var s=c,m=a(505);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"DefaultBehaviour",function(){return b}),a.d(t,"CardText",function(){return g}),a.d(t,"CardVariants",function(){return E});var y=["This is a lot of text","With some more text","And then even some more","Is it really possible to have this much text in one card?","Yes!"],b=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"default-behaviour"},"Default behaviour"),d.a.createElement("p",null,"Wrap indiviual cards in the ",d.a.createElement(l.Property,{value:".cards"})," class to display them lined up next to each other. When the window reaches ",d.a.createElement(n.a,{to:"/docs/core/breakpoints"},"breakpoint")," sm the cards will switch to mobile view and take up one row each and stretch to fill the width of the container. To decide how your cards will look use ",d.a.createElement(l.Property,{value:".card-default"}),", ",d.a.createElement(l.Property,{value:".card-brand"}),", or ",d.a.createElement(l.Property,{value:".card-light"})),d.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement("div",{className:"cards"},d.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(m.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"brand",title:"Card brand",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(m.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"light",title:"Card light",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(m.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})))))},E=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"card-variants"},"Card Variants"),d.a.createElement("p",null,"You don`t have to use all sections of a card, you can use different combinations as you see fit. The card body inherits the size of the largest card that exists on the same line when wrapped with a ",d.a.createElement(l.Property,{value:".cards"})," container."),d.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement("div",{className:"cards"},d.a.createElement(s,{type:"default",title:"My custom card",text:"Card text",smallText:"Small card text",footerTxt:"This is some text that goes in the footer."},d.a.createElement(m.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"default",title:"Text card",textSection:y,smallText:"This is some small text",footerTxt:"This is some text that goes in the footer."}),d.a.createElement(s,{type:"brand",title:"Image card",imgSrc:"https://picsum.photos/300/?random",text:"This is a card with an image and body"}))))},g=function(){return d.a.createElement("div",{className:"col-lg-10 doc-body"},d.a.createElement(l.ExperimentalComponentAlert,null),d.a.createElement("p",{className:"lead"},"Card..."),d.a.createElement(b,null),d.a.createElement(E,null))},T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,o["Component"]),a=t,(n=[{key:"render",value:function(){return d.a.createElement("div",{className:"doc-container"},d.a.createElement("div",{className:"row"},d.a.createElement(g,null),d.a.createElement(l.DocToc,{component:g})))}}])&&h(a.prototype,n),r&&h(a,r),t}();t.default=T}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?fe625f36f23a9f775c99