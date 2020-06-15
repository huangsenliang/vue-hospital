<template>
  <!-- 权限选择列表 -->
  <div class="permissions-list dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style permissions-list-body">
      <!-- 头部 -->
      <div class="permissions-top flex align-items justify-between">
        <h4>选择执业许可范围</h4>
        <i class="iconfont icon-del" @click="$emit('close')"></i>
      </div>
      <!-- 内容 -->
      <div class="permissions-content flex">
        <!-- 待选数据 -->
        <div class="data-col">
          <el-tree
            :data="data"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            @check="getCheckedNodes"
            highlight-current
            expand-on-click-node
            :props="defaultProps"
          ></el-tree>
        </div>
        <!-- 选中数据 -->
        <div class="selected-col">
          <div class="header-top">
            <h4>已选&nbsp;&nbsp;{{selectedData.length}}&nbsp;&nbsp;项</h4>
          </div>
          <ul class="table">
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-primary" style="marginRight:10px">确认</button>
        <button class="btn-blank" @click="$emit('close')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCheckedNodes(itemObj, ListObj) {
      this.selectedData = ListObj.checkedNodes;
    }
  },

  computed: {
    //   获取选中的节点
    // selectedData() {
    //   return this.$refs.tree.getCheckedNodes();
    // }
  },

  data() {
    return {
      selectedData: [], // 选中的数据
      data: [
        {
          id: 1,
          name: "护士站"
        },
        {
          id: 2,
          name: "患者",
          children: [
            {
              id: 4,
              name: "患者档案"
            },
            {
              id: 5,
              name: "会员管理"
            },
            {
              id: 6,
              name: "患者随访"
            }
          ]
        },
        {
          id: 3,
          name: "库存",
          children: [
            {
              id: 7,
              name: "药品/物资"
            },
            {
              id: 8,
              name: "采购"
            },
            {
              id: 9,
              name: "入库"
            },
            {
              id: 10,
              name: "出库"
            },
            {
              id: 11,
              name: "盘点"
            }
          ]
        },
        
      ],
      defaultProps: {
        children: "children",
        label: "name"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.permissions-list {
  .permissions-list-body {
    background: #fff;
    //   头部
    .permissions-top {
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
    //   内容
    .permissions-content {
      height: 500px;
      .data-col {
        width: 315px;
        border-right: 1px solid #e6eaee;
        height: 100%;
        overflow-y: auto;
      }
      .selected-col {
        width: 280px;
        height: 100%;
        .header-top {
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #e6eaee;
          padding-left: 12px;
          h4 {
            font-weight: 700;
          }
        }
      }
    }
    // 按钮
    .btn-wrapper {
      height: 61px;
      padding: 0 24px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>