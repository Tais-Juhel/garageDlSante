<template>
    <div class="profile">
        <ProfilVue/>
    </div>
</template>

<script>
import ProfilVue from '../components/Profile'

export default {
    name: 'profile',
    components: { ProfilVue }
}
</script>

<style lang="scss">
.profile{
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>