"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[378],{86284:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[t("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[t("a-tab-pane",{key:"tab1",attrs:{tab:e.$t("user.login.tab-login-credentials")}},[e.isLoginError?t("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.$t("user.login.message-invalid-credentials")}}):e._e(),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:e.$t("user.userName.required")},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: $t('user.password.required') }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",placeholder:e.$t("user.login.password.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),t("a-form-item",[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}]},[e._v(e._s(e.$t("user.login.remember-me")))]),t("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[e._v(e._s(e.$t("user.login.forgot-password")))])],1),t("a-form-item",{staticStyle:{"margin-top":"24px"}},[t("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v(e._s(e.$t("user.login.login")))])],1)],1)],1)},a=[],i=r(95082),o=(r(74916),r(41539),function(){var e=this,t=this,r=t._self._c;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),r("a-spin",{attrs:{spinning:t.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[r("div",{staticClass:"step-form-wrapper"},[t.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),r("br"),t._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),t._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk.apply(null,arguments)}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)}),n=[],l={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(r,s){r?(e.stepLoading=!1,e.$emit("error",{err:r})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:s})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},u=l,c=r(1001),d=(0,c.Z)(u,o,n,!1,null,"4a462ef6",null),p=d.exports,m=r(20629),g=r(84722),h=r(12223),f={components:{TwoStepCaptcha:p},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1},userLoginSuccessMessage:this.$t("user.login.success.message"),userLoginSuccessDescription:this.$t("user.login.success.description"),userLoginReqfailMessage:this.$t("user.login.reqfail.message"),userLoginReqfailDescription:this.$t("user.login.reqfail.description")}},methods:(0,i.Z)((0,i.Z)({},(0,m.nv)(["Login","Logout"])),{},{handleUsernameOrEmail:function(e,t,r){var s=this.state,a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;a.test(t)?s.loginType=0:s.loginType=1,r()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state,a=this.customActiveKey,o=this.Login;s.loginBtn=!0;var n="tab1"===a?["username","password"]:["mobile","captcha"];r(n,{force:!0},(function(e,r){if(e)setTimeout((function(){s.loginBtn=!1}),600);else{var a=(0,i.Z)({},r);delete a.username,a[s.loginType?"username":"email"]=r.username,a.password=r.password,o(a).then((function(e){t.loginSuccess(e)})).catch((function(e){t.requestFailed(e)})).finally((function(){s.loginBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state;r(["mobile"],{force:!0},(function(e,r){if(!e){s.smsSendBtn=!0;var a=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(a))}),1e3),i=t.$message.loading("验证码发送中..",0);(0,h.EK)({mobile:r.mobile}).then((function(e){setTimeout(i,2500),t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(i,1),clearInterval(a),s.time=60,s.smsSendBtn=!1,t.requestFailed(e)}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:t.userLoginSuccessMessage,description:"".concat((0,g.D$)())+t.userLoginSuccessDescription})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:this.userLoginReqfailMessage,description:((e.response||{}).data||{}).message||this.userLoginReqfailDescription,duration:4})}})},v=f,w=(0,c.Z)(v,s,a,!1,null,"608c65c6",null),b=w.exports},71481:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main user-layout-register"},[t("h3",[t("span",[e._v(e._s(e.$t("user.register.register")))])]),t("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:e.$t("user.email.required")}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: $t('user.email.required') }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.register.email.placeholder")}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:["user-register",e.passwordLevelClass]},[e._v(e._s(e.$t(e.passwordLevelName)))]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v(e._s(e.$t("user.register.password.popover-message"))+" ")])])],1)]),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.password.placeholder")},on:{click:e.handlePasswordInputClick}})],1)],2),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.confirm-password.placeholder")}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:e.$t("user.phone-number.required"),pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: $t('user.phone-number.required'), pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:e.$t("user.login.mobile.placeholder")}},[t("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),t("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{staticClass:"gutter-row",attrs:{span:16}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),t("a-col",{staticClass:"gutter-row",attrs:{span:8}},[t("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1),t("a-form-item",[t("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v(e._s(e.$t("user.register.register"))+" ")]),t("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v(e._s(e.$t("user.register.sign-in")))])],1)],1)],1)},a=[],i=r(95082),o=(r(73210),r(12223)),n=r(24021),l=r(84722),u={0:"user.password.strength.short",1:"user.password.strength.low",2:"user.password.strength.medium",3:"user.password.strength.strong"},c={0:"error",1:"error",2:"warning",3:"success"},d={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},p={name:"Register",components:{},mixins:[n.X],data:function(){return{form:this.$form.createForm(this),state:{time:60,level:0,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return u[this.state.passwordLevel]},passwordLevelColor:function(){return d[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,r){if(!t)return r();t.length>=6?((0,l.IE)(t)>=30&&(this.state.level=1),(0,l.IE)(t)>=60&&(this.state.level=2),(0,l.IE)(t)>=80&&(this.state.level=3)):(this.state.level=0,r(new Error(this.$t("user.password.strength.msg")))),this.state.passwordLevel=this.state.level,this.state.percent=33*this.state.level,r()},handlePasswordCheck:function(e,t,r){var s=this.form.getFieldValue("password");void 0===t&&r(new Error(this.$t("user.password.required"))),t&&s&&t.trim()!==s.trim()&&r(new Error(this.$t("user.password.twice.msg"))),r()},handlePhoneCheck:function(e,t,r){r()},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,r=this.$router;e({force:!0},(function(e,s){e||(t.passwordLevelChecked=!1,r.push({name:"registerResult",params:(0,i.Z)({},s)}))}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state,a=this.$message,i=this.$notification;r(["mobile"],{force:!0},(function(e,r){if(!e){s.smsSendBtn=!0;var n=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(n))}),1e3),l=a.loading("验证码发送中..",0);(0,o.EK)({mobile:r.mobile}).then((function(e){setTimeout(l,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(l,1),clearInterval(n),s.time=60,s.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},m=p,g=r(1001),h=(0,g.Z)(m,s,a,!1,null,"0c6ae390",null),f=h.exports},5172:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});r(82526),r(41817);var s=function(){var e=this,t=e._self._c;return t("a-result",{attrs:{isSuccess:!0,content:!1,title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"extra",fn:function(){return[t("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},a=[],i={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},o=i,n=r(1001),l=(0,n.Z)(o,s,a,!1,null,"4a6c53ae",null),u=l.exports}}]);