(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messages/liuyan"],{"05a5":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("99cf"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"67b2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,u,a,i){try{var o=t[a](i),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,u)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var i=t.apply(e,n);function o(t){a(i,r,u,o,c,"next",t)}function c(t){a(i,r,u,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{ruleForm:{userid:"",username:"",content:"",reply:"",cpicture:""},user:{}}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=i(r.default.mark((function e(n){var u,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=t.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),"yonghu"==u&&(this.ruleForm.username=this.user.yonghuzhanghao),this.styleChange();case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{uploadTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.cpicture="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=i(r.default.mark((function e(){var n,u,a,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.content){e.next=11;break}for(this.ruleForm.avatarurl=t.getStorageSync("headportrait")?t.getStorageSync("headportrait"):"",n="",u=[],n&&(u=n.split(",")),a=0;a<u.length;a++)i=new RegExp(u[a],"g"),this.ruleForm.content.indexOf(u[a])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(i,"**"));return e.next=8,this.$api.add("messages",this.ruleForm);case 8:this.$utils.msgBack("提交成功"),e.next=12;break;case 11:this.$utils.msg("请填写留言内容");case 12:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};e.default=o}).call(this,n("543d")["default"])},"82ae":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"89f5":function(t,e,n){"use strict";var r=n("8b41"),u=n.n(r);u.a},"8b41":function(t,e,n){},"99cf":function(t,e,n){"use strict";n.r(e);var r=n("82ae"),u=n("ca9c");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("89f5");var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"65b75c84",null,!1,r["a"],i);e["default"]=c.exports},ca9c:function(t,e,n){"use strict";n.r(e);var r=n("67b2"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a}},[["05a5","common/runtime","common/vendor"]]]);