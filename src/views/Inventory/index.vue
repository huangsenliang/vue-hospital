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
        { title: "药品/物资", name: "InventoryGoods" },
        { title: "采购", name: "InventoryPurchase" },
        { title: "入库", name: "Cargo" },
        { title: "出库", name: "Outbound" },
        { title: "盘点", name: "Calculate" },
        { title: "供应商", name: "Provide" },
        { title: "结算申请", name: "Apply" },
        { title: "结算审核", name: "Audit" }
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