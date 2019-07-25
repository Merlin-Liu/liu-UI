<template>
  <div class="liu-radio-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'LiuRadioGroup',

  props: {
    value: {},
    size: String,
    disabled: Boolean
  },

  created() {
    this.$on('handleChange', v => this.$emit('change', v))
  },
}
</script>
