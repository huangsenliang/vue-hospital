<template>
  <!-- 班次管理设置 -->
  <div class="dialog-shift-setting dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style shift-setting-body">
      <!-- 头部 -->
      <div class="header flex align-items justify-between">
        <h4>排班管理</h4>
        <i @click="$emit('close')" class="iconfont icon-del"></i>
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="btn-wrapper flex align-items">
          <button class="btn-blank" style="marginRight:20px" @click="showAddShift=true">增加班次</button>
          <el-checkbox v-model="checked">排班时设置诊室</el-checkbox>
          <Dialog-Add-Shift @close="showAddShift=false" v-show="showAddShift"></Dialog-Add-Shift>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="班次" prop="name"></el-table-column>
          <el-table-column label="时间" prop="date"></el-table-column>
          <el-table-column label="管理">
            <template slot-scope="scope">
              <span class="update">修改</span>
              <span class="del">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
/************局部组件***********/

import DialogAddShift from "./dialogAddShift";
export default {
  components: {
    DialogAddShift
  },
  data() {
    return {
      showAddShift:false,  // 增加班次弹窗
      checked: false,
      tableData: [
        {
          name: "上午",
          date: "09:00-12:00"
        },
        {
          name: "下午班",
          date: "09:00-12:00"
        },
        {
          name: "夜班",
          date: "09:00-12:00"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-shift-setting {
  font-size: 14px;
  .shift-setting-body {
    background: #fff;
    width: 500px;
    height: 350px;
    max-height: 400px;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    // 头部
    .header {
      padding-left: 16px;
      height: 40px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-weight: 700;
      }
    }
    // 内容
    .content {
      padding: 0 16px;
      // 按钮
      .btn-wrapper {
        height: 40px;
        button {
          height: 28px;
        }
      }
      // 表格
      .el-table {
        /deep/.cell {
          line-height: 15px;
          /deep/ .del {
            color: red;
          }
          /deep/ .update {
            cursor: pointer;
            color: #005ed9;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>