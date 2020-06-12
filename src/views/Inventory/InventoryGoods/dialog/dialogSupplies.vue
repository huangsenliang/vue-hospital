<template>
<!-- 新建物资弹窗 -->
  <div class="dialog-supplies dialog">
    <div class="cover-wrapper"></div>
    <div class="supplies-content-wrapper content-style">
      <!-- 头部 -->
      <div class="header-search flex">
        <div class="header-left flex">
          <div class="input-wrapper" style="width:460px">
            <Search-Input placeholder="输入注册证号"></Search-Input>
          </div>
          <button class="btn-success">搜索</button>
        </div>
        <div class="header-right">
          <i
            @click="$emit('showSupplies')"
            class="icon-del iconfont"
          ></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content-body" style="display: flex;">
        <div class="left">
          <!-- 通用名 -->
          <div class="form-wrapper">
            <div class="form-item">
              <label for>
                <span>物资名称</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>物资类型</span>
              </label>
              <Select-Input></Select-Input>
            </div>
            <div class="form-item">
              <label for>
                <span>进口/国产</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>生产厂家</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>条形码</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>注册证名称</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>注册证号</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
          </div>
          <!--规格 -->
          <div class="form-wrapper flex">
            <div class="form-item" style="margin:0 8px 0 0px">
              <label for>
                <span>规格</span>
              </label>
              <div class="goods-num flex">
                <div class="num">
                  <input style="width:153px" type="text" />
                </div>
                <span style="margin:10px 0 0 8px">*</span>
              </div>
            </div>
            <!-- 包装数量 -->
            <div style="margin:0 20px 0 0px" class="form-item">
              <label for>
                <span>包装数量</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <div class="goods-num flex">
                <div class="num">
                  <input style="width:103px" type="text" />
                </div>
              </div>
            </div>

            <!-- 单位 -->
            <div
              @click="showSmallUnit=!showSmallUnit"
              class="form-item"
              style="margin:0 8px 0 0px"
              v-clickoutside="handleClickOutSideShowSmallUnit"
            >
              <label for>
                <span>最小单位</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <button class="btn-ghost-samll">{{SuppliesSmallUnit}}</button>
              <ul v-show="showSmallUnit" class="flex unit-li-wrapper">
                <li
                  @click="SuppliesSmallUnit=item"
                  v-for="(item,index) of smallUnitList"
                  :key="index"
                  class="item"
                  :class="{'is-selected':SuppliesSmallUnit===item}"
                >
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
            <span style="margin: 32px 8px 0 0">/</span>
            <!-- 单位 -->
            <div
              @click="showPackUnit=!showPackUnit"
              class="form-item"
              v-clickoutside="handleClickOutSideShowPackUnit"
            >
              <label for>
                <span>包装单位</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <button class="btn-ghost-samll">{{SuppliesPackUnit}}</button>
              <ul v-show="showPackUnit" class="flex unit-li-wrapper">
                <li
                  @click="SuppliesPackUnit=item"
                  v-for="(item,index) of smallUnitList"
                  :key="index"
                  class="item"
                  :class="{'is-selected':SuppliesPackUnit===item}"
                >
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 价格 -->
          <div class="form-wrapper flex" style="borderBottom:0">
            <!-- 允许对外销售 -->
            <div class="form-item">
              <label for>
                <el-checkbox v-model="checkedSuppliesForeignSales">允许对外销售</el-checkbox>
              </label>
              <div class="price-wrapper flex">
                <span class="symbol">￥</span>
                <input
                  :class="{'is-disabled':checkedSuppliesForeignSales==true}"
                  :disabled="checkedSuppliesForeignSales"
                  type="text"
                />
                <div class="price-num">
                  <span></span>
                </div>
              </div>
            </div>
            <!-- 允许拆零售 -->
            <div class="form-item">
              <label for>
                <el-checkbox v-model="checkedSuppliesAgree">允许拆零售</el-checkbox>
              </label>
              <div class="price-wrapper flex">
                <span class="symbol">￥</span>
                <input
                  :class="{'is-disabled':checkedSuppliesAgree==true}"
                  :disabled="checkedSuppliesAgree"
                  type="text"
                />
                <div class="price-num">
                  <span></span>
                </div>
              </div>
            </div>
            <!-- 进项税率 -->
            <div class="form-item flex" style="display:flex;marginTop:5px">
              <div class="left-tax">
                <label for>进项税率</label>
                <div class="flex">
                  <input type="text" />
                  <div class="tax">
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="detail-code">
            <label class="goods-code-type">药品编码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="系统生成或自定义" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
          <div class="detail-code">
            <label class="goods-code-type">社保编码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="-" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
          <div class="detail-code">
            <label class="goods-code-type">本位码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="-" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer-wrapper flex align-items justify-end">
        <div>
          <button @click="$emit('showSupplies')" class="btn-primary">完成</button>
          <button class="btn-blank">保存并继续</button>
          <button class="btn-blank">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
export default {
  components: {
    SelectInput,
    SearchInput
  },
  data() {
    return {
      showPackUnit: false, // 物资包装单位盒子显示隐藏控制变量
      SuppliesPackUnit: null, // 物资包装单位选中值
      SuppliesSmallUnit: null, // 物资选中的最小单位
      showSmallUnit: false, // 物资最小单位盒子显示隐藏控制变量
      smallUnitList: [
        "片",
        "颗",
        "粒",
        "个",
        "支",
        "只",
        "丸",
        "枚",
        "张",
        "贴",
        "包",
        "袋",
        "条",
        "根",
        "快",
        "板",
        "盒",
        "瓶",
        "桶",
        "罐",
        "筒",
        "盆",
        "箱",
        "件",
        "卷",
        "捆",
        "把",
        "套",
        "双",
        "米",
        "付",
        "台",
        "部",
        "本",
        "g",
        "ml"
      ], // 物资最小单位数据列表
      checkedSuppliesAgree: false, // 新建物资拆零销售双向绑定控制变量
      checkedSuppliesForeignSales: false // 对外销售双向绑定控制变量
    };
  },
  methods: {
    // 处理：点击除了ShowSmallUni元素外触发
    handleClickOutSideShowSmallUnit() {
      this.showSmallUnit = false;
    },
    // 处理：点击除了ShowPackUnit元素外触发
    handleClickOutSideShowPackUnit() {
      this.showPackUnit = false;
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-supplies {
  /*新建物资*/
  .supplies-content-wrapper {
    width: 1100px;
    .header-search {
      justify-content: space-between;
      height: 57px;
      align-items: center;
      padding: 0 24px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      .header-left {
        button {
          margin-left: 8px;
        }
      }
    }
    /*内容*/
    .content-body {
      background: #fff;
      .left {
        padding: 0 24px 30px;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        .form-wrapper {
          padding: 16px 0 0 0;
          border-bottom: 1px dashed #dadbe0;
          .form-item {
            position: relative;
            display: inline-block;
            margin-bottom: 24px;
            margin-right: 15px;
            label {
              label {
                padding: 0;
              }
              display: block;
              vertical-align: top;
              line-height: 1;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              float: none;
              text-align: left;
              padding: 0 0 8px;
              font-size: 14px;
              color: #7a8794;
              white-space: nowrap;
              i.icon-zhongdian {
                color: @color_FF9933;
              }
            }
            input {
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
              width: 210px;
            }
            /*单位*/
            .unit {
              width: 100px;
              height: 32px;
              cursor: pointer;
              padding: 3px 12px 3px 10px;
              &:hover {
                border: 1px solid @color_007aff;
              }
            }
            .unit-li-wrapper {
              width: 322px;
              flex-wrap: wrap;
              position: absolute;
              top: -80px;
              left: 74px;
              max-height: 200px;
              overflow-y: auto;
              border: 1px solid #dadbe0;
              border-radius: 3px;
              -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
              box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
              z-index: 9999;
              background-color: #fff;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              margin-top: 2px;
              .is-selected {
                background-color: #00ace9;
                color: #fff;
              }
              .item {
                display: inline-block;
                width: 78px;
                height: 36px;
                line-height: 36px;
                text-align: center;
                border-bottom: 1px solid #e6eaee;
                border-right: 1px solid #e6eaee;
                cursor: pointer;
                font-size: 14px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                vertical-align: middle;
              }
            }
            /*价格*/
            .price-wrapper {
              position: relative;
              input {
                width: 130px;
                padding-left: 30px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                // border-right:0 ;
              }
              .is-disabled {
                background-color: #f7f7f7 !important;
                border-color: #e6eaee;
                color: #000;
                cursor: not-allowed;
              }
              .symbol {
                position: absolute;
                top: 5px;
                left: 5px;
              }
              .price-num {
                width: 80px;
                line-height: 30px;
                padding: 0 5px;
                background-color: #f5f7fb;
                border-radius: 0 4px 4px 0;
                border: 1px solid #ced0da;
                border-left: 0;
                text-align: center;
              }
            }
            /*税率*/
            .left-tax,
            .right-tax {
              margin-right: 8px;
              input {
                width: 57px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              }
              .tax {
                width: 32px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                padding: 0 5px;
                background-color: #f5f7fb;
                border-radius: 0 4px 4px 0;
                border: 1px solid #ced0da;
                border-left: 0;
                border-left: none;
                text-align: center;
              }
            }
          }
        }
      }
      .right {
        padding: 24px 0 0 10px;
        border-left: 1px solid #e6eaee;
        width: 372px;
        background-color: #f7f8fa;
        .detail-code {
          height: 78px;
          .goods-code-type {
            padding: 0 0 8px 6px;
            color: #7a8794;
            font-size: 14px;
            line-height: 14px;
          }
          .code-wrapper {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            height: 26px;
            margin: 10px 0;
            position: relative;
            font-size: 12px;
            input {
              height: 26px;
              padding: 6px;
              border-radius: 0;
              font-size: 12px;
              border-radius: 4px;
              margin-right: 5px;
              background: transparent;
              border: 1px solid #f7f8fa;
            }
          }
        }
      }
    }
    /*底部按钮*/
    .footer-wrapper {
      border-top: solid 1px @color_dadbe0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 1;
      height: auto;
      padding: 14px 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  /*底部按钮*/
  .footer-wrapper {
    border-top: solid 1px @color_dadbe0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1;
    height: 61px;
    background: #fff;
    padding-right: 24px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    button {
      margin-left: 8px;
    }
  }
}
</style>