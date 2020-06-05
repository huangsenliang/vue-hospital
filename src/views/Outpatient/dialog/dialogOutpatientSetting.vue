<template>
  <div class="dialog-outpatiend-setting">
    <!-- 头部 -->
    <div class="setting-title flex">
      <span>门诊设置</span>
      <span class="btn">恢复默认</span>
    </div>
    <!-- 内容 -->
    <div class="setting-content">
      <h5>默认病历分类</h5>
      <div style="marginLeft:10px">
        <el-radio v-model="radio" label="西医病历">西医病历</el-radio>
        <el-radio v-model="radio" label="中医病历">中医病历</el-radio>
      </div>
    </div>
    <div class="cut-line"></div>
    <div class="setting-content">
      <h5>西医病历字段</h5>
      <div style="marginLeft:10px">
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">现病史</el-checkbox>
        <el-checkbox v-model="checked">既往史</el-checkbox>
        <el-checkbox v-model="checked">体格检查</el-checkbox>
        <el-checkbox v-model="checked">望闻切诊</el-checkbox>
        <el-checkbox v-model="checked">诊断</el-checkbox>
        <el-checkbox v-model="checked">辩证</el-checkbox>
        <el-checkbox v-model="checked">治法</el-checkbox>
      </div>
    </div>
    <div class="setting-content">
      <h5>中医病历字段</h5>
      <div style="marginLeft:10px">
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
        <el-checkbox v-model="checked">主诉</el-checkbox>
      </div>
    </div>
    <div class="cut-line"></div>
    <div class="setting-content">
      <h5>处方类型</h5>
      <div style="marginLeft:10px">
        <el-checkbox v-model="checked">西药处方</el-checkbox>
        <el-checkbox v-model="checked">注射输液</el-checkbox>
        <el-checkbox v-model="checked">中医处方</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
      radio: "西医病历" // 病历类型
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-outpatiend-setting {
  position: absolute;
  top: 32px;
  right: 5px;
  z-index: 8888;
  color: @color_606266;
  font-weight: normal;
  width: 410px;
  padding: 12px 24px 24px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e6eaee;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  margin-top: 2px;
  /*头部*/
  .setting-title {
    color: #7a8794;
    padding-bottom: 12px;
    border-bottom: 1px solid #dadbe0;
    margin-bottom: 16px;
    justify-content: space-between;
    .btn {
      color: @color_2680f7;
    }
  }
  .setting-content {
    h5 {
      font-weight: 700;
      font-size: 14px;
      color: #000;
      margin-top: 20px;
    }
    .el-checkbox {
      width: 60px;
    }
  }
  .cut-line {
    border-bottom: 1px dashed #dadbe0;
    margin: 14px 0 4px;
  }
}
</style>