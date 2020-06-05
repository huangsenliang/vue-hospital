<template>
  <div class="statistical">
     Statistical.vue
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    sendInd(){
      this.$emit("getInd",9)
    }
  },
  created(){
    this.sendInd();
  }
}
</script>

<style scoped>
@import "../assets/css/Statistical/Statistical.css";
</style>