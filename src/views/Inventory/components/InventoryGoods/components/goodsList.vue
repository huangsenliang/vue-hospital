<template>
  <!-- 药品物资页面：表格组件 -->
  <div class="goods-list">
    <!-- 表格 -->
    <ul class="table">
      <li class="flex th">
        <div class="item1 item flex">
          <span>药名</span>
          <div class="right flex">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item2 item">
          <span>规格</span>
        </div>

        <div class="item3 item">
          <span>厂家</span>
        </div>

        <div class="item4 item">
          <span>类型</span>
        </div>

        <div class="item5 item flex">
          <span>售价</span>
          <div class="flex right">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item6 item flex">
          <span>最近进价</span>
          <div class="flex right">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item7 item flex">
          <div class="warning-info-wrapper">
            <i class="warning-count">83</i>
            <div class="warning-info">
              <span>83种药品物资有效日期低于预警值</span>
            </div>
          </div>

          <span>最近效期</span>
          <div class="flex right">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item8 item flex">
          <div class="warning-info-wrapper">
            <i class="warning-count">8</i>
            <div class="warning-info">
              <span>8种药品物资有效日期低于预警值</span>
            </div>
          </div>
          <span>毛利率</span>
          <div class="right flex">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item9 flex item">
          <div class="warning-info-wrapper">
            <i class="warning-count">3</i>
            <div class="warning-info">
              <span>3种药品物资有效日期低于预警值</span>
            </div>
          </div>
          <span>当前库存</span>
          <div class="right flex">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
        </div>

        <div class="item10 flex item">
          <span>日均销量</span>
          <div class="flex right">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
          <div class="turnover-info-wrapper">
            <i class="icon-wenhao iconfont"></i>
            <div class="turnover-info">
              <span>最近30天的日均销量</span>
            </div>
          </div>
        </div>

        <div class="item11 item flex">
          <div class="warning-info-wrapper">
            <i class="warning-count">13</i>
            <div class="warning-info">
              <span>13种药品物资有效日期低于预警值</span>
            </div>
          </div>
          <span>周转天数</span>
          <div class="flex right">
            <i class="shang"></i>
            <i class="xia"></i>
          </div>
          <div class="turnover-info-wrapper">
            <i class="icon-wenhao iconfont"></i>
            <div class="turnover-info">
              <span>最近30天的日均销量</span>
            </div>
          </div>
        </div>
      </li>
      <li @click="showDetailsPopper=true" v-for="(item,index) of 10" :key="index" class="flex td">
        <div class="item1 flex item">
          <span style="color: rgb(10, 140, 234);">金银花</span>
        </div>
        <div class="item2 flex item">
          <span>中药饮片</span>
        </div>
        <div class="item3 flex item">
          <span></span>
        </div>
        <div class="item4 flex item">
          <span>中药</span>
        </div>
        <div class="item5 flex item">
          <span>6.00</span>
        </div>
        <div class="item6 flex item">
          <span>-</span>
        </div>
        <div class="item7 flex item">
          <span>-</span>
        </div>
        <div class="item8 flex item">
          <span>-</span>
        </div>
        <div class="item9 flex item">
          <span>785g</span>
        </div>
        <div class="item10 flex item">
          <span>88.0g</span>
        </div>
        <div class="item11 flex item">
          <span>9天</span>
        </div>
      </li>
    </ul>
    <!-- 弹窗 -->
    <div v-show="showDetailsPopper" class="dialog">
      <div class="cover-wrapper"></div>
      <div class="content-style">
        <Dialog-Details-Tabs @showDetailsPopper="showDetailsPopper=false"></Dialog-Details-Tabs>
      </div>
    </div>
  </div>
</template>

<script>
/*****************局部组件*************/
// 商品详情弹窗
import DialogDetailsTabs from "../dialog/dialogDetailsTabs";
export default {
  components: {
    DialogDetailsTabs
  },
  data() {
    return {
      showDetailsPopper: true // 商品详情页面显示隐藏控制变量
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
/*表格内容*/
.goods-list {
  padding: 0px 16px 0 16px;
  overflow-y: auto;
  // 表格
  ul.table {
    .item1 {
      width: 14.049%;
    }
    .item2 {
      width: 7.85%;
    }
    .item3 {
      width: 13.636%;
    }
    .item4 {
      width: 4.958%;
    }
    .item5 {
      width: 4.545%;
      justify-content: flex-end;
    }
    .item6 {
      width: 7.024%;
      justify-content: flex-end;
    }
    .item7 {
      width: 9.917%;
      justify-content: flex-end;
    }
    .item8 {
      width: 8.677%;
      justify-content: flex-end;
    }
    .item9 {
      width: 10.3306%;
      justify-content: flex-end;
    }
    .item10 {
      width: 8.2644%;
      justify-content: flex-end;
    }
    .item11 {
      width: 10.7438%;
      justify-content: flex-end;
    }
    .th {
      font-size: 14px;
      color: @color_96a4b3;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      height: 38px;
      background: #f5f7fb;
      border-top: 1px solid #e6eaee;
      border-bottom: 1px solid #e6eaee;
    }
    .td {
      cursor: pointer;
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #dadbe0;
      &:hover {
        background: @color_e9eff8;
      }
    }
    /*共有样式*/
    .item {
      align-items: center;
      padding: 0 8px;
      .turnover-info-wrapper {
        position: relative;
        cursor: pointer;
        i.icon-wenhao {
          font-size: 14px;
          margin-left: 5px;
          color: #96a4b3;
        }
        &:hover > .turnover-info {
          display: inline-block;
        }
        .turnover-info {
          display: none;
          position: absolute;
          top: -10px;
          left: -146px;
          background: #fff;
          border: 1px solid #ced0da;
          padding: 8px;
          -webkit-box-shadow: 0 2px 8px 0 #ced0da;
          box-shadow: 0 2px 8px 0 #ced0da;
          border-radius: 5px;
          font-weight: 400;
          text-align: center;
        }
      }
      .warning-info-wrapper {
        position: relative;
        cursor: pointer;
        i.warning-count {
          display: inline-block;
          background-color: #f93;
          border-radius: 3px;
          font-size: 12px;
          padding: 3px 6px;
          color: #fff;
          position: relative;
          margin-right: 6px;
          &::after {
            content: " ";
            display: inline-block;
            position: absolute;
            top: 7px;
            right: -4px;
            height: 0;
            width: 0;
            border-left: 6px solid #f93;
            border-top: 3px solid rgba(0, 0, 0, 0);
            border-bottom: 3px solid rgba(0, 0, 0, 0);
          }
        }
        &:hover > .warning-info {
          display: inline-block;
        }
        .warning-info {
          display: none;
          position: absolute;
          top: -50px;
          width: 235px;
          left: calc(-100% - 177px);
          color: #000;
          font-size: 14px;
          background-color: #fffdec;
          -webkit-box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
          box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
          border: 1px solid #cbb816;
          padding: 14px 6px;
          line-height: 1;
          text-align: center;
        }
      }

      .right {
        flex-direction: column;
        margin: 2px 0 0 2px;
        .shang {
          height: 0;
          width: 0;
          border-bottom: 4px solid #ced0da;
          border-left: 4px solid rgba(0, 0, 0, 0);
          border-right: 4px solid rgba(0, 0, 0, 0);
          margin-bottom: 2px;
        }
        .xia {
          height: 0;
          width: 0;
          border-top: 4px solid #ced0da;
          border-left: 4px solid rgba(0, 0, 0, 0);
          border-right: 4px solid rgba(0, 0, 0, 0);
        }
      }
    }
  }
}
</style>