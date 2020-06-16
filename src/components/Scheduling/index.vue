<template>
  <div class="scheduling">
    <el-tabs type="border-card">
      <el-tab-pane label="医生排班">
        <div class="doctor-scheduling">
          <!-- 过滤 -->
          <div class="table-filter flex align-items justify-between">
            <span class="btn">班次管理</span>
            <div class="filter">
              <span class="prev" @click="prev">
                <i class="iconfont icon-zuojiantou"></i>
              </span>
              <span style="margin:0 5px">{{headerContent}}</span>
              <span class="next" @click="next">
                <i class="iconfont icon-youjiantou1"></i>
              </span>
            </div>
            <span class="btn">复制上周</span>
          </div>
          <!-- 表格内容 -->
          <div class="body">
            <!-- 生成一个周 时间列表 -->
            <ul class="table-header flex">
              <li style="width:110px;padding:0 5px" class="flex align-items justify-center">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </li>
              <li
                v-for="(header, index) in weekTableHeader"
                v-bind:key="index"
                class="flex-item flex align-items justify-center"
                :class="header.class"
              >{{header.date}}</li>
            </ul>
            <div class="table-body">
              <ul class="employee-row flex">
                <li style="width:110px" class="flex align-items justify-center">
                  <span>Bubble</span>
                </li>
                <li v-for="(item,index) of 7" :key="index" class="flex-item">
                  <div class="morning-info flex justify-between">
                    <span>上午班</span>
                    <span>号10</span>
                  </div>
                  <div class="afternoon-info flex justify-between">
                    <span>下午班</span>
                    <span>号2</span>
                  </div>
                  <div class="Scheduling-setting">
                    <!-- <div>
                      <span>预留</span>
                    </div>
                    <div>
                      <span>排班</span>
                    </div> -->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="员工排班">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
 
<script>
import moment from "moment";
export default {
  data() {
    return {
      options: [],
      today: moment().format("YYYY-MM-DD"),
      currentYearMonth: moment().format("YYYY-MM"),
      weekTableHeader: [],
      dates: [],
      weekList: [],
      headerContent: moment().format("YYYY-MM"),
      currentWeekday: ""
    };
  },
  methods: {
    // 点击上个月 通过改变currentYearMonth来获取上个月的 YYYY-MM 格式
    prev() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .subtract(1, "months")
          .format("YYYY-MM");
        this.headerContent = this.currentYearMonth;
        this.createCalendar();
      } else {
        this.currentWeekday = moment(this.currentWeekday).subtract(7, "days");
        this.weekHeaderContent();
        this.createWeekList();
      }
    },
    next() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .add(1, "months")
          .format("YYYY-MM");
        this.headerContent = this.currentYearMonth;
        this.createCalendar();
      } else {
        this.currentWeekday = moment(this.currentWeekday).add(7, "days");
        this.weekHeaderContent();
        this.createWeekList();
      }
    },
    dateMouseEnter(weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = "date-alive";
    },
    dateMouseLeave(weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = "";
    },
    createCalendar() {
      this.dates = [];
      // 获取当月的一号是星期几 以便来生成上月的日期 填补够42个格子
      const monthFirstDay = moment(this.currentYearMonth + "-01", "YYYY-MM-DD");
      // 获得一号与第一个格子内应该有的天数距离 这里需要注意的是 weekday 是从周日 为 0 开始的
      let firstDayWeekday = moment(monthFirstDay).weekday();
      if (firstDayWeekday === 0) {
        firstDayWeekday = 7;
      }
      let daysDistance = 1 - firstDayWeekday;
      for (let weeks = 0; weeks < 6; weeks++) {
        this.dates.push([]);
        for (let weekday = 0; weekday < 7; weekday++) {
          // 该对象有两个属性 一个是class属性 还有一个就是日期
          let date = {};
          date.day = moment(monthFirstDay).add(daysDistance, "days");
          date.isAlive = "";
          const dayMonth = moment(date.day).month();
          // 是这个月的日期
          if (dayMonth === moment(monthFirstDay).month()) {
            date.class = "current-month ";
            // 日期是今天的高亮
            if (moment(date.day).isSame(this.today, "days")) {
              date.class += "today ";
            }
          } else {
            date.class = "not-current-month ";
          }
          date.day = moment(date.day).format("DD");
          this.dates[weeks].push(date);
          daysDistance++;
        }
      }
    },
    createWeekList() {
      this.weekTableHeader = [
        "周一 ",
        "周二 ",
        "周三 ",
        "周四 ",
        "周五 ",
        "周六 ",
        "周日 "
      ];
      this.weekList = [];
      for (let index = 0; index < 7; index++) {
        let item = {};
        item.date = moment(this.currentWeekday).add(index, "days");
        if (item.date.isSame(this.today, "days")) {
          item.class = "today";
        }
        item.date = this.weekTableHeader[index] + item.date.format("MM/DD");
        this.weekTableHeader[index] = item;
      }
      for (let days = 0; days < 7; days++) {
        this.weekList.push([]);
        let item = "";
        for (let hours = 0; hours < 48; hours++) {
          if (hours % 2 === 0) {
            item = hours / 2 + "点";
          } else {
            item = "";
          }
          this.weekList[days].push(item);
        }
      }
    },
    weekHeaderContent() {
      this.headerContent =
        moment(this.currentWeekday).format("YYYY-MM-DD") +
        "  至  " +
        moment(this.currentWeekday)
          .add(6, "days")
          .format("YYYY-MM-DD");
    }
  },
  created() {
    // v-show是在创建后 保留dom 只是做切换的 不会v-if那样 销毁dom 所以只需要创建一次
    this.createCalendar();
    let weekday = moment().weekday() === 0 ? 7 : moment().weekday();
    let daysDistance = 1 - weekday;
    this.currentWeekday = moment().add(daysDistance, "days");
    this.createWeekList();
    this.weekHeaderContent();
  }
};
</script>
 

<style lang="less" scoped>
.scheduling {
  padding: 24px 24px 40px;
  .doctor-scheduling {
    border: 1px solid #e6eaee;
    border-radius: 4px;
    // 筛选
    .table-filter {
      height: 48px;
      padding: 0 15px;
      border-bottom: 1px solid #e6eaee;
      .btn {
        color: #007aff;
      }
      .filter {
        .prev,
        .next {
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 22px;
          text-align: center;
          cursor: pointer;
          border-radius: 2px;
          border: 1px solid #ced0da;
        }
      }
    }
    // 表格内容
    .body {
      // 表头
      .table-header {
        li {
          height: 40px;
          padding: 0 12px;
          border-right: 1px solid #e6eaee;
        }
        li:last-child {
          border-right: 0;
        }
        .today {
          color: #007aff;
        }
      }
      // 表内容
      .table-body {
        border-top: 1px solid @color_e6eaee;
        .employee-row {
          height: 56px;
          border-bottom: 1px solid @color_e6eaee;
          li {
            border-right: 1px solid #e6eaee;
            padding: 0 6px;
          }
          li:not(:first-child) {
            cursor: pointer;
            &:hover {
              background-color: #f5f7fb;
            }
          }
          li:last-child {
            border-right: 0;
          }
          .morning-info,
          .afternoon-info {
            height: 28px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>