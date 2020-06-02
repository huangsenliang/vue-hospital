<template>
  <!-- 库存页面 -->
  <div class="inventory">
    <Main-Wrapper>
      <!-- 切换标签 -->
      <div class="inventory-tabs-wrapper">
        <!-- 标签按钮 -->
        <Tabs :tabsList="tabsList"></Tabs>
        <!-- 内容 -->
        <div class="content-body">
          <router-view></router-view>
        </div>
      </div>
    </Main-Wrapper>
  </div>
</template>

<script>
import MainWrapper from "../components/Common/MainWrapper";
import Tabs from "@/components/Common/Tabs";
export default {
  components: {
    MainWrapper,
    Tabs
  },
  data() {
    return {
      tabsList: [
        { title: "药品/物资", name: "Goods" },
        { title: "采购", name: "Purchase" },
        { title: "入库", name: "Cargo" },
        { title: "出库", name: "Outbound" },
        { title: "盘点", name: "Calculate" },
        { title: "供应商", name: "Provide" },
        { title: "结算申请", name: "Apply" },
        { title: "结算审核", name: "Audit" }
      ] // 标签数据
    };
  },
  methods: {
    sendInd() {
      this.$emit("getInd", 7);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style scoped>
@import "../assets/css/Inventory/Inventory.css";
</style>