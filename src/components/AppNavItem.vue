<template>
    <li class="nav-item-wrapper">
      <a>{{ item.name }}</a>
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
  width: 100px;
  a {
    &:after {
      transition: visibility .2s, opacity 0.3s ease-in;
      visibility: visible;
      opacity: 0;
      content: "";
      display: block;
      margin: 0 auto;
      width: 50%;
      padding-top: 4px;
      border-bottom: 1px solid black;
    }
    &:hover {
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

</style>
