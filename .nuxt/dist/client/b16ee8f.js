(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("1c49a178",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";t.exports=function(){var t=new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())}},363:function(t,e,n){"use strict";n(352)},364:function(t,e,n){var o=n(107)(!1);o.push([t.i,"button[data-v-a0986a74]{border-radius:5px;border:none;font-weight:700;box-shadow:1px 1px 0 1px rgba(0,0,0,.2)}.DisBtn[data-v-a0986a74]{background:#d38c09;color:#0f0c05}.DisBtn[data-v-a0986a74],.EnBtn[data-v-a0986a74]{font-size:small}.EnBtn[data-v-a0986a74]{background:#28a745;color:#0f1b0e}",""]),t.exports=o},373:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(6),n(3),n(7);var o,r=n(32),c=n(0),l=(n(67),n(39),n(129),n(131),n(1),n(22),n(83));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(362),h=(o={name:"Counter",props:["active","timestamp","autoclaim","item","claiminfo"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["user/getMembers","user/getMines"])),data:function(){return{msg:"Ready to claim",wait:!1,loaded:!1,readyToClaim:!1,last:void 0,queued:!1,displayHours:0,displayMinutes:0,displaySeconds:0,manual:!1}}},Object(c.a)(o,"computed",{ISreadyToClaim:function(){return this.readyToClaim},_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},remainingTime:function(){return this.loaded?this.displayHours+":"+this.displayMinutes+":"+this.displaySeconds:"Getting remaining time..."}}),Object(c.a)(o,"watch",{timestamp:function(){this.loaded=!1,this.showRemaining()},autoclaim:function(){this.autoclaim&&(this.loaded=!1,this.showRemaining())}}),Object(c.a)(o,"mounted",(function(){var t=this;this.showRemaining(),this.$on("".concat(this.item.asset_id,".claiming"),(function(){t.last=Date.now(),console.log("received claiming!"),t.msg="Claiming..."})),this.$on("test",(function(t){console.log("counter receive test",t)})),this.$on("".concat(this.item.asset_id,".success"),(function(){t.last=Date.now(),console.log("received success!"),t.msg="Ready to claim",t.readyToClaim=!1,t.queued=!1,setTimeout((function(){t.last=void 0}),1e4),t.showRemaining()})),this.$on("".concat(this.item.asset_id,".retry"),(function(e){console.log("received retry!"),t.msg="Retry to claim/repair... (".concat(e,")")}))})),Object(c.a)(o,"methods",{checkManual:function(){var t=this.timestamp,e=new Date,n=new Date(t);return parseInt((n.getTime()-e.getTime())/1e3/this.item.charged_time+1).toFixed(0)>0},manualClaim:function(){var t=this;this.checkManual()&&(this.manual=!0,this.handleClaim(),setTimeout((function(){t.manual=!1}),5e3))},showRemaining:function(){var t=this,e=setInterval((function(){new Date;var n=t.timestamp,o=new Date(n).getTime()-d();if(o<=0)return clearInterval(e),null==t.last&&(t.readyToClaim=!0),t.loaded=!0,!0===t.$store.state.user.autoclaim[t.claiminfo.type][t.item.asset_id]&&t.handleClaim(),null;t.readyToClaim=!1;var r=Math.floor(o/t._hours),c=Math.floor(o%t._hours/t._minutes),l=Math.floor(o%t._minutes/t._seconds);t.displayHours=r<10?"0"+r:r,t.displayMinutes=c<10?"0"+c:c,t.displaySeconds=l<10?"0"+l:l,t.loaded=!0}),1e3)},handleClaim:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.$store.state.user.actions.find((function(e){return e.id===t.item.id}))){e.next=2;break}return e.abrupt("return");case 2:if(!t.queue){t.queued=!0;try{[{owner:t.$store.state.user.name}],n={actions:[]},localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&localStorage.getItem("a_e")&&(n.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_e")).toFixed(4)," DFE")}}),localStorage.getItem("to")&&n.actions.push({account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat(parseFloat(localStorage.getItem("a_e")).toFixed(4)," DFE"),memo:"auto transfer"}})),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&localStorage.getItem("a_w")&&(n.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_w")).toFixed(4)," DFW")}}),localStorage.getItem("to")&&n.actions.push({account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat(parseFloat(localStorage.getItem("a_w")).toFixed(4)," DFW"),memo:"auto transfer"}})),n.actions.push({account:"desertfarmgm",name:"mine",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name}}),o={blocksBehind:3,expireSeconds:30},r={id:t.item.asset_id,action:n,block:o},console.log("action",r.action),null==t.last&&(t.readyToClaim=!0,console.log("add to queue"),t.$store.commit("user/addAction",r),t.msg="Claim in queue...")}catch(t){console.log(t)}}case 3:case"end":return e.stop()}}),e)})))()}}),o),f=h,w=(n(363),n(66)),component=Object(w.a)(f,(function(){var t=this,e=t._self._c;return e("div",[!t.readyToClaim&&t.active?e("button",{staticClass:"DisBtn",attrs:{disabled:!t.checkManual()},on:{click:t.manualClaim}},[t._v("\n    "+t._s(t.remainingTime)+"\n  ")]):t.active?e("button",{staticClass:"EnBtn",on:{click:t.handleClaim}},[t._v("\n    "+t._s(t.msg)+"\n  ")]):t._e(),t._v(" "),t.wait?e("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):t._e()],1)}),[],!1,null,"a0986a74",null);e.default=component.exports}}]);