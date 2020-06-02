<template>
  <div class="outbound-wrapper">
    <!-- 头部 -->
    <div class="outbound-header flex">
      <div class="flex">
        <Calendar style="marginRight:16px"></Calendar>
        <Select-Input style="marginRight:16px"></Select-Input>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <div class="outbound-header-right flex">
        <!-- 新增入库弹窗 -->
        <div class="add-outbound-wrapper">
          <button
            @click="showAddOutbound=!showAddOutbound"
            class="button-small button-success btn-ck"
          >新增出库</button>
          <div v-if="showAddOutbound" class="popper-wrapper">
            <div class="mask"></div>
            <!-- 选择出库类型 -->
            <div v-if="showChoosePopper" class="popper-style choose-popper">
              <!-- 头部 -->
              <div class="popper-header flex">
                <h4>选择出库类型</h4>
                <i
                  @click="showAddOutbound=false"
                  class="icon-del iconfont"
                  style="fontSize:25px;cursor:pointer;"
                ></i>
              </div>
              <!-- 内容 -->
              <div class="popper-body">
                <button @click="showKsPopper=true;showChoosePopper=false" class="btn-choose">科室出库</button>
                <button @click="showBsPopper=true;showChoosePopper=false" class="btn-choose">报损出库</button>
                <button @click="showThPopper=true;showChoosePopper=false" class="btn-choose">退货出库</button>
              </div>
            </div>
            <!-- 科室出库单 -->
            <div v-if="showKsPopper" class="popper-style add-popper-content">
              <!-- 头部 -->
              <div class="add-popper-header flex">
                <h4>科室出库单</h4>
                <div class="header-right">
                  <i
                    @click="showKsPopper=false;showAddOutbound=false;showChoosePopper=true"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
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
                <!--输入框 -->
                <div class="search-wrapper flex">
                  <div class="left flex">
                    <div class="search-input">
                      <i class="icon-jia iconfont"></i>
                      <input type="text" placeholder="请输入采购药品或扫码识别" />
                    </div>
                  </div>

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
              <div class="footer-wrapper flex">
                <button class="btn-bc">保存草稿</button>
                <div class="right">
                  <button
                    @click="showKsPopper=false;showAddOutbound=false;showChoosePopper=true"
                    class="btn-gb button-small"
                  >关闭</button>
                  <button style="padding:2px 20px" class="button-small button-primary">确定</button>
                </div>
              </div>
            </div>

            <!-- 报损出库单 -->
            <div v-if="showBsPopper" class="popper-style add-popper-content">
              <!-- 头部 -->
              <div class="add-popper-header flex">
                <h4>报损出库单</h4>
                <div class="header-right">
                  <i
                    @click="showBsPopper=false;showAddOutbound=false;showChoosePopper=true"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
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
                <!--输入框 -->
                <div class="search-wrapper flex">
                  <div class="left flex">
                    <div class="search-input">
                      <i class="icon-jia iconfont"></i>
                      <input type="text" placeholder="请输入采购药品或扫码识别" />
                    </div>
                  </div>

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
              <div class="footer-wrapper flex">
                <button class="btn-bc">保存草稿</button>
                <div class="right">
                  <button
                    @click="showBsPopper=false;showAddOutbound=false;showChoosePopper=true"
                    class="btn-gb button-small"
                  >关闭</button>
                  <button style="padding:2px 20px" class="button-small button-primary">确定</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="outbound-body">
      <ul class="table-header flex">
        <li class="item1"><span>出库单号</span></li>
        <li class="item2"><span>状态</span></li>
        <li class="item3"><span>结算状态</span></li>
        <li class="item4"><span>门店</span></li>
        <li class="item5"><span>出库类型</span></li>
        <li class="item6"><span>品种</span></li>
        <li class="item7"><span>数量</span></li>
        <li class="item8"><span>金额</span></li>
        <li class="item9"><span>出库人</span></li>
        <li class="item10"><span>出库日期</span></li>
      </ul>
      <ul v-for="(item,index) of 10" :key="index" class="row flex">
        <li class="item1"><span style="color: rgb(10, 140, 234);">CK2020052100001</span></li>
        <li class="item2"><span>已出库</span></li>
        <li class="item3"><span>--</span></li>
        <li class="item4"><span>惠民体验诊所</span></li>
        <li class="item5"><span>科室出库</span></li>
        <li class="item6"><span>1</span></li>
        <li class="item7"><span>19</span></li>
        <li class="item8"><span>185.00</span></li>
        <li class="item9"><span>刘洋</span></li>
        <li class="item10"><span>2020-05-21</span></li>
      </ul>
    </div>
    <!-- 底部分页 -->
    <div style="marginTop:16px" class="pag-wrapper flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条入库单，数量
        <span style="fontWeight: 700;">&nbsp;37,539,760.99&nbsp;</span> ，含税金额
        <span style="fontWeight: 700;">&nbsp;285,388,552.709&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../Common/SelectInput";
import SearchInput from "../../Common/SearchInput";
import Calendar from "../../Common/Calendar";
import FooterBtn from "../FooterBtn";
export default {
  components: {
    SelectInput,
    SearchInput,
    FooterBtn,
    Calendar
  },
  data() {
    return {
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
      showKsPopper: false, // 科室盒子显示隐藏控制变量
      showBsPopper: false, // 报损盒子显示隐藏控制变量
      showThPopper: false, // 退货盒子显示隐藏控制变量
      showChoosePopper: true, // 选择类型盒子显示隐藏控制变量
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      goodsOptionsList: [],
      selectedUnit: "盒", // 选中的单位值
      showAddOutbound: false // 新增出库弹窗显示隐藏控制变量
    };
  },
  methods: {},
  create() {}
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Outbound/Outbound.css";
</style>