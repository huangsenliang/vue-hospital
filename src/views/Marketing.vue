<template>
  <div class="marketing">
     Marketing.vue
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    sendInd(){
      this.$emit("getInd",10)
    }
  },
  created(){
    this.sendInd();
  }
}
</script>

<style scoped>
@import "../assets/css/Marketing/Marketing.css";
</style>