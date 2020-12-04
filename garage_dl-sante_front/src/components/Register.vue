<template>
  <form id="registerVue">
    <div class="input">
      <input id="name" type="text" placeholder="Name" v-model="name">
      <input id="firstName" type="text" placeholder="First Name" v-model="firstName">
    </div>

    <button class="submit" @click="dataPrepare"><a href="/">Register</a></button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'registerVue',
  data: function() {
    return {
      name: '',
      firstName: ''
    }
  },
  methods: {
    dataPrepare() {
      let customer = {
        customerName: this.name,
        customerFirstName: this.firstName
      }
      console.log(customer)
      this.createCustomer(customer)
    },
    createCustomer(customer) {
      axios
      .post('http://localhost:3000/customer', customer)

      location.reload()
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
  height: 300px;
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
    margin-top: 30px;
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
