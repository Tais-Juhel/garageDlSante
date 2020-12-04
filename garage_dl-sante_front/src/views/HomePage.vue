<template>
<div class="homePage">
    <Home/>
</div>
</template>

<script>
import Home from '../components/Home.vue'

export default {
    name: 'homePage',
    components: { Home }
}
</script>

<style lang="scss">
.homePage{
    position: absolute;
    top: 0;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: -1;
}
</style>