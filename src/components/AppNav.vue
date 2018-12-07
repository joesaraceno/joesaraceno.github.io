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
  background-color: transparent;
  width: 100%;
  margin-left: 20px;
  .nav-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
}

</style>
