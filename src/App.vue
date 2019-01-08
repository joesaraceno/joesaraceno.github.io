<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="main">
      <div class="profile-wrapper">
        <transition 
          name="slide-fade" 
          appear
          v-on:after-enter="show = true">
          <app-profile-pic></app-profile-pic>
        </transition>
        <transition name="slide-from-top">
          <app-profile-text v-show="show"></app-profile-text>
        </transition>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
import AppProfilePic from './components/AppProfilePic.vue';
import AppProfileText from './components/AppProfileText.vue';
export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  components: {
    'app-nav': AppNav,
    'app-footer': AppFooter,
    'app-profile-pic': AppProfilePic,
    'app-profile-text': AppProfileText,
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
  padding: 58px 200px 0;
  .filler {
    font-size: 20px;
    padding: 50px 0;
  }
  .slide-fade-enter-active {
    transition: all 1s ease-out;
  }
  .slide-fade-enter {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-from-top-enter-active {
    transition: all 1s ease-out;
  }
  .slide-from-top-enter {
    transform: translateY(-100px);
    opacity: 0;
  }
  .profile-wrapper {
    padding-top: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
