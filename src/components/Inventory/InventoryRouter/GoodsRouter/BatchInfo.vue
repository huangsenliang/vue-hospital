<template>
  <!-- 批次信息页面 -->
  <div class="batch-info">
    <!-- 搜索框 -->
    <div class="search-wrapper flex">
      <Search-Input placeholder="搜索批次"></Search-Input>
    </div>
    <!-- 表格 -->
    <div class="batch-table">
      <ul class="table-header flex">
        <li class="item1">
          <span>门诊</span>
        </li>
        <li class="item2">
          <span>批次</span>
        </li>
        <li class="item3">
          <span>剩余库存</span>
        </li>
        <li class="item4">
          <span>入库时间</span>
        </li>
        <li class="item5">
          <span>生产批号</span>
        </li>
        <li class="item6">
          <span>效期</span>
        </li>
        <li class="item7">
          <span>进价</span>
        </li>
        <li class="item8">
          <span>进价总金额</span>
        </li>
        <li class="item9">
          <span>入库人</span>
        </li>
      </ul>
      <ul v-for="(item,index) of 2" :key="index" class="row flex">
        <li class="item1">
          <span>ABC体验诊所</span>
        </li>
        <li class="item2">
          <span>51028557</span>
        </li>
        <li class="item3">
          <span>12g</span>
        </li>
        <li class="item4">
          <span>2020-03-10 10:41:16</span>
        </li>
        <li class="item5">
          <span>--</span>
        </li>
        <li class="item6">
          <span>--</span>
        </li>
        <li class="item7">
          <span>0.045g</span>
        </li>
        <li class="item8">
          <span>0.54</span>
        </li>
        <li class="item9">
          <span>李思思</span>
        </li>
      </ul>
    </div>
    <!-- 批次明显弹窗 -->
    <div v-if="showBatchPopper" class="popper-wrapper">
      <div class="mask"></div>
      <div class="popper-style batch-popper">
        <!-- 头部 -->
        <div class="popper-header flex">
          <h4>批次明显（51028557）</h4>
          <div class="header-right">
            <i
              @click="showDetailsPopper=false"
              class="icon-del iconfont"
              style="fontSize:25px;cursor:pointer;"
            ></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="popper-body">
          
        </div>
      </div>
    </div>
    <!-- 底部分页 -->
    <div class="batch-footer flex">
      <div class="footer-left">
        <button class="btn-page">上一页</button>
        <span style="padding:0 15px;fontSize:16px">1</span>
        <button class="btn-page">下一页</button>
      </div>
      <div class="footer-right">
        <p>
          共
          <span style="fontWeight: 700;">3</span> 条数据
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Common/SearchInput";
export default {
  components: {
    SearchInput
  },
  data(){
   return {
      showBatchPopper:true,  // 批次明显弹窗控制变量
   }
  },
};
</script>

<style scoped>
@import "../../../../assets/css/Inventory/InventoryRouter/GoodsRouter/BatchInfo/BatchInfo.css";
</style>