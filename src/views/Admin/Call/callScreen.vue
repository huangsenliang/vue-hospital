<template>
  <!-- 叫号:屏幕 -->
  <div id="call-screen" class="flex flex-column align-items justify-center" style="height:100%">
    <i class="icon-rizhiguanli iconfont"></i>
    <p class="txt1">未绑定叫号屏</p>
    <p class="txt2">如需使用，请联系你的客户成功顾问：6666666</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#call-screen {
  i.icon-rizhiguanli {
    color: #ccc;
    font-size: 50px;
    margin-bottom: 16px;
  }
  .txt1 {
    color: #7a8794;
    margin-bottom: 8px;
  }
  .txt2 {
    color: #8493a4;
    font-size: 14px;
  }
}
</style>