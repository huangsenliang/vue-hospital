<template>
  <!-- 管理页面:左侧导航 -->
  <div class="admin-nav hidden-scorll" style="height:100%">
    <My-Aside>
      <el-menu
        :default-active="$store.state.admin.adminTabName"
        class="el-menu-vertical-demo"
        background-color
        text-color="#000"
        active-text-color="#fff"
        router
      >
        <el-submenu v-for="(item, index) in routers" :key="index" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <i :class="[item.meta.icon,'iconfont']"></i>
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >{{ subItem.meta.name }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </My-Aside>
  </div>
</template>

<script>
/************************全局组件**************/
import MyAside from "@/components/MyAside";
export default {
  components: {
    MyAside
  },
  data() {
    return {
      //   routers: this.$router.options.routes[7].children
      routers: [
        // 诊所设置
        {
          path: "/admin/outpatient/clinic",
          meta: {
            name: "诊所设置",
            icon: "icon-shezhi1"
          },
          children: [
            {
              path: "/admin/outpatient/clinic",
              meta: {
                name: "诊所设置"
              }
            },
            {
              path: "/admin/outpatient/department",
              meta: {
                name: "科室设置"
              }
            },
            {
              path: "/admin/outpatient/members",
              meta: {
                name: "成员管理"
              }
            },
            {
              path: "/admin/outpatient/equipment",
              meta: {
                name: "医疗设备"
              }
            }
          ]
        },
        // 预约设置
        {
          path: "/admin/reservation/predetermine",
          meta: {
            name: "预约设置",
            icon: "icon-yuyue"
          },
          children: [
            {
              path: "/admin/reservation/predetermine",
              meta: {
                name: "预约设置"
              }
            },
            {
              path: "/admin/reservation/scheduling",
              meta: {
                name: "排班设置"
              }
            }
          ]
        },
        // 叫号设置
        {
          path: "/admin/call/rules",
          meta: {
            name: "叫号设置",
            icon: "icon-laba"
          },
          children: [
            {
              path: "/admin/call/rules",
              meta: {
                name: "叫号设置"
              }
            },
            {
              path: "/admin/call/screen",
              meta: {
                name: "屏幕设置"
              }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
.admin-nav{ 
  overflow-y:auto ;
  .iconfont{
    font-size: 14px;
    color: #000;
    margin-right: 8px;
  }
}
</style>