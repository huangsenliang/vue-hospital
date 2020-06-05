<template>
  <!-- 患者信息组件 -->
  <div class="nurse-patient-info">
    <!-- 顶部标签 -->
    <div class="patient-header-wrapper flex">
      <h3>医嘱执行</h3>
      <button class="btn-blank-small">打印</button>
    </div>
    <!-- 内容 -->
    <div class="patient-main-wrapper">
      <!-- 自定义个人信息组件 -->
      <Patient-Info name="毛波" sex="男" age="20" isDisabled="true" month="3" iphone="18244909680"></Patient-Info>
      <div class="patient-content-wrapper">
        <!-- 诊断表 -->
        <div class="table-wrapper diagnosis">
          <!-- 表头 -->
          <ul class="table-header table flex">
            <li class="first-td">
              <span>诊断</span>
            </li>
            <li class="second-td color-96a4b3-14">
              <span>医生</span>
            </li>
            <li class="thrid-td color-96a4b3-14">
              <span>时间</span>
            </li>
            <li class="four-td color-96a4b3-14">
              <span>金额</span>
            </li>
            <li class="five-td color-96a4b3-14">
              <span>状态</span>
            </li>
            <li class="fixed-td"></li>
          </ul>
          <!-- 内容 -->
          <ul class="table-body table flex">
            <li class="first-td">
              <span>血管运动性鼻炎</span>
            </li>
            <li class="second-td">
              <span>张斌</span>
            </li>
            <li class="thrid-td">
              <span>昨天</span>
            </li>
            <li class="four-td">
              <span>￥69.2</span>
            </li>
            <li class="five-td">
              <span>未收费</span>
            </li>
            <li class="fixed-td"></li>
          </ul>
        </div>
        <!-- 项目表 -->
        <div class="table-wrapper project">
          <!-- 表头 -->
          <ul class="table-header table flex">
            <li class="first-td">
              <span>项目</span>
            </li>
            <li class="second-td color-96a4b3-14">
              <span>类型</span>
            </li>
            <li class="thrid-td color-96a4b3-14">
              <span>单价</span>
            </li>
            <li class="four-td color-96a4b3-14">
              <span>金额</span>
            </li>
            <li class="five-td color-96a4b3-14">
              <span>已执行/总数</span>
            </li>
            <li class="fixed-td"></li>
          </ul>
          <!-- 表内容 -->
          <ul class="table-body table flex">
            <li class="first-td">
              <span>血常规</span>
            </li>
            <li class="second-td">
              <span>检查</span>
            </li>
            <li class="thrid-td">
              <span>￥69.2</span>
            </li>
            <li class="four-td">
              <span>￥69.2</span>
            </li>
            <li class="five-td">
              <span>--/1次</span>
            </li>
            <li class="fixed-td color-2680f7-14">执行记录</li>
          </ul>
        </div>
        <!-- 西药处方 -->
        <div class="table-wrapper western-edicine">
          <!-- 表头 -->
          <ul class="table-header table flex">
            <li class="first-td">
              <span>西药处方</span>
            </li>
            <li class="second-td color-96a4b3-14">
              <span>用法</span>
            </li>
            <li class="thrid-td color-96a4b3-14">
              <span>频率</span>
            </li>
            <li class="four-td color-96a4b3-14">
              <span>单次药量</span>
            </li>
            <li class="five-td color-96a4b3-14">
              <span>天数</span>
            </li>
            <li class="fixed-td">总量</li>
          </ul>
          <!-- 表内容 -->
          <ul class="table-body table flex">
            <li class="first-td">
              <span>
                头孢拉定胶囊(康良)
                <span>0.25g*24粒</span>
              </span>
            </li>
            <li class="second-td">
              <span>口服</span>
            </li>
            <li class="thrid-td">
              <span>q12h</span>
            </li>
            <li class="four-td">
              <span>0.25g</span>
            </li>
            <li class="five-td">
              <span>3</span>
            </li>
            <li class="fixed-td">6粒</li>
          </ul>
        </div>
        <!-- 中医处方 -->
        <div class="chinese-medicine table-wrapper">
          <!-- 表头 -->
          <ul class="table-header table flex">
            <li class="first-td">中医处方</li>
            <li>数量</li>
          </ul>
          <!-- 表内容 -->
          <div class="content-table flex">
            <div class="table-left">
              <ul class="flex table">
                <li class="table-item first-td">
                  <span>人参5g</span>
                </li>
                <li class="table-item">
                  <span>茯苓5g</span>
                </li>
                <li class="table-item">
                  <span>玄参5g</span>
                </li>
              </ul>
              <ul class="flex table">
                <li class="table-item">
                  <span>人参5g</span>
                </li>
                <li class="table-item">
                  <span>茯苓5g</span>
                </li>
                <li class="table-item">
                  <span>玄参5g</span>
                </li>
              </ul>
              <ul class="flex table">
                <li class="table-item">
                  <span>1日1剂，1日3次 ，煎服 ，每次120ml</span>
                </li>
              </ul>
            </div>
            <div class="table-right">
              <span>3剂</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 患者信息组件
import PatientInfo from "@/components/PatientInfo";
export default {
  components: {
    PatientInfo
  }
};
</script>

<style lang="less" scoped>
.nurse-patient-info {
  /*顶部标签*/
  .patient-header-wrapper {
    height: 49px;
    justify-content: space-between;
    border-bottom: 1px solid #ced0da;
    padding: 0 24px;
    background-color: #f2f2f2;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    .el-button {
      color: #005ed9;
      padding: 8px 18px;
    }
    h3 {
      font-size: 16px;
      color: #000;
      line-height: 47px;
      font-weight: 700;
      padding: 0 24px;
      background-color: #f2f2f2;
    }
  }
  /*内容*/
  .patient-main-wrapper {
    height: calc(100% - 49px);
    background-color: #fff;
    padding: 15px 24px 24px;
    overflow-y: auto;
    /*个人信息*/
    .info-row {
      li:nth-child(1) {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 3px;
        border: 1px solid #ced0da;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #000;
        display: inline-block;
        font-size: 14px;
        height: 32px;
        line-height: 1;
        outline: none;
        padding: 3px 8px;
        width: 100%;
      }
    }
    /*主要内容部分*/
    .patient-content-wrapper {
      ul:not(:last-child) {
        border-bottom: solid 1px #eee;
      }
      /*共有样式*/
      .table-wrapper {
        margin-top: 24px;
        font-size: 14px;
        border: 1px #eee solid;
        border-radius: 4px;
        .table-header {
          background: #f5f7fb;
          .first-td {
            font-weight: 700;
            color: #000;
          }
        }
        .table-body {
          cursor: pointer;
          &:hover {
            background: #f0f0fb;
          }
        }
        .table {
          height: 32px;
          align-items: center;
          li {
            padding: 0 15px;
          }
          .first-td {
            flex: 5;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .second-td {
            flex: 2;
          }
          .thrid-td {
            flex: 2;
          }
          .four-td {
            flex: 2;
          }
          .five-td {
            flex: 2;
          }
          .fixed-td {
            flex: 2;
            text-align: right;
          }
        }
      }
      /*中医处方*/
      .chinese-medicine {
        /*表头*/
        .table-header {
          li:nth-child(1) {
            flex: 8;
          }
          li:nth-child(2) {
            flex: 1;
            text-align: right;
          }
        }
        /*表内容*/
        .content-table {
          align-items: center;
          .table-left {
            flex: 3;
            .table-item {
              flex: 1;
              cursor: pointer;
              line-height: 32px;
              height: 32px;
              &:hover {
                background: #f0f0fb;
              }
            }
          }
          .table-right {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>