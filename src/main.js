import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'
import api from '@/request/api'


// 引入element-ui 组件
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import "./utils/elementComponents"
import { Tabs, Collapse,DatePicker, Cascader, PageHeader, CollapseItem, TabPane, Radio, Upload, Dialog, Message, Popover, Tree, Container, Pagination, Select, Option, Checkbox, Aside, Main, Calendar, Drawer, Table, TableColumn, Button, Input } from "element-ui";
Vue.use(TabPane);
Vue.use(DatePicker);
Vue.use(PageHeader);
Vue.use(Cascader);
Vue.use(CollapseItem);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Calendar);
Vue.use(Drawer);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button)
Vue.use(Checkbox);
Vue.use(Option);
Vue.use(Select);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Select);
Vue.use(Popover);
Vue.use(Tree);
Vue.use(Radio);
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Dialog);
Vue.prototype.$message = Message;

// 引入打印机调用插件 
import Print from 'vue-print-nb'
Vue.use(Print);

// import Print from './plugs/print.js'
// Vue.use(Print) 

// 引入字体图标
import "../public/icon/iconfont.css"
// 屏幕变动事件
// import "./utils/rem.js"

// 注册全局自定义指令：处理点击处理改元素外的其他元素实现隐藏
import clickoutside from "./utils/clickoutside";
Vue.directive("clickoutside", clickoutside);

// 入口样式文件
import "./styles/Main.less";

// 引入echarts组件
// 引入基础模板
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title');
require("echarts/lib/component/legend");
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$api = api  // 接口对象

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
