<template>
  <!-- 库存:药品物资页面 -->
  <div id="inventory" style="height:100%">
    <!-- 标签按钮 -->
    <Tabs :tabsList="tabsList" style="height:100%">
      <!-- 内容 -->
      <div style="height:100%;">
        <router-view></router-view>
      </div>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
export default {
  components: {
    Tabs
  },
  data() {
    return {
      tabsList: [
        { title: "药品/物资", path: "/inventory/goods" },
        { title: "采购", path: "/inventory/purchase" },
        { title: "入库", path: "/inventory/cargo" },
        { title: "出库", path: "/inventory/outbound" },
        { title: "盘点", path: "/inventory/calculate" },
        { title: "供应商", path: "/inventory/provider" },
        { title: "结算申请", path: "/inventory/apply" },
        { title: "结算审核", path: "/inventory/audit" }
      ] // 标签数据
    };
  }
};
</script>

<style lang="less" scoped>
#inventory {
  background: #fff;
  border: 1px solid #ced0da;
  border-radius: 3px;
}
</style>