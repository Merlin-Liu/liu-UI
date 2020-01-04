import Vue from 'vue';
import loadingVue from './loading.vue'

const LoadingConstructor = Vue.extend(loadingVue);

LoadingConstructor.prototype.close = function() {
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el);
  }
  this.$destroy();
}

const Loading = () => {
  const parent = document.body

  const instance = new LoadingConstructor({
    el: document.createElement('div')
  })

  parent.appendChild(instance.$el)

  return instance
}

export default {
  install(Vue) {
    Vue.prototype.$loading = Loading
  }
}
