<template>
  <div class="provider-list">
    <ul class="table-header flex align-items">
      <li class="item1">
        <span>供应商</span>
      </li>
      <li class="item2">
        <span>启用状态</span>
      </li>
      <li class="item3">
        <span>许可证号</span>
      </li>
      <li class="item4">
        <span>联系人</span>
      </li>
      <li class="item5">
        <span>联系方式</span>
      </li>
      <li class="item6">
        <span>备注</span>
      </li>
    </ul>
    <div class="table-body">
      <ul
        v-for="(item,index)  of 10"
        :key="index"
        @click="showDialogProvider=true"
        class="flex td align-items"
      >
        <li class="item1">
          <span>华纳大药厂</span>
        </li>
        <li class="item2">
          <span>启用</span>
        </li>
        <li class="item3">
          xxx
          <span>许可证号</span>
        </li>
        <li class="item4">
          xxx
          <span>联系人</span>
        </li>
        <li class="item5">
          18244909680
          <span>联系方式</span>
        </li>
        <li class="item6">
          xxxx
          <span>备注</span>
        </li>
      </ul>
    </div>
    <!-- 添加供应商弹窗组件 -->
    <div v-show="showDialogProvider">
      <Dialog-Provider @showDialogProvider="showDialogProvider=false"></Dialog-Provider>
    </div>
  </div>
</template>

<script>
import DialogProvider from "../dialog/dialogProvider";
export default {
  components: {
    DialogProvider
  },
  data() {
    return {
      showDialogProvider: false //  添加供应商弹窗组件显示隐藏控制变量
    };
  }
};
</script>

<style lang="less" scoped>
.provider-list {
  font-size: 14px;
  ul > li {
    padding: 0 6px;
  }
  //   表内容
  .table-body {
      height: calc(100% - 36px);
      overflow-y: auto;
    .td {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #dadbe0;
      cursor: pointer;
      &:hover {
        background: @color_e9eff8;
      }
    }
  }
  //   表头
  .table-header {
    height: 36px;
    background: #f5f7fb;
    color: #7a8794;
    border-top: 1px solid #e6eaee;
    border-bottom: 1px solid #e6eaee;
  }
  .item1 {
    text-align: left;
    width: 25.4717%;
  }
  .item2 {
    text-align: left;
    width: 12.2642%;
  }
  .item3 {
    text-align: left;
    width: 12.2642%;
  }
  .item4 {
    text-align: center;
    width: 12.2642%;
  }
  .item5 {
    text-align: left;
    width: 12.2642%;
  }
  .item6 {
    text-align: left;
    width: 25.4717%;
  }
}
</style>