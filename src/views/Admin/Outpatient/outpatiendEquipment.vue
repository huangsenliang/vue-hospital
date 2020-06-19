<template>
  <!-- 门诊设置：医疗设备 -->
  <div class="outpatiend-equipment hidden-scorll" style="height:100%">
    <Admin-Header title="医疗设备"></Admin-Header>
    <div class="equipment-body">
      <!-- 头部 -->
      <div class="equipment-header flex align-items">
        <button class="btn-success" @click="toAddEquipmentInfo">新增医疗设备</button>
      </div>
      <!-- 表格内容 -->
      <div class="table-wrapper">
        <el-table
          :data="tableData"
          style="width: 100%"
          highlight-current-row
          @current-change="toEditorEquipmentInfo"
        >
          <el-table-column prop="name" label="设备名称" width="180"></el-table-column>
          <el-table-column prop="type" label="设备类别" width="180"></el-table-column>
          <el-table-column prop="brand" label="品牌"></el-table-column>
          <el-table-column prop="date" label="购买日期"></el-table-column>
          <el-table-column prop="year" label="使用年限"></el-table-column>
        </el-table>
      </div>
      <!-- 分页按钮 -->
      <div class="pag-wrapper flex align-items">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
/****************局部组件***********/
import AdminHeader from "../components/adminHeader";
export default {
  components: {
    AdminHeader
  },
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        },
        {
          name: "王小虎",
          type: "1|治疗设备",
          brand: "大连",
          date: "2020-06-16",
          year: 5
        }
      ],
      currentRow: null, // 点击选中的表格选
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    // 添加设备
    toAddEquipmentInfo() {
      this.$router.push({
        name: "EquipmentInfo",
        query: { type: "add" }
      });
    },
    // 编辑设备
    toEditorEquipmentInfo(val) {
      this.currentRow = val;
      this.$router.push({
        name: "EquipmentInfo",
        query: { type: "editor" }
      });
    },
    /**********分页**********/

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  // 保存成员管理选项的激活状态
  beforeRouteLeave(to, from, next) {
    to.name == "EquipmentInfo" ||
      this.$store.commit("admin/setTabName", "/outpatient/Equipment");
    next();
  }
};
</script>

<style lang="less" scoped>
.outpatiend-equipment {
  overflow-y: auto;
  .equipment-body {
    padding: 0 24px;
    // 头部
    .equipment-header {
      margin-top: 10px;
      height: 40px;
      .btn-success {
        width: 100px;
      }
    }
    //  表格
    .table-wrapper {
      /deep/ .el-table .el-table__body-wrapper tr {
        cursor: pointer;
      }
    }
    // 分页
    .pag-wrapper {
      height: 61px;
    }
  }
}
</style>