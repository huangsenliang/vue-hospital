<template>
  <!-- 入库单弹窗列表行组件：目的避免样式冲突 -->
  <div class="dialog-cargo-application-item">
    <ul class="flex align-items td">
      <li class="item1">
        <span>4565416</span>
      </li>
      <li class="item2">
        <span>123456</span>
      </li>
      <li class="item3 flex-item text-ellipsis">
        <span>阿莫西林</span>
      </li>
      <li class="item4">
        <span>1%</span>
      </li>
      <li class="item5 text-ellipsis">
        <span>白云山</span>
      </li>
      <li class="item6">
        <!-- 生产日期 -->
        <span v-show="isChangeInfo">6456654</span>
        <div v-show="!isChangeInfo" class="gl-input-wrapper">
          <input style="width:100%" type="text" v-model="batchNumber" />
        </div>
      </li>
      <li class="item7">
        <!-- 效期 -->
        <span v-show="isChangeInfo">--</span>
        <div v-show="!isChangeInfo">
          <el-date-picker style="width:100%" v-model="productionDate" type="date" ></el-date-picker>
        </div>
      </li>
      <li class="item8">
				<!-- 数量 -->
        <span v-show="isChangeInfo">--</span>
        <div v-show="!isChangeInfo">
					 <el-date-picker style="width:100%" v-model="effective" type="date"></el-date-picker>
        </div>
      </li>
      <li class="item9">
        <span v-show="isChangeInfo">2kg</span>
        <div v-show="!isChangeInfo" class="select-wrapper flex align-item">
          <input type="text" v-model="count" />
          <!-- 单位 -->
          <div class="unit-wrapper">
            <span @click="showUnitList=!showUnitList" class="unit">
              {{unitName}}
              <i class="icon-shang1 iconfont"></i>
            </span>
            <ul v-show="showUnitList" class="unit-list">
              <li
                @click="handleShowUnitList(item)"
                :class="{'is-selected':unitName==item}"
                v-for="(item,index) of unitListData"
                :key="index"
              >
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="item10">
        <span>5.00/kg</span>
      </li>
      <li class="item11">
        <span>10.00</span>
      </li>
      <li class="item12">
        <span v-show="isChangeInfo" @click="isChangeInfo=false">修改</span>
        <span v-show="!isChangeInfo" @click="isChangeInfo=true">保存</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
			count: 52, // 数量数量框绑定变量值
      effective: "2021-04-30", // 效期输入框双向绑定值
      productionDate: "2020-02-03", // 生产日期输入框绑定值
      batchNumber: "123456", // 生产批号输入框绑定值
      unitName: "kg", // 选中的单位索引
      unitListData: ["kg", "g"], // 单位数据
      showUnitList: false, // 是否显示单位选择列表
      isChangeInfo: true // 是否修改信息
    };
  },
  methods: {
    // 处理：单位盒子显示隐藏
    handleShowUnitList(item) {
      this.unitName = item;
      this.showUnitList = false;
    }
  }
};
</script>

<style lang="less" spoced>
.dialog-cargo-application-item {
  li {
    padding: 0 8px;
  }
  .item1 {
    width: 70px;
  }
  .item2 {
    width: 90px;
  }
  .item4 {
    text-align: right;
    padding-right: 16px;
    width: 60px;
  }
  .item5 {
    width: 120px;
  }
  .item6 {
    width: 102px;
  }
  .item7 {
    width: 120px;
  }
  .item8 {
    text-align: center;
    width: 120px;
  }
  .item9 {
    text-align: right;
    width: 108px;
    // 输入框
    .select-wrapper {
      input {
        border: 3px;
        height: 32px;
				width: 70px;
				text-align: center;
        margin-right: -1px;
        border: @color_ced0da 1px solid;
      }
      // 单位选择
      .unit-wrapper {
        position: relative;
        .unit {
          display: inline-block;
          width: 40px;
          height: 32px;
          line-height: 27px;
          text-align: center;
          border: @color_ced0da 1px solid;
        }
        // 选择列表
        .unit-list {
          position: absolute;
          top: 33px;
          background: #fff;
          border: 3px;
          z-index: 1000;
          border: 1px solid @color_ced0da;
          li {
            width: 38px;
            height: 32px;
            line-height: 32px;
            text-align: center;
          }
          li + li {
            border-top: 1px solid @color_ced0da;
          }
          .is-selected {
            background: @color_007aff;
            color: #fff;
          }
        }
      }
    }
  }
  .item10 {
    text-align: right;
    padding-right: 16px;
    width: 98px;
  }
  .item11 {
    text-align: right;
    width: 88px;
  }
  .item12 {
    padding-left: 8px;
    width: 80px;
    color: @color_007aff;
    cursor: pointer;
  }

  .th {
    color: @color_8493a4;
    font-weight: 700;
    height: 32px;
    border-bottom: 1px solid #e6eaee;
    border-top: 1px solid #e6eaee;
    background-color: #f5f7fb;
  }
  .td {
    cursor: pointer;
    height: 48px;
    border-bottom: 1px solid #e6eaee;
    &:hover {
      background: @color_e9eff8;
    }
  }
}
</style>