<template>
  <!-- 管理页面:左侧导航 -->
  <div class="admin-nav" style="height:100%">
    <My-Main>
      <router-view></router-view>
    </My-Main>
  </div>
</template>

<script>
/************************全局组件**************/
import MyMain from "@/components/MyMain";
export default {
  components: {
    MyMain
  }
};
</script>

<style>
</style>