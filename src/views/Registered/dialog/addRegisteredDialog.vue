<template>
  <!-- 新增挂号弹窗 -->
  <div class="add-registered dialog">
    <!-- 遮罩 -->
    <div class="cover-wrapper"></div>
    <!-- 内容 -->
    <div class="add-registered">
      <!-- 头部 -->
      <div class="top-header flex">
        <h3>新增挂号</h3>
        <div class="icon-left flex">
          <div class="setting-wrapper">
            <i
              @click="showInfoPopup?showInfoPopup=false:showInfoPopup=true"
              class="iconfont icon-shezhi"
            ></i>
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
          <i class="iconfont icon-del" @click="$emit('showAddRegistered')"></i>
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
                <el-radio v-model="sexValue" label="1" style="marginRight:8px">男</el-radio>
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
                <input style="marginTop:5px" type="text" placeholder="请输入详细的地址" />
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
                <el-radio v-model="typeValue" label="1" style="marginRight:8px">预约</el-radio>
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
</template>

<script>
import InputMoney from "@/components/InputMoney";
export default {
  components: {
    InputMoney
  },
  data() {
    return {
      sourceOptions: [
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
      ], // 来源选择框的数据
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

      checkedInfo: false, // 双向绑定复选框预诊的控制变量
      checkedAddress: false, // 双向绑定复选框住址的控制变量
      typeValue: "1", // 单选按钮预约类型
      checkedSource: false, // 双向绑定复选框来源的控制变量
      showAddRegistered: false, // 新增挂号弹窗显示隐藏控制变量
      showSearchCoupon: false, // 手机号后四位会员码弹窗显示隐藏控制变量
      couponsNum: "", // 双向绑定手机号后四位会员码
      priceValue: 6, // 诊费双向绑定变量
      sourceValue: "", // 来源选择框的双向绑定值
      checkedId: false, // 双向绑定复选框身份证的控制变量
      sexValue: "1", // 单选按钮性别
      showInfoPopup: false // 设置弹窗显示隐藏控制变量
    };
  }
};
</script>

<style lang="less" scoped>
/*遮罩层*/
.add-registered {
  // 弹窗内容
  .add-registered {
    .btn {
      padding: 14px 24px;
      button {
        float: right;
        min-width: 90px;
        height: 32px;
        padding: 0 10px;
        line-height: 1;
        text-align: center;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        background: #007aff;
        color: #fff;
        border-radius: 3px;
        outline: none;
        font-size: 14px;
        cursor: pointer;
        border: 0;
        &:hover {
          background: #479af1;
        }
      }
    }
    position: absolute;
    left: 50%;
    top: 100px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 600px;
    z-index: 1994;
    /*头部内容*/
    .top-header {
      height: 40px;
      padding: 0 0 0 15px;
      -webkit-justify-content: space-between;
      -ms-justify-content: space-between;
      justify-content: space-between;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h3 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
      .icon-left {
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        i.icon-del {
          font-size: 29px;
          height: 40px;
          line-height: 40px;
          padding: 0 4px;
          border-top: 1px solid #e6eaee;
          border-bottom: 1px solid #e6eaee;
          &:hover {
            background-color: #fbfbfb;
          }
        }
        .setting-wrapper {
          position: relative;
          i.icon-shezhi {
            font-size: 17px;
            &:hover {
              color: #007aff;
            }
          }
          .info-popup {
            position: absolute;
            top: 23px;
            left: -142px;
            width: 162px;
            padding: 16px 0;
            background: #fff;
            -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
            border-radius: 3px;
            border: 1px solid #b7b9c2;
            z-index: 5;
            color: #7a8794;
            h5 {
              padding-left: 10px;
              margin-bottom: 10px;
            }
            ul > li {
              height: 30px;
              padding-left: 25px;
            }
          }
        }
      }
      .iconfont {
        color: #96a4b3;
        margin-left: 8px;
        cursor: pointer;
      }
    }
    /*主体内容*/
    .content-wrapper {
      color: #000;
      border-bottom: 1px solid #e6eaee;
      .left-content,
      .right-content {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-right: 1px solid #e6eaee;
        padding: 24px;
        .row {
          -webkit-align-items: center;
          -ms-align-items: center;
          align-items: center;
          justify-content: center;
          height: 28px;
          margin-bottom: 18px;
          .el-select {
            width: 200px;
          }
          .labe {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-align-items: center;
            -ms-align-items: center;
            align-items: center;
            i.icon-zhongdian {
              color: #f93;
              margin-left: 4px;
              display: inline-block;
              font-family: SimSun;
              line-height: 1;
              font-size: 25px;
              margin-left: -5px;
            }
          }
          .input-box {
            -webkit-align-items: center;
            -ms-align-items: center;
            align-items: center;
            input {
              width: 100%;
              border-radius: 4px;
              height: 28px;
              padding: 3px 8px;
              border: 1px solid #ddd;
            }
          }
          /*年龄*/
          .input-sex-box {
            input {
              width: 45px;
              border-radius: 4px;
              height: 28px;
              padding: 3px 8px;
              border: 1px solid #ddd;
            }
            span {
              padding: 0 5px;
              height: 28px;
              line-height: 28px;
            }
          }
          /*生日*/
          .input-birthday-box {
            position: relative;
            i.icon {
              color: #96a4b3;
              position: absolute;
              top: 7px;
              left: 10px;
            }
            input {
              width: 100%;
              border-radius: 4px;
              height: 28px;
              padding: 3px 8px 3px 30px;
              border: 1px solid #ddd;
            }
          }
          /*预诊*/
          .input-yuzhen-box {
            -webkit-align-items: center;
            -ms-align-items: center;
            align-items: center;
            input {
              width: 100%;
              border-radius: 4px;
              height: 28px;
              padding: 3px 8px;
              border: 1px solid #ddd;
              background-color: #fffdec;
            }
          }
        }
        /*会员*/
        .coupons-wrapper {
          margin-top: 20px;
          .title {
            font-size: 14px;
            color: #007aff;
            cursor: pointer;
            line-height: 16px;
            .search-coupons-wrapper {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 1995;
              .search-coupons-cover {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 0.4;
                background: #000;
                z-index: 1995;
              }
              .search-coupons {
                position: fixed;
                left: 23%;
                z-index: 2000;
                background: #fff;
                border-radius: 3px;
                -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 360px;
                z-index: 2000;
                .title-coupons {
                  position: relative;
                  line-height: 1;
                  height: 50px;
                  line-height: 50px;
                  padding: 0 10px 0 24px;
                  text-align: left;
                  border-bottom: 1px solid #e6eaee;
                  background-color: #eff1f5;
                  border-top-right-radius: 3px;
                  border-top-left-radius: 3px;
                  -webkit-justify-content: space-between;
                  -ms-justify-content: space-between;
                  justify-content: space-between;
                  -webkit-align-items: center;
                  -ms-align-items: center;
                  align-items: center;
                  i.icon-del {
                    height: 35px;
                    width: 35px;
                    line-height: 35px;
                    font-size: 25px;
                    color: #666;
                    text-align: center;
                    &:hover {
                      background: #fbfbfb;
                    }
                  }
                  h3 {
                    font-size: 16px;
                    font-weight: 700;
                    color: #000;
                  }
                }
                .search {
                  padding: 24px 24px 0px;
                  height: 362px;
                }
              }
            }
          }
          .coupons-type {
            position: relative;
            color: #96a4b3;
            font-size: 12px;
            margin-top: 10px;
            border: 1px solid #eee;
            height: 44px;
            border-radius: 4px;
            padding: 0 10px;
            -webkit-justify-content: space-between;
            -ms-justify-content: space-between;
            justify-content: space-between;
            -webkit-align-items: center;
            -ms-align-items: center;
            align-items: center;
            &:hover .cover-wrapper {
              display: block;
            }
            /*遮罩层*/
            .cover-wrapper {
              display: none;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              z-index: 96;
              .cover {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                z-index: 98;
              }
              i.icon-gai {
                position: absolute;
                left: 50%;
                top: 20%;
                transform: translate(-50%);
                font-size: 25px;
                color: #fff;
                z-index: 101;
              }
            }
          }
          .total {
            margin-top: 16px;
            text-align: right;
            span:nth-child(1) {
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>