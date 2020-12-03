<template>
  <div id="nav">
    <router-link to="/login">LogIn</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>
  <router-view/>
</template>

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
  background-color: #f1f1f1;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
