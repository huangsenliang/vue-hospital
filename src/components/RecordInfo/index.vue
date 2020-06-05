<template>
  <!-- 主诉信息组件 -->
  <div class="record-info">
    <ul>
      <li class="record-info-item flex">
        <label class="label-bold">
          主诉
          <i class="icon-zhongdian iconfont"></i>
        </label>
        <input type="text" v-model="selectSymptomsValue" @click="showRecordSuggestions=true" />
        <!-- 弹窗盒子 -->
        <div
          v-clickoutside="handleClickOutSideShowRecordSuggestions"
          v-if="showRecordSuggestions"
          class="record-suggestions-wrapper"
        >
          <ul class="record-table" v-for="(obj,objIndex) of symptomsList" :key="objIndex">
            <li>
              <span
                @click="handleSelectSymptoms(item)"
                class="symptomsItem"
                v-for="(item,index) of obj.item1"
                :key="index"
              >{{item}}</span>
            </li>
            <li>
              <span
                @click="handleSelectSymptoms(item)"
                class="symptomsItem"
                v-for="(item,index) of obj.item2"
                :key="index"
              >{{item}}</span>
            </li>
          </ul>
          <div class="close flex" @click="showRecordSuggestions=false">
            <i class="iconfont icon-guanbi"></i>
            <span>关闭</span>
          </div>
        </div>
      </li>

      <li class="record-info-item flex">
        <label>
          现病史
          <i class="icon-zhongdian iconfont"></i>
        </label>
        <input type="text" />

        <span class="shang-chuan">
          <input style="width:100%;height:100%" type="file" @change="uploadImg" />
          上传图片
        </span>
      </li>

      <li class="record-info-item flex">
        <label>
          既往史
          <i class="icon-zhongdian iconfont"></i>
        </label>
        <input type="text" v-model="selectHistoryValue" @click="showRecordHistory=true" />
        <!-- 弹窗盒子 -->
        <div
          v-clickoutside="handleClickOutSideShowRecordHistory"
          v-if="showRecordHistory"
          class="record-suggestions-wrapper"
        >
          <ul class="record-table" v-for="(obj,objIndex) of Historylist" :key="objIndex">
            <li>
              <h4 style="fontWeight:700;marginBottom:5px">{{obj.name}}</h4>
            </li>
            <li>
              <span
                @click=" handleSelectHistory(item)"
                class="symptomsItem"
                v-for="(item,index) of obj.item1"
                :key="index"
              >{{item}}</span>
            </li>
            <li>
              <span
                @click="handleSelectHistory(item)"
                class="symptomsItem"
                v-for="(item,index) of obj.item2"
                :key="index"
              >{{item}}</span>
            </li>
          </ul>
          <!-- 关闭 -->
          <div class="close flex" @click="showRecordHistory=false">
            <i class="iconfont icon-guanbi"></i>
            <span>关闭</span>
          </div>
        </div>
      </li>

      <li class="record-info-item flex">
        <label>
          体格检查
          <i class="icon-zhongdian iconfont"></i>
        </label>
        <input type="text" @click="showRecordCheck=true" v-model="selectCheckValue" />
        <!-- 弹窗盒子 -->
        <div
          v-clickoutside="handleClickOutSideShowRecordCheck"
          v-if="showRecordCheck"
          class="record-suggestions-wrapper"
        >
          <div class="tabs-wrapper">
            <div class="tip">
              <h4>智能体征提示</h4>
            </div>
            <ul class="tizheng-table flex" style="flexWrap:wrap">
              <li v-for="(item,index) of 8" :key="index">
                <span class="symptomsItem">扁桃体肿大</span>
              </li>
            </ul>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="体征" name="first">
                <ul class="tizheng-table flex" style="flexWrap:wrap">
                  <li v-for="(item,index) of 8" :key="index">
                    <span class="symptomsItem">扁桃体肿大</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="望问切" name="second">
                <div class="wangWenQie">
                  <ul>
                    <li v-for="(item,index) of 3" :key="index">
                      <span class="symptomsItem" v-for="(item,index) of 5" :key="index">形体壮实</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="flex" v-for="(item,index) of 2" :key="index">
                      <div style="borderRight:1px solid #e6eaee">
                        <span class="symptomsItem" v-for="(item,index) of 5" :key="index">舌淡红</span>
                      </div>
                      <div>
                        <span class="symptomsItem" v-for="(item,index) of 4" :key="index">舌胖大</span>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li v-for="(item,index) of 2" :key="index">
                      <span class="symptomsItem" v-for="(item,index) of 6" :key="index">脉浮</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="体温" name="third">
                <ul>
                  <li>
                    <span class="symptomsItem" v-for="(item,index) of 8" :key="index">43</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="体重" name="fourth">
                <ul>
                  <li class="flex" style="flexWrap:wrap">
                    <span class="symptomsItem" v-for="(item,index) of 20" :key="index">43</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="心率" name="five">
                <ul>
                  <li class="flex" style="flexWrap:wrap">
                    <span class="symptomsItem" v-for="(item,index) of 20" :key="index">43</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="血压" name="six">
                <ul class="xieya">
                  <li class="flex">
                    <div class="left">
                      <span>收缩压</span>
                    </div>
                    <div class="flex right" style="flexWrap:wrap">
                      <span class="symptomsItem" v-for="(item,index) of 20" :key="index">70</span>
                    </div>
                  </li>
                  <li class="flex" style="marginTop:5px">
                    <div class="left">
                      <span>舒张压</span>
                    </div>
                    <div class="flex right" style="flexWrap:wrap">
                      <span class="symptomsItem" v-for="(item,index) of 20" :key="index">70</span>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 关闭 -->
          <div class="close flex" @click="showRecordCheck=false">
            <i class="iconfont icon-guanbi"></i>
            <span>关闭</span>
          </div>
        </div>
      </li>
      <li class="record-info-item flex">
        <label>
          诊断
          <i class="icon-zhongdian iconfont"></i>
        </label>
        <input type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      src: "", // 上传图片路径
      isShowImg: "", // 是否显示图片
      isPublish: false, // 是否上传控制变量
      fileList: [], // 上传的图片数组
      selectCheckValue: "", // 选中的体格检查输入框的值
      showRecordCheck: false, // 体格检查弹窗显示隐藏控制变量

      selectHistoryValue: "", // 选中的既往史输入框的值
      showRecordHistory: false, // 既往史弹窗显示隐藏控制变量
      Historylist: [
        {
          name: "",
          item1: ["既往体健康", "未见明显异常"],
          item2: [
            "否认药物过敏史",
            "否认慢性疾病",
            "否认传染病史",
            "否认遗传病史",
            "否认备孕",
            "否认怀孕"
          ]
        },
        {
          name: "既往有",
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          name: "过敏史",
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          name: "个人史",
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        }
      ], // 既往史弹窗数据

      selectSymptomsValue: "", // 选中的主诉输入框的值
      symptomsList: [
        {
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          item1: ["咳嗽", "干咳", "咳痰"],
          item2: ["发烧", "高烧", "流涕"]
        },
        {
          item1: ["偶尔", "1天", "2天", "3天", "4天", "5天", "1周"]
        }
      ], // 症状数据列表
      showRecordSuggestions: false // 控制主诉弹窗的显示隐藏变量
    };
  },
  methods: {
    // 处理：上传图片
    uploadImg(e) {
      let _this = this;
      let files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.$emit("receiveSrc", this.result);
      };
    },
    // 处理：点击除了体格检查弹窗盒子之外触发
    handleClickOutSideShowRecordCheck() {
      this.showRecordCheck = false;
    },
    // 处理：选中既往史数据
    handleSelectHistory(item) {
      this.selectHistoryValue = this.handleSelectValue(
        item,
        this.selectHistoryValue
      );
    },
    // 处理：点击处理既往史弹窗盒子之外触发
    handleClickOutSideShowRecordHistory() {
      this.showRecordHistory = false;
    },
    // 拼接选取的值
    handleSelectValue(item, value) {
      if (value.indexOf(item) == -1) {
        value += "，";
        value += item;
      }
      // 去除开头的逗号
      value = value.replace(/^，/, "");
      return value;
    },
    // 处理：选中主诉弹窗数据
    handleSelectSymptoms(item) {
      this.selectSymptomsValue = this.handleSelectValue(
        item,
        this.selectSymptomsValue
      );
    },
    // 处理：点击处理主诉弹窗盒子之外触发
    handleClickOutSideShowRecordSuggestions() {
      this.showRecordSuggestions = false;
    }
  }
};
</script>

<style lang="less" scoped>
.record-info {
  background: @color_fffdec;
  border: 1px solid @color_ced0da;
  border-bottom: 0;
  border-radius: 3px;
  .record-info-item {
    position: relative;
    border-bottom: 1px solid @color_e6eaee;
    height: 37px;
    -ms-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    &:hover > span.shang-chuan {
      display: inline;
    }
    label {
      width: 98px;
      height: 37px;
      line-height: 37px;
      color: @color_626d77;
      text-indent: 12px;
      border-right: 1px solid @color_e6eaee;
    }
    > input {
      flex: 1;
      height: 100%;
      background: @color_fffdec;
      padding-left: 10px;
    }
    /*选中样式*/
    label.label-bold {
      font-weight: 700;
    }
    /* 主诉弹窗盒子内容 */
    .record-suggestions-wrapper {
      position: absolute;
      top: 42px;
      left: 125px;
      width: calc(100% - 146px);
      background: #fff;
      border-radius: 3px;
      overflow: hidden;
      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
      z-index: 1009;
      border: 1px solid #b7b9c2;
      font-size: 14px;
      .tabs-wrapper {
        padding: 0 15px;
        .el-tabs__header {
          margin-bottom: 10px;
        }
        /*智能提示*/
        .tip h4 {
          padding: 16px 8px 8px;
          color: #005ed9;
          font-weight: 700;
        }
        /*望问切*/
        .wangWenQie {
          ul {
            padding: 10px 0;
          }
          ul:nth-child(1) {
            padding: 0;
          }
          ul + ul {
            border-top: 1px solid #b7b9c2;
          }
        }
        .xieya {
          li > .left {
            span {
              display: inline-block;
              width: 55px;
            }
          }
          .right {
            flex: 1;
          }
        }
      }
      ul.record-table + ul.record-table {
        border-top: 1px solid #b7b9c2;
      }
      ul.record-table {
        padding: 5px 0;
        margin: 0 8px;
      }
      ul {
        .symptomsItem {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 3px;
          cursor: pointer;
          line-height: 1;
          color: @color_7a8794;
          // min-width: 500px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            background: @color_d2e5f6;
            color: @color_007aff;
          }
        }
      }
      /*关闭*/
      .close {
        height: 40px;
        -webkit-align-items: center;
        -ms-align-items: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        color: #005ed9;
        background: #f7f7f7;
        cursor: pointer;
        .icon-guanbi {
          font-size: 28px;
        }
      }
    }
    /*上传图片*/
    .shang-chuan {
      display: none;
      position: absolute;
      right: 10px;
      color: #007aff;
      cursor: pointer;
      input {
        width: 100%;
        height: 100%;
        z-index: 5;
        opacity: 0;
        position: absolute;
        cursor: pointer;
      }
    }
  }
}
</style> 