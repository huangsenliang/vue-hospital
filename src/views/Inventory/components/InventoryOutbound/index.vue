<template>
  <!-- 库存：出库页面组件 -->
  <div class="inventory-outbound" style="height:100%">
    <!-- 头部 -->
    <div class="outbound-header flex justify-between">
      <div class="flex align-items">
        <Calendar-Input style="marginRight:16px"></Calendar-Input>
        <Select-Input style="marginRight:16px"></Select-Input>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <!-- 右侧 -->
      <div class="outbound-header-right flex align-items">
        <!-- 新增入库弹窗 -->
        <div class="add-outbound-wrapper">
          <button @click="showAddOutbound=true" class="btn-success">新增出库</button>
          <div v-show="showAddOutbound">
            <Dialog-Outbound @showAddOutbound="showAddOutbound=false"></Dialog-Outbound>
          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <Outbound-List style="height:62%"></Outbound-List>
    <!-- 底部分页 -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条库单，数量
        <span style="fontWeight: 700;">&nbsp;37,539,760.99&nbsp;</span> ，金额
        <span style="fontWeight: 700;">&nbsp;285,388,552.709&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
import CalendarInput from "@/components/CalendarInput";
/*******************局部组件******************/

// 新增出库弹窗组件
import DialogOutbound from "./dialog/dialogOutbound";
// 列表组件
import OutboundList from "./components/outboundList";
export default {
  components: {
    SelectInput,
    SearchInput,
    CalendarInput,
    DialogOutbound,
    OutboundList
  },
  data() {
    return {
      showAddOutbound: false // 新增出库弹窗控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.inventory-outbound {
  padding: 0 16px;
  // 头部
  .outbound-header {
    height: 64px;
  }
  // 底部分页
  .pag-wrapper{
    height: 55px;
  }
}
</style>