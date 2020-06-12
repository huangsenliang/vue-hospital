<template>
  <!-- 库存：供应商组件 -->
  <div class="inventory-provider" style="height:100%">
    <!------------ 头部-------------- -->
    <div class="provider-header flex align-items justify-between">
      <Search-Input placeholder="供应商名称"></Search-Input>
      <button @click="showDialogProvider=true" class="btn-success">新增供应商</button>
      <!-- ------------添加供应商弹窗组件------------ -->
      <div v-show="showDialogProvider">
        <DialogProvider @showDialogProvider="showDialogProvider=false"></DialogProvider>
      </div>
    </div>
    <!-- ----------------表格----------- -->
    <Provider-List style="height:61.5%"></Provider-List>
    <!-- ---------分页------------- -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <p>
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条记录
      </p>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SearchInput from "@/components/SearchInput";
/*******************局部组件**************/
// 添加供应商弹窗组件
import DialogProvider from "./dialog/dialogProvider";
import ProviderList from "./components/providerList";
export default {
  components: {
    SearchInput,
    DialogProvider,
    ProviderList
  },
  data() {
    return {
      showDialogProvider: false // 添加供应商弹窗组件显示隐藏控制变量
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.inventory-provider {
  padding: 0 16px;
  /*头部*/
  .provider-header {
    height: 64px;  
  }
  /*分页*/ 
  .pag-wrapper{
    height: 55px;
  }
  
}
</style>