<template>
  <!-- 门诊页面 -->
  <div id="outpatient" class="flex" style="height:100%">
    <My-Aside style="marginRight:10px">
      <!-- 搜索框 -->
      <div class="search-wrapper flex justify-between">
        <Search-Input style="marginRight:5px" placeholder="姓名/手机/诊断"></Search-Input>
        <button style="marginRight:5px;" @click="quickAccepts=true" class="btn-success">快速接诊</button>
        <button style="width:40px" class="btn-ghost-samll">叫</button>
      </div>
      <!-- 切换标签 -->
      <div class="tabs-wrapper">
        <!-- 头部 -->
        <List-Tabs></List-Tabs>
        <!-- 列表 -->
        <div class="table-wrapper" v-show="true">
          <Patient-List></Patient-List>
        </div>
        <!-- 网络未开通 -->
        <div v-show="false" class="content-wz-wrapper">
          <span class="tip">网诊功能暂未开通</span>
        </div>
      </div>
      <div class="history-wrapper">
        <Outpatient-History></Outpatient-History>
      </div>
    </My-Aside>
    <My-Main>
      <div class="main-content">
        <!-- 头部 -->
        <div class="header-wrapper flex">
          <div class="header-left flex">
            <h3>门诊</h3>
            <span v-show="!quickAccepts">(00003158)</span>
            <span class="count">第7次就诊</span>
          </div>

          <!-- 顶部按钮切换 -->
          <div v-show="!quickAccepts" class="header-right flex">
            <button @click="quickAccepts=true" class="btn-primary-small">修改</button>
            <button style="marginLeft:8px" class="btn-blank-small">打印</button>
            <button style="marginLeft:8px" class="btn-blank-small">计划随访</button>
          </div>

          <div v-show="quickAccepts" class="header-right-quick flex">
            <div style="marginRight:8px" class="btn">
              <button class="btn-blank-small" @click="showtCost = true">费用预览</button>
              <el-dialog title="收货地址" :visible.sync="showtCost">5555</el-dialog>
            </div>

            <div class="btn" style="marginRight:8px">
              <button
                class="btn-blank-small"
                @click="quickAccepts=false"
              >完成接诊</button>
            </div>

            <div class="mz-setting-wrapper" style="marginRight:8px">
              <i
                class="iconfont icon-ellipsis2"
                @click="showMzSetting=!showMzSetting"
                v-clickoutside="handleClickOutSideShowMzSettin"
              ></i>
              <!-- 弹窗 -->
              <div class="setting-dialog" v-show="showMzSetting">
                <Dialog-Outpatient-Setting></Dialog-Outpatient-Setting>
              </div>
            </div>
          </div>
        </div>
        <!-- 表格内容 -->
        <div class="table-content hidden-scorll">
          <!-- 患者信息盒子 -->
          <div class="info-wrapper-top flex align-items">
            <!-- 左边 -->
            <div class="info-left">
              <!-- 自定义组件 -->
              <Patient-Info
                name="毛波"
                sex="男"
                age="20"
                isDisabled="true"
                month="3"
                iphone="18244909680"
              ></Patient-Info>
            </div>
            <!-- 右边 -->
            <div class="info-right flex">
              <Select-Input
                disabled="true"
                placeholder="请选择"
                :value="nameValue"
                :options="nameOptions"
              ></Select-Input>
              <div class="input-search">
                <Input-Money :size="70" :value="moneyValue"></Input-Money>
              </div>
            </div>
          </div>
          <!-- 主诉记录 -->
          <div class="record-wrapper">
            <!-- 引入自定义主诉记录组件 -->
            <Record-Info @receiveSrc="receiveSrc"></Record-Info>
          </div>
          <!-- 搜索框 -->
          <div class="add-wrapper">
            <div class="add flex">
              <Prepend-Input :prependList="prependListCheck" placeholder="检查检验"></Prepend-Input>
              <Prepend-Input :prependList="prependListTreatment" placeholder="治疗理疗"></Prepend-Input>
              <Prepend-Input :prependList="prependListMaterial" placeholder="其他费用、材料商品"></Prepend-Input>
            </div>

            <!-- 上传图片展示 -->
            <div v-if="selectImg" class="img-wrapper flex">
              <div class="img-item" v-for="(item,index) of selectImg" :key="index">
                <img :src="item" alt />
                <i class="iconfont icon-del" @click="handleDelImg(index)"></i>
              </div>
            </div>
          </div>
          <!-- 添加处方 -->
          <div class="add-prescription-wrapper flex">
            <div class="left-btn">
              <button class="btn">+西药处方</button>
              <button class="btn">+输液处方</button>
              <button class="btn">+中药处方</button>
            </div>
            <div class="right-btn">
              <button class="btn">调用模板</button>
              <button class="btn">保存模板</button>
            </div>
          </div>
          <!-- 医嘱事项 -->
          <div class="doctor-advice flex">
            <label for>医嘱事项</label>
            <!-- <input type="text" v-model="selectAdviceValue" @click="showAdvice=true" /> -->
            <!-- <textarea cols="40" v-model="selectAdviceValue" @click="showAdvice=true"></textarea> -->
            <div @click="showAdvice=true" class="textarea-wrapper">
              <el-input type="textarea" autosize v-model="selectAdviceValue"></el-input>
            </div>

            <!-- 弹窗 -->
            <div
              class="advice-popper-wrapper"
              v-if="showAdvice"
              v-clickoutside="handleClickOutSideShowAdvice"
            >
              <ul>
                <li v-for="(item,index) of showAdviceList" :key="index">
                  <span class="symptomsItem" @click="handleSelectAdvice(item)">{{item}}</span>
                </li>
              </ul>
              <!-- 关闭 -->
              <div class="close flex" @click="showAdvice=false">
                <i class="iconfont icon-guanbi"></i>
                <span>关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </My-Main>
    <!-- <My-Aside class="aside-right-wrapper">
      <Intelligent-Diagnosis></Intelligent-Diagnosis>
    </My-Aside> -->
  </div>
</template>

<script>
/**************8***全局组件********************/ 
// 引入布局组件
import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";
import PatientInfo from "@/components/PatientInfo";
import SelectInput from "@/components/SelectInput";
import InputMoney from "@/components/InputMoney";
import RecordInfo from "@/components/RecordInfo";
import SearchInput from "@/components/SearchInput";
// 引入列表组件
import PatientList from "@/components/PatientList";
// 切换标签组件
import ListTabs from "@/components/ListTabs";
/******************局部组件********************/ 
// 智能诊断组件
import IntelligentDiagnosis from "./components/intelligentDiagnosis";
// 引入历史记录组件
import OutpatientHistory from "./components/outpatientHistory";
// 患者信息组件
import PrependInput from "./components/prependInput";
// 设置弹窗盒子
import DialogOutpatientSetting from "./dialog/dialogOutpatientSetting"
export default {
  components: {
    SearchInput,
    MyMain,
    MyAside,
    PatientList,
    OutpatientHistory,
    PatientInfo,
    SelectInput,
    InputMoney,
    RecordInfo,
    PrependInput,
    IntelligentDiagnosis,
    DialogOutpatientSetting,
    ListTabs
  },
  data() {
    return {
      showAdviceList: [
        "多喝热水",
        "饮食清淡，忌辛辣",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜"
      ], // 医嘱盒子展示数据
      showAdvice: false, // 医嘱弹窗盒子显示隐藏控制变量
      selectAdviceValue: "", // 选取的医嘱内容双向绑定数值
      selectImg: [], // 选中上传图片的数据
      src: "",
      prependListCheck: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      prependListTreatment: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      prependListMaterial: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      moneyValue: 50, // 门诊收费变量
      nameOptions: [
        // 下拉框医生姓名数据
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      nameValue: "李思思", // 双向绑定的下拉框医生姓名选择值
      
      showMzSetting: false, // 门诊设置弹窗控制变量
      showtCost: false, // 预览费用弹出窗控制变量
      quickAccepts: false, // 快速接诊控制变量
    };
  },
  methods: {
    // 处理：点击除了设置弹窗盒子外触发
    handleClickOutSideShowMzSettin() {
      this.showMzSetting = false;
    },
    // 接受子组件的传参图片路径
    receiveSrc(src) {
      if (this.selectImg.indexOf(src) == -1) {
        this.selectImg.push(src);
      }
    },
    handleClickOutSideShowAdvice() {
      this.showAdvice = false;
    },
    // 处理：医嘱选中的拼接值
    handleSelectAdvice(item) {
      if (this.selectAdviceValue.indexOf(item) == -1) {
        this.selectAdviceValue += "\n";
        this.selectAdviceValue += item;
      }
      // 去除开头的逗号
      this.selectAdviceValue = this.selectAdviceValue.replace(/^\n/g, "");
    },
  }
};
</script>

<style lang="less" scoped>
#outpatient {
  /***********************左侧内容**********/
  /*搜索框 */
  .search-wrapper {
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    width: 100%;
    padding: 0 5px;
    background-color: #f2f2f2;
    border-bottom: 1px solid #dadbe0;
    border-radius: 3px 3px 0 0;
    .button-small {
      padding: 3px 6px;
    }
    .quick-btn {
      margin-left: 5px;
      color: #fff;
      border: 0;
      &:hover {
        background-color: @color_14f16c;
      }
    }
  }

  /*标签内容*/
  .tabs-wrapper {
    height: calc(67% - 48px);
    /*表格内容*/
    .table-wrapper {
      // border: 1px solid red;
      height: calc(100% - 36px);
      overflow-y: auto;
    }
    /*网络未开通*/
    .content-wz-wrapper {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
      color: @color_96a4b3;
    }
  }

  /*历史记录*/
  .history-wrapper {
    height: 33%;
  }

  /**************中间***************/
  /*中间主要内容*/
  .main-content {
    height: 100%;
    /*头部*/
    .header-wrapper {
      height: 49px;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      -webkit-justify-content: space-between;
      -ms-justify-content: space-between;
      justify-content: space-between;
      padding: 0 24px;
      border-bottom: 1px solid #ced0da;
      background-color: @color_f2f2f2;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      /*左侧*/
      .header-left {
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        font-size: 12px;
        h3 {
          font-size: 16px;
          font-weight: 700;
          color: #000;
        }
        span.count {
          color: #0eba52;
          font-weight: 400;
          margin-left: 16px;
        }
      }
      /*右侧*/
      .header-right {
        .btn + .btn {
          margin-left: 8px;
        }
        button:first-child {
          color: #fff;
          &:hover {
            // background:@color_blue;
            opacity: 0.8;
          }
        }
        button:nth-child(n + 2) {
          color: @color_007aff;
          &:hover {
            background: @color_d2e5f6;
            border: 1px solid @color_007aff;
          }
        }
      }
      /*快速诊断按钮样式*/
      .header-right-quick {
        .btn2 {
          color: @color_007aff;
          &:hover {
            background: @color_d2e5f6;
            border: 1px solid @color_007aff;
          }
        }
        .btn1 {
          &:hover {
            opacity: 0.8;
          }
        }
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        .mz-setting-wrapper {
          position: relative;
          cursor: pointer;
          color: @color_7a8794;
          height: 30px;
          width: 30px;
          font-weight: 700;
          line-height: 25px;
          text-align: center;
          i.icon-ellipsis2 {
            width: 30px;
            overflow: hidden;
            display: inline-block;
            height: 30px;
            line-height: 29px;
            text-align: center;
            border: 1px solid #c1c9d0;
            color: @color_96a4b3;
            border-radius: 4px;
            &:hover {
              background: @color_d2e5f6;
              border: 1px solid @color_007aff;
            }
          }
          /*设置弹窗盒子*/
          .setting-dialog {
           
          }
        }
      }
    }
    /*表格内容*/
    .table-content {
      padding: 0 24px;
      height: calc(100% - 49px);
      overflow-y: auto;
      /*患者信息*/
      .info-wrapper-top {
        margin-top: 15px;
        justify-content: space-between;
        .info-right {
          .input-search {
            margin-left: 5px;
          }
        }
      }
      /*记录*/
      .record-wrapper {
        margin-top: 16px;
        margin-bottom: 8px;
      }
      /*搜索框盒子*/
      .add-wrapper {
        padding-bottom: 8px;
        border-bottom: 1px dashed @color_e6eaee;
      }
      /*搜索框*/
      .add {
        justify-content: space-between;
        .prepend-input {
          width: 32%;
        }
      }
      /* 图片*/
      .img-wrapper {
        margin-top: 10px;
        .img-item {
          position: relative;
          cursor: pointer;
          &:hover > i.icon-del {
            display: inline-block;
          }
        }
        img {
          width: 100px;
          height: 100%;
          border-radius: 4px;
          margin-left: 15px;
          // box-shadow: 0 0 2px 1px rgba(0, 0,0, 0.3);
        }
        i.icon-del {
          display: none;
          position: absolute;
          right: -4px;
          top: -8px;
          border-radius: 50%;
          background: @color_96a4b3;
          color: #fff;
        }
      }
      /*添加处方*/
      .add-prescription-wrapper {
        margin: 10px 0;
        justify-content: space-between;
        .btn {
          height: 26px;
          font-size: 14px;
          padding: 2px 8px;
          background: #fff;
          border-radius: 3px;
          border: 1px solid #ced0da;
          color: #7a8794;
          cursor: pointer;
          margin-right: 10px;
          &:hover{
            background: #eff1f5;
          }
        }
      }
      /*医嘱事项*/
      .doctor-advice {
        margin-bottom: 10px;
        position: relative;
        border: 4px;
        min-height: 33px;
        // -ms-align-items: center;
        // -webkit-align-items: center;
        // align-items: center;
        border: 1px solid @color_e6eaee;
        border-radius: 4px;
        background: @color_fffdec;
        label {
          width: 98px;
          border-right: 1px solid @color_e6eaee;
          min-height: 33px;
          color: #626d77;
          text-indent: 12px;
          line-height: 33px;
        }
        .textarea-wrapper {
          flex: 1;
          height: 100%;
          background: @color_fffdec;
          line-height: 25px;
          .el-textarea__inner {
            border: 0;
            color: #000;
            background: @color_fffdec;
            &:hover {
              border: 1px solid #005ed9;
              border-radius: 0;
              transition: border-color 0s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
          }
        }
        /*医嘱弹窗盒子*/
        .advice-popper-wrapper {
          position: absolute;
          top: 42px;
          left: 230px;
          width: calc(100% - 240px);
          max-height: 150px;
          overflow-y: auto;
          background: #fff;
          border-radius: 3px;
          -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          z-index: 1009;
          border: 1px solid #b7b9c2;
          font-size: 14px;
          ul {
            padding: 10px 8px;
            li {
              height: 24px;
              line-height: 24px;
            }
          }
          ul .symptomsItem {
            display: inline-block;
            padding: 0px 8px;
            border-radius: 3px;
            cursor: pointer;
            color: @color_7a8794;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &:hover {
              background: @color_d2e5f6;
              color: @color_007aff;
            }
          }
          /*关闭*/
          .close {
            height: 40px;
            -webkit-align-items: center;
            -ms-align-items: center;
            -webkit-justify-content: center;
            -ms-justify-content: center;
            justify-content: center;
            color: #005ed9;
            background: #f7f7f7;
            cursor: pointer;
            .icon-guanbi {
              font-size: 28px;
            }
          }
        }
      }
    }
  }

  /*********响应式********/
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