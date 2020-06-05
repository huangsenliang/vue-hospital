<template>
  <div class="pharmacy">
     Pharmacy.vue
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    sendInd(){
      this.$emit("getInd",5)
    }
  },
  created(){
    this.sendInd();
  }
}
</script>

<style scoped>
@import "../assets/css/Pharmacy/Pharmacy.css";
</style>