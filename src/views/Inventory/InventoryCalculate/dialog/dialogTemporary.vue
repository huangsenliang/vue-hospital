<template>
  <!--临时盘点弹窗 -->
  <div class="dialog-temporary dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style temporary-content">
      <!-- 头部 -->
      <div class="popper-header flex">
        <h4>全量盘点</h4>
        <i @click="$emit('showDialogTemporary')" class="icon-del iconfont"></i>
      </div>
      <!-- 内容 -->
      <div class="popper-body">
        <div class="describe flex">
          <label for>备注：</label>
          <input type="text" />
        </div>
        <!-- 表格 -->
        <div class="table">
          <ul class="flex table-header">
            <li class="item1">
              <span>药品编码</span>
            </li>
            <li class="item2">
              <span>药品名称</span>
            </li>
            <li class="item3">
              <span>类型</span>
            </li>
            <li class="item4">
              <span>等级</span>
            </li>
            <li class="item5">
              <span>批次</span>
            </li>
            <li class="item6">
              <span>生产批号</span>
            </li>
            <li class="item7">
              <span>账面数量</span>
            </li>
            <li class="item8">
              <span>实际数量</span>
            </li>
            <li class="item9">
              <span>盈亏数量</span>
            </li>
            <li class="item10">
              <span></span>
            </li>
          </ul>
          <ul class="flex row">
            <li class="item1">
              <span>44445421324</span>
            </li>
            <li class="item2">
              <span>多潘立酮片（路得啉）10mg*30片</span>
            </li>
            <li class="item3">
              <span>西药</span>
            </li>
            <li class="item4">
              <span></span>
            </li>
            <li class="item5">
              <span></span>
            </li>
            <li class="item6">
              <span></span>
            </li>
            <li class="item7">
              <span>7盒</span>
            </li>
            <li class="item8 flex">
              <input type="text" />
              <span class="unit">盒</span>
              <input type="text" />
              <span class="unit">片</span>
            </li>
            <li class="item9">
              <span>555</span>
            </li>
            <li class="item10">
              <span></span>
            </li>
          </ul>
        </div>
        <div class="add-wrapper flex align-items justify-between">
          <Add-Input style="width:250px" placeholder="请输入盘点药品或扫码识别" ></Add-Input>
          <p class="txt">
            品种：
            <span>1</span>
          </p>
        </div>
        <!-- 输入框 -->
        <!-- <div class="input-wrapper flex">
          <div class="left">
            <input type="text" placeholder="请输入盘点药品或扫码识别" />
            <i class="iconfont icon-jia"></i>
          </div>
          <div class="right">
            <span>品种：</span>1
          </div>
        </div>-->
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button style="marginRight:16px" class="btn-primary">确定</button>
        <button class="btn-danger" @click="$emit('showDialogTemporary')">终止盘点</button>
      </div>
    </div>
  </div>
</template>

<script>
/****************全局组件*************/

import AddInput from "@/components/AddInput";
export default {
  components: {
    AddInput
  }
};
</script>

<style lang="less" scoped>
.dialog-temporary {
  .temporary-content {
    background: #fff;
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
      font-size: 14px;
      padding: 0px 24px;
      height: 567px;
      min-height: 300px;
      width: 1210px;
      .describe {
        align-items: center;
        height: 64px;
        max-height: 64px;
        min-height: 64px;
        input {
          border: 1px solid @color_ced0da;
          height: 32px;
          border-radius: 4px;
          width: 300px;
          padding: 0 20px;
        }
        label {
          font-size: 14px;
          color: #7a8794;
          white-space: nowrap;
        }
      }
      /*表格*/
      .table {
        .item1 {
          width: 106px;
        }
        .item2 {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
        .item3 {
          padding-left: 16px;
          width: 76px;
        }
        .item4 {
          padding-right: 16px;
          width: 70px;
        }
        .item5 {
          padding-right: 16px;
          width: 136px;
        }
        .item6 {
          padding-right: 16px;
          width: 78px;
        }
        .item7 {
          padding-left: 16px;
          width: 120px;
        }
        .item8 {
          text-align: left;
          width: 160px;
          input {
            border: 1px solid @color_ced0da;
            width: 50px;
            height: 32px;
            margin-right: -1px;
            text-align: center;
          }
          span.unit {
            display: inline-block;
            width: 25px;
            height: 32px;
            background: #eff1f5;
            text-align: center;
            line-height: 32px;
            margin-right: 8px;
            border: 1px solid @color_ced0da;
          }
        }
        .item9 {
          text-align: right;
          width: 92px;
        }
        .item10 {
          width: 32px;
        }
        .row {
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          height: 48px;
          padding: 0 8px;
          border-bottom: 1px solid #e6eaee;
          cursor: pointer;
          &:hover {
            background: @color_e9eff8;
          }
        }
        .table-header {
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          height: 32px;
          color: #96a4b3;
          font-weight: 700;
          padding: 0 8px;
          border-bottom: 1px solid #e6eaee;
          border-top: 1px solid #e6eaee;
          background-color: #f5f7fb;
        }
      }
      // 添加输入框
      .add-wrapper{
       height: 60px;
       .txt{
         color: @color_7a8794;
         >span{
           color: #000;
         }
       }
      }
    }
    /*底部按钮*/
    .btn-wrapper {
      padding: 0 24px;
      height: 61px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>