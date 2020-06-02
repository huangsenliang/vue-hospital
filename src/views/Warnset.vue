<template>
  <div class="warnset">
    <Main-Wrapper>
      <!-- 头部 -->
      <div class="warnset-header-title flex">
        <el-page-header @back="goBack" content="系统预警设置"></el-page-header>
      </div>
      <!-- 内容 -->
      <div class="warnset-content-wrapper">
        <div class="warnset-set-item flex">
          <div class="set-name">
            <span>库存预警</span>
          </div>
          <div class="set-content">
            <div class="top">
              <span>药品周转天数小于</span>
              <input type="text" v-model="dayNnm" />天，系统预警提示
            </div>
            <div class="bottom">
              <span>周转天数=当前库存/日均销量</span>
            </div>
          </div>
        </div>
        <div class="warnset-set-item flex">
          <div class="set-name">
            <span>效期预警</span>
          </div>
          <div class="set-content">
            <div class="top">
              <span>药品有效期小于</span>
              <input type="text" v-model="monthNum" />月，系统预警提示
            </div>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn-wrapper">
        <button class="button-small is-disabled">保持</button>
        <button class="button-small btn-qx">取消</button>
      </div>
    </Main-Wrapper>
  </div>
</template>

<script>
import MainWrapper from "../components/Common/MainWrapper";
export default {
  components: {
    MainWrapper
  },
  data() {
    return {
      dayNnm:6,  // 双向绑定天数
      monthNum:7  // 双向绑定月数
    };
  },
  methods: {
    goBack() {
      history.back();
    }
  }
};
</script>

<style scoped>
@import "../assets/css/Warnset/Warnset.css";
</style>