<template>
  <div id="nav">
    <div class="tab">
      <router-link :to="`/${userId}/`">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link :to="`/${userId}/profile`">Profile</router-link> |
      <router-link :to="`/${userId}/garage`">Garage</router-link>
    </div>
    <div class="customer">
      <select id="userList" v-model="userId">
        <option class="item" v-for="user in customers" :key="user.customerId" :value="user.customerId">{{ user.customerName }} {{ user.customerFirstName }}</option>
      </select>
      <router-link id="toHome" :to="`/${userId}`">GO</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios'

export default {
  name: 'nav',
  data() {
    return {
      customers: [],
      userId: ''
    }
  },
  mounted() {
    axios
    .get('http://localhost:3000/customer/')
    .then(res => this.customers = res.data)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  height: 60px;
  padding: 0 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.customer{
  display: flex;
  align-content: center;
}

#userList{
  height: 30px;
  margin: 0 5px;
}

#toHome{
  display: inline-block;
  padding: 4px 0;
  width: 40px;
  background-color: white;
  border: solid 1px grey;
  border-radius: 2px;
  text-decoration: none;
  font-size: 18px;
}
</style>
