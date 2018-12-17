require('file-loader?name=[name].[ext]!./index.html'); // this just pulls in the index file and copies to the dist folder
import './scss/main.scss'

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

const animateNav = () => {
  // select the nav and track the window scroll position
  const nav = document.querySelector('.nav-wrapper');
  let currScroll = 0;
  let prevScroll = 0;
  let diffScroll = 0;

  // we want to show the scroll any time we're moving up or
  // are already up top
  // and hide anytime we're moving down
  window.addEventListener('scroll', () => {
    currScroll = window.pageYOffset;
    diffScroll = prevScroll - currScroll;

    if (currScroll <= 0) {
      // when we are at top show
      nav.classList.remove('hidden');
    } else if (diffScroll > 0) {
      // if we are moving up at all, show
      nav.classList.remove('hidden');
    } else if (diffScroll < 0) {
      // if we are moving down at all, hide
      nav.classList.add('hidden');
    }

    prevScroll = currScroll;
  });
};

animateNav();