<template>
  <!-- 处方：西药 -->
  <div id="recipe-west" style="height:100%" class="hidden-scorll">
    <Admin-Header title="西药处方"></Admin-Header>
    <div class="west-body">
      <!-- 顶部按钮 -->
      <div class="header-wrapper flex align-items">
        <button class="btn-success" style="marginRight:10px">新增</button>
        <!-- 添加处方 -->
        <Dialog-Add-West></Dialog-Add-West>
        <el-input
          style="width:180px"
          v-model="inputValue"
          prefix-icon="el-icon-search"
          placeholder="搜索处方"
        ></el-input>
        <ul class="tabs flex align-items">
          <li
            v-for="(item,index) of tabsData"
            :key="index"
            class="item"
            :class="{'is-selected':tag===index}"
            @click="tag=index"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </div>

      <!-- 表格 -->
      <div class="table-wrapper">
        <ul class="th flex align-items">
          <li class="item1">
            <span>处方模板名称</span>
          </li>
          <li class="item2 flex-item">
            <span>处方内容</span>
          </li>
          <li class="item3">
            <span>创建人</span>
          </li>
        </ul>
        <div class="table-body">
          <ul v-for="(item,index) of 6" :key="index" class="td flex align-items">
            <li class="item1">
              <span>流感</span>
            </li>
            <li class="flex-item text-ellipsis">
              <span>奥美拉唑肠溶胶囊18粒、 4561dsf6sdf5sdf5sdf阿莫西林胶囊12粒、 感冒灵胶囊8片、 维生素B1片12片、 维生素B2片30片 阿莫西林胶囊22粒</span>
            </li>
            <li class="item3">
              <span>李思思</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 分页 -->
      <div class="pag-wrapper flex align-items">
        <el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
/**************全局组件************/
/*************局部组件***********/
import AdminHeader from "../components/adminHeader";
import DialogAddWest from "./dialog/dialogAddWest";
export default {
  components: {
    AdminHeader,
    DialogAddWest
  },
  data() {
    return {
      inputValue: "", //搜索处方值
      tag: 0, // 标签切换索引
      tabsData: ["全部", "诊所公用", "个人专用"], // 标签切换数据
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#recipe-west {
  overflow-y: auto;
  .west-body {
    padding: 0 24px;
    // 按钮
    .header-wrapper {
      height: 61px;
      .tabs {
        margin-left: 10px;
        height: 32px;
        > li.item {
          height: 32px;
          line-height: 32px;
          text-align: center;
          width: 70px;
          color: #8493a4;
          border: 1px solid #ced0da;
          cursor: pointer;
        }
        li.item + li.item {
          margin-left: -1px;
        }
        li:last-child {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        li:first-child {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        // 激活样式
        .is-selected {
          background-color: #f5f7fb;
          color: #007aff !important;
        }
      }
    }
    // 表格
    .table-wrapper {
      min-height: 300px;
      ul > li {
        padding: 0 6px;
      }
      .item1 {
        width: 18.75%;
      }
      .item3 {
        width: 8.33333%;
      }
      .th {
        height: 40px;
        color: #8493a4;
        background: #f5f7fb;
        border-top: 1px solid #e6eaee;
        border-bottom: 1px solid #e6eaee;
      }
      .td {
        .item1 {
          color: @color_007aff;
        }
        cursor: pointer;
        height: 48px;
        border-bottom: 1px solid #dadbe0;
        &:hover {
          background: @color_e9eff8;
        }
      }
    }
    // 分页
    .pag-wrapper {
      height: 61px;
    }
  }
}
</style>