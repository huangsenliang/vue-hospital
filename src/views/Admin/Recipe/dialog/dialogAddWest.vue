<template>
  <!-- 添加西方处方 -->
  <div class="dialog-add-west dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style">
      <!-- 头部 -->
      <div class="add-west-header flex align-items justify-between">
        <h4>新增处方模板</h4>
        <i class="iconfont icon-del"></i>
      </div>
      <!-- 内容 -->
      <div class="add-west-body">
        <div class="form-wrapper">
          <el-form label-position="left" label-width="80px" :model="form">
            <el-form-item label="模板名称">
              <el-input style="width:400px" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="模板归属">
              <el-radio v-model="form.radioValue" label="1" style="marginRight:15px">诊所公用</el-radio>
              <el-radio v-model="form.radioValue" label="2">个人专用</el-radio>
            </el-form-item>
            <el-form-item label="主治病症">
              <el-input style="width:400px" v-model="form.symptoms"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "", // 模板名字
        radioValue: "1", // 模板归属
        symptoms: "" // 主治病症
      } // 表单数据
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-add-west {
  .content-style {
    width: 824px;
    background: #fff;
    // 头部
    .add-west-header {
      padding-left: 24px;
      height: 41px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
    }
    // 内容
    .add-west-body {
			padding: 24px;
			.form-wrapper{
				margin-bottom: 24px;
			}
    }
  }
}
</style>