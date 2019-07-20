import Vue from 'vue'
import router from './router.conf'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'font-awesome/css/font-awesome.css'
import entry from './App.vue'
import Demo from './components/demo'
import LiuButton from '../packages/button'
import LiuInput from '../packages/input'
import '../packages/styule/index.scss'

// test
import test from '../test'

Vue.directive('highlight', el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

Vue.use(LiuButton)
Vue.use(LiuInput)
Vue.component('demo-block', Demo)

new Vue({
  router,
  render: h => h(entry)
  // test
  // render: h => h(test)
}).$mount('#app')
