(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{350:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("59ec925f",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";t.exports=function(){var t=new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())}},361:function(t,e,o){"use strict";o(350)},362:function(t,e,o){var n=o(107)(!1);n.push([t.i,"button[data-v-b7b4ba90]{border-radius:5px;border:none;font-weight:700;box-shadow:1px 1px 0 1px rgba(0,0,0,.2)}.DisBtn[data-v-b7b4ba90]{background:#d38c09;color:#0f0c05}.DisBtn[data-v-b7b4ba90],.EnBtn[data-v-b7b4ba90]{font-size:small}.EnBtn[data-v-b7b4ba90]{background:#28a745;color:#0f1b0e}",""]),t.exports=n},371:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(6),o(3),o(7);var n,r=o(32),c=o(0),l=(o(67),o(39),o(129),o(131),o(1),o(22),o(83));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d=o(360),h=(n={name:"Counter",props:["active","timestamp","autoclaim","item","claiminfo"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["user/getMembers","user/getMines"])),data:function(){return{msg:"Ready to claim",wait:!1,loaded:!1,readyToClaim:!1,last:void 0,queued:!1,displayHours:0,displayMinutes:0,displaySeconds:0,manual:!1}}},Object(c.a)(n,"computed",{ISreadyToClaim:function(){return this.readyToClaim},_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},remainingTime:function(){return this.loaded?this.displayHours+":"+this.displayMinutes+":"+this.displaySeconds:"Getting remaining time..."}}),Object(c.a)(n,"watch",{timestamp:function(){this.loaded=!1,this.showRemaining()},autoclaim:function(){this.autoclaim&&(this.loaded=!1,this.showRemaining())}}),Object(c.a)(n,"mounted",(function(){var t=this;this.showRemaining(),this.$on("".concat(this.item.asset_id,".claiming"),(function(){t.last=Date.now(),console.log("received claiming!"),t.msg="Claiming..."})),this.$on("test",(function(t){console.log("counter receive test",t)})),this.$on("".concat(this.item.asset_id,".success"),(function(){t.last=Date.now(),console.log("received success!"),t.msg="Ready to claim",t.readyToClaim=!1,t.queued=!1,setTimeout((function(){t.last=void 0}),1e4),t.showRemaining()})),this.$on("".concat(this.item.asset_id,".retry"),(function(e){console.log("received retry!"),t.msg="Retry to claim/repair... (".concat(e,")")}))})),Object(c.a)(n,"methods",{checkManual:function(){var t=this.timestamp,e=new Date,o=new Date(t);return parseInt((o.getTime()-e.getTime())/1e3/this.item.charged_time+1).toFixed(0)>0},manualClaim:function(){var t=this;this.checkManual()&&(this.manual=!0,this.handleClaim(),setTimeout((function(){t.manual=!1}),5e3))},showRemaining:function(){var t=this,e=setInterval((function(){new Date;var o=t.timestamp,n=new Date(o).getTime()-d();if(n<=0)return clearInterval(e),null==t.last&&(t.readyToClaim=!0),t.loaded=!0,localStorage.getItem("claimAuto")&&"true"==localStorage.getItem("claimAuto")&&t.handleClaim(),null;t.readyToClaim=!1;var r=Math.floor(n/t._hours),c=Math.floor(n%t._hours/t._minutes),l=Math.floor(n%t._minutes/t._seconds);t.displayHours=r<10?"0"+r:r,t.displayMinutes=c<10?"0"+c:c,t.displaySeconds=l<10?"0"+l:l,t.loaded=!0}),1e3)},handleClaim:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r,c,l,m,d,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.$store.state.user.actions.find((function(e){return e.id===t.item.id}))){e.next=2;break}return e.abrupt("return");case 2:if(!t.queue){t.queued=!0;try{[{owner:t.$store.state.user.name}],o={actions:[]},localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&localStorage.getItem("a_e")&&o.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_e")).toFixed(4)," DFE")}}),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&localStorage.getItem("a_w")&&o.actions.push({account:"desertfarmgm",name:"withdraw",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name,quantity:"".concat(parseFloat(localStorage.getItem("a_w")).toFixed(4)," DFW")}}),o.actions.push({account:"desertfarmgm",name:"mine",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{owner:t.$store.state.user.name}}),n={blocksBehind:3,expireSeconds:30},r={id:t.item.asset_id,action:o,block:n},console.log("action",r.action),null==t.last&&(t.readyToClaim=!0,console.log("add to queue"),t.$store.commit("user/addAction",r),t.msg="Claim in queue...",localStorage.getItem("e")&&"true"==localStorage.getItem("e")&&localStorage.getItem("a_e")&&localStorage.getItem("to")&&(c={actions:[{account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat((.96*parseFloat(localStorage.getItem("a_e"))).toFixed(4)," DFE"),memo:"auto transfer"}}]},l={blocksBehind:3,expireSeconds:30},m={id:t.item.asset_id+" transfer",action:c,block:l},t.$store.commit("user/addAction",m)),localStorage.getItem("w")&&"true"==localStorage.getItem("w")&&localStorage.getItem("a_w")&&localStorage.getItem("to")&&(d={actions:[{account:"deserttokens",name:"transfer",authorization:[{actor:t.$store.state.user.name,permission:"active"}],data:{from:t.$store.state.user.name,to:localStorage.getItem("to"),quantity:"".concat((.96*parseFloat(localStorage.getItem("a_w"))).toFixed(4)," DFW"),memo:"auto transfer"}}]},h={blocksBehind:3,expireSeconds:30},f={id:t.item.asset_id+" transfer",action:d,block:h},t.$store.commit("user/addAction",f)))}catch(t){console.log(t)}}case 3:case"end":return e.stop()}}),e)})))()}}),n),f=h,w=(o(361),o(66)),component=Object(w.a)(f,(function(){var t=this,e=t._self._c;return e("div",[!t.readyToClaim&&t.active?e("button",{staticClass:"DisBtn",attrs:{disabled:!t.checkManual()},on:{click:t.manualClaim}},[t._v("\n    "+t._s(t.remainingTime)+"\n  ")]):t.active?e("button",{staticClass:"EnBtn",on:{click:t.handleClaim}},[t._v("\n    "+t._s(t.msg)+"\n  ")]):t._e(),t._v(" "),t.wait?e("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):t._e()],1)}),[],!1,null,"b7b4ba90",null);e.default=component.exports}}]);