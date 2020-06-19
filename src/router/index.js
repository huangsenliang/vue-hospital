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
          // 诊所设置页面
          {
            path: "clinic",
            name: "Clinic",
            meta: {
              name: "诊所设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatientClinic.vue"),
          },
          // 科室设置页面
          {
            path: "department",
            name: "Department",
            meta: {
              name: "科室设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendDepartment.vue"),
          },
          // 成员管理设置页面
          {
            path: "members",
            name: "Members",
            meta: {
              name: "成员管理"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendMembers.vue"),
          },
          // 成员管理设置页面
          {
            path: "equipment",
            name: "Equipment",
            meta: {
              name: "医疗设备"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendEquipment.vue"),
          },
          // 编辑成员信息页面
          {
            path: "members-info",
            name: "MembersInfo",
            meta: {
              name: "成员信息"
            },
            component: () => import("../views/Admin/Outpatient/outpatientMembersInfo.vue"),
          },
          // 编辑成员信息页面
          {
            path: "equipment-info",
            name: "EquipmentInfo",
            meta: {
              name: "医疗设备信息"
            },
            component: () => import("../views/Admin/Outpatient/outpatientEquipmentInfo.vue"),
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
          // 诊所设置页面
          {
            path: "predetermine",
            name: "Predetermine",
            meta: {
              name: "预约设置"
            },
            component: () => import("../views/Admin/Reservation/reservationPredetermine.vue"),
          },
          // 排班设置页面
          {
            path: "scheduling",
            name: "Scheduling",
            meta: {
              name: "排班设置"
            },
            component: () => import("../views/Admin/Reservation/reservationScheduling.vue"),
          }
        ]
      },
      // 叫号设置
      {
        path: "call",
        name: "AdminLayout",
        meta: {
          name: "叫号设置"
        },
        component: AdminLayout,
        redirect: "/admin/call/rules",
        children: [
          // 叫号规则
          {
            path: "rules",
            name: "Rules",
            meta: {
              name: "叫号规则"
            },
            component: () => import("../views/Admin/Call/callRules.vue"),
          },
          // 叫号屏幕
          {
            path: "screen",
            name: "Screen",
            meta: {
              name: "叫号屏幕"
            },
            component: () => import("../views/Admin/Call/callScreen.vue"),
          }
        ]
      },
      // 药房设置
      {
        path: "pharmacy",
        name: "AdminLayout",
        meta: {
          name: "药房设置"
        },
        component: AdminLayout,
        redirect: "/admin/pharmacy/basis",
        children: [
          // 基础设置
          {
            path: "basis",
            name: "Basis",
            meta: {
              name: "基础设置"
            },
            component: () => import("../views/Admin/Pharmacy/pharmacyBasis.vue"),
          },
          // 配送设置
          {
            path: "delivery",
            name: "Delivery",
            meta: {
              name: "配送设置"
            },
            component: () => import("../views/Admin/Pharmacy/pharmacyDelivery.vue"),
          },
          // 加工设置
          {
            path: "process",
            name: "Process",
            meta: {
              name: "加工设置"
            },
            component: () => import("../views/Admin/Pharmacy/pharmacyProcess.vue"),
          }
        ]
      },
      // 诊疗项目
      {
        path: "diagnosis",
        name: "AdminLayout",
        meta: {
          name: "诊疗项目"
        },
        component: AdminLayout,
        redirect: "/admin/diagnosis/registered",
        children: [
          // 挂号费
          {
            path: "registered",
            name: "DiagnosisRegistered",
            meta: {
              name: "挂号费"
            },
            component: () => import("../views/Admin/Diagnosis/diagnosisRegistered.vue"),
          },
          // 检查检验
          {
            path: "check",
            name: "DiagnosisCheck",
            meta: {
              name: "检查检验"
            },
            component: () => import("../views/Admin/Diagnosis/diagnosisCheck.vue"),
          },
          // 治疗理疗
          {
            path: "cure",
            name: "DiagnosisCure",
            meta: {
              name: "治疗理疗"
            },
            component: () => import("../views/Admin/Diagnosis/diagnosisCure.vue"),
          }
        ]
      },
      // 处方模板
      {
        path: "recipe",
        name: "AdminLayout",
        meta: {
          name: "处方模板"
        },
        component: AdminLayout,
        redirect: "/admin/recipe/west",
        children: [
          // 西药处方
          {
            path: "west",
            name: "RecipeWest",
            meta: {
              name: "西药处方"
            },
            component: () => import("../views/Admin/Recipe/recipeWest.vue"),
          },
          // 中药处方
          {
            path: "china",
            name: "RecipeChina",
            meta: {
              name: "中药处方"
            },
            component: () => import("../views/Admin/Recipe/recipeChina.vue"),
          },
        ]
      },
      // 病历模板
      {
        path: "medical",
        name: "AdminLayout",
        meta: {
          name: "病历模板"
        },
        component: AdminLayout,
        redirect: "/admin/medical/records",
        children: [
          //病历模板
          {
            path: "records",
            name: "MedicalRecords",
            meta: {
              name: "病历模板"
            },
            component: () => import("../views/Admin/MedicalRecords/medicalRecords.vue"),
          },
        ]
      },
      // 定价和税率
      {
        path: "pricing",
        name: "AdminLayout",
        meta: {
          name: "定价和税率"
        },
        component: AdminLayout,
        redirect: "/admin/pricing/pricing-rate",
        children: [
          // 定价和税率
          {
            path: "pricing-rate",
            name: "PricingRate",
            meta: {
              name: "定价和税率"
            },
            component: () => import("../views/Admin/PricingRate/PricingRate.vue"),
          }
        ]
      },
      // 收费设置
      {
        path: "charge",
        name: "AdminLayout",
        meta: {
          name: "收费设置"
        },
        component: AdminLayout,
        redirect: "/admin/charge/charge-set",
        children: [
          // 收费设置
          {
            path: "charge-set",
            name: "ChargeSet",
            meta: {
              name: "收费设置"
            },
            component: () => import("../views/Admin/Charge/chargeSet.vue"),
          }
        ]
      },
      // 打印设置
      {
        path: "print",
        name: "AdminLayout",
        meta: {
          name: "打印设置"
        },
        component: AdminLayout,
        redirect: "/admin/print/printer",
        children: [
          // 打印机设置
          {
            path: "printer",
            name: "Printer",
            meta: {
              name: "打印机设置"
            },
            component: () => import("../views/Admin/Print/printer.vue"),
          },
          // 处方笺
          {
            path: "prescription",
            name: "Prescription",
            meta: {
              name: "处方笺"
            },
            component: () => import("../views/Admin/Print/prescription.vue"),
          },
          // 挂号单
          {
            path: "registration-form",
            name: "RegistrationForm",
            meta: {
              name: "挂号单"
            },
            component: () => import("../views/Admin/Print/registrationForm.vue"),
          },
          
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
