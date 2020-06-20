<template>
  <!-- 药房：基础设置 -->
  <div id="pharmacy-basis">
    <Admin-Header title="基础设置"></Admin-Header>
    <div class="basis-body">
      <!-- 表单 -->
      <div class="setting-item flex">
        <label class="label">
          <span>费用展示</span>
        </label>
        <div class="content">
          <div>
            <el-radio v-model="radio" label="1">展示价格明细，展示价格总计</el-radio>
          </div>
          <div>
            <el-radio v-model="radio" label="2">不展示价格明细，展示价格总计</el-radio>
          </div>
          <div>
            <el-radio v-model="radio" label="3">不展示价格明细，不展示价格总计</el-radio>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <!-- 按钮 -->
      <div class="btn-wrapper flex align-items">
        <button class="btn-primary">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/adminHeader";
export default {
  components: {
    AdminHeader
  },
  data() {
    return {
      radio: "2"
    };
  }
};
</script>

<style lang="less" scoped>
#pharmacy-basis {
  // 内容
  .basis-body {
    padding: 24px;
    .setting-item {
      line-height: 30px;
      margin-bottom: 24px;
      .label {
        width: 100px;
        // color: #7a8794;
      }
    }
  }
  // 按钮
  .btn-wrapper {
    height: 61px;
  }
}
</style>