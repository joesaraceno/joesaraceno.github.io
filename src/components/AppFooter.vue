<template>
  <footer class="footer-wrapper">
    <div class="footer-column">
      <ul class="icons">
      </ul>
    </div>
    <div class="footer-column">
      <span class="copy">&copy; Joe Saraceno <span class="slash"> /</span> {{ new Date().getFullYear() }}</span>
    </div>
    <div class="footer-column">

    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      links: [
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    flex-shrink: 0;
    box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.2);
    filter: opacity(0.8);
    -webkit-filter: opacity(0.8);
    height: 120px;
    background-color: #504e4e;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    .footer-column {
      color: #FFFFFF;
      border-radius: 5px;
      padding: 20px;
      .copy {
        color: #FFFFFF;
        font-size: 15px;
        .slash {
          font-size: 26px; 
          position: relative;
          top: 4px;
        }
      }
    }
  }
</style>



