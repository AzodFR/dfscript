(window.webpackJsonp=window.webpackJsonp||[]).push([[15,12,14],{349:function(e,t,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("84dad990",content,!0,{sourceMap:!1})},358:function(e,t,n){"use strict";n(349)},359:function(e,t,n){var r=n(107)(!1);r.push([e.i,".login-form{display:flex;justify-content:center;margin-top:2%}.api-selector{margin-right:1%}.spinner-login{margin-left:1%;color:grey}",""]),e.exports=r},369:function(e,t,n){"use strict";n.r(t);n(15),n(2),n(1);var r,o=n(32),c=(n(67),n(39),{name:"Login",computed:{user:function(){return this.$store.state.user}},data:function(){return{wait:!1,options:["https://dovx-wax-rpc.global.binfra.one","https://api.wax.greeneosio.com","https://wax.cryptolions.io","https://wax.greymass.com","https://api.waxsweden.org","https://wax.eosusa.news","https://wax.eosphere.io","https://wax.eu.eosamsterdam.net"],selected:"https://dovx-wax-rpc.global.binfra.one"}},methods:{login:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.wait=!0,localStorage.setItem("rpc",this.selected),e.next=4,this.$store.commit("user/login",this.selected);case 4:t=this.$store.state.user.wax,n=setInterval((function(){null!=t&&null!=t.userAccount&&(clearInterval(n),r.$store.commit("user/setUser"),r.$emit("logged"))}),1e3);case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){if(localStorage.getItem("rpc"))if("random"==localStorage.getItem("rpc")){var e=parseInt(8*Math.random()+0);this.selected=this.options[e]}else this.selected=localStorage.getItem("rpc");localStorage.getItem("autoLogin")&&"true"==localStorage.getItem("autoLogin")&&this.login(),localStorage.getItem("autoLogin")&&"rpc"==localStorage.getItem("autoLogin")&&(localStorage.setItem("autoLogin","false"),this.login())}}),l=c,f=(n(358),n(66)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-form"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"api-selector",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.options,(function(n){return t("option",{key:n},[e._v("\n      "+e._s(n)+"\n    ")])})),0),e._v(" "),t("b-button",{attrs:{variant:"success"},on:{click:e.login}},[e._v("Login on WAX")]),e._v(" "),e.wait?t("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},370:function(e,t,n){"use strict";n.r(t);var r,o,c,l,f=n(32),m=(n(67),n(1),n(39),n(22),n(130),n(9),n(24),n(129),n(239).JsonRpc),time=15e3,h={name:"Interval",data:function(){return{rpc:null}},mounted:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.rpc=new m(e.$store.state.user.wax.rpc.endpoint,{fetch:fetch}),e.checkRPC(),e.launchCheck(),e.fetchStake(),e.launchIntervalMines(),e.launchIntervalTokens(),e.launchIntervalItems();case 7:case"end":return t.stop()}}),t)})))()},methods:{launchCheck:(l=Object(f.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval(Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.checkRPC();case 1:case"end":return e.stop()}}),e)}))),6e5);case 1:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)}),checkRPC:(c=Object(f.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,setTimeout((function(){t?(t=!1,console.log("rpc checked")):(console.log("fuck rpc"),localStorage.setItem("rpc","random"),localStorage.getItem("autoLogin")&&"false"!=localStorage.getItem("autoLogin")||localStorage.setItem("autoLogin","rpc"),window.location.href="/")}),2e3),e.prev=2,n=new m(this.$store.state.user.wax.rpc.endpoint,{fetch:fetch}),this.rpc=n,e.next=7,n.get_info().catch((function(e){t=!1,console.log("fuck rpc"),localStorage.setItem("rpc","random"),localStorage.getItem("autoLogin")&&"false"!=localStorage.getItem("autoLogin")||localStorage.setItem("autoLogin","rpc"),window.location.href="/"})).then((function(){t=!0}));case 7:e.next=16;break;case 9:e.prev=9,e.t0=e.catch(2),t=!1,console.log("fuck rpc"),localStorage.setItem("rpc","random"),localStorage.getItem("autoLogin")&&"false"!=localStorage.getItem("autoLogin")||localStorage.setItem("autoLogin","rpc"),window.location.href="/";case 16:case"end":return e.stop()}}),e,this,[[2,9]])}))),function(){return c.apply(this,arguments)}),launchFetchStake:function(){var e=this;this.fetchStake(),setInterval((function(){e.fetchStake()}),time)},fetchTemplate:(o=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),fetchRss:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.rpc.get_table_rows({json:!0,code:"desertfarmgm",scope:e.$store.state.user.name,table:"balances"}).then(function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(n){var r,o,c,i,l,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=n.rows,console.log(r),o=["DFE","DFW"],c=["DFE","DFW"],i=0;i<r.length;i++)o.splice(o.indexOf(r[i].balance.split(" ")[1]),1),e.$store.commit("user/setRessource",{type:r[i].balance.split(" ")[1],value:r[i].balance.split(" ")[0]});for(l=0;l<o.length;l++)null==e.$store.state.user.ressources[o[l]]&&e.$store.commit("user/setRessource",{type:o[l],value:"0.0000"});for(f=0;f<r.length;f++)c.splice(o.indexOf(r[f].token.split(" ")[1]),1),e.$store.commit("user/setToken",{type:r[f].token.split(" ")[1],value:r[f].token.split(" ")[0]});for(m=0;m<c.length;m++)null==e.$store.state.user.ressources[c[m]]&&e.$store.commit("user/setToken",{type:c[m],value:"0.0000"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.rpc.get_currency_balance("eosio.token",e.$store.state.user.name,"WAX").then(function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.commit("user/setToken",{type:"WAX",value:parseFloat(n[0].split(" ")[0])});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()},fetchStake:(r=Object(f.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.rpc.get_account(this.$store.state.user.name).then(function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),t.$store.commit("user/setStake",parseFloat(n.total_resources.cpu_weight.split(" ")[0]).toFixed(2)),t.$store.commit("user/setCPU",(100*n.cpu_limit.used/n.cpu_limit.max).toFixed(0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),launchIntervalItems:function(){var e=this;this.fetchItems(),setInterval((function(){e.fetchItems()}),time)},fetchItems:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.rpc.get_table_rows({json:!0,code:"desertfarmgm",scope:e.$store.state.user.name,table:"items"}).then(function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n),!(n.rows.length<=0)){t.next=5;break}return t.abrupt("return");case 5:e.$store.commit("user/setItem",{value:n.rows,type:"items"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},launchIntervalTokens:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchRss(),setInterval((function(){e.fetchRss()}),time);case 2:case"end":return t.stop()}}),t)})))()},launchIntervalMines:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchMines(),setInterval((function(){e.fetchMines()}),time);case 2:case"end":return t.stop()}}),t)})))()},fetchMines:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.rpc.get_table_rows({json:!0,code:"desertfarmgm",scope:"desertfarmgm",table:"mines",lower_bound:e.$store.state.user.name,upper_bound:e.$store.state.user.name}).then(function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n),!(n.rows.length<=0)){t.next=5;break}return t.abrupt("return");case 5:r=n.rows[0],o=new Date(r.end),r.end=o.getTime(),console.log("mine",r),e.$store.commit("user/setMine",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}}},d=h,v=n(66),component=Object(v.a)(d,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports},377:function(e,t,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("47ed2182",content,!0,{sourceMap:!1})},386:function(e,t,n){"use strict";n(377)},387:function(e,t,n){var r=n(107)(!1);r.push([e.i,"body{background-color:#222;color:#f0f8ff}.devinfo{position:fixed;top:0;right:0;left:0;z-index:1030;background-color:rgba(58,58,58,.096)}.txt{text-align:left;font-weight:700;margin-left:20px}.dev1{color:#d666e0}.dev2{color:#e74c3c}",""]),e.exports=r},392:function(e,t,n){"use strict";n.r(t);n(22);var r=n(354),o=n(369),c=n(370),l=n(379),f=n(355),m={name:"IndexPage",components:{DefiLogo:r.default,Login:o.default,Interval:c.default,Test:l.default,Buffer:f.default},computed:{name:function(){return this.$store.state.user.name}}},h=(n(386),n(66)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),""==e.name?t("DefiLogo"):e._e(),e._v(" "),""==e.name?t("Login"):t("div",[t("Interval"),e._v(" "),t("Test")],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"devinfo"},[t("p",{staticClass:"txt"},[e._v("\n      Created by\n      "),t("span",{staticClass:"dev1"},[e._v(" Azod#9999 (vzfjg.wam) ")]),e._v("\n      (v0.5.5)\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{DefiLogo:n(354).default,Login:n(369).default,Interval:n(370).default,Test:n(379).default})}}]);