<template>
  <!-- 结算申请列表组件 -->
  <div class="apply-List">
    <!-- 表头 -->
    <ul class="table-header flex">
      <li class="item1">
        <span>结算单号</span>
      </li>
      <li class="item2">
        <span>状态</span>
      </li>
      <li class="item3">
        <span>供应商</span>
      </li>
      <li class="item4">
        <span>价税总和</span>
      </li>
      <li class="item5">
        <span>实际金额</span>
      </li>
      <li class="item6">
        <span>实际税额</span>
      </li>
      <li class="item7">
        <span>提交时间</span>
      </li>
      <li class="item8">
        <span>提交人</span>
      </li>
      <li class="item9">
        <span>审核时间</span>
      </li>
      <li class="item10">
        <span>审核人</span>
      </li>
    </ul>
    <!-- 表内容 -->
    <div class="table-body">
      <ul @click="showApplyApplication=true" class="td flex" v-for="(item,index) of 10" :key="index">
        <li class="item1">
          <span>4561364564156</span>
        </li>
        <li class="item2" style="color: rgb(98, 109, 119)">
          <span>待审核</span>
        </li>
        <li class="item3">
          <span>广东供应商</span>
        </li>
        <li class="item4">
          <span>40.00</span>
        </li>
        <li class="item5">
          <span>39.60</span>
        </li>
        <li class="item6">
          <span>0.40</span>
        </li>
        <li class="item7">
          <span>2020-05-23</span>
        </li>
        <li class="item8">
          <span>李思思</span>
        </li>
        <li class="item9">
          <span>--</span>
        </li>
        <li class="item10">
          <span>--</span>
        </li>
      </ul>
    </div>
    <!-- 结算单弹窗组件 -->
    <div v-show="showApplyApplication">
      <Dialog-Apply-Application @showApplyApplication="showApplyApplication=false"></Dialog-Apply-Application>
    </div>
  </div>
</template>

<script>
/*****************局部组件*********/ 
// 结算单弹窗组件
import DialogApplyApplication from "../dialog/dialogApplyApplication";
export default {
  components:{
    DialogApplyApplication
  },
  data(){
    return {
      showApplyApplication:false,  // 结算单弹窗组件显示隐藏控制
    }
  }
};
</script>

<style lang="less" scoped>
.apply-List {
  // 表内容
  .table-body {
    height: calc(100% - 36px);
    overflow-y: auto;
    .td {
      cursor: pointer;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #dadbe0;
      &:hover {
        background: @color_e9eff8;
      }
    }
  }
  //  表头
  .table-header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: @color_f5f7fb;
    color: @color_96a4b3;
    border-top: 1px solid @color_e6eaee;
    border-bottom: 1px solid @color_e6eaee;
  }
  ul > li {
    padding: 0 6px;
  }
  .item1 {
    width: 14.5455%;
  }
  .item2 {
    text-align: center;
    width: 7.27273%;
  }
  .item3 {
    width: 14.5455%;
  }
  .item4 {
    text-align: right;
    width: 9.09091%;
  }
  .item5 {
    text-align: right;
    width: 9.09091%;
  }
  .item6 {
    text-align: right;
    width: 9.09091%;
  }
  .item7 {
    text-align: center;
    width: 9.09091%;
  }
  .item8 {
    text-align: center;
    width: 9.09091%;
  }
  .item9 {
    text-align: center;
    width: 9.09091%;
  }
  .item10 {
    text-align: center;
    width: 9.09091%;
  }
}
</style>