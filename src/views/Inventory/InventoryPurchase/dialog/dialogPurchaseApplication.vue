<template>
  <!-- 采购申请弹窗组件 -->
  <div class="dialog-purchase-list dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style dialog-purchase-content">
      <!-- 头部 -->
      <div class="top-header flex align-items justify-between">
        <h4>采购申请单</h4>
        <i class="icon-del iconfont" @click="$emit('showPurchaseApplication')"></i>
      </div>
      <!-- 描述1 -->
      <div class="describe flex align-items">
        <div>
          申请人：
          <span>李思思</span>
        </div>
        <div class="ellipsis">
          申请门店：
          <span>惠民体验诊所</span>
        </div>
        <div>
          加入采购计划：
          <span>2020-06-05采购</span>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table-wrapper">
        <ul class="flex align-items th">
          <li class="item1">
            <span>药品编码</span>
          </li>
          <li class="item2 flex-item">
            <span>药品名称</span>
          </li>
          <li class="item3">
            <span>厂家</span>
          </li>
          <li class="item4">
            <span>最近供应商</span>
          </li>
          <li class="item5">
            <span>最近进价</span>
          </li>
          <li class="item6">
            <span>剩余库存</span>
          </li>
          <li class="item7">
            <span>日均销量(近15天)</span>
          </li>
          <li class="item8">
            <span>毛利率</span>
          </li>
          <li class="item9">
            <span>数量</span>
          </li>
        </ul>
        <ul v-for="(item,index) of 3" :key="index" class="flex align-items td">
          <li class="item1">
            <span>4565416</span>
          </li>
          <li class="item2 flex-item text-ellipsis">
            <span class="cadn">阿莫西林</span>
            <span class="spec">24片</span>
          </li>
          <li class="item3">
            <span>广州白云山</span>
          </li>
          <li class="item4">
            <span>盘点入库</span>
          </li>
          <li class="item5">
            <span>0.00</span>
          </li>
          <li class="item6">
            <span>38盒20片</span>
          </li>
          <li class="item7">
            <span>0</span>
          </li>
          <li class="item8">
            <span>40.00%</span>
          </li>
          <li class="item9">
            <span>5000g</span>
          </li>
        </ul>
        <div class="table-footer flex justify-end align-items">
          <ul class="total-info flex">
            <li>
              品种
              <span>10</span>
            </li>
            <li>
              数量
              <span>16,102</span>
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
export default {};
</script>

<style lang="less" scoped>
.dialog-purchase-list {
  .dialog-purchase-content {
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
        width: 90px;
      }
      .item2 {
        .spec {
          font-size: 12px;
          color: #7a8794;
          margin-left: 8px;
        }
      }
      .item3 {
        padding-left: 26px;
        width: 150px;
      }
      .item4 {
        padding-left: 16px;
        width: 150px;
      }
      .item5,
      .item6 {
        text-align: right;
        padding-right: 12px;
        width: 80px;
      }
      .item7 {
        text-align: right;
        padding-right: 10px;
        width: 130px;
      }
      .item8 {
        text-align: right;
        width: 70px;
      }
      .item9 {
        text-align: right;
        text-indent: 50px;
        width: 110px;
      }

      .th {
        color: @color_8493a4;
        font-weight: 700;
        height: 32px;
        border-bottom: 1px solid #e6eaee;
        border-top: 1px solid #e6eaee;
        background-color: #f5f7fb;
      }
      .td {
        cursor: pointer;
        height: 48px;
        border-bottom: 1px solid #e6eaee;
        &:hover {
          background: @color_e9eff8;
        }
      }
      .table-footer {
        height: 64px;
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