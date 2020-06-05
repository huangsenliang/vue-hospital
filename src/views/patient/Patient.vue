<template>
  <div class="patient">
     Patient.vue
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    sendInd(){
      this.$emit("getInd",8)
    }
  },
  created(){
    this.sendInd();
  }
}
</script>

<style scoped>
@import "../assets/css/Patient/Patient.css";
</style>