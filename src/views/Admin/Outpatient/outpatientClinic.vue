<template>
  <!-- 诊所设置：诊所设置页面 -->
  <div class="outpatient-clinic">
    <!-- 提示 -->
    <div class="info-tips flex align-items">
      <i class="iconfont icon-tishi"></i>
      <p>请确保以下信息填写真实有效，开通微诊所后，患者可在微诊所中查看诊所信息</p>
    </div>
    <!-- 表单数据:诊所名称 -->
    <div class="form-item flex align-items" style="marginTop:20px">
      <label class="form-item-label flex align-items">
        <span>诊所名称</span>
        <i>*</i>
      </label>
      <div class="form-item-content">
        <Admin-Input></Admin-Input>
      </div>
    </div>
    <!-- 表单数据:诊所地址 -->
    <div class="form-item flex align-items" style="marginBottom:12px">
      <label class="form-item-label flex align-items">
        <span>诊所地址</span>
      </label>
      <div class="form-item-content">
        <Area-Cascader :selectedData="selectedData"></Area-Cascader>
      </div>
    </div>
    <div class="form-item flex align-items">
      <label class="form-item-label flex align-items"></label>
      <div class="form-item-content">
        <Admin-Input></Admin-Input>
      </div>
    </div>
    <!-- 表单数据:联系电话 -->
    <div class="form-item flex align-items">
      <label class="form-item-label flex align-items">
        <span>联系电话1</span>
      </label>
      <div class="form-item-content">
        <Admin-Input></Admin-Input>
      </div>
    </div>
    <!-- 表单数据:联系电话 -->
    <div class="form-item flex align-items">
      <label class="form-item-label flex align-items">
        <span>联系电话2</span>
      </label>
      <div class="form-item-content">
        <Admin-Input></Admin-Input>
      </div>
    </div>
    <!-- 表单数据：执业许可科目 -->
    <div class="form-item flex align-items">
      <label class="form-item-label flex align-items">
        <span>执业许可科目</span>
      </label>
      <div class="form-item-content flex">
        <ul class="flex subjects-list">
          <li v-for="(item,index) of subjectsData" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
        <span class="btn-xg" @click="showDialogSubjectsList=true">修改</span>
        <!-- 选取科目弹窗组件 -->
        <div v-show="showDialogSubjectsList">
          <Dialog-Subjects-List @showDialogSubjectsList="showDialogSubjectsList=false"></Dialog-Subjects-List>
        </div>
      </div>
    </div>
    <!-- 设置logo -->
    <div class="form-item flex">
      <label class="form-item-label" style="width:100px">诊所Logo</label>
      <div class="form-item-content">
        <!-- logo -->
        <div class="set-clinic-logo-item">
          <div class="logo-wrapper">
            <!-- 遮罩层 -->
            <div class="base">
              <img src alt />
            </div>
            <img class="logo" src="../../../assets/images/up_logo.png" alt />
          </div>
          <div class="desc">
            <p>Logo图片可用于处方打印、叫号屏显示，建议白色或透明背景，推荐尺寸720*180</p>
          </div>
        </div>
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
// 选取科目弹窗
import DialogSubjectsList from "./dialog/dialogSubjectsList";
export default {
  components: {
    AdminInput,
    AreaCascader,
    DialogSubjectsList
  },
  data() {
    return {
      showDialogSubjectsList: false, // 选取科目弹窗显示隐藏控制变量
      selectedData: {
        province: "河北省",
        city: "秦皇岛市",
        county: "北戴河区"
      }, // 地区联动数据
      subjectsData: ["中医科", "全科", "医疗科", "内科"]
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
    // 左侧样式
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
    // 右侧表单数据
    .form-item-content {
      // 执业许可科目
      .subjects-list {
        li:not(:last-child)::after {
          content: "/";
          display: inline;
          padding: 0 5px;
        }
      }
      // 修改按钮
      .btn-xg {
        cursor: pointer;
        color: @color_007aff;
        margin-left: 15px;
      }
      // 设置logo
      .set-clinic-logo-item{
        .logo-wrapper{
          width: 300px;
          height: 75px;
          border: 1px solid red;
          .logo{
            border: 1px solid #ff0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>