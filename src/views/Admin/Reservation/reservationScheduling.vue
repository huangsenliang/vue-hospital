<template>
  <!-- 排班设置：排班设置页面 -->
  <div class="reservation-scheduling">
    <Admin-Header title="排班设置"></Admin-Header>
    <Scheduling></Scheduling>
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

<style>
</style>