<template>
  <div class="workbench">
    <div class="workbench-wrapper">
      <el-container>
        <!-- 左侧内容 -->
        <el-main>
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
                    <img src="../assets/images/todos.png" alt />
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
                  <li
                    class="calendar-wrapper"
                    v-clickoutside="handleClickOutSideShowCalendar"
                  >
                    <i @click="handleShowCalendar(3)" class="iconfont icon-rili" :class="{'selected':selectedDate==3}"></i>
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
              <!-- 标签头部 -->
              <div class="scheduling-header">
                <!-- 标签 -->
                <div class="tag-wrapper flex">
                  <ul class="tag-row">
                    <li
                      class="tag-item"
                      @click="handleSchedulingTag(index)"
                      :class="{'tag-item-active':schedulingTagNum==index}"
                      v-for="(item,index) in schedulingTag"
                      :key="index"
                    >
                      <span>{{item}}</span>
                    </li>
                  </ul>
                  <div class="setting">
                    <span class="setting-btn" @click="drawer = true">班次管理</span>
                    <el-drawer title="排班信息" :visible.sync="drawer" direction="rtl" size="40%">
                      <div>
                        <el-button plain style="marginRight:20px">增加班次</el-button>
                        <el-checkbox v-model="settingChecked">备选项</el-checkbox>
                      </div>
                      <el-table :data="gridData">
                        <el-table-column property="date" label="班次" width="150"></el-table-column>
                        <el-table-column property="name" label="时间" width="200"></el-table-column>
                        <el-table-column property="address" label="管理">
                          <span style="color:#2680f7;marginRight:5px">修改</span>
                          <span style="color:red">删除</span>
                        </el-table-column>
                      </el-table>
                    </el-drawer>
                  </div>
                </div>
                <!-- 切换时间 -->
                <div class="switch-time-wrapper flex">
                  <div class="switch-center">
                    <span class="switch-left">&lt;</span>
                    <span>2020-04-27 至 2020-05-03</span>
                    <span class="switch-right">&gt;</span>
                  </div>
                  <span class="copy-last-week">复制上周</span>
                </div>
                <!-- 表格头部 -->
                <ul class="table-header flex">
                  <li class="select-clinin">
                    <el-select v-model="selectClininValue" filterable placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </li>
                  <li>
                    <span>今天04-27</span>
                  </li>
                  <li>
                    <span>周二04-28</span>
                  </li>
                  <li>
                    <span>周三04-29</span>
                  </li>
                  <li>
                    <span>周四04-30</span>
                  </li>
                  <li>
                    <span>周五05-01</span>
                  </li>
                  <li>
                    <span>周六05-02</span>
                  </li>
                  <li>
                    <span>周日05-03</span>
                  </li>
                </ul>
                <!-- 表格内容 -->
                <div class="table-body">
                  <ul class="employee-row flex" v-for="(rowItem,index) of 5" :key="index">
                    <li>
                      <span>Charlie</span>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="schedules-list-item__reference flex"
                        v-for="(item,index) of 3"
                        :key="index"
                      >
                        <span>上午</span>
                        <span style="color: #96a4b3;">号20</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 分页 -->
                <div class="pagination-wrapper">
                  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </div>
            </div>
          </div>
        </el-main>
        <!-- 右侧内容 -->
        <el-aside>
          <div class="dashboard-sidebar">
            <h3>惠民体验诊所</h3>
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
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
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
      selectClininValue: 0, // 选择科室变量值：双向绑定
      drawer: false, // 排班管理弹窗是否显示
      direction: "rtl", // 排班管理弹窗位置
      gridData: [
        //  排班管理弹窗表格数据
        {
          date: "上午",
          name: "08:00-12"
        },
        {
          date: "上午",
          name: "08:00-12"
        },
        {
          date: "上午",
          name: "08:00-12"
        },
        {
          date: "上午",
          name: "08:00-12"
        }
      ],
      settingChecked: true, // 排班设置诊室

      schedulingTagNum: 0, // 排班标签切换索引
      schedulingTag: ["医生排班", "员工排班"], // 排班标签数据
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

<style scoped>
@import "../assets/css/Workbench/Workbench.css";
</style>
