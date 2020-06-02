<template>
  <div class="audit-wrapper">
    <!-- 头部 -->
    <div class="audit-header flex">
      <!-- 左侧 -->
      <div class="header-left flex">
        <Select-input style="marginRight:8px"></Select-input>
        <Select-input style="marginRight:8px"></Select-input>
        <Calendar style="marginRight:8px"></Calendar>
        <Select-input></Select-input>
      </div>
    </div>
    <!-- 表格内容 -->
    <div class="audit-body">
      <ul class="table-header flex">
        <li class="item1">
          <span>结算单号</span>
        </li>
        <li class="item2">
          <span>状态</span>
        </li>
        <li class="item3">
          <span>供应商</span>
        </li>
        <li class="item4">
          <span>价税总和</span>
        </li>
        <li class="item5">
          <span>实际金额</span>
        </li>
        <li class="item6">
          <span>实际税额</span>
        </li>
        <li class="item7">
          <span>提交时间</span>
        </li>
        <li class="item8">
          <span>提交人</span>
        </li>
        <li class="item9">
          <span>审核时间</span>
        </li>
        <li class="item10">
          <span>审核人</span>
        </li>
      </ul>
      <ul class="row flex" v-for="(item,index) of 10" :key="index">
        <li class="item1">
          <span>4561364564156</span>
        </li>
        <li class="item2" style="color: rgb(98, 109, 119)">
          <span>待审核</span>
        </li>
        <li class="item3">
          <span>广东供应商</span>
        </li>
        <li class="item4">
          <span>40.00</span>
        </li>
        <li class="item5">
          <span>39.60</span>
        </li>
        <li class="item6">
          <span>0.40</span>
        </li>
        <li class="item7">
          <span>2020-05-23</span>
        </li>
        <li class="item8">
          <span>李思思</span>
        </li>
        <li class="item9">
          <span>--</span>
        </li>
        <li class="item10">
          <span>--</span>
        </li>
      </ul>
    </div>
    <!-- 底部分页 -->
    <div class="audit-footer flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;17&nbsp;</span>条记录
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
    return {};
  },
  methods: {},
  create() {}
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Audit/Audit.css";
</style>