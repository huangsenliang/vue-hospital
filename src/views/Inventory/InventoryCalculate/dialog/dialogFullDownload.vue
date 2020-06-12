<template>
  <!-- 下载全景盘点弹窗组件 -->
  <div class="dialog-full-download dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style download-dialog">
      <!-- 头部 -->
      <div class="download-header flex">
        <h4>全量盘点</h4>
        <i @click="$emit('showDialogDownload')" class="icon-del iconfont"></i>
      </div>
      <!-- 内容 -->
      <div class="download-body">
        <div class="item flex">
          <label style="marginRight:16px;color: #7a8794;">盘点范围</label>
          <Select-Input></Select-Input>
        </div>
        <el-checkbox style="marginLeft:73px" v-model="checked">盘点数据包含批次信息</el-checkbox>
      </div>
      <div class="download-footer flex align-items justify-end">
        <button style="marginRight:16px" class="btn-primary">下载</button>
        <button @click="$emit('showDialogDownload')" class="btn-blank">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
/*************全局组件*********/
import SelectInput from "@/components/SelectInput";
export default {
  components: {
    SelectInput
  },
  data() {
    return {
      checked: ""
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-full-download {
  .download-dialog {
    background: #fff;
    /*头部*/
    .download-header {
      height: 41px;
      -ms-align-items: center;
      -webkit-align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      padding-left: 24px;
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
    }
    /*内容*/
    .download-body {
      padding: 24px;
      width: 400px;
      .item {
        margin-bottom: 24px;
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
      }
    }
    /*底部*/
    .download-footer {
      height: 61px;
      padding: 0 15px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>