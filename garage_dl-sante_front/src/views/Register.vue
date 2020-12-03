<template>
  <div class="Register">
    <RegisterVue/>
  </div>
</template>

<script>
import RegisterVue from '../components/Register.vue'

export default {
  name: 'Register',
  components: { RegisterVue },
}
</script>

<style lang="scss">
.Register{
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