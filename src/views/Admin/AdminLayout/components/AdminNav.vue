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
      routers: null
    };
  },
  created() {
    this.routers = this.$router.options.routes[1].children;
  }
};
</script>

<style lang='less' scoped>
.admin-nav {
  overflow-y: auto;
  .iconfont {
    font-size: 14px;
    color: #000;
    margin-right: 8px;
  }
  /deep/.el-submenu {
    /deep/.el-submenu__title {
      font-size: 14px;
      font-weight: 700;
    }

    /deep/.el-menu-item.is-active {
      color: #fff;
      background: #00ace9;
    }
  }
}
</style>