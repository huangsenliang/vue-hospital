<template>
  <!-- 库存：盘点组件 -->
  <div class="inventory-calculat" style="height:100%">
    <!------------ 头部-------------- -->
    <div class="calculat-header flex align-items justify-between">
      <div class="flex">
        <Calendar-Input style="marginRight:16px"></Calendar-Input>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <div class="calculat-header-right flex align-items">
        <!-- 全量盘点弹窗 -->
        <div class="full-popper-wrapper">
          <button
            @click="showDialogFull=!showDialogFull"
            style="marginRight:8px"
            class="btn-success"
          >全量盘点</button>
          <div v-show="showDialogFull">
            <Dialog-Full @showDialogFull="showDialogFull=false"></Dialog-Full>
          </div>
        </div>
        <!-- 临时盘点弹窗 -->
        <div class="temporary-popper-wrapper">
          <button
            @click="showDialogTemporary=true"
            style="marginRight:8px"
            class="btn-success"
          >临时盘点</button>
          <div v-show="showDialogTemporary" class="popper-wrapper">
            <Dialog-Temporary @showDialogTemporary="showDialogTemporary=false"></Dialog-Temporary>
          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- -----------列表---------------  -->
    <Calculat-List style="height:62%"></Calculat-List>
    <!-- ------------分页------------- -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <p>
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条入库单，数量
        <span style="fontWeight: 700;">&nbsp;37,539,760.99&nbsp;</span> ，含税金额
        <span style="fontWeight: 700;">&nbsp;285,388,552.709&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
import CalendarInput from "@/components/CalendarInput";
/*******************局部组件**************/
// 全景盘点弹窗
import DialogFull from "./dialog/dialogFull";
// 临时盘点弹窗
import DialogTemporary from "./dialog/dialogTemporary";
import CalculatList from "./components/calculateList";
export default {
  components: {
    SelectInput,
    SearchInput,
    CalendarInput,
    DialogFull,
    CalculatList,
    DialogTemporary
  },
  data() {
    return {
      showDialogTemporary: false, // 临时盘点弹窗盒子显示隐藏控制变量
      showDialogFull: false // 全景盘点弹窗显示隐藏控制变量
    };
  },
  methods: {
    uploadFile(item) {
      this.file = item.file;
    },
    postFile() {
      const fileObj = this.file;
      var fileData = new FormData();
      fileData.append("file", fileObj);
      let headers = {
        "Content-Type": "multipart/form-data"
      };
      this.uploading = true;
      this.$axios({
        method: "post",
        url: url + "/upload", //填写上传的接口
        headers: headers,
        data: fileData
      }).then(res => {
        if (res.data.code === 200) {
          this.$message.success(res.data.msg);
          this.uploadDialog = false;
        } else {
          this.$message.error(res.data.msg);
        }
      });
      setTimeout(function() {
        this.uploading = false;
      }, 1500);
    },
    colseFile() {
      this.uploadDialog = false;
    }
  }
};
</script>

<style lang="less" scoped>
.inventory-calculat {
  padding: 0 16px;
  // 头部
  .calculat-header {
    height: 64px;
    .calculat-header-right {
    }
  }
  // 分页
  .pag-wrapper {
    height: 55px;
  }
}
</style>