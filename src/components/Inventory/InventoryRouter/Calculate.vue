<template>
  <div class="calculate-wrapper">
    <!-- 头部 -->
    <div class="calculate-header flex">
      <!-- 左侧 -->
      <div class="left-input flex">
        <Calendar style="marginRight:8px"></Calendar>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <div class="right-btn flex">
        <!-- 全量盘点弹窗 -->
        <div class="full-popper-wrapper">
          <button
            @click="showFullPoppe=!showFullPoppe"
            style="marginRight:8px"
            class="btn-success"
          >全量盘点</button>
          <div v-if="showFullPoppe" class="popper-wrapper">
            <div class="mask"></div>
            <div class="popper-style full-popper">
              <!-- 头部 -->
              <div class="popper-header flex">
                <h4>全量盘点</h4>
                <i
                  @click="showFullPoppe=false"
                  class="icon-del iconfont"
                  style="fontSize:25px;cursor:pointer;"
                ></i>
              </div>
              <!-- 内容 -->
              <div class="popper-body">
                <div class="check-step-wrapper flex">
                  <span :class="{'is-active':tabsNum==0}">1.下载全量盘点表</span>
                  <i class="iconfont icon-youjiantou"></i>
                  <span :class="{'is-active':tabsNum==1}">2.上传全量盘点表</span>
                  <i class="iconfont icon-youjiantou"></i>
                  <span :class="{'is-active':tabsNum==2}">3.完成盘点</span>
                </div>

                <div class="check-content-wrapper">
                  <!-- 1.下载全量盘点表 -->
                  <div v-if="tabsNum==0" class="download-item">
                    <div class="item">
                      <span style="marginRight:16px">1.下载全量盘点表</span>
                      <button @click="showDownloadPoppe=!showDownloadPoppe" class="btn-ghost">点击下载</button>
                      <div v-if="showDownloadPoppe" class="download-wrapper">
                        <div class="popper-wrapper">
                          <div class="mask"></div>
                          <div class="popper-style download-popper">
                            <!-- 头部 -->
                            <div class="download-header flex">
                              <h4>全量盘点</h4>
                              <i
                                @click="showDownloadPoppe=false"
                                class="icon-del iconfont"
                                style="fontSize:25px;cursor:pointer;"
                              ></i>
                            </div>
                            <!-- 内容 -->
                            <div class="download-body">
                              <div class="item flex">
                                <label style="marginRight:16px;color: #7a8794;">盘点范围</label>
                                <Select-Input></Select-Input>
                              </div>
                              <el-checkbox style="marginLeft:73px" v-model="checked1">盘点数据包含批次信息</el-checkbox>
                            </div>
                            <div class="download-footer flex">
                              <div class="footer-right">
                                <button style="marginRight:16px" class="btn-primary">我已完成填写</button>
                                <button @click="showDownloadPoppe=false" class="btn-blank">取消</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <span>2.填写全量盘点表</span>
                      <p class="txt">清点数量，在全量盘点表中填写实际库存数量</p>
                    </div>
                  </div>
                  <!-- 2.上传全量盘点表 -->
                  <div v-if="tabsNum==1" class="upload-item">
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
              <div v-if="tabsNum==0" class="footer-wrapper flex">
                <div class="footer-right">
                  <button @click="tabsNum=1" style="marginRight:16px" class="btn-primary">我已完成填写</button>
                  <button @click="showFullPoppe=false" class="btn-blank">取消</button>
                </div>
              </div>
              <div v-if="tabsNum==1" class="footer-wrapper flex">
                <p
                  style="color: rgb(122, 135, 148);font-size: 12px;marginRight:30px"
                >系统将自动把所有表格药品盘点数据汇总（相同药品数量相加）</p>
                <div class="footer-right">
                  <button @click="tabsNum=0" style="marginRight:16px" class="btn-blank">上一步</button>
                  <button style="marginRight:16px" class="btn-blank">下一步</button>
                  <button @click="showFullPoppe=false" class="btn-blank">取消</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 临时盘点弹窗 -->
        <div class="temporary-popper-wrapper">
          <button
            @click="showTemporaryPoppe=!showTemporaryPoppe"
            style="marginRight:8px"
            class="btn-success"
          >临时盘点</button>
          <div v-if="showTemporaryPoppe" class="popper-wrapper">
            <div class="mask"></div>
            <div class="popper-style temporary-popper">
              <!-- 头部 -->
              <div class="popper-header flex">
                <h4>全量盘点</h4>
                <i
                  @click="showTemporaryPoppe=false"
                  class="icon-del iconfont"
                  style="fontSize:25px;cursor:pointer;"
                ></i>
              </div>
              <!-- 内容 -->
              <div class="popper-body">
                <div class="describe flex">
                  <label for="">备注：</label>
                  <input type="text">
                </div>
                <!-- 表格 -->
                <div class="table">
                  <ul class="flex table-header">
                    <li class="item1"><span>药品编码</span></li>
                    <li class="item2"><span>药品名称</span></li>
                    <li class="item3"><span>类型</span></li>
                    <li class="item4"><span>等级</span></li>
                    <li class="item5"><span>批次</span></li>
                    <li class="item6"><span>生产批号</span></li>
                    <li class="item7"><span>账面数量</span></li>
                    <li class="item8"><span>实际数量</span></li>
                    <li class="item9"><span>盈亏数量</span></li>
                    <li class="item10"><span></span></li>
                  </ul>
                  <ul class="flex row">
                    <li class="item1"><span>44445421324</span></li>
                    <li class="item2"><span>多潘立酮片（路得啉）10mg*30片</span></li>
                    <li class="item3"><span>西药</span></li>
                    <li class="item4"><span></span></li>
                    <li class="item5"><span></span></li>
                    <li class="item6"><span></span></li>
                    <li class="item7"><span>7盒</span></li>
                    <li class="item8 flex">
                      <input type="text">
                      <span class="unit">盒</span>
                      <input type="text">
                      <span class="unit">片</span>
                    </li>
                    <li class="item9"><span>555</span></li>
                    <li class="item10"><span></span></li>
                  </ul>
                </div>
                <!-- 输入框 -->
                <div class="input-wrapper flex">
                  <div class="left">
                    <input type="text" placeholder="请输入盘点药品或扫码识别">
                    <i class="iconfont icon-jia"></i>
                  </div>
                  <div class="right"><span>品种：</span>1</div>
                </div>
              </div>
              <!-- 底部按钮 -->
              <div class="footer-wrapper flex">
                <div class="footer-right">
                  <button  style="marginRight:16px" class="btn-primary">确定</button>
                  <button  class="btn-danger">终止盘点</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="calculate-body">
      <ul class="table-header flex">
        <li class="item1">
          <span>盘点单号</span>
        </li>
        <li class="item2">
          <span>门店</span>
        </li>
        <li class="item3">
          <span>品种</span>
        </li>
        <li class="item4">
          <span>盈亏数量</span>
        </li>
        <li class="item5">
          <span>盈亏金额(进价)</span>
        </li>
        <li class="item6">
          <span>盈亏金额(售价)</span>
        </li>
        <li class="item7">
          <span>盘点人</span>
        </li>
        <li class="item8">
          <span>盘点日期</span>
        </li>
      </ul>
      <ul v-for="(item,index) of 10" :key="index" class="row flex">
        <li style="color: rgb(10, 140, 234);" class="item1">
          <span>PD2020052200001</span>
        </li>
        <li class="item2">
          <span>ABC体验诊所</span>
        </li>
        <li class="item3">
          <span>1</span>
        </li>
        <li class="item4">
          <span>3</span>
        </li>
        <li class="item5">
          <span>0.06</span>
        </li>
        <li class="item6">
          <span>0.75</span>
        </li>
        <li class="item7">
          <span>菜先伟</span>
        </li>
        <li class="item8">
          <span>2020-05-21</span>
        </li>
      </ul>
    </div>
    <!-- 底部分页 -->
    <div style="marginTop:16px" class="pag-wrapper flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;220&nbsp;</span> 条盘点单，盈亏数量
        <span style="fontWeight: 700;">&nbsp;220&nbsp;</span> ，盈亏金额(进价)
        <span style="fontWeight: 700;">&nbsp;220&nbsp;</span> ，盈亏金额(售价)
        <span style="fontWeight: 700;">&nbsp;220&nbsp;</span> 
      </div>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../Common/SelectInput";
import SearchInput from "../../Common/SearchInput";
import Calendar from "../../Common/Calendar";
import FooterBtn from "../FooterBtn";
export default {
  components: {
    SelectInput,
    SearchInput,
    FooterBtn,
    Calendar
  },
  data() {
    return {
      showTemporaryPoppe:false,  // 临时盘点弹窗盒子显示隐藏控制变量
      tabsNum: 0, // 切换变量
      showDownloadPoppe: false, // 下载弹窗盒子显示隐藏控制变量
      checked1: false, // 盘点数据包含批次信息
      showFullPoppe: false // 全景盘点弹窗显示隐藏控制变量
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
    },
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
  },
  create() {}
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Calculate/Calculate.css";
</style>