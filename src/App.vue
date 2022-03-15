<template>
  <div id="app" class="container">
    <Navigasi />
    <router-view />
  </div>
</template>

<script>
import Navigasi from "./components/Navigasi.vue";
export default {
  components: {
    Navigasi,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
