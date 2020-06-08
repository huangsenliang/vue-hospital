<template>
  <!-- 出库组件：新增出库页面弹窗 -->
  <div class="dialog-outbound dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style outbound-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="科室出库" name="department">
          <div class="department-wrapper">
            <!-- 内容 -->
            <div class="body-content">
              <!-- 描述 -->
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
                    <label style="color: #7a8794;">供应商：</label>
                    <el-cascader :options="options1" clearable></el-cascader>
                  </div>
                  <div class="flex" style="alignItems:center;marginRight:16px">
                    <label style="color: #7a8794;">备注：</label>
                    <input
                      placeholder="请填写备注信息"
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
                    <span>厂家</span>
                  </li>
                  <li class="item4">
                    <span>批次</span>
                  </li>
                  <li class="item5">
                    <span>生成批号</span>
                  </li>
                  <li class="item6">
                    <span>效期</span>
                  </li>
                  <li class="item7">
                    <span>当前库存</span>
                  </li>
                  <li class="item8">
                    <span>出库数量</span>
                  </li>
                  <li class="item9">
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
                    <span>-sssss</span>
                  </li>
                  <li class="item4">
                    <Select-Input></Select-Input>
                  </li>
                  <li class="item5">
                    <span></span>
                  </li>
                  <li class="item6">
                    <span></span>
                  </li>
                  <li class="item7">
                    <span>3780g</span>
                  </li>
                  <li class="item8 flex">
                    <input type="text" />
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
                  <li class="item9 flex">
                    <i class="icon-del iconfont"></i>
                  </li>
                </ul>
              </div>
              <!-- 输入框 -->
              <Add-Input style="width:300px" placeholder="请输入出库药品或扫码识别"></Add-Input>
            </div>
            <!-- 底部按钮 -->
            <div class="btn-wrapper justify-between flex align-items">
              <button class="btn-blank">保存草稿</button>
              <div class="right">
                <button style="marginRight:10px" class="btn-blank">确定</button>
                <button @click="$emit('showAddOutbound')" class="btn-blank">关闭</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="报损出库" name="breakage">
          <!-- 内容 -->
          <div class="breakage-wrapper">
            <div class="body-content">
              <!-- 描述 -->
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
                  <div class="flex" style="alignItems:center;marginRight:16px">
                    <label style="color: #7a8794;">备注：</label>
                    <input
                      placeholder="请填写备注信息"
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
                    <span>厂家</span>
                  </li>
                  <li class="item4">
                    <span>批次</span>
                  </li>
                  <li class="item5">
                    <span>生成批号</span>
                  </li>
                  <li class="item6">
                    <span>效期</span>
                  </li>
                  <li class="item7">
                    <span>当前库存</span>
                  </li>
                  <li class="item8">
                    <span>出库数量</span>
                  </li>
                  <li class="item9">
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
                    <span>-sssss</span>
                  </li>
                  <li class="item4">
                    <Select-Input></Select-Input>
                  </li>
                  <li class="item5">
                    <span></span>
                  </li>
                  <li class="item6">
                    <span></span>
                  </li>
                  <li class="item7">
                    <span>3780g</span>
                  </li>
                  <li class="item8 flex">
                    <input type="text" />
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
                  <li class="item9 flex">
                    <i class="icon-del iconfont"></i>
                  </li>
                </ul>
              </div>
              <!-- 输入框 -->
              <Add-Input style="width:300px" placeholder="请输入出库药品或扫码识别"></Add-Input>
            </div>
            <!-- 底部按钮 -->
            <div class="btn-wrapper justify-between flex align-items">
              <button class="btn-blank">保存草稿</button>
              <div class="right">
                <button style="marginRight:10px" class="btn-blank">确定</button>
                <button @click="$emit('showAddOutbound')" class="btn-blank">关闭</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="退货出库" name="refund">
          <div class="refund-wrapper">
            <div class="input-wrapper flex align-items">
              <div class="calendar-wrapper" style="width:250px">
                <el-date-picker
                v-model="valueDate"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
              </div>
              <Select-Input></Select-Input>
              <SelectInput></SelectInput>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
/*****************引入全局组件********/
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
      valueDate:'', // 入库时间绑定变量
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      selectedUnit: "盒", // 选中的单位值
      options1: [
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
      ],
      activeName: "department" // 默认加载
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-outbound {
  .outbound-content {
    width: 1100px;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
    // 科室出库
    .department-wrapper,
    .breakage-wrapper {
      /*内容*/
      .body-content {
        font-size: 14px;
        padding: 0px 24px;
        height: 335px;
        min-height: 335px;
        // 描述
        .describe {
          height: 64px;
          max-height: 64px;
          min-height: 64px;
          -ms-align-items: center;
          -webkit-align-items: center;
          align-items: center;
          .middle-wrapper {
            margin-left: 50px;
            .el-input--suffix .el-input__inner {
              height: 32px;
              width: 160px;
            }
          }
        }
        /*表格*/
        .table {
          margin-bottom: 20px;
          ul > li {
            padding: 0 6px;
          }
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
            width: 200px;
            text-align: center;
          }
          .item4 {
            width: 120px;
          }
          .item5 {
            width: 120px;
          }
          .item6 {
            width: 102px;
          }
          .item7 {
            padding-right: 8px;
            width: 120px;
          }
          .item8 {
            padding-right: 8px;
            width: 120px;
            input {
              width: 60px;
              height: 32px;
              border: 1px solid #ced0da;
            }
            .unit {
              position: relative;
              padding: 5px 3px;
              margin-left: -1px;
              border: 1px solid @color_ced0da;
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
                line-height: 32px;
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
          .item9 {
            width: 28px;
            padding-left: 0;
            text-align: left;
            cursor: pointer;
            i.icon-del {
              // display: none;
              font-size: 14px;
              font-size: 25px;
              color: @color_96a4b3;
              height: 30px;
              line-height: 30px;
              &:hover {
                background: #fff;
                border-radius: 5px;
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
}
</style>