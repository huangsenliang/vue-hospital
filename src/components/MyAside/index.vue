<template>
  <!-- 页面布局组件：侧边 -->
  <div id="my-aside">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#my-aside {
  height: 100%;
  width: 260px;
  background-color: #fff;
  border: 1px solid #ced0da;
  border-radius: 3px 3px 0 0;
}

@media screen and (min-width: 1439px) {
  #my-aside {
    width: 300px !important;
  }
}

</style>