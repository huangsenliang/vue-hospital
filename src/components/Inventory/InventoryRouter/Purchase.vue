<template>
  <div class="purchase-wrapper">
    <!-- 头部 -->
    <div class="purchase-header-wrapper">
      <div class="purchase-header-left flex">
        <Select-Input style="marginRight:10px" :options="purchaseStateList" placeholder="全部状态"></Select-Input>
        <Select-Input style="marginRight:10px" :options="purchaseDateList" placeholder="请选择"></Select-Input>
        <div class="calendar-wrapper">
          <i class="icon-rili iconfont"></i>
          <input type="text" placeholder="选择日期范围" />
          <div></div>
        </div>
        <Search-Input placeholder="药品名称/条形码"></Search-Input>
      </div>
      <div class="purchase-header-right flex">
        <!-- 新增采购弹窗 -->
        <div class="add-purchaser-wrapper">
          <button
            @click="showAddPurchaser=!showAddPurchaser"
            class="button-small button-success"
          >新增采购申请</button>
          <div v-if="showAddPurchaser" class="popper-wrapper">
            <div class="mask"></div>
            <div class="popper-style add-popper-content">
              <!-- 头部 -->
              <div class="add-popper-header flex">
                <h4>采购申请单</h4>
                <div class="header-right">
                  <i
                    @click="showAddPurchaser=false"
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
                      <span style="color: #7a8794;">申请人：</span>
                      <span>李思思</span>
                    </div>
                    <div class="ellipsis" style="marginRight:16px">
                      <span style="color: #7a8794;">申请门店：</span>
                      <span>惠民体验诊所</span>
                    </div>
                  </div>
                  <div class="middle-wrapper flex">
                    <div class="flex" style="alignItems: center;marginRight:16px">
                      <label>采购类型：</label>
                      <Select-Input :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
                    </div>
                    <div class="flex" style="alignItems: center;marginRight:16px">
                      <label>备注：</label>
                      <input
                        type="text"
                        style="paddingLeft:15px;border:1px solid #ced0da;height:32px;borderRadius:4px;width:300px"
                      />
                    </div>
                  </div>
                  <div class="right">
                    <div @click="showDialogWrapper=true" class="btn">
                      <span>库存告警药品</span>
                      <br />
                      <span>(13)</span>
                    </div>
                    <!-- 库存告警药品 -->
                    <div v-if="showDialogWrapper" class="dialog-wrapper popper-wrapper">
                      <div class="mask"></div>
                      <div class="dialog popper-style">
                        <!-- 头部 -->
                        <div class="dialog-header flex">
                          <h4>库存告警药品</h4>
                          <i @click="showDialogWrapper=false" class="icon-del iconfont"></i>
                        </div>
                        <!-- 内容 -->
                        <div class="dialog-body">
                          <ul class="flex row">
                            <li class="item1">
                              <el-checkbox v-model="checkAll">药品名称</el-checkbox>
                            </li>
                            <li class="item2">
                              <span>规格</span>
                            </li>
                            <li class="item3">
                              <span>最近供应商</span>
                            </li>
                            <li class="item4">
                              <span>剩余</span>
                            </li>
                          </ul>
                          <ul v-for="(item,index) of 6" :key="index" class="flex row">
                            <li class="item1">
                              <el-checkbox v-model="checkAll">柴胡</el-checkbox>
                            </li>
                            <li class="item2">
                              <span>中药饮片</span>
                            </li>
                            <li class="item3">
                              <span>四川医药销售公司</span>
                            </li>
                            <li class="item4">
                              <span>6g</span>
                            </li>
                          </ul>
                        </div>
                        <!-- 底部 -->
                        <div class="dialog-footer">
                          <Footer-Btn>
                            <button class="button-small" @click="showDialogWrapper=false">取消</button>
                            <button disabled class="button-small">加入采购申请</button>
                          </Footer-Btn>
                        </div>
                      </div>
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
                      <span>厂家</span>
                    </li>
                    <li class="item4">
                      <span>最近供应商</span>
                    </li>
                    <li class="item5">
                      <span>最近进价</span>
                    </li>
                    <li class="item6">
                      <span>剩余库存</span>
                    </li>
                    <li class="item7">
                      <span>日均销量(近15天)</span>
                    </li>
                    <li class="item8">
                      <span>毛利率</span>
                    </li>
                    <li class="item9">
                      <span>数量</span>
                    </li>
                    <li class="item10">
                      <span></span>
                    </li>
                  </ul>
                  <ul class="row flex">
                    <li class="item1">
                      <span>000666</span>
                    </li>
                    <li class="item2">
                      <span>阿莫西林胶囊（阿莫灵）</span>
                      <span>5g*24粒子</span>
                    </li>
                    <li class="item3">
                      <span>澳美制药</span>
                    </li>
                    <li class="item4">
                      <span></span>
                    </li>
                    <li class="item5">
                      <span>-</span>
                    </li>
                    <li class="item6">
                      <span>0盒</span>
                    </li>
                    <li class="item7">
                      <span>0盒</span>
                    </li>
                    <li class="item8">
                      <span>0.00%</span>
                    </li>
                    <li class="item9 flex">
                      <input type="text" s />
                      <span class="unit">盒</span>
                    </li>
                    <li class="item10">
                      <i class="icon-del iconfont"></i>
                    </li>
                  </ul>
                </div>
                <!--输入框 -->
                <div class="search-wrapper flex">
                  <div class="search-input">
                    <i class="icon-jia iconfont"></i>
                    <input type="text" placeholder="请输入采购药品或扫码识别" />
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
              <div class="footer-wrapper clear-float">
                <Footer-Btn>
                  <button @click="showAddPurchaser=false" class="button-small">关闭</button>
                  <button class="button-small button-primary">确定</button>
                </Footer-Btn>
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
    <div class="purchase-table-wrapper">
      <ul class="table-header flex">
        <li class="item1">
          <span>采购申请单号</span>
        </li>
        <li class="item2">
          <span>状态</span>
        </li>
        <li class="item3">
          <span>采购计划</span>
        </li>
        <li class="item4">
          <span>门店</span>
        </li>
        <li class="item5">
          <span>品种</span>
        </li>
        <li class="item6">
          <span>数量</span>
        </li>
        <li class="item7">
          <span>申请人</span>
        </li>
        <li class="item8">
          <span>申请日期</span>
        </li>
        <li class="item9">
          <span>审核日期</span>
        </li>
      </ul>
      <ul v-for="(item,index) of 10" :key="index" class="row flex">
        <li style="color: rgb(10, 140, 234);" class="item1">
          <span>CG202005200000001</span>
        </li>
        <li class="item2">
          <span>已通过</span>
        </li>
        <li class="item3">
          <span>2020-05-20采购</span>
        </li>
        <li class="item4">
          <span>惠民体验诊所</span>
        </li>
        <li class="item5">
          <span>4</span>
        </li>
        <li class="item6">
          <span>40</span>
        </li>
        <li class="item7">
          <span>刘洋</span>
        </li>
        <li class="item8">
          <span>2020-05-20</span>
        </li>
        <li class="item9">
          <span>2020-05-20</span>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div style="marginTop:16px" class="pag-wrapper flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;2008&nbsp;</span>条采购单，数量
        <span style="fontWeight: 700;">&nbsp;774,911,728.64&nbsp;</span>
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
      showUnitSelect: false, // 单位盒子显示隐藏控制变量
      selectedUnit: "盒", // 选中的单位值
      checkAll: false, // 全选按钮值
      showDialogWrapper: false, // 库存告警药品弹窗显示隐藏控制变量
      showAddPurchaser: false, // 新增采购弹窗显示隐藏控制变量
      goodsOptionsList:[],  
      purchaseStateList: [
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
        }
      ], // 采购状态值数据
      purchaseDateList: [
        {
          value: "申请日期",
          label: "申请日期"
        },
        {
          value: "审核日期",
          label: "审核日期"
        }
      ], // 采购日期值数据
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
    sendInd() {
      this.$emit("getInd", 7);
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Purchase/Purchase.css";
</style>