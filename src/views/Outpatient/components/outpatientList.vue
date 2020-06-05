<template>
<!-- 门诊患者列表组件 -->
  <ul class="outpatiend-list">
    <li
      :class="{active:itemNum==index}"
      @click="itemNum=index"
      v-for="(item,index) of 10"
      :key="index"
      class="row flex"
    >
      <span>小新</span>
      <span style="width:60px">05-06</span>
      <span style="width:44px">已收</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      itemNum: 0 // 左侧表格内容激活样式控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.outpatiend-list {
  .row {
    cursor: pointer;
    height: 48px;
    padding: 0 5px 0 12px;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    border-bottom: 1px solid @color_eff3f6;
    span {
      padding: 0 5px;
    }
    span:nth-child(1) {
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    span:nth-child(n + 2) {
      font-size: 12px;
    }
    span:last-child {
      color: @color_96a4b3;
    }
  }
  /*激活样式*/
  .active {
    background: @color_blue;
    color: #fff;
    span:last-child {
      color: #fff;
    }
  }
}
</style>