<template>
  <!-- 处方：西药 -->
  <div id="recipe-west" style="height:100%" class="hidden-scorll">
    <Admin-Header title="西药处方"></Admin-Header>
    <div class="west-body">
      <!-- 顶部按钮 -->
      <div class="btn-wrapper flex align-items">
        <button class="btn-success" style="marginRight:15px">新增</button>
        <el-input
          style="width:180px"
          v-model="inputValue"
          prefix-icon="el-icon-search"
          placeholder="搜索处方"
        ></el-input>
      </div>
      <!-- 表格 -->
      <el-tabs tab-position="left" style="height: 100%;">
        <el-tab-pane label="全部">
          <div class="all-wrapper">
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
          </div>
        </el-tab-pane>
        <el-tab-pane label="诊所公用">
          <div class="sharing-wrapper"></div>
        </el-tab-pane>
        <el-tab-pane label="个人专用">
          <div class="private-wrapper"></div>
        </el-tab-pane>
      </el-tabs>
      <!-- 分页 -->
      <div class="pag-wrapper flex align-items justify-end">
        <el-pagination
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
/**************全局组件************/
/*************局部组件***********/
import AdminHeader from "../components/adminHeader";
export default {
  components: {
    AdminHeader
  },
  data() {
    return {
      inputValue: "" //搜索处方值
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
#recipe-west {
  overflow-y: auto;
  .west-body {
    padding: 0 24px;
    // 按钮
    .btn-wrapper {
      height: 61px;
    }
    /deep/ .el-tabs--left .el-tabs__header {
      margin-top: 50px;
      padding-left: 0;
      border-bottom: 0;
      background-color: #fff;
      /deep/ .el-tabs__item {
        padding-left: 0;
      }
    }
    // 全部表格
    .all-wrapper {
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
    }
    // 分页
    .pag-wrapper {
      height: 61px;
    }
  }
}
</style>