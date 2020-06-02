<template>
  <!-- 添加患者用药信息 -->
  <div class="add flex">
    <!-- 左侧内容 -->
    <div class="add-left-wrapper">
      <!-- 表头 -->
      <div class="add-header-wrapper flex">
        <h3>医嘱执行</h3>
        <div class="header-right">
          <button class="button-small btn1">完成订单</button>
          <button class="button-small btn2">取消</button>
        </div>
      </div>
      <!-- 内容 -->
      <div class="add-content-wrapper">
        <!-- 引入自定义组件 -->
        <div class="add-content-top">
          <Patient-Info isDisabled="false"></Patient-Info>
        </div>
        <!-- 诊断 -->
        <div class="treatment-diagnosis-wrapper">
          <!-- 头部 -->
          <div class="form-title flex">
            <div class="diagnosis-info">诊断</div>
            <div class="doctor">开单人</div>
          </div>
          <!-- 输入框 -->
          <div class="treatment-diagnosis-form flex">
            <div class="diagnosis-info">
              <input class="input-inner" type="text" placeholder="输入诊断" />
            </div>
            <div class="doctor">
              <el-select v-model="nameValue" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 添加项目 -->
        <div class="goods-autocumplete-wrapper">
          <i class="iconfont icon-jia"></i>
          <input class="add-input" type="text" placeholder="输入项目拼音码" />
        </div>
        <!-- 添加项目表格 -->
        <div class="charge-table">
          <!-- 表头 -->
          <ul class="table-header flex">
            <li class="name">治疗理疗</li>
            <li class="price">单价</li>
            <li class="count">数量</li>
            <li class="total">金额</li>
            <li class="end-item"></li>
          </ul>
          <!-- body -->
          <div class="table-body">
            <ul class="flex tr" v-for="(item,index) of 6" :key="index">
              <li class="title-name name">局部推拿</li>
              <li class="input-price price">
                <input type="text" />
              </li>
              <li class="input-count count">
                <input type="text" />
                <span>次</span>
              </li>
              <li class="input-total total">
                <input type="text" />
              </li>
              <li class="end-item">
                <i class="icon-del iconfont"></i>
              </li>
            </ul>
          </div>
          <div class="heji-wrapper flex">
            <div class="heji">
              <span>6</span>项，
              <span>￥0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="add-right-wrapper">
      <!-- 顶部 -->
      <div class="top-wrapper">
        <span>收费项目</span>
      </div>
      <div class="content-wrapper">
        <el-tree 
        :data="listData" 
        :props="defaultProps" 
        accordion 
        @node-click="handleNodeClick"></el-tree>
      </div>
    </div>
  </div>
</template>


<script>
import PatientInfo from "../../Common/PatientInfo";
export default {
  components: { PatientInfo },
  data() {
    return {
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
          label:"其他费用",
          children:[
            {
              label:"代煎(￥30.00)"
            },
            {
              label:"快递费"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>


<style scoped>
@import "../../../assets/css/Nurse/NurseRouter/Add/Add.css";
</style>