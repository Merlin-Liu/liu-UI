<template>
  <div class="liu-notification">
    <div class="liu-notification__group">
      <h2 class="liu-notification__title"><i
        class="liu-notification__icon fa"
        :class="[type, typeIconName]"
      />{{title}}</h2>
      <div class="liu-notification__content">{{message}}</div>
      <div
        class="liu-notification__close fa fa-times-circle"
        v-if="showClose"
        @click.stop="close"
      />
    </div>
  </div>
</template>

<script type="text/babel">
const TYPE_NAME_MAP = {
  success: 'fa-check-circle',
  info: 'fa-info-circle',
  warning: 'fa-exclamation-circle',
  error: 'fa-window-close'
}

export default {
  data () {
    return {
      visible: false,
      type: '',
      title: '',
      message: '',
      duration: 4500,
      iconClass: '',
      showClose: false,
      onClick: null,
      onClose: null,
      customClass: '',
      verticalOffset: 0,
      position: 'top-right',
      // dangerouslyUseHTMLString: false,
      timer: null,
      closed: false
    }
  },

  computed: {
    typeIconName() {
      const type = this.type
      return type && TYPE_NAME_MAP[type] ? TYPE_NAME_MAP[type] : ''
    }
  },

  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    }
  },

  methods: {
    destroySelf() {
      const parentNode = this.$el.parentNode
      parentNode && parentNode.removeChild(this.$el)
      this.$destroy()
    },

    close() {
      this.closed = true
      this.destroySelf()
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  }
}
</script>
