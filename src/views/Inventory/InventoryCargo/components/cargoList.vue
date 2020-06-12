<template>
  <!-- 出库列表组件 -->
  <div class="cargo-list">
    <ul class="flex table-header">
      <li class="item1">
        <span>入库单号</span>
      </li>
      <li class="item2">
        <span>状态</span>
      </li>
      <li class="item3">
        <span>结算状态</span>
      </li>
      <li class="item4">
        <span>门店</span>
      </li>
      <li class="item5">
        <span>供应商</span>
      </li>
      <li class="item6">
        <span>品种</span>
      </li>
      <li class="item7">
        <span>数量</span>
      </li>
      <li class="item8">
        <span>含税金额</span>
      </li>
      <li class="item9">
        <span>不含税金额</span>
      </li>
      <li class="item10">
        <span>入库人</span>
      </li>
      <li class="item11">
        <span>入库日期</span>
      </li>
    </ul>
    <div class="table-body">
      <ul
        @click="showCargoApplication=true"
        v-for="(item,index) of 10"
        :key="index"
        class="row flex"
      >
        <li style="color: rgb(10, 140, 234);" class="item1">
          <span>RK2020052100008</span>
        </li>
        <li class="item2">
          <span>已入库</span>
        </li>
        <li class="item3">
          <span>未结算</span>
        </li>
        <li class="item4">
          <span>ABC体验诊所</span>
        </li>
        <li class="item5">
          <span>盘点入库</span>
        </li>
        <li class="item6">
          <span>1</span>
        </li>
        <li class="item7">
          <span>10</span>
        </li>
        <li class="item8">
          <span>0.00</span>
        </li>
        <li class="item9">
          <span>0.00</span>
        </li>
        <li class="item10">
          <span>李思思</span>
        </li>
        <li class="item11">
          <span>2020-05-21</span>
        </li>
      </ul>
    </div>
    <!-- 入库清单弹窗组件 -->
    <Dialog-Cargo-Application
      v-show="showCargoApplication"
      @showCargoApplication="showCargoApplication=false"
    ></Dialog-Cargo-Application>
  </div>
</template>

<script>
/************局部组件***********/
import DialogCargoApplication from "../dialog/dialogCargoApplication";
export default {
  components: {
    DialogCargoApplication
  },
  data() {
    return {
      showCargoApplication: false // 入库清单弹窗组件显示隐藏控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.cargo-list {
  overflow-y: auto;
  .item1 {
    width: 11.3208%;
  }
  .item2 {
    width: 5.66038%;
  }
  .item3 {
    width: 5.66038%;
  }
  .item4 {
    width: 16.9811%;
  }
  .item5 {
    width: 15.0943%;
  }
  .item6 {
    text-align: right;
    width: 5.66038%;
    padding: 0 6px;
  }
  .item7 {
    text-align: right;
    width: 5.66038%;
  }
  .item8 {
    text-align: right;
    width: 7.54717%;
  }
  .item9 {
    text-align: right;
    width: 7.54717%;
  }
  .item10 {
    padding-left: 60px;
    width: 11.3208%;
  }
  .item11 {
    text-align: center;
    width: 7.54717%;
  }
  li {
    padding: 0 6px;
  }
  /*表格头部*/
  .table-header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: #f5f7fb;
    color: #96a4b3;
    border-top: 1px solid #e6eaee;
    border-bottom: 1px solid #e6eaee;
  }
  /*表格内容*/
  .table-body {
    .row {
      cursor: pointer;
      width: 100%;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #dadbe0;
      &:hover {
        background: @color_e9eff8;
      }
    }
  }
}
</style>