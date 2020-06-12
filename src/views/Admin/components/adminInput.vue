<template>
  <div class="admin-input">
      <input type="text" v-model="value" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    props:['value','placeholder']
}
</script>

<style lang="less" scoped>
.admin-input {
    input {
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid @color_ced0da;
    }
}
</style>