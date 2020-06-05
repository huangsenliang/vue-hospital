<template>
  <!-- 就诊历史组件 -->
  <div class="history-list">
    <!-- 头部 -->
    <div class="history-title flex">
      <span>就诊历史(0)</span>
    </div>
    <!-- 内容 -->
    <ul class="history-table">
      <li
        @click="showDialogHistory=!showDialogHistory"
        v-for="(item,index) of 8"
        :key="index"
        class="history-list-item"
      >
        <div class="flex list-item-content">
          <span>胃肠炎</span>
          <span>李阳</span>
          <span>今天</span>
        </div>
      </li>
    </ul>
    <!-- 弹窗 -->
    <div class="dialog-wrapper" @closeDialog="handleCloseDialogHistory" v-show="showDialogHistory">
      <Dialog-History></Dialog-History>
    </div>
  </div>
</template>

<script>
import DialogHistory from "./dialog/dialogHistory";
export default {
  components: {
    DialogHistory
  },
  data() {
    return {
      showDialogHistory: false // 弹窗显示
    };
  },
  methods: {
    // 点击关闭弹窗
    handleCloseDialogHistory() {
      this.showDialogHistory = false;
    }
  }
};
</script>

<style lang="less" scoped>
.history-list {
  position: relative;
  color: @color_7a8794;
  /*头*/
  .history-title {
    height: 36px;
    line-height: 36px;
    color: #000;
    background-color: @color_f2f2f2;
    padding: 0 11px;
    overflow: hidden;
    font-weight: 700;
    border-top: 1px solid #ced0da;
    font-size: 12px;
    border-bottom: 1px solid #dadbe0;
  }
  // 表
  .history-table {
    height: calc(100% - 36px);
    overflow-y: auto;
    .history-list-item {
      padding: 0 11px;
      background: #fff;
      .list-item-content {
        height: 40px;
        align-items: center;
        border-bottom: #eee solid 1px;
        span:nth-child(1) {
          flex: 2;
        }
        span:nth-child(2) {
          flex: 1;
        }
        span:nth-child(3) {
          flex: 1;
        }
      }
    }
  }
  // 弹窗
  .dialog-wrapper {
    position: absolute;
    top: -280px;
    right: -400px;
  }
}
</style>