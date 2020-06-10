<template>
  <!-- 地区三级联动组件 -->
  <div class="area-cascder">
    <el-cascader style="width:300px" size="medium" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
  </div>
</template>
 
 
 
<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";

export default {
  props: ['selectedData'],
  data() {
    return {
      options: regionData,
      selectedOptions:[],
    };
  },

  methods: {
    handleChange(value) {
      let data =
        CodeToText[value[0]] +
        ", " +
        CodeToText[value[1]] +
        ", " +
        CodeToText[value[2]];
      console.log(data);
    }
  },
  created() {
      let {province,city,county} = this.selectedData;
      let provinceCode =  TextToCode[province].code+'';
      let cityCode = TextToCode[province][city].code+'';
      let countyCode = TextToCode[province][city][county].code+'';
      this.selectedOptions = [provinceCode,cityCode,countyCode];
      console.log(this.selectedOptions);
       
  }
};
</script>
