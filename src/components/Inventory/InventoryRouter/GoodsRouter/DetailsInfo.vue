<template>
  <!-- 药品信息页面 -->
  <div class="details-info">
    <!-- 内容 -->
    <div class="details-body" style="display: flex;">
      <!-- 右侧 -->
      <div class="body-left">
        <!-- 通用名 -->
        <div class="form-wrapper">
          <div class="form-item">
            <label for>
              <span>通用名</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>
              <span>药品类型</span>
            </label>
            <div class="select-wrapper flex">
              <Select-Input></Select-Input>
              <Select-Input></Select-Input>
            </div>
          </div>
          <div class="form-item">
            <label for>
              <span>商品名</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>
              <span>生产厂家</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>
              <span>国药准字</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>
              <span>条形码</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <input type="text" />
          </div>
        </div>
        <!-- 剂量 -->
        <div class="form-wrapper flex">
          <div class="form-item">
            <label for>
              <span>剂量</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <div class="goods-num flex">
              <div class="num">
                <input style="width:130px" type="text" />
                <div></div>
              </div>
              <div class="goods-dosageformunit">
                <input style="width:80px" type="text" />
                <div></div>
              </div>
              <span style="margin:10px 0 0 15px">*</span>
            </div>
          </div>
          <div class="form-item">
            <label for>
              <span>制剂</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <div class="goods-num flex">
              <div class="num">
                <input style="width:130px" type="text" />
                <div></div>
              </div>
              <div class="goods-dosageformunit">
                <input style="width:80px" type="text" />
                <div></div>
              </div>
              <span style="margin:8px 0 0 15px">/</span>
            </div>
          </div>
          <div @click="showUnit=!showUnit" class="form-item">
            <label for>
              <span>包装</span>
              <i class="icon-zhongdian iconfont"></i>
            </label>
            <button class="button-small unit">{{unit}}</button>
            <ul v-show="showUnit" class="flex unit-li-wrapper">
              <li
                @click="unit=item"
                v-for="(item,index) of unitList"
                :key="index"
                class="item"
                :class="{'is-selected':unit===item}"
              >
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 价格 -->
        <div class="form-wrapper flex" style="borderBottom:0">
          <!-- 零售价格 -->
          <div class="form-item" style="marginTop:3px">
            <label class="cost-price flex">
              <span>
                零售价格
                <i class="icon-zhongdian iconfont"></i>
              </span>
              <div class="view-cost-price">
                <span class="cost">进价</span>
                <div></div>
              </div>
            </label>
            <div class="price-wrapper flex">
              <span class="symbol">￥</span>
              <input type="text" />
              <div class="price-num">
                <span>/盒</span>
              </div>
            </div>
          </div>
          <!-- 允许拆零售 -->
          <div class="form-item">
            <label for>
              <el-checkbox v-model="checkedAgree">允许拆零售</el-checkbox>
            </label>
            <div class="price-wrapper flex">
              <span class="symbol">￥</span>
              <input
                :class="{'is-disabled':checkedAgree==true}"
                :disabled="checkedAgree"
                type="text"
              />
              <div class="price-num">
                <span></span>
              </div>
            </div>
          </div>
          <!-- 进项税率 -->
          <div class="form-item flex" style="display:flex;marginTop:5px">
            <div class="left-tax">
              <label for>进项税率</label>
              <div class="flex">
                <input type="text" />
                <div class="tax">
                  <span>%</span>
                </div>
                <span style="padding:5px 0 0 8px">-</span>
              </div>
            </div>

            <div class="right-tax">
              <label for>销项税率</label>
              <div class="flex">
                <input type="text" />
                <div class="tax">
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 左侧 -->
      <div class="body-right">
        <!-- 上 -->
        <div class="goods-code">
          <div class="detail-code">
            <label class="goods-code-type">药品编码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="系统生成或自定义" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
          <div class="detail-code">
            <label class="goods-code-type">社保编码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="-" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
          <div class="detail-code">
            <label class="goods-code-type">本位码</label>
            <div class="code-wrapper">
              <input type="text" placeholder="-" />
              <i class="iconfont icon-iconfront-"></i>
            </div>
          </div>
        </div>
        <!-- 下 -->
        <div class="update-log-wrapper">
          <button @click="showHistoryList=!showHistoryList" class="btn-history">查看修改记录</button>
          <div v-if="showHistoryList" class="log-list-wrapper">
            <ul class="event-list">
              <li class="row" v-for="(item,index) of 3" :key="index">
                <div class="log-title">
                  <span class="title">2020-05-21 15:03</span>
                  <span class="title">李思思</span>
                  <span class="title">惠民体验</span>
                </div>
                <div class="log-detail">
                  <span>进项税率</span>
                  <span>从默认值修改为1</span>
                </div>
                <div class="log-detail">
                  <span>销项税率</span>
                  <span>从默认值修改为1</span>
                </div>
                <div class="log-detail">
                  <span>创建药品</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="details-footer flex">
      <div class="footer-left">
        <button style="marginRight:8px" class="btn-blank">保存</button>
        <button @click="$emit('closeDetailsPopper')" class="btn-blank">取消</button>
      </div>
      <button class="btn-danger">删除药品</button>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Common/SearchInput";
import SelectInput from "@/components/Common/SelectInput";
export default {
  props: ["detailsInfoData"],
  components: {
    SearchInput,
    SelectInput
  },
  data() {
    return {
      showHistoryList:false,  // 修改记录显示隐藏控制变量
      name: null,
    };
  },
  methods: {},
  created() {
    console.log(this.detailsInfoData);
  }
};
</script>

<style scoped>
@import "../../../../assets/css/Inventory/InventoryRouter/GoodsRouter/DetailsInfo/DetailsInfo.css";
</style>