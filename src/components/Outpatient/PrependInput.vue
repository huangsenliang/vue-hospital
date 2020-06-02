<template>
  <div class="prepend-input">
    <input @click="showPrependInput=true" type="text" :placeholder="placeholder" />
    <i class="icon-jia iconfont"></i>
    <div v-if="showPrependInput" v-clickoutside="handleClickOutSideShowPrependInput" class="prepend-table-wrapper flex">
      <ul class="prepend-table">
        <li v-for="(item,index) of prependList" :key="index" class="flex prepend-item">
          <span>{{item.name}}</span>
          <span>{{item.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder","prependList"],
  data() {
    return {
      showPrependInput:false,
    };
  },
  methods:{
    // 处理：点击除了本元素外触发
    handleClickOutSideShowPrependInput(){
      this.showPrependInput = false;
    },
  }
};
</script>

<style scoped>
@import "../../assets/css/Outpatient/PrependInput/PrependInput.css";
</style>