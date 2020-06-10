<template>
  <!-- 管理页面布局组件 -->
  <div id="admin-layout" style="height:100%" class="flex">
    <Admin-Nav></Admin-Nav>
    <Admin-Main class="flex-item" style="marginLeft:10px"></Admin-Main>
  </div>
</template>

<script>
/***************局部布局组件************/
import AdminNav from "./components/AdminNav";
import AdminMain from "./components/AdminMain";
export default {
  components: {
    AdminNav,
    AdminMain 
  }
};
</script>

<style>
</style>