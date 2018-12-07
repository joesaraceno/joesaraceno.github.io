<template>
    <li class="nav-item-wrapper">
      <a
      >{{ item.name }}</a>
    </li>
</template>

<script>
export default {
  name: 'AppNavItem',
  props: [
    'item'
  ],
  created: () => {
    console.log(this.item);
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item-wrapper {
  background-color: transparent;
  width: 80px;
}

</style>
