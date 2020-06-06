<template>
  <!-- 批次明细弹窗 -->
  <div class="dialog-batch dialog hidden-scorll">
    <div class="cover-wrapper"></div>
    <div class="batch-popper">
      <!-- 头部 -->
      <div class="popper-header flex">
        <h4>批次明显（51028557）</h4>
        <div class="header-right">
          <i @click="$emit('showBatchPopper')" class="icon-del iconfont"></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="popper-body">
        <!-- 搜索框 -->
        <div class="select-wrapper flex align-items">
          <Select-Input style="marginRight:8px"></Select-Input>
          <Calendar-Input></Calendar-Input>
        </div>
        <!-- 表格 -->
        <div class="table-wrapper">
          <ul class="th flex">
            <li class="item1">
              <span>动作</span>
            </li>
            <li class="item2">
              <span>进价</span>
            </li>
            <li class="item3">
              <span>售价</span>
            </li>
            <li class="item4">
              <span>数量</span>
            </li>
            <li class="item5">
              <span>总价（售价）</span>
            </li>
            <li class="item6">
              <span>总价（进价）</span>
            </li>
            <li class="item7">
              <span>操作时间</span>
            </li>
            <li class="item8">
              <span>操作人</span>
            </li>
          </ul>
          <ul v-for="(item,index) of 10" :key="index" class="td flex">
            <li class="item1">
              <span>发药</span>
            </li>
            <li class="item2">
              <span>7.20/盒</span>
            </li>
            <li class="item3">
              <span>15.00</span>
            </li>
            <li class="item4">
              <span>1片</span>
            </li>
            <li class="item5">
              <span>2.50</span>
            </li>
            <li class="item6">
              <span>1.20</span>
            </li>
            <li class="item7">
              <span>2020-06-01 16:51:05</span>
            </li>
            <li class="item8">
              <span>李思思</span>
            </li>
          </ul>
        </div>
        <!-- 分页 -->
        <div class="pag-wrapper flex align-items justify-between">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          <p>
            共
            <span style="font-weight: 700;">55</span> 条数据
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*****************引入全局组件********/
import SelectInput from "@/components/SelectInput";
import CalendarInput from "@/components/CalendarInput";

export default {
  components: {
    SelectInput,
    CalendarInput,
  }
};
</script>

<style lang="less" scoped>
.dialog-batch {
  /*批次明显弹窗*/
  .batch-popper {
    position: absolute;
    z-index: 2005;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background: #fff;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //   头部
    .popper-header {
      height: 41px;
      padding-left: 24px;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-size: 16px;
        font-weight: 700;
      }
    }
    // 内容
    .popper-body {
      width: 100%;
      // height: 587px;
      padding: 0 24px 24px;
      // 搜索框
      .select-wrapper {
        height: 64px;
      }
      // 表格
      .table-wrapper {
        li {
          padding: 0 6px;
        }
        .th {
          height: 36px;
          line-height: 36px;
          background: #f5f7fb;
          border-top: 1px solid #e6eaee;
          border-bottom: 1px solid #e6eaee;
        }
        .td {
          cursor: pointer;
          height: 48px;
          line-height: 48px;
          border-bottom: 1px solid #dadbe0;
          &:hover {
            background: @color_e9eff8;
          }
        }
        .item1,
        .item2,
        .item3,
        .item4 {
          width: 9.52381%;
        }
        .item5,
        .item6 {
          width: 14.2857%;
        }
        .item7 {
          text-align: center;
          width: 19.0476%;
        }
        .item8 {
          text-align: center;
          width: 14.2857%;
        }
      }
      // 分页
      .pag-wrapper{
        height: 55px;
      }
    }
  }
}
</style>