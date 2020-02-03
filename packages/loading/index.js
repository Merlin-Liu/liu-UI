import Vue from 'vue';
import loadingVue from './loading.vue'
import afterLevel from '@/src/utils/after-level';

const LoadingConstructor = Vue.extend(loadingVue);

LoadingConstructor.prototype.close = function() {
  const transitionLevelCallback = () => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  }

  afterLevel(this, transitionLevelCallback, 300)
  this.visible = false
}

const Loading = () => {
  const parent = document.body

  const instance = new LoadingConstructor({
    el: document.createElement('div')
  })

  parent.appendChild(instance.$el)
  instance.visible = true

  return instance
}

export default {
  install(Vue) {
    Vue.prototype.$loading = Loading
  }
}
