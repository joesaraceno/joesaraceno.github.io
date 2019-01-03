<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="main"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-nav': AppNav,
    'app-footer': AppFooter,
  }


}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.main {
  flex: 1 0 auto;
  padding: 56px 200px 0;
  .filler {
    font-size: 20px;
    padding: 50px 0;
  }
}
</style>
