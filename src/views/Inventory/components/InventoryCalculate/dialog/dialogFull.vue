<template>
  <!-- 全量盘点弹窗 -->
  <div class="dialog-full dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style full-content">
      <!-- 头部 -->
      <div class="popper-header flex">
        <h4>全量盘点</h4>
        <i
          @click="$emit('showDialogFull')"
          class="icon-del iconfont"
          style="fontSize:25px;cursor:pointer;"
        ></i>
      </div>
      <!-- 内容 -->
      <div class="popper-body hidden-scorll">
        <!-- 进度条 -->
        <div class="check-step-wrapper flex">
          <span :class="{'is-active':tabsNum==0}">1.下载全量盘点表</span>
          <i class="iconfont icon-youjiantou"></i>
          <span :class="{'is-active':tabsNum==1}">2.上传全量盘点表</span>
          <i class="iconfont icon-youjiantou"></i>
          <span :class="{'is-active':tabsNum==2}">3.完成盘点</span>
        </div>

        <div class="check-content-wrapper">
          <!-- 1.下载全量盘点表 -->
          <div v-show="tabsNum==0" class="download-item">
            <div class="item">
              <span style="marginRight:16px">1.下载全量盘点表</span>
              <button @click="showDialogDownload=true" class="btn-ghost">点击下载</button>
              <div v-show="showDialogDownload">
                <Dialog-Full-Download @showDialogDownload="showDialogDownload=false"></Dialog-Full-Download>
              </div>
            </div>
            <div class="item">
              <span>2.填写全量盘点表</span>
              <p class="txt">清点数量，在全量盘点表中填写实际库存数量</p>
            </div>
          </div>
          <!-- 2.上传全量盘点表 -->
          <div v-show="tabsNum==1" class="upload-item">
            <div class="up-load-wrapper">
              <el-upload
                class="upload-demo"
                drag
                :before-upload="beforeUpload"
                :on-exceed="handleExceed"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="1"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">只能上传xlsx文件</div>
              </el-upload>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div v-show="tabsNum==0" class="btn-wrapper flex align-items justify-end">
        <button @click="tabsNum=1" style="marginRight:10px;width:120px" class="btn-primary">我已完成填写</button>
        <button @click="$emit('showDialogFull')" class="btn-blank">取消</button>
      </div>
      <div v-show="tabsNum==1" class="btn-wrapper flex align-items">
        <p
          style="color: rgb(122, 135, 148);font-size: 12px;marginRight:30px"
        >系统将自动把所有表格药品盘点数据汇总（相同药品数量相加）</p>
        <div class="footer-right">
          <button @click="tabsNum=0" style="marginRight:16px" class="btn-blank">上一步</button>
          <button style="marginRight:16px" class="btn-blank">下一步</button>
          <button @click="$emit('showDialogFull')" class="btn-blank">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/********************局部组件******************/

// 下载全景盘点弹窗组件
import DialogFullDownload from "../dialog/dialogFullDownload";
export default {
  components: {
    DialogFullDownload
  },
  data() {
    return {
      checked1: false, // 盘点数据包含批次信息
      showDialogDownload: false, // 下载弹窗盒子显示隐藏控制变量
      tabsNum: 0 // 切换变量
    };
  },
  methods: {
    // 处理：限制上传文件
    beforeUpload(file) {
      if (file.type == "" || file.type == null || file.type == undefined) {
        const FileExt = file.name.replace(/.+\./, "").toLowerCase();
        if (
          FileExt == "xls" ||
          FileExt == "xlsx" ||
          FileExt == "XLS" ||
          FileExt == "XLSX"
        ) {
          return true;
        } else {
          this.$message.error("上传文件必须是Excel格式!");
          return false;
        }
      } else {
        const isText = file.type === "application/vnd.ms-excel";
        const isTextComputer =
          file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        if (!isText && !isTextComputer) {
          this.$message.error("上传文件必须是Excel格式!");
        }
        return isText || isTextComputer;
      }
    },
    // 处理：上传文件个数超过定义的数量
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`);
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-full {
  .full-content {
    background: #fff;
    min-width: 360px;
    /*头部*/
    .popper-header {
      padding-left: 24px;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
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
    /*内容*/
    .popper-body {
      padding: 0px 24px;
      width: 700px;
      height: 343px;
      color: #000;
      font-size: 14px;
      overflow-y: auto;
      overflow-y: overlay;
      .check-step-wrapper {
        height: 70px;
        font-size: 14px;
        line-height: 22px;
        color: #7a8794;
        border-bottom: 1px dashed #e6eaee;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        .is-active {
          color: #08a446;
        }
        i.icon-youjiantou {
          margin: 0 16px;
          color: #ced0da;
          font-size: 14px;
        }
      }
      .check-content-wrapper {
        position: relative;
        margin: 40px auto 20px;
        width: 260px;
        text-align: left;
        /*1.下载全量盘点表*/
        .download-item {
          .item {
            margin-bottom: 28px;

            .txt {
              color: #7a8794;
              line-height: 20px;
              margin-top: 4px;
              font-size: 12px;
            }
          }
        }
        /*2.上传全量盘点表*/
        .upload-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
    /*底部按钮*/
    .btn-wrapper {
      padding: 0 24px;
      align-items: center;
      height: 61px;
      justify-content: flex-end;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>