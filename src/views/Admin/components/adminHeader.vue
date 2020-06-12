<template>
  <!-- 页面头部 -->
  <div class="admin-header flex align-items">
      <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
props:['title']
}
</script>

<style lang="less" scoped>
.admin-header {
    padding: 0 24px;
    height: 40px;
    border-bottom: 1px solid @color_ced0da;
    h4{
        font-weight: 700;
        font-size: 16px;
    }
}
</style>