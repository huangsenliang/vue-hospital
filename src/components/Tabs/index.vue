<template>
  <div class="tabs">
    <!-- 标签按钮 -->
    <ul class="flex">
      <li v-for="(item,index) of tabsList" :key="index">
        <router-link
          class="tab-item"
          :class="{'is-selected':item.path==$store.state.inventory.inventoryTabName}"
          :to="{path:item.path}"
        >
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
    <!-- 内容 -->
    <div class="content-body" style="height:calc(100% - 48px)">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabsList"],
  data() {
    return {};
  },
  methods: {
    // 处理：标签切换
    handleTabs(name, index) {
      this.tabNum = index;
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="less" scoped>
/*切换标签*/
.tabs ul {
  width: 100%;
  padding-left: 16px;
  height: 48px;
  font-size: 16px;
  line-height: 48px;
  background: #fff;
  border-bottom: 1px solid @color_dadbe0;
  li {
    margin-right: 40px;
  }
  .tab-item {
    display: inline-block;
    cursor: pointer;
    color: #7a8794;
  }
  // .tab-item:first-child {
  //   margin-left: 0;
  // }
  // 激活样式
  .is-selected {
    border-bottom: 2px solid @color_007aff;
  }
  // 内容
  .content-body {
    border: 1px solid red;
  }
}
</style> 
