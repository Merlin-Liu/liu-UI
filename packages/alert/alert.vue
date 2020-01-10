<template>
  <transition name="liu-alert-fade">
    <div
      class="liu-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
    >
      <i
        class="liu-alert__icon fa"
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="liu-alert__content">
        <span
          class="liu-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{title}}</slot>
        </span>
        <p class="liu-alert__description" v-if="description || $slots.default"><slot>{{description}}</slot></p>
        <i
          class="liu-alert__close fa"
          :class="{'fa-times-circle' : closeText === ''}"
          v-show="closeable"
          @click="close"
        >{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASS_MAP = {
  success: 'fa-check-circle',
  info: 'fa-info-circle',
  warning: 'fa-exclamation-circle',
  error: 'fa-times-circle'
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
      default: 'info',
      validator: str => {
        return TYPE_MAP.indexOf(str) !== -1
      }
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
    },

    iconClass() {
      return TYPE_CLASS_MAP[this.type] || ''
    },

    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : ''
    },

    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  },

  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
