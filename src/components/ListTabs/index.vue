<template>
  <!-- 列表切换标签组件 -->
  <div class="list-tabs flex justify-between align-items">
    <!-- 标签 -->
    <ul class="tabs flex">
      <li class="tab" :class="{active:tabNum==0}" @click="tabNum=0">
        <span>门诊</span>
        <span>4</span>
      </li>
      <li class="tab" @click="tabNum=1" :class="{active:tabNum==1}">
        <span>网诊</span>
      </li>
    </ul>
    <!-- 日历 -->
    <div class="date-picker">
      <span>05-06</span>
      <i class="iconfont icon-xia"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabNum:0
    }
  }
};
</script>

<style lang="less" scoped>
/*标签头部*/
.list-tabs {
  font-size: 12px;
  padding: 0 8px 0 12px;
  line-height: 36px;
  background: @color_f5f7fb;
  border-bottom: 1px solid @color_dadbe0;
  .tabs {
    .tab {
      cursor: pointer;
      color: @color_7a8794;
      padding: 0 2px;
      margin-right: 10px;
    }
    .active {
      color: #000;
      font-weight: 700;
      border-bottom: 2px solid @color_007aff;
    }
  }
  /*时间选择日历*/
  .date-picker {
    .icon-xia {
      color: @color_96a4b3;
      margin-left: 5px;
    }
  }
}
</style>