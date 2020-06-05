<template>
  <!-- 收费页面：优惠券组件 -->
  <div class="charge-coupon">
    <div class="table-header align-items justify-between flex">
      <h5 class="flex-item">优惠/议价</h5>
      <div class="money">
        <span>金额</span>
      </div>
    </div>
    <div class="table-body">
      <div class="td">
        <span class="capsule-btn-danger">会员</span>
        <span class="btn">使用会员卡</span>
      </div>
      <div class="td flex justify-between align-items">
        <div class="left">
          <span class="capsule-btn-danger">会员</span>
          <span class="btn">修改</span>
          <span>
            <i class="iconfont icon-xuanzhong"></i>
            6.1
          </span>
        </div>
        <div class="right">
          <i class="iconfont icon-tanhaotishi"></i>
          <span>-¥24.20</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.charge-coupon {
  /*优惠券*/
  margin-top: 16px;
  border: 1px solid #ced0da;
  border-radius: 3px;
  .table-header {
    height: 32px;
    background-color: #fff;
    border-bottom: none;
    padding-right: 16px;
    padding-left: 12px;
    border-radius: 3px 3px 0 0;
    h5 {
      font-weight: 700;
      color: #000;
      margin-right: 24px;
    }
    .money {
      width: 96px;
      min-width: 96px;
      max-width: 96px;
      text-align: right;
      padding-left: 16px;
    }
  }
  .table-body {
    .td {
      cursor: pointer;
      padding: 0 8px;
      border-top: 1px solid #e6eaee;
      height: 41px;
      line-height: 41px;
      &:hover {
        background: @color_e9eff8;
      }
      .capsule-btn-danger {
        margin-right: 20px;
      }
      .btn {
        cursor: pointer;
        color: @color_2680f7;
        margin-right: 20px;
      }
      i.icon-xuanzhong {
        color: @color_f33;
      }
      .right {
        i.icon-tanhaotishi {
          color: @color_ced0da;
          margin-right: 8px;
          font-size: 14px;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>