<template>
  <!-- 挂号页面 -->
  <div class="registered">
    <!-- 头部内容 -->
    <div class="registered-header-wrapper flex">
      <!-- 左边内容 -->
      <div class="header-left flex">
        <h3>挂号</h3>
        <div class="handle-bar flex">
          <div :class="{selected:dateIndex==0}" class="now item" @click="handleDate(0)">
            <span>今天</span>
            <span>(4)</span>
          </div>
          <div @click="handleDate(1)" :class="{selected:dateIndex==1}" class="tomorrow item item">
            <span>明天</span>
            <span>(2)</span>
          </div>
          <div class="calendar item">
            <i class="iconfont icon-rili"></i>
            <span style="marginLeft:10px">指定日期</span>
          </div>
          <!-- 引入搜素框组件 -->
          <div class="search-wrapper" style="marginLeft:55px">
            <!-- 自定义搜索框组件 -->
            <Search-Input size="220px" placeholder="搜索姓名、手机"></Search-Input>
          </div>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="header-right">
        <button class="button-small">叫号</button>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="registered-body-wrapper flex">
      <!-- 左侧内容 -->
      <div class="body-aside-wrapper">
        <ul>
          <li
            class="flex body-header item"
            :class="{'is-selected':lisNum==-1}"
            @click="handleLisNum(-1)"
          >
            <div class="item-left flex">
              <span>全部医生</span>
              <span class="item-i">
                待签
                <span>0</span>
              </span>
              <span class="item-i">
                待诊
                <span>5</span>
              </span>
              <span class="item-i">
                已诊
                <span>5</span>
              </span>
            </div>
            <button class="button-small" @click="showAddRegistered=true">预约</button>
            <!-- 新增挂号弹窗 -->
            <div class="add-registered-wrapper" v-if="showAddRegistered">
              <div class="cover-wrapper"></div>
              <div class="add-registered">
                <!-- 头部 -->
                <div class="top-header flex">
                  <h3>新增挂号</h3>
                  <div class="icon-left flex">
                    <div class="setting-wrapper">
                      <i @click="showInfoPopup?showInfoPopup=false:showInfoPopup=true" class="iconfont icon-shezhi"></i>
                      <div v-if="showInfoPopup" class="info-popup">
                        <h5>患者信息</h5>
                        <ul>
                          <li>
                            <el-checkbox v-model="checkedId">身份证</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="checkedSource">来源</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="checkedAddress">住址</el-checkbox>
                          </li>
                        </ul>
                        <h5>预诊信息</h5>
                        <ul>
                          <li>
                            <el-checkbox v-model="checkedInfo">预诊信息</el-checkbox>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <i class="iconfont icon-del" @click="showAddRegistered=false"></i>
                  </div>
                </div>
                <!-- 主体内容 -->
                <div class="content-wrapper flex">
                  <!-- 左边 -->
                  <div class="left-content">
                    <ul>
                      <!-- 姓名 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>姓名</span>
                          <i class="iconfont icon-zhongdian"></i>
                        </div>
                        <div class="input-box" style="width:200px">
                          <input type="text" />
                        </div>
                      </li>
                      <!-- 性别 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>性别</span>
                          <i class="iconfont icon-zhongdian"></i>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-radio v-model="sexValue" label="1">男</el-radio>
                          <el-radio v-model="sexValue" label="2">女</el-radio>
                        </div>
                      </li>
                      <!-- 年龄 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>年龄</span>
                          <i class="iconfont icon-zhongdian"></i>
                        </div>
                        <div class="input-sex-box flex" style="width:200px">
                          <input type="text" />
                          <span>岁</span>
                          <input type="text" />
                          <span>月</span>
                          <input type="text" />
                          <span>天</span>
                        </div>
                      </li>
                      <!-- 生日 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>生日</span>
                          <!-- <i class="iconfont icon-zhongdian"></i> -->
                        </div>
                        <div class="input-birthday-box flex" style="width:200px">
                          <i class="iconfont icon icon-rili"></i>
                          <input type="text" />
                        </div>
                      </li>
                      <!-- 手机号 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>手机</span>
                          <!-- <i class="iconfont icon-zhongdian"></i> -->
                        </div>
                        <div class="input-box" style="width:200px">
                          <input type="text" />
                        </div>
                      </li>
                      <!-- 身份证 -->
                      <li v-if="checkedId" class="flex row">
                        <div class="labe flex">
                          <span>身份证</span>
                        </div>
                        <div class="input-box" style="width:200px">
                          <input type="text" />
                        </div>
                      </li>
                      <!-- 来源 -->
                      <li v-if="checkedSource" class="flex row">
                        <div class="labe flex">
                          <span>来源</span>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-select v-model="sourceValue" placeholder="请选择">
                            <el-option
                              v-for="item in sourceOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </div>
                      </li>
                      <!-- 身份证 -->
                      <li v-if="checkedAddress" class="flex row" style="height:55px">
                        <div class="labe flex">
                          <span>住址</span>
                        </div>
                        <div class="input-box" style="width:200px;">
                          <V-Address></V-Address>
                          <input style="marginTop:5px" type="text" placeholder="请输入详细的地址">
                        </div>
                      </li>
                      <!-- 预诊-->
                      <li v-if="checkedInfo" class="flex row">
                        <div class="labe flex">
                          <span>预诊</span>
                          <!-- <i class="iconfont icon-zhongdian"></i> -->
                        </div>
                        <div class="input-yuzhen-box" style="width:200px">
                          <input type="text" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!-- 右边 -->
                  <div class="right-content">
                    <ul>
                      <!-- 类型 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>类型</span>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-radio v-model="typeValue" label="1">预约</el-radio>
                          <el-radio v-model="typeValue" label="2">挂号</el-radio>
                        </div>
                      </li>
                      <!-- 科室 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>科室</span>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-select v-model="departmentValue" placeholder="请选择">
                            <el-option
                              v-for="item in departmentOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </div>
                      </li>
                      <!-- 医生 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>医生</span>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-select clearable filterable v-model="nameValue" placeholder="请选择">
                            <el-option
                              v-for="item in nameOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </div>
                      </li>
                      <!-- 时间 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>时间</span>
                          <i class="iconfont icon-zhongdian"></i>
                        </div>
                        <div class="input-box" style="width:200px">
                          <el-select clearable v-model="timeValue" placeholder="请选择">
                            <el-option
                              v-for="item in timeOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </div>
                      </li>
                      <!-- 诊费 -->
                      <li class="flex row">
                        <div class="labe flex">
                          <span>诊费</span>
                          <i class="iconfont icon-zhongdian"></i>
                        </div>

                        <div class="input-birthday-box flex">
                          <Input-Money :size="200" :value="priceValue"></Input-Money>
                        </div>

                        
                      </li>
                      <!-- 会员 -->
                      <div class="coupons-wrapper">
                        <div class="title">
                          <span @click="showSearchCoupon=true">使用会员</span>
                          <!-- 遮罩层 -->
                          <div class="search-coupons-wrapper" v-if="showSearchCoupon">
                            <div class="search-coupons-cover"></div>
                            <div class="search-coupons">
                              <div class="title-coupons flex">
                                <h3>使用会员卡</h3>
                                <i class="iconfont icon-del" @click="showSearchCoupon=false"></i>
                              </div>
                              <div class="search">
                                <el-input placeholder="请输入手机号后四位" v-model="couponsNum" clearable></el-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="coupons-type flex">
                          <!-- 遮罩层 -->
                          <div class="cover-wrapper">
                            <div class="cover"></div>
                            <i class="iconfont icon-gai"></i>
                          </div>
                          <span>无折扣</span>
                          <div class="price">
                            <span>-￥</span>
                            <span>&nbsp;0.00</span>
                          </div>
                        </div>
                        <div class="total">
                          <span>应收</span>
                          <span class="color-f93-14">￥5.00</span>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <!-- 按钮 -->
                <div class="btn clear-float">
                  <button>完成挂号</button>
                </div>
              </div>
            </div>
          </li>
          <li
            :class="{'is-selected':lisNum==index}"
            @click="handleLisNum(index)"
            class="flex item"
            v-for="(item,index) of 8"
            :key="index"
          >
            <div class="item-left flex">
              <span>蔡徐坤</span>
              <span class="item-i">
                待签
                <span>0</span>
              </span>
              <span class="item-i">
                待诊
                <span>5</span>
              </span>
              <span class="item-i">
                已诊
                <span>5</span>
              </span>
            </div>
            <button class="button-small"  @click="showAddRegistered=true">预约</button>
          </li>
        </ul>
      </div>
      <!-- 中间主要内容 -->
      <div class="body-main-wrapper">
        <!-- 头部内容 -->
        <div class="main-header flex">
          <div class="header-left flex">
            <ul class="flex tabs">
              <li
                @click="handleTabsNum(index)"
                :class="{'is-selected':index==tabsNum}"
                class="item"
                v-for="(item,index) of tabsList"
                :key="index"
              >
                <span>
                  {{item}}
                  <span>(1)</span>
                </span>
              </li>
            </ul>
            <div class="address-wrapper">
              <el-select v-model="addressValue" placeholder="请选择">
                <el-option
                  v-for="item in addressOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="header-right">
            <span>
              已签：
              <span class="count">0</span>挂号费实收：
              <span class="total">￥0.00</span>
            </span>
          </div>
        </div>
        <!-- 表格 -->
        <div class="table-wrapper">
          <!-- 头部 -->
          <ul class="table-header tr flex">
            <li class="td0">
              <span></span>
            </li>
            <li class="td1">
              <span>患者</span>
            </li>
            <li class="td2">
              <span>性别</span>
            </li>
            <li class="td3">
              <span>手机</span>
            </li>
            <li class="td4">
              <span>渠道</span>
            </li>
            <li class="td5">
              <span>状态</span>
            </li>
            <li class="td6">
              <span>挂号费</span>
            </li>
            <li class="td7">
              <span>科室</span>
            </li>
            <li class="td8">
              <span>医生</span>
            </li>
            <li class="td9">
              <span>号数</span>
            </li>
            <li class="td10">
              <span>预计就诊时间</span>
            </li>
          </ul>
          <!-- 内容 -->
          <ul class="table-body tr flex" v-for="(item,index) of 8" :key="index">
            <li class="td0">
              <span></span>
            </li>
            <li class="td1">
              <span>张扬</span>
            </li>
            <li class="td2">
              <span>男</span>
            </li>
            <li class="td3">
              <span>18244909687</span>
            </li>
            <li class="td4">
              <span>现场</span>
            </li>
            <li class="td5">
              <span>待诊</span>
            </li>
            <li class="td6">
              <span>￥0.00</span>
            </li>
            <li class="td7">
              <span>中医科</span>
            </li>
            <li class="td8">
              <span>蔡徐坤</span>
            </li>
            <li class="td9">
              <span>上午19</span>
            </li>
            <li class="td10">
              <span>今天11：36</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/Common/SearchInput";
import VAddress from "../components/Common/VAddress";
import InputMoney from "../components/Common/InputMoney";
export default {
  components: {
    SearchInput,
    VAddress,
    InputMoney
  },
  data() {
    return {
      showInfoPopup:false,  // 设置弹窗显示隐藏控制变量
      checkedInfo:false, // 双向绑定复选框预诊的控制变量
      checkedAddress:false,  // 双向绑定复选框住址的控制变量
      checkedId:false,  // 双向绑定复选框身份证的控制变量
      checkedSource:false,  // 双向绑定复选框来源的控制变量
      showAddRegistered: false, // 新增挂号弹窗显示隐藏控制变量
      showSearchCoupon: false, // 手机号后四位会员码弹窗显示隐藏控制变量
      couponsNum: "", // 双向绑定手机号后四位会员码
      priceValue: 6, // 诊费双向绑定变量
      sourceValue:"",  // 来源选择框的双向绑定值
      sourceOptions:[
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],  // 来源选择框的数据
      timeValue: "今天上午", // 时间选择框的双向绑定值
      timeOptions: [
        {
          value: "今天上午",
          label: "今天上午"
        },
        {
          value: "今天下午",
          label: "今天下午"
        },
        {
          value: "今天晚上",
          label: "今天晚上"
        }
      ], // 医生名字选择框的数据
      nameValue: "", // 医生名字选择框的双向绑定值
      nameOptions: [
        {
          value: "蔡徐坤",
          label: "蔡徐坤"
        },
        {
          value: "终南山",
          label: "终南山"
        },
        {
          value: "赵铁柱",
          label: "赵铁柱"
        }
      ], // 医生名字选择框的数据
      departmentValue: "", // 诊所名字选择框的双向绑定值
      departmentOptions: [
        {
          value: "中医科",
          label: "中医科"
        },
        {
          value: "呼吸道科室",
          label: "呼吸道科室"
        },
        {
          value: "儿科",
          label: "儿科"
        },
        {
          value: "中西医",
          label: "中西医"
        },
        {
          value: "内科",
          label: "内科"
        },
        {
          value: "南岸区诊所",
          label: "南岸区诊所"
        },
        {
          value: "口腔科",
          label: "口腔科"
        },
        {
          value: "兴天下社区卫生服务站",
          label: "兴天下社区卫生服务站"
        },
        {
          value: "重庆诊所",
          label: "重庆诊所"
        },
        {
          value: "重庆小儿科",
          label: "重庆小儿科"
        },
        {
          value: "其他",
          label: "其他"
        }
      ], // 诊所名字选择框的数据
      typeValue: "1", // 单选按钮预约类型
      sexValue: "1", // 单选按钮性别
      addressValue: "", // 医院地址双向绑定
      dateIndex: 0, // 日期时间切换变量
      lisNum: -1, // 左侧激活样式控制变量
      tabsList: ["全部", "已签", "待签", "已诊", "待诊", "已退"], // 切换标签
      tabsNum: 0, // 切换标签激活样式控制变量
      addressOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
    };
  },
  methods: {
    // 处理：搜索框手机号后四位会员码
    handleSearchCoupons() {
      this.showSearchCoupon = !this.showSearchCoupon;
    },
    // 处理：切换标签激活样式控制变量
    handleTabsNum(index) {
      this.tabsNum = index;
    },
    // 处理：左侧激活样式控制变量
    handleLisNum(index) {
      this.lisNum = index;
    },
    // 处理：日期时间的切换
    handleDate(index) {
      this.dateIndex = index;
    },
    sendInd() {
      this.$emit("getInd", 2);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style scoped>
@import "../assets/css/Registered/Registered.css";
</style>