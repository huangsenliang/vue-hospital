<template>
  <!-- 历史打印弹窗组件 -->
  <div class="dialog-history">
    <!-- 头 -->
    <div class="dialog-title">
      <div class="flex">
        <label>医生</label>
        <span class="flex-item">陈林冯</span>
        <span>昨天11：11</span>
      </div>
      <div class="flex">
        <label>主诉</label>
        <span class="flex-item">咳嗽一天</span>
      </div>
      <div class="flex">
        <label>诊断</label>
        <span class="flex-item">急性上呼吸道感染</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="dialog-content">
      <!-- 项目 -->
      <div class="product">
        <h5>项目</h5>
        <div class="content">
          <ul>
            <li class="flex justify-between">
              <span>x光片检查</span>
              <span>1次</span>
            </li>
            <li class="flex justify-between">
              <span>x光片检查</span>
              <span>1次</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 用药 -->
      <div class="prescription">
        <h5>西药</h5>
        <ul>
          <li class="flex justify-between">
            <span class>感冒软胶囊 0.5g*18粒/盒</span>
            <span class>1盒</span>
          </li>
        </ul>
        <h5>中药</h5>
        <ul class="chinese flex flex-wrap">
          <li v-for="(item,index) of 8 " :key="index">
            <span>板蓝根30g</span>
          </li>
        </ul>
      </div>
      <!-- 打印按钮 -->
      <div class="btn-wrapper flex justify-between">
        <button class="btn-blank">打印</button>
        <button class="btn-blank" @click="handleClose">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    handleClose(){
      this.$emit('closeDialog');
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-history {
  background-color: #fffdec;
  -webkit-box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #cbb816;
  width: 348px;
  max-height: 400px;
  overflow: auto;
  // 头
  .dialog-title {
    padding: 16px;
    border-bottom: 1px solid #e6eaee;
    > div {
      margin-bottom: 4px;
    }
    label {
      display: inline-block;
      min-width: 56px;
      font-weight: 400;
      line-height: 20px;
      margin-right: 8px;
      color: #000;
    }
  }
  // 内容
  .dialog-content {
    // 项目
    .product {
      padding: 0 16px 12px;
      border-bottom: 1px solid #e6eaee;
      h5 {
        height: 20px;
        line-height: 20px;
        margin-top: 12px;
        font-size: 14px;
        color: #4a4a4a;
        font-weight: 700;
      }
      .content {
        ul > li {
          margin-top: 6px;
        }
      }
    }
    // 用药
    .prescription {
      padding: 0 16px 12px;
      h5 {
        height: 20px;
        line-height: 20px;
        margin-top: 12px;
        font-size: 14px;
        color: #4a4a4a;
        font-weight: 700;
      }
      > ul > li {
        margin-top: 6px;
      }
      // 中药
      ul.chinese {
        li {
          min-width: 100px;
          margin-top: 6px;
        }
      }
    }
    // 打印按钮
    .btn-wrapper {
      border-top: 1px solid #e6eaee;
      padding: 16px 10px;
    }
  }
}
</style>]