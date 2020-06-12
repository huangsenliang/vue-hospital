<template>
  <!-- 出库：列表组件 -->
  <div class="outbound-list">
    <!-- 表头 -->
    <ul class="th flex">
      <li class="item1">
        <span>出库单号</span>
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
        <span>出库类型</span>
      </li>
      <li class="item6">
        <span>品种</span>
      </li>
      <li class="item7">
        <span>数量</span>
      </li>
      <li class="item8">
        <span>金额</span>
      </li>
      <li class="item9">
        <span>出库人</span>
      </li>
      <li class="item10">
        <span>出库日期</span>
      </li>
    </ul>
    <!-- 表内容 -->
    <div class="table-body">
      <ul @click="showOutboundApplication=true" v-for="(item,index) of 10" :key="index" class="td flex">
        <li class="item1">
          <span style="color: rgb(10, 140, 234);">CK2020052100001</span>
        </li>
        <li class="item2">
          <span>已出库</span>
        </li>
        <li class="item3">
          <span>--</span>
        </li>
        <li class="item4">
          <span>惠民体验诊所</span>
        </li>
        <li class="item5">
          <span>科室出库</span>
        </li>
        <li class="item6">
          <span>1</span>
        </li>
        <li class="item7">
          <span>19</span>
        </li>
        <li class="item8">
          <span>185.00</span>
        </li>
        <li class="item9">
          <span>刘洋</span>
        </li>
        <li class="item10">
          <span>2020-05-21</span>
        </li>
      </ul>
    </div>
    <!-- 弹窗：科室出库单 -->
    <div v-show="showOutboundApplication">
      <Dialog-Outbound-Application @showOutboundApplication="showOutboundApplication=false"></Dialog-Outbound-Application>
    </div>
  </div>
</template>

<script>
import DialogOutboundApplication from "../dialog/dialogOutboundApplication";
export default {
  components: {
    DialogOutboundApplication
  },
  data() {
    return {
      showOutboundApplication: false // 科室出库单弹窗组件显隐控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.outbound-list {
  height: 100%;
  ul > li {
    padding: 0 6px;
  }
  //   表头
  .th {
    height: 40px;
    color: #96a4b3;
    -ms-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    background: #f5f7fb;
    border-top: 1px solid #e6eaee;
    border-bottom: 1px solid #e6eaee;
  }
  //   表内容
  .table-body {
    height: calc(100% - 40px);
    overflow-y: auto;
    .td {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #dadbe0;
      cursor: pointer;
      &:hover {
        background: @color_e9eff8;
      }
    }
  }
  .item1 {
    width: 12.2449%;
  }
  .item2 {
    width: 6.12245%;
  }
  .item3 {
    width: 6.12245%;
  }
  .item4 {
    width: 18.3673%;
  }
  .item5 {
    width: 10.2041%;
  }
  .item6 {
    text-align: right;
    width: 8.16327%;
  }
  .item7 {
    text-align: right;
    width: 8.16327%;
  }
  .item8 {
    text-align: right;
    width: 10.2041%;
  }
  .item9 {
    padding-left: 60px;
    width: 12.2449%;
  }
  .item10 {
    text-align: center;
    width: 8.16327%;
  }
}
</style>