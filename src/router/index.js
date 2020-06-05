import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";

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
      // {
      //   // 添加患者页面
      //   path: "nurseAdd",
      //   name: "NurseAdd",
      //   component: () => import("../views/Nurse/addPatient.vue")
      // }
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
];

const router = new VueRouter({
  mode: "history", //去掉url中的#
  routes,
});

// 全局路由守卫：处理每此路由切换时变动tabNum索引
router.beforeEach((to, from, next) => {
  if (to.name == "WorkbenchIndex") {
    store.commit("setTabName", "Workbench");
  } else if (to.name == "NurseIndex") {
    store.commit("setTabName", "Nurse");
  } else if (to.name == "RegisteredIndex") {
    store.commit("setTabName", "Registered");
  } else if (to.name == "OutpatientIndex") {
    store.commit("setTabName", "Outpatient");
  }else if (to.name == "ChargeIndex") {
    store.commit("setTabName", "Charge");
  }
  next();
});

export default router;
