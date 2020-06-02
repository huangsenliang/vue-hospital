<template>
  <div class="apply-wrapper">
    <!-- 头部 -->
    <div class="apply-header flex">
      <!-- 左侧 -->
      <div class="header-left flex">
        <Select-input style="marginRight:8px"></Select-input>
        <Select-input style="marginRight:8px"></Select-input>
        <Calendar style="marginRight:8px"></Calendar>
        <Select-input></Select-input>
      </div>
      <!-- 右侧 -->
      <div class="header-right">
        <div class="add-final">
          <button @click="showApplyPoppe=!showApplyPoppe" class="btn-success">新增结算单</button>
          <!-- 新增结算单弹窗 -->
          <div class="popper-wrapper" v-if="showApplyPoppe">
            <div class="mask"></div>
            <div class="popper-style final-popper">
              <!-- 头部 -->
              <div class="popper-header flex">
                <h4>结算单</h4>
                <i
                  @click="showApplyPoppe=false"
                  class="icon-del iconfont"
                  style="fontSize:25px;cursor:pointer;"
                ></i>
              </div>
              <!-- 内容 -->
              <div class="popper-body">
                <!-- 行一 -->
                <div class="settlement-item flex">
                  <label for>供应商</label>
                  <Select-Input style="width:170px"></Select-Input>
                </div>
                <!-- 行二 -->
                <div class="settlement-item flex">
                  <label for>关联单据</label>
                  <!-- 右侧表格 -->
                  <div class="table-wrapper">
                    <button class="check-btn">选择关联单据</button>
                    <!-- 表格 -->
                    <div class="table">
                      <ul class="table-header flex">
                        <li class="item1">
                          <span>单号</span>
                        </li>
                        <li class="item2">
                          <span>类型</span>
                        </li>
                        <li class="item3">
                          <span>出/入库时间</span>
                        </li>
                        <li class="item4">
                          <span>操作人</span>
                        </li>
                        <li class="item5">
                          <span>品种</span>
                        </li>
                        <li class="item6">
                          <span>数量</span>
                        </li>
                        <li class="item7">
                          <span>金额</span>
                        </li>
                        <li class="item8">
                          <span>税额</span>
                        </li>
                        <li class="item9">
                          <span>出/入库门店</span>
                        </li>
                        <li class="item10">
                          <span></span>
                        </li>
                      </ul>
                      <ul class="row flex">
                        <li class="item1">
                          <span>RK2020202020220</span>
                        </li>
                        <li class="item2">
                          <span>入库</span>
                        </li>
                        <li class="item3">
                          <span>2020-05-06</span>
                        </li>
                        <li class="item4">
                          <span>李思思</span>
                        </li>
                        <li class="item5">
                          <span>2</span>
                        </li>
                        <li class="item6">
                          <span>40</span>
                        </li>
                        <li class="item7">
                          <span>280.00</span>
                        </li>
                        <li class="item8">
                          <span>0.00</span>
                        </li>
                        <li class="item9">
                          <span>惠民体验诊所</span>
                        </li>
                        <li class="item10 flex">
                          <i class="iconfont icon-del"></i>
                        </li>
                      </ul>
                      <!-- 统计 -->
                      <div class="calc row">
                        单据数量：
                        <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 价税合计(总计)：
                        <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 金额(总计)：
                        <span style="fontWeight:700;color:#000;marginRight:24px">200</span> 税额(总计)：
                        <span style="fontWeight:700;color:#000;marginRight:24px">200</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 行三 -->
                <div class="settlement-item flex">
                  <label for>关联发票</label>
                  <div class="associated-invoices flex">
                    <!-- 内容 -->
                    <div v-for="(item,index) of 10" :key="index" class="invoice-wrapper">
                      <div class="invoice-content">
                        <p>发票号：xxxx</p>
                        <p>开票日期：2020-05-05</p>
                      </div>
                      <div class="invoice-footer flex">
                        <span class="bj">编辑</span>
                        <span class="del">删除</span>
                      </div>
                    </div>
                    <!-- 添加按钮 -->
                    <div class="add-invoice">
                      <i style="font-size: 14px;color: #ced0da;" class="iconfont icon-jia"></i>
                      <br />
                      <p style="marginTop:8px;textAlign:center">添加发票</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 按钮 -->
              <div class="popper-footer flex">
                <div class="footer-right">
                  <button style="marginRight:16px" class="btn-primary">提交</button>
                  <button @click="showApplyPoppe=false" class="btn-blank">取消</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 表格内容 -->
    <div class="apply-body">
      <ul class="table-header flex">
        <li class="item1">
          <span>结算单号</span>
        </li>
        <li class="item2">
          <span>状态</span>
        </li>
        <li class="item3">
          <span>供应商</span>
        </li>
        <li class="item4">
          <span>价税总和</span>
        </li>
        <li class="item5">
          <span>实际金额</span>
        </li>
        <li class="item6">
          <span>实际税额</span>
        </li>
        <li class="item7">
          <span>提交时间</span>
        </li>
        <li class="item8">
          <span>提交人</span>
        </li>
        <li class="item9">
          <span>审核时间</span>
        </li>
        <li class="item10">
          <span>审核人</span>
        </li>
      </ul>
      <ul class="row flex" v-for="(item,index) of 10" :key="index">
        <li class="item1">
          <span>4561364564156</span>
        </li>
        <li class="item2" style="color: rgb(98, 109, 119)">
          <span>待审核</span>
        </li>
        <li class="item3">
          <span>广东供应商</span>
        </li>
        <li class="item4">
          <span>40.00</span>
        </li>
        <li class="item5">
          <span>39.60</span>
        </li>
        <li class="item6">
          <span>0.40</span>
        </li>
        <li class="item7">
          <span>2020-05-23</span>
        </li>
        <li class="item8">
          <span>李思思</span>
        </li>
        <li class="item9">
          <span>--</span>
        </li>
        <li class="item10">
          <span>--</span>
        </li>
      </ul>
    </div>
    <!-- 底部分页 -->
    <div class="apply-footer flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;17&nbsp;</span>条记录
      </div>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../Common/SelectInput";
import SearchInput from "../../Common/SearchInput";
import Calendar from "../../Common/Calendar";
export default {
  components: {
    SelectInput,
    SearchInput,
    Calendar
  },
  data() {
    return {
      showApplyPoppe: false // 结算单弹窗盒子控制变量
    };
  },
  methods: {},
  create() {}
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Apply/Apply.css";
</style>