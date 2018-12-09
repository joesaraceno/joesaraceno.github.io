<template>
  <div id="app">
    <app-nav></app-nav>
  </div>
</template>

<script>
import  AppNav from "./components/AppNav.vue";
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-nav': AppNav,
  }


}
</script>

<style lang="scss">
#app {
  min-height: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
