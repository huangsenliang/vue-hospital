<template>
  <!-- 选择执业许可弹窗组件-->
  <div class="dialog-subjects-list dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style subjects-list">
      <!-- 头部 -->
      <div class="subjects-top flex align-items justify-between">
        <h4>选择执业许可范围</h4>
        <i class="iconfont icon-del" @click="$emit('showDialogSubjectsList')"></i>
      </div>
      <!-- 内容 -->
      <div class="subjects-content">
        <div class="data-col">
          <ul class="flex flex-wrap">
            <li class="subjects-item" v-for="(item,index) of dataLis" :key="index">
              <el-checkbox @change="handleChange(index)" v-model="item.acitve" :label="item.name" border></el-checkbox>
            </li>
          </ul>
        </div>
        <div class="selected-col">
          <div class="top-tip">
            <h4>已选{{selectedLis.length}}项：</h4>
          </div>
          <ul class="flex selected-content flex-wrap">
            <li v-for="(item,index) of selectedLis" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-primary" @click="toSubjectsList" style="marginRight:8px">确定</button>
        <button class="btn-blank" @click="$emit('showDialogSubjectsList')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
// 接口
import { getListSubjects } from "@/api/admin";
export default {
  props: {
    subjectList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataLis: []
    };
  },
  methods: {
    // 传递参数父组件
    toSubjectsList() {
      this.$emit("getSubjectsList", this.selectedLis);
      this.$emit("showDialogSubjectsList");
    },
    // 按钮值改变
    handleChange(index){
      console.log(111)
      this.dataLis[index].acitve = !this.dataLis[index].acitve;
      console.log(this.dataLis,888)
    }
  },
  computed: {
    // 选中数据
    selectedLis() {
      let lis = [];
      this.dataLis.forEach(item => {
        if (item.acitve) {
          lis.push(item);
        }
      });
      console.log(lis);
      return lis;
    }
  },
  created() {
    // 获取科目列表
    getListSubjects({ clinicId: 1 })
      .then(response => {
        console.log(this.subjectList,897)
        this.dataLis = response.data.data;
          this.dataLis.forEach((item, index) => {
              this.dataLis[index].acitve = false;
          });
          this.subjectList.forEach(item=>{
            this.dataLis.forEach((item2,index)=>{
              if(item2.id == item){
                this.dataLis[index].acitve = true;
              }
            })
          })
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.dialog-subjects-list {
  .subjects-list {
    width: 620px;
    // 头部
    .subjects-top {
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
      height: 41px;
      padding-left: 24px;
      background-color: @color_eff1f5;
      border-bottom: 1px solid @color_e6eaee;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    // 内容
    .subjects-content {
      padding: 16px 24px;
      background: #fff;
      // 选择数据
      .data-col {
        border-bottom: 1px solid @color_eff3f6;
        padding-bottom: 10px;
        max-height: 200px;
        overflow-y: auto;
        .subjects-item {
          margin-right: 15px;
          margin-bottom: 10px;
        }
      }
      // 选中数据
      .selected-col {
        margin: 15px 0;
        h4 {
          font-size: 16px;
          font-weight: 700;
        }
        .selected-content {
          margin-top: 4px;
          padding-left: 20px;
          li:not(:last-child)::after {
            content: "、";
            display: inline-block;
            padding: 0 5px;
          }
        }
      }
    }
    // 底部按钮
    .btn-wrapper {
      padding: 0 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
      background-color: #fff;
      height: 61px;
    }
  }
}
</style>