import Vue from "vue";
import VueRouter from "vue-router";
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

// 引入组件
// import Login from "../views/Login";
// import Workbench from "../views/Workbench";

Vue.use(VueRouter);

const routes = [
  // 页面跳转
  {
    path: "/",
    name: "redirectHome",
    redirect: "/home",
  },
  // header页面路由父组件
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home"),
    children: [
      // 默认跳转页面
      {
        path: "",
        name: "redirectWorkbench",
        redirect: "workbench",
        // component: () =>
        //   import(/* webpackChunkName: "about" */ "../views/Workbench"),
      },
      // 工作台页面
      {
        path: "workbench",
        name: "Workbench",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Workbench"),
      },
      // 护士站页面
      {
        path: "nurse",
        name: "Nurse",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Nurse"),
        children: [
          {
            path: "",
            name: "redirectAdd",
            redirect: "add",
          },
          {
            path: "add",
            name: "Add",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Nurse/NuserRouter/Add"),
          },
          {
            path: "patient",
            name: "Patient",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Nurse/NuserRouter/Patient"),
          },
        ],
      },
      // 挂号页面
      {
        path: "registered",
        name: "Registered",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Registered"),
      },
      // 门诊页面
      {
        path: "outpatient",
        name: "Outpatient",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Outpatient"),
      },
      // 收费页面
      {
        path: "charge",
        name: "Charge",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Charge"),
      },
      // 药房页面
      {
        path: "pharmacy",
        name: "Pharmacy",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Pharmacy"),
      },

      // 检验页面
      {
        path: "check",
        name: "Check",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Check"),
      },

      // 库存页面
      {
        path: "inventory",
        name: "Inventory",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Inventory"),
        children: [
          {
            path: "",
            name: "redirectGoods",
            redirect: "goods",
            // component: () =>
            //   import(/* webpackChunkName: "about" */ "../views/Workbench"),
          },
          {
            path: 'goods',
            name: "Goods",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Goods"),
            children: [
              {
                path: "",
                name: "redirectDetailsInfo", 
                redirect:"detailsInfo",
              },
              {
                path: "detailsInfo",
                name: "DetailsInfo", 
                component: () =>
                  import(/* webpackChunkName: "DetailsInfo" */ "../components/Inventory/InventoryRouter/GoodsRouter/DetailsInfo"),
              },
              {
                path: "batchInfo",
                name: "BatchInfo", 
                component: () =>
                  import(/* webpackChunkName: "BathInfo" */ "../components/Inventory/InventoryRouter/GoodsRouter/BatchInfo"),
              },
              {
                path: "list",
                name: "List", 
                component: () =>
                  import(/* webpackChunkName: "List" */ "../components/Inventory/InventoryRouter/GoodsRouter/List"),
              },
              {
                path: "warning",
                name: "Warning", 
                component: () =>
                  import(/* webpackChunkName: "Warning" */ "../components/Inventory/InventoryRouter/GoodsRouter/Warning"),
              }
            ],
          },

          {
            path: 'purchase',
            name: "Purchase",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Purchase"),
          },
          {
            path: 'cargo',
            name: "Cargo",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Cargo"),
          },
          {
            path: 'outbound',
            name: "Outbound",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Outbound"),
          },
          {
            path: 'calculate',
            name: "Calculate",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Calculate"),
          },
          ,
          {
            path: 'provide',
            name: "Provide",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Provide"),
          },
          ,
          {
            path: 'apply',
            name: "Apply",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Apply"),
          },
          ,
          {
            path: 'audit',
            name: "Audit",
            component: () =>
              import(/* webpackChunkName: "about" */ "../components/Inventory/InventoryRouter/Audit"),
          }
        ]
      },
      // 患者页面
      {
        path: "patient",
        name: "Patient",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Patient"),
      },

      // 统计页面
      {
        path: "statistical",
        name: "Statistical",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Statistical"),
      },

      // 营销页面
      {
        path: "marketing",
        name: "Marketing",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Marketing"),
      },

      // 管理页面
      {
        path: "admin",
        name: "Admin",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Admin"),
      },
      // 预警页面
      {
        path: "warnset",
        name: "Warnset",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Warnset"),
      }
    ],
  },

  // 登录页面
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Login"),
  },
];

const router = new VueRouter({
  mode: "history", //去掉url中的#
  routes,
});

export default router;
