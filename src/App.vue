<template>
  <div id="app">
    <!-- <h1>hi，hello</h1>
    <router-link to="/countM">列表</router-link>-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
