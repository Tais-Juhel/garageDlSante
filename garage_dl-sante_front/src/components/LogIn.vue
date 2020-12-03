<template>
  <form id="logInVue" @submit="logIn">
    <div class="input">
      <input id="name" type="text" placeholder="Name" v-model="name">
      <input id="firstName" type="text" placeholder="First Name" v-model="firstName">
      <input id="username" type="text" placeholder="Username" v-model="username">
      <input id="password" type="password" placeholder="Password" v-model="password">
    </div>

    <router-link class="toRegister" to="/register">I don't have an account - Register</router-link>
    <button class="submit" @click="submit">Log In</button>
  </form>
</template>

<script>
export default {
  name: 'logInVue',
  data: function() {
    return {
      name: '',
      firstName: '',
      username: '',
      password: ''
    }
  },
  methods: {
    submit() {
      
    }
  }
}
</script>


<style lang="scss">
#logInVue{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 500px;
  box-shadow: 0 0 10px 0px lightgrey;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  div.input{
    display: flex;
    flex-direction: column;
    
    input{
      margin: 15px auto;
      width: 200px;
      height: 30px;
      font-size: 14px;
      border: none;
      border-bottom: solid 1px grey;
      outline: none;
    }
  }

  .toRegister{
    margin-top: 40px;
    color: grey;
    font-size: 12px;
    text-decoration: none;
  }
  .toRegister:hover{
    text-decoration: underline;
    cursor: pointer;
  }

  .submit{
    margin: 0 auto;
    margin-top: 10px;
    width: 120px;
    height: 40px;
    font-size: 14px;
    background-color: #61b15a;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
  }
}
</style>
