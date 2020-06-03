<template>
  <!-- 收费页面 -->
  <div class="charge flex">
    <Aside-Left-Wrapper>
      <!-- 搜索框 -->
      <div class="flex search-wrapper">
        <search-input size="198px" placeholder="姓名、手机、诊断"></search-input>
        <button class="button-small">零售收费</button>
      </div>
      <!-- 标签切换内容 -->
      <div class="tabs-wrapper">
        <Tabs class="flex">
          <ul class="flex tabs-content">
            <li class="item active">
              <span>门店</span>
              <span>&nbsp;9</span>
            </li>
            <li class="item">
              <span>网络</span>
              <span>&nbsp;3</span>
            </li>
            <li class="item">
              <span>挂单</span>
              <span>&nbsp;42</span>
            </li>
          </ul>
          <div class="calendar">
            <span>今天</span>
            <i class="iconfont icon-xia"></i>
          </div>
        </Tabs>
      </div>
      <!-- 表格内容 -->
      <div class="table-wrapper">
        <Table>
          <ul class="table-wrapper">
            <li v-for="(item,index) of 7" :key="index" class="row flex">
              <div class="img-wrapper">
                <img src="../assets/images/quick-v.png" alt />
              </div>
              <span class="patient-name">大鹏</span>
              <span class="date-time">11:30</span>
              <span class="status">待发</span>
            </li>
          </ul>
        </Table>
        <div class="tip">
          <span>没有更多患者信息</span>
        </div>
      </div>
      <!-- 就诊历史 -->
      <div class="history">
        <History-Record></History-Record>
      </div>
    </Aside-Left-Wrapper>
    <!-- 左侧切换内容 -->
    <section>
      <router-view></router-view>
    </section>
    <Main-wrapper>
      <div class="top-header-wrapper flex justify-between align-items">
        <h2>门诊收费</h2>
        <div class="buttons-wrapper flex align-items">
          <div class="amount">
            <span>402.41</span>
          </div>
          <button class="btn-primary-small">收费</button>
          <button class="btn-blank-small">挂单</button>
          <button class="btn-blank-small is-disabled">推送</button>
          <button class="btn-blank-small">打印</button>
        </div>
      </div>
      <div class="main-content hidden-scorll">
        <!-- 个人信息 -->
        <div class="info-wrapper flex justify-between">
          <Patient-Info name="毛波" sex="男" age="20" isDisabled="true" month="3" iphone="18244909680"></Patient-Info>
          <div class="info-right flex">
            <Select-Input disabled="true" placeholder="请选择" value="李思思"></Select-Input>
            <div class="input-search" style="marginLeft:10px">
              <Input-Money :size="70" :value="30"></Input-Money>
            </div>
          </div>
        </div>
        <!-- 搜索 -->
        <div class="add-input-wrapper">
          <Add-Input></Add-Input>
        </div>
        <!-- 表单 -->
        <div class="table-wrapper">
          <!-- 表头 -->
          <ul class="th flex align-items">
            <li class="item1-th">
              <h5>收费单</h5>
            </li>
            <li class="item2-th">
              <span>单价</span>
            </li>
            <li class="item3-th">
              <span>数量</span>
            </li>
            <li class="item4-th">
              <span>金额</span>
            </li>
          </ul>
          <!-- 内容 -->
          <div class="table-body">
            <ul class="td-first flex align-items">
              <li>
                <el-checkbox v-model="checked"></el-checkbox>
              </li>
              <li>
                <i class="iconfont icon-price"></i>
                <span>挂号费</span>
              </li>
              <li class="name flex-item">
                <span>李思思</span>
              </li>
              <li class="input">
                <input type="text" />
              </li>
              <li class="input">
                <input type="text" />
              </li>
              <li class="input">
                <input type="text" />
              </li>
            </ul>
            <div v-for="(item,index) of 3" :key="index" class="table-content">
              <div class="table-cutline"></div>
              <ul v-for="(item,index) of 5" :key="index" class="flex align-items td">
                <li class="item1-td">
                  <span>
                    <el-checkbox v-model="checked"></el-checkbox>
                  </span>
                </li>
                <li class="item2-td">
                  <span>1</span>
                </li>
                <li class="item3-td">
                  <span>血常规</span>
                </li>
                <li class="input">
                  <input type="text" />
                </li>
                <li class="input">
                  <input type="text" />
                </li>
                <li class="input">
                  <input type="text" />
                </li>
              </ul>
            </div>
          </div>
          <!-- 表尾 -->
          <div class="table-footer align-items flex justify-end">
            <div>
              共
              <input type="text" />
              剂，每剂 99g / 6味
            </div>
          </div>
        </div>
        <!-- 优惠券 -->
        <div class="coupons-wrapper">
          <div class="table-header align-items justify-between flex">
            <h5 class="flex-item">优惠/议价</h5>
            <div class="money">
              <span>金额</span>
            </div>
          </div>
          <div class="table-body">
            <div class="td">
              <span class="capsule-btn-danger">会员</span>
              <span class="btn">使用会员卡</span>
            </div>
            <div class="td flex justify-between align-items">
              <div class="left">
                <span class="capsule-btn-danger">会员</span>
                <span class="btn">修改</span>
                <span>
                  <i class="iconfont icon-xuanzhong"></i>
                  6.1
                </span>
              </div>
              <div class="right">
                <i class="iconfont icon-tanhaotishi"></i>
                <span>-¥24.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main-wrapper>
    <Aside-Right-Wrapper>
      <!-- 标题 -->
      <div class="top-wrapper">
        <span>收费项目</span>
      </div>
      <el-tree class="my-tree" :data="listData" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
    </Aside-Right-Wrapper>
  </div>
</template>

<script>
import AsideLeftWrapper from "@/components/Common/AsideLeftWrapper";
import AsideRightWrapper from "@/components/Common/AsideRightWrapper";
import MainWrapper from "@/components/Common/MainWrapper";
import SearchInput from "@/components/Common/SearchInput";
import SelectInput from "@/components/Common/SelectInput";
import Tabs from "@/components/Common/Tabs";
import Table from "@/components/Common/Table";
import HistoryRecord from "@/components/Common/HistoryRecord";
import PatientInfo from "@/components/Common/PatientInfo";
import InputMoney from "@/components/Common/InputMoney";
import AddInput from "@/components/Common/AddInput";
export default {
  components: {
    AsideLeftWrapper,
    MainWrapper,
    AsideRightWrapper,
    SearchInput,
    Tabs,
    Table,
    HistoryRecord,
    PatientInfo,
    InputMoney,
    SelectInput,
    AddInput
  },
  data() {
    return {
      nameValue: "李思思",
      checked: false,
      defaultProps: {
        children: "children",
        label: "label"
      },
      listData: [
        {
          label: "治疗项目",
          children: [
            {
              label: "静脉输液(￥30.00)"
            },
            {
              label: "针灸"
            },
            {
              label: "换药费"
            },
            {
              label: "肌肉注射"
            },
            {
              label: "局部推拿"
            },
            {
              label: "煎药费"
            },
            {
              label: "皮下注射"
            },
            {
              label: "床位费"
            },
            {
              label: "观察费"
            },
            {
              label: "制丸费"
            },
            {
              label: "三伏贴"
            },
            {
              label: "配药"
            },
            {
              label: "藏药"
            },
            {
              label: "穿刺费"
            },
            {
              label: "输液费"
            },
            {
              label: "中频治疗"
            },
            {
              label: "皮试"
            },
            {
              label: "治疗费"
            },
            {
              label: "医药处理费"
            }
          ]
        },
        {
          label: "理疗项目",
          children: [
            {
              label: "针灸套餐价(￥30.00)"
            },
            {
              label: "雾化"
            },
            {
              label: "头部推拿"
            },
            {
              label: "肩颈年卡"
            },
            {
              label: "中药敷贴"
            },
            {
              label: "局部针灸"
            },
            {
              label: "小儿推拿"
            },
            {
              label: "旭正灸贴"
            },
            {
              label: "头部针灸"
            }
          ]
        },
        {
          label: "其他费用",
          children: [
            {
              label: "代煎(￥30.00)"
            },
            {
              label: "快递费"
            }
          ]
        }
      ]
    };
  },
  methods: {
    sendInd() {
      this.$emit("getInd", 4);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/Charge/Charge.less";
</style>