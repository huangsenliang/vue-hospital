<template>
  <!-- 医疗历史弹窗 -->
  <div class="dialog-outpatient-history">
    <div class="mr-history-content">
      <!-- 标题（上） -->
      <div class="title">
        <ul>
          <li class="tr-history">
            <span class="name">医生</span>
            <span>钟南山</span>
            <span style="fontSize:12px">2020-05-06</span>
          </li>
          <li class="tr-history">
            <span class="name">主诉</span>
            <span>头晕，头痛</span>
          </li>
          <li class="tr-history">
            <span class="name">诊断</span>
            <span>高血压</span>
          </li>
          <li class="tr-history">
            <span class="name">既往史</span>
            <span>既往有高血压</span>
          </li>
        </ul>
      </div>
      <!-- 药品 -->
      <div class="prescription">
        <!-- 西药 -->
        <div class="west-wrapper box">
          <h5>西药</h5>
          <ul class="west">
            <li class="flex tr" v-for="(item,index) of 3" :key="index">
              <span>阿莫西林胶囊(阿莫灵) 5g*24粒/盒</span>
              <span>3粒</span>
            </li>
          </ul>
        </div>
        <!-- 中药 -->
        <div class="chinese-wrapper box">
          <h5>中药</h5>
          <ul class="chinese flex">
            <li class="tr" v-for="(item,index) of 7" :key="index">
              <span>天麻 10g</span>
            </li>
          </ul>
          <div style="marginTop:5px">
            <span>3剂</span>
          </div>
        </div>
        <!-- 医嘱事项 -->
        <div class="attention-wrapper">
          <h5>医嘱事项</h5>
          <ul class="attention">
            <li class="tr">1.饮食规律宜清淡，忌烟酒，忌辛辣荤腥</li>
          </ul>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="history-btn flex">
        <div>
          <el-button class="btn-blank" :plain="true" @click="openPopper">复制医嘱处方</el-button>
        </div>
        <div>
          <el-button class="btn-blank" :plain="true" @click="openPopper">复制病历</el-button>
        </div>
        <!-- 打印弹窗 -->
        <div class="dy-wrapper">
          <button class="btn-blank" @click="showPopper_dy=!showPopper_dy">打印</button>
          <div v-if="showPopper_dy" class="popper-dy">
            <ul>
              <li v-print="'#printSingle'">处方</li>
              <li v-print="'#printSingle'">病历</li>
              <li class="is-disabled">治疗执行单</li>
              <li v-print="'#printSingle'">理疗执行单</li>
              <!-- <li @click="Printing">处方</li>
              <li @click="Printing">病历</li>
              <li class="is-disabled">治疗执行单</li>
              <li @click="Printing">理疗执行单</li> -->
            </ul>
          </div>
          <!-- 打印内容 -->
          <div ref="printSingle" id="printSingle" v-for="(item,index) of 1" :key="index">
            <!-- 头部 -->
            <div class="header-wrapper">
              <div class="logo">
                <img src="@/assets/images/hospital_logo.png" alt />
              </div>
              <div class="title-single flex">
                <h5 style="fontSize:16px">惠民体验诊所</h5>
                <h3 style="fontSize:18px">处方笺</h3>
              </div>
              <div class="identification-code">
                <img src="@/assets/images/Identification_code.png" alt />
              </div>
            </div>
            <!-- 日期 -->
            <div class="single-date flex">
              <div class="patient-number single-item">
                <span class="font-item">门诊号：</span>
                <span>00001368</span>
              </div>
              <div class="patient-date single-item">
                <span class="font-item">时间：</span>
                <span>2020-05-06 10:55</span>
              </div>
            </div>
            <!-- 患者信息 -->
            <div class="patient-info">
              <ul class="flex">
                <li class="single-item">
                  <span class="font-item">姓名：</span>
                  <span>李思思</span>
                </li>
                <li class="single-item">
                  <span class="font-item">性别：</span>
                  <span>女</span>
                </li>
                <li class="single-item">
                  <span class="font-item">年龄：</span>
                  <span>22</span>
                </li>
                <li class="single-item">
                  <span class="font-item">手机：</span>
                  <span>18244909680</span>
                </li>
              </ul>
              <div class="keshi">
                <ul class="flex-wrap">
                  <li class="single-item">
                    <span class="font-item">科室：</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 内容 -->
            <div class="single-content">
              <!-- 病历时打印 -->
              <ul class="symptoms-wrapper">
                <li>
                  <span class="font-item">主诉：</span>
                  <span style="width:250px">咳嗽，流鼻涕</span>
                  <span></span>
                </li>
                <li>
                  <span class="font-item">既往史：</span>
                  <span>既往健康</span>
                  <span></span>
                </li>
                <li>
                  <span class="font-item">诊断：</span>
                  <span>流行性感冒</span>
                  <span></span>
                </li>
                <li>
                  <span class="font-item">治疗理疗：</span>
                  <span>静脉输液</span>
                  <span>1次</span>
                </li>
              </ul>
              <!-- 取药RP -->
              <h4 class="font-item" style="marginTop:15px">RP</h4>
              <!-- 循环盒子 -->
              <div v-for="(item1,index1) of 5" :key="index1" class="RP-wrapper">
                <h4 class="font-item">西药处方一</h4>
                <ul>
                  <li v-for="(item2,index2) of 4" :key="index2" class="flex">
                    <div class="medicine">
                      <span>阿莫西林胶囊(阿莫灵)</span>
                      <br />
                      <span>5g*24粒/盒</span>
                    </div>
                    <div class="dosage">
                      <span>口服，每次0.25g</span>
                    </div>
                    <div class="count">
                      <span>3粒</span>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- 中药处方 -->
              <div class="medicine-chinese">
                <h4 class="font-item">中药处方</h4>
                <ul class="clear-float">
                  <li>
                    <span>地骨皮</span>
                    <span>30g</span>
                  </li>
                  <li>
                    <span>桑白皮</span>
                    <span>30g</span>
                  </li>
                </ul>
                <p>共1剂，1日1剂，1日3次，每次200ml，煎服，饭前服用。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      showPopper_dy: false,  // 打印小弹窗控制变量
    };
  },
  methods: {
    // 打印
    // Printing() {
    //   this.$print(this.$refs.printSingle);
    //   // console.log(this.$refs.printSingle)
    // },
    // 处理：弹窗按钮
    openPopper() {
      this.$message({
        showClose: true,
        message: "当前病历和处方信息不可编辑，无法复制"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-outpatient-history {
  width: 100%;
  background-color: #fffdec;
  border: 1px solid #cbb816;
  .mr-history-content {
    /*头部*/
    .title {
      padding: 16px;
      border-bottom: 1px solid #e6eaee;
      .tr-history {
        margin-bottom: 6px;
        -webkit-display: flex;
        -ms-display: flex;
        display: flex;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        span.name {
          width: 60px;
          color: #000;
          line-height: 20px;
          margin-right: 8px;
        }
        span:nth-child(2) {
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
        span:nth-child(n + 2) {
          color: #7a8794;
        }
      }
    }
    /*内容*/
    .prescription {
      padding: 0 16px 12px;
      border-bottom: 1px solid #e6eaee;
      h5 {
        color: #000;
        font-weight: 700;
        height: 20px;
        line-height: 20px;
        margin-top: 12px;
      }

      li.tr {
        margin-right: 4px;
        font-size: 14px;
        margin-top: 6px;
      }
      /*西药*/
      .west-wrapper {
        ul.west {
          li {
            -webkit-justify-content: space-between;
            -ms-justify-content: space-between;
            justify-content: space-between;
          }
        }
      }

      .box {
        border-bottom: 1px solid #e6eaee;
        padding-bottom: 10px;
      }
      /*中药*/
      .chinese-wrapper {
        ul.chinese {
          flex-wrap: wrap;
          li {
            color: #7a8794;
            min-width: 100px;
          }
        }
      }
    }
    /*底部按钮*/
    .history-btn {
      button {
        color: #007aff;
        &:hover {
          background-color: #d2e5f6;
        }
      }
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      justify-content: space-around;
      padding: 16px 10px;
    }
    .dy-wrapper {
      position: relative;
      z-index: 5;
      .popper-dy {
        width: 100px;
        // height: 144px;
        top: -135px;
        position: absolute;
        background: #fff;
        border-radius: 3px;
        overflow: hidden;
        border: 1px solid #ced0da;
        ul {
          padding: 8px 0px;
          li {
            height: 28px;
            line-height: 28px;
            color: #000;
            font-size: 14px;
            padding: 0 5px;
            &:hover {
              background: #f5f7fb;
            }
          }
        }
        ul > li.is-disabled {
          color: #ced0da;
          cursor: not-allowed;
        }
      }
     
    }
  }
}

/*打印页面的页头页尾*/
@page {
  size: auto;
  width: 100%;
  
  /* height: 600px; */
  margin: 0 15px; /* this affects the margin in the printer settings */
}
/*打印的内容*/
#printSingle {
  /*脱离文档流，隐藏元素达到隐身额效果*/
  position: fixed;
  opacity: 0;
  width: 100%;
  background: #fff;
  padding: 10px;
  color: #000;
  font-size: 14px;
  /*共有样式*/
}
#printSingle .single-item {
  width: 225px;
}

#printSingle .font-item {
  font-weight: 700;
  font-size: 16px;
}

/*头部*/
#printSingle .header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#printSingle .header-wrapper .logo {
  width: 40px;
}
#printSingle .header-wrapper .logo img {
  width: 100%;
}

#printSingle .header-wrapper .title-single {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
#printSingle .header-wrapper .identification-code {
  width: 50px;
}
#printSingle .header-wrapper .identification-code img {
  width: 100%;
}

/*日期*/
#printSingle .single-date {
  border-bottom: 1px solid #000;
}
/*患者信息*/
#printSingle .patient-info {
  line-height: 25px;
  border-bottom: 2px solid #000;
}

/* 病历时打印*/
.symptoms-wrapper {
  margin-top: 10px;
  line-height: 25px;
}
ul.symptoms-wrapper > li > span:nth-child(2) {
  width: 150px;
  display: inline-block;
}

/* 取药RP */
#printSingle .RP-wrapper {
  margin: 10px 0 0 5px;
}

#printSingle .RP-wrapper ul > li {
  justify-content: space-between;
  padding: 5px 15px 0 15px;
}

/* 中药处方 */
#printSingle .medicine-chinese {
  margin: 10px 0 0 5px;
}

#printSingle .medicine-chinese > ul > li {
  float: left;
  padding: 5px 15px 0 15px;
}

#printSingle .medicine-chinese > p {
  padding: 5px 15px 0 15px;
  font-weight: 700;
}

/************ 共有样式 ************/
/* 弹性不换行 */
.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-wrap-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}

.flex-column-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}

/* 弹性换行 */
.flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: flex;
}

/* 清除浮动 */
.clear-float::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>