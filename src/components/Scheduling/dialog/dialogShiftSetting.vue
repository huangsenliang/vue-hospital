<template>
  <!-- 班次管理设置 -->
  <div class="dialog-shift-setting dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style shift-setting-body">
      <!-- 头部 -->
      <div class="header flex align-items justify-between">
        <h4>排班管理</h4>
        <i class="iconfont icon-del"></i>
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="btn-wrapper flex align-items">
          <button class="btn-blank">增加班次</button>
          <el-checkbox v-model="checked">排班时设置诊室</el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-shift-setting {
  font-size: 14px;
  .shift-setting-body {
    background: #fff;
    width: 500px;
    height: 700px;
    // 头部
    .header {
      padding-left: 16px;
      height: 40px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-weight: 700;
      }
    }
    // 内容
    .content {
      padding: 0 16px;
      .btn-wrapper{
        height: 30px;
      }
    }
  }
}
</style>