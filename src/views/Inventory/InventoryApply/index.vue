<template>
  <!-- 库存：结算申请组件 -->
  <div class="inventory-apply" style="height:100%">
    <!------------ 头部-------------- -->
    <div class="apply-header flex align-items justify-between">
      <div class="flex">
        <Select-Input style="marginRight:16px;width:150px"></Select-Input>
        <Select-Input style="marginRight:16px;width:120px"></Select-Input>
        <Calendar-Input style="marginRight:16px"></Calendar-Input>
        <Select-Input style="marginRight:16px;width:200px"></Select-Input>
      </div>
      <div class="apply-header-right flex align-items">
        <!-- 新增入库弹窗 -->
        <div class="add-apply-wrapper">
          <button @click="showDialogApply=!showDialogApply" class="btn-success">新增结算单</button>
          <div v-show="showDialogApply">
            <Dialog-Apply @showDialogApply="showDialogApply=false"></Dialog-Apply>
          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- -----------列表---------------  -->
    <Apply-List style="height:60.5%"></Apply-List>
    <!-- 分页 -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <p>
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条入库单，数量
        <span style="fontWeight: 700;">&nbsp;37,539,760.99&nbsp;</span> ，含税金额
        <span style="fontWeight: 700;">&nbsp;285,388,552.709&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
import CalendarInput from "@/components/CalendarInput";
/*******************局部组件**************/

import DialogApply from "./dialog/dialogApply";
import ApplyList from "./components/applyList";
export default {
  components: {
    SelectInput,
    SearchInput,
    CalendarInput,
    DialogApply,
    ApplyList
  },
  data() {
    return {
      showDialogApply: false // 新增入库盒子弹窗显示隐藏控制变量
    };
  },
  methods: {
    // 处理：跳转到warnset.vue页面
    handleToWarnset() {
      this.$router.push({ path: "/home/warnset" });
    },
    // 处理：点击除了ShowSmallUni元素外触发
    handleClickOutSideShowSmallUnit() {
      this.showSmallUnit = false;
    },
    // 处理：点击除了ShowPackUnit元素外触发
    handleClickOutSideShowPackUnit() {
      this.showPackUnit = false;
    },
    // 处理：标签切换
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    }
  }
};
</script>

<style lang="less" scoped>
.inventory-apply {
  padding: 0 16px;
  // 头部
  .apply-header {
    height: 64px;
  }
  // 分页
  .pag-wrapper {
    height: 55px;
  }
}
</style>