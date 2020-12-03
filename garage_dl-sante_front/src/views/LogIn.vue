<template>
  <div class="LogIn">
    <LogInVue/>
  </div>
</template>

<script>
import LogInVue from '../components/LogIn.vue'

export default {
  name: 'LogIn',
  components: { LogInVue },
}
</script>

<style lang="scss">
.LogIn{
  position: absolute;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
