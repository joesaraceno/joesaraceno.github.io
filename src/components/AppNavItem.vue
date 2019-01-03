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
  ]
}
</script>

<style lang="scss" scoped>
.nav-item-wrapper {
  width: 100px;
  a {
    color: #1b1d1f;
    font-weight: bold;
    &:after {
      transition: visibility 0.4s, opacity 0.4s ease-in;
      visibility: visible;
      opacity: 0;
      content: "";
      display: block;
      margin: 0 auto;
      width: 50%;
      padding-top: 4px;
      border-bottom: 2px solid #595e66;
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
