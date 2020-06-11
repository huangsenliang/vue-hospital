<template>
  <!-- 新增科室弹窗 -->
  <div class="dialog-department-info dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style department-info">
      <!-- 头部 -->
      <div class="top-header flex align-items justify-between">
        <h4 v-show="type=='add'">新增科室</h4>
        <h4 v-show="type=='editor'">编辑科室</h4>
        <div class="header-right">
          <i v-show="type=='add'" @click="$emit('showDialogDepartmentInfo')" class="icon-del iconfont"></i>
          <i v-show="type=='editor'" @click="$emit('showDialogDepartmentInfo2')" class="icon-del iconfont"></i>
        </div>
      </div>
      <!-- 表格：内容 -->
      <div class="main-content hidden-scorll">
        <!-- 标题 -->
        <div class="title">
          <h4>科室信息</h4>
        </div>
        <!-- 科室类型 -->
        <div class="form-item flex">
          <label for class="form-item-label">科室类型</label>
          <div class="form-item-content">
            <el-radio style="marginRight:20px" v-model="radio" label="1">诊疗科室</el-radio>
            <el-radio v-model="radio" label="2">职能科室</el-radio>
            <p style="color:#8493a4;marginTop:4px">诊疗科室对应卫生部《医疗机构诊疗科目名录》，职能科室对应财务、人事等管理功能</p>
          </div>
        </div>
        <!-- 诊疗科目 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">
            诊疗科目
            <i>*</i>
          </label>
          <div class="form-item-content">
            <el-cascader style="width:300px" v-model="value" :options="options" @change="handleChange"></el-cascader>
          </div>
        </div>
        <!-- 科室名称 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">科室名称</label>
          <div class="form-item-content">
            <Admin-Input></Admin-Input>
          </div>
        </div>
        <!-- 是否门诊科室 -->
        <div class="form-item flex">
          <label for class="form-item-label">是否门诊科室</label>
          <div class="form-item-content">
            <el-radio style="marginRight:20px" v-model="radio2" label="1">是</el-radio>
            <el-radio v-model="radio2" label="2">否</el-radio>
            <p style="color:#8493a4;marginTop:4px">注：只有门诊科室可被挂号、预约</p>
          </div>
        </div>
        <!-- 科室负责人 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">科室负责人</label>
          <div class="form-item-content">
            <Admin-Input></Admin-Input>
          </div>
        </div>
        <!-- 科室成立时间 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">科室成立时间</label>
          <div class="form-item-content">
            <Calendar-Input style="width:300px"></Calendar-Input>
          </div>
        </div>
        <!-- 科室联系电话 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">科室负责人</label>
          <div class="form-item-content">
            <Admin-Input></Admin-Input>
          </div>
        </div>
        <!-- 科室床位数 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">科室床位数</label>
          <div class="form-item-content">
            <Admin-Input></Admin-Input>
          </div>
        </div>
        <!-- 标题 -->
        <div class="title">
          <h4>科室成员</h4>
        </div>
        <!-- 成员姓名 -->
        <div class="form-item flex align-items">
          <label for class="form-item-label">成员姓名</label>
          <div class="form-item-content flex">
            <ul class="flex subjects-list">
              <li v-for="(item,index) of subjectsData" :key="index">
                <span>{{item}}</span>
              </li>
            </ul>
            <span class="btn-xg" @click="showDialogSubjectsList=true">添加</span>
            <!-- 选取科目弹窗组件 -->
            <div v-show="showDialogSubjectsList">
              <Dialog-Subjects-List @showDialogSubjectsList="showDialogSubjectsList=false"></Dialog-Subjects-List>
            </div>
          </div>
        </div>
      </div>
      <!-- 科室成员 -->

      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button  class="btn-danger" v-show="type=='editor'" style="marginRight:8px">删除</button>
        <button class="btn-primary" style="marginRight:8px">确定</button>
        <button v-show="type=='add'" class="btn-blank" @click="$emit('showDialogDepartmentInfo')">取消</button>
        <button v-show="type=='editor'" class="btn-blank" @click="$emit('showDialogDepartmentInfo2')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
/*****************全局组件************/
import CalendarInput from "@/components/CalendarInput";
/*************引入局部组件*********/
import AdminInput from "../../components/adminInput";
import DialogSubjectsList from "./dialogSubjectsList";
export default {
  props:["type"],
  components: {
    AdminInput,
    CalendarInput,
    DialogSubjectsList
  },
  data() {
    return {
      showDialogSubjectsList: false, // 添加科目成员弹窗控制
      subjectsData: ["李思思", "严冬", "李晓东"], // 科目成员
      radio: "1",
      radio2: "1",
      value: [],
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
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-department-info {
  // 内容
  .department-info {
    /*头部*/
    .top-header {
      height: 41px;
      padding-left: 24px;
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
    // 内容
    .main-content {
      padding: 16px 24px 0;
      width: 960px;
      height: 450px;
      overflow-y: auto;
      background: #fff;
      .title {
        h4 {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }
        padding-bottom: 8px;
        border-bottom: 1px solid #e6eaee;
        margin-bottom: 8px;
      }
      .form-item {
        margin-bottom: 24px;
        .form-item-label {
          width: 128px;
          text-align: left;
          color: @color_8493a4;
          i {
            padding-top: 5px;
            margin-left: 5px;
            color: @color_f93;
          }
        }
        .form-item-content {
          // 执业许可科目
          .subjects-list {
            li:not(:last-child)::after {
              content: "/";
              display: inline;
              padding: 0 5px;
            }
          }
          // 修改按钮
          .btn-xg {
            cursor: pointer;
            color: @color_007aff;
            margin-left: 15px;
          }
        }
      }
    }
    // 底部按钮
    .btn-wrapper {
      border-top: solid 1px @color_dadbe0;
      height: 61px;
      background: #fff;
      padding-right: 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>