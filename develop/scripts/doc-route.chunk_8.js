(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[56],{501:function(e,a,t){"use strict";t.d(a,"a",function(){return O});var N=t(1),F=t.n(N),l=t(2),n=t.n(l),r=t(203),T=t.n(r),O=function(e){var a=e.type,t=e.value,l=e.color,n=e.disabled;return"button"===a?F.a.createElement("button",{type:"button",className:"btn btn-".concat(l),disabled:n},t):F.a.createElement("span",{className:"input-group-addon"},"icon"===a?F.a.createElement("i",{className:"material-icons"},t):t)},L=function(e){var a=e.icon;return F.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",F.a.createElement("i",{className:"material-icons"},a),"\n\t")},o=function(e){var a=e.id,t=e.type,l=e.placeholder,n=e.pattern,r=e.validate,o=e.required,i=e.defaultValue,u=e.autoComplete,s=e.disabled,c=e.readOnly,m=e.label,d=e.validationState,p=e.selectOptions,b=e.prefixValue,f=e.prefixType,h=e.prefixBtnColor,g=e.postfixValue,E=e.postfixType,y=e.postfixBtnColor,v=e.feedbackIcon,x=e.helpBlock,w=e.errorMessage,k=e.successMessage,P={type:t||null,className:"form-control",id:a||null,placeholder:l||null,defaultValue:i||"",disabled:s||null,readOnly:c||null,autoComplete:u||null,required:o||null,pattern:n?"":null,"data-validate":r?"":null},C=T()("input-group",d?"has-".concat(d):null,v?"has-feedback":null);return F.a.createElement("div",{className:"form-group"},"\n",m?F.a.createElement("label",{htmlFor:a},m):null,m?"\n":null,F.a.createElement("div",{className:C},"\n",b?F.a.createElement(O,{type:f,value:b,color:h,disabled:s}):null,b?"\n":null,"textarea"===t?F.a.createElement("textarea",P):"select"===t?F.a.createElement("select",{className:"form-control",disabled:s,readOnly:c},"\n\t\t",p.map(function(e,a){return F.a.createElement(N.Fragment,{key:e+a},F.a.createElement("option",null,e),a!==p.length-1?"\n\t\t":"")}),"\n\t"):F.a.createElement("input",P),"\n",v?F.a.createElement(L,{icon:v}):null," ",v?"\n":null,g?F.a.createElement(O,{type:E,value:g,color:y,disabled:s}):null,g?"\n":null),x?F.a.createElement("div",{className:"help-block","data-success":k||null,"data-error":w||null},x):null)};o.propTypes={type:n.a.string.isRequired,id:n.a.string,placeholder:n.a.string,pattern:n.a.string,validate:n.a.bool,required:n.a.bool,defaultValue:n.a.string,autoComplete:n.a.string,disabled:n.a.bool,readOnly:n.a.bool,label:n.a.string,validationState:n.a.oneOf(["success","error",""]),selectOptions:n.a.array,prefixValue:n.a.string,prefixType:n.a.oneOf(["button","icon",""]),prefixBtnColor:n.a.oneOf(["primary","secondary","danger"]),postfixValue:n.a.string,postfixType:n.a.oneOf(["button","icon",""]),postfixBtnColor:n.a.oneOf(["primary","secondary","danger"]),feedbackIcon:n.a.string,helpBlock:n.a.oneOfType([n.a.string,n.a.bool]),errorMessag:n.a.string,successMessag:n.a.string},a.b=o},502:function(e,a,t){"use strict";var l=t(1),v=t.n(l),n=t(2),r=t.n(n),o=t(203),x=t.n(o);function w(){return(w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var i=function(e){var a=e.label,t=e.id,l=e.name,n=e.value,r=e.href,o=e.icon,i=e.loading,u=e.type,s=e.disabled,c=e.btnType,m=e.fullWidth,d=e.loader,p=e.pullRight,b=e.input,f=e.outline,h=e.active,g=e.size,E=x()("btn","btn-".concat(f?"outline-":"").concat(u),g?"btn-".concat(g):null,i?"loading":null,m?"btn-block":null,p?"pull-right":null,h&&r?"active":null,s&&r?"disabled":null),y={href:r,id:t,name:l,defaultValue:n,disabled:r?null:s,"data-button-loader":d?"":null,active:h&&!r?"":null,role:r?"button":null,type:r?null:c||"button","aria-pressed":!!h||null,"aria-disabled":!(!r||!s)||null,tabIndex:r&&s?"-1":null};return r?v.a.createElement("a",w({className:E},y),o?"\n\t":null,o?v.a.createElement("i",{className:"material-icons"},o):null,o&&a?v.a.createElement("span",null,a):a):b?v.a.createElement("input",w({className:E},y)):v.a.createElement("button",w({className:E},y),o?"\n\t\t":null,o?v.a.createElement(v.a.Fragment,null,v.a.createElement("i",{className:"material-icons"},o),"\n\t\t"):null,o&&a?v.a.createElement("span",null,a):a,o?"\n\t":null)};i.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},a.a=i},505:function(e,a,t){"use strict";var l=t(1),p=t.n(l),n=t(2),r=t.n(n),o=function(e){var a=e.id,t=e.checked,l=e.disabled,n=e.label,r={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return p.a.createElement("div",{className:"checkbox"},"\n",p.a.createElement("input",r),"\n",n?p.a.createElement("label",{htmlFor:a},n):null,n?"\n":null)};o.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var i=o,b=t(501),u=function(e){var a=e.format,t=e.time,l=e.min,n=e.max,r=e.months,o=e.value,i=e.label,u=e.required,s=e.prefixValue,c=e.prefixType,m=e.id,d={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":a||null,"data-datepicker-time":t||null,"data-datepicker-min":l||null,"data-datepicker-max":n||null,"data-datepicker-value":o||null,"data-datepicker-months":r||null,"data-required":u||null,id:m};return i?p.a.createElement("div",{className:"form-group"},"\n",p.a.createElement("label",{htmlFor:m||null},i),"\n",p.a.createElement("div",{className:"input-group"},"\n",s?p.a.createElement(b.a,{type:c,value:s}):null,"\n",p.a.createElement("input",d),"\n")):p.a.createElement("input",d)};u.propTypes={format:r.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:r.a.bool,min:r.a.string,max:r.a.string,months:r.a.string,value:r.a.string,label:r.a.string,id:r.a.string,required:r.a.bool};var s=u,c=function(e){var a=e.text,t=e.label;return p.a.createElement("div",{className:"form-group"},"\n",t?p.a.createElement("label",null,t):null,t?"\n":null,p.a.createElement("span",{className:"form-control-text"},a),"\n")};c.propTypes={text:r.a.string.isRequired,label:r.a.string};var m=c,d=function(e){var a=e.id,t=e.checked,l=e.disabled,n=e.label,r={type:"radio",id:a||null,name:e.name||null,disabled:l||null,defaultChecked:t||null};return p.a.createElement("div",{className:"radio"},"\n",p.a.createElement("input",r),"\n",n?p.a.createElement("label",{htmlFor:a},n):null,n?"\n":null)};d.propTypes={id:r.a.string,name:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var f=d,h=function(e){var a=e.name,t=e.min,l=e.max,n=e.step,r=e.color,o=e.value,i=e.disabled,u=e.valueLabel,s=e.valueLabelPrefix,c=e.valueLabelPostfix,m=e.valueLabelPosition,d={type:"range",name:a,min:t,max:l,step:n,defaultValue:o,disabled:i};return p.a.createElement("div",{className:"rangeslider rangeslider-".concat(r||"brand"," label-").concat(m||"right")},"\n",p.a.createElement("input",d),u?"\n":null,u?p.a.createElement(function(){return p.a.createElement("output",{className:"value-label"},"\n\t\t",p.a.createElement("p",null,"\n\t\t\t",s?p.a.createElement("span",null,s):null,s?"\n\t\t\t":null,p.a.createElement("span",{"data-rs-value":!0},o),"\n\t\t\t",c?p.a.createElement("span",null,c):null,c?"\n\t\t":null),"\n\t")},null):null,u?"\n":null)};h.propTypes={name:r.a.string,min:r.a.number,max:r.a.number,step:r.a.number,color:r.a.oneOf(["brand","neutral","default"]),value:r.a.number,disabled:r.a.bool,valueLabel:r.a.bool,valueLabelPrefix:r.a.string,valueLabelPostfix:r.a.string,valueLabelPosition:r.a.string};var g=h,E=function(e){var a=e.id,t=e.checked,l=e.disabled,n=e.label,r={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return p.a.createElement("div",{className:"togglebox"},"\n",p.a.createElement("input",r),"\n",n?p.a.createElement("label",{htmlFor:a},n):null,n?"\n":null)};E.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var y=E;t.d(a,"a",function(){return i}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return m}),t.d(a,"d",function(){return f}),t.d(a,"e",function(){return g}),t.d(a,"f",function(){return y})},521:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return g}),t.d(a,"FormGrid",function(){return E}),t.d(a,"Validation",function(){return y}),t.d(a,"UsageWithFieldsets",function(){return v}),t.d(a,"StaticText",function(){return x}),t.d(a,"Checkboxes",function(){return w}),t.d(a,"RadioButtons",function(){return k}),t.d(a,"Toggleboxes",function(){return P}),t.d(a,"RangeSlider",function(){return C}),t.d(a,"DisabledFormComponents",function(){return N});var r=t(1),o=t.n(r),l=t(500),n=t.n(l),i=t(484),u=t(74),s=t(501),c=t(502),m=t(505);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function b(e,a){return!a||"object"!==d(a)&&"function"!=typeof a?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):a}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"Use ",o.a.createElement(n.a,{className:"language-html"},"<input>")," in combination with ",o.a.createElement(n.a,{className:"language-html"},"<form-group>"),"s and/or ",o.a.createElement(n.a,{className:"language-html"},"<form>"),"s to show a collection of related inputs. ",o.a.createElement(n.a,{className:"language-html"},"<form-group>"),"s can contain more than just an input, like a ",o.a.createElement(n.a,{className:"language-html"},"<label>")," or",o.a.createElement(n.a,{className:"language-html"},"<help-block>"),"s."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement(s.b,{id:"first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"The first word of your full name"}),o.a.createElement(s.b,{id:"last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"The very last collection of letters in your name"}),o.a.createElement(s.b,{id:"email-address",type:"text",label:"Email",autoComplete:"email",placeholder:"Enter your email",helpBlock:"The last part is probably @payex.com"}),o.a.createElement("div",{className:"form-group"},o.a.createElement(m.a,{label:"Subscribe to our Shovels and Tapestry catalogue",id:"subscribe-checkbox"})),"\n",o.a.createElement(c.a,{type:"primary",label:"Submit",btnType:"submit"}),"\n")))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"form-grid"},"Form grid"),o.a.createElement("p",null,"You can use the grid system to customize how forms are displayed. Just wrap your form elements in a row container to have two or more input elements next to eachother horizontally. Remember to add ",o.a.createElement(i.Property,{value:".col-{your_size}"})," to the forms."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5"},o.a.createElement(s.b,{id:"grid-first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"Hope it is something cool"})),o.a.createElement("div",{className:"col-5"},o.a.createElement(s.b,{id:"grid-last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"Most likely in your passport"})),o.a.createElement("div",{className:"col-2"},o.a.createElement("div",{className:"form-group"},"\n",o.a.createElement("br",null),"\n",o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search"),"\n"))))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"validation"},"Validation overview"),o.a.createElement("p",null,"To use our validation, start by adding the attribute ",o.a.createElement(i.Attribute,{name:"novalidate"})," to your ",o.a.createElement(n.a,{className:"language-html"},"<form>")," element. If you wish to validate your entire form, add the ",o.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to the ",o.a.createElement(n.a,{className:"language-html"},"<form>")," tag, if not add it to the desired ",o.a.createElement(n.a,{className:"language-html"},"<input>")," tags."),o.a.createElement("p",null,"Validates against ",o.a.createElement(i.Attribute,{name:"required"})," and ",o.a.createElement(i.Attribute,{name:"pattern"}),". Using ",o.a.createElement(i.Attribute,{name:"pattern"})," overrides default patterns."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{noValidate:!0,"data-validate":""},o.a.createElement(s.b,{id:"validation-name-1",type:"text",label:"Name",placeholder:"Enter your name",helpBlock:"This one should be easy"}),o.a.createElement(s.b,{id:"validation-email-1",type:"email",label:"Email",placeholder:"Enter your email",helpBlock:"This one should be pretty easy too"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))),o.a.createElement("h3",null,"Feedback"),o.a.createElement("p",null,"To give users validation feedback on each input insert the message in the attributes ",o.a.createElement(i.Attribute,{data:!0,name:"success"})," and ",o.a.createElement(i.Attribute,{data:!0,name:"error"})," in the ",o.a.createElement(i.Attribute,{value:".help-block"})," element."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},o.a.createElement(s.b,{required:!0,id:"validation-email-2",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:!0,successMessage:"Right!",errorMessage:"Wrong!"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))),o.a.createElement("h3",null,"Dynamically disabled submit button"),o.a.createElement("p",null,"You can also dynamically disable the submit button by adding ",o.a.createElement(i.Attribute,{data:!0,name:"disable-invalid"})," to the ",o.a.createElement(n.a,{className:"language-html"},'<button type="submit">')," element."),o.a.createElement("p",null,o.a.createElement("b",null,"NOTE:")," For this to work you also need the ",o.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to be present in the ",o.a.createElement(n.a,{className:"language-html"},"<form>")," tag."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},o.a.createElement(s.b,{required:!0,id:"validation-email-3",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:"Keep your eye on that submit button",successMessage:"Right!",errorMessage:"Wrong!"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit","data-disable-invalid":""},"Submit"))))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-fieldsets"},"Usage with fieldsets"),o.a.createElement("p",null,"Use fieldsets to give your forms more structure."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Log in"),o.a.createElement(s.b,{id:"fieldset-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),o.a.createElement(s.b,{id:"fieldset-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),o.a.createElement(m.a,{label:"Remember me",id:"fieldset-checkbox"})),"\n",o.a.createElement(c.a,{type:"primary",label:"Log in",btnType:"submit"}),"\n")))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"static-text"},"Static text"),o.a.createElement("p",null,"To just display static text in forms use a ",o.a.createElement(n.a,{className:"language-html"},"<span>")," inside a form"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.c,{label:"Company",text:"PayEx"}),o.a.createElement(m.c,{label:"Employee",text:"Bob Corlsan"})))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"checkboxes"},"Checkboxes"),o.a.createElement("p",null,"Use checkboxes to make it so a user can select several options. If you need to restrict the number of possible selections to one, see radio buttons."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.a,{label:"Bread",id:"checkbox-example-1"}),o.a.createElement(m.a,{label:"Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long.",id:"checkbox-example-2"}),o.a.createElement(m.a,{label:"Milk",id:"checkbox-example-3",checked:!0})))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"radio-buttons"},"Radio buttons"),o.a.createElement("p",null,"Use radio buttons when you wish to limit your user to one choice out of several possible."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.d,{label:"Hamburgers",id:"radio-example-1",name:"radio-example"}),o.a.createElement(m.d,{label:"Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long.",id:"radio-example-2",name:"radio-example"}),o.a.createElement(m.d,{label:"Pizza",id:"radio-example-3",name:"radio-example",checked:!0})))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"toggleboxes"},"Toggleboxes"),o.a.createElement("p",null,"Use toggleboxes if you wish present the user with an either-or option."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.f,{id:"togglebox-example-1",label:"Enable overdrive"}),o.a.createElement(m.f,{id:"togglebox-example-2",label:"Enable superpowers",checked:!0})))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"rangeslider"},"Rangeslider"),o.a.createElement("p",null,"Asides from the default behavior of a range input, the Rangeslider","'","s colors and label positioning can be customized."),o.a.createElement("p",null,"Currently there are three different supported colors for the slider: ",o.a.createElement(i.Property,{value:".rangeslider-brand"}),", ",o.a.createElement(i.Property,{value:".rangeslider-default"})," and ",o.a.createElement(i.Property,{value:".rangeslider-neutral"}),"."),o.a.createElement("p",null,"The Rangeslider currently supports two positions: ",o.a.createElement(i.Property,{value:".label-right"})," and ",o.a.createElement(i.Property,{value:".label-top"}),". If no position is given, ",o.a.createElement(i.Property,{value:"right"})," is defaulted."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.e,{min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%"})),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.e,{min:0,max:200,step:1,value:100,color:"neutral",valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",valueLabelPosition:"top"})))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-form-components"},"Disabled form components"),o.a.createElement("p",null,"Disable whichever form component you want by adding ",o.a.createElement(i.Attribute,{name:"disabled"})," to the desired input element"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.f,{id:"togglebox-disabled-example-1",label:"Enable overdrive",disabled:!0}),o.a.createElement(m.d,{label:"Hamburgers",id:"radio-disabled-example-1",name:"radio-disabled-example",disabled:!0}),o.a.createElement(m.a,{label:"Milk",id:"checkbox-disabled-example-3",disabled:!0,checked:!0}),o.a.createElement(m.e,{className:"mb-2",min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",disabled:!0}),o.a.createElement("p",null,"I am a text, am i too close to the component above me maybe?")),o.a.createElement("h3",null,"Disable a fieldset"),o.a.createElement("p",null,"Disable entire fieldsets by adding ",o.a.createElement(i.Attribute,{name:"disabled"})," to the fieldset element"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",null,o.a.createElement("fieldset",{disabled:!0},o.a.createElement("legend",null,"Log in"),o.a.createElement(s.b,{id:"fieldset-disabled-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),o.a.createElement(s.b,{id:"fieldset-disabled-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),o.a.createElement(m.a,{label:"Remember me",id:"fieldset-disabled-checkbox"})),"\n",o.a.createElement(c.a,{type:"primary",label:"Log in",btnType:"submit",disabled:!0}),"\n")))},F=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),b(this,f(a).apply(this,arguments))}var t,l,n;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(a,r["Component"]),t=a,(l=[{key:"componentDidMount",value:function(){u.rangeslider.init(),u.validation.init()}},{key:"render",value:function(){return o.a.createElement(i.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Form componenets allow you to gather user input in various different ways."),o.a.createElement(g,null),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement(v,null),o.a.createElement(x,null),o.a.createElement(w,null),o.a.createElement(k,null),o.a.createElement(P,null),o.a.createElement(C,null),o.a.createElement(N,null))}}])&&p(t.prototype,l),n&&p(t,n),a}();a.default=F}}]);
//# sourceMappingURL=doc-route.chunk_8.js.map?c1e7bf26ecb938d5da1c