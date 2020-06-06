<template>
  <!-- 库存：药品/物资页面 -->
  <div class="inventory-goods">
    <!-- 头部 -->
    <div class="goods-content-header flex align-items">
      <!-- 头部左侧表单 -->
      <div class="left flex">
        <Select-Input :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
        <div class="input-search">
          <Search-Input placeholder="药品名称/条形码"></Search-Input>
        </div>
      </div>
      <!-- 头部右侧 -->
      <div class="right flex">
        <!-- 新建药品 -->
        <div style="marginRight:8px">
          <button @click="showDrug=!showDrug" class="btn-success">新建药品</button>
          <!-- 遮罩层 -->
          <div v-show="showDrug" class="popper-wrapper">
            <Dialog-Drug @showDrug="showDrug=false"></Dialog-Drug>
          </div>
        </div>
        <!-- 新建物资 -->
        <div style="marginRight:8px">
          <button @click="showSupplies=!showSupplies" class="btn-success">新建物资</button>
          <div v-if="showSupplies" class="popper-wrapper">
            <Dialog-Supplies @showSupplies="showSupplies=false"></Dialog-Supplies>
          </div>
        </div>
        <!-- 新增商品 -->
        <div style="marginRight:8px">
          <button @click="showGoods=!showGoods" class="btn-success">新建商品</button>
          <div v-if="showGoods" class="popper-wrapper">
            <Dialog-Goods @showGoods="showGoods=false"></Dialog-Goods>
          </div>
        </div>

        <button style="marginRight:8px" class="btn-blank">智能对码</button>
        <button @click="handleToWarnset" class="btn-blank">预警设置</button>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 药品表格 -->
    <Goods-List style="height:calc(100% - 112px)"></Goods-List>
    <!-- 分页 -->
    <div class="pag-wrapper flex align-items justify-between">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <p>
        共
        <span style="font-weight: 700;">55</span> 条数据
      </p>
    </div>
  </div>
</template>

<script>
/*******************全局组件*************/
import SelectInput from "@/components/SelectInput";
import SearchInput from "@/components/SearchInput";
/******************局部组件*******************/
// 药品列表
import GoodsList from "./components/goodsList";
// 新建药品弹窗
import DialogDrug from "./dialog/dialogDrug";
// 新建物资弹窗
import DialogSupplies from "./dialog/dialogSupplies";
// 新建商品弹窗
import DialogGoods from "./dialog/dialogGoods";
export default {
  components: {
    SelectInput,
    SearchInput,
    DialogDrug,
    DialogSupplies,
    DialogGoods,
    GoodsList
  },
  data() {
    return {
      infoData: null, // 药品信息弹窗数据对象
      showDetailsPopper: false, // 商品详情页面显示隐藏控制变量
      tabsList: [
        { title: "药品信息", name: "DetailsInfo" },
        { title: "批次信息", name: "BatchInfo" },
        { title: "进销存清单", name: "List" },
        { title: "预警设置", name: "Warning" }
      ], // 商品详情标签数据

      showGoods: false, // 新增商品弹窗盒子显示隐藏控制变量

      showDrug: false, // 新建药品弹窗盒子显示隐藏控制变量
      showSupplies: false, // 新建物资弹窗盒子显示隐藏控制变量

      activeName: "first",
      goodsOptionsList: [
        {
          value: "西药",
          label: "西药"
        },
        {
          value: "中成药",
          label: "中成药"
        },
        {
          value: "中药饮片",
          label: "中药饮片"
        },
        {
          value: "中药颗粒",
          label: "中药颗粒"
        },
        {
          value: "医用材料",
          label: "医用材料"
        },
        {
          value: "后勤材料",
          label: "后勤材料"
        },
        {
          value: "固定资产",
          label: "固定资产"
        },
        {
          value: "自制成品",
          label: "自制成品"
        },
        {
          value: "保健药品",
          label: "保健药品"
        },
        {
          value: "保健食品",
          label: "保健食品"
        },
        {
          value: "其他商品",
          label: "其他商品"
        }
      ]
    };
  },
  methods: {
    // 处理商品详情信息
    handleDetailsInfo() {
      this.showDetailsPopper = true;
      this.$api.getGoods({ params: { id: 1 } }).then(res => {
        this.infoData = res.data;
      });
    },

    /**************************/

    // 处理：跳转到warnset.vue页面
    handleToWarnset() {
      this.$router.push({ path: "/home/warnset" });
    },

    // 处理：标签切换
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    },
    sendInd() {
      this.$emit("getInd", 7);
    }
  }
};
</script>

<style lang="less" scoped>
.inventory-goods {
  height: 100%;
  /*头部*/
  .goods-content-header {
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    padding: 0 16px;
    height: 64px;
    .left {
      .input-search {
        margin-left: 8px;
        min-width: 300px;
      }
    }
    .right {
      i.icon-upload {
        cursor: pointer;
        margin-left: 8px;
        color: @color_007aff;
        display: inline-block;
        height: 30px;
        border-radius: 4px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid @color_ced0da;
        &:hover {
          background: @color_d2e5f6;
          border: 1px solid @color_007aff;
        }
      }
    }
  }
  // 分页
  .pag-wrapper {
    height: 55px;
  }
}
</style>