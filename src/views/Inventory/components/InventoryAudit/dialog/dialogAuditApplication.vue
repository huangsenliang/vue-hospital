<template>
  <!-- 结算单弹窗组件 -->
  <div class="dialog-audit-application dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style application-body">
      <!-- 头部 -->
      <div class="application-header flex align-items justify-between">
        <h4>结算单 RK2020060800001</h4>
        <i class="icon-del iconfont" @click="$emit('showAuditApplication')"></i>
      </div>
      <!-- 内容 -->
      <div class="application-content-wrapper hidden-scorll">
        <!-- 表单数据 -->
        <div class="application-content">
          <!-- 上部分:表单 -->
          <div class="settlement-detail-form">
            <!-- 行：供应商 -->
            <div class="settlement-item flex">
              <div class="item-label">
                <span>供应商</span>
              </div>
              <span>华纳大药厂</span>
            </div>
            <!-- 行：发票 -->
            <div class="settlement-item flex">
              <div class="item-label">
                <span>关联发票</span>
              </div>
              <div class="item-content flex flex-item flex-wrap">
                <!-- 发票 -->
                <div class="invoice-wrapper" v-for="(item,index) of 10" :key="index">
                  <Audit-Invoice></Audit-Invoice>
                </div>
              </div>
            </div>
            <!-- 行：结算金额 -->
            <div class="settlement-item flex">
              <div class="item-label">
                <span>结算金额</span>
              </div>
              <div class="item-content">
                <ul class="amount-content flex">
                  <li>
                    <span>价水合计：</span>
                    <span class="amount">3100.00</span>
                  </li>
                  <li>
                    <span>金额：</span>
                    <span class="amount">3100.00</span>
                  </li>
                  <li>
                    <span>税额：</span>
                    <span class="amount">3100.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 行：结算明细 -->
            <div class="settlement-item flex">
              <div class="item-label">
                <span>关联单据</span>
              </div>
              <div class="item-content flex-item">
                <!-- 表格 -->
                <div class="table-detail">
                  <ul class="th flex align-items">
                    <li class="item1">
                      <span>货物或应税劳务、服务名称</span>
                    </li>
                    <li class="item2">
                      <span>规格类型</span>
                    </li>
                    <li class="item3">
                      <span>单位</span>
                    </li>
                    <li class="item4">
                      <span>数量</span>
                    </li>
                    <li class="item5">
                      <span>单价</span>
                    </li>
                    <li class="item6">
                      <span>价税合计</span>
                    </li>
                    <li class="item7">
                      <span>金额</span>
                    </li>
                    <li class="item8">
                      <span>税率</span>
                    </li>
                    <li class="item9">
                      <span>税额</span>
                    </li>
                  </ul>
                  <ul v-for="(item,index) of 2" :key="index" class="td flex align-items">
                    <li class="item1">
                      <span>药品</span>
                    </li>
                    <li class="item2">
                      <span>无</span>
                    </li>
                    <li class="item3">
                      <span>无</span>
                    </li>
                    <li class="item4">
                      <span>1</span>
                    </li>
                    <li class="item5">
                      <span>1.98</span>
                    </li>
                    <li class="item6">
                      <span>2.00</span>
                    </li>
                    <li class="item7">
                      <span>1.98</span>
                    </li>
                    <li class="item8">
                      <span>1%</span>
                    </li>
                    <li class="item9">
                      <span>0.02</span>
                    </li>
                  </ul>
                  <div class="table-calc flex align-items justify-between">
                    <ul class="flex align-items justify-end">
                      <li>
                        价税合计(大写)
                        <span>贰元整</span>
                      </li>
                      <li>
                        价税合计(小写)：
                        <span>2.00</span>
                      </li>
                    </ul>
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
            <!-- 行：附件 -->
            <div class="settlement-item flex">
              <div class="item-label">
                <span>附件</span>
              </div>
              <div class="item-content flex-item">
                <!-- 表格 -->
                <div class="table-attachment">
                  <ul class="th flex align-items">
                    <li class="item1">
                      <span>单号</span>
                    </li>
                    <li class="item2">
                      <span>类型</span>
                    </li>
                    <li class="item3">
                      <span>出入库时间</span>
                    </li>
                    <li class="item4">
                      <span>操作人</span>
                    <li class="item5">
                      <span>品种</span>
                    </li>
                    <li class="item6">
                      <span>数量</span>
                    </li>
                    <li class="item7">
                      <span>价税合计</span>
                    </li>
                    <li class="item8">
                      <span>金额</span>
                    </li>
                    <li class="item9">
                      <span>税额</span>
                    </li>
                    <li class="item10">
                      <span>出/入库门店</span>
                    </li>
                  </ul>
                  <ul v-for="(item,index) of 2" :key="index" class="td flex align-items">
                    <li class="item1">
                      <span>RK2020060300009</span>
                    </li>
                    <li class="item2">
                      <span>入库</span>
                    </li>
                    <li class="item3">
                      <span>2020-06-03</span>
                    </li>
                    <li class="item4">
                      <span>陈林凤</span>
                    </li>
                    <li class="item5">
                      <span>1</span>
                    </li>
                    <li class="item6">
                      <span>2</span>
                    </li>
                    <li class="item7">
                      <span>2.00</span>
                    </li>
                    <li class="item8">
                      <span>1.98</span>
                    </li>
                    <li class="item9">
                      <span>1.02</span>
                    </li>
                    <li class="item10">
                      <span>ABC体验诊所</span>
                    </li>
                  </ul>
                  <div class="table-calc flex justify-end">
                    <ul class="flex align-items ">
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
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-primary" style="marginRight:8px">撤回</button>
        <button class="btn-blank" @click="$emit('showAuditApplication')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
/**************引入局部组件************/

// 发票组件
import AuditInvoice from "../components/auditInvoice";
export default {
  components: {
    AuditInvoice
  }
};
</script>

<style lang="less" scoped>
.dialog-audit-application {
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
    .application-content-wrapper {
      max-height: 550px;
      overflow-y: auto;
      // 表单数据
      .application-content {
        padding: 16px 24px 0px;
        width: 1210px;
        //   表单
        .settlement-detail-form {
          .settlement-item {
            margin-bottom: 24px;
            .item-label {
              width: 72px;
              color: #7a8794;
            }
            //   表格：明细
            .table-detail {
              border: 1px solid @color_e6eaee;
              > ul > li {
                padding: 0 6px;
              }
              //   表头
              .th {
                height: 36px;
                color: @color_8493a4;
                line-height: 36px;
                background: @color_f5f7fb;
                border-bottom: 1px solid @color_e6eaee;
              }
              // 表内容
              .td {
                cursor: pointer;
                height: 48px;
                border-bottom: 1px solid @color_dadbe0;
                &:hover {
                  background: @color_e9eff8;
                }
              }
              .item1 {
                width: 23%;
              }
              .item2 {
                text-align: center;
                width: 18%;
              }
              .item3,
              .item4,
              .item5,
              .item6 {
                width: 13.2979%;
              }
              .item7,
              .item8
               {
                text-align: right;
                width: 9.61538%;
              }
              .item9 {
                text-align: center;
                width: 21.2766%;
              }
              .item10 {
                width: 4.25532%;
              }
            }
            // 表格：附件
            .table-attachment {
              border: 1px solid @color_e6eaee;
              > ul > li {
                padding: 0 6px;
              }
              //   表头
              .th {
                height: 36px;
                color: @color_8493a4;
                line-height: 36px;
                background: @color_f5f7fb;
                border-bottom: 1px solid @color_e6eaee;
              }
              // 表内容
              .td {
                cursor: pointer;
                height: 48px;
                border-bottom: 1px solid @color_dadbe0;
                &:hover {
                  background: @color_e9eff8;
                }
              }
              .item1 {
                width: 13.8889%;
              }
              .item2 {
                text-align: center;
                width: 6.94444%;
              }
              .item3 {
                text-align: center;
                width: 10.4167%;
              }
              .item4 {
                text-align: center;
                width: 9.02778%;
              }
              .item5 {
                text-align: right;
                width: 5.55556%;
              }
              .item6 {
                text-align: right;
                width: 6.94444%;
              }
              .item7 {
                text-align: right;
                width: 10.4167%;
              }
              .item8 {
                text-align: right;
                width: 6.94444%;
              }
              .item9 {
                text-align: right;
                width: 6.94444%;
              }
              .item10 {
                text-align: center;
                width: 22.9167%;
              }
            }
            //   表格统计
            .table-calc {
              ul {
                padding-left: 16px;
                height: 50px;
                > li {
                  margin-right: 25px;
                  color: @color_8493a4;
                  > span {
                    color: #000;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
        // 发票
        .invoice-wrapper {
          margin-top: 8px;
          margin-right: 8px;
        }
        // 结算金额
        .amount-content {
          > li {
            color: @color_7a8794;
            margin-right: 25px;
            .amount {
              color: @color_f93;
              font-weight: 700;
              font-size: 16px;
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