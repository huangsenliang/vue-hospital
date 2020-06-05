<template>
  <div class="patient-list">
    <!-- 输入框 -->
    <div class="search-wrapper flex">
      <Search-Input placeholder="搜索姓名、手机"></Search-Input>
      <router-link :to="{name:'NurseAdd'}" @click.native="handleIsAddPatient" class="btn-success-samll">开单</router-link>
    </div>
    <!-- 表格名单 -->
    <div class="quick-content-wrapper">
      <ul class="quick-list">
        <!-- 表头 -->
        <li v-show="isAddPatient">
          <router-link
            :to="{name:'NurseAdd'}"
            :class="{active:patientNum==-1}"
            class="quick-list-header flex"
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
          <router-link :to="{name:'NurseIndex'}" class="flex" :class="{active:patientNum==index}">
            <div class="flex left-name">
              <img src="../../../assets/images/quick-v.png" alt />
              <span>李敏</span>
            </div>
            <div class="right-time">
              <span>下午 2:26</span>
              <span class="span-color">待执行</span>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="flex align-items tip justify-center">
        <span>今天以前</span>
        <i class="iconfont icon-shang1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput"; // 搜索框组件
export default {
  components: {
    SearchInput
  },
  data() {
    return {
      searchValue: "", // 输入框双向绑定值
      isAddPatient: false, // 是否添加患者变量
      patientNum: -1
    };
  },
  methods:{
    handleIsAddPatient(){
      console.log(44)
      this.isAddPatient = true;
    }
  }
};
</script>

<style lang="less" scoped>
.patient-list {
  /*输入框内容*/
  .search-wrapper {
    height: 49px;
    padding: 8px;
    border-bottom: 1px solid @color_ced0da;
    background: #f2f2f2;
    a {
      margin-left: 10px;
    }
  }
  /*表格名单*/
  .quick-content-wrapper {
    height: calc(100% - 56px);
    overflow-y: auto;
    .quick-list {
      .active {
        background: #00ace9 !important;
        color: #fff !important;
        .span-color {
          color: #fff !important;
        }
      }
      li {
        a {
          cursor: pointer;
          height: 48px;
          padding: 0 15px;
          align-items: center;
          background: #fff;
          justify-content: space-between;
          border-bottom: 1px @color_eff3f6 solid;
          color: #000;
        }
      }
      li {
        .left-name {
          img {
            width: 24px;
            margin-right: 12px;
          }
        }
        .right-time {
          font-size: 12px;
          span:nth-child(2) {
            margin-left: 10px;
          }
          .span-color {
            color: #96a4b3;
            font-weight: 400;
          }
        }
      }
      .quick-list-header {
        i.icon-huanzhe- {
          margin-right: 10px;
          font-size: 18px;
          color: #00ace9;
          background: #fff;
          border: 1px #fff solid;
          padding: 3px;
          border-radius: 5px;
        }
        .span-color {
          color: #08a446;
        }
      }
    }
    .tip {
      height: 48px;
      color: #7a8794;
      border-bottom: @color_eff3f6 1px solid;
    }
  }
}
</style>