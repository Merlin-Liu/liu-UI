<template>
    <button
      class="liu-button"
      @click="hanldeCLick"
      :disabled="disabled"
      :class="[
        type ? 'liu-button-' + type : ''
      ]"
    >
      <slot v-if="$slots.default"></slot>
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
      disabled: Boolean
    },

    methods: {
      hanldeCLick (event) {
        this.$emit('click', event)
      }
    }
}
</script>
