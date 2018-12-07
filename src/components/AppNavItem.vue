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
  a:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 4px;
    border-bottom: 1px solid black;
  }
}

</style>
