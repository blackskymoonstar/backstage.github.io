(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fbea30"],{1336:function(t,e,i){"use strict";i.d(e,"h",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"l",(function(){return o})),i.d(e,"e",(function(){return l})),i.d(e,"k",(function(){return c})),i.d(e,"i",(function(){return u})),i.d(e,"f",(function(){return d})),i.d(e,"a",(function(){return m})),i.d(e,"g",(function(){return f})),i.d(e,"d",(function(){return p})),i.d(e,"j",(function(){return g}));var a=i("0c6d");function r(){return a["a"].get("system/article/category/lst")}function n(){return a["a"].get("system/article/category/select")}function s(){return a["a"].get("system/article/category/create/form")}function o(t){return a["a"].get("system/article/category/update/form/".concat(t))}function l(t){return a["a"].delete("system/article/category/delete/".concat(t))}function c(t,e){return a["a"].post("system/article/category/status/".concat(t),{status:e})}function u(t){return a["a"].get("system/article/article/lst",t)}function d(t){return a["a"].get("system/article/article/detail/".concat(t))}function m(t){return a["a"].post("system/article/article/create",t)}function f(t,e){return a["a"].post("system/article/article/update/".concat(e),t)}function p(t){return a["a"].delete("system/article/article/delete/".concat(t))}function g(t,e){return a["a"].post("system/article/article/status/".concat(t),{status:e})}},be20:function(t,e,i){"use strict";i("d86a")},c3b3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"divBox"},[i("el-card",{staticClass:"box-card"},[i("el-button",{staticClass:"pan-back-btn mb20",attrs:{icon:"el-icon-arrow-left",size:"mini"},on:{click:t.back}},[t._v("返回")]),t._v(" "),i("el-form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,"label-width":"120px",rules:t.ruleValidate},nativeOn:{submit:function(t){t.preventDefault()}}},[i("div",{staticClass:"dividerTitle"},[i("span",{staticClass:"title mr10"},[t._v("文章信息")]),t._v(" "),i("el-divider")],1),t._v(" "),i("el-row",{attrs:{gutter:10}},[i("el-col",t._b({},"el-col",t.grid,!1),[i("el-form-item",{attrs:{label:"标题：",prop:"title","label-for":"title"}},[i("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1),t._v(" "),i("el-col",t._b({staticClass:"mr50"},"el-col",t.grid,!1),[i("el-form-item",{attrs:{label:"作者：",prop:"author","label-for":"author"}},[i("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入",maxLength:"32","element-id":"author"},model:{value:t.formValidate.author,callback:function(e){t.$set(t.formValidate,"author",e)},expression:"formValidate.author"}})],1)],1),t._v(" "),i("el-col",t._b({},"el-col",t.grid,!1),[i("el-form-item",{attrs:{label:"文章分类：","label-for":"cid",prop:"cid"}},[i("el-select",{ref:"configSelect",staticClass:"mb15",staticStyle:{width:"90%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.formValidate.cid,callback:function(e){t.$set(t.formValidate,"cid",e)},expression:"formValidate.cid"}},[i("el-option",{staticStyle:{width:"560px",height:"200px",overflow:"auto","background-color":"#fff"},attrs:{label:t.sleOptions.title,value:t.sleOptions.article_category_id}},[i("el-tree",{ref:"tree2",attrs:{data:t.treeData,props:t.defaultProps,"highlight-current":""},on:{"node-click":t.handleSelClick}})],1)],1)],1)],1),t._v(" "),i("el-col",t._b({staticClass:"mr50"},"el-col",t.grid,!1),[i("el-form-item",{attrs:{label:"文章简介：",prop:"synopsis","label-for":"synopsis"}},[i("el-input",{staticStyle:{width:"90%"},attrs:{type:"textarea",placeholder:"请输入"},model:{value:t.formValidate.synopsis,callback:function(e){t.$set(t.formValidate,"synopsis",e)},expression:"formValidate.synopsis"}})],1)],1),t._v(" "),i("el-col",t._b({staticClass:"mr50"},"el-col",t.grid,!1),[i("el-form-item",{attrs:{label:"图文封面：",prop:"image_input"}},[i("div",{staticClass:"upLoadPicBox",on:{click:function(e){return t.modalPicTap("1")}}},[t.formValidate.image_input?i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:t.formValidate.image_input}})]):i("div",{staticClass:"upLoad"},[i("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1)],1),t._v(" "),i("div",{staticClass:"dividerTitle"},[i("span",{staticClass:"title"},[t._v("文章内容")]),t._v(" "),i("el-divider")],1),t._v(" "),i("el-form-item",{attrs:{label:"文章内容：",prop:"content"}},[i("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1),t._v(" "),i("div",{staticClass:"dividerTitle"},[i("span",{staticClass:"title"},[t._v("其他设置")]),t._v(" "),i("el-divider")],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"是否显示："}},[i("el-radio-group",{model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[i("el-radio",{staticClass:"radio",attrs:{label:1}},[t._v("显示")]),t._v(" "),i("el-radio",{attrs:{label:0}},[t._v("不显示")])],1)],1)],1)],1),t._v(" "),i("el-button",{staticClass:"submission",attrs:{type:"primary"},on:{click:function(e){return t.onsubmit("formValidate")}}},[t._v("提交")])],1)],1)],1)},r=[],n=i("c7eb"),s=(i("96cf"),i("1da1")),o=(i("7f7f"),i("1336")),l=i("6625"),c=i.n(l),u=i("bbcc"),d=i("5f87"),m=i("83d6"),f={name:"EditArticle",components:{VueUeditorWrap:c.a},data:function(){var t=this,e=u["a"].https+"/upload/image/0/file?ueditor=1&token="+Object(d["a"])(),i=function(e,i,a){t.formValidate.image_input?a():a(new Error("请上传图文封面"))},a=function(e,i,a){t.formValidate.cid?a():a(new Error("请选择文章分类"))};return{myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",enableAutoSave:!1,UEDITOR_HOME_URL:"/UEditor/",serverUrl:e,imageUrl:e,imageFieldName:"file",imageUrlPrefix:"",imageActionName:"upfile",imageMaxSize:2048e3,imageAllowFiles:[".png",".jpg",".jpeg",".gif",".bmp"]},roterPre:m["roterPre"],sleOptions:{title:"",article_category_id:""},defaultProps:{children:"children",label:"title"},list:[],treeData:[],grid:{xl:10,lg:10,md:10,sm:24,xs:24},formValidate:{cid:"",title:"",author:"",image_input:"",content:"",synopsis:"",url:"",is_hot:0,is_banner:0,status:0},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],cid:[{required:!0,validator:a,trigger:"change"}],image_input:[{required:!0,validator:i,trigger:"change"}],content:[{required:!0,message:"请输入文章内容",trigger:"change"}]},tempRoute:{}}},watch:{$route:function(t,e){this.$route.params.id?this.getDetails():this.formValidate={title:"",author:"",image_input:"",content:"",synopsis:"",url:"",is_hot:0,is_banner:0,status:0}}},created:function(){this.tempRoute=Object.assign({},this.$route)},mounted:function(){this.getList(),this.$route.params.id&&(this.setTagsViewTitle(),this.getDetails())},methods:{back:function(){this.$router.push({path:"".concat(m["roterPre"],"/cms/article")})},getList:function(){var t=this;Object(o["b"])().then((function(e){t.treeData=e.data})).catch((function(e){t.$message.error(e.message)}))},modalPicTap:function(t){var e=this;this.$modalUpload((function(t){e.formValidate.image_input=t[0]}),t)},handleSelClick:function(t){this.formValidate.cid=t.article_category_id,this.sleOptions={title:t.title,article_category_id:t.article_category_id},this.$refs.configSelect.blur()},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.$route.params.id?Object(o["g"])(e.formValidate,e.$route.params.id).then(function(){var t=Object(s["a"])(Object(n["a"])().mark((function t(i){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success(i.message),setTimeout((function(){e.$router.push({path:"".concat(m["roterPre"],"/cms/article")})}),500);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.message)})):Object(o["a"])(e.formValidate).then(function(){var t=Object(s["a"])(Object(n["a"])().mark((function t(i){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success(i.message),setTimeout((function(){e.$router.push({path:"".concat(m["roterPre"],"/cms/article")})}),500);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.message)}))}))},getDetails:function(){var t=this;Object(o["f"])(this.$route.params.id?this.$route.params.id:0).then(function(){var e=Object(s["a"])(Object(n["a"])().mark((function e(i){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=i.data,t.sleOptions.title=a.articleCategory.title,t.sleOptions.article_category_id=a.articleCategory.article_category_id,t.formValidate={cid:a.articleCategory.article_category_id,title:a.title,author:a.author,image_input:a.image_input,content:a.content.content,synopsis:a.synopsis,url:a.url,is_hot:a.is_hot,is_banner:a.is_banner,status:a.status};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.message)}))},setTagsViewTitle:function(){var t="编辑文章",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:m["roterPre"]+"/admin/widget/image?field=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=i;var a=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return a}),37),window.UE.registerUI("video-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:m["roterPre"]+"/admin/widget/video?fodder=video",editor:t,name:e,title:"上传视频",cssRules:"width:800px;height:420px;padding:10px 20px 20px;"});this.dialog=i;var a=new window.UE.ui.Button({name:"video-button",title:"上传视频",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -320px -20px;",onclick:function(){i.render(),i.open()}});return a}),38)}}},p=f,g=(i("be20"),i("2877")),h=Object(g["a"])(p,a,r,!1,null,"54fd5886",null);e["default"]=h.exports},d86a:function(t,e,i){}}]);