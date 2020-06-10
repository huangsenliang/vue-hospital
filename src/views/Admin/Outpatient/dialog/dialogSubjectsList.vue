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
            <li class="subjects-item" v-for="(item,index) of subjectsList" :key="index">
              <el-checkbox v-model="item.acitve" :label="item.name" border></el-checkbox>
            </li>
          </ul>
        </div>
        <div class="selected-col">
          <div class="top-tip">
            <h4>已选{{selectedList.length}}项：</h4>
          </div>
          <ul class="flex selected-content flex-wrap">
            <li v-for="(item,index) of selectedList" :key="index">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-primary" style="marginRight:8px">确定</button>
        <button class="btn-blank" @click="$emit('showDialogSubjectsList')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjectsList: [
        {
          name: "预防保健科",
          acitve: false
        },
        {
          name: "全科医疗科",
          acitve: true
        },
        {
          name: "内科",
          acitve: false
        },
        {
          name: "外科",
          acitve: true
        },
        {
          name: "妇产科",
          acitve: false
        },
        {
          name: "妇产保健科",
          acitve: false
        },
        {
          name: "儿科",
          acitve: false
        },
        {
          name: "小二外科",
          acitve: false
        },
        {
          name: "儿童保健科",
          acitve: false
        },
        {
          name: "眼科",
          acitve: false
        },
        {
          name: "耳鼻咽喉科",
          acitve: true
        },
        {
          name: "口腔科",
          acitve: false
        },
        {
          name: "皮肤科",
          acitve: false
        },
        {
          name: "医疗美容科",
          acitve: false
        },
        {
          name: "精神科",
          acitve: false
        },
        {
          name: "传染科",
          acitve: false
        },
        {
          name: "结核病科",
          acitve: false
        },
        {
          name: "地方病科",
          acitve: false
        },
        {
          name: "肿瘤科",
          acitve: false
        },
        {
          name: "急诊医学科",
          acitve: false
        }
      ]
    };
  },
  computed: {
    selectedList() {
      let lis = [];
      this.subjectsList.forEach(item => {
        if (item.acitve) {
          lis.push(item.name);
        }
      });
      return lis;
    }
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