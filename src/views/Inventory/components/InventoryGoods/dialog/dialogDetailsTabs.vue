<template>
  <div class="goods-tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="药品信息" name="drugInformation">
        <div class="drug-information">
          <!-- 药品信息 -->
          <div class="drug-information-body flex">
            <!-- 右侧 -->
            <div class="body-left flex-item">
              <!-- 通用名 -->
              <div class="form-wrapper flex flex-wrap align-items">
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
              <div class="form-wrapper flex-wrap flex align-items">
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
                <div @click="showUnit=!showUnit" class="form-item">
                  <label for>
                    <span>包装</span>
                    <i class="icon-zhongdian iconfont"></i>
                  </label>
                  <button class="btn-ghost-samll unit">{{unit}}</button>
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
              <div class="form-wrapper flex flex-wrap align-items">
                <!-- 零售价格 -->
                <div class="form-item" style="marginTop:3px">
                  <label class="cost-price flex">
                    <span>
                      零售价格
                      <i class="icon-zhongdian iconfont"></i>
                    </span>
                    <div class="view-cost-price">
                      <span class="cost">进价</span>
                      <div></div>
                    </div>
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
                <div class="form-item flex">
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
            <!-- 左侧 -->
            <div class="body-right">
              <!-- 上 -->
              <div class="goods-code">
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
              <!-- 下 -->
              <div class="update-log-wrapper">
                <button @click="showHistoryList=!showHistoryList" class="btn-history">查看修改记录</button>
                <div v-if="showHistoryList" class="log-list-wrapper">
                  <ul class="event-list">
                    <li class="row" v-for="(item,index) of 3" :key="index">
                      <div class="log-title">
                        <span class="title">2020-05-21 15:03</span>
                        <span class="title">李思思</span>
                        <span class="title">惠民体验</span>
                      </div>
                      <div class="log-detail">
                        <span>进项税率</span>
                        <span>从默认值修改为1</span>
                      </div>
                      <div class="log-detail">
                        <span>销项税率</span>
                        <span>从默认值修改为1</span>
                      </div>
                      <div class="log-detail">
                        <span>创建药品</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 底部按钮 -->
          <div class="details-footer flex">
            <div class="footer-left">
              <button style="marginRight:8px" class="btn-blank">保存</button>
              <button @click="$emit('showDetailsPopper')" class="btn-blank">取消</button>
            </div>
            <button class="btn-danger">删除药品</button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="批次信息" name="second">
        <div class="batch-info">
          <!-- 搜索框 -->
          <div class="search-wrapper flex">
            <Search-Input placeholder="搜索批次"></Search-Input>
          </div>
          <!-- 表格 -->
          <div class="batch-table">
            <ul class="table-header flex">
              <li class="item1" >
                <span>门诊</span>
              </li>
              <li class="item2">
                <span>批次</span>
              </li>
              <li class="item3">
                <span>剩余库存</span>
              </li>
              <li class="item4">
                <span>入库时间</span>
              </li>
              <li class="item5">
                <span>生产批号</span>
              </li>
              <li class="item6">
                <span>效期</span>
              </li>
              <li class="item7">
                <span>进价</span>
              </li>
              <li class="item8">
                <span>进价总金额</span>
              </li>
              <li class="item9">
                <span>入库人</span>
              </li>
            </ul>
            <ul v-for="(item,index) of 2" :key="index" class="row flex" @click="showBatchPopper=true">
              <li class="item1">
                <span>ABC体验诊所</span>
              </li>
              <li class="item2">
                <span>51028557</span>
              </li>
              <li class="item3">
                <span>12g</span>
              </li>
              <li class="item4">
                <span>2020-03-10 10:41:16</span>
              </li>
              <li class="item5">
                <span>--</span>
              </li>
              <li class="item6">
                <span>--</span>
              </li>
              <li class="item7">
                <span>0.045g</span>
              </li>
              <li class="item8">
                <span>0.54</span>
              </li>
              <li class="item9">
                <span>李思思</span>
              </li>
            </ul>
          </div>
          <!-- 批次明显弹窗 -->
          <div v-show="showBatchPopper" >
            <Dialog-Batch @showBatchPopper="showBatchPopper=false"></Dialog-Batch>
          </div>
          <!-- 底部分页 -->
          <div class="batch-footer flex">
            <div class="footer-left">
              <button class="btn-page">上一页</button>
              <span style="padding:0 15px;fontSize:16px">1</span>
              <button class="btn-page">下一页</button>
            </div>
            <div class="footer-right">
              <p>
                共
                <span style="fontWeight: 700;">3</span> 条数据
              </p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="进销存清单" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="预警设置" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/*****************引入全局组件********/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
/****************局部组件*************/ 
import DialogBatch from "../dialog/dialogBatch";
export default {
  components: {
    SelectInput,
    SearchInput,
    DialogBatch
  },
  data() {
    return {
      activeName: "drugInformation",
      /***********批次信息******/ 
       showBatchPopper:true,  // 批次明显弹窗控制变量
      /********药品信息*******/
      showHistoryList: false, // 历史记录显示隐藏控制变量
      showUnit: false, // 药品单位盒子显示隐藏控制变量
      unit: null, // 药品选中的单位
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
      checkedAgree: false, // 是否允许拆零售卖
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
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
.goods-tabs {
  width: 1100px;
  padding: 0 16px;
  background: #fff;
  // 药品信息
  .drug-information {
    .drug-information-body {
      /*左侧*/
      .body-left {
        // padding: 0 24px 30px;
        height: 445px;
        overflow-y: auto;
        .form-wrapper {
          border-bottom: 1px dashed #dadbe0;
          margin-bottom: 16px;
          .form-item {
            position: relative;
            margin-bottom: 24px;
            margin-right: 15px;
            label.cost-price {
              -ms-display: flex !important;
              -webkit-display: flex !important;
              display: flex !important;
              padding-left: 8px;
              justify-content: space-between;
              .view-cost-price {
                .cost {
                  cursor: pointer;
                  color: @color_007aff;
                }
              }
            }
            label {
              label {
                padding: 0;
              }
              display: block;
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
            /*单位*/
            .unit {
              width: 70px;
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
        .form-wrapper:last-child {
          border: 0;
        }
      }
      /*右侧*/
      .body-right {
        padding: 24px 0 0 10px;
        border-left: 1px solid #e6eaee;
        width: 372px;
        max-height: 445px;
        overflow-y: auto;
        background-color: #f7f8fa;
        /*上*/
        .goods-code {
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
        /*下*/
        .update-log-wrapper {
          font-size: 12px;
          margin: 0 16px 0 6px;
          border-top: 1px solid #e6eaee;
          padding-top: 16px;
          .btn-history {
            cursor: pointer;
            min-width: 44px;
            height: 14px;
            line-height: 14px;
            padding: 0;
            color: #2680f7;
            font-size: 14px;
            background: rgba(0, 0, 0, 0);
            border: none;
          }
          .log-list-wrapper {
            .event-list {
              li.row {
                padding: 16px 0;
                border-bottom: 1px solid #e6eaee;
              }
              .log-title {
                .title {
                  width: auto;
                  font-size: 12px;
                  line-height: 1;
                  color: #96a4b3;
                  margin-right: 6px;
                }
              }
              .log-detail {
                font-size: 12px;
                line-height: 17px;
                margin-top: 8px;
                color: #7a8794;
                span:nth-child(1) {
                  width: 72px;
                  min-width: 72px;
                  max-width: 72px;
                  margin-right: 12px;
                }
              }
            }
          }
        }
      }
    }
    /*底部按钮*/
    .details-footer {
      -webkit-justify-content: space-between;
      -ms-justify-content: space-between;
      justify-content: space-between;
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
  // 批次信息
  .batch-info {
    padding: 0 24px 24px;
    /*搜索框*/
    .search-wrapper {
      height: 64px;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
    }
    /*表格内容*/
    .batch-table {
      max-height: 450px;
      min-height: 300px;
      overflow-y: auto;
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
        width: 17.6028%;
      }
      .item2 {
        width: 11.6383%;
      }
      .item3 {
        width: 7.0922%;
      }
      .item4 {
        text-align: center;
        width: 14.1844%;
      }
      .item5 {
        text-align: center;
        width: 12.0567%;
      }
      .item6 {
        text-align: center;
        width: 12.0567%;
      }
      .itme7 {
        text-align: right;
        width: 7.0922%;
      }
      .item8 {
        text-align: right;
        width: 10.6383%;
      }
      .item9 {
        text-align: center;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      .table-header {
        width: 100%;
        height: 36px;
        line-height: 36px;
        color: @color_96a4b3;
        background: #f5f7fb;
        border-top: 1px solid #e6eaee;
        border-bottom: 1px solid #e6eaee;
      }
    }
    
    /*底部分页*/
    .batch-footer {
      height: 50px;
      margin-top: 16px;
      -webkit-justify-content: space-between;
      -ms-justify-content: space-between;
      justify-content: space-between;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
</style>