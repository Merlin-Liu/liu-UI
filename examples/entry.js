import Vue from 'vue';
import entry from './App';
import demoBlock from './components/demo-block.vue';
import LiuButton from '../packages/button';

import router from './router.conf';

Vue.use(LiuButton);
Vue.component('demo-block', demoBlock);

new Vue({
  router,
  render: h => h(entry)
}).$mount('#app');
