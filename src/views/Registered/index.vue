<template>
  <!-- 挂号页面 -->
  <div id="registered">
    <!-- 头部内容 -->
    <div class="registered-header-wrapper flex">
      <!-- 左边内容 -->
      <div class="header-left flex">
        <h3>挂号</h3>
        <div class="handle-bar flex">
          <div :class="{selected:dateIndex==0}" class="now item" @click="handleDate(0)">
            <span>今天</span>
            <span>(4)</span>
          </div>
          <div @click="handleDate(1)" :class="{selected:dateIndex==1}" class="tomorrow item item">
            <span>明天</span>
            <span>(2)</span>
          </div>
          <div class="calendar item">
            <i class="iconfont icon-rili"></i>
            <span style="marginLeft:10px">指定日期</span>
          </div>
          <!-- 引入搜素框组件 -->
          <div class="search-wrapper" style="marginLeft:55px">
            <!-- 自定义搜索框组件 -->
            <Search-Input size="220px" placeholder="搜索姓名、手机"></Search-Input>
          </div>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="header-right">
        <button class="btn-blank-small">叫号</button>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="registered-body-wrapper flex">
      <!-- 左侧内容 -->
      <div class="body-aside-wrapper">
        <Registered-List></Registered-List>
      </div>
      <!-- 中间主要内容 -->
      <div class="body-main-wrapper">
        <!-- 头部内容 -->
        <div class="main-header flex">
          <div class="header-left flex">
            <ul class="flex tabs">
              <li
                @click="handleTabsNum(index)"
                :class="{'is-selected':index==tabsNum}"
                class="item"
                v-for="(item,index) of tabsList"
                :key="index"
              >
                <span>
                  {{item}}
                  <span>(1)</span>
                </span>
              </li>
            </ul>
            <div class="address-wrapper">
              <el-select v-model="addressValue" placeholder="请选择">
                <el-option
                  v-for="item in addressOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="header-right">
            <span>
              已签：
              <span class="count">0</span>挂号费实收：
              <span class="total">￥0.00</span>
            </span>
          </div>
        </div>
        <!-- 表格 -->
        <div class="table-wrapper">
          <!-- 头部 -->
          <ul class="table-header tr flex">
            <li class="td0">
              <span></span>
            </li>
            <li class="td1">
              <span>患者</span>
            </li>
            <li class="td2">
              <span>性别</span>
            </li>
            <li class="td3">
              <span>手机</span>
            </li>
            <li class="td4">
              <span>渠道</span>
            </li>
            <li class="td5">
              <span>状态</span>
            </li>
            <li class="td6">
              <span>挂号费</span>
            </li>
            <li class="td7">
              <span>科室</span>
            </li>
            <li class="td8">
              <span>医生</span>
            </li>
            <li class="td9">
              <span>号数</span>
            </li>
            <li class="td10">
              <span>预计就诊时间</span>
            </li>
          </ul>
          <!-- 内容 -->
          <ul class="table-body tr flex" v-for="(item,index) of 8" :key="index">
            <li class="td0">
              <span></span>
            </li>
            <li class="td1">
              <span>张扬</span>
            </li>
            <li class="td2">
              <span>男</span>
            </li>
            <li class="td3">
              <span>18244909687</span>
            </li>
            <li class="td4">
              <span>现场</span>
            </li>
            <li class="td5">
              <span>待诊</span>
            </li>
            <li class="td6">
              <span>￥0.00</span>
            </li>
            <li class="td7">
              <span>中医科</span>
            </li>
            <li class="td8">
              <span>蔡徐坤</span>
            </li>
            <li class="td9">
              <span>上午19</span>
            </li>
            <li class="td10">
              <span>今天11：36</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import VAddress from "@/components/VAddress";
import InputMoney from "@/components/InputMoney";
import RegisteredList from "./components/registeredList";
export default {
  components: {
    SearchInput,
    VAddress,
    InputMoney,
    RegisteredList
  },
  data() {
    return {
      addressValue: "", // 医院地址双向绑定
      dateIndex: 0, // 日期时间切换变量
      
      tabsList: ["全部", "已签", "待签", "已诊", "待诊", "已退"], // 切换标签
      tabsNum: 0, // 切换标签激活样式控制变量
      addressOptions: [
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
      ]
    };
  },
  methods: {
    // 处理：搜索框手机号后四位会员码
    handleSearchCoupons() {
      this.showSearchCoupon = !this.showSearchCoupon;
    },
    // 处理：切换标签激活样式控制变量
    handleTabsNum(index) {
      this.tabsNum = index;
    },
    // 处理：左侧激活样式控制变量
    handleLisNum(index) {
      this.lisNum = index;
    },
    // 处理：日期时间的切换
    handleDate(index) {
      this.dateIndex = index;
    },
    sendInd() {
      this.$emit("getInd", 2);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style lang="less" scoped>
#registered {
  height: 100%;
  /*内容头部*/
  .registered-header-wrapper {
    height: 48px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    background: #fff;
    border-radius: 4px 4px 0 0;
    border: 1px solid #ced0da;
    /*头部左边*/
    .header-left {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      h3 {
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;
      }
      /*事件切换*/
      .handle-bar {
        margin-left: 32px;
        /*共有样式*/
        .item {
          cursor: pointer;
          color: #96a4b3;
          padding: 5px 15px;
          border: 1px solid #ced0da;
          &:hover {
            background-color: #e9f2fe;
          }
        }
        /*激活样式*/
        .selected {
          color: #005ed9;
          border: 1px solid #005ed9 !important;
          z-index: 1;
          background-color: #e9f2fe;
        }
        .now {
          margin-right: -1px;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          border-right: 1px solid transparent;
        }
        .tomorrow {
          margin-right: -1px;
          border-right: 1px solid transparent;
          border-left: 1px solid transparent;
        }
        .calendar {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
    }
    /*头部右边*/
    .header-right {
      button {
        margin-right: 16px;
        color: #005ed9;
        &:hover {
          background: #c5e3f0;
          border: 1px solid #005ed9;
        }
      }
    }
  }
  /*主体内容*/
  .registered-body-wrapper {
    height: calc(100% - 48px);
    background-color: #f7f8fa;
    /*左侧内容*/
    .body-aside-wrapper {
      .body-header {
        .button-small {
          color: #fff;
          background-color: #0eba52;
          border-color: hsla(0, 0%, 100%, 0.4);
        }
      }
      width: 350px;
      height: 100%;
      border-left: 1px solid #ced0da;
      border-right: 1px solid #e6eaee;
      background: #fff;
      overflow-y: overlay;
      
    }
    /*中间主要内容*/
    .body-main-wrapper {
      margin-left: 16px;
      padding: 0 16px;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      height: 100%;
      background: #fff;
      overflow-y: overlay;
      /*头部*/
      .main-header {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        height: 48px;
        /*左侧内容*/
        .header-left {
          /*切换标签*/
          .tabs {
            /*激活样式*/
            .is-selected {
              color: #005ed9;
              border: 1px solid #005ed9 !important;
              z-index: 1;
              background-color: #e9f2fe;
            }
            .item {
              height: 30px;
              cursor: pointer;
              overflow: hidden;
              padding: 5px 15px;
              border: 1px solid #ddd;
              color: #96a4b3;
              &:hover {
                background-color: #e9f2fe;
              }
            }
            .item + .item {
              margin-left: -1px;
            }
            .item:last-child {
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
            .item:first-child {
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
            }
          }
          /*下拉选择*/
          .address-wrapper {
            margin-left: 30px;
            .el-input__inner {
              height: 30px;
              width: 160px;
            }
            .el-input__icon {
              line-height: 30px;
            }
          }
        }
        /*右侧内容*/
        .header-right {
          color: #7a8794;
          .count {
            color: #000;
            font-weight: 700;
            padding: 0 8px 0 3px;
          }
          .total {
            font-weight: 700;
            color: #000;
          }
        }
      }
      /*表格*/
      .table-wrapper {
        border: 1px solid #e6eaee;
        margin-bottom: 10px;
        .table-header {
          color: #96a4b3;
        }
        .tr:last-child {
          border-bottom: 0;
        }
        .tr {
          width: 100%;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #e6eaee;
          li {
            padding: 0 6px;
          }
          .td0 {
            width: 3.37178%;
          }
          .td1 {
            width: 13.3097%;
          }
          .td2 {
            width: 4.88021%;
          }
          .td3 {
            width: 13.6477%;
            text-align: center;
          }
          .td4 {
            width: 7.9858%;
          }
          .td5 {
            width: 7.9858%;
          }
          .td6 {
            width: 12.7773%;
          }
          .td7 {
            width: 7.9858%;
          }
          .td8 {
            width: 7.9858%;
          }
          .td9 {
            width: 10.6477%;
          }
          .td10 {
            width: 12.4224%;
          }
        }
      }
    }
  }
}
</style>