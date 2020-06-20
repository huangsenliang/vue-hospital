import router from "@/router/index";
import store from "@/store/index";
// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("跳转路由：",to.path);
  /***************路由激活状态处理***************/
  if (to.name) {
    store.commit("layout/setTabName", to.name);
  }
  /***************库存************/
  if (/^\/inventory/.test(to.path)) {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", to.path);
  }
  /******************管理*********************/
  if (/^\/admin/.test(to.path)) {
    store.commit("layout/setTabName", "Admin");
    store.commit("admin/setTabName", to.path);
    // 新增成员
    if (/\/members-info$/.test(to.path)) {
      store.commit("layout/setTabName", "Admin");
      store.commit("admin/setTabName", '/admin/outpatient/members');
      // 新增设备
    }else if(/\/equipment-info$/.test(to.path)){
      store.commit("layout/setTabName", "Admin");
      store.commit("admin/setTabName", '/admin/outpatient/equipment');
    }
  }
  next();
});