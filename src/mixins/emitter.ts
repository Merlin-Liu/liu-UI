// import { VNode } from 'vue'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Emitter extends Vue {
  dispatch(componentName: string, eventName: string, params: any): void {
    let parent: Vue = this.$parent || this.$root
    let name = parent.$options.name

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent

      if (parent) {
        name = parent.$options.name
      }
    }

    if (parent) {
      // 组件可以响应自己出发的事件
      // parent.$emit(eventName, params)
      parent.$emit.apply(parent, [eventName].concat(params))
    }
  }
}
