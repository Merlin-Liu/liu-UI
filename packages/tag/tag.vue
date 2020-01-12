<template>
  <span
    class="liu-tag"
    :class="[
      type ? 'liu-tag--' + type : '',
      effect ? 'liu-tag--' + effect : '',
      size ? 'liu-tag--' + size : ''
    ]"
    @click="handleClick"
  ><slot></slot><i
    v-if="closeable"
    class="liu-tag__close fa fa-times-circle"
    @click.stop="handleClose"
  ></i></span>
</template>

<script type="text/babel">
const TYPE_MAP = ['success', 'info', 'warning', 'danger']
const EFFECT_MAP = ['dark', 'light', 'plain']

export default {
  name: 'LiuTag',

  props: {
    type: {
      type: String,
      default: 'info',
      validator: str => TYPE_MAP.includes(str)
    },
    closeable: Boolean,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator: str => EFFECT_MAP.includes(str)
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    },

    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
