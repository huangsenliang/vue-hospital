<template>
  <!-- 盘点详情列表弹窗组件 -->
  <div class="dialog-temporary-application dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style dialog-temporary-content">
      <!-- 头部 -->
      <div class="top-header flex align-items justify-between">
        <h4>盘点单 RK2020060800001</h4>
        <i class="icon-del iconfont" @click="$emit('showTemporaryApplication')"></i>
      </div>
      <!-- 描述1 -->
      <div class="describe flex align-items">
        <div>
          盘点人：
          <span>李思思</span>
        </div>
        <div class="ellipsis">
          盘点门店：
          <span>惠民体验诊所</span>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table-wrapper">
        <!-- 表头 -->
        <ul class="flex align-items th">
          <li class="item1">
            <span>药品编码</span>
          </li>
          <li class="item2 flex-item text-ellipsis">
            <span>药品名称</span>
          </li>
          <li class="item3 text-ellipsis">
            <span>类型</span>
          </li>
          <li class="item4">
            <span>等级</span>
          </li>
          <li class="item5">
            <span>批次</span>
          </li>
          <li class="item6">
            <span>生产批号</span>
          </li>
          <li class="item7">
            <span>账面数量</span>
          </li>
          <li class="item8">
            <span>实际数量</span>
          </li>
          <li class="item9">
            <span>盈亏数量</span>
          </li>
          <li class="item10">
            <span>盈亏金额(进价)</span>
          </li>
          <li class="item11">
            <span>盈亏金额(售价)</span>
          </li>
        </ul>
        <!-- 表内容 -->
        <div class="table-body">
          <ul class="flex align-items td">
            <li class="item1">
              <span>15645466</span>
            </li>
            <li class="item2 flex-item text-ellipsis">
              <div>
                <span>阿莫西林</span>
              </div>
              <div>
                <span>50g*1片</span>
              </div>
            </li>
            <li class="item3">
              <span>西药</span>
            </li>
            <li class="item4">
              <span>--</span>
            </li>
            <li class="item5">
              <span>--</span>
            </li>
            <li class="item6">
              <span>--</span>
            </li>
            <li class="item7">
              <span>100盒</span>
            </li>
            <li class="item8">
              <span>0盒</span>
            </li>
            <li class="item9">
              <span>-100盒</span>
            </li>
            <li class="item10">
              <span>-2000.00</span>
            </li>
            <li class="item11">
              <span>--2500.00</span>
            </li>
          </ul>
        </div>
        <div class="table-footer flex justify-end align-items">
          <ul class="total-info flex">
            <li>
              品种：
              <span>10</span>
            </li>
            <li>
              盈亏总金额(进价)：
              <span>-20000.00</span>
            </li>
            <li>
              盈亏总金额(售价)：
              <span>-20000.00</span>
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
              <span>创建盘点单</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button
          class="btn-primary"
          style="marginRight:10px"
          @click="$emit('showTemporaryApplication')"
        >关闭</button>
        <button class="btn-blank" style="marginRight:10px">打印</button>
        <button class="btn-blank">导出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dialog-temporary-application {
  .dialog-temporary-content {
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
      // 表头
      .th {
        padding: 0 8px;
        color: @color_8493a4;
        font-weight: 700;
        height: 32px;
        border-bottom: 1px solid #e6eaee;
        border-top: 1px solid #e6eaee;
        background-color: #f5f7fb;
      }
      // 表内容
      .table-body {
        .td {
          padding: 0 8px;
          height: 48px;
          border-bottom: 1px solid @color_e6eaee;
          .item9,
          .item10 {
            color: @color_f33;
          }
          .item10 {
            text-decoration: underline;
          }
        }
      }
      .item1 {
        width: 106px;
      }
      .item3 {
        padding-left: 16px;
        width: 80px;
      }
      .item4 {
        padding-right: 16px;
        width: 70px;
      }
      .item5 {
        padding-right: 16px;
        width: 120px;
      }
      .item6 {
        padding-right: 16px;
        width: 78px;
      }
      .item7,
      .item8 {
        text-align: right;
        width: 100px;
      }
      .item9 {
        text-align: right;
        width: 102px;
      }
      .item10 {
        text-align: right;
        width: 110px;
      }
      .item11 {
        text-align: right;
        width: 110px;
      }
      // 合计
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