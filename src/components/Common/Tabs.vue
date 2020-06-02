<template>
  <div class="tabs">
    <!-- 标签按钮 -->
    <ul class="flex">
      <li
        @click="handleTabs(item.name,index)"
        v-for="(item,index) of tabsList"
        :key="index"
        class="tab-item"
        :class="{'is-selected':index==tabNum}"
      >
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tabsList"],
  data() {
    return {
      tabNum: 0
    };
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

<style scoped>
@import "../../assets/css/Common/Tabs/Tabs.css";
</style>

