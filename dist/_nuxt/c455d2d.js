(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(e,t,r){"use strict";r.r(t);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var c=r(0),n=r(32);r(67),r(39);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{actions:null,r_actions:null,retry:null,check_a:!0,check_b:!0,check_c:!0}},computed:{user:function(){return this.$store.state.user}},methods:{checkAction:function(){var e=this;this.actions=setInterval(Object(n.a)(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user.lock){t.next=28;break}if(0==e.user.actions.length){t.next=28;break}if(e.user.lock){t.next=28;break}if(e.$store.commit("user/setLock",!0),clearInterval(e.actions),r=e.user.actions[0],0==e.user.actions.length){t.next=28;break}return t.prev=7,console.log("claiming",r.id),e.$root.$emit("claiming",r.id),t.next=12,e.user.wax.api.transact(r.action,r.block);case 12:t.sent,console.log("success",r.id),e.$root.$emit("success",r.id),e.$store.commit("user/rmAction",r),setTimeout((function(){e.checkAction()}),3e3),t.next=28;break;case 19:t.prev=19,t.t0=t.catch(7),console.log(t.t0),(c=l({},r)).retry=1,e.$store.commit("user/addRetryAction",c),e.$store.commit("user/rmAction",r),e.$store.commit("user/setLock",!1),setTimeout((function(){e.checkAction()}),3e3);case 28:case"end":return t.stop()}}),t,null,[[7,19]])}))),3e3)},checkRetry:function(){var e=this;this.retry=setInterval(Object(n.a)(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e.user.retry),e.user.lock){t.next=31;break}if(0==e.user.retry.length){t.next=31;break}if(console.log(e.user.retry),e.user.lock){t.next=31;break}if(e.$store.commit("user/setLock",!0),clearInterval(e.retry),r=e.user.retry[0],0==e.user.retry.length){t.next=31;break}return t.prev=9,console.log("retry",r),e.$root.$emit("retry",r),t.next=14,e.user.wax.api.transact(r.action,r.block);case 14:t.sent,console.log("success",r.id),e.$root.$emit("success",r.id),e.$store.commit("user/rmRetryAction",r),e.$store.commit("user/setLock",!1),e.checkRetry(),t.next=31;break;case 22:t.prev=22,t.t0=t.catch(9),console.log(t.t0),(c=l({},r)).retry++,e.$store.commit("user/rmRetryAction",r),e.$store.commit("user/addRetryAction",c),e.$store.commit("user/setLock",!1),e.checkRetry();case 31:case"end":return t.stop()}}),t,null,[[9,22]])}))),1e4)},checkRepair:function(){var e=this;this.r_actions=setInterval(Object(n.a)(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user.lock){t.next=25;break}if(0==e.user.r_actions.length){t.next=25;break}if(console.log(e.user.r_actions),e.user.lock){t.next=25;break}if(e.$store.commit("user/setLock",!0),clearInterval(e.r_actions),r=e.user.r_actions[0],0==e.user.r_actions.length){t.next=25;break}return t.prev=8,t.next=11,e.user.wax.api.transact(r.action,r.block);case 11:t.sent,e.$store.commit("user/rmRAction",r),e.$store.commit("user/setLock",!1),e.checkRepair(),t.next=25;break;case 17:t.prev=17,t.t0=t.catch(8),(c=l({},r)).retry=1,e.$store.commit("user/rmRAction",r),e.$store.commit("user/addRetryAction",c),e.$store.commit("user/setLock",!1),e.checkRepair();case 25:case"end":return t.stop()}}),t,null,[[8,17]])}))),3e3)}},mounted:function(){this.checkAction(),this.checkRepair(),this.checkRetry()}},k=r(66),component=Object(k.a)(m,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports}}]);