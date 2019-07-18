<template>
    <button
      class="liu-button"
      @click="hanldeCLick"
      :disabled="disabled"
      :autofocus="autofocus"
      :type="nativeType"
      :class="[
        type ? 'liu-button--' + type : '',
        size ? 'liu-button--' + size : '',
        {
          'is-disabled': disabled,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle
        }
      ]"
    >
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'LiuButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      plain: Boolean,
      round: Boolean,
      circle: Boolean,
      size: String,
      disabled: Boolean,
      autofocus: Boolean,
      nativeType: {
        type: String,
        default: 'button'
      }
    },

    methods: {
      hanldeCLick (event) {
        this.$emit('click', event)
      }
    }
}
</script>
