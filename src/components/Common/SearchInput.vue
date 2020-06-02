<template>
  <div class="search-input flex" :style="{width:size}">
    <i class="iconfont icon-soushuo"></i>
    <input :placeholder="placeholder" type="text">
  </div>
</template>

<script>
export default {
  props:["placeholder","size"]
}
</script>

<style scoped>
@import "../../assets/css/Common/SearchInput/SearchInput.css";
</style>