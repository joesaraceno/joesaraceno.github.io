<template>
  <nav class="nav-wrapper">
    <ul class="nav-list">
      <app-nav-item
        :key="item.id"
        v-for="item in list"
        :item="item">
      </app-nav-item>
    </ul>
  </nav>
</template>

<script>
import AppNavItem from './AppNavItem';
export default {
  name: 'AppNav',
  data () {
    return {
      list: [
        {
          id: 0,
          name: "Home",
        },        
        {
          id: 1,
          name: "Work",
        },
        {
          id: 2,
          name: "About",
        },
        {
          id: 3,
          name: "Contact",
        }
      ]
    }
  },
  components: {
    'app-nav-item': AppNavItem
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  background-color: white;
  width: 100%;
  height: 65px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  filter: opacity(0.8);
  -webkit-filter: opacity(0.8);
  .nav-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
  &.hidden {
    height: 0;
    transition: 1ms height;
  }
}

</style>
