"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[526],{93526:function(a,t,s){s.r(t),s.d(t,{default:function(){return D}});for(var r=function(){var a=this,t=a._self._c;return t("page-header-wrapper",{attrs:{title:!1}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[t("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.total-sales"),total:"￥126,560"}},[t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{attrs:{type:"info-circle-o"}})],1),t("div",[t("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[t("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.week")))]),a._v(" 12% ")]),t("trend",{attrs:{flag:"down"}},[t("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.day")))]),a._v(" 11% ")])],1),t("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.day-sales"))),t("span",[a._v("￥ 234.56")])])],2)],1),t("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[t("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.visits"),total:a._f("NumberFormat")(8846)}},[t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{attrs:{type:"info-circle-o"}})],1),t("div",[t("mini-area")],1),t("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.day-visits"))),t("span",[a._v(" "+a._s(a._f("NumberFormat")("1234")))])])],2)],1),t("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[t("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.payments"),total:a._f("NumberFormat")(6560)}},[t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{attrs:{type:"info-circle-o"}})],1),t("div",[t("mini-bar")],1),t("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.conversion-rate"))+" "),t("span",[a._v("60%")])])],2)],1),t("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[t("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.operational-effect"),total:"78%"}},[t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{attrs:{type:"info-circle-o"}})],1),t("div",[t("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:"8px"}})],1),t("template",{slot:"footer"},[t("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[t("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.week")))]),a._v(" 12% ")]),t("trend",{attrs:{flag:"up"}},[t("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.day")))]),a._v(" 80% ")])],1)],2)],1)],1),t("a-card",{attrs:{loading:a.loading,bordered:!1,"body-style":{padding:"0"}}},[t("div",{staticClass:"salesCard"},[t("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[t("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[t("div",{staticClass:"extra-item"},[t("a",[a._v(a._s(a.$t("dashboard.analysis.all-day")))]),t("a",[a._v(a._s(a.$t("dashboard.analysis.all-week")))]),t("a",[a._v(a._s(a.$t("dashboard.analysis.all-month")))]),t("a",[a._v(a._s(a.$t("dashboard.analysis.all-year")))])]),t("a-range-picker",{style:{width:"256px"}})],1),t("a-tab-pane",{key:"1",attrs:{loading:"true",tab:a.$t("dashboard.analysis.sales")}},[t("a-row",[t("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t("bar",{attrs:{data:a.barData,title:a.$t("dashboard.analysis.sales-trend")}})],1),t("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[t("rank-list",{attrs:{title:a.$t("dashboard.analysis.sales-ranking"),list:a.rankList}})],1)],1)],1),t("a-tab-pane",{key:"2",attrs:{tab:a.$t("dashboard.analysis.visits")}},[t("a-row",[t("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t("bar",{attrs:{data:a.barData2,title:a.$t("dashboard.analysis.visits-trend")}})],1),t("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[t("rank-list",{attrs:{title:a.$t("dashboard.analysis.visits-ranking"),list:a.rankList}})],1)],1)],1)],1)],1)]),t("div",{staticClass:"antd-pro-pages-dashboard-analysis-twoColLayout",class:!a.isMobile&&"desktop"},[t("a-row",{style:{marginTop:"24px"},attrs:{gutter:24,type:"flex"}},[t("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[t("a-card",{style:{height:"100%"},attrs:{loading:a.loading,bordered:!1,title:a.$t("dashboard.analysis.online-top-search")}},[t("a-dropdown",{attrs:{slot:"extra",trigger:["click"],placement:"bottomLeft"},slot:"extra"},[t("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[t("a-icon",{attrs:{type:"ellipsis"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-one")))])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-two")))])])],1)],1),t("a-row",{attrs:{gutter:68}},[t("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[t("number-info",{attrs:{total:12321,"sub-total":17.1}},[t("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t("span",[a._v(a._s(a.$t("dashboard.analysis.search-users")))]),t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),t("div",[t("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:a.searchUserData,scale:a.searchUserScale}})],1)],1),t("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[t("number-info",{attrs:{total:2.7,"sub-total":26.2,status:"down"}},[t("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t("span",[a._v(a._s(a.$t("dashboard.analysis.per-capita-search")))]),t("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[t("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),t("div",[t("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:a.searchUserData,scale:a.searchUserScale}})],1)],1)],1),t("div",{staticClass:"ant-table-wrapper"},[t("a-table",{attrs:{"row-key":"index",size:"small",columns:a.searchTableColumns,dataSource:a.searchData,pagination:{pageSize:5}},scopedSlots:a._u([{key:"range",fn:function(s,r){return t("span",{},[t("trend",{attrs:{flag:0===r.status?"up":"down"}},[a._v(" "+a._s(s)+"% ")])],1)}}])})],1)],1)],1),t("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[t("a-card",{staticClass:"antd-pro-pages-dashboard-analysis-salesCard",style:{height:"100%"},attrs:{loading:a.loading,bordered:!1,title:a.$t("dashboard.analysis.the-proportion-of-sales")}},[t("div",{staticStyle:{height:"inherit"},attrs:{slot:"extra"},slot:"extra"},[t("span",{staticClass:"dashboard-analysis-iconGroup"},[t("a-dropdown",{attrs:{trigger:["click"],placement:"bottomLeft"}},[t("a-icon",{staticClass:"ant-dropdown-link",attrs:{type:"ellipsis"}}),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-one")))])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-two")))])])],1)],1)],1),t("div",{staticClass:"analysis-salesTypeRadio"},[t("a-radio-group",{attrs:{defaultValue:"a"}},[t("a-radio-button",{attrs:{value:"a"}},[a._v(a._s(a.$t("dashboard.analysis.channel.all")))]),t("a-radio-button",{attrs:{value:"b"}},[a._v(a._s(a.$t("dashboard.analysis.channel.online")))]),t("a-radio-button",{attrs:{value:"c"}},[a._v(a._s(a.$t("dashboard.analysis.channel.stores")))])],1)],1)]),t("h4",[a._v(a._s(a.$t("dashboard.analysis.sales")))]),t("div",[t("div",[t("v-chart",{attrs:{"force-fit":!0,height:405,data:a.pieData,scale:a.pieScale}},[t("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),t("v-axis"),t("v-legend",{attrs:{dataKey:"item"}}),t("v-pie",{attrs:{position:"percent",color:"item",vStyle:a.pieStyle}}),t("v-coord",{attrs:{type:"theta",radius:.75,innerRadius:.6}})],1)],1)])])],1)],1)],1)],1)},e=[],o=s(30381),i=s.n(o),n=s(86531),l=s(84789),d=[],c=[],p=0;p<12;p+=1)d.push({x:"".concat(p+1,"月"),y:Math.floor(1e3*Math.random())+200}),c.push({x:"".concat(p+1,"月"),y:Math.floor(1e3*Math.random())+200});for(var u=[],h=0;h<7;h++)u.push({name:"白鹭岛 "+(h+1)+" 号店",total:1234.56-100*h});for(var m=[],y=0;y<7;y++)m.push({x:i()().add(y,"days").format("YYYY-MM-DD"),y:Math.ceil(10*Math.random())});for(var b=[{dataKey:"x",alias:"时间"},{dataKey:"y",alias:"用户数",min:0,max:10}],f=[],g=0;g<50;g+=1)f.push({index:g+1,keyword:"搜索关键词-".concat(g),count:Math.floor(1e3*Math.random()),range:Math.floor(100*Math.random()),status:Math.floor(10*Math.random()%2)});var v=s(63531),x=[{item:"家用电器",count:32.2},{item:"食用酒水",count:21},{item:"个护健康",count:17},{item:"服饰箱包",count:13},{item:"母婴产品",count:9},{item:"其他",count:7.8}],_=[{dataKey:"percent",min:0,formatter:".0%"}],$=(new v.View).source(x);$.transform({type:"percent",field:"count",dimension:"item",as:"percent"});var w=$.rows,k={name:"Analysis",mixins:[l.c],components:{ChartCard:n.th,MiniArea:n.U,MiniBar:n.eP,MiniProgress:n.C4,RankList:n.yG,Bar:n.$Q,Trend:n.UR,NumberInfo:n.v0,MiniSmoothArea:n.S6},data:function(){return{loading:!0,rankList:u,searchUserData:m,searchUserScale:b,searchData:f,barData:d,barData2:c,pieScale:_,pieData:w,sourceData:x,pieStyle:{stroke:"#fff",lineWidth:1}}},computed:{searchTableColumns:function(){return[{dataIndex:"index",title:this.$t("dashboard.analysis.table.rank"),width:90},{dataIndex:"keyword",title:this.$t("dashboard.analysis.table.search-keyword")},{dataIndex:"count",title:this.$t("dashboard.analysis.table.users")},{dataIndex:"range",title:this.$t("dashboard.analysis.table.weekly-range"),align:"right",sorter:function(a,t){return a.range-t.range},scopedSlots:{customRender:"range"}}]}},created:function(){var a=this;setTimeout((function(){a.loading=!a.loading}),1e3)}},C=k,M=s(1001),S=(0,M.Z)(C,r,e,!1,null,"25bc4028",null),D=S.exports},84789:function(a,t,s){s.d(t,{c:function(){return o}});var r=s(95082),e=s(20629),o={computed:(0,r.Z)((0,r.Z)({},(0,e.rn)({layout:function(a){return a.app.layout},navTheme:function(a){return a.app.theme},primaryColor:function(a){return a.app.color},colorWeak:function(a){return a.app.weak},fixedHeader:function(a){return a.app.fixedHeader},fixedSidebar:function(a){return a.app.fixedSidebar},contentWidth:function(a){return a.app.contentWidth},autoHideHeader:function(a){return a.app.autoHideHeader},isMobile:function(a){return a.app.isMobile},sideCollapsed:function(a){return a.app.sideCollapsed},multiTab:function(a){return a.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}}}]);