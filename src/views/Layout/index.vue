<template>
    <div id="layout">
        <LayoutHeader />
        <LayoutMain />
    </div>
</template>
<script>
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
// import { LayoutHeader, LayoutMain, LayoutNav } from './Components'
export default {
    name: 'Layout',
    components: {LayoutHeader, LayoutMain},
}
</script>
<style lang="less" scoped>
#layout{
    height: 100vh;
}
</style>