import Vue from 'vue';
import loadingVue from './loading.vue'

let loadingInstance;

const LoadingConstructor = Vue.extend(loadingVue);

LoadingConstructor.prototype.close = function() {
  loadingInstance = undefined

  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el)
  }
  this.$destroy()
}

const Loading = () => {
  if (loadingInstance) {
    return loadingInstance
  }

  const parent = document.body

  const instance = new LoadingConstructor({
    el: document.createElement('div')
  })

  parent.appendChild(instance.$el)

  loadingInstance = instance
  return instance
}

export default {
  install(Vue) {
    Vue.prototype.$loading = Loading
  }
}
