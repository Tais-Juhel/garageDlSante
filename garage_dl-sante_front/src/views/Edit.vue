<template>
    <div class="editCar">
        <EditVue/>
    </div>
</template>

<script>
import EditVue from '../components/Edit.vue'

export default {
    name: 'editCar',
    components: { EditVue }
}
</script>

<style lang="scss">
.editCar{
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