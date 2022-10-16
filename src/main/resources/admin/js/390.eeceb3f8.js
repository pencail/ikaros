"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[390],{49390:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var i=function(){var e=this,t=e._self._c;return t("page-header-wrapper",{attrs:{title:!1}},[t("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"番剧ID",hidden:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}]})],1),t("a-form-item",{attrs:{label:"标题"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入标题!"}]}],expression:"['title', { rules: [{ required: true, message: '请输入标题!' }] }]"}],attrs:{placeholder:"请输入标题"}})],1),t("a-form-item",{attrs:{label:"简述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["overview"],expression:"['overview']"}],attrs:{type:"textarea",autoSize:"",placeholder:"请输入简述"}})],1),t("a-form-item",{attrs:{label:"工作人员"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["staffs"],expression:"['staffs']"}],attrs:{type:"textarea",autoSize:"",placeholder:"请输入工作人员： 一行一个， 职位 : 姓名"}})],1),t("a-form-item",{attrs:{label:"首次放送日期"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["airTime"],expression:"['airTime']"}],staticStyle:{width:"100%"},on:{change:e.onChange}})],1),t("a-form-item",{attrs:{label:"海报图URL"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["coverUrl"],expression:"['coverUrl']"}],attrs:{placeholder:"点击右边按钮，可快速获取已存在文件URL或者上传新的图片"}},[t("a-icon",{attrs:{slot:"addonAfter",type:"search"},on:{click:e.openFileSelectModal},slot:"addonAfter"})],1)],1),t("a-form-item",{attrs:{"wrapper-col":e.submitButtonWrapperCol}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 提交 ")])],1)],1),t("FileSelectModal",{attrs:{visible:e.fileSelectModalVisible,disableCopySelectedFileIdButton:!0},on:{"update:visible":function(t){e.fileSelectModalVisible=t},sendSelectedFileFieldValue:e.handSelectedFileFieldValue}})],1)},l=[],s=(a(68309),function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{width:"65%",title:"文件选择"},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[t("a-row",{attrs:{gutter:12,align:"middle",type:"flex"}},[t("a-col",{staticClass:"pb-3",attrs:{span:24}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"关键词："}},[t("a-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery()}},model:{value:e.list.params.keyword,callback:function(t){e.$set(e.list.params,"keyword",t)},expression:"list.params.keyword"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"存储位置："}},[t("a-select",{attrs:{loading:e.places.loading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.list.params.place,callback:function(t){e.$set(e.list.params,"place",t)},expression:"list.params.place"}},e._l(e.places.data,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(" "+e._s(e._f("fileTypePlace")(a))+" ")])})),1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"文件类型："}},[t("a-select",{attrs:{loading:e.types.loading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.list.params.type,callback:function(t){e.$set(e.list.params,"type",t)},expression:"list.params.type"}},e._l(e.types.data,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a}},[e._v(e._s(e._f("fileTypeText")(a))+" ")])})),1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-space",[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleQuery()}}},[e._v("查询")]),t("a-button",{on:{click:function(t){return e.handleResetParam()}}},[e._v("重置")]),t("a-button",{attrs:{icon:"cloud-upload",type:"primary"},on:{click:function(t){e.upload.visible=!0}}},[e._v("上传")])],1)],1)])],1)],1)],1)]),t("a-col",{attrs:{span:24}},[t("a-spin",{attrs:{spinning:e.list.loading}},[t("div",{staticClass:"div-filelist-item"},[t("a-row",{staticClass:"row-filelist",attrs:{gutter:16}},e._l(e.list.data,(function(a,i){return t("div",{key:i,on:{click:function(t){return e.handleFileItemClick(a)}}},[t("a-col",{staticClass:"col-file-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6}},[t("a-card",{class:"".concat(e.isItemSelect(a)?"card-body-select-true":"card-body-select-false"),attrs:{title:a.name,bordered:!1}},[e.isImage(a)?t("img",{staticClass:"img-filelist-item",attrs:{alt:a.name,src:a.url,loading:"lazy"}}):t("div",[t("p",[e._v("当前文件 类型/后缀 为： "+e._s(e._f("fileTypeText")(a.type))+"/"+e._s(a.postfix))]),t("p",[e._v("非图片格式在选择页不支持预览，预览请去文件页")])])])],1)],1)})),0)],1)])],1)],1),t("div",{staticClass:"page-wrapper"},[t("a-pagination",{staticClass:"pagination",attrs:{current:e.pagination.page,defaultPageSize:e.pagination.size,pageSizeOptions:["8","16","32","64","128"],total:e.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:e.handlePageChange,showSizeChange:e.handlePageSizeChange}})],1),t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.closeFileSelectModal}},[e._v("返回")]),t("a-button",{attrs:{type:"primary",disabled:e.disableCopySelectedFileIdButton},on:{click:e.copySelectedFileId}},[e._v("复制ID")]),t("a-button",{attrs:{type:"primary",disabled:e.disableCopySelectedFileUrlButton},on:{click:e.copySelectedFileUrl}},[e._v("复制URL")])],1),t("FileUploadModal",{attrs:{visible:e.upload.visible},on:{"update:visible":function(t){return e.$set(e.upload,"visible",t)},fileUploadModalClose:e.onFileUploadModalClose}})],2)}),r=[],n=a(6835),o=a(48534),c=(a(23157),a(34553),a(92222),a(56075)),d=a(30627),u={name:"FileSelectModal",components:{FileUploadModal:c.Z},props:{visible:{type:Boolean,default:!1},disableCopySelectedFileIdButton:{type:Boolean,default:!1},disableCopySelectedFileUrlButton:{type:Boolean,default:!1}},computed:{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},isImage:function(){return function(e){return!(!e||!e.type)&&e.type.startsWith("IMAGE")}},isItemSelect:function(){return function(e){return this.list.current===e}},pagination:function(){return{page:this.list.params.page,size:this.list.params.size,total:this.list.total}},selectPreviousButtonDisabled:function(){var e=this,t=this.list.data.findIndex((function(t){return t.id===e.list.current.id}));return 0===t&&!this.list.hasPrevious},selectNextButtonDisabled:function(){var e=this,t=this.list.data.findIndex((function(t){return t.id===e.list.current.id}));return t===this.list.data.length-1&&!this.list.hasNext}},data:function(){return{list:{data:[],loading:!1,total:0,hasNext:!1,hasPrevious:!1,params:{page:1,size:8,keyword:void 0,type:void 0,place:void 0},current:{}},types:{data:[],loading:!1},places:{data:[],loading:!1},upload:{visible:!1}}},created:function(){this.handleResetParam()},methods:{handleResetParam:function(){this.list.params.keyword=void 0,this.list.params.type=void 0,this.list.params.place=void 0,this.handlePageChange(),this.handleListTypes(),this.handleListPlaces()},handleListFiles:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.list.loading=!0,t.next=4,(0,d.bc)(e.list.params);case 4:if(a=t.sent,!(0===a.result.content.length&&e.list.params.page>0)){t.next=10;break}return e.list.params.page--,t.next=9,e.handleListFiles();case 9:return t.abrupt("return");case 10:e.list.data=a.result.content,e.list.total=a.result.total,e.list.hasNext=a.result.hasNext,e.list.hasPrevious=a.result.hasPrevious,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),e.$log.error(t.t0);case 19:return t.prev=19,e.list.loading=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])})))()},handleQuery:function(){this.$log.debug("params",this.list.params),this.handlePageChange()},handlePageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$log.debug("page: ",e),this.list.params.page=e,this.handleListFiles()},handlePageSizeChange:function(e,t){this.$log.debug("Current: ".concat(e,", PageSize: ").concat(t)),this.list.params.page=1,this.list.params.size=t,this.handleListFiles()},handleListTypes:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.types.loading=!0,t.next=4,(0,d.Z9)();case 4:a=t.sent,e.types.data=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$log.error(t.t0);case 11:return t.prev=11,e.types.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()},handleListPlaces:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.places.loading=!0,t.next=4,(0,d.U4)();case 4:a=t.sent,e.places.data=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$log.error(t.t0);case 11:return t.prev=11,e.places.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()},onFileUploadModalClose:function(){this.handlePageChange(),this.handleListTypes(),this.handleListPlaces()},handleFileItemClick:function(e){this.isItemSelect(e)?this.list.current={}:this.list.current=e},copySelectedFileId:function(){this.list.current.id?(this.closeFileSelectModal(),this.$emit("sendSelectedFileFieldValue",this.list.current.id)):this.$notification.warning({message:"请选中一个文件"})},copySelectedFileUrl:function(){this.list.current.url?(this.closeFileSelectModal(),this.$emit("sendSelectedFileFieldValue",this.list.current.url)):this.$notification.warning({message:"请选中一个文件"})},closeFileSelectModal:function(){this.modalVisible=!1}}},p=u,h=a(1001),m=(0,h.Z)(p,s,r,!1,null,"20175511",null),f=m.exports,v={components:{FileSelectModal:f},data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}},submitButtonWrapperCol:{xs:{span:24,offset:5},sm:{span:12,offset:5}},formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),fileSelectModalVisible:!1}},methods:{onChange:function(){},handleSubmit:function(){},openFileSelectModal:function(){this.fileSelectModalVisible=!0},handSelectedFileFieldValue:function(e){this.$log.debug("value",e),this.form.setFieldsValue({coverUrl:e})}}},g=v,b=(0,h.Z)(g,i,l,!1,null,"04344adc",null),y=b.exports}}]);