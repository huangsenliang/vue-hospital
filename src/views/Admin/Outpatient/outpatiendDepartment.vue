<template>
  <!-- 诊所设置：科室设置页面 -->
  <div class="outpatiend-department">
    <AdminHeader title="科室设置" />
    <div class="outpatiend-department-body">
      <!-- 按钮 -->
      <div class="btn-wrapper flex align-items">
        <button
          style="width:75px"
          class="btn-success-samll"
          @click="showDialogDepartmentInfo=true"
        >新增科室</button>
        <Dialog-Department-Info
          type="add"
          @showDialogDepartmentInfo="showDialogDepartmentInfo=false"
          v-show="showDialogDepartmentInfo"
        ></Dialog-Department-Info>
      </div>
      <!-- 表格 -->
      <div class="table-wrapper">
        <ul class="flex align-items th">
          <li>
            <span>科室名称</span>
          </li>
          <li>
            <span>科室类型</span>
          </li>
          <li>
            <span>一级诊疗科目</span>
          </li>
          <li>
            <span>是否门诊科室</span>
          </li>
        </ul>
        <div class="table-body">
          <ul
            class="td flex align-items"
            v-for="(item,index) of this.data"
            :key="index"
            @click="updateRoomInfo(item)"
          >
            <li>
              <span>{{item.roomName}}</span>
            </li>
            <li>
              <span>诊疗科室</span>
            </li>
            <li>
              <span>02|全科医疗科</span>
            </li>
            <li>
              <span>是</span>
            </li>
          </ul>
        </div>
        <Dialog-Department-Info
          type="editor"
          @showDialogDepartmentInfo2="showDialogDepartmentInfo2=false"
          v-show="showDialogDepartmentInfo2"
        ></Dialog-Department-Info>
      </div>
    </div>
  </div>
</template>

<script>
/***********引入局部组件**********/
// 头部标题
import AdminHeader from "../components/adminHeader";
// 新增科室弹窗
import DialogDepartmentInfo from "./dialog/dialogDepartmentInfo";
// 接口
import { getListRoom, updateRoom } from "@/api/admin";
export default {
  components: {
    DialogDepartmentInfo,
    AdminHeader
  },
  data() {
    return {
      showDialogDepartmentInfo: false, // 科室弹窗显示隐藏控制变量
      showDialogDepartmentInfo2: false, // 科室弹窗显示隐藏控制变量
      data: {} // 接口数据
    };
  },
  methods: {
    // 修改诊室
    updateRoomInfo(value) {
      let requestData = value;
      this.showDialogDepartmentInfo2 = true;
      updateRoom(requestData)
        .then(response => {
          console.log(response.data, 777);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    getListRoom({ clinicId: 1 })
      .then(response => {
        this.data = response.data.data;
        console.log(this.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.outpatiend-department {
  .outpatiend-department-body {
    padding: 0 24px;
    // 顶部按钮
    .btn-wrapper {
      height: 64px;
    }
    // 表格
    .table-wrapper {
      ul > li {
        padding: 0 6px;
        flex: 1;
      }
      .table-body {
        ul > li:first-child {
          color: @color_2680f7;
        }
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
  }
}
</style>