<template>
    <div class="addCarCar">
        <AddCarVue/>
    </div>
</template>

<script>
import AddCarVue from '../components/AddCar.vue'

export default {
    name: 'addCarCar',
    components: { AddCarVue }
}
</script>

<style lang="scss">
.addCarCar{
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