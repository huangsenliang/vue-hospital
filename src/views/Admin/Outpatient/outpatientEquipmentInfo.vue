<template>
  <!-- 医疗设备信息 -->
  <div class="outpatiend-equipment-info" style="height:100%">
    <!-- 头部导航 -->
    <div class="equipment-info-header flex align-items justify-between">
      <el-page-header @back="goBack" :content="type=='add'?'新增医疗设备':'编辑医疗设备'"></el-page-header>
      <div class="btn-wrapper">
        <button class="btn-primary-small" style="height:28px">保存</button>
        <button
          v-show="type=='editor'"
          class="btn-danger-small"
          style="height:28px;marginLeft:10px"
        >删除</button>
      </div>
    </div>
    <!-- 内容 -->
    <div class="equipment-info-body">
      <div class="title-wrapper">
        <h5>基本信息</h5>
      </div>
      <!-- 基本信息 -->
      <div class="form-basic-info">
        <el-form label-position="left" ref="form1" :model="form1" label-width="80px">
          <el-form-item label="医疗设备名称" label-width="120px">
            <el-input style="width:300px" v-model="form1.name"></el-input>
          </el-form-item>
          <el-form-item label="所属科室" label-width="120px">
            <el-select style="width:300px" v-model="form1.selectValue" placeholder="请选择">
              <el-option
                v-for="item in form1.selectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备类型" label-width="120px">
            <el-cascader
              clearable
              style="width:300px"
              v-model="form1.cascadeValue"
              :options="form1.cascaderOptions"
              @change="handleCascaderChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="设备型号" label-width="120px">
            <el-input style="width:300px" v-model="form1.model"></el-input>
          </el-form-item>
          <el-form-item label="品牌型号" label-width="120px">
            <el-input style="width:300px" v-model="form1.brand"></el-input>
          </el-form-item>
          <el-form-item label="产地" label-width="120px">
            <el-input style="width:300px" v-model="form1.place"></el-input>
          </el-form-item>
          <el-form-item label="是否大型设备" label-width="120px">
            <el-radio v-model="form1.radio" label="是" style="marginRight:15px"></el-radio>
            <el-radio v-model="form1.radio" label="否"></el-radio>
          </el-form-item>
          <el-form-item label="购买日期" label-width="120px">
            <el-date-picker
              style="width:300px"
              v-model="form1.buyPickerValue"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="开始使用日期" label-width="120px">
            <el-date-picker
              style="width:300px"
              v-model="form1.usePickerValue"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="使用年限" label-width="120px">
            <el-input style="width:300px" v-model="form1.year"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="title-wrapper">
        <h5>详细参数</h5>
      </div>
      <!-- 详细参数 -->
      <div class="details-info">
        <el-form label-position="left" ref="form2" :model="form2" label-width="80px">
          <el-form-item label="配置" label-width="120px">
            <el-input
              style="width:300px"
              type="textarea"
              placeholder="请输入内容"
              v-model="form2.textarea1"
              maxlength="100"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item style="marginTop:20px" label="技术规格" label-width="120px">
            <el-input
              style="width:300px"
              type="textarea"
              placeholder="请输入内容"
              v-model="form2.textarea2"
              maxlength="100"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "", // 页面类型
      form2: {
        textarea1: "", // 配置
        textarea2: "" // 技术规格
      },
      form1: {
        name: "", // 设备名字
        selectValue: "", // 所属科室
        selectOptions: [], // 所属科室下拉框数据
        model: "", //设备型号
        brand: "", // 设备品牌
        place: "", // 产地
        radio: "否", // 是否大型设备
        usePickerValue: "", // 开始使用日期
        buyPickerValue: "", // 购买日期
        cascaderOptions: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则"
              }
            ]
          }
        ], // 设备类型数据
        cascadeValue: "", // 设备类型值
        year: 2 //使用年限
      } // 表单数据
    };
  },
  methods: {
    //  级联选择器点击出发
    handleCascaderChange() {},
    //   返回上一级路由
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  created() {
    this.type = this.$route.query.type;
  }
};
</script>

<style lang="less" scoped>
.outpatiend-equipment-info {
  overflow-y: auto;
  // 头部导航
  .equipment-info-header {
    padding: 0 24px;
    height: 40px;
    border-bottom: 1px solid @color_ced0da;
  }
  //   内容
  .equipment-info-body {
    padding: 24px;
    .title-wrapper {
      color: #000;
      padding-bottom: 8px;
      border-bottom: 1px dashed #e6eaee;
      margin-bottom: 24px;
      h5 {
        font-weight: 700;
      }
    }
    .form-basic-info {
      margin-bottom: 24px;
      /deep/ .el-form-item__content {
        line-height: 50px;
      }
    }
  }
}
</style>