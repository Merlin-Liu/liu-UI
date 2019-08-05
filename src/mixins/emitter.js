export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }

      if (parent) {
        // 组件可以响应自己出发的事件
        parent.$emit(eventName, params)
        // parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}
