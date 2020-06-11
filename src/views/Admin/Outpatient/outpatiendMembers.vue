<template>
  <!-- 门诊设置：成员管理设置 -->
  <div class="outpatiend-members">
    <!-- 头部 -->
    <ul class="top-header flex align-items">
      <li>
        <button class="btn-success">微信邀请</button>
      </li>
      <li>
        <button class="btn-success">新增成员</button>
      </li>
      <li>
        <Search-Input placeholder="成员姓名/手机号"></Search-Input>
      </li>
      <li>
        <Select-Input></Select-Input>
      </li>
    </ul>
    <!-- 表格 -->
    <div class="table-wrapper">
      <ul class="th flex align-items">
        <li class="item1">
          <span>姓名</span>
        </li>
        <li class="item2">
          <span>角色</span>
        </li>
        <li class="item3">
          <span>科室</span>
        </li>
        <li class="item4">
          <span>电话</span>
        </li>
        <li class="item5 flex-item">
          <span>权限</span>
        </li>
        <li class="item6">
          <span></span>
        </li>
      </ul>
      <div class="table-body">
        <ul v-for="(item,index) of 5" :key="index" class="td flex align-items">
          <li class="item1">
            <span>李思思</span>
            <span class="identity">管理员</span>
          </li>
          <li class="item2">
            <span>医生</span>
          </li>
          <li class="item3">
            <span>内科</span>
          </li>
          <li class="item4">
            <span>12345466563</span>
          </li>
          <li class="item5 flex-item text-ellipsis">
            <span>所有模块ddddddddddddddddddddddddddddddddddddddddddddddddddddd</span>
          </li>
          <li class="item6">
            <span>待确定</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分页 -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <p>
        共
        <span style="font-weight: 700;">55</span> 条数据
      </p>
    </div>
  </div>
</template>

<script>
/**************全局组件************/

import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
export default {
  components: {
    SearchInput,
    SelectInput
  }
};
</script>

<style lang="less" scoped>
.outpatiend-members {
  padding: 0 24px;
  //   头部
  .top-header {
    height: 64px;
    li {
      margin-right: 10px;
    }
  }
  //   表格
  .table-wrapper {
    ul > li {
      padding: 0 6px;
    }
    .table-body {
      ul > li:first-child {
        color: @color_2680f7;
        span.identity {
          padding: 3px;
          border: 4px;
          margin-left: 10px;
          color: @color_f33;
          background: @color_FFEAEF;
        }
      }
    }
    .item1 {
      width: 20%;
    }
    .item2 {
      width: 13.7255%;
    }
    .item3 {
      width: 15%;
    }
    .item4 {
      width: 15.7647%;
      padding-right: 20px;
    }
    .item6 {
      width: 8%;
    }
    .th {
      background: @color_f5f7fb;
      border-top: 1px solid @color_e6eaee;
      border-bottom: 1px solid @color_e6eaee;
      height: 40px;
    }
    .td {
      cursor: pointer;
      height: 48px;
      border-bottom: 1px solid @color_dadbe0;
      &:hover {
        background: @color_e9eff8;
      }
    }
  }
  // 分页
  .pag-wrapper {
    height: 55px;
  }
}
</style>