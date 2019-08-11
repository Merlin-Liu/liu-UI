import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'font-awesome/css/font-awesome.css'

import router from './router.conf'
import entry from './App.vue'
import Demo from './components/demo.vue'

import LiuButton from '../packages/button'
import LiuInput from '../packages/input'
import LiuRadio from '../packages/radio'
import LiuRadioGroup from '../packages/radio-group'
import LiuRadioButton from '../packages/radio-button'
import LiuScrollBar from '../packages/scrollbar'

import '../packages/styule/index.scss'

// test
// import test from '../test'

Vue.directive('highlight', el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

Vue.use(LiuButton)
Vue.use(LiuInput)
Vue.use(LiuRadio)
Vue.use(LiuRadioGroup)
Vue.use(LiuRadioButton)
Vue.use(LiuScrollBar)

Vue.component('demo-block', Demo)

new Vue({
  router,
  render: h => h(entry)
  // test
  // render: h => h(test)
}).$mount('#app')
