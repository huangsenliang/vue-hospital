<template>
  <!-- 库存：盘点列表组件 -->
  <div class="calculate-list">
    <!-- 表头 -->
    <ul class="table-header flex">
      <li class="item1">
        <span>盘点单号</span>
      </li>
      <li class="item2">
        <span>门店</span>
      </li>
      <li class="item3">
        <span>品种</span>
      </li>
      <li class="item4">
        <span>盈亏数量</span>
      </li>
      <li class="item5">
        <span>盈亏金额(进价)</span>
      </li>
      <li class="item6">
        <span>盈亏金额(售价)</span>
      </li>
      <li class="item7">
        <span>盘点人</span>
      </li>
      <li class="item8">
        <span>盘点日期</span>
      </li>
    </ul>
    <!-- 表内容 -->
    <div class="table-body">
      <ul @click="showTemporaryApplication=true" v-for="(item,index) of 10" :key="index" class="td flex">
        <li style="color: rgb(10, 140, 234);" class="item1">
          <span>PD2020052200001</span>
        </li>
        <li class="item2">
          <span>ABC体验诊所</span>
        </li>
        <li class="item3">
          <span>1</span>
        </li>
        <li class="item4">
          <span>3</span>
        </li>
        <li class="item5">
          <span>0.06</span>
        </li>
        <li class="item6">
          <span>0.75</span>
        </li>
        <li class="item7">
          <span>菜先伟</span>
        </li>
        <li class="item8">
          <span>2020-05-21</span>
        </li>
      </ul>
    </div>
    <!-- 盘点单详情弹窗 -->
    <div v-show="showTemporaryApplication">
      <Dialog-Temporary-Application @showTemporaryApplication="showTemporaryApplication=false"></Dialog-Temporary-Application>
    </div>
  </div>
</template>

<script>
import DialogTemporaryApplication from "../dialog/dialogTemporaryApplication";
export default {
  components:{
    DialogTemporaryApplication
  },
  data(){
    return{
      showTemporaryApplication:false,  // 盘点单详情弹窗显示隐藏控制变量
    }
  }
};
</script>

<style lang="less" scoped>
.calculate-list {
  font-size: 14px;
  ul > li {
    padding: 0 6px;
  }
  //   表内容
  .table-body {
    overflow-y: auto;
    height: calc(100% - 40px);
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
  //   表头
  .table-header {
    color: #96a4b3;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f5f7fb;
    border-top: 1px solid #e6eaee;
    border-bottom: 1px solid #e6eaee;
  }
  .item1 {
    width: 20.8817%;
  }
  .item2 {
    width: 18.5615%;
  }
  .item3 {
    text-align: right;
    width: 9.28074%;
  }
  .item4 {
    text-align: right;
    width: 10.4408%;
  }
  .item5 {
    text-align: right;
    padding-right: 20px;
    width: 10.4408%;
  }
  .item6 {
    text-align: right;
    padding-right: 20px;
    width: 10.4408%;
  }
  .item7 {
    padding-left: 70px;
    width: 11.6009%;
  }
  .item8 {
    text-align: center;
    width: 8.35267%;
  }
}
</style>