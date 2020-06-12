import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// 引入全局布局组件
import Layout from "@/views/Layout";
// 引入管理布局组件
import AdminLayout from "@/views/Admin/AdminLayout";
import InventoryLayout from "@/views/Inventory/InventoryLayout";

Vue.use(VueRouter);

const routes = [
  // 跳转到工作台页面
  {
    path: "/",
    name: "redirectWorkbench",
    component: Layout,   // 全局布局框架
    redirect: "/workbench",
    children: [
      // 工作台
      {
        path: "workbench",
        name: "Workbench",
        component: () => import("../views/Workbench/index.vue"),
      },
      // 护士站
      {
        path: "nurse",
        name: "Nurse",
        component: () => import("../views/Nurse/index.vue"),
      },
      // 挂号页面
      {
        path: "registered",
        name: "Registered",
        component: () => import("../views/Registered/index.vue"),
      },
      // 门诊页面
      {
        path: "outpatient",
        name: "Outpatient",
        component: () => import("../views/Outpatient/index.vue"),
      },
      // 收费页面
      {
        path: "charge",
        name: "Charge",
        component: () => import("../views/Charge/index.vue"),
      },
      // 库存页面
      {
        path: "/inventory/",
        name: "Inventory",
        component: InventoryLayout,
        redirect: "/inventory/goods",
        children: [
          // 物资页面
          {
            path: "goods",
            name: "InventoryGoods",
            component: () =>
              import("../views/Inventory/InventoryGoods/index.vue"),
          },
          // 采购页面
          {
            path: "purchase",
            name: "InventoryPurchase",
            component: () =>
              import(
                "../views/Inventory/InventoryPurchase/index.vue"
              ),
          },
          // 入库页面
          {
            path: "cargo",
            name: "InventoryCargo",
            component: () =>
              import("../views/Inventory/InventoryCargo/index.vue"),
          },
          // 出库页面
          {
            path: "outbound",
            name: "InventoryOutbound",
            component: () =>
              import(
                "../views/Inventory/InventoryOutbound/index.vue"
              ),
          },
          // 盘点页面
          {
            path: "calculate",
            name: "InventoryCalculate",
            component: () =>
              import(
                "../views/Inventory/InventoryCalculate/index.vue"
              ),
          },
          // 供应商页面
          {
            path: "provider",
            name: "InventoryProvider",
            component: () =>
              import(
                "../views/Inventory/InventoryProvider/index.vue"
              ),
          },
          // 结算申请页面
          {
            path: "apply",
            name: "InventoryApply",
            component: () =>
              import("../views/Inventory/InventoryApply/index.vue"),
          },
          // 结算审核页面
          {
            path: "audit",
            name: "InventoryAudit",
            component: () =>
              import("../views/Inventory/InventoryAudit/index.vue"),
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
          },
          {
            // 编辑成员信息页面
            path: "members-info",
            name: "MembersInfo",
            meta: {
              name: "添加成员信息"
            },
            component: () => import("../views/Admin/Outpatient/outpatientMembersInfo.vue"),
          },
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



export default router;
