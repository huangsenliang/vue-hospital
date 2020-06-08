import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// 引入布局组件
import Layout from "@/views/Layout";

Vue.use(VueRouter);

const routes = [
  // 跳转到工作台页面
  {
    path: "/",
    name: "redirectWorkbench",
    redirect: "/workbench",
  },
  // 工作台页面
  {
    path: "/workbench",
    name: "Workbench",
    redirect: "/workbench/WorkbenchIndex",
    component: Layout,
    children: [
      {
        path: "workbenchIndex",
        name: "WorkbenchIndex",
        component: () => import("../views/Workbench/index.vue"),
      },
    ],
  },
  // 护士站页面
  {
    path: "/nurse",
    name: "Nurse",
    redirect: "/nurse/nurseIndex",
    component: Layout,
    children: [
      // 待执行页面
      {
        path: "nurseIndex",
        name: "NurseIndex",
        component: () => import("../views/Nurse/index.vue"),
      },
    ],
  },
  // 挂号页面
  {
    path: "/registered",
    name: "Registered",
    redirect: "/registered/registeredIndex",
    component: Layout,
    children: [
      {
        path: "registeredIndex",
        name: "RegisteredIndex",
        component: () => import("../views/Registered/index.vue"),
      },
    ],
  },
  // 门诊页面
  {
    path: "/outpatient",
    name: "Outpatient",
    redirect: "/outpatient/outpatientIndex",
    component: Layout,
    children: [
      {
        path: "outpatientIndex",
        name: "OutpatientIndex",
        component: () => import("../views/Outpatient/index.vue"),
      },
    ],
  },
  // 收费页面
  {
    path: "/charge",
    name: "Charge",
    redirect: "/charge/chargeIndex",
    component: Layout,
    children: [
      {
        path: "chargeIndex",
        name: "ChargeIndex",
        component: () => import("../views/Charge/index.vue"),
      },
    ],
  },
  // 库存页面
  {
    path: "/inventory",
    name: "Inventory",
    redirect: "/inventory/inventoryIndex",
    component: Layout,
    children: [
      {
        path: "inventoryIndex",
        name: "InventoryIndex",
        redirect: "/inventory/inventoryIndex/goods",
        component: () => import("../views/Inventory/index.vue"),
        children:[
          // 物资页面
          {
            path:"goods",
            name:"InventoryGoods",
            component: () => import("../views/Inventory/components/InventoryGoods/index.vue"),
          },
          // 采购页面
          {
            path:"purchase",
            name:"InventoryPurchase",
            component: () => import("../views/Inventory/components/InventoryPurchase/index.vue"),
          },
           // 入库页面
           {
            path:"cargo",
            name:"InventoryCargo",
            component: () => import("../views/Inventory/components/InventoryCargo/index.vue"),
          }
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history", //去掉url中的#
  routes,
});

// 全局路由守卫：处理每此路由切换时变动tabNum索引
router.beforeEach((to, from, next) => {
  if (to.name == "WorkbenchIndex") {
    store.commit("layout/setTabName", "Workbench");
  } else if (to.name == "NurseIndex") {
    store.commit("layout/setTabName", "Nurse");
  } else if (to.name == "RegisteredIndex") {
    store.commit("layout/setTabName", "Registered");
  } else if (to.name == "OutpatientIndex") {
    store.commit("layout/setTabName", "Outpatient");
  }else if (to.name == "ChargeIndex") {
    store.commit("layout/setTabName", "Charge");
  }else if (to.name == "InventoryGoods") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryGoods");
  }else if (to.name == "InventoryPurchase") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryPurchase");
  }
  else if (to.name == "InventoryCargo") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryCargo");
  }
  next();
});

export default router;
