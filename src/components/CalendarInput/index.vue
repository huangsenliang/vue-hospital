<template>
  <div class="calendar-input">
    <i class="icon-rili iconfont"></i>
    <input type="text" placeholder="选中日期范围" />
    <div class="calendar-wrapper"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.calendar-input {
  position: relative;
  width: 250px;
  i.icon-rili {
    position: absolute;
    top: 8px;
    left: 11px;
    color: @color_96a4b3;
  }
  input {
    width: 100%;
    height: 32px;
    border: 1px solid @color_ced0da;
    border-radius: 4px;
    padding-left: 30px;
  }
}
</style> 