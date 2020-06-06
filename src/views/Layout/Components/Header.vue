<template>
  <div id="header">
    <header>
      <div class="header-wrapper">
        <!-- login -->
        <div class="logo-wrapper">
          <img src="../../../assets/images/logo.png" alt />
        </div>
        <!-- 医院名字 -->
        <div
          class="clinic-dropdown"
          @click="HandleClinicDropdownList"
          v-clickoutside="handleClickOutSideClinicDropdown"
        >
          惠民体验诊所
          <i class="iconfont icon-xia"></i>
          <div v-show="clinic_dropdown_list_wrapper" class="clinic-dropdown-list-wrapper">
            <div class="clinic-dropdown-list">
              <ul>
                <li class="clinic-item">
                  <router-link :to="{path:'/home/workbench'}">惠民体验诊所</router-link>
                </li>
              </ul>
            </div>
            <div class="to-entry">管理诊所</div>
          </div>
        </div>
        <!-- 切换导航 -->
        <ul class="menu-nav">
          <li
            class="menu-item"
            :class="{'router-link-exact-active':item.name == $store.state.layout.layoutTabName}"
            v-for="(item,index) of navLis"
            :key="index"
          >
            <router-link :to="{name:item.name}">
              <span>{{item.value}}</span>
            </router-link>
          </li>
        </ul>
        <!-- 放大、缩小、头像 -->
        <div class="header-fixed-right">
          <i
            class="iconfont"
            :class="{'icon-suoxiao':fullscreen,'icon-quanping':!fullscreen}"
            @click="HandleScreen"
          ></i>
          <i
            class="iconfont icon-shengyinlingsheng-"
            v-clickoutside="handleClickOutSideNoticeWrapper"
            @click="handleShowNoticeWrapper"
          ></i>
          <div
            class="personal"
            @click="handleOptionsWrapper"
            v-clickoutside="handleClickOutSideOptionsWrapper"
          >
            <img src="../../../assets/images/personal.jpg" alt />
            <i class="iconfont icon-xia"></i>
          </div>
          <!-- 定位元素 -->
          <!-- 消息列表 -->
          <div class="notice-wrapper" v-show="notice_wrapper">
            <div class="notice-item-wrap">
              <div class="read-all">
                <span>全部已读</span>
              </div>
              <ul>
                <li v-for="(item,index) of 6" :key="index">
                  <router-link :to="{}">
                    <i class="icon-shuaxin1 iconfont"></i>
                    <div class="text-wrapper">
                      <div class="text-title">
                        <span>产品更新公告</span>
                        <span>04-13</span>
                      </div>
                      <div class="text-content">角色分工、权限细分、处方用法默认、处方用法默认11111111</div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 个人信息 -->
          <div class="options-wrapper" v-show="options_wrapper">
            <ul>
              <li>
                <router-link :to="{}">
                  <i class="iconfont icon-changyongicon-"></i>
                  <span>个人设置</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{}">
                  <i class="iconfont icon-rizhiguanli"></i>
                  <span>更新日志</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{}">
                  <i class="iconfont icon-tuichu"></i>
                  <span>退出登录</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "layoutHeader",
  data() {
    return {
      fullscreen: false, // 是否全屏显示
      clinic_dropdown_list_wrapper: false, // 体验诊所下弹窗的显示隐藏控制变量
      notice_wrapper: false, // 消息列表弹窗的显示隐藏控制变量
      options_wrapper: false, // 控制个人信息弹窗额显示隐藏的变量
       // 顶部导航索引
      navLis: [
        // 导航数据
        { name: "Workbench", value: "工作台" },
        { name: "Nurse", value: "护士站" },
        { name: "Registered", value: "挂号" },
        { name: "Outpatient", value: "门诊" },
        { name: "Charge", value: "收费" },
        { name: "/home/pharmacy", value: "药房" },
        { name: "/home/check", value: "检验" },
        { name: "Inventory", value: "库存" },
        { name: "/home/patient", value: "患者" },
        { name: "/home/statistical", value: "统计" },
        { name: "/home/marketing", value: "营销" },
        { name: "/home/admin", value: "管理" }
      ]
    };
  },
  methods: {
    // 处理:体验诊所弹窗的显示隐藏
    HandleClinicDropdownList() {
      this.clinic_dropdown_list_wrapper = !this.clinic_dropdown_list_wrapper;
    },
    // 处理：消息列表弹窗的显示隐藏
    handleShowNoticeWrapper() {
      this.notice_wrapper = !this.notice_wrapper;
    },
    // 处理：个人信息弹窗的显示隐藏
    handleOptionsWrapper() {
      this.options_wrapper = !this.options_wrapper;
    },

    // 处理：保持切换标签索引到本地存储
    handleSetTabName() {
      this.$store.commit("setTabName");
    },

    // 处理:页面全屏
    HandleScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    // 处理：点击除了clinic-dropdown元素外触发
    handleClickOutSideClinicDropdown(e) {
      this.clinic_dropdown_list_wrapper = false;
    },
    // 处理：点击除了notice-wrapper元素外触发
    handleClickOutSideNoticeWrapper(e) {
      this.notice_wrapper = false;
    },
    // 处理：点击除了options-
    handleClickOutSideOptionsWrapper() {
      this.options_wrapper = false;
    }
  },
  computed: {
  },
  created() {}
};
</script>



<style lang="less" scoped>
#header {
  header {
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin: 0 auto;
    background-color: #277cb4;
    z-index: 1;
    -webkit-transition: top 0.28s ease-out;
    -o-transition: top 0.28s ease-out;
    transition: top 0.28s ease-out;
    .header-wrapper {
      position: relative;
      color: #fff;
      height: 100%;
      margin: 0 auto;
      display: flex;
      height: 100%;
      margin: 0 auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      .logo-wrapper {
        width: 50px;
        height: 48px;
        overflow: hidden;
        img {
          margin-top: 5px;
          width: 50px;
          width: 100%;
          height: 38px;
        }
      }
      .clinic-dropdown {
        position: relative;
        width: 230px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        .clinic-dropdown-list-wrapper {
          color: #000;
          position: absolute;
          width: 160px;
          margin-bottom: 42px;
          top: 52px;
          left: 5px;
          font-weight: 500;
          font-size: 14px;
          line-height: 36px;
          background: #fff;
          z-index: 9;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          border: rgb(218, 219, 224);
          &::before {
            content: " ";
            display: block;
            position: absolute;
            top: -7px;
            left: 50%;
            margin-left: -6px;
            height: 0;
            width: 0;
            border-bottom: 7px solid #fff;
            border-left: 6px solid rgba(0, 0, 0, 0);
            border-right: 6px solid rgba(0, 0, 0, 0);
          }
          .clinic-dropdown-list {
            padding: 4px 0;
            .clinic-item {
              height: 36px;
              line-height: 36px;
              a {
                width: 100%;
                padding: 0 16px;
                font-size: 14px;
                color: #000;
                font-weight: 500;
                cursor: pointer;
                overflow: hidden;
                white-space: nowrap;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                &:hover {
                  background-color: #eee;
                }
              }
            }
          }
          .to-entry {
            width: 100%;
            border-top: 1px solid #dadbe0;
            font-size: 14px;
            color: #7a8794;
            height: 40px;
            line-height: 40px;
            background-color: #fff;
            padding-left: 16px;
            cursor: pointer;
          }
        }
      }
      .menu-nav {
        line-height: 48px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        li {
          float: left;
          padding: 0 16px;
          a {
            color: #fff;
            font-size: 14px;
            height: 48px;
            border: 0;
          }
        }
        /*router-link激活样式*/
        .router-link-exact-active {
          line-height: 48px;
          font-weight: 700;
          background: #1571aa;
        }
        .router-link-exact-active a span {
          padding-bottom: 6px;
          border-bottom: 1px #fff solid;
          font-weight: 700;
        }
      }
      .header-fixed-right {
        float: left;
        position: relative;
        cursor: pointer;
        i {
          font-size: 20px;
        }
        .icon-shengyinlingsheng- {
          padding: 0 15px;
        }
        /* 定位元素样式 */
        /* 消息列表*/
        .notice-wrapper {
          position: absolute;
          padding: 4px 0;
          top: 48px;
          right: 0;
          width: 416px;
          background: #fff;
          -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          border: 1px solid #dadbe0;
          border-top: 0;
          border-radius: 4px;
          padding: 4px 0;
          .notice-item-wrap {
            height: 100%;
            &::before {
              content: " ";
              display: block;
              position: absolute;
              top: -7px;
              right: 73px;
              margin-left: 0;
              height: 0;
              width: 0;
              border-bottom: 7px solid #fff;
              border-left: 6px solid rgba(0, 0, 0, 0);
              border-right: 6px solid rgba(0, 0, 0, 0);
            }
            .read-all {
              color: #005ed9;
              font-size: 14px;
              line-height: 32px;
              border-bottom: 1px solid #e6eaee;
              padding: 0 16px;
            }
            ul {
              height: 418px;
              overflow-y: auto;
              li {
                a {
                  padding: 18px 16px;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -webkit-align-items: center;
                  -ms-flex-align: center;
                  align-items: center;
                  border-bottom: 1px solid #dadbe0;
                  color: #7a8794;
                  line-height: 20px;
                  &:hover {
                    background: #eee;
                  }
                  .icon-shuaxin1 {
                    margin-right: 16px;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 25px;
                    color: #2680f7;
                    border: 1px solid #eee;
                  }
                  .text-wrapper {
                    -webkit-box-flex: 1;
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    .text-title {
                      color: #96a4b3;
                      span:nth-child(1) {
                        display: inline-block;
                        max-width: 220px;
                        white-space: nowrap;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        font-weight: 700;
                      }
                      span:nth-child(2) {
                        float: right;
                        line-height: 20px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                      }
                    }
                    .text-content {
                      line-height: 20px;
                      overflow: hidden;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1;
                      -o-text-overflow: ellipsis;
                      text-overflow: ellipsis;
                    }
                  }
                }
              }
            }
          }
        }
        /* 个人信息 */
        .options-wrapper {
          position: absolute;
          min-width: 110px;
          margin-top: 4px;
          max-width: 260px;
          top: 50px;
          right: 0px;
          background: #fff;
          -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          z-index: 9999;
          &::before {
            content: " ";
            display: block;
            position: absolute;
            top: -7px;
            left: 50%;
            margin-left: 20px;
            height: 0;
            width: 0;
            border-bottom: 7px solid #fff;
            border-left: 6px solid rgba(0, 0, 0, 0);
            border-right: 6px solid rgba(0, 0, 0, 0);
          }
          ul {
            li {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              height: 36px;
              line-height: 36px;
              padding: 0 16px;
              &:hover {
                background: #eee;
              }
              a {
                color: #2e3439;
                i {
                  font-size: 18px;
                  margin-right: 8px;
                }
              }
            }
          }
        }
        .personal {
          float: right;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }
        }
      }
    }
    /* 响应式:header*/
    @media screen and (min-width: 1440px) {
      .header-wrapper {
        width: 1408px;
      }
    }
    @media screen and (max-width: 1439px) and (min-width: 1281px) {
      .header-wrapper {
        width: auto;
        margin: 0 16px;
      }
    }
    /* 响应式：.clinic-dropdown */
    @media screen and (max-width: 1439px) and (min-width: 1281px) {
      .clinic-dropdown {
        width: 230px !important;
      }
    }

    @media screen and (max-width: 1280px) and (min-width: 1024px) {
      .clinic-dropdown {
        width: 170px !important;
      }
    }

    @media screen and (max-width: 1024px) {
      .clinic-dropdown {
        width: 140px !important;
      }
    }

    // 响应式：.menu-item
    @media screen and (max-width: 1280px) {
      .menu-nav .menu-item {
        padding: 0 12px !important;
      }
    }
  }
}
</style>

