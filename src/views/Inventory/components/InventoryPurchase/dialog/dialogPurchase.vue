<template>
  <!-- 采购页面：新增采购申请弹窗 -->
  <div class="dialog-purchase dialog">
    <div class="cover-wrapper"></div>
    <div class="add-popper-content content-style">
      <!-- 头部 -->
      <div class="add-popper-header flex">
        <h4>采购申请单</h4>
        <div class="header-right">
          <i class="icon-del iconfont" @click="$emit('showAddPurchaser')"></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="add-popper-body">
        <div class="describe flex">
          <div class="left flex">
            <div style="marginRight:16px">
              <span style="color: #7a8794;">申请人：</span>
              <span>李思思</span>
            </div>
            <div class="ellipsis" style="marginRight:16px">
              <span style="color: #7a8794;">申请门店：</span>
              <span>惠民体验诊所</span>
            </div>
          </div>
          <div class="middle-wrapper flex">
            <div class="flex" style="alignItems: center;marginRight:16px">
              <label>采购类型：</label>
              <Select-Input style="width:150px" :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
            </div>
            <div class="flex" style="alignItems: center;marginRight:16px">
              <label>备注：</label>
              <input
                type="text"
                style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:300px"
              />
            </div>
          </div>
          <div class="right">
            <div @click="showDialogWrapper=true" class="btn">
              <span>库存告警药品</span>
              <br />
              <span>(13)</span>
            </div>
            <!-- 库存告警药品 -->
            <div v-show="showDialogWrapper">
                <Dialog-Purchase-Warn @showDialogWrapper="showDialogWrapper=false"></Dialog-Purchase-Warn>
            </div>
          </div>
        </div>
        <!-- 表格 -->
        <div class="table">
          <ul class="table-header flex">
            <li class="item1">
              <span>药品编码</span>
            </li>
            <li class="item2">
              <span>药品名称</span>
            </li>
            <li class="item3">
              <span>厂家</span>
            </li>
            <li class="item4">
              <span>最近供应商</span>
            </li>
            <li class="item5">
              <span>最近进价</span>
            </li>
            <li class="item6">
              <span>剩余库存</span>
            </li>
            <li class="item7">
              <span>日均销量(近15天)</span>
            </li>
            <li class="item8">
              <span>毛利率</span>
            </li>
            <li class="item9">
              <span>数量</span>
            </li>
            <li class="item10">
              <span></span>
            </li>
          </ul>
          <ul class="row flex">
            <li class="item1">
              <span>000666</span>
            </li>
            <li class="item2">
              <span>阿莫西林胶囊（阿莫灵）</span>
              <span>5g*24粒子</span>
            </li>
            <li class="item3">
              <span>澳美制药</span>
            </li>
            <li class="item4">
              <span></span>
            </li>
            <li class="item5">
              <span>-</span>
            </li>
            <li class="item6">
              <span>0盒</span>
            </li>
            <li class="item7">
              <span>0盒</span>
            </li>
            <li class="item8">
              <span>0.00%</span>
            </li>
            <li class="item9 flex">
              <input type="text" s />
              <span class="unit">盒</span>
            </li>
            <li class="item10">
              <i class="icon-del iconfont"></i>
            </li>
          </ul>
        </div>
        <!--输入框 -->
        <div class="search-wrapper flex">
          <Add-Input style="width:400px" placeholder="请输入采购药品或扫码识别"></Add-Input>
          <div class="right flex">
            <div style="marginRight:16px;">
              <span style="color:#96a4b3">品种：</span>
              <span>1</span>
            </div>
            <div>
              <span style="color:#96a4b3">数量：</span>
              <span>1</span>
            </div>
          </div>
        </div>
        <!-- 底部按钮 -->
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex justify-end align-items">
        <button class="btn-blank" style="marginRight:10px">确定</button>
        <button @click="$emit('showAddPurchaser')" class="btn-blank">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
/******************全局组件************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
import AddInput from "@/components/AddInput";
/********************局部组件*********/ 
// 库存告警药品弹窗组件
import DialogPurchaseWarn from "./dialogPurchaseWarn";
export default {
  components: {
    AddInput,
    SelectInput,
    SearchInput,
    DialogPurchaseWarn
  },
  data() {
    return {
      goodsOptionsList: [],
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      selectedUnit: "盒", // 选中的单位值
      
      showDialogWrapper: false // 库存告警药品弹窗显示隐藏控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-purchase {
  /*弹窗*/
  .add-popper-content {
    min-width: 1162px;
    background: #fff;
    /*头部*/
    .add-popper-header {
      height: 41px;
      padding: 0 10px 0 24px;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-weight: 700;
        font-size: 16px;
      }
    }
    /*内容*/
    .add-popper-body {
      font-size: 14px;
      padding: 0px 24px;
      height: 335px;
      min-height: 335px;
      .describe {
        height: 64px;
        max-height: 64px;
        min-height: 64px;
        -ms-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
        .right {
          .btn {
            cursor: pointer;
            font-size: 12px;
            background: @color_14f16c;
            color: #fff;
            height: 32px;
            padding: 1px 15px;
            text-align: center;
            border-radius: 4px;
            &:hover {
              background: @color_2dd670;
            }
          }
         
        }
      }
      /*表格*/
      .table {
        .row {
          padding: 0 8px;
          align-items: center;
          height: 48px;
          border-bottom: 1px solid #e6eaee;
          cursor: pointer;
          &:hover {
            background: @color_e9eff8;
          }
          &:hover .item10 > i.icon-del {
            display: inline;
          }
        }
        .item1 {
          width: 90px;
        }
        .item2 {
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          max-width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item3 {
          padding-left: 26px;
          width: 150px;
        }
        .item4 {
          padding-left: 16px;
          width: 150px;
        }
        .item5 {
          text-align: right;
          padding-right: 12px;
          width: 80px;
        }
        .item6 {
          text-align: right;
          padding-right: 12px;
          width: 80px;
        }
        .item7 {
          text-align: right;
          padding-right: 10px;
          width: 120px;
        }
        .item8 {
          text-align: right;
          width: 70px;
        }
        .item9 {
          text-align: right;
          justify-content: flex-end;
          width: 110px;
          input {
            text-align: center;
            width: 60px;
            height: 32px;
            border-radius: 0;
            border: 1px solid @color_ced0da;
            background-color: #fff;
          }
          span.unit {
            display: inline-block;
            width: 30px;
            height: 32px;
            padding: 0 5px;
            background-color: #f5f7fb;
            border-radius: 0 2px 2px 0;
            border: 1px solid #ced0da;
            border-left: none;
            text-align: center;
          }
        }
        .item10 {
          width: 32px;
          text-align: right;
          cursor: pointer;
          i.icon-del {
            display: none;
            font-size: 16px;
            color: @color_96a4b3;
            border: 1px solid @color_ced0da;
            border-radius: 50%;
            &:hover {
              color: @color_2680f7;
              border: 1px solid @color_2680f7;
            }
          }
        }
        .table-header {
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          height: 32px;
          font-weight: 700;
          color: @color_96a4b3;
          border-bottom: 1px solid #e6eaee;
          border-top: 1px solid #e6eaee;
          background-color: #f5f7fb;
          padding: 0 8px;
        }
      }
      /*输入框*/
      .search-wrapper {
        position: relative;
        height: 64px;
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        .left {
          .search-input {
            input {
              padding-left: 30px;
              width: 250px;
            }
            i.icon-jia {
              position: absolute;
              left: 10px;
              font-size: 14px;
              font-weight: 700;
              color: @color_96a4b3;
            }
          }
        }
      }
    }
    // 底部按钮
    .btn-wrapper {
      padding: 0 24px;
      height: 61px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid @color_e6eaee;
    }
  }
}
</style>