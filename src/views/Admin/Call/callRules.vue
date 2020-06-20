<template>
  <!-- 叫号:规则 -->
  <div id="call-rules">
    <AdminHeader title="叫号规则"></AdminHeader>
    <div class="rules-body">
      <!-- 是否开启 -->
      <div class="item-set flex align-items">
        <label style="width:130px" class="label">排队叫号</label>
        <div class="content">
          <el-checkbox style="marginRight:10px" v-model="isOpen">开启</el-checkbox>
          <span class="tip">开启后，可通过叫号屏显示叫号排队信息，语音呼叫患者就诊</span>
        </div>
      </div>
      <!-- 表单 -->
      <div class="form-wrapper" v-show="isOpen">
        <div class="line"></div>
        <el-form label-position="left" ref="form" :model="form" label-width="130px">
          <el-form-item label="患者姓名隐私保护">
            <el-checkbox style="marginRight:10px" v-model="form.isPrivacy">开启</el-checkbox>
            <span class="tip">开启后，可通过叫号屏显示叫号排队信息，语音呼叫患者就诊</span>
          </el-form-item>
          <el-form-item label="已上屏顺序锁定">
            <el-checkbox style="marginRight:10px" v-model="form.isSorting">开启</el-checkbox>
            <span class="tip">开启后，已在叫号屏上显示的患者顺序不可更改</span>
          </el-form-item>
          <el-form-item label="医生展示">
            <el-radio v-model="form.radio1" label="1" style="marginRight:20px">仅显示有待叫号患者的医生</el-radio>
            <el-radio v-model="form.radio1" label="2">显示所有排班的医生</el-radio>
          </el-form-item>
          <el-form-item label="预约迟到惩罚">
            <el-checkbox style="marginRight:10px" v-model="form.isDelay">开启</el-checkbox>
            <span class="tip">开启后，可延后迟到患者的叫号顺位，鼓励患者按时到店就诊</span>
            <div>
              预约时段结束后超过
              <el-input style="width:80px;marginLeft:3px" v-model="form.numValue1"></el-input>
              <el-select style="width:100px;margin:0 5px" v-model="form.unitValue">
                <el-option
                  v-for="item in form.optionsUnit"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>分钟
              仍未签到，叫号顺位延后
              <el-input style="width:80px;marginRight:5px" v-model="form.numValue2"></el-input>位
            </div>
          </el-form-item>
          <el-form-item label="显示风格">
            <el-radio v-model="form.radio2" label="1" style="marginRight:20px">浅色淡雅</el-radio>
            <el-radio v-model="form.radio2" label="2">深色通透</el-radio>
          </el-form-item>
        </el-form>
      </div>
      <!-- 按钮 -->
      <div class="btn-wrapper flex align-items">
        <button class="btn-primary">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
/************局部组件************/

import AdminHeader from "../components/adminHeader";
export default {
  components: {
    AdminHeader
  },
  data() {
    return {
      isOpen: false, // 是否开启叫号规则
      form: {
        isPrivacy: false, // 是否开启隐私保护
        isSorting: true, // 是否开启排序
        radio1: "1", // 是否显示排班的医生
        radio2: "2", // 是否显示风格
        isDelay: true, // 是否开启延后迟到患者
        numValue1: "", // 数字1
        numValue2: "", // 数字2
        unitValue: "", // 单位
        optionsUnit: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          }
        ],  // 单位选择数据
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
#call-rules {
  .rules-body {
    padding: 24px;
    // 提示样式
    .tip {
      color: #8493a4;
      font-size: 12px;
    }
    // 是否开启
    .item-set {
      .label {
        color: #8493a4;
      }
      margin-bottom: 24px;
    }
    /deep/ .el-form {
      /deep/ .el-form-item__label {
        color: #8493a4;
      }
    }
    // 按钮
    .btn-wrapper {
      height: 61px;
    }
  }
}
</style>