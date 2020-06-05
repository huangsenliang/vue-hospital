<template>
  <!-- 页面布局组件：中间 -->
  <div id="my-main">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#my-main {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  background-color: #fff;
  border: 1px solid @color_ced0da;
  border-radius: 3px;
}
</style>]