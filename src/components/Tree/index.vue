<template>
  <!-- 树组件 -->
  <div class="tree">
    <el-tree :data="listData"  accordion ></el-tree>
  </div>
</template>

<script>
export default {
  name: "Tree",
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

