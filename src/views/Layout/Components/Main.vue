<template>
  <div id="main-wrap" >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "layoutMain"
};
</script>

<style lang="less" scoped>
// 媒体查询
@media screen and (min-width: 1439px) {
  #main-wrap {
    max-width: 1420px;
    margin: 10px auto 0;
  }
}

#main-wrap {
  height:calc(100% - 59px);
  margin-top: 10px;
}
</style>