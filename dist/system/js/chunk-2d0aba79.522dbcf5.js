(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba79"],{"15cb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onAdd}},[t._v(t._s(-1!==t.$route.path.indexOf("group")?"添加用户分组":"添加用户标签"))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"ID","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{domProps:{textContent:t._s(-1!==t.$route.path.indexOf("group")?n.group_id:n.label_id)}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:-1!==t.$route.path.indexOf("group")?"分组名称":"标签名称","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{domProps:{textContent:t._s(-1!==t.$route.path.indexOf("group")?n.group_name:n.label_name)}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.onEdit(-1!==t.$route.path.indexOf("group")?e.row.group_id:e.row.label_id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleDelete(-1!==t.$route.path.indexOf("group")?e.row.group_id:e.row.label_id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},i=[],o=a("c24f"),s={name:"UserGroup",data:function(){return{tableFrom:{page:1,limit:20},tableData:{data:[],total:0},listLoading:!0}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,-1!==this.$route.path.indexOf("group")?Object(o["w"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)})):Object(o["G"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(-1!==this.$route.path.indexOf("group")?Object(o["v"])():Object(o["F"])()).then((function(){return t.getList()}))},onEdit:function(t){var e=this;this.$modalForm(-1!==this.$route.path.indexOf("group")?Object(o["u"])(t):Object(o["E"])(t)).then((function(){return e.getList()}))},handleDelete:function(t,e){var a=this;this.$modalSure(-1!==this.$route.path.indexOf("group")?"删除该分组":"删除该标签").then((function(){-1!==a.$route.path.indexOf("group")?Object(o["t"])(t).then((function(t){var n=t.message;a.$message.success(n),a.tableData.data.splice(e,1),a.getList()})).catch((function(t){var e=t.message;a.$message.error(e)})):Object(o["D"])(t).then((function(t){var n=t.message;a.$message.success(n),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))}}},r=s,l=a("2877"),u=Object(l["a"])(r,n,i,!1,null,"5ed8fd30",null);e["default"]=u.exports}}]);