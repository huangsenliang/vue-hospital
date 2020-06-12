<template>
  <!-- 库存：结算申请组件 -->
  <div class="inventory-audit" style="height:100%">
    <!------------ 头部-------------- -->
    <div class="audit-header flex align-items">
        <Select-Input style="marginRight:16px;width:150px"></Select-Input>
        <Select-Input style="marginRight:16px;width:120px"></Select-Input>
        <Calendar-Input style="marginRight:16px"></Calendar-Input>
        <Select-Input style="marginRight:16px;width:200px"></Select-Input>
    </div>
    <!-- -----------列表---------------  -->
    <audit-List style="height:60%"></audit-List>
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
// import DialogAudit from "./dialog/dialogAudit";
import auditList from "./components/auditList";
export default {
  components: {
    SelectInput,
    SearchInput,
    CalendarInput,
    // Dialogaudit,
    auditList
  },
  data() {
    return {
      showDialogAudit: false // 新增入库盒子弹窗显示隐藏控制变量
    };
  },
  methods: {
   
  }
};
</script>

<style lang="less" scoped>
.inventory-audit {
  padding: 0 16px;
  // 头部
  .audit-header {
    height: 64px;
  }
  // 分页
  .pag-wrapper {
    height: 55px;
  }
}
</style>