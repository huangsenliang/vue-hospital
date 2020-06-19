<template>
  <div id="workbench" class="flex" style="height:100%">
    <!-- 左侧内容 -->
    <My-Main class="hidden-scorll" style="marginRight:8px;height:100%">
      <!-- 上半部分：经营状况 -->
      <div class="card profit-wrapper" style="padding: 0 46px 40px">
        <!-- 头部：人物、时间、汇总 -->
        <div class="overview-header">
          <!-- 姓名、时间 -->
          <div class="greetings">
            <div class="user">下午好，主人</div>
            <div class="data">2020-04-25 星期六</div>
          </div>
          <!-- 汇总 -->
          <div class="todos">
            <div class="item total-item">
              <div>
                <img src="../../assets/images/todos.png" alt />
                <span>今日工作汇总</span>
              </div>
              <div style="fontWeight:bold; linHeight:1">
                门诊量
                <span style="fontSize:16px;marginLeft:8px">0</span>
              </div>
            </div>
            <div class="item">
              <span>待接诊</span>
              <span class="count">0</span>
            </div>
            <div class="item">
              <span>待收费</span>
              <span class="count color-005ED9">0</span>
            </div>
            <div class="item">
              <span>待发药</span>
              <span class="count color-005ED9">0</span>
            </div>
            <div class="item">
              <span>待检验</span>
              <span class="count color-005ED9">0</span>
            </div>
            <div class="item">
              <span>库存预警</span>
              <span class="count color-f93">18</span>
            </div>
            <div class="item">
              <span>效期预警</span>
              <span class="count color-f93">66</span>
            </div>
            <div class="item">
              <span>毛利异常</span>
              <span class="count color-f93">0</span>
            </div>
          </div>
        </div>
        <!-- 标题 -->
        <div class="title">
          <div class="text">经营概况</div>
          <div class="filter-wrapper">
            <ul>
              <li
                :class="{'selected':selectedDate==index}"
                @click="handleSelectedDate(index)"
                v-for="(item,index) of filterData"
                :key="index"
              >{{item}}</li>
              <li class="calendar-wrapper" v-clickoutside="handleClickOutSideShowCalendar">
                <i
                  @click="handleShowCalendar(3)"
                  class="iconfont icon-rili"
                  :class="{'selected':selectedDate==3}"
                ></i>
                <!-- 引入日历组件 -->
                <el-calendar v-show="showCalendar" class="calendar" v-model="dateValue"></el-calendar>
              </li>
            </ul>
          </div>
        </div>
        <!-- 经营概况 -->
        <div class="view-content">
          <ul class="view-item-row">
            <li>
              <i class="icon-shoufei iconfont"></i>
              <span>收费</span>
            </li>
            <li>
              <p>5849.69</p>
              <p>总收费</p>
            </li>
            <li>
              <p>4788.69</p>
              <p>门诊收费</p>
            </li>
            <li>
              <p>81.00</p>
              <p>零售收费</p>
            </li>
            <li>
              <p>980.00</p>
              <p>零售收费</p>
            </li>
            <li class="btn">
              <span>充值报表</span>
            </li>
          </ul>
          <ul class="view-item-row">
            <li>
              <i class="icon-zongkeliuliang iconfont"></i>
              <span>客流</span>
            </li>
            <li>
              <p>7</p>
              <p>门诊客流量</p>
            </li>
            <li>
              <p>1</p>
              <p>零售客流量</p>
            </li>
            <li>
              <p>37.00</p>
              <p>门诊客单价</p>
            </li>
            <li>
              <p>90.00</p>
              <p>零售客单价</p>
            </li>
          </ul>
        </div>
        <!-- 可视化饼状图 -->
        <div class="my-echart">
          <div ref="myEchart1" class="my-echart1"></div>
          <div ref="myEchart2" class="my-echart2"></div>
        </div>
        <!-- 今日看板 -->
        <div class="patient-bulletin-board">
          <!-- header -->
          <div class="title-bar flex">
            <!-- 左侧内容 -->
            <div class="title-bar-left flex">
              <h3>今日看板</h3>
              <div class="search">
                <i class="iconfont icon-soushuo"></i>
                <input type="text" placeholder="搜索患者" />
              </div>
            </div>
            <!-- 右侧内容 -->
            <div class="title-bar-right">
              <span class="btn-item">上一页</span>
              <span>1</span>
              <span class="btn-item">下一页</span>
            </div>
          </div>
          <!-- main -->
          <div class="patient-content">
            <ul>
              <!-- header -->
              <li class="patient-item-header">
                <span style>患者</span>
                <span style>预约</span>
                <span style>登记时间</span>
                <span style>科室</span>
                <span style>复诊</span>
                <span style>医生</span>
                <span style="width:7%">就诊</span>
                <span style>收费</span>
                <span style="width:7%">发药</span>
                <span style="width:7%">治疗</span>
                <span style="width:7%">理疗</span>
              </li>
              <!-- main -->
              <li v-for="(item,index) of patientData" :key="index">
                <span>{{item.name}}</span>
                <span>{{item.yuYue}}</span>
                <span>{{item.time}}</span>
                <span>{{item.keShi}}</span>
                <span>{{item.chuFuZhen}}</span>
                <span>{{item.yiSheng}}</span>
                <span>{{item.jiuZhen}}</span>
                <span>{{item.shouFei}}</span>
                <span>{{item.faYao}}</span>
                <span>{{item.zhiLiao}}</span>
                <span>{{item.liLiao}}</span>
              </li>
              <div v-if="patientData.length==0" class="default-not flex">
                <i class="icon-rizhiguanli iconfont"></i>
                <span>今日暂无患者</span>
              </div>
            </ul>
            <p class="patient-count">
              共有
              <span>{{patientData.length}}</span> 条数据
            </p>
          </div>
        </div>
      </div>
      <!-- 下半部分：排班信息 -->
      <div class="card scheduling-wrapper" style="padding:24px">
        <!-- 标题 -->
        <h3 class="header-title">排班信息</h3>
        <!-- main -->
        <div class="scheduling-content">
          <Scheduling></Scheduling>
        </div>
      </div>
    </My-Main>
    <!-- 右侧内容 -->
    <My-Aside class="hidden-scorll">
      <div class="dashboard-sidebar">
        <h3 class="flex align-items justify-center">惠民体验诊所</h3>
        <!-- 顶部标题 -->
        <div class="card dashboard-header">
          <div class="title flex">
            <i class="icon-shuaxin1 iconfont"></i>
            <p>产品更新公告（04.14） | 患者资料展示、角色优化、权限细化等8项更新和优化</p>
          </div>
          <p
            class="text"
          >4月14日，ABC诊所管家在患者、角色、权限管理等模块进行了8个更新和优化，具体如下：1. 患者资料、轨迹展示更清晰患者资料显示在第一级，资料查看更方便；优化了患者轨迹的展示，结构更清晰。随时为患者设定随访计划，操作更简便。2. 新增医</p>
        </div>
        <!-- 客户端 -->
        <div class="card dashboard-client">
          <div class="client flex">
            <i class="icon-diannao iconfont"></i>
            <span>电脑客户端</span>
            <span style="color: #96a4b3;">更强大</span>
          </div>
          <div class="client flex">
            <i class="icon-shouji iconfont"></i>
            <span>手机app</span>
            <span style="color: #96a4b3;">更方便</span>
            <i class="icon-xin iconfont"></i>
          </div>
        </div>
        <!-- 客服 -->
        <div class="card dashboard-kefu">
          <div class="dashboard-kefu-qq flex">
            <i class="iconfont icon-kefu1"></i>
            <div class="text">
              <h4>惠民诊所管家芳芳</h4>
              <p>专属客服</p>
            </div>
            <span class="qq">QQ在线</span>
          </div>
          <div class="dashboard-kefu-iphone">
            <span style="color: #96a4b3;">服务热线：</span>
            <span>400-175-1775</span>
          </div>
        </div>
        <!-- 微信 -->
        <div class="card dashboard-wx flex">
          <i class="iconfont icon-weixin"></i>
          <div class="text">
            <h4>惠民诊所管家服务号</h4>
            <p>随时掌握诊所动态</p>
          </div>
        </div>
      </div>
    </My-Aside>
  </div>
</template>

<script>
/***********全局组件**********/

import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";
// 排班组件
import Scheduling from "@/components/Scheduling";
export default {
  components: {
    Scheduling,
    MyAside,
    MyMain
  },
  data() {
    return {
      options: [
        {
          value: 0,
          label: "全部科室"
        },
        {
          value: 1,
          label: "中医科"
        },
        {
          value: 2,
          label: "中西医"
        },
        {
          value: 3,
          label: "南岸区诊所"
        },
        {
          value: 4,
          label: "重庆诊所"
        },
        {
          value: 5,
          label: "重庆小儿咳咳"
        },
        {
          value: 6,
          label: "儿科"
        },
        {
          value: 7,
          label: "内科"
        },
        {
          value: 8,
          label: "呼吸道科室"
        },
        {
          value: 9,
          label: "口腔科"
        },
        {
          value: 10,
          label: "其他"
        }
      ],
      patientData: [
        // 今日看板数据
        {
          name: "李思思",
          yuYue: "挂03",
          time: "11.51",
          keShi: "--",
          chuFuZhen: "复诊",
          yiSheng: "终南山",
          jiuZhen: "√",
          shouFei: "√",
          faYao: "√",
          zhiLiao: "√",
          liLiao: "√"
        },
        {
          name: "李思思",
          yuYue: "挂03",
          time: "11.51",
          keShi: "--",
          chuFuZhen: "复诊",
          yiSheng: "终南山",
          jiuZhen: "√",
          shouFei: "√",
          faYao: "√",
          zhiLiao: "√",
          liLiao: "√"
        },
        {
          name: "李思思",
          yuYue: "挂03",
          time: "11.51",
          keShi: "--",
          chuFuZhen: "复诊",
          yiSheng: "终南山",
          jiuZhen: "√",
          shouFei: "√",
          faYao: "√",
          zhiLiao: "√",
          liLiao: "√"
        }
      ],
      dateValue: new Date(), // 日历选择变量
      showCalendar: false, // 日历显示隐藏控制变量
      selectedDate: 0, // 日期选择控制变量
      filterData: ["昨天", "本周", "本月"], // filter-wrapper 数据
      myEchartOption1: {
        // myEchart1数据
        // 标题
        title: {
          show: true,
          text: "费用统计",
          left: "center",
          padding: [10, 0, 0, 0],
          textStyle: {
            fontFamily: "Arial, Verdana",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "bolder",
            color: "#000"
          }
        },
        // 鼠标悬浮显示数据
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 小图标
        legend: {
          show: true,
          orient: "vertical",
          left: "left",
          top: 15,
          data: [
            {
              name: "中药费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "西/成药费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "治疗费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "检验费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "挂号费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "理疗费",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            }
          ]
        },
        // 饼状内容
        series: [
          {
            name: "费用统计",
            type: "pie",
            radius: "55%",
            center: ["55%", "70%"],
            label: {
              formatter: "{b}:{c}",
              fontSize: 14
            },

            data: [
              { value: 335, name: "中药费" },
              { value: 310, name: "西/成药费" },
              { value: 234, name: "治疗费" },
              { value: 135, name: "检验费" },
              { value: 1000, name: "挂号费" },
              { value: 548, name: "理疗费" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      myEchartOption2: {
        // myEchart2数据
        // 标题
        title: {
          show: true,
          text: "支付方式统计",
          left: "center",
          padding: [10, 0, 0, 0],
          textStyle: {
            fontFamily: "Arial, Verdana",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "bolder",
            color: "#000"
          }
        },
        // 鼠标悬浮显示数据
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 小图标
        legend: {
          show: true,
          orient: "vertical",
          left: 10,
          top: 15,
          data: [
            {
              name: "微信",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "现金",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            },
            {
              name: "医保卡",
              icon: "circle",
              textStyle: {
                color: "#000"
              }
            }
          ]
        },
        // 饼状内容
        series: [
          {
            name: "支付方式统计",
            type: "pie",
            radius: "55%",
            center: ["60%", "70%"],
            label: {
              formatter: "{b}:{c}",
              fontSize: 14
            },
            data: [
              { value: 335, name: "微信" },
              { value: 310, name: "现金" },
              { value: 234, name: "医保卡" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    sendInd() {
      this.$emit("getInd", 0);
    },
    // 处理：日历显示隐藏
    handleShowCalendar(index) {
      this.showCalendar = !this.showCalendar;
      if (!this.showCalendar) {
        this.selectedDate = -1;
        return;
      }
      this.selectedDate = index;
    },
    // 处理：点击时间选择事件
    handleSelectedDate(index) {
      this.selectedDate = index;
    },
    // 处理：点击除了日历元素之外
    handleClickOutSideShowCalendar() {
      this.showCalendar = false;
    },
    // 绘制可视化：饼状图
    handleMyEchart1() {
      // 实例化对象
      let myEchart1 = this.$echarts.init(this.$refs.myEchart1);
      let myEchart2 = this.$echarts.init(this.$refs.myEchart2);
      // 配置对象
      myEchart1.setOption(this.myEchartOption1);
      myEchart2.setOption(this.myEchartOption2);
    },
    // 处理：排班标签切换索引
    handleSchedulingTag(index) {
      this.schedulingTagNum = index;
    },
    // 处理：排班信息的弹窗
    handleClose(done) {
      done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    }
  },
  created() {
    this.sendInd();
  },
  mounted() {
    this.handleMyEchart1();
  }
};
</script>

<style lang="less" scoped>
#workbench {
  /**************右侧内容***************/
  #my-main{

  }
  /* 卡片样式 */
  .card {
    background-color: #fff;
    border: 1px solid #ced0da;
    border-radius: 3px;
  }
  /* 上半部分：经营状况 */
  .profit-wrapper {
    margin-bottom: 12px;
    /* 头部：人物、时间、汇总*/
    .overview-header {
      margin-bottom: 32px;
      /* 姓名、时间 */
      .greetings {
        margin-top: 40px;
        height: 24px;
        margin-bottom: 14px;
      }
      .greetings .user,
      .greetings {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        .user {
          font-size: 16px;
          font-weight: 500;
        }
        .data {
          margin-left: 15px;
          font-size: 12px;
          color: #96a4b3;
          line-height: 12px;
        }
      }
      /* 汇总数据样式:start */
      .todos,
      .todos .item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
      .todos {
        width: 942px;
        max-height: 104px;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 16px;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        /* 共有样式 */
        .item {
          width: 144px;
          height: 46px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 16px;
          border-radius: 3px;
          border: 1px solid #ced0da;
          margin-right: 12px;
          margin-bottom: 12px;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          cursor: pointer;
          .count {
            font-size: 20px;
          }
          .color-f93 {
            color: #ff9933;
          }
          .color-005ED9 {
            color: #005ed9;
          }
        }
        .item:not(:nth-child(1)) {
          &:hover {
            background-color: #eee;
          }
        }
        .total-item {
          width: 300px;
          min-width: 300px;
          max-width: 300px;
          background-color: #3ec172;
          color: #fff;
          border: none;
          div:nth-child(1) {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
              margin-right: 8px;
            }
          }
        }
      }
      /* end */
    }
    /* 标题：start*/
    .title {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      height: 32px;
      .text {
        font-size: 18px;
        height: 32px;
        line-height: 35px;
        font-weight: 700;
      }
      .filter-wrapper,
      ul {
        margin-left: 12px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 32px;
        .selected {
          font-weight: 700;
          color: #007aff;
        }
        li {
          cursor: pointer;
          padding: 0 12px;
          color: #7a8794;
        }
        li.calendar-wrapper {
          position: relative;
          .calendar {
            position: absolute;
            z-index: 99;
            min-width: 513px;
            top: 20px;
            left: 20px;
            box-shadow: 0 0 1px 1px #ddd;
          }
          .el-calendar {
            .el-calendar-table thead th {
              padding: 5px 0;
              color: #606266;
              font-weight: 400;
              text-align: center;
            }
            .el-calendar-table .el-calendar-day {
              box-sizing: border-box;
              text-align: center;
              height: 40px;
              line-height: 40px;
            }
          }
        }
      }
    }
    /* 经营概况*/
    .view-content {
      .view-item-row:nth-child(1) {
        border-bottom: 1px #eee solid;
      }
      .view-item-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        li:nth-child(1) {
          font-size: 16px;
        }
        li > p:nth-child(1) {
          font-size: 28px;
        }
        li > p:nth-child(2) {
          line-height: 14px;
          font-size: 14px;
          color: #7a8794;
        }
        li.btn {
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          background-color: #eff3f6;
          color: #7a8794;
        }
        li:nth-child(1) {
          display: flex;
          align-items: center;
          .icon-shoufei {
            font-size: 30px;
            color: rgb(224, 140, 12);
            margin: 0 10px;
          }
          .icon-zongkeliuliang {
            color: rgb(20, 153, 214);
            font-size: 45px;
            margin-right: 3px;
          }
        }
      }
    }
    /* 可视化饼状图*/
    .my-echart {
      display: flex;
      padding-top: 20px;
      .my-echart1 {
        flex: 1;
        height: 250px;
        border-right: 1px #eee solid;
      }
      .my-echart2 {
        flex: 1;
        height: 250px;
      }
    }
    /* 今日看板*/
    .patient-bulletin-board {
      padding: 30px 0 15px;
      margin-top: 20px;
      border-top: #eee 1px solid;
      /*header*/
      .title-bar {
        height: 40px;
        line-height: 40px;
        justify-content: space-between;
        /* 左侧内容 */
        .title-bar-left {
          h3 {
            font-size: 16px;
            font-weight: 500;
            color: #000;
            margin-right: 20px;
          }
          .search {
            position: relative;
            height: 32px;
            line-height: 32px;
            .icon-soushuo {
              position: absolute;
              left: 10px;
              margin-right: 10px;
              color: #666;
            }
            input {
              padding-left: 30px;
              height: 100%;
              border: 1px #eee solid;
            }
            input:hover {
              border: #005ed9 1px solid;
            }
            input:focus {
              border: #005ed9 1px solid;
              outline: solid 1px #8db7ec;
            }
          }
        }
        /* 右侧内容*/
        .title-bar-right {
          span {
            padding: 8px;
          }
          span.btn-item {
            background: #bdd2ee;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
              background: #88b4ee;
            }
          }
        }
      }
      /* main */
      .patient-content {
        margin-top: 10px;
        ul {
          border: 1px solid #eee;
          min-height: 200px;
          /* 无数据默认显示*/
          .default-not {
            height: 200px;
            align-items: center;
            justify-content: center;
            .icon-rizhiguanli {
              font-size: 25px;
              margin-right: 10px;
            }
          }
          .patient-item-header {
            background: #eee;
            color: #888;
            border-top: 1px #eee solid;
            border-bottom: 1px #eee solid;
          }
          li {
            height: 35px;
            line-height: 35px;

            span {
              text-align: center;
              display: inline-block;
            }
            span:nth-child(1) {
              width: 14%;
            }
            span:nth-child(2) {
              width: 9%;
            }
            span:nth-child(3) {
              width: 10%;
            }
            span:nth-child(4) {
              width: 9%;
            }
            span:nth-child(5) {
              width: 8%;
            }
            span:nth-child(6) {
              width: 14%;
            }
            span:nth-child(7) {
              width: 7%;
            }
            span:nth-child(8) {
              width: 7%;
            }
            span:nth-child(9) {
              width: 7%;
            }
            span:nth-child(10) {
              width: 7%;
            }
            span:nth-child(11) {
              width: 7%;
            }
          }
          li:not(:first-child) {
            border-bottom: 1px solid #eee;
          }
        }
        .patient-count {
          display: inline-block;
          padding-left: 10px;
          height: 30px;
          line-height: 30px;
          span {
            font-weight: 700;
            padding: 0 10px;
          }
        }
      }
    }
  }
  /*下半部分：排班信息*/
  .scheduling-wrapper {
    /* 标题*/
    h3 {
      font-weight: 700;
      font-size: 20px;
    }
  }
  /*************左侧内容***********/
  .dashboard-sidebar {
    padding: 0 16px;
    h3 {
      height: 80px;
      font-size: 18px;
      color: #007aff;
    }
    /*共有样式*/
    .card {
      border: 1px #eee solid;
      padding: 8px 12px 12px;
      background: #f5f7fb;
      border-radius: 5px;
      margin-bottom: 12px;
    }

    /*顶部标题*/
    .dashboard-header {
      .title {
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px #eee solid;
      }
      i.iconfont {
        color: #007aff;
        font-size: 22px;
        margin-right: 10px;
        background: #fff;
        border-radius: 2px;
        padding: 2px;
      }
      .text {
        padding-top: 8px;
        color: #7a8794;
        font-size: 12px;
        max-height: 74px;
        line-height: 17px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
    }
    /*客户端*/
    .dashboard-client {
      cursor: pointer;
      .client {
        border-bottom: 1px #eee solid;
        padding-bottom: 10px;
        align-items: center;
        span:nth-child(2) {
          margin: 0 10px;
        }
        i {
          font-size: 22px;
          color: #007aff;
          margin-right: 10px;
        }
      }
      .client:nth-child(2) {
        padding-top: 10px;
        border: 0;
        padding-bottom: 0;
        i.icon-xin {
          color: red;
          margin-left: 15px;
        }
      }
    }
    /*客服*/
    .dashboard-kefu {
      cursor: pointer;
      .dashboard-kefu-qq {
        border-bottom: 1px #eee solid;
        padding-bottom: 10px;
        align-items: center;
        justify-content: space-between;
        i.icon-kefu1 {
          font-size: 22px;
          color: red;
        }
        .text {
          h4 {
            font-size: 14px;
            color: #000;
            line-height: 14px;
            margin-bottom: 8px;
          }
          p {
            font-size: 12px;
            line-height: 12px;
            height: 12px;
            color: #96a4b3;
          }
        }
        .qq {
          color: #08a446;
          text-align: right;
          font-size: 12px;
          min-width: 60px;
          max-width: 60px;
          width: 60px;
        }
      }
      .dashboard-kefu-iphone {
        font-size: 12px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 10px;
      }
    }
    /*微信*/
    .dashboard-wx {
      cursor: pointer;
      align-items: center;
      i.icon-weixin {
        color: #08a446;
        font-size: 22px;
        margin-right: 10px;
      }
      .text {
        p {
          font-size: 12px;
          padding-top: 3px;
          color: #96a4b3;
        }
      }
    }
  }
}

@media screen and (max-width: 1278px) {
  /*隐藏右侧的内容*/
  .workbench .workbench-wrapper .el-container .el-aside {
    display: none;
  }
  /*隐藏滚动条*/
  .workbench .workbench-wrapper .el-container .el-main::-webkit-scrollbar {
    display: none;
  }
}
</style> 


