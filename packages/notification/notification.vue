<template>
  <transition name="liu-notification-fade">
    <div
      class="liu-notification"
      :class="[horizontalClass]"
      :style="positionStyle"
      v-show="visible"
    >
      <div class="liu-notification__group">
        <h2 class="liu-notification__title"><i
          class="liu-notification__icon fa"
          :class="[type, typeIconName]"
          v-if="type"
        />{{title}}</h2>
        <div class="liu-notification__content">{{message}}</div>
        <div
          class="liu-notification__close fa fa-times-circle"
          v-if="showClose"
          @click.stop="close"
        />
      </div>
    </div>
  </transition>
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
      dangerouslyUseHTMLString: false,
      timer: null,
      closed: false
    }
  },

  computed: {
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },

    typeIconName() {
      const type = this.type
      return type && TYPE_NAME_MAP[type] ? TYPE_NAME_MAP[type] : ''
    },

    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
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
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  }
}
</script>
