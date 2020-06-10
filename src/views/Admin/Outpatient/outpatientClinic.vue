<template>
  <!-- 诊所设置：诊所设置页面 -->
  <div class="outpatient-clinic">
    <!-- 提示 -->
    <div class="info-tips flex align-items">
      <i class="iconfont icon-tishi"></i>
      <p>请确保以下信息填写真实有效，开通微诊所后，患者可在微诊所中查看诊所信息</p>
    </div>
    <!-- 表单数据:1 -->
    <div class="form-item flex align-items" style="marginTop:20px">
      <label class="form-item-label flex align-items">
        <span>诊所名称</span>
        <i>*</i>
      </label>
      <div class="form-item-content">
        <Admin-Input></Admin-Input>
      </div>
    </div>
    <!-- 表单数据:2 -->
    <div class="form-item flex align-items" style="marginTop:20px">
      <label class="form-item-label flex align-items">
        <span>诊所地址</span>
      </label>
      <div class="form-item-content">
        <Area-Cascader :selectedData='selectedData'></Area-Cascader>
      </div>
    </div>
  </div>
</template>

<script>
/**************全局组件*************/
// 地区选择三级联动
import AreaCascader from "@/components/AreaCascader";
/****************局部组件***********/

// 输入框
import AdminInput from "../components/adminInput";
export default {
  components: {
    AdminInput,
    AreaCascader
  },
  data() {
    return {
      selectedData: {
        province: "河北省",
        city: "秦皇岛市",
        county:"北戴河区"
      }  // 地区联动数据
    };
  }
};
</script>

<style lang="less" scoped>
.outpatient-clinic {
  padding: 0 24px;
  // 提示
  .info-tips {
    color: @color_f93;
    margin-top: 12px;
    i {
      font-size: 14px;
      width: 14px;
      height: 16px;
      margin-right: 8px;
    }
  }
  // 表单样式
  .form-item {
    margin-bottom: 24px;
    .form-item-label {
      width: 100px;
      text-align: left;
      i {
        color: @color_f93;
        margin-left: 4px;
        padding-top: 4px;
        display: inline-block;
        font-size: 14px;
      }
      > span {
        color: #7a8794;
        white-space: nowrap;
      }
    }
  }
}
</style>