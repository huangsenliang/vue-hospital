<template>
  <div class="calendar-input">
    <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:'',
    }
  }
};
</script>

<style lang="less" scoped>
.calendar-input {
  position: relative;
  width: 220px;
  input {
    width: 100%;
    height: 32px;
    border: 1px solid @color_ced0da;
    border-radius: 4px;
    padding-left: 30px;
  }
}
</style> 