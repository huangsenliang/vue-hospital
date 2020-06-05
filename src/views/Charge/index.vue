<template>
  <!-- 收费页面 -->
  <div id="charge" style="height:100%" class="flex">
    <My-Aside style="marginRight:10px">
      <!-- 搜索框 -->
      <Charge-Search-Input></Charge-Search-Input>
      <!-- 切换标签 -->
      <List-Tabs></List-Tabs>
      <!-- 患者列表 -->
      <Patient-List style="height: calc(67% - 87px)"></Patient-List>
      <!-- 患者就诊记录 -->
      <History-List style="height: 33%;"></History-List>
    </My-Aside>
    <My-Main>
      <Charge-Main></Charge-Main>
    </My-Main>
    <My-Aside class="aside-right-wrapper" style="marginLeft:6px">
      <h3 class="top-title">收费项目</h3>
      <My-Tree :listData="listData"></My-Tree>
    </My-Aside>
  </div>
</template>

<script>
/***************全局组件********************/
// 引入布局组件
import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";
// 切换标签组件
import ListTabs from "@/components/ListTabs";
// 引入列表组件
import PatientList from "@/components/PatientList";
// 就诊记录
import HistoryList from "@/components/HistoryList";
import MyTree from "@/components/MyTree";
/***************局部组件**********/
import ChargeMain from "./components/chargeMain";
import ChargeSearchInput from "./components/chargeSearchInput";
export default {
  components: {
    MyMain,
    MyAside,
    PatientList,
    ListTabs,
    ChargeSearchInput,
    HistoryList,
    ChargeMain,
    MyTree
  },
  data() {
    return {
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
      ] // 树组件数据
    };
  }
};
</script>

<style lang="less" scoped>
#charge {
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