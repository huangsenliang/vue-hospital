<template>
  <!-- 成员信息-->
  <div class="outpatient-members-info hidden-scorll" style="height:100%">
    <!-- 头部导航 -->
    <div class="members-info-header flex align-items justify-between">
      <el-page-header @back="goBack" :content="type=='add'?'新增成员':'成员详情'"></el-page-header>
      <div class="btn-wrapper">
        <button class="btn-primary-small" style="height:28px">保存</button>
      </div>
    </div>
    <div class="members-info-body">
      <!-- 姓名电话 -->
      <section>
        <div class="content flex">
          <div class="head-img"></div>
          <div class="cont">
            <Admin-Input style="width:160px" placeholder="姓名"></Admin-Input>
            <Admin-Input style="width:160px;marginTop:10px" placeholder="电话"></Admin-Input>
          </div>
        </div>
      </section>
      <!-- 角色和权限 -->
      <section class="base-info-section">
        <div class="section-title">
          <h4>角色权限</h4>
        </div>
        <!-- 行1：角色 -->
        <div class="form-item role-item flex">
          <label class="form-item-label">他的角色</label>
          <div class="form-item-content">
            <ul class="checkbox-wrapper flex">
              <li>
                <el-checkbox v-model="checked">医生</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked">护士</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked">检验师</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked">理疗师</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked">医助</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="checked">其他</el-checkbox>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <!-- 行2：权限 -->
        <div class="form-item flex" style="marginTop:24px">
          <label class="form-item-label">
            <span>他的权限模块</span>
          </label>
          <div class="form-item-content">
            <span @click="showDialogSubjectsList=true" style="color:#007aff; cursor: pointer;">修改</span>
            <dialog-Permissions-List
              v-show="showDialogSubjectsList"
              @close="showDialogSubjectsList=false"
            ></dialog-Permissions-List>
          </div>
        </div>
      </section>
      <!-- 执业简介 -->
      <section>
        <div class="section-title flex">
          <h4 class="title">执业简介</h4>
          <p class="txt">执业照、职称、介绍信息尽量输入完整，患者挂号预约时可查看</p>
        </div>
        <div class="form-item flex">
          <!-- 上传营业执照 -->
          <label class="form-item-label">执业照</label>
          <div class="form-item-content">
            <el-upload
              :limit="limit"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>
        <div class="form-item flex">
          <label class="form-item-label">医生介绍</label>
          <div class="form-item-content">
            <el-input placeholder="最多可输入2000字" type="textarea" v-model="textareaVale"></el-input>
          </div>
        </div>
        <div class="form-item flex">
          <label class="form-item-label">职称信息</label>
          <div class="form-item-content">
            <el-select style="marginRight:10px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/*************局部组件************/
import AdminHeader from "../components/adminHeader";
import AdminInput from "../components/adminInput";
// 权限列表选择弹窗
import dialogPermissionsList from "./dialog/dialogPermissionsList";

export default {
  components: {
    AdminInput,
    AdminHeader,
    dialogPermissionsList
  },
  data() {
    return {
      type: "", // 页面类型
      options: [],
      value: "",
      textareaVale: "",
      limit: 1, // 上传数量
      checked: false,
      showDialogSubjectsList: false // 权限列表选择弹窗显示隐藏控制变量
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    /*********图片上传**********/
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  created() {
    this.type = this.$route.query.type;
    if (this.type === "editor") {
      let userId = this.$route.query.userId;
    }
  }
};
</script>

<style lang="less" scoped>
.outpatient-members-info {
  overflow-y: auto;
  .members-info-header {
    padding: 0 24px;
    height: 40px;
    border-bottom: 1px solid @color_ced0da;
  }
  .members-info-body {
    //  姓名电话
    section {
      padding: 24px;
      //   头像
      .head-img {
        width: 64px;
        height: 64px;
        border-radius: 3px;
        background-color: @color_f0f0f0;
        margin-right: 78px;
      }
      // 标题
      .section-title {
        color: #000;
        padding-bottom: 8px;
        border-bottom: 1px dashed @color_e6eaee;
        margin-bottom: 24px;
        h4.title {
          font-weight: 700;
          width: 130px;
        }
        p.txt {
          color: #8493a4;
          font-size: 12px;
        }
      }
      //   共有的表单样式
      .form-item {
        margin-bottom: 24px;
        .form-item-label {
          width: 130px;
        }
        .el-textarea {
          /deep/ .el-textarea__inner {
            width: 448px;
            height: 120px;
          }
        }
        // 上传营业照
        .form-item-content {
          /deep/ .el-upload--picture-card {
            width: 80px;
            height: 80px;
            line-height: 80px;
          }
        }
        // 医生介绍
      }
    }
    // 角色和权限
    section.base-info-section {
      //   表单
      .role-item {
        border-bottom: 1px dashed @color_e6eaee;
        padding: 24px 0;
        .checkbox-wrapper {
          > li {
            margin-right: 25px;
          }
        }
      }
    }
  }
}
</style>