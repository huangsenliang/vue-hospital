<template>
  <div class="admin">
    Admin.vue
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    sendInd(){
      this.$emit("getInd",11)
    }
  },
  created(){
    this.sendInd();
  }
}
</script>

<style scoped>
@import "../assets/css/Admin/Admin.css";
</style>