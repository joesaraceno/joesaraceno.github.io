<template>
  <ul class="profile-text-list">
    <li class="profile-text-item" v-for="item in list" :key="item.id">
      <h3 class="heading">{{ item.heading }}</h3>
      <p class="content">{{ item.content }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'AppProfileText',
  data() {
    return {
      list: [
        {
          id: 0,
          heading: 'Joe Saraceno',
          content: 'Web developer'
        },
        {
          id: 1,
          heading: 'Skills include',
          content: 'New frameworks, full stack'
        },
        {
          id: 2,
          heading: 'Reach out',
          content: 'I\'m available for hire' 
        },  
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .profile-text-list {
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
