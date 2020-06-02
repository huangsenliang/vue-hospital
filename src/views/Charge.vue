<template>
  <!-- 收费页面 -->
  <div class="charge flex">
    <Aside-Left-Wrapper>
      <!-- 搜索框 -->
      <div class="flex search-wrapper">
        <search-input size="198px" placeholder="姓名、手机、诊断"></search-input>
        <button class="button-small">零售收费</button>
      </div>
      <!-- 标签切换内容 -->
      <div class="tabs-wrapper">
        <Tabs class="flex">
          <ul class="flex tabs-content">
            <li class="item active">
              <span>门店</span>
              <span>&nbsp;9</span>
            </li>
            <li class="item">
              <span>网络</span>
              <span>&nbsp;3</span>
            </li>
            <li class="item">
              <span>挂单</span>
              <span>&nbsp;42</span>
            </li>
          </ul>
          <div class="calendar">
            <span>今天</span>
            <i class="iconfont icon-xia"></i>
          </div>
        </Tabs>
      </div>
      <!-- 表格内容 -->
      <div class="table-wrapper">
        <Table>
          <ul class="table-wrapper">
            <li v-for="(item,index) of 7" :key="index" class="row flex">
              <div class="img-wrapper">
                <img src="../assets/images/quick-v.png" alt />
              </div>
              <span class="patient-name">大鹏</span>
              <span class="date-time">11:30</span>
              <span class="status">待发</span>
            </li>
          </ul>
        </Table>
        <div class="tip">
          <span>没有更多患者信息</span>
        </div>
      </div>
      <!-- 就诊历史 -->
      <div class="history">
        <History-Record></History-Record>
      </div>
    </Aside-Left-Wrapper>
    <Main-wrapper>
      <div class="top-header-wrapper flex justify-between align-items">
        <h2>门诊收费</h2>
        <div class="buttons-wrapper flex align-items">
          <div class="amount">
            <span>402.41</span>
          </div>
          <button class="btn-primary-small">收费</button>
          <button class="btn-blank-small">挂单</button>
          <button class="btn-blank-small is-disabled">推送</button>
          <button class="btn-blank-small">打印</button>
        </div>
      </div>
      <div class="main-content">
        <!-- 个人信息 -->
        <div class="info-wrapper flex justify-between">
          <Patient-Info name="毛波" sex="男" age="20" isDisabled="true" month="3" iphone="18244909680"></Patient-Info>
          <div class="info-right flex">
            <Select-Input disabled="true" placeholder="请选择" value="李思思"></Select-Input>
            <div class="input-search" style="marginLeft:10px">
              <Input-Money :size="70" :value="30"></Input-Money>
            </div>
          </div>
        </div>
        <!-- 搜索 -->
        <div class="add-input-wrapper">
          <Add-Input></Add-Input>
        </div>
        <!-- 表单 -->
        <div class="table-wrapper">
          <!-- 表头 -->
          <ul class="th flex align-items">
            <li class="item1">
              <h5>收费单</h5>
            </li>
            <li class="item2">
              <span>单价</span>
            </li>
            <li class="item3">
              <span>数量</span>
            </li>
            <li class="item4">
              <span>金额</span>
            </li>
          </ul>
          <div class="table-body">
            <ul class="td flex align-items">
              <li class="item1">
                <el-checkbox v-model="checked"></el-checkbox>
                <i class="iconfont "></i>
                <span>挂号费</span>
                <span>李思思</span>
              </li>
              <li class="item2"><span></span></li>
              <li class="item3"><span></span></li>
              <li class="item4"><span></span></li>
            </ul>
          </div>
        </div>
      </div>
    </Main-wrapper>
    <Aside-Right-Wrapper>aaaa</Aside-Right-Wrapper>
  </div>
</template>

<script>
import AsideLeftWrapper from "@/components/Common/AsideLeftWrapper";
import AsideRightWrapper from "@/components/Common/AsideRightWrapper";
import MainWrapper from "@/components/Common/MainWrapper";
import SearchInput from "@/components/Common/SearchInput";
import SelectInput from "@/components/Common/SelectInput";
import Tabs from "@/components/Common/Tabs";
import Table from "@/components/Common/Table";
import HistoryRecord from "@/components/Common/HistoryRecord";
import PatientInfo from "@/components/Common/PatientInfo";
import InputMoney from "@/components/Common/InputMoney";
import AddInput from "@/components/Common/AddInput";
export default {
  components: {
    AsideLeftWrapper,
    MainWrapper,
    AsideRightWrapper,
    SearchInput,
    Tabs,
    Table,
    HistoryRecord,
    PatientInfo,
    InputMoney,
    SelectInput,
    AddInput
  },
  data() {
    return {
      nameValue: "李思思"
    };
  },
  methods: {
    sendInd() {
      this.$emit("getInd", 4);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/Charge/Charge.less";
</style>