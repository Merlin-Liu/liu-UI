import Vue from 'vue'
import router from './router.conf'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'font-awesome/css/font-awesome.css'
import entry from './App.vue'
import Demo from './components/demo'
import LiuButton from '../packages/button'
import '../packages/styule/index.scss'

Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
Vue.use(LiuButton);
Vue.component('demo-block', Demo)

new Vue({
  router,
  render: h => h(entry)
}).$mount('#app')
