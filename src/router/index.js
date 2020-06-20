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
    component: Layout,
    redirect: "/admin/outpatient",
    children: [
      // 诊所设置
      {
        path: "/admin/outpatient",
        name: "AdminLayout",
        meta: {
          name: "诊所设置",
          icon: "icon-shezhi1"
        },
        component: AdminLayout,
        redirect: "/admin/outpatient/clinic",
        children: [
          // 诊所设置页面
          {
            path: "/admin/outpatient/clinic",
            name: "Clinic",
            meta: {
              name: "诊所设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatientClinic.vue"),
          },
          // 科室设置页面
          {
            path: "/admin/outpatient/department",
            name: "Department",
            meta: {
              name: "科室设置"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendDepartment.vue"),
          },
          // 成员管理设置页面
          {
            path: "/admin/outpatient/members",
            name: "Members",
            meta: {
              name: "成员管理"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendMembers.vue"),
          },
          // 成员管理设置页面
          {
            path: "/admin/outpatient/equipment",
            name: "Equipment",
            meta: {
              name: "医疗设备"
            },
            component: () => import("../views/Admin/Outpatient/outpatiendEquipment.vue"),
          },
          // 编辑成员信息页面
          {
            path: "/admin/outpatient/members-info",
            name: "MembersInfo",
            meta: {
              name: "成员信息"
            },
            component: () => import("../views/Admin/Outpatient/outpatientMembersInfo.vue"),
          },
          // 编辑成员信息页面
          {
            path: "/admin/outpatient/equipment-info",
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
        path: "/admin/reservation",
        name: "AdminLayout",
        meta: {
          name: "预约设置",
          icon: "icon-yuyue"
        },
        component: AdminLayout,
        redirect: "/admin/reservation/predetermine",
        children: [
          // 诊所设置页面
          {
            path: "/admin/reservation/predetermine",
            name: "Predetermine",
            meta: {
              name: "预约设置"
            },
            component: () => import("../views/Admin/Reservation/reservationPredetermine.vue"),
          },
          // 排班设置页面
          {
            path: "/admin/reservation/scheduling",
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
        path: "/admin/call",
        name: "AdminLayout",
        meta: {
          name: "叫号设置",
          icon: "icon-laba"
        },
        component: AdminLayout,
        redirect: "/admin/call/rules",
        children: [
          // 叫号规则
          {
            path: "/admin/call/rules",
            name: "Rules",
            meta: {
              name: "叫号规则",
            },
            component: () => import("../views/Admin/Call/callRules.vue"),
          },
          // 叫号屏幕
          {
            path: "/admin/call/screen",
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
        path: "/admin/pharmacy",
        name: "AdminLayout",
        meta: {
          name: "药房设置",
          icon: "icon-yao"
        },
        component: AdminLayout,
        redirect: "/admin/pharmacy/basis",
        children: [
          // 基础设置
          {
            path: "/admin/pharmacy/basis",
            name: "Basis",
            meta: {
              name: "基础设置"
            },
            component: () => import("../views/Admin/Pharmacy/pharmacyBasis.vue"),
          },
          // 配送设置
          {
            path: "/admin/pharmacy/delivery",
            name: "Delivery",
            meta: {
              name: "配送设置"
            },
            component: () => import("../views/Admin/Pharmacy/pharmacyDelivery.vue"),
          },
          // 加工设置
          {
            path: "/admin/pharmacy/process",
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
        path: "/admin/diagnosis",
        name: "AdminLayout",
        meta: {
          name: "诊疗项目",
          icon: "icon-icon_zhenliao"
        },
        component: AdminLayout,
        redirect: "/admin/diagnosis/registered",
        children: [
          // 挂号费
          {
            path: "/admin/diagnosis/registered",
            name: "DiagnosisRegistered",
            meta: {
              name: "挂号费"
            },
            component: () => import("../views/Admin/Diagnosis/diagnosisRegistered.vue"),
          },
          // 检查检验
          {
            path: "/admin/diagnosis/check",
            name: "DiagnosisCheck",
            meta: {
              name: "检查检验"
            },
            component: () => import("../views/Admin/Diagnosis/diagnosisCheck.vue"),
          },
          // 治疗理疗
          {
            path: "/admin/diagnosis/cure",
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
        path: "/admin/recipe",
        name: "AdminLayout",
        meta: {
          name: "处方模板",
          icon: "icon-chufang"
        },
        component: AdminLayout,
        redirect: "/admin/recipe/west",
        children: [
          // 西药处方
          {
            path: "/admin/west",
            name: "RecipeWest",
            meta: {
              name: "西药处方"
            },
            component: () => import("../views/Admin/Recipe/recipeWest.vue"),
          },
          // 中药处方
          {
            path: "/admin/china",
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
        path: "/admin/medical",
        name: "AdminLayout",
        meta: {
          name: "病历模板",
          icon: "icon-bingli"
        },
        component: AdminLayout,
        redirect: "/admin/medical/records",
        children: [
          //病历模板
          {
            path: "/admin/medical/records",
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
        path: "/admin/pricing",
        name: "AdminLayout",
        meta: {
          name: "定价和税率",
          icon: "icon-shoufeiguanli"
        },
        component: AdminLayout,
        redirect: "/admin/pricing/pricing-rate",
        children: [
          // 定价和税率
          {
            path: "/admin/pricingpricing-rate",
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
        path: "/admin/charge",
        name: "AdminLayout",
        meta: {
          name: "收费设置",
          icon: "icon-price"
        },
        component: AdminLayout,
        redirect: "/admin/charge/charge-set",
        children: [
          // 收费设置
          {
            path: "/admin/charge/charge-set",
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
        path: "/admin/print",
        name: "AdminLayout",
        meta: {
          name: "打印设置",
          icon: "icon-print"
        },
        component: AdminLayout,
        redirect: "/admin/print/printer",
        children: [
          // 打印机设置
          {
            path: "/admin/print/printer",
            name: "Printer",
            meta: {
              name: "打印机设置"
            },
            component: () => import("../views/Admin/Print/printer.vue"),
          },
          // 处方笺
          {
            path: "/admin/print/prescription",
            name: "Prescription",
            meta: {
              name: "处方笺"
            },
            component: () => import("../views/Admin/Print/prescription.vue"),
          },
          // 挂号单
          {
            path: "/admin/print/registration-form",
            name: "RegistrationForm",
            meta: {
              name: "挂号单"
            },
            component: () => import("../views/Admin/Print/registrationForm.vue"),
          },
          // 收费单
          {
            path: "/admin/print/charge-form",
            name: "ChargeForm",
            meta: {
              name: "收费单"
            },
            component: () => import("../views/Admin/Print/chargeForm.vue"),
          },
          // 发药单
          {
            path: "/admin/print/pills-form",
            name: "PillsForm",
            meta: {
              name: "发药单"
            },
            component: () => import("../views/Admin/Print/pillsForm.vue"),
          },
        ]
      },
      // 医保与资质
      {
        path: "/admin/medicare-aptitude",
        name: "AdminLayout",
        meta: {
          name: "医保与资质",
          icon: "icon-yibao"
        },
        component: AdminLayout,
        redirect: "/admin/medicare-aptitude/medicare-pay",
        children: [
          // 医保支付
          {
            path: "/admin/medicare-aptitude/medicare-pay",
            name: "MedicarePay",
            meta: {
              name: "医保支付"
            },
            component: () => import("../views/Admin/MedicareAptitude/medicarePay.vue"),
          },
          // 证照资质
          {
            path: "/admin/medicare-aptitude/aptitude-info",
            name: "AptitudeInfo",
            meta: {
              name: "证照资质"
            },
            component: () => import("../views/Admin/MedicareAptitude/aptitudeInfo.vue"),
          },
          // 两定报表
          {
            path: "/admin/medicare-aptitude/report-form",
            name: "ReportForm",
            meta: {
              name: "挂号单"
            },
            component: () => import("../views/Admin/MedicareAptitude/reportForm.vue"),
          },
          // 医保限价
          {
            path: "/admin/medicare-aptitude/medicare-price",
            name: "MedicarePrice",
            meta: {
              name: "医保限价"
            },
            component: () => import("../views/Admin/MedicareAptitude/medicarePrice.vue"),
          },
        ]
      },
      // 微信支付
      {
        path: "/admin/pay",
        name: "AdminLayout",
        meta: {
          name: "微信支付",
          icon: "icon-weixinzhifu"
        },
        component: AdminLayout,
        redirect: "/admin/pay/wechat-pay",
        children: [
          // 微信支付
          {
            path: "/admin/pay/wechat-pay",
            name: "WechatPay",
            meta: {
              name: "微信支付"
            },
            component: () => import("../views/Admin/Pay/wechatPay.vue"),
          }
        ]
      },
      // 数据权限
      {
        path: "/admin/permissions",
        name: "AdminLayout",
        meta: {
          name: "数据权限",
          icon: "icon-quanxian"
        },
        component: AdminLayout,
        redirect: "/admin/permissions/data-permissions",
        children: [
          // 数据权限
          {
            path: "/admin/permissions/data-permissions",
            name: "DataPermissions",
            meta: {
              name: "数据权限"
            },
            component: () => import("../views/Admin/Permissions/dataPermissions.vue"),
          }
        ]
      },
      // 自助服务机
      {
        path: "/admin/self-help",
        name: "AdminLayout",
        meta: {
          name: "自助服务机",
          icon: "icon-zizhufuwu"
        },
        component: AdminLayout,
        redirect: "/admin/self-help/rule-set",
        children: [
          // 规则设置
          {
            path: "/admin/self-help/rule-set",
            name: "RuleSet",
            meta: {
              name: "规则设置"
            },
            component: () => import("../views/Admin/SelfHelp/ruleSet.vue"),
          },
          // 屏幕设置
          {
            path: "/admin/self-help/screen-set",
            name: "ScreenSet",
            meta: {
              name: "屏幕设置"
            },
            component: () => import("../views/Admin/SelfHelp/screenSet.vue"),
          }
        ]
      },
      // 网络问诊
      {
        path: "/admin/network",
        name: "AdminLayout",
        meta: {
          name: "网络问诊",
          icon: "icon-qiyezhenduan"
        },
        component: AdminLayout,
        redirect: "/admin/network/networkRule",
        children: [
          // 网诊规则
          {
            path: "/admin/network/network-rule",
            name: "NetworkRule",
            meta: {
              name: "网诊规则",

            },
            component: () => import("../views/Admin/Network/networkRule.vue"),
          },
          // 屏幕设置
          {
            path: "/admin/network/network-doctor",
            name: "NetworkDoctor",
            meta: {
              name: "网诊医生"
            },
            component: () => import("../views/Admin/Network/networkDoctor.vue"),
          }
        ]
      },
      // 自助续方
      {
        path: "/continue",
        name: "AdminLayout",
        meta: {
          name: "自助续方",
          icon: "icon-chufang"
        },
        component: AdminLayout,
        redirect: "/admin/continue/continue-fee",
        children: [
          // 自助续方
          {
            path: "/admin/continue/continue-fee",
            name: "ContinueFee",
            meta: {
              name: "自助续方"
            },
            component: () => import("../views/Admin/Continue/continueFee.vue"),
          },
        ]
      },
    ],
  },
  // 不存在路由
  { path: '*', redirect: '/' }
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
