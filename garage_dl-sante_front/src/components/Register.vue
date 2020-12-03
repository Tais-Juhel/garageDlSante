<template>
  <form id="registerVue" @submit="register">
    <div class="input">
      <input id="username" type="text" placeholder="Username" v-model="name">
      <input id="password" type="text" placeholder="Password" v-model="firstName">
    </div>

    <button class="submit" @click="submit">Register</button>
  </form>
</template>

<script>
export default {
  name: 'registerVue',
  data: function() {
    return {
      name: '',
      firstName: ''
    }
  }
}
</script>


<style lang="scss">
#registerVue{
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

  .toLogIn{
    margin-top: 40px;
    color: grey;
    font-size: 12px;
    text-decoration: none;
  }
  .toLogIn:hover{
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
