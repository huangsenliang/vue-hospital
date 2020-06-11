import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// 引入全局布局组件
import Layout from "@/views/Layout";
// 引入管理布局组件
import AdminLayout from "@/views/Admin/AdminLayout";

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
        children: [
          // 物资页面
          {
            path: "goods",
            name: "InventoryGoods",
            component: () =>
              import("../views/Inventory/components/InventoryGoods/index.vue"),
          },
          // 采购页面
          {
            path: "purchase",
            name: "InventoryPurchase",
            component: () =>
              import(
                "../views/Inventory/components/InventoryPurchase/index.vue"
              ),
          },
          // 入库页面
          {
            path: "cargo",
            name: "InventoryCargo",
            component: () =>
              import("../views/Inventory/components/InventoryCargo/index.vue"),
          },
          // 出库页面
          {
            path: "outbound",
            name: "InventoryOutbound",
            component: () =>
              import(
                "../views/Inventory/components/InventoryOutbound/index.vue"
              ),
          },
          // 盘点页面
          {
            path: "calculate",
            name: "InventoryCalculate",
            component: () =>
              import(
                "../views/Inventory/components/InventoryCalculate/index.vue"
              ),
          },
          // 供应商页面
          {
            path: "provider",
            name: "InventoryProvider",
            component: () =>
              import(
                "../views/Inventory/components/InventoryProvider/index.vue"
              ),
          },
          // 结算申请页面
          {
            path: "apply",
            name: "InventoryApply",
            component: () =>
              import("../views/Inventory/components/InventoryApply/index.vue"),
          },
          // 结算审核页面
          {
            path: "audit",
            name: "InventoryAudit",
            component: () =>
              import("../views/Inventory/components/InventoryAudit/index.vue"),
          },
        ],
      },
    ],
  },
  // 管理页面
  {
    path: "/admin",
    name: "Admin",
    redirect: "/admin/outpatient",
    component: Layout,
    children: [
      // 诊所设置
      {
        path: "outpatient",
        name: "AdminLayout",
        meta: {
          name: "诊所设置"
        },
        component: AdminLayout,
        redirect: "/admin/outpatient/clinic",
        children: [
          {
            // 诊所设置页面
            path: "clinic",
            name: "Clinic",
            meta: {
              name: "诊所设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatientClinic.vue"),
          },
          {
            // 科室设置页面
            path: "department",
            name: "Department",
            meta: {
              name: "科室设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendDepartment.vue"),
          },
          {
            // 成员管理设置页面
            path: "members",
            name: "Members",
            meta: {
              name: "成员管理"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendMembers.vue"),
          },
          {
            // 成员管理设置页面
            path: "equipment",
            name: "Equipment",
            meta: {
              name: "医疗设备"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendEquipment.vue"),
          }
        ]
      },
      // 预约设置
      {
        path: "reservation",
        name: "AdminLayout",
        meta: {
          name: "预约设置"
        },
        component: AdminLayout,
        redirect: "/admin/reservation/predetermine",
        children: [
          {
            // 诊所设置页面
            path: "predetermine",
            name: "Predetermine",
            meta: {
              name: "预约设置"
            },
            component: () => import("../views/Admin/Reservation/reservationPredetermine.vue"),
          },
          {
            // 排班设置页面
            path: "scheduling",
            name: "Scheduling",
            meta: {
              name: "排班设置"
            },
            component: () => import("../views/Admin/Reservation/reservationScheduling.vue"),
          }
        ]
      },
    ],
  }
];

const router = new VueRouter({
  mode: "history", //去掉url中的#
  routes,
  // mode: 'hash',
});

// 解决：在使用ElementUI中的导航时，默认情况下如果重复点击某选项，会报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  } else if (to.name == "ChargeIndex") {
    store.commit("layout/setTabName", "Charge");
  } else if (to.name == "InventoryGoods") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryGoods");
  } else if (to.name == "InventoryPurchase") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryPurchase");
  } else if (to.name == "InventoryCargo") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryCargo");
  } else if (to.name == "InventoryOutbound") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryOutbound");
  } else if (to.name == "InventoryCalculate") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryCalculate");
  } else if (to.name == "InventoryProvider") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryProvider");
  } else if (to.name == "InventoryApply") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryApply");
  } else if (to.name == "InventoryAudit") {
    store.commit("layout/setTabName", "Inventory");
    store.commit("inventory/setTabName", "InventoryAudit");
  }
  next();
});

export default router;
