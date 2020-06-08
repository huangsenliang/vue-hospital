<template>
  <!-- 采购申请弹窗组件 -->
  <div class="dialog-cargo-list dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style dialog-cargo-content">
      <!-- 头部 -->
      <div class="top-header flex align-items justify-between">
        <h4>入库单 RK2020060800001</h4>
        <i class="icon-del iconfont" @click="$emit('showCargoApplication')"></i>
      </div>
      <!-- 描述1 -->
      <div class="describe flex align-items">
        <div>
          入库人：
          <span>李思思</span>
        </div>
        <div class="ellipsis">
          入库门店：
          <span>惠民体验诊所</span>
        </div>
        <div class="flex align-items">
          <label for>供应商：</label>
          <Select-Input value="李思思" :disabled="isDisabled+''" style="width:145px"></Select-Input>
        </div>
        <div class="flex align-items">
          <label for>随货单号：</label>
          <Search-Input
            value="12345678"
            :disabled="isDisabled+''"
            placeholder="请输入随货单号"
            style="width:150px"
          ></Search-Input>
        </div>
        <div class="set-btn">
          <span v-show="isDisabled" @click="isDisabled=false">修改</span>
          <span v-show="!isDisabled" @click="isDisabled=true">保存</span>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table-wrapper">
        <ul class="flex align-items th">
          <li class="item1">
            <span>批次</span>
          </li>
          <li class="item2">
            <span>药品编码</span>
          </li>
          <li class="item3 flex-item">
            <span>药品名称</span>
          </li>
          <li class="item4">
            <span>税率</span>
          </li>
          <li class="item5 text-ellipsis">
            <span>厂家</span>
          </li>
          <li class="item6">
            <span>生产批号</span>
          </li>
          <li class="item7">
            <span>生产日期</span>
          </li>
          <li class="item8">
            <span>效期</span>
          </li>
          <li class="item9">
            <span>数量</span>
          </li>
          <li class="item10">
            <span>进价</span>
          </li>
          <li class="item11">
            <span>含税金额</span>
          </li>
          <li class="item12">
            <span></span>
          </li>
        </ul>
        <div class="table-body">
          <Dialog-Cargo-Application-Item></Dialog-Cargo-Application-Item>
        </div>
        <div class="table-footer flex justify-end align-items">
          <ul class="total-info flex">
            <li>
              品种：
              <span>10</span>
            </li>
            <li>
              数量：
              <span>16,102</span>
            </li>
            <li>
              售价合计(含税)：
              <span>320.00</span>
            </li>
            <li>
              含税金额：
              <span>25.00</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 操作记录 -->
      <div class="record-wrapper">
        <ul class="record-list">
          <li class="flex align-items">
            <div class="log-time">
              <span>2020-06-05</span>
            </div>
            <div class="log-action">
              <span>李思思</span>
              <span>加入采购计划：2020-06-05采购</span>
            </div>
          </li>
          <li class="flex align-items">
            <div class="log-time">
              <span>2020-06-05</span>
            </div>
            <div class="log-action">
              <span>李思思</span>
              <span>创建采购单</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-blank" style="marginRight:10px">打印</button>
        <button class="btn-blank">导出</button>
      </div>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
/********************局部组件***************/

// 列表行组件
import DialogCargoApplicationItem from "../components/dialogCargoApplicationItem";
export default {
  components: {
    SelectInput,
    SearchInput,
    DialogCargoApplicationItem
  },
  data() {
    return {
      isDisabled: false // 是否修改信息
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dialog-cargo-list {
  .dialog-cargo-content {
    width: 1210px;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
    // 头部
    .top-header {
      padding-left: 24px;
      height: 41px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
    }
    // 描述
    .describe {
      padding: 0 24px;
      height: 64px;
      > div {
        margin-right: 16px;
        color: #7a8794;
        > span {
          color: #000;
        }
      }
      .set-btn {
        margin-left: 20px;
        span {
          cursor: pointer;
          margin-right: 10px;
          color: @color_007aff;
        }
      }
    }
    // 表格
    .table-wrapper {
      padding: 0 24px;
      height: 300px;
      overflow-y: auto;
      li {
        padding: 0 8px;
      }
      .item1 {
        width: 70px;
      }
      .item2 {
        width: 90px;
      }
      .item4 {
        text-align: right;
        padding-right: 16px;
        width: 60px;
      }
      .item5 {
        width: 120px;
      }
      .item6 {
        width: 102px;
      }
      .item7 {
        width: 120px;
      }
      .item8 {
        text-align: center;
        width: 120px;
      }
      .item9 {
        text-align: right;
        width: 108px;
        // 输入框
        .select-wrapper {
          input {
            border: 3px;
            height: 32px;
            width: 70px;
            margin-right: -1px;
            border: @color_ced0da 1px solid;
          }
          // 单位选择
          .unit-wrapper {
            position: relative;
            .unit {
              display: inline-block;
              width: 40px;
              height: 32px;
              line-height: 27px;
              text-align: center;
              border: @color_ced0da 1px solid;
            }
            // 选择列表
            .unit-list {
              position: absolute;
              top: 33px;
              background: #fff;
              border: 3px;
              z-index: 1000;
              border: 1px solid @color_ced0da;
              li {
                width: 38px;
                height: 32px;
                line-height: 32px;
                text-align: center;
              }
              li + li {
                border-top: 1px solid @color_ced0da;
              }
              .is-selected {
                background: @color_007aff;
                color: #fff;
              }
            }
          }
        }
      }
      .item10 {
        text-align: right;
        padding-right: 16px;
        width: 98px;
      }
      .item11 {
        text-align: right;
        width: 88px;
      }
      .item12 {
        padding-left: 8px;
        width: 80px;
        color: @color_007aff;
        cursor: pointer;
      }

      .th {
        color: @color_8493a4;
        font-weight: 700;
        height: 32px;
        border-bottom: 1px solid #e6eaee;
        border-top: 1px solid #e6eaee;
        background-color: #f5f7fb;
      }
      .table-footer {
        height: 64px;
        color: #7a8794;
        .total-info {
          > li {
            margin-left: 10px;
            > span {
              color: #000;
            }
          }
        }
      }
    }
    // 操作记录
    .record-wrapper {
      padding: 0 24px;
      .record-list {
        color: #7a8794;
        padding-top: 12px;
        border-top: 1px dashed @color_ced0da;
        li {
          margin-bottom: 12px;
          .log-action {
            margin-left: 26px;
          }
        }
      }
    }
    // 底部按钮
    .btn-wrapper {
      padding: 0 24px;
      height: 61px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>