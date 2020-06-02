<template>
  <div class="cargo-wrapper">
    <!-- 头部 -->
    <div class="cargo-header flex">
      <div class="flex">
        <Calendar style="marginRight:16px"></Calendar>
        <Select-Input style="marginRight:16px"></Select-Input>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <div class="cargo-header-right flex">
        <!-- 新增入库弹窗 -->
        <div class="add-cargo-wrapper">
          <button @click="showAddCargo=!showAddCargo" class="button-small button-success">新增入库</button>
          <div v-if="showAddCargo" class="popper-wrapper">
            <div class="mask"></div>
            <div class="popper-style add-popper-content">
              <!-- 头部 -->
              <div class="add-popper-header flex">
                <h4>入库单</h4>
                <div class="header-right">
                  <i
                    @click="showAddCargo=false"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
                </div>
              </div>
              <!-- 内容 -->
              <div class="add-popper-body">
                <div class="describe flex">
                  <div class="left flex">
                    <div style="marginRight:16px">
                      <span style="color: #7a8794;">入库人：</span>
                      <span>李思思</span>
                    </div>
                    <div class="ellipsis" style="marginRight:16px">
                      <span style="color: #7a8794;">入库门店：</span>
                      <span>惠民体验诊所</span>
                    </div>
                  </div>
                  <div class="middle-wrapper flex">
                    <div class="flex" style="alignItems: center;marginRight:16px">
                      <label>供应商：</label>
                      <Select-Input :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
                    </div>
                    <div class="flex" style="alignItems: center;marginRight:16px">
                      <label>随货单号：</label>
                      <input
                        type="text"
                        style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:100px"
                      />
                    </div>
                    <div class="flex" style="alignItems: center;marginRight:16px">
                      <label>备注：</label>
                      <input
                        type="text"
                        style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:150px"
                      />
                    </div>
                  </div>
                </div>
                <!-- 表格 -->
                <div class="table">
                  <ul class="table-header flex">
                    <li class="item1">
                      <span>药品编码</span>
                    </li>
                    <li class="item2">
                      <span>药品名称</span>
                    </li>
                    <li class="item3">
                      <span>税率</span>
                    </li>
                    <li class="item4">
                      <span>厂家</span>
                    </li>
                    <li class="item5">
                      <span>售价</span>
                    </li>
                    <li class="item6">
                      <span>生成批号</span>
                    </li>
                    <li class="item7">
                      <span>生成日期</span>
                    </li>
                    <li class="item8">
                      <span>效期</span>
                    </li>
                    <li class="item9">
                      <span>数量</span>
                    </li>
                    <li class="item10">
                      <span>进阶</span>
                    </li>
                    <li class="item11">
                      <span>含税金额</span>
                    </li>
                    <li style="width:28px" class="item12">
                      <span></span>
                    </li>
                  </ul>
                  <ul class="row flex">
                    <li class="item1">
                      <span>000666</span>
                    </li>
                    <li class="item2">
                      <span>阿莫西林胶囊（阿莫灵</span>
                      <span>5g*24粒子</span>
                    </li>
                    <li class="item3">
                      <span>0%</span>
                    </li>
                    <li class="item4">
                      <span>湖南迪诺</span>
                    </li>
                    <li class="item5">
                      <span>25.00/盒</span>
                    </li>
                    <li class="item6">
                      <input style="width:94px;height:32px;border:1px solid #ced0da;" type="text" />
                    </li>
                    <li class="item7">
                      <input style="width:112px;height:32px;border:1px solid #ced0da;" type="text" />
                    </li>
                    <li class="item8">
                      <input style="width:112px;height:32px;border:1px solid #ced0da;" type="text" />
                    </li>
                    <li class="item9 flex">
                      <input style="width:60px;height:32px;border:1px solid #ced0da;" type="text" />
                      <div class="unit flex" @click="showUnitSelect=!showUnitSelect">
                        <span>{{selectedUnit}}</span>
                        <i class="icon-shang1 iconfont"></i>
                        <div class="unit-select" v-if="showUnitSelect">
                          <span @click="selectedUnit='盒'">盒</span>
                          <br />
                          <span @click="selectedUnit='贴'">贴</span>
                        </div>
                      </div>
                    </li>
                    <li class="item10">
                      <input style="width:80px;height:32px;border:1px solid #ced0da;" type="text" />
                      <span class="uti">/盒</span>
                    </li>
                    <li class="item11">
                      <input style="width:80px;height:32px;border:1px solid #ced0da;" type="text" />
                    </li>
                    <li class="item12">
                      <i class="icon-del iconfont"></i>
                    </li>
                  </ul>
                </div>
                <!--输入框 -->
                <div class="search-wrapper flex">
                  <div class="left flex">
                    <div class="search-input">
                      <i class="icon-jia iconfont"></i>
                      <input type="text" placeholder="请输入采购药品或扫码识别" />
                    </div>
                    <span class="button-small btn-dr">导入到货清单</span>
                  </div>

                  <div class="right flex">
                    <div style="marginRight:16px;">
                      <span style="color:#96a4b3">品种：</span>
                      <span>1</span>
                    </div>
                    <div>
                      <span style="color:#96a4b3">数量：</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <!-- 底部按钮 -->
              </div>
              <!-- 底部按钮 -->
              <div class="footer-wrapper flex">
                <button class="btn-bc">保存草稿</button>
                <div class="right">
                  <button @click="showAddCargo=false" class="btn-gb button-small">关闭</button>
                  <button style="padding:2px 20px" class="button-small button-primary">确定</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="cargo-table">
      <ul class="flex table-header">
        <li class="item1">
          <span>入库单号</span>
        </li>
        <li class="item2">
          <span>状态</span>
        </li>
        <li class="item3">
          <span>结算状态</span>
        </li>
        <li class="item4">
          <span>门店</span>
        </li>
        <li class="item5">
          <span>供应商</span>
        </li>
        <li class="item6">
          <span>品种</span>
        </li>
        <li class="item7">
          <span>数量</span>
        </li>
        <li class="item8">
          <span>含税金额</span>
        </li>
        <li class="item9">
          <span>不含税金额</span>
        </li>
        <li class="item10">
          <span>入库人</span>
        </li>
        <li class="item11">
          <span>入库日期</span>
        </li>
      </ul>
      <div class="table-body">
        <ul v-for="(item,index) of 10" :key="index" class="row flex">
          <li style="color: rgb(10, 140, 234);" class="item1">
            <span>RK2020052100008</span>
          </li>
          <li class="item2">
            <span>已入库</span>
          </li>
          <li class="item3">
            <span>未结算</span>
          </li>
          <li class="item4">
            <span>ABC体验诊所</span>
          </li>
          <li class="item5">
            <span>盘点入库</span>
          </li>
          <li class="item6">
            <span>1</span>
          </li>
          <li class="item7">
            <span>10</span>
          </li>
          <li class="item8">
            <span>0.00</span>
          </li>
          <li class="item9">
            <span>0.00</span>
          </li>
          <li class="item10">
            <span>李思思</span>
          </li>
          <li class="item11">
            <span>2020-05-21</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部分页 -->
    <div style="marginTop:16px" class="pag-wrapper flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;718</span> 条入库单，数量
        <span style="fontWeight: 700;">&nbsp;37,539,760.99&nbsp;</span> ，含税金额
        <span style="fontWeight: 700;">&nbsp;285,388,552.709&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../Common/SelectInput";
import SearchInput from "../../Common/SearchInput";
import Calendar from "../../Common/Calendar";
import FooterBtn from "../FooterBtn";
export default {
  components: {
    SelectInput,
    SearchInput,
    FooterBtn,
    Calendar
  },
  data() {
    return {
      goodsOptionsList: [],
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      selectedUnit: "盒", // 选中的单位值
      showAddCargo: false, // 新增入库盒子弹窗显示隐藏控制变量
      checkAll: false, // 全选按钮值
      showDialogWrapper: false, // 库存告警药品弹窗显示隐藏控制变量
      showAddPurchaser: false // 新增采购弹窗显示隐藏控制变量
    };
  },
  methods: {
    // 处理：跳转到warnset.vue页面
    handleToWarnset() {
      this.$router.push({ path: "/home/warnset" });
    },
    // 处理：点击除了ShowSmallUni元素外触发
    handleClickOutSideShowSmallUnit() {
      this.showSmallUnit = false;
    },
    // 处理：点击除了ShowPackUnit元素外触发
    handleClickOutSideShowPackUnit() {
      this.showPackUnit = false;
    },
    // 处理：标签切换
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    },
    
  },
  created() {
    
  }
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Cargo/Cargo.css";
</style>