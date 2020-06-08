<template>
  <div class="search-input flex">
    <i class="iconfont icon-soushuo"></i>
    <input
      v-model="val"
      :class="{'is-disbled':disabled=='true'?true:false}"
      :disabled="disabled=='true'?true:false"
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder", "disabled", "value"],
  data(){
    return {
      val:this.value
    }
  },
};
</script>

<style lang="less" scoped>
.search-input {
  position: relative;
  height: 32px;
  line-height: 32px;
  input {
    padding-left: 30px;
    padding-right: 10px;
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
.is-disbled {
  background-color: @color_f5f7fa;
  border-color: @color_e4e7eda !important;
  color: @color_c0c4cc;
  cursor: not-allowed !important;
}
</style>