<template>
  <!-- 门诊历史记录组件 -->
  <div class="outpatient-history">
    <!-- 头部标题 -->
    <div class="history-title flex">
      <h4>就诊历史</h4>
      <span>(10)</span>
    </div>
    <!-- 表格内容 -->
    <ul class="history-table">
      <li
        @click="showHistorydialog=!showHistorydialog"
        v-for="(item,index) of 6"
        :key="index"
        class="row flex"
      >
        <span class="designation">高血压</span>
        <span>钟南山</span>
        <span class="date">05-05</span>
        <!-- 弹窗信息 -->
        <div v-show="showHistorydialog" class="history-popper-wrapper">
          <!-- 引入自定义历史弹窗组件 -->
          <Dialog-Outpatient-History></Dialog-Outpatient-History>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入弹窗组件
import DialogOutpatientHistory from "../dialog/dialogOutpatientHistory";
export default {
  components: {
    DialogOutpatientHistory
  },
  data() {
    return {
      showHistorydialog: false // 历史记录详情弹窗控制变量
    };
  },
  methods: {
    // 处理：点击处理此元素外触发
    // handleClickOutSideshowHistorydialog() {
    //   this.showHistorydialog = false;
    //   console.log(222);
    // }
  }
};
</script>

<style lang="less" scoped>
.outpatient-history {
  height: 100%;
  /*头部标题*/
  .history-title {
    -ms-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 12px;
    height: 36px;
    line-height: 36px;
    color: #000;
    background-color: @color_f2f2f2;
    padding: 0 11px;
    overflow: hidden;
    font-weight: 700;
    border-top: 1px solid @color_ced0da;
    font-size: 12px;
    border-bottom: 1px solid @color_ced0da;
    h4 {
      font-weight: 700;
    }
  }
  /*表格内容*/
  .history-table {
    // border: 1px solid;
    height: calc(100% - 36px);
    overflow-y: auto;
    .row {
      position: relative;
      color: @color_7a8794;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      height: 40px;
      padding: 0 11px;
      border-bottom: 1px solid #e6eaee;
      cursor: pointer;
      span.designation {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      span.date {
        width: 60px;
        text-align: right;
      }
      /*历史弹窗*/
      .history-popper-wrapper {
        position: fixed;
        bottom: 37px;
        left: 30%;
        width: 348px;
        // height: 300px;
      }
    }
  }
}
</style>