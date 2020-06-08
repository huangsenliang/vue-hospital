<template>
  <!-- 采购页面：表格组件 -->
  <div class="purchase-list">
    <ul class="table-header flex">
      <li class="item1">
        <span>采购申请单号</span>
      </li>
      <li class="item2">
        <span>状态</span>
      </li>
      <li class="item3">
        <span>采购计划</span>
      </li>
      <li class="item4">
        <span>门店</span>
      </li>
      <li class="item5">
        <span>品种</span>
      </li>
      <li class="item6">
        <span>数量</span>
      </li>
      <li class="item7">
        <span>申请人</span>
      </li>
      <li class="item8">
        <span>申请日期</span>
      </li>
      <li class="item9">
        <span>审核日期</span>
      </li>
    </ul>
    <ul @click="showPurchaseApplication=true" v-for="(item,index) of 10" :key="index" class="row flex">
      <li style="color: rgb(10, 140, 234);" class="item1">
        <span>CG202005200000001</span>
      </li>
      <li class="item2">
        <span>已通过</span>
      </li>
      <li class="item3">
        <span>2020-05-20采购</span>
      </li>
      <li class="item4">
        <span>惠民体验诊所</span>
      </li>
      <li class="item5">
        <span>4</span>
      </li>
      <li class="item6">
        <span>40</span>
      </li>
      <li class="item7">
        <span>刘洋</span>
      </li>
      <li class="item8">
        <span>2020-05-20</span>
      </li>
      <li class="item9">
        <span>2020-05-20</span>
      </li>
    </ul>
    <!-- 申请清单弹窗 -->
    <div v-show="showPurchaseApplication">
      <Dialog-Purchase-Application @showPurchaseApplication="showPurchaseApplication=false"></Dialog-Purchase-Application>
    </div>
  </div>
</template>

<script>
/*****************局部组件*************/
// 清单申请组件
import DialogPurchaseApplication from "../dialog/dialogPurchaseApplication";
export default {
  components: {
    DialogPurchaseApplication
  },
  data() {
    return {
      showPurchaseApplication:false, // 申请弹窗列表显示隐藏控制变量
      showDetailsPopper: false // 商品详情页面显示隐藏控制变量
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.purchase-list {
  /*表格*/
  font-size: 14px;
  overflow-y:auto ;
  .item1 {
    width: 16.6038%;
    padding: 0 6px;
  }
  .item2 {
    width: 9.43396%;
    padding: 0 6px;
  }
  .item3 {
    width: 11.3208%;
    padding: 0 6px;
  }
  .item4 {
    width: 13.2075%;
    padding: 0 6px;
  }
  .item5 {
    text-align: right;
    width: 8.67925%;
    padding: 0 6px;
  }
  .item6 {
    text-align: right;
    padding-right: 40px;
    padding-left: 6px;
    width: 8.67925%;
  }
  .item7 {
    padding-left: 80px;
    padding-right: 6px;
    width: 13.2075%;
  }
  .item8 {
    text-align: center;
    width: 9.43396%;
    padding: 0 6px;
  }
  .item9 {
    text-align: center;
    width: 9.43396%;
    padding: 0 6px;
  }
  .table-header {
    color: @color_96a4b3;
    line-height: 40px;
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: #f5f7fb;
    border-top: 1px solid #e6eaee;
    border-bottom: 1px solid #e6eaee;
  }
  .row {
    cursor: pointer;
    min-height: 48px;
    height: auto;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dadbe0;
    &:hover {
      background: @color_e9eff8;
    }
  }
}
</style>