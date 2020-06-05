<template>
  <!-- 树组件 -->
  <div class="my-tree">
    <el-tree :data="listData"  accordion ></el-tree>
  </div>
</template>

<script>
export default {
  name: "my-Tree",
  props: ["listData"],
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
</style> 

