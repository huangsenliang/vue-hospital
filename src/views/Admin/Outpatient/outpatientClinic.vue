<template>
  <!-- 诊所设置：诊所设置页面 -->
  <div class="outpatient-clinic hidden-scorll">
    <Admin-Header title="诊所设置"></Admin-Header>
    <div class="outpatient-clinic-body">
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
          <el-input style="width:300px" placeholder="请输入内容" v-model="clinicName" clearable></el-input>
        </div>
      </div>
      <!-- 表单数据:诊所地址 -->
      <div class="form-item flex align-items" style="marginBottom:12px">
        <label class="form-item-label flex align-items">
          <span>诊所地址</span>
        </label>
        <div class="form-item-content">
          <el-cascader style="width:300px" size="medium" :options="options" @change="handleChange"></el-cascader>
        </div>
      </div>
      <div class="form-item flex align-items">
        <label class="form-item-label flex align-items"></label>
        <div class="form-item-content">
          <el-input style="width:300px" v-model="addressValue" clearable></el-input>
        </div>
      </div>
      <!-- 表单数据:联系电话 -->
      <div class="form-item flex align-items">
        <label class="form-item-label flex align-items">
          <span>联系电话1</span>
        </label>
        <div class="form-item-content">
          <el-input style="width:300px" v-model="phone1" clearable></el-input>
        </div>
      </div>
      <!-- 表单数据:联系电话 -->
      <div class="form-item flex align-items">
        <label class="form-item-label flex align-items">
          <span>联系电话2</span>
        </label>
        <div class="form-item-content">
          <el-input style="width:300px" v-model="phone2" clearable></el-input>
        </div>
      </div>
      <!-- 表单数据：执业许可科目 -->
      <div class="form-item flex align-items">
        <label class="form-item-label flex align-items">
          <span>执业许可科目</span>
        </label>
        <div class="form-item-content flex">
          <ul class="flex subjects-list">
            <li v-for="(item,index) of subjectList" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
          <span class="btn-xg" @click="showDialogSubjectsList=true">修改</span>
          <!-- 选取科目弹窗组件 -->
          <div v-show="showDialogSubjectsList">
            <Dialog-Subjects-List
              :subjectList="subjectList"
              @getSubjectsList="getSubjectsList"
              @showDialogSubjectsList="showDialogSubjectsList=false"
            ></Dialog-Subjects-List>
          </div>
        </div>
      </div>
      <!-- 设置logo -->
      <div class="form-item flex">
        <label class="form-item-label" style="width:100px;color:#7a8794;">诊所Logo</label>
        <div class="form-item-content">
          <!-- logo -->
          <div class="set-clinic-logo-item">
            <!-- 设置 -->
            <div class="set-logo">
              <div class="logo-wrapper">
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
              <div class="desc">
                <p style="color:#7a8794;">Logo图片可用于处方打印、叫号屏显示，建议白色或透明背景，推荐尺寸720*180</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="borderTop:1px solid #dadbe0;height:60px" class="flex align-items">
        <button class="btn-blank" @click="addClinic">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
/**************全局组件*************/
// 地区选择三级联动
import AreaCascader from "@/components/AreaCascader";
/****************局部组件***********/
import AdminHeader from "../components/adminHeader";
// 输入框
import AdminInput from "../components/adminInput";
// 选取科目弹窗
import DialogSubjectsList from "./dialog/dialogSubjectsList";
// 接口
import { getClinic, addClinic } from "@/api/admin";
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
export default {
  components: {
    AdminHeader,
    AdminInput,
    AreaCascader,
    DialogSubjectsList
  },
  data() {
    return {
      clinicName: "", // 诊所名字
      address: {}, // 地址
      options: regionData, // 地址数据
      phone1: "", // 电话1
      phone2: "", // 电话2
      logo: "", // logo
      addressValue: "", // 详细地址
      subjectList: [], // 科目数据列表

      /********后端的数据********/
      parame: {
        address: {},
        subjectList: []
      },

      limit: 1,
      dialogImageUrl: "",
      dialogVisible: false,
      showVueCropper: false, // 截图弹窗
      showDialogSubjectsList: false // 选取科目弹窗显示隐藏控制变量
    };
  },
  methods: {
    // 添加诊所
    addClinic() {
      this.parame.address.address = this.addressValue;
      this.parame.clinicName = this.clinicName;
      this.parame.phone1 = this.phone1;
      this.parame.phone2 = this.phone2;
      this.parame.logo = this.logo;

      addClinic(this.parame)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 获取子组件科目列表
    getSubjectsList(data) {
      this.parame.subjectList = data;
      this.subjectList = data;
    },

    //选择本地图片
    uploadImg(e, num) {
      this.showVueCropper = true;
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          _this.option.img = data;
        } else if (num === 2) {
          _this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log(msg);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    /********地址处理*******/

    getAddress() {
      let { province, city, county } = this.address;
      province = province + "省";
      city = city + "市";
      county = county + "区";
      let provinceCode = TextToCode[province].code + "";
      let cityCode = TextToCode[province][city].code + "";
      let countyCode = TextToCode[province][city][county].code + "";
      this.selectedOptions = [provinceCode, cityCode, countyCode];
    },
    handleChange(value) {
      let province = CodeToText[value[0]];
      let county = CodeToText[value[1]];
      let city = CodeToText[value[2]];
      this.parame.address.province = province;
      this.parame.address.county = county;
      this.parame.address.city = city;
      console.log(this.parame);
    }
  },
  created() {
    // 获取诊所信息
    getClinic({ id: 1 })
      .then(response => {
        let data = response.data.data;
        this.clinicName = data.clinicName;
        this.address = data.address;
        this.phone1 = data.phone1;
        this.phone2 = data.phone2;
        this.logo = data.logo;
        this.addressValue = data.address.address;
        this.subjectList = data.subjectList;
        this.getAddress();
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.outpatient-clinic {
  height: 100%;
  overflow-y: auto;
  .outpatient-clinic-body {
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
        .set-clinic-logo-item {
          .logo-wrapper {
            position: relative;
            width: 300px;
            height: 75px;
            &:hover {
              > .base {
                display: inline-block;
              }
            }
            .logo {
              width: 100%;
              height: 100%;
            }
            // 遮罩
            .base {
              display: none;
              cursor: pointer;
              position: absolute;
              left: 0;
              right: 0;
              width: 300px;
              height: 75px;
              // 遮罩
              .cover {
                position: absolute;
                opacity: 0.4;
                background: #000;
                width: 100%;
                height: 100%;
              }
              .photo {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -15px;
                margin-top: -15px;
                width: 35px;
                height: 35px;
                background: #fff;
                border-radius: 50%;
                img {
                  width: 25px;
                  height: 25px;
                }
              }
            }
          }
        }
      }
    }

    .set-clinic-logo-item {
      .set-logo {
        // logo设置
        .logo-wrapper {
          margin-bottom: 20px;
          // 遮罩层
          // .cover {
          //   position: fixed;
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;
          //   background: #000;
          //   opacity: 0.4;
          //   z-index: 1888;
          // }
          // 截图弹窗
          // .cropper-wrapper {
          //   position: fixed;
          //   top: 0;
          //   left: 50%;
          //   transform: translateX(-50%);
          //   z-index: 1999;
          //   width: 700px;
          //   height: 100%;
          //   .btn-wrapper {
          //     position: absolute;
          //     right: -100px;
          //     bottom: 100px;
          //   }
          // }
        }
      }
    }

    // .info {
    //   width: 720px;
    //   margin: 0 auto;
    //   .oper-dv {
    //     height: 20px;
    //     text-align: right;
    //     margin-right: 100px;
    //     a {
    //       font-weight: 500;
    //       &:last-child {
    //         margin-left: 30px;
    //       }
    //     }
    //   }
    //   .info-item {
    //     margin-top: 15px;
    //     label {
    //       display: inline-block;
    //       width: 100px;
    //       text-align: right;
    //     }
    //     .sel-img-dv {
    //       position: relative;
    //       .sel-file {
    //         position: absolute;
    //         width: 90px;
    //         height: 30px;
    //         opacity: 0;
    //         cursor: pointer;
    //         z-index: 2;
    //       }
    //       .sel-btn {
    //         position: absolute;
    //         cursor: pointer;
    //         z-index: 1;
    //       }
    //     }
    //   }
    // }

    // .cropper-content {
    //   display: flex;
    //   display: -webkit-flex;
    //   justify-content: flex-end;
    //   -webkit-justify-content: flex-end;
    //   .cropper {
    //     border: 1px solid red;
    //     width: 200px;
    //     height: 200px;
    //   }
    //   .show-preview {
    //     flex: 1;
    //     -webkit-flex: 1;
    //     display: flex;
    //     display: -webkit-flex;
    //     justify-content: center;
    //     -webkit-justify-content: center;
    //     .preview {
    //       overflow: hidden;
    //       border-radius: 50%;
    //       border: 1px solid #cccccc;
    //       background: #cccccc;
    //       margin-left: 40px;
    //     }
    //   }
    // }
    // .cropper-content .show-preview .preview {
    //   margin-left: 0;
    // }
  }
}
</style>