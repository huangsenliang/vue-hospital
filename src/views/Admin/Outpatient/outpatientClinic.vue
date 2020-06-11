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
        <label class="form-item-label" style="width:100px;color:#7a8794;">诊所Logo</label>
        <div class="form-item-content">
          <!-- logo -->
          <div class="set-clinic-logo-item">
            <!-- 设置 -->
            <div class="set-logo">
              <div class="logo-wrapper">
                <!-- <div class="cover"></div>
            <div class="cropper-wrapper flex">
              <vueCropper
                ref="cropper"
                :img="option.img"
                :outputSize="option.size"
                :outputType="option.outputType"
                :info="true"
                :full="option.full"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :autoCrop="option.autoCrop"
                :autoCropWidth="option.autoCropWidth"
                :autoCropHeight="option.autoCropHeight"
                :fixedBox="option.fixedBox"
                @imgLoad="imgLoad"
              ></vueCropper>
              <div class="btn-wrapper">
                <button class="btn-primary" @click="handleVueCropper">确定</button>
                <br />
                <button class="btn-blank" @click="showVueCropper=false" style="marginTop:10px">取消</button>
              </div>
                </div>-->
                <!-- <div>
              <input
                type="file"
                id="uploads"
                :value="imgFile"
                accept="image/png, image/jpeg, image/gif, image/jpg"
                @change="uploadImg($event, 1)"
              />
              <img :src="option.img" alt />
                </div>-->
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
        <button class="btn-blank">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
/**************全局组件*************/
// 地区选择三级联动
import AreaCascader from "@/components/AreaCascader";
/****************局部组件***********/
import AdminHeader from "./components/adminHeader";
import { VueCropper } from "vue-cropper";
// 输入框
import AdminInput from "../components/adminInput";
// 选取科目弹窗
import DialogSubjectsList from "./dialog/dialogSubjectsList";
export default {
  components: {
    AdminHeader,
    AdminInput,
    AreaCascader,
    DialogSubjectsList,
    VueCropper
  },
  data() {
    return {
      /************上传图片数据********/
      // headImg: "",
      // //剪切图片上传
      // crap: false,
      // previews: {},
      // option: {
      //   img: "", // 裁剪图片的地址
      //   info: true, // 裁剪框的大小信息
      //   outputSize: 1, // 剪切后的图片质量（0.1-1）
      //   full: true, // 输出原图比例截图 props名full
      //   outputType: "png", // 裁剪生成额图片的格式
      //   canMove: true, // 能否拖动图片
      //   original: true, // 上传图片是否显示原始宽高
      //   canMoveBox: true, // 能否拖动截图框
      //   autoCrop: true, // 是否默认生成截图框
      //   autoCropWidth: 740, // 默认生成截图框宽度
      //   autoCropHeight: 400, // 默认生成截图框高度
      //   fixedBox: true // 截图框固定大小  //切图尺寸是固定的，想可修改可把fixedBox设置为false
      // },
      // fileName: "", //本机文件地址
      // downImg: "#",
      // imgFile: "",
      // uploadImgRelaPath: "", //上传后的图片的地址（不带服务器域名）
      /**************************/
      limit: 1,
      dialogImageUrl: "",
      dialogVisible: false,
      showVueCropper: false, // 截图弹窗
      showDialogSubjectsList: false, // 选取科目弹窗显示隐藏控制变量
      selectedData: {
        province: "河北省",
        city: "秦皇岛市",
        county: "北戴河区"
      }, // 地区联动数据
      subjectsData: ["中医科", "全科", "医疗科", "内科"]
    };
  },
  methods: {
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
    handleVueCropper() {
      this.showVueCropper = false;
      console.log(this.option.img);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
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