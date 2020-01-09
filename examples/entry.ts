import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'font-awesome/css/font-awesome.css'

// demo依赖
import router from './router.conf'
import entry from './App.vue'
import Demo from './components/demo.vue'

// 组件
import LiuButton from '../packages/button'
import LiuInput from '../packages/input'
import LiuRadio from '../packages/radio'
import LiuRadioGroup from '../packages/radio-group'
import LiuRadioButton from '../packages/radio-button'
import LiuScrollBar from '../packages/scrollbar'
import LiuSelect from '../packages/select'
import LiuOption from '../packages/option'
import LiuLoding from '../packages/loading'
import LiuNotification from '../packages/notification'
import LiuAlert from '../packages/alert'

// 组件样式
import '../packages/styule/index.scss'

Vue.directive('highlight', el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

// use组件
Vue.use(LiuButton)
Vue.use(LiuInput)
Vue.use(LiuRadio)
Vue.use(LiuRadioGroup)
Vue.use(LiuRadioButton)
Vue.use(LiuScrollBar)
Vue.use(LiuSelect)
Vue.use(LiuOption)
Vue.use(LiuLoding)
Vue.use(LiuAlert)
Vue.prototype.$notify = LiuNotification

// demo组件
Vue.component('demo-block', Demo)

new Vue({
  router,
  render: h => h(entry)
}).$mount('#app')
