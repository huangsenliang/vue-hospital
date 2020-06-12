<template>
  <!-- 新建药品弹窗 -->
  <div class="dialog-drug dialog">
    <div class="cover-wrapper"></div>
    <div class="drug-content-wrapper content-style">
      <!-- 头部 -->
      <div class="header-search flex">
        <div class="header-left flex">
          <div class="input-wrapper" style="width:460px">
            <Search-Input placeholder="输入注册证号"></Search-Input>
          </div>
          <button class="button-small button-success">搜索</button>
        </div>
        <div class="header-right">
          <i
            @click="$emit('showDrug')"
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
                <span>通用名</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <input type="text" />
            </div>
            <div class="form-item">
              <label for>
                <span>药品类型</span>
              </label>
              <div class="select-wrapper flex">
                <el-cascader :options="options" clearable></el-cascader>
              </div>
            </div>
            <div class="form-item">
              <label for>
                <span>商品名</span>
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
                <span>国药准字</span>
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
          </div>
          <!-- 剂量 -->
          <div class="form-wrapper flex">
            <div class="form-item">
              <label for>
                <span>剂量</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <div class="goods-num flex">
                <div class="num">
                  <input style="width:130px" type="text" />
                  <div></div>
                </div>
                <div class="goods-dosageformunit">
                  <input style="width:80px" type="text" />
                  <div></div>
                </div>
                <span style="margin:10px 0 0 15px">*</span>
              </div>
            </div>
            <div class="form-item">
              <label for>
                <span>制剂</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <div class="goods-num flex">
                <div class="num">
                  <input style="width:130px" type="text" />
                  <div></div>
                </div>
                <div class="goods-dosageformunit">
                  <input style="width:80px" type="text" />
                  <div></div>
                </div>
                <span style="margin:8px 0 0 15px">/</span>
              </div>
            </div>
            <div
              @click="showUnit=!showUnit"
              class="form-item"
              style=" alignItems: flex-end;display:flex"
            >
              <button class="btn-ghost-samll">{{unit}}</button>
              <ul v-show="showUnit" class="flex unit-li-wrapper">
                <li
                  @click="unit=item"
                  v-for="(item,index) of unitList"
                  :key="index"
                  class="item"
                  :class="{'is-selected':unit===item}"
                >
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 价格 -->
          <div class="form-wrapper flex" style="borderBottom:0">
            <!-- 零售价格 -->
            <div class="form-item" style="marginTop:3px">
              <label for>
                <span>零售价格</span>
                <i class="icon-zhongdian iconfont"></i>
              </label>
              <div class="price-wrapper flex">
                <span class="symbol">￥</span>
                <input type="text" />
                <div class="price-num">
                  <span>/盒</span>
                </div>
              </div>
            </div>
            <!-- 允许拆零售 -->
            <div class="form-item">
              <label for>
                <el-checkbox v-model="checkedAgree">允许拆零售</el-checkbox>
              </label>
              <div class="price-wrapper flex">
                <span class="symbol">￥</span>
                <input
                  :class="{'is-disabled':checkedAgree==true}"
                  :disabled="checkedAgree"
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
                  <span style="padding:5px 0 0 8px">-</span>
                </div>
              </div>

              <div class="right-tax">
                <label for>销项税率</label>
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
          <button @click="$emit('showDrug')" class="btn-primary">完成</button>
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
      checkedAgree: false, // 是否允许拆零售卖
      unitList: [
        "盒",
        "瓶",
        "袋",
        "包",
        "板",
        "桶",
        "罐",
        "箱",
        "支",
        "片",
        "枚",
        "个"
      ], // 药品单位数据列表
      showUnit: false, // 药品单位盒子显示隐藏控制变量
      unit: null, // 药品选中的单位
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ] // 药品类型数据
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-drug {
  /*新建药品弹窗*/
  .drug-content-wrapper {
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
        padding: 0 24px 20px;
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
            .select-wrapper {
              input {
                width: 105px;
              }
              .select-input:nth-child(1) {
                input {
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                }
              }
              .select-input:nth-child(2) {
                margin-left: -1px;
                input {
                  border-left: 0;
                }
              }
              input + input {
                margin-left: -1px;
              }
            }
            .goods-num {
              .goods-dosageformunit {
                input {
                  border-left: 0;
                  margin-left: -1px;
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                }
              }
              .num {
                input {
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                }
              }
            }
            .unit-li-wrapper {
              width: 322px;
              flex-wrap: wrap;
              position: absolute;
              top: 24px;
              left: 74px;
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
                width: 80px;
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
      height: 61px;
      background: #fff;
      padding-right:  24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      button{
          margin-left: 8px;
      }
    }
  }
}
</style>