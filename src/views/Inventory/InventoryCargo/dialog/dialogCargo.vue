<template>
  <!-- 入库页面：新增入库弹窗 -->
  <div class="dialog-cargo dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style dialog-cargo-content">
      <!-- 头部 -->
      <div class="add-popper-header flex">
        <h4>入库单</h4>
        <div class="header-right">
          <i @click="$emit('showAddCargo')" class="icon-del iconfont"></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="add-popper-body">
        <div class="describe flex">
          <div class="left flex">
            <div style="marginRight:16px">
              <span style="color: #7a8794;">入库人：</span>
              <span>李思思</span>
            </div>
            <div class="ellipsis" style="marginRight:16px">
              <span style="color: #7a8794;">入库门店：</span>
              <span>惠民体验诊所</span>
            </div>
          </div>
          <div class="middle-wrapper flex">
            <div class="flex" style="alignItems: center;marginRight:16px">
              <label>供应商：</label>
              <Select-Input :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
            </div>
            <div class="flex" style="alignItems: center;marginRight:16px">
              <label>随货单号：</label>
              <input
                type="text"
                style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:100px"
              />
            </div>
            <div class="flex" style="alignItems: center;marginRight:16px">
              <label>备注：</label>
              <input
                type="text"
                style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:150px"
              />
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
              <span>税率</span>
            </li>
            <li class="item4">
              <span>厂家</span>
            </li>
            <li class="item5">
              <span>售价</span>
            </li>
            <li class="item6">
              <span>生成批号</span>
            </li>
            <li class="item7">
              <span>生成日期</span>
            </li>
            <li class="item8">
              <span>效期</span>
            </li>
            <li class="item9">
              <span>数量</span>
            </li>
            <li class="item10">
              <span>进阶</span>
            </li>
            <li class="item11">
              <span>含税金额</span>
            </li>
            <li style="width:28px" class="item12">
              <span></span>
            </li>
          </ul>
          <ul class="row flex">
            <li class="item1">
              <span>000666</span>
            </li>
            <li class="item2">
              <span>阿莫西林胶囊（阿莫灵</span>
              <span>5g*24粒子</span>
            </li>
            <li class="item3">
              <span>0%</span>
            </li>
            <li class="item4">
              <span>湖南迪诺</span>
            </li>
            <li class="item5">
              <span>25.00/盒</span>
            </li>
            <li class="item6">
              <input style="width:94px;height:32px;border:1px solid #ced0da;" type="text" />
            </li>
            <li class="item7">
              <input style="width:112px;height:32px;border:1px solid #ced0da;" type="text" />
            </li>
            <li class="item8">
              <input style="width:112px;height:32px;border:1px solid #ced0da;" type="text" />
            </li>
            <li class="item9 flex">
              <input style="width:60px;height:32px;border:1px solid #ced0da;" type="text" />
              <div class="unit flex" @click="showUnitSelect=!showUnitSelect">
                <span>{{selectedUnit}}</span>
                <i class="icon-shang1 iconfont"></i>
                <div class="unit-select" v-if="showUnitSelect">
                  <span @click="selectedUnit='盒'">盒</span>
                  <br />
                  <span @click="selectedUnit='贴'">贴</span>
                </div>
              </div>
            </li>
            <li class="item10">
              <input style="width:80px;height:32px;border:1px solid #ced0da;" type="text" />
              <span class="uti">/盒</span>
            </li>
            <li class="item11">
              <input style="width:80px;height:32px;border:1px solid #ced0da;" type="text" />
            </li>
            <li class="item12">
              <i class="icon-del iconfont"></i>
            </li>
          </ul>
        </div>
        <!--输入框 -->
        <div class="search-wrapper flex align-items">
          <Add-Input placeholder="请输入入库药品或扫码识别" style="width:300px"></Add-Input>
          <button class="btn-ghost" style="width:100px;marginLeft:10px">导入到货清单</button>
        </div>
        <!-- 底部按钮 -->
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex justify-between align-items">
        <button class="btn-blank-small">保存草稿</button>
        <div class="right">
          <button style="marginRight:10px" @click="$emit('showAddCargo')" class="btn-blank">关闭</button>
          <button class="btn-blank">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
import AddInput from "@/components/AddInput";
export default {
  components: {
    SelectInput,
    SearchInput,
    AddInput
  },
  data() {
    return {
      goodsOptionsList: [],
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      selectedUnit: "盒" // 选中的单位值
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-cargo {
  /*弹窗*/
  .dialog-cargo-content {
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
      height: 400px;
      overflow-y: auto;
      .describe {
        height: 64px;
        max-height: 64px;
        min-height: 64px;
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
        .middle-wrapper {
          margin-left: 50px;
        }
      }
      /*表格*/
      .table {
        .row {
          li input {
            text-align: center;
          }
          padding: 0 8px;
          align-items: center;
          height: 48px;
          border-bottom: 1px solid #e6eaee;
          cursor: pointer;
          &:hover {
            background: @color_e9eff8;
          }
          &:hover .item12 > i.icon-del {
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
          text-align: right;
          padding-right: 16px;
          width: 60px;
        }
        .item4 {
          padding-right: 8px;
          width: 100px;
        }
        .item5 {
          text-align: center;
          padding-right: 16px;
          width: 90px;
        }
        .item6 {
          padding-right: 8px;
          width: 102px;
        }
        .item7 {
          padding-right: 8px;
          width: 120px;
        }
        .item8 {
          padding-right: 8px;
          width: 120px;
        }
        .item9 {
          padding-right: 8px;
          width: 108px;
          .unit {
            position: relative;
            display: inline-block;
            width: 37px;
            height: 32px;
            line-height: 32px;
            padding: 0 5px;
            background-color: #f5f7fb;
            border-radius: 0 2px 2px 0;
            border: 1px solid #ced0da;
            border-left: none;
            text-align: center;
            .icon-shang1 {
              font-size: 10px;
            }
            .unit-select {
              position: absolute;
              top: 33px;
              left: -1px;
              background: #fff;
              width: 37px;
              border: 1px solid @color_ced0da;
              border-radius: 3px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              z-index: 222;
              span {
                display: inline-block;
                height: 32px;
                width: 100%;
                text-align: center;
              }
              span ~ span {
                border-top: 1px solid @color_ced0da;
              }
            }
          }
        }
        .item10 {
          position: relative;
          text-align: center;
          padding-right: 8px;
          width: 130px;
          span.uti {
            position: absolute;
            left: 110px;
            top: 5px;
          }
        }
        .item11 {
          text-align: right;
          // padding-left: 20px;
          width: 88px;
        }
        .item12 {
          width: 28px;
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
        height: 64px;
      }
    }
    .btn-wrapper {
      height: 61px;
      padding: 0 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>