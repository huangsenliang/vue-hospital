<template>
  <div class="input-Money">
    <input
      :disabled="priceValue==null?false:true"
      @input="handleInput"
      @blur="handleBlur"
      v-model="priceValue"
      type="text"
      ref="priceValue"
      :style="{width:size+'px'}"
    />
    <i class="iconfont icon-qian"></i>
  </div>
</template>

<script>
export default {
  props: ["size", "value"],
  data() {
    return {
      priceValue: this.value.toFixed(2)
    };
  },
  methods: {
    // 处理：诊费输入框失去焦点时保留两位小数
    handleBlur(e) {
      var reg = new RegExp("^[0-9]+(.[0-9]{2})?$");
      var boo = reg.test(e.target.value);
      if (boo) {
        e.target.value = Number(e.target.value).toFixed(2);
      } else {
        e.target.value = "";
      }
    },
    // 处理：诊费输入框输入时的过滤
    handleInput(e) {
      // 通过正则过滤小数点后两位
      e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null;
      e.target.value = e.target.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
      e.target.value = e.target.value.replace(/^\./g, ""); //验证第一个字符是数字
      e.target.value = e.target.value.replace(/\.{2,}/g, ""); //只保留第一个, 清除多余的
      e.target.value = e.target.value
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      e.target.value = e.target.value.replace(
        /^(\-)*(\d+)\.(\d\d).*$/,
        "$1$2.$3"
      ); //只能输入两个小数
    }
  }
};
</script>

<style lang="less" scoped>
.input-Money {
  position: relative;
  i.icon-qian {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 28px;
    color: @color_96a4b3;
  }
  input {
    padding-left: 23px;
    height: 32px;
    border: 1px solid @color_ced0da;
    border-radius: 4px;
  }
  input:disabled {
    background: @color_f5f7fa;
    cursor: not-allowed;
  }
}
</style>