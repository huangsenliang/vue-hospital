<template>
  <div class="nurse flex">
    <!-- 左边 -->
    <aside>
      <!-- 输入框 -->
      <div class="search-wrapper flex">
        <el-input placeholder="姓名、手机、项目" v-model="patientValue">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <router-link :to="{path:'/home/nurse/add'}" @click.native="handleAddPatient">开单</router-link>
      </div>
      <!-- 表格名单 -->
      <div class="quick-content-wrapper">
        <ul class="quick-list">
          <!-- 表头 -->
          <li v-show="isAddPatient">
            <router-link
              :to="{path:'/home/nurse/add'}"
              :class="{active:patientNum==-1}"
              class="quick-list-header flex"
              @click.native="handleAddListHeader(-1)"
            >
              <div>
                <i class="iconfont icon-huanzhe-"></i>
                <span>匿名患者</span>
              </div>
              <span class="span-color">草稿</span>
            </router-link>
          </li>
          <!-- 表内容 -->
          <li v-for="(item,index) of 15" :key="index">
            <router-link
              :to="{path:'/home/nurse/patient'}"
              class="flex"
              :class="{active:patientNum==index}"
              @click.native="handleTagPatient(index)"
            >
              <div class="flex left-name">
                <img src="../assets/images/quick-v.png" alt />
                <span>李敏</span>
              </div>
              <div class="right-time">
                <span>下午 2:26</span>
                <span class="span-color">待执行</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 就诊历史 -->
      <div class="history-wrapper">
        <!-- 头部 -->
        <div class="history-title flex">
          <span>就诊历史(0)</span>
        </div>
        <!-- 内容 -->
        <ul class="history-list">
          <li v-for="(item,index) of 8" :key="index" class="history-list-item">
            <div class="flex list-item-content">
              <span>胃肠炎</span>
              <span>李阳</span>
              <span>今天</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <!-- 中间 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientValue: "", // 输入框病人双向绑定变量
      isAddPatient: false, // 是否添加患者变量
      patientNum: -1
    };
  },
  methods: {
    sendInd() {
      this.$emit("getInd", 1);
    },
    // 处理：添加患者事件
    handleAddPatient() {
      this.isAddPatient = true;
      this.patientNum = -1;
    },
    // 处理：点击患者切换激活样式
    handleTagPatient(index) {
      this.patientNum = index;
    },
    // 处理：点击患者表头激活样式
    handleAddListHeader(index) {
      this.patientNum = index;
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style scoped>
@import "../assets/css/Nurse/Nurse.css";
</style>