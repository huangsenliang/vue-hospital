<template>
  <div class="home" style="height:100%">
    <header>
      <div class="header-wrapper">
        <!-- login -->
        <div class="logo-wrapper">
          <img src="../assets/images/logo.png" alt />
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
            @click="changeNav(index)"
            class="menu-item"
            :class="{'router-link-exact-active':ind == index}"
            v-for="(item,index) of navLis"
            :key="index"
          >
            <router-link :to="{path:item.path}">
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
            <img src="../assets/images/personal.jpg" alt />
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
    <!-- 嵌套子路由渲染区 -->
    <section>
      <router-view @getInd="getInd"></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false, // 是否全屏显示
      clinic_dropdown_list_wrapper: false, // 体验诊所下弹窗的显示隐藏控制变量
      notice_wrapper: false, // 消息列表弹窗的显示隐藏控制变量
      options_wrapper: false, // 控制个人信息弹窗额显示隐藏的变量
      ind: 0, // 顶部导航索引
      navLis: [
        // 导航数据
        { path: "/home/workbench", value: "工作台" },
        { path: "/home/nurse", value: "护士站" },
        { path: "/home/registered", value: "挂号" },
        { path: "/home/outpatient", value: "门诊" },
        { path: "/home/charge", value: "收费" },
        { path: "/home/pharmacy", value: "药房" },
        { path: "/home/check", value: "检验" },
        { path: "/home/inventory", value: "库存" },
        { path: "/home/patient", value: "患者" },
        { path: "/home/statistical", value: "统计" },
        { path: "/home/marketing", value: "营销" },
        { path: "/home/admin", value: "管理" }
      ]
    };
  },
  methods: {
    // 处理:页面激活样式
    changeNav(index) {
      this.ind = index;
    },
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
    // 接受嵌套路由的每次跳转页面的参数
    getInd(ind) {
      // console.log("获取到ind",ind)
      this.ind = ind;
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
  }

  // created(){
  //   console.log(this.$route.query)
  // },
};
</script>

<style scoped>
@import "../assets/css/Home/Home.css";
</style>