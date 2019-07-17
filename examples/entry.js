import Vue from 'vue'
import router from './router.conf'
import hljs from 'highlight.js' // 引入JS
import 'highlight.js/styles/github.css' // 样式文件
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

import entry from './App'
import demoBlock from './components/demo-block'
import LiuButton from '../packages/button'
import '../packages/styule/index.scss'

Vue.use(LiuButton);
Vue.component('demo-block', demoBlock)

new Vue({
  router,
  render: h => h(entry)
}).$mount('#app')
