(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,6,13],{385:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("0a9ab938",content,!0,{sourceMap:!1})},386:function(t,e,o){var content=o(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("49b442d4",content,!0,{sourceMap:!1})},395:function(t,e,o){"use strict";t.exports=function(){var t=new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())}},396:function(t,e,o){"use strict";o(385)},397:function(t,e,o){var n=o(112)(!1);n.push([t.i,"button[data-v-609de952]{border-radius:5px;border:none;font-weight:700;box-shadow:1px 1px 0 1px rgba(0,0,0,.2)}.DisBtn[data-v-609de952]{background:#d38c09;color:#0f0c05}.DisBtn[data-v-609de952],.EnBtn[data-v-609de952]{font-size:small}.EnBtn[data-v-609de952]{background:#28a745;color:#0f1b0e}",""]),t.exports=n},398:function(t,e,o){"use strict";o(386)},399:function(t,e,o){var n=o(112)(!1);n.push([t.i,".local-button{font-size:small}",""]),t.exports=n},406:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(6),o(3),o(7);var n,r=o(32),l=o(0),c=(o(71),o(39),o(137),o(139),o(1),o(22),o(88));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d=o(395),f=(n={name:"Counter",props:["active","timestamp","autoclaim","item","claiminfo"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["user/getMembers","user/getMines"])),data:function(){return{msg:"Ready to claim",wait:!1,loaded:!1,readyToClaim:!1,last:void 0,queued:!1,displayHours:0,displayMinutes:0,displaySeconds:0,manual:!1}}},Object(l.a)(n,"computed",{ISreadyToClaim:function(){return this.readyToClaim},_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},remainingTime:function(){return this.loaded?this.displayHours+":"+this.displayMinutes+":"+this.displaySeconds:"Getting remaining time..."}}),Object(l.a)(n,"watch",{timestamp:function(){this.loaded=!1,this.showRemaining()},autoclaim:function(){this.autoclaim&&(this.loaded=!1,this.showRemaining())}}),Object(l.a)(n,"mounted",(function(){var t=this;this.showRemaining(),this.$on("".concat(this.item.asset_id,".claiming"),(function(){t.last=Date.now(),console.log("received claiming!"),t.msg="Claiming..."})),this.$on("test",(function(t){console.log("counter receive test",t)})),this.$on("".concat(this.item.asset_id,".success"),(function(){t.last=Date.now(),console.log("received success!"),t.msg="Ready to claim",t.readyToClaim=!1,t.queued=!1,setTimeout((function(){t.last=void 0}),1e4),t.showRemaining()})),this.$on("".concat(this.item.asset_id,".retry"),(function(e){console.log("received retry!"),t.msg="Retry to claim/repair... (".concat(e,")")}))})),Object(l.a)(n,"methods",{checkManual:function(){var t=this.timestamp,e=new Date,o=new Date(t);return parseInt((o.getTime()-e.getTime())/1e3/this.item.charged_time+1).toFixed(0)>0},manualClaim:function(){var t=this;this.checkManual()&&(this.manual=!0,this.handleClaim(),setTimeout((function(){t.manual=!1}),5e3))},showRemaining:function(){var t=this,e=setInterval((function(){new Date;var o=t.timestamp,n=new Date(o).getTime()-d();if(n<=0)return clearInterval(e),null==t.last&&(t.readyToClaim=!0),t.loaded=!0,localStorage.getItem("claimAuto")&&"true"==localStorage.getItem("claimAuto")&&t.handleClaim(),null;t.readyToClaim=!1;var r=Math.floor(n/t._hours),l=Math.floor(n%t._hours/t._minutes),c=Math.floor(n%t._minutes/t._seconds);t.displayHours=r<10?"0"+r:r,t.displayMinutes=l<10?"0"+l:l,t.displaySeconds=c<10?"0"+c:c,t.loaded=!0}),1e3)},handleClaim:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,c,m,d,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.$store.state.user.actions.find((function(e){return e.id===t.item.id}))){e.next=2;break}return e.abrupt("return");case 2:if(!t.queue){t.queued=!0;try{[{owner:t.$store.state.user.name}],o={actions:[]},localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&localStorage.getItem("a_e")&&o.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_e")).toFixed(4)," DFE")}}),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&localStorage.getItem("a_w")&&o.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_w")).toFixed(4)," DFW")}}),o.actions.push({account:"desertfarmgm",name:"mine",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name}}),n={blocksBehind:3,expireSeconds:30},r={id:t.item.asset_id,action:o,block:n},console.log("action",r.action),null==t.last&&(t.readyToClaim=!0,console.log("add to queue"),t.$store.commit("user/addAction",r),t.msg="Claim in queue...",localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&localStorage.getItem("a_e")&&localStorage.getItem("to")&&(l={actions:[{account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat((.96*parseFloat(localStorage.getItem("a_e"))).toFixed(4)," DFE"),memo:"auto transfer"}}]},c={blocksBehind:3,expireSeconds:30},m={id:t.item.asset_id+" transfer",action:l,block:c},t.$store.commit("user/addAction",m)),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&localStorage.getItem("a_w")&&localStorage.getItem("to")&&(d={actions:[{account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat((.96*parseFloat(localStorage.getItem("a_w"))).toFixed(4)," DFW"),memo:"auto transfer"}}]},f={blocksBehind:3,expireSeconds:30},h={id:t.item.asset_id+" transfer",action:d,block:f},t.$store.commit("user/addAction",h)))}catch(t){console.log(t)}}case 3:case"end":return e.stop()}}),e)})))()}}),n),h=f,v=(o(396),o(70)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[!t.readyToClaim&&t.active?e("button",{staticClass:"DisBtn",attrs:{disabled:!t.checkManual()},on:{click:t.manualClaim}},[t._v("\n    "+t._s(t.remainingTime)+"\n  ")]):t.active?e("button",{staticClass:"EnBtn",on:{click:t.handleClaim}},[t._v("\n    "+t._s(t.msg)+"\n  ")]):t._e(),t._v(" "),t.wait?e("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):t._e()],1)}),[],!1,null,"609de952",null);e.default=component.exports},407:function(t,e,o){"use strict";o.r(e);var n={name:"LocalAutoClaimButton",props:{type:String,id:String},data:function(){return{value:!1}},methods:{autoOne:function(){this.value=!this.value,localStorage.setItem("claimAuto",this.value)}},mounted:function(){var t=this;localStorage.getItem("claimAuto")||(localStorage.setItem("claimAuto","true"),this.value=!0),localStorage.getItem("claimAuto")&&"true"==localStorage.getItem("claimAuto")&&(this.value=!0),this.$root.$on("".concat(this.type,"autoClaimAll"),(function(){localStorage.setItem("".concat(t.id),"true"),t.$store.commit("user/setAutoClaim",{type:t.type,id:t.id,value:!0}),t.value=t.$store.state.user.autoclaim[t.type][t.id]}))}},r=(o(398),o(70)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-button",{class:t.value?"success":"danger",attrs:{variant:t.value?"success":"danger",size:"sm"},on:{click:t.autoOne}},[t._v("\n    C "+t._s(t.value?"[ON]":"[OFF]")+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,o){var content=o(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("2690f25c",content,!0,{sourceMap:!1})},415:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(1),o(6),o(3),o(7);var n=o(0),r=(o(255),o(137),o(406)),l=o(407),c=o(88);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{title:String,toTrim:Number,list:Array,type:String,show:Object,claimInfo:Object,hideDura:Boolean},computed:d(d({},Object(c.b)(["user/getMembers","user/getMines"])),{},{end:function(){return this["user/getMines"].end}}),methods:{calc:function(t){var e=t.next_availability+this.member*t.charged_time,o=new Date,n=new Date(1e3*e).getTime()-o.getTime();return parseInt(this.member-n/1e3/t.charged_time+1).toFixed(0)}},components:{CounterV2:r.default,LocalAutoClaimButton:l.default},mounted:function(){var t=this;console.log("test",this["user/getMines"].end),this.$root.$on("test",(function(e){console.log("itemclaim receive test from ",e),t.$refs.counter[0].$emit("test",e)})),this.$root.$on("claiming",(function(e){console.log("itemclaim receive claiming from ",e),t.$refs.counter[0].$emit("".concat(e,".claiming"))})),this.$root.$on("success",(function(e){console.log("itemclaim receive success from ",e),t.$refs.counter[0].$emit("".concat(e,".success"))})),this.$root.$on("retry",(function(e){console.log("itemclaim receive retry from ",e.id),t.$refs.counter[0].$emit("".concat(e.id,".retry"),e.retry)}))}},h=(o(417),o(70)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.list.length>0?e("div",[e("label",{staticClass:"title"},[t._v(t._s(t.title)+"   "),e("img",{staticClass:"game-img",attrs:{alt:""}})]),t._v(" "),t.show.claimAll?e("AutoClaimButton",{staticClass:"allBtn-1",attrs:{type:t.type}}):e("div",{staticClass:"blank"}),t._v(" "),e("div",{staticClass:"blank"})],1):t._e(),t._v(" "),e("div",{staticClass:"items-claim"},t._l(t.list,(function(o,i){return e("div",{key:i,staticClass:"item-claim"},[e("label",{staticClass:"item-name"},[t._v(t._s(o.asset_id))]),t._v(" "),e("CounterV2",{ref:"counter",refInFor:!0,staticClass:"counter-div",attrs:{item:o,claiminfo:t.claimInfo,active:!i,timestamp:t.end,autoclaim:!0==="this.$store.state.user.items['".concat(t.type,"']['item.asset_id']")}}),t._v(" "),e("div",{staticClass:"item-durability"}),t._v(" "),t.show.localClaim&&!i?e("LocalAutoClaimButton",{staticClass:"claim-btn",attrs:{type:t.type,id:o.asset_id}}):e("div",{staticClass:"blank2"}),t._v(" "),e("div",{staticClass:"blank2"}),t._v(" "),e("div",{staticClass:"blank2"})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AutoClaimButton:o(416).default,CounterV2:o(406).default,LocalAutoClaimButton:o(407).default})},416:function(t,e,o){"use strict";o.r(e);o(1),o(3);var n={name:"AutoClaimButton",props:{type:String},data:function(){return{actual:!1}},methods:{autoAll:function(){var t=this;localStorage.setItem("".concat(this.type,"AutoClaim"),!0),this.$store.commit("user/setAutoClaim",{type:this.type,id:"global",value:!0}),this.$store.state.user.items[this.type].forEach((function(e){localStorage.setItem(e.asset_id,!0),t.$store.commit("user/setAutoClaim",{type:t.type,id:e.asset_id,value:!0})})),this.actual=!0,this.$root.$emit("".concat(this.type,"autoClaimAll"))}},mounted:function(){var t=this;localStorage.getItem("".concat(this.type,"AutoClaim"))&&("true"==localStorage.getItem("".concat(this.type,"AutoClaim"))&&(this.actual=!0,this.$store.commit("user/setAutoClaim",{type:this.type,id:"global",value:!0}),this.$store.state.user.items[this.type].forEach((function(e){localStorage.setItem(e.asset_id,"true"),t.$store.commit("user/setAutoClaim",{type:t.type,id:e.asset_id,value:!0})}))));this.$root.$on("".concat(this.type,"disableClaimAll"),(function(){t.actual=!1}))}},r=o(70),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-button",{staticClass:"buttonAll",attrs:{variant:t.actual?"success":"",disabled:t.actual},on:{click:t.autoAll}},[t._v("\n    Auto Claim All\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,o){"use strict";o(410)},418:function(t,e,o){var n=o(112)(!1);n.push([t.i,".items-claim{margin-top:2%}.title{background-color:hsla(0,0%,50.2%,.534);text-align:center}.allBtn-1,.blank,.title{display:inline-block;width:30%;font-size:large}.allBtn-1{text-align:right}.allBtn-2{display:inline-block;width:30%;font-size:large;text-align:left}.buttonAll{font-size:small;text-decoration:none;size:0}.item-name{font-size:small;text-align:right}.counter-div,.item-name{display:inline-block;width:15%}.counter-div{text-align:center}.item-durability{display:inline-block;font-size:small;width:15%;text-align:right}.success{size:0}.danger,.success{font-size:.7em;font-weight:none}.danger{height:100%}.claim-btn{text-align:right}.claim-btn,.repair-btn{display:inline-block;width:15%}.repair-btn{text-align:left}.blank2,.info-pop{display:inline-block;width:15%}.info-pop{text-align:left}",""]),t.exports=n}}]);