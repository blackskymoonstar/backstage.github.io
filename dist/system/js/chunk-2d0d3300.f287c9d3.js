(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3300"],{"5c62":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onAdd}},[t._v("添加专场")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small"}},[t._l(t.columns,(function(e,i){return a("el-table-column",{key:i,attrs:{prop:e.key,label:e.title,"min-width":e.minWidth},scopedSlots:t._u([{key:"default",fn:function(i){return[["img","image","pic"].indexOf(e.key)>-1||e.key.indexOf("pic")>-1||e.key.indexOf("img")>-1||e.key.indexOf("image")>-1||e.key.indexOf("banner")>-1?a("div",{staticClass:"demo-image__preview"},[Array.isArray(i.row[e.key])?a("div",t._l(i.row[e.key],(function(t,e){return a("span",{key:e},[a("el-image",{staticStyle:{width:"36px",height:"36px","margin-right":"5px"},attrs:{src:t}})],1)})),0):a("div",[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:i.row[e.key]}})],1)]):"type"==e.key?a("span",[t._v("\n            "+t._s(1==i.row[e.key]?"小图":2==i.row[e.key]?"中图":"大图")+"\n          ")]):a("span",[t._v(t._s(i.row[e.key]))])]}}],null,!0)})})),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row.group_data_id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.group_data_id,e.$index)}}},[t._v("删除")])]}}])})],2),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableData.limit,"current-page":t.tableData.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},n=[],s=(a("7f7f"),a("ac6a"),a("8593")),r=a("83d6"),o=(a("2f62"),{name:"Data",data:function(){return{roterPre:r["roterPre"],tableData:{page:1,limit:20,data:[],total:0},groupId:null,loading:!1,groupDetail:null,titles:""}},computed:{columns:function(){if(!this.groupDetail)return[];var t=[{title:"ID",key:"group_data_id",minWidth:60}];return this.groupDetail.fields&&this.groupDetail.fields.forEach((function(e){t.push({title:e.name,key:e.field,minWidth:80})})),t.push({title:"添加时间",key:"create_time",minWidth:200}),t}},watch:{"$route.params.id":function(t){this.groupId=t},groupId:function(t){this.getGroupDetail(t)}},mounted:function(){this.groupId=this.$route.params.id},created:function(){},methods:{getGroupDetail:function(t){var e=this;Object(s["x"])(t).then((function(t){e.groupDetail=t.data,e.tableData.page=1,e.getList()})).catch((function(t){e.$message.error(t.message)}))},getList:function(){var t=this;this.loading=!1,Object(s["w"])(this.$route.params.id,this.tableData.page,this.tableData.limit).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.loading=!1})).catch((function(e){var a=e.message;t.loading=!1,t.$message.error(a)}))},pageChange:function(t){this.tableData.page=t,this.getList()},handleSizeChange:function(t){this.tableData.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(Object(s["r"])(this.$route.params.id)).then((function(){return t.getList()}))},onEdit:function(t){var e=this;this.$modalForm(Object(s["S"])(this.$route.params.id,t)).then((function(){return e.getList()}))},onchangeIsShow:function(t){var e=this;Object(s["P"])(t.group_data_id,{status:t.status}).then((function(t){var a=t.message;e.$message.success(a),e.getList()})).catch((function(t){var a=t.message;e.$message.error(a)}))},handleDelete:function(t,e){var a=this;this.$modalSure("确定删除该专题").then((function(){Object(s["u"])(t).then((function(t){var i=t.message;a.$message.success(i),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))}}}),l=o,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,"47ee18b4",null);e["default"]=u.exports}}]);