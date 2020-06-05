<template>
  <!-- 预约列表行组件 -->
  <ul class="registered-list">
    <!-- 头部统计 -->
    <li :class="{'is-selected':lisNum==-1}" @click="lisNum=-1" class="flex row align-items">
      <div class="item-left flex flex-item">
        <span>{{itemDataTop.name}}</span>
        <span class="item">
          待签
          <span>{{itemDataTop.signedCount}}</span>
        </span>
        <span class="item">
          待诊
          <span>{{itemDataTop.clinicalCount}}</span>
        </span>
        <span class="item">
          已诊
          <span>{{itemDataTop.treatCount}}</span>
        </span>
      </div>
      <button class="btn-ghost-samll" @click="showAddRegistered=true">预约</button>
      <!-- 新增挂号弹窗 -->
      <div class="add-registered-wrapper" v-if="showAddRegistered">
        <Add-Registered-Dialog @showAddRegistered="showAddRegistered=false"></Add-Registered-Dialog>
      </div>
    </li>
    <!-- 医生 -->
    <li
      @click="lisNum=index"
      :class="{'is-selected':index==lisNum}"
      v-for="(item,index) of 10"
      :key="index"
      class="flex row align-items"
    >
      <div class="item-left flex flex-item">
        <span>{{itemData.name}}</span>
        <span class="item">
          待签
          <span>{{itemData.signedCount}}</span>
        </span>
        <span class="item">
          待诊
          <span>{{itemData.clinicalCount}}</span>
        </span>
        <span class="item">
          已诊
          <span>{{itemData.treatCount}}</span>
        </span>
      </div>
      <button class="btn-ghost-samll" @click="showAddRegistered=true">预约</button>
      <!-- 新增挂号弹窗 -->
      <div class="add-registered-wrapper" v-if="showAddRegistered">
        <Add-Registered-Dialog @showAddRegistered="showAddRegistered=false"></Add-Registered-Dialog>
      </div>
    </li>
  </ul>
</template>

<script>
import AddRegisteredDialog from "../dialog/addRegisteredDialog";
export default {
  components: {
    "Add-Registered-Dialog": AddRegisteredDialog
  },
  data() {
    return {
      lisNum: -1, // 左侧激活样式控制变量
      showAddRegistered: false, // 弹窗显示隐藏控制变量
      itemDataTop: {
        name: "全部医生",
        signedCount: 0,
        clinicalCount: 5,
        treatCount: 0
      }, // 医生列表的数据
      itemData: {
        name: "李思思",
        signedCount: 0,
        clinicalCount: 0,
        treatCount: 0
      } // 医生列表的数据
    };
  }
};
</script>

<style lang="less" scoped>
.registered-list {
  .row {
    cursor: pointer;
    height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid #eff3f6;
    .item-left {
      span:nth-child(1) {
        width: 92px;
        font-weight: 700;
      }
      span.item {
        color: #7a8794;
        font-size: 12px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        > span {
          margin-left: 3px;
          color: #000;
        }
      }
    }
  }

  /*激活样式*/
  .is-selected {
    background-color: #00ace9;
    color: #fff;
    .item-left {
      span.item {
        color: #fff !important;
        > span {
          color: #fff !important;
        }
      }
    }
  }
}
</style>