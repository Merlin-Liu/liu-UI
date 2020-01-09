<template>
  <div
    class="liu-alert"
    :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
    v-show="visible"
  >
    <i class="liu-alert__icon"></i>
    <div class="liu-alert__content">
      <span class="liu-alert__title">
        <slot name="title">{{title}}</slot>
      </span>
      <p class="liu-alert__description" v-if="description || $slots.default"><slot>{{description}}</slot></p>
      <i class="liu-alert__close fa fa-times-circle"></i>
    </div>
  </div>
</template>

<script type="text/babel">
const TYPE_CLASS_MAP = {
  success: '',
  info: '',
  warning: '',
  error: ''
}

const TYPE_MAP = Object.keys(TYPE_CLASS_MAP)

export default {
  name: 'LiuAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
        type: String,
        default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closeable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'light',
      validator: str => {
        return ['light', 'dark'].indexOf(str) !== -1
      }
    },
    showIcon: Boolean,
    center: Boolean
  },

  data() {
    return {
      visible: true
    }
  },

  computed: {
    typeClass() {
      return TYPE_MAP.includes(this.type) ? `liu-alert--${this.type}` : ''
    }
  }
}
</script>
