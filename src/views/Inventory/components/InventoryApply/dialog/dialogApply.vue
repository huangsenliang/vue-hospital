<template>
  <!-- 新增结算单组件 -->
  <div class="dialog-apply dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style apply-content">
      <!-- 头部 -->
      <div class="dialog-header flex align-items justify-between">
        <h4>结算单</h4>
        <i
          @click="$emit('showDialogApply')"
          class="icon-del iconfont"
        ></i>
      </div>
      <!-- 内容 -->
      <div class="dialog-body">
        <!-- 行一 -->
        <div class="settlement-item flex">
          <label for>供应商</label>
          <Select-Input style="width:170px"></Select-Input>
        </div>
        <!-- 行二 -->
        <div class="settlement-item flex">
          <label for>关联单据</label>
          <!-- 右侧表格 -->
          <div class="table-wrapper">
            <button class="check-btn">选择关联单据</button>
            <!-- 表格 -->
            <div class="table">
              <ul class="table-header flex">
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
                <li class="item10">
                  <span></span>
                </li>
              </ul>
              <ul class="row flex">
                <li class="item1">
                  <span>RK2020202020220</span>
                </li>
                <li class="item2">
                  <span>入库</span>
                </li>
                <li class="item3">
                  <span>2020-05-06</span>
                </li>
                <li class="item4">
                  <span>李思思</span>
                </li>
                <li class="item5">
                  <span>2</span>
                </li>
                <li class="item6">
                  <span>40</span>
                </li>
                <li class="item7">
                  <span>280.00</span>
                </li>
                <li class="item8">
                  <span>0.00</span>
                </li>
                <li class="item9">
                  <span>惠民体验诊所</span>
                </li>
                <li class="item10 flex">
                  <i class="iconfont icon-del"></i>
                </li>
              </ul>
              <!-- 统计 -->
              <div class="calc row">
                单据数量：
                <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 价税合计(总计)：
                <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 金额(总计)：
                <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 税额(总计)：
                <span style="fontWeight:700;color:#000;marginRight:24px">200</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 行三 -->
        <div class="settlement-item flex">
          <label for>关联发票</label>
          <div class="associated-invoices flex">
            <!-- 内容 -->
            <div v-for="(item,index) of 10" :key="index" class="invoice-wrapper">
              <div class="invoice-content">
                <p>发票号：xxxx</p>
                <p>开票日期：2020-05-05</p>
              </div>
              <div class="invoice-footer flex">
                <span class="bj">编辑</span>
                <span class="del">删除</span>
              </div>
            </div>
            <!-- 添加按钮 -->
            <div class="add-invoice">
              <i style="font-size: 14px;color: #ced0da;" class="iconfont icon-jia"></i>
              <br />
              <p style="marginTop:8px;textAlign:center">添加发票</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="dialog-footer flex align-items justify-end">
        <button style="marginRight:16px" class="btn-primary">提交</button>
        <button @click="$emit('showDialogApply')" class="btn-blank">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
export default {
  components: {
    SelectInput
  }
};
</script>

<style lang="less" scoped>
.dialog-apply {
  font-size: 14px;
  /*头部*/
  .dialog-header {
    height: 40px;
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
  .dialog-body {
    background: #fff;
    padding: 16px 24px 0px;
    width: 1210px;
    max-height: 550px;
    overflow-y: auto;
    /*行*/
    .settlement-item {
      margin-bottom: 24px;
      padding-top: 24px;
      align-items: center;
      label {
        width: 72px;
        color: @color_7a8794;
      }
      /*右侧表格*/
      .table-wrapper {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        /*选择按钮*/
        .check-btn {
          cursor: pointer;
          background: #fff;
          color: @color_007aff;
          margin-bottom: 8px;
        }
        /*表格*/
        .table {
          border: 1px solid @color_e6eaee;
          ul > li {
            padding: 0 6px;
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
            text-align: right;
            width: 7.97872%;
          }
          .item7 {
            text-align: right;
            width: 7.97872%;
          }
          .item8 {
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
          .table-header {
            width: 100%;
            height: 36px;
            line-height: 36px;
            color: @color_96a4b3;
            background: #f5f7fb;
            border-bottom: 1px solid #e6eaee;
          }
          .row {
            cursor: pointer;
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #dadbe0;
            &:hover {
              background: @color_e9eff8;
            }
          }
          ul > li {
            padding: 0 6px;
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
            text-align: right;
            width: 7.97872%;
          }
          .item7 {
            text-align: right;
            width: 7.97872%;
          }
          .item8 {
            text-align: right;
            width: 7.97872%;
          }
          .item9 {
            text-align: center;
            width: 21.2766%;
          }
          .item10 {
            width: 4.25532%;
            -ms-align-items: center;
            -webkit-align-items: center;
            align-items: center;
            i.icon-del {
              display: none;
              color: @color_7a8794;
              font-size: 32px;
              background: transparent;
            }
          }
          .table-header {
            width: 100%;
            height: 36px;
            line-height: 36px;
            color: @color_96a4b3;
            background: #f5f7fb;
            border-bottom: 1px solid #e6eaee;
          }
          .row {
            cursor: pointer;
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #dadbe0;
            &:hover {
              background: @color_e9eff8;
            }
            &:hover {
              .item10 {
                i.icon-del {
                  display: inline;
                }
              }
            }
          }
          /*统计*/
          .calc {
            border-bottom: 0;
            font-size: 14px;
            color: @color_7a8794;
            text-align: right;
            padding-right: 30px;
          }
        }
      }
      /*右侧发票*/
      .associated-invoices {
        flex-wrap: wrap;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        /*内容*/
        .invoice-wrapper {
          width: 150px;
          border: 1px solid #ced0da;
          margin-right: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          .invoice-content {
            color: #7a8794;
            font-size: 12px;
            padding: 8px;
            height: 54px;
          }
          .invoice-footer {
            border-top: 1px solid #e6eaee;
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            padding: 8px;
            height: 30px;
            .bj {
              display: inline-block;
              height: 14px;
              line-height: 14px;
              color: @color_007aff;
            }
            .del {
              margin-left: 8px;
              display: inline-block;
              height: 14px;
              line-height: 14px;
              color: @color_f33;
            }
          }
        }
        /*添加按钮*/
        .add-invoice {
          border: 1px solid #ced0da;
          height: 86px;
          width: 150px;
          text-align: center;
          padding-top: 24px;
          margin-bottom: 8px;
          cursor: pointer;
          color: #8d9aa8;
          font-size: 12px;
        }
      }
    }
    .settlement-item + .settlement-item {
      border-top: 1px dashed @color_ced0da;
    }
  }
  /*按钮*/
  .dialog-footer {
    background: #fff;
    height: 61px;
    padding: 0 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 1px solid #e6eaee;
  }
}
</style>