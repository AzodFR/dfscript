(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{352:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("58c780dc",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o(352)},366:function(t,e,o){var r=o(107)(!1);r.push([t.i,".fees{display:inline;margin-left:1%}.token-fees{display:flex;font-size:small;margin-bottom:1%}.token{width:30%}.keep,.to,.token{font-size:small}.to{width:100%}",""]),t.exports=r},373:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(1),o(6),o(3),o(7);var r=o(0),n=o(83);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={computed:l(l({},Object(n.b)(["user/getRs"])),{},{user:function(){return this.$store.state.user}}),data:function(){return{wam:"",a_e:0,a_w:0,e:!1,w:!1}},methods:{editWam:function(){localStorage.setItem("to",this.wam)},editAm:function(t){t?1==t&&localStorage.setItem("a_w",this.a_w):localStorage.setItem("a_e",this.a_e)},switching:function(t){var e;t?1==t&&(this.w=!this.w,e=this.w):(this.e=!this.e,e=this.e),localStorage.setItem(["e","w"][t],e)}},mounted:function(){localStorage.getItem("to")&&(this.wam=localStorage.getItem("to"),localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&(this.e=!0),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&(this.w=!0),localStorage.getItem("a_e")&&(this.a_e=localStorage.getItem("a_e")),localStorage.getItem("a_w")&&(this.a_w=localStorage.getItem("a_w")))}},d=(o(365),o(66)),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fees"},[e("div",{staticClass:"token-fees"},[e("div",{staticClass:"token"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DFE and send it to selected account.",variant:t.e?"success":"danger"},on:{click:function(e){return t.switching(0)}}},[t._v("DFE: "+t._s(t.e?"ON":"OFF"))]),t._v(" "),e("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(0)}},model:{value:t.a_e,callback:function(e){t.a_e=e},expression:"a_e"}})],1),t._v(" "),e("div",{staticClass:"token"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DFW and send it to selected account.",variant:t.w?"success":"danger"},on:{click:function(e){return t.switching(1)}}},[t._v("DFW: "+t._s(t.w?"ON":"OFF"))]),t._v(" "),e("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(1)}},model:{value:t.a_w,callback:function(e){t.a_w=e},expression:"a_w"}})],1),t._v(" "),e("div",{staticClass:"goto"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Leave blank if you just want to keep it in your wallet.",variant:""!=t.wam?"success":"danger",disabled:""}},[t._v("Address to send:")]),t._v(" "),e("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"text",placeholder:"Wax address",title:"Leave blank if you just want to keep it in your wallet."},on:{change:t.editWam},model:{value:t.wam,callback:function(e){t.wam=e},expression:"wam"}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);