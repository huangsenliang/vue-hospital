<template>
  <!-- 库存告警药品弹窗组件-->
  <div class="dialog-purchase-warn dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style purchase-warn-content">
      <!-- 头部 -->
      <div class="dialog-header flex">
        <h4>库存告警药品</h4>
        <i @click="$emit('showDialogWrapper')" class="icon-del iconfont"></i>
      </div>
      <!-- 内容 -->
      <div class="dialog-body">
        <ul class="flex row">
          <li class="item1">
            <el-checkbox v-model="checkAll">药品名称</el-checkbox>
          </li>
          <li class="item2">
            <span>规格</span>
          </li>
          <li class="item3">
            <span>最近供应商</span>
          </li>
          <li class="item4">
            <span>剩余</span>
          </li>
        </ul>
        <ul v-for="(item,index) of 6" :key="index" class="flex row">
          <li class="item1">
            <el-checkbox v-model="checkAll">柴胡</el-checkbox>
          </li>
          <li class="item2">
            <span>中药饮片</span>
          </li>
          <li class="item3">
            <span>四川医药销售公司</span>
          </li>
          <li class="item4">
            <span>6g</span>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="btn-wrapper flex justify-end align-items">
        <button style="marginRight:10px" class="btn-blank" @click="$emit('showDialogWrapper')">取消</button>
        <button class="btn-blank">加入采购申请</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkAll: false // 全选按钮值
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-purchase-warn {
  /*弹窗*/
  .purchase-warn-content {
    top: 0;
    background: #fff;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 360px;
    /*头部*/
    .dialog-header {
      padding: 12px 8px 12px 24px;
      text-align: left;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
    }
    /*内容*/
    .dialog-body {
      height: 500px;
      overflow-y: auto;
      .item1 {
        width: 216px;
        padding-left: 24px;
        padding-right: 8px;
      }
      .item2 {
        width: 116px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .item3 {
        width: 128px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .item4 {
        width: 70px;
        color: @color_FF9933;
        text-align: right;
        padding-right: 8px;
        padding-left: 8px;
      }
      .row {
        cursor: pointer;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #dadbe0;
      }
    }
    // 底部按钮
    .btn-wrapper {
      padding: 0 24px;
      height: 61px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid @color_e6eaee;
    }
  }
}
</style>