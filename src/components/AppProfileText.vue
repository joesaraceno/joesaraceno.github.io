<template>
  <transition-group selector="ul" class="profile-text-list">
    <li v-show="show" class="profile-text-item" v-for="(item, index) in list" :key="item.id">
      <h3 class="heading">{{ item.heading }}</h3>
      <p class="content">{{ item.content }}</p>
    </li>
  </transition-group>
</template>
<script>
export default {
  name: 'AppProfileText',
  data() {
    return {
      list: [
        {
          id: 0,
          showing: false,
          heading: 'Joe Saraceno',
          content: 'Web developer'
        },
        {
          id: 1,
          showing: false,
          heading: 'Skills include',
          content: 'New frameworks, full stack'
        },
        {
          id: 2,
          showing: false,
          heading: 'Reach out',
          content: 'I\'m available for hire' 
        },  
      ]
    }
  },
  props: ['show'],
  computed: {},
}
</script>
<style lang="scss" scoped>
  .profile-text-list {
    list-style-type: none;
    margin: auto;
    margin-top: 0;
    justify-self: center;
    .profile-text-item {
      .heading {
        margin-top: 0;
        padding-bottom: 8px;
        border-bottom: 1px solid grey;
      }
      .content {
        font-style: italic;
      }
    }
  }
</style>
