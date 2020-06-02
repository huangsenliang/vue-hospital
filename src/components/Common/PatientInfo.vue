<template>
  <div class="patient-info">
    <div class="info-wrapper flex">
      <div class="input-name" style="width:100px;margin-right:5px">
        <el-input placeholder="姓名" :disabled="disabled" v-model="nameValue"></el-input>
      </div>
      <el-select :disabled="disabled" v-model="sexValue" placeholder="性别">
        <el-option
          v-for="item in sexOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="ageValue" :disabled="disabled" style="width:40px;marginLeft:5px"></el-input>
      <span style="marginLeft:5px">岁</span>
      <el-input v-model="monthValue" :disabled="disabled" style="width:40px;marginLeft:5px"></el-input>
      <span style="marginLeft:5px">月</span>
      <div class="input-iphone" style="width:130px;margin:0 5px">
        <el-input placeholder="手机号" :disabled="disabled" v-model="iphoneValue"></el-input>
      </div>
      <!-- 编辑患者信息  -->
      <div
        v-if="disabled"
        class="edit-info-wrapper"
        @click="showEditInfo=!showEditInfo"
        v-clickoutside="handleClickOutSideShowEditInfo"
      >
        <i class="iconfont icon-lianxiren1"></i>
        <!-- 编辑信息弹窗 -->
        <div v-show="showEditInfo" @click.stop class="edit-info">
          <!-- 头部 -->
          <div class="info-top flex">
            <span class="info-name">罗海波</span>
            <span class="color-08a446-12">最近就诊：2020-04-29</span>
          </div>
          <!-- 门诊 -->
          <ul class="info-tow flex">
            <li class="info-tow-item flex">
              <span>门诊</span>
              <span>5</span>
            </li>
            <li class="info-tow-item flex">
              <span>付费</span>
              <span>6</span>
            </li>
            <li class="info-tow-item flex">
              <span>累计消费</span>
              <span>￥83.80</span>
            </li>
          </ul>
          <!-- 标签按钮 -->
          <ul class="tag-btn-wrapper clear-float">
            <li class="tag-btn btn" v-for="(item,index) of checkTagBtnList" :key="index">
              <span>{{item}}</span>
              <i class="iconfont icon-shanchu" @click="handleDelInfoTag(index)"></i>
            </li>
            <li class="add-btn-wrapper btn">
              <!-- 标签弹窗 -->
              <div class="add-btn">
                <span
                  class="add"
                  @click.stop="showTooltipt=!showTooltipt"
                  v-clickoutside="handleClickOutSideShowTooltipt"
                >+</span>
                <div v-show="showTooltipt" class="tooltipt-wrapper">
                  <div class="tooltipt-content" v-for="(tagObj,i) of tagBtnList" :key="i">
                    <!-- 标题 -->
                    <div class="title flex">
                      <h4>{{tagObj.tagName}}</h4>
                      <i class="iconfont icon-wenhao"></i>
                    </div>
                    <!-- 标签按钮 -->
                    <ul class="tag-wrapper">
                      <li
                        class="tag-item"
                        v-for="(item,index) of tagObj.btnList"
                        :class="{'tag-item-active':item.active==true}"
                        :key="index"
                        @click="handleTagBtnActive(i,index)"
                      >
                        <span>{{item.name}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 个人信息 -->
          <div class="personal-info-wrapper">
            <div v-if="showInfo" class="personal-info-true-wrapper">
              <ul class="personal-info-true">
                <li class="flex row">
                  <span>姓名</span>
                  <span>张扬</span>
                </li>
                <li class="flex row">
                  <span>性别</span>
                  <span>男</span>
                </li>
                <li class="flex row">
                  <span>手机</span>
                  <span>13909090990</span>
                </li>
                <li class="flex row">
                  <span>年龄</span>
                  <span>27岁</span>
                </li>
                <li class="flex row">
                  <span>生日</span>
                  <span>1992-07-01</span>
                </li>
                <li class="flex row">
                  <span>身份证</span>
                  <span>-</span>
                </li>
                <li class="flex row">
                  <span>来源</span>
                  <span>医生推荐</span>
                </li>
                <li class="flex row">
                  <span>住址</span>
                  <span>-</span>
                </li>
                <li class="flex row">
                  <span>微信</span>
                  <span>-</span>
                </li>
              </ul>
              <!-- 按钮 -->
              <button @click="handleShowInfo" class="btn-bj">编辑患者资料</button>
            </div>
            <div v-if="!showInfo" class="personal-info-false-wrapper">
              <ul class="personal-info-false">
                <li class="flex row">
                  <span>姓名</span>
                  <input class="input_inner" type="text" />
                </li>
                <li class="flex row">
                  <span>性别</span>
                  <div>
                    <el-radio v-model="sexRadio" label="1">男</el-radio>
                    <el-radio v-model="sexRadio" label="2">女</el-radio>
                  </div>
                </li>
                <li class="flex row">
                  <span>手机</span>
                  <input type="text" class="input_inner" />
                </li>
                <li class="flex row">
                  <span>年龄</span>
                  <div class="flex age-input-wrapper">
                    <div>
                      <input type="text" />
                      <span>岁</span>
                    </div>
                    <div>
                      <input type="text" />
                      <span>月</span>
                    </div>
                    <div>
                      <input type="text" />
                      <span>天</span>
                    </div>
                  </div>
                </li>
                <li class="flex row">
                  <span>生日</span>
                  <div class="birthday-input-wrapper">
                    <i @click="handleShowCalendar" class="iconfont icon-rili"></i>
                    <input class="birthday-input" type="text" />
                    <div v-show="showCalendar" class="calendar-wrapper">
                      <!-- 引入日历组件 -->
                      <el-calendar class="calendar"></el-calendar>
                    </div>
                  </div>
                </li>
                <li class="flex row">
                  <span>身份证</span>
                  <input type="text" class="ID-input" />
                </li>
                <li class="flex row">
                  <span>来源</span>
                  <div class="source-wrapper">
                    <el-select v-model="sourceValue" placeholder="请选择">
                      <el-option
                        v-for="item in sourceOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </li>
                <li class="flex row">
                  <span>住址</span>
                  <div style="width:238px" class="address-wrapper">
                    <V-Address></V-Address>
                    <input
                      placeholder="请输入详细地址"
                      class="address-input"
                      type="text"
                      style="marginTop:5px"
                    />
                  </div>
                </li>
              </ul>
              <div class="btn-wrapper flex">
                <el-button type="primary" disabled>保存</el-button>
                <el-button @click="handleShowInfoFalse" type="primary" plain>取消</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VAddress from "./VAddress";
export default {
  components: { VAddress },
  props: ["name", "sex", "age", "isDisabled", "month", "iphone"],
  data() {
    return {
      showInfo: true, // 编辑用户信息切换变量
      sourceOptions: [
        {
          value: "医生推荐",
          label: "医生推荐"
        },
        {
          value: "导师推荐",
          label: "导师推荐"
        },
        {
          value: "亲友推荐",
          label: "亲友推荐"
        },
        {
          value: "微信公众号",
          label: "微信公众号"
        },
        {
          value: "线上活动",
          label: "线上活动"
        }
      ],
      sourceValue: "",

      dateValue: "", // 日历数据双向绑定
      showCalendar: false, // 控制日历显示隐藏变量
      sexRadio: "1", // 编辑信息单选按钮
      showTooltipt: false, // 标签Tooltipt的弹窗控制变量
      tagBtnList: [
        {
          tagName: " 慢性病标签",
          btnList: [
            { name: "哮喘", active: false },
            { name: "咽喉炎", active: false },
            { name: "鼻窦炎", active: false },
            { name: "鼻炎", active: false },
            { name: "偏头痛", active: false },
            { name: "头痛", active: false },
            { name: "痛风", active: false },
            { name: "糖尿病", active: false },
            { name: "高血脂", active: false },
            { name: "慢性软组织损伤", active: false },
            { name: "鼻咽炎", active: false },
            { name: "便秘", active: false },
            { name: "胃肠炎", active: false },
            { name: "胃炎", active: false },
            { name: "骨质疏松", active: false },
            { name: "颈椎病", active: false },
            { name: "关节炎", active: false },
            { name: "支气管炎", active: false },
            { name: "高血压", active: false },
            { name: "颈椎病", active: false },
            { name: "支气管炎", active: false },
            { name: "高血压", active: false },
            { name: "学生", active: false }
          ]
        },
        {
          tagName: "消费能力标签",
          btnList: [
            { name: "复购高", active: false },
            { name: "客单高", active: false }
          ]
        },
        {
          tagName: "其他标签",
          btnList: [
            { name: "高消费", active: false },
            { name: "重点回访", active: false },
            { name: "慢病", active: false },
            { name: "儿科", active: false }
          ]
        }
      ], // 全部的标签数据
      checkTagBtnList: ["高血脂", "慢病", "糖尿病", "关节炎", "复购高"], // 选中的标签按钮数据
      showEditInfo: false, // 编辑患者信息弹窗控制变量
      sexOptions: [
        // 性别选中下拉框数据
        {
          // 性别的数据
          value: 0,
          label: "男"
        },
        {
          value: 1,
          label: "女"
        }
      ],
      sexValue: this.sex, // 选择器性别双向绑定变量值
      monthValue: this.month, // 双向绑定月份值
      ageValue: this.age, // 双向绑定年龄值
      iphoneValue: this.iphone, // 双向绑定手机号值
      nameValue: this.name, // 双向绑定姓名值
      disabled: this.isDisabled == "false" ? false : true // 转出组件传值字符串为布尔类型
    };
  },
  methods: {
    // 处理：点击取消按钮返回信息列表
    handleShowInfoFalse(){
      this.showInfo = true;
    },
    // 处理：编辑信息元素的显示隐藏
    handleShowInfo() {
      this.showInfo = !this.showInfo;
    },
    // 处理：日历显示隐藏
    handleShowCalendar() {
      this.showCalendar = !this.showCalendar;
    },
    // 处理：点击按钮删除对应的标签按钮
    handleDelInfoTag(index) {
      this.checkTagBtnList.splice(index, 1);
    },
    // 处理：更改标签按钮active的状态值
    filtrateTagBtnList() {
      this.tagBtnList.forEach(obj => {
        obj.btnList.forEach((item, i) => {
          if (this.checkTagBtnList.indexOf(item.name) !== -1) {
            item.active = true;
          }
        });
      });
    },
    // 处理：点击标签更改标签的状态
    handleTagBtnActive(i, index) {
      this.tagBtnList[i].btnList[index].active = true;
      this.checkTagBtnList.push(this.tagBtnList[i].btnList[index].name);
    },
    // 处理：点击除了改元素外其他关闭tooltip窗口
    handleClickOutSideShowTooltipt() {
      this.showTooltipt = false;
    },
    // 处理：点击除了edit-info元素外
    handleClickOutSideShowEditInfo() {
      this.showEditInfo = false;
    }
  },
  watch: {},
  created() {
    // 筛选数据
    this.filtrateTagBtnList();
  }
};
</script>
<style scoped>
@import "../../assets/css/Common/PatientInfo/PatientInfo.css";
</style>