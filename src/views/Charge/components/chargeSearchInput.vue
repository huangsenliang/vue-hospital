<template>
  <!-- 收费页面搜索框 -->
  <div class="charge-search-input flex align-items">
    <Search-Input style="marginRight:5px" placeholder="姓名、手机、诊断"></Search-Input>
    <button class="btn-success-samll">零售收费</button>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
export default {
  components: {
    SearchInput
  }
};
</script>

<style lang="less" scoped>
.charge-search-input {
  height: 48px;
  padding: 0 8px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #dadbe0;
  border-radius: 3px 3px 0 0;
}
</style>