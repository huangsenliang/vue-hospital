<template>
  <!-- 添加患者页面 -->
  <div id="add-patient" class="flex" style="height:100%">
    <My-Aside>
      <!-- 患者列表 -->
      <Patient-List></Patient-List>
      <!-- 就诊历史 -->
      <History-List></History-List>
    </My-Aside>
    <My-Main class="flex-item">
      <!-- 添加患者用药信息 -->
      <div class="add-body">
        <!-- 表头 -->
        <div class="add-header-wrapper flex justify-between">
          <h3>治疗理疗</h3>
          <div class="header-right">
            <button style="marginRight:8px" class="btn-primary-small">完成订单</button>
            <button class="btn-blank-small">取消</button>
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
    </My-Main>
    <My-Aside class="aside-right-wrapper">
      <div class="tree-wrapper">
        <h3 class="top-title">收费项目</h3>
        <Tree :listData="listData"></Tree>
      </div>
    </My-Aside>
  </div>
</template>

<script>
// 布局组件
import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";
// 患者列表组件
import PatientList from "./components/patientList";
// 就诊历史
import HistoryList from "./components/historyList";
// 患者信息组件
import PatientInfo from "@/components/PatientInfo";
// 树组件
import Tree from "@/components/Tree";
export default {
  components: {
    MyMain,
    MyAside,
    PatientList,
    HistoryList,
    PatientInfo,
    Tree
  },
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
#add-patient {
  // 中间主要的内容
  .add-body {
    height: 100%;
    overflow-y: auto;
    background: #fff;
    border: #ced0da 1px solid;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar {
      display: none;
    }
    /*头部标题*/
    .add-header-wrapper {
      height: 49px;
      line-height: 48px;
      border-bottom: 1px solid #ced0da;
      padding: 0 24px;
      background-color: #f2f2f2;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h3 {
        font-size: 16px;
        color: #000;
        font-weight: 700;
      }
      .header-right {
        button {
          text-align: center;
          border-radius: 3px;
        }
        .btn1 {
          margin-right: 4px;
          background: #e6eaee;
          color: #7a8794;
          border: 1px solid #c1c9d0;
          cursor: not-allowed;
        }
        .btn2 {
          border: 1px solid #c1c9d0;
          background-color: #fff;
          color: #005ed9;
          cursor: pointer;
          &:hover {
            border: 1px solid #009ed9;
          }
        }
      }
    }
    /*内容*/
    .add-content-wrapper {
      padding: 15px 24px 24px;
      /*诊断*/
      .treatment-diagnosis-wrapper {
        border: 1px solid #ced0da;
        border-radius: 3px;
        margin-top: 16px;
        /*共有样式*/
        .diagnosis-info {
          width: 340px;
          margin-right: 16px;
        }
        .doctor {
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          color: #8d9aa8;
        }
        /*头部*/
        .form-title {
          height: 32px;
          background-color: #f5f7fb;
          padding: 0 12px;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        }
        /*输入框*/
        .treatment-diagnosis-form {
          min-height: 40px;
          padding: 0 12px;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          /*诊断输入框*/
          .diagnosis-info {
            .input-inner {
              width: 100%;
              height: 30px;
              padding: 8px;
              border-radius: 0;
              border: 1px #ddd solid;
            }
          }
          /*开单人选中框*/
          .doctor {
            /*输入框*/
            .el-select .el-input .el-input__inner {
              -webkit-appearance: none;
              background-color: #fff;
              background-image: none;
              border-radius: 0;
              border: 1px solid #dcdfe6;
              box-sizing: border-box;
              color: #606266;
              display: inline-block;
              font-size: inherit;
              height: 30px;
              padding: 6px 8px;
              outline: 0;
              transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
              width: 100%;
            }
            /*字体图标*/
            .el-input__icon {
              line-height: 35px;
            }
          }
        }
      }
      /*添加项目*/
      .goods-autocumplete-wrapper {
        position: relative;
        margin-top: 16px;
        i.icon-jia {
          position: absolute;
          height: 40px;
          line-height: 40px;
          width: 35px;
          text-align: center;
          color: #96a4b3;
        }
        input.add-input {
          width: 100%;
          padding: 0 24px 0 34px;
          border: 1px solid #ced0da;
          height: 40px;
          border-radius: 4px;
        }
      }
      /*添加项目表格*/
      .charge-table {
        width: 100%;
        margin-top: 16px;
        border: 1px solid #ced0da;
        border-radius: 3px;
        ul.table-header {
          color: #96a4b3;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          height: 40px;
          background-color: #f5f7fb;
          padding-left: 12px;
          padding-right: 16px;
          border-radius: 3px 3px 0 0;
        }

        ul {
          .name {
            flex: 4;
          }
          .price {
            flex: 1;
            text-align: center;
            padding-left: 12px;
          }
          .count {
            padding-left: 16px;
            flex: 1;
            text-align: center;
          }
          .total {
            padding-left: 16px;
            flex: 1;
            text-align: center;
          }
          .end-item {
            flex: 0.4;
            text-align: center;
          }
        }

        .tr {
          position: relative;
          height: 40px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          border-top: 1px dashed #e6eaee;
          padding-left: 12px;
          padding-right: 16px;
          font-size: 14px;
        }
      }
      /*内容*/
      .table-body {
        .tr {
          &:hover {
            background: #eeeff0;
            cursor: pointer;
          }
          &:hover > .end-item {
            opacity: 1;
          }
          input {
            height: 28px;
            border-radius: 3px;
          }
          .title-name {
            flex: 4;
          }
          .input-price {
            input {
              padding: 3px 8px;
              width: 80px;
              border: 1px solid #ced0da;
            }
          }
          .input-count {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            input {
              padding: 3px 8px;
              width: 50px;
              border: 1px solid #ced0da;
              border-radius: 3px 0 0 3px;
            }
            span {
              display: inline-block;
              width: 40px;
              height: 28px;
              line-height: 28px;
              text-align: center;
              border: 1px solid #ced0da;
              border-left: 0;
              background: #f5f7fb;
              border-radius: 0 3px 3px 0;
            }
          }
          .input-total {
            input {
              padding: 3px 8px;
              width: 80px;
              border: 1px solid #ced0da;
            }
          }
          .end-item {
            opacity: 0;
            i.icon-del {
              font-size: 16px;
              border: 1px solid #ddd;
              border-radius: 50%;
              margin-left: 15px;
              cursor: pointer;
            }
          }
        }
      }
      /*合计*/
      .heji-wrapper {
        height: 40px;
        border-top: 1px dashed #e6eaee;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        align-items: center;
        padding-left: 12px;
        padding-right: 25px;
        font-size: 14px;
      }
    }
  }
  //   右侧树状
  .tree-wrapper {
    .top-title {
      text-align: center;
      font-size: 16px;
      height: 49px;
      line-height: 48px;
      border-bottom: 1px solid #ced0da;
      background-color: #f2f2f2;
      color: #7a8794;
    }
  }

  .aside-right-wrapper {
    margin-left: 6px;
  }
  @media screen and (max-width: 1279px) {
    .aside-right-wrapper {
      display: none;
    }
  }
}
</style>