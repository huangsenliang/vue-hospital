<template>
  <!-- 排班设置：排班设置页面 -->
  <div class="reservation-scheduling" style="height:100%">
    <Admin-Header title="排班设置"></Admin-Header>
    <Scheduling style="height:calc(100% - 40px)"></Scheduling>
  </div>
</template>

<script>
/***************全局组件************/
// 排班组件
import Scheduling from "@/components/Scheduling";
/************局部组件********/ 
// 头部
import AdminHeader from "../components/adminHeader";
export default {
  name: "reservationScheduling",
  components: {
    Scheduling,
    AdminHeader 
  },
 
};
</script>

<style lang="less" scoped>
.reservation-scheduling{
  // overflow-y:scroll;
 overflow-x:visible;
}
</style>