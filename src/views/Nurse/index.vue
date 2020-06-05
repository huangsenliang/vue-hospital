<template>
  <!-- 默认加载待:护士完成页面 -->
  <div id="nurse" class="flex" style="height:100%">
    <My-Aside style="height:100%">
      <!-- 患者列表 -->
      <Patient-List style="height:67%"></Patient-List>
      <!-- 就诊历史 -->
        <History-List style="height:33%"></History-List>
    </My-Aside>
    <My-Main class="flex-item" style="height:100%;marginLeft:10px">
      <!-- 患者用药信息 -->
      <Nurse-Patient-Info v-show="!addPatient"></Nurse-Patient-Info>
      <!-- 添加匿名患者切换内容 -->
      <Add-Patient-Info v-show="addPatient"></Add-Patient-Info>
    </My-Main>
    <My-Aside class="aside-right-wrapper" style="height:100%">
      <h3 class="top-title">收费项目</h3>
      <My-Tree :listData="listData"></My-Tree>
    </My-Aside>
  </div>
</template>

<script>
// 布局组件
// 引入布局组件
import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";
// 患者列表组件
import PatientList from "./components/patientList";
// 患者用药信息组件
import NursePatientInfo from "./components/nursePatientInfo";
// 添加患者信息
import AddPatientInfo from "./components/addPatientInfo";
// 就诊记录
import HistoryList from "@/components/HistoryList";
// 树组件
import MyTree from "@/components/MyTree";
export default {
  components: {
    MyMain,
    MyAside,
    PatientList,
    HistoryList,
    MyTree,
    AddPatientInfo,
    NursePatientInfo
  },
  data() {
    return {
      addPatient: false, // 添加患者控制变量
      defaultProps: {
        children: "children",
        label: "label"
      },
      options: [
        {
          value: "蔡先伟",
          label: "蔡先伟"
        },
        {
          value: "郭立",
          label: "郭立"
        },
        {
          value: "徐开兵",
          label: "徐开兵"
        },
        {
          value: "毛永强",
          label: "毛永强"
        },
        {
          value: "齐露",
          label: "齐露"
        },
        {
          value: "李天文",
          label: "李天文"
        },
        {
          value: "刘鑫",
          label: "刘鑫"
        },
        {
          value: "吕鹏",
          label: "吕鹏"
        }
      ],
      nameValue: "",
      listData: [
        {
          label: "治疗项目",
          children: [
            {
              label: "静脉输液(￥30.00)"
            },
            {
              label: "针灸"
            },
            {
              label: "换药费"
            },
            {
              label: "肌肉注射"
            },
            {
              label: "局部推拿"
            },
            {
              label: "煎药费"
            },
            {
              label: "皮下注射"
            },
            {
              label: "床位费"
            },
            {
              label: "观察费"
            },
            {
              label: "制丸费"
            },
            {
              label: "三伏贴"
            },
            {
              label: "配药"
            },
            {
              label: "藏药"
            },
            {
              label: "穿刺费"
            },
            {
              label: "输液费"
            },
            {
              label: "中频治疗"
            },
            {
              label: "皮试"
            },
            {
              label: "治疗费"
            },
            {
              label: "医药处理费"
            }
          ]
        },
        {
          label: "理疗项目",
          children: [
            {
              label: "针灸套餐价(￥30.00)"
            },
            {
              label: "雾化"
            },
            {
              label: "头部推拿"
            },
            {
              label: "肩颈年卡"
            },
            {
              label: "中药敷贴"
            },
            {
              label: "局部针灸"
            },
            {
              label: "小儿推拿"
            },
            {
              label: "旭正灸贴"
            },
            {
              label: "头部针灸"
            }
          ]
        },
        {
          label: "其他费用",
          children: [
            {
              label: "代煎(￥30.00)"
            },
            {
              label: "快递费"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#nurse {
  /*******************右侧树状***************/
  .aside-right-wrapper {
    margin-left: 6px;
    .top-title {
      text-align: center;
      font-size: 16px;
      height: 49px;
      line-height: 48px;
      border-bottom: 1px solid #ced0da;
      background-color: #f2f2f2;
      color: #7a8794;
    }
    .my-tree {
      height: calc(100% - 49px);
      overflow-y: auto;
    }
  }
  @media screen and (max-width: 1279px) {
    .aside-right-wrapper {
      display: none;
    }
  }
}
</style>