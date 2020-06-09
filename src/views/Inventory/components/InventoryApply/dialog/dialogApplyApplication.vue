<template>
  <!-- 结算单弹窗组件 -->
  <div class="dialog-apply-application dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style application-body">
      <!-- 头部 -->
      <div class="application-header flex align-items justify-between">
        <h4>入库单 RK2020060800001</h4>
        <i class="icon-del iconfont" @click="$emit('showCargoApplication')"></i>
      </div>
      <!-- 内容 -->
      <div class="application-content">
        <!-- 上部分 -->
        <div class="settlement-detail-form">
          <!-- 行：1 -->
          <div class="settlement-item flex">
            <div class="item-label">
              <span>供应商</span>
            </div>
            <span>四川四维医药有限公司</span>
          </div>
          <!-- 行：2 -->
          <div class="settlement-item flex">
            <div class="item-label">
              <span>关联单据</span>
            </div>
            <div class="item-content flex-item">
              <!-- 表格 -->
              <div class="table-wrapper">
                <ul class="th flex align-items">
                  <li class="item1">
                    <span>单号</span>
                  </li>
                  <li class="item2">
                    <span>类型</span>
                  </li>
                  <li class="item3">
                    <span>出/入库时间</span>
                  </li>
                  <li class="item4">
                    <span>操作人</span>
                  </li>
                  <li class="item5">
                    <span>品种</span>
                  </li>
                  <li class="item6">
                    <span>数量</span>
                  </li>
                  <li class="item7">
                    <span>金额</span>
                  </li>
                  <li class="item8">
                    <span>税额</span>
                  </li>
                  <li class="item9">
                    <span>出/入库门店</span>
                  </li>
                </ul>
                <ul v-for="(item,index) of 8" :key="index" class="td flex align-items">
                  <li class="item1">
                    <span>RK2020042400007</span>
                  </li>
                  <li class="item2">
                    <span>入库</span>
                  </li>
                  <li class="item3">
                    <span>2020-04-24</span>
                  </li>
                  <li class="item4">
                    <span>李天文</span>
                  </li>
                  <li class="item5">
                    <span>1</span>
                  </li>
                  <li class="item6">
                    <span>20</span>
                  </li>
                  <li class="item7">
                    <span>100.00</span>
                  </li>
                  <li class="item8">
                    <span>0.00</span>
                  </li>
                  <li class="item9">
                    <span>惠民体验诊所</span>
                  </li>
                  <li class="item10"></li>
                </ul>
                <div class="table-calc">
                  <ul class="flex align-items justify-end">
                    <li>
                      单据数量：
                      <span>1</span>
                    </li>
                    <li>
                      价税合计(总计)：
                      <span>100.00</span>
                    </li>
                    <li>
                      金额(总计)：
                      <span>100.00</span>
                    </li>
                    <li>
                      税额(总计)：
                      <span>0.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 操作记录 -->
          <div class="record-wrapper">
            <ul class="record-list">
              <li class="flex align-items">
                <div class="log-time">
                  <span>2020-06-05</span>
                </div>
                <div class="log-action">
                  <span>李思思</span>
                  <span>审核结算单：审核通过</span>
                </div>
              </li>
              <li class="flex align-items">
                <div class="log-time">
                  <span>2020-06-05</span>
                </div>
                <div class="log-action">
                  <span>李思思</span>
                  <span>创建结算单</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
          <button>guanbi</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.dialog-apply-application {
  .application-body {
    background: #fff;
    //   头部
    .application-header {
      padding-left: 24px;
      height: 41px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-size: 16px;
        font-weight: 700;
      }
    }
    // 内容
    .application-content {
      padding: 16px 24px 0px;
      width: 1210px;
      min-height: 698px;
      height: 698px;
      //   表单
      .settlement-detail-form {
        .settlement-item {
          margin-bottom: 24px;
          .item-label {
            width: 72px;
            color: #7a8794;
          }
          //   表格
          .table-wrapper {
            > ul > li {
              padding: 0 6px;
            }
            //   表头
            .th {
              height: 36px;
              color: @color_8493a4;
              line-height: 36px;
              background: @color_f5f7fb;
              border-top: 1px solid @color_e6eaee;
              border-bottom: 1px solid @color_e6eaee;
            }
            // 表内容
            .td {
              height: 48px;
              border-bottom: 1px solid @color_dadbe0;
            }
            .item1 {
              width: 15.9574%;
            }
            .item2 {
              width: 5.31915%;
            }
            .item3 {
              width: 13.2979%;
            }
            .item4 {
              width: 10.6383%;
            }
            .item5 {
              width: 5.31915%;
            }
            .item6 {
              text-align: center;
              width: 7.97872%;
            }
            .item7.item8 {
              text-align: right;
              width: 7.97872%;
            }
            .item9 {
              text-align: center;
              width: 21.2766%;
            }
            .item10 {
              width: 4.25532%;
            }
          }
          //   表格统计
          .table-calc {
            ul {
              height: 40px;
              > li {
                margin-right: 25px;
                color: @color_8493a4;
                > span {
                  color: #000;
                }
              }
            }
          }
        }
      }
      // 操作记录
      .record-wrapper {
        padding: 0 24px;
        .record-list {
          color: #7a8794;
          padding-top: 12px;
          border-top: 1px dashed @color_ced0da;
          li {
            margin-bottom: 12px;
            .log-action {
              margin-left: 16px;
              > span {
                margin-right: 16px;
              }
            }
          }
        }
      }
    }
    // 底部按钮
    .btn-wrapper {
      height: 61px;
      padding: 0 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid @color_e6eaee;
    }
  }
}
</style>