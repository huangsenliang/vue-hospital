<template>
  <!-- 下拉选择框组件 -->
  <div class="select-input">
    <!-- 通过父组件是否传了options来决定禁用状态 -->
    <el-select v-model="value" :disabled="disabled=='true'?true:false" filterable :placeholder="placeholder">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ["value", "options", "placeholder", "disabled"],
  data() {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.select-input {
  .el-input__inner {
    width: 120px;
    height: 32px;
    border-radius: 4px;
  }
}

</style>