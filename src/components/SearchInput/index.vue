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

<style lang="less" scoped>
.search-input {
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  position: relative;
  height: 32px;
  line-height: 32px;
  input {
    padding-left: 35px;
    width: 100%;
    height: 100%;
    border: 1px solid #ced0da;
    border-radius: 4px;
  }
  i.icon-soushuo {
    position: absolute;
    left: 10px;
    color: #96a4b3;
  }
}

</style>