<template>
<!-- 地址选择组件 -->
  <div class="address">
    <v-distpicker @province="onChangeProvince1" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
  </div>
</template>

<script>
// vue省市区三级联动插件(v-distpicker)
import VDistpicker from "v-distpicker";
export default {
  name: "address",
  components: { VDistpicker },
  data() {
    return {
      //省市区
      province: "",
      city: "",
      area: ""
    };
  },
  methods: {
    onChangeProvince1(a) {
      this.province = a.value;
      console.log(this.province);
    },
    onChangeCity(a) {
      this.city = a.value;
      console.log(this.city)
    },
    onChangeArea(a) {
      this.area = a.value;
      // this.city = this.province + this.city + this.area;
      console.log(this.area)
    }
  }
};
</script>

<style scoped>

</style>