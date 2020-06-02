<template>
  <!-- 就诊历史组件 -->
  <div class="history-record">
    <div class="title">
      <h5>
        就诊历史
        <span>(2)</span>
      </h5>
    </div>
    <ul class="history-table-wrapper">
      <li v-for="(item,index) of 5" :key="index" class="flex row">
        <span class="diagnosis">李思思</span>
        <span class="name">钟南山</span>
        <span class="time">05-06</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../assets/css/Common/HistoryRecord/HistoryRecord.css";
</style>>
