(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391430e6"],{"3a3b":function(a,e,t){},4401:function(a,e,t){"use strict";t("aace")},"62e4":function(a,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"e",(function(){return i})),t.d(e,"c",(function(){return l})),t.d(e,"d",(function(){return r})),t.d(e,"b",(function(){return c}));var n=t("b775");function s(a){return Object(n["a"])({url:"/app/getList",method:"get",params:a})}function i(a){return Object(n["a"])({url:"/jvm/threadPoolList",method:"get",params:a})}function l(a){return Object(n["a"])({url:"/app/getInstanceInfo",method:"get",params:a})}function r(a){return Object(n["a"])({url:"/app/getInstanceNames",method:"get",params:a})}function c(){return Object(n["a"])({url:"/app/getAppNames",method:"get"})}},"7c2b":function(a,e,t){"use strict";t("d86f")},"98de":function(a,e,t){"use strict";t("3a3b")},aace:function(a,e,t){},c74d:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"font-size":"14px"}},[a._v("应用： ")]),t("el-select",{staticClass:"mr",staticStyle:{width:"280px"},attrs:{size:"mini",filterable:"",placeholder:"请选择应用"},on:{change:a.appChange},model:{value:a.instanceName,callback:function(e){a.instanceName=e},expression:"instanceName"}},a._l(a.appOption,(function(a){return t("el-option",{key:a,attrs:{label:a,value:a}})})),1),t("span",{staticStyle:{"font-size":"14px"}},[a._v("实例： ")]),t("el-select",{staticStyle:{width:"280px"},attrs:{size:"mini",placeholder:"请选择应用实例"},on:{change:a.instanceUidChange},model:{value:a.instanceUid,callback:function(e){a.instanceUid=e},expression:"instanceUid"}},a._l(a.instanceUidOption,(function(a){return t("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),t("el-tabs",{model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"概要",name:"1"}},[t("base-info",{attrs:{"server-info-table":a.serverInfoTable,"jvm-base-table":a.jvmBaseTable,"jvm-params-table":a.jvmParamsTable,"libs-table":a.libsTable}})],1),t("el-tab-pane",{attrs:{label:"Lib 列表",name:"2"}},[t("ul",{staticClass:"instance-list"},[t("li",{staticClass:"instance-list-item"},[t("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"Lib列表:输入关键字搜索"},model:{value:a.searchParams,callback:function(e){a.searchParams=e},expression:"searchParams"}})],1),t("div",a._l(a.libs.filter((function(e){return!a.searchParams||e.toLowerCase().includes(a.searchParams.toLowerCase())})),(function(e,n){return t("li",{key:n,staticClass:"instance-list-item"},[t("span",[a._v(a._s(e.trim()))])])})),0)])])],1)],1)],1)},s=[],i=(t("d81d"),t("498a"),t("62e4")),l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[t("el-card",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.serverInfoTable}},[t("el-table-column",{attrs:{prop:"name",label:"服务器信息",width:"120px"}}),t("el-table-column",{attrs:{prop:"value"}})],1)],1)],1),t("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[t("el-card",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.jvmBaseTable}},[t("el-table-column",{attrs:{prop:"name",label:"JVM 信息",width:"120px"}}),t("el-table-column",{attrs:{prop:"value"}})],1)],1)],1),t("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[t("el-card",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.jvmParamsTable}},[t("el-table-column",{attrs:{prop:"value",label:"启动参数"}})],1)],1)],1)],1)],1)},r=[],c={props:{serverInfoTable:{type:Array,default:[]},jvmBaseTable:{type:Array,default:[]},jvmParamsTable:{type:Array,default:[]},libsTable:{type:Array,default:[]}},data:function(){return{tableData:[]}}},o=c,u=(t("7c2b"),t("4401"),t("2877")),d=Object(u["a"])(o,l,r,!1,null,null,null),m=d.exports,p={components:{BaseInfo:m},name:"Base",data:function(){return{appOption:[],instanceUidOption:[],activeName:"1",instanceUid:"",instanceName:"",libs:[],instanceObj:{},searchParams:"",serverInfoTable:[],jvmBaseTable:[],jvmParamsTable:[],libsTable:[]}},created:function(){this.instanceUid=this.$cookies.get("appId"),this.instanceName=this.$cookies.get("instanceName"),this.getInstanceList({name:this.instanceName}),this.getAppList()},methods:{getInstanceList:function(a){var e=this;Object(i["d"])(a).then((function(a){e.instanceUidOption=a.data,""!==e.instanceUid?e.getInstanceDetail({appId:e.instanceUid}):(e.getInstanceDetail({appId:a.data[0]}),e.instanceUid=a.data[0])}))},getAppList:function(){var a=this;Object(i["b"])().then((function(e){console.log(e.data),a.appOption=e.data,""!==a.instanceName||(a.instanceName=e.data[0])}))},getInstanceDetail:function(a){var e=this;Object(i["c"])(a).then((function(a){console.log("testFEzjw",a),e.libs=a.data.libs,e.instanceObj=a.data,e.serverInfoTable=[{name:"service",value:a.data.instanceName},{name:"appId",value:a.data.appId},{name:"hostname",value:a.data.hostname},{name:"ips",value:a.data.ips},{name:"osArch",value:a.data.osArch},{name:"osVersion",value:a.data.osVersion},{name:"os",value:a.data.os},{name:"processorNum",value:a.data.processorNum}],e.jvmBaseTable=[{name:"progress",value:a.data.progress},{name:"jdkVersion",value:a.data.jdkVersion},{name:"jdkDir",value:a.data.jdkDir},{name:"userDir",value:a.data.userDir},{name:"initMemory",value:a.data.initMemory},{name:"maxMemory",value:a.data.maxMemory}],e.jvmParamsTable=a.data.arguments.map((function(a){return{value:a.trim()}})),e.libsTable=a.data.libs.map((function(a){return{value:a.trim()}}))}))},instanceUidChange:function(a){this.$cookies.set("instanceUid",a),this.getInstanceDetail({appId:a})},appChange:function(a){this.instanceName=a,this.instanceUid="",this.$cookies.set("instanceName",a),this.$cookies.set("instanceUid",""),this.getInstanceList({name:this.instanceName})}}},b=p,f=(t("98de"),Object(u["a"])(b,n,s,!1,null,"74e33d3c",null));e["default"]=f.exports},d86f:function(a,e,t){}}]);