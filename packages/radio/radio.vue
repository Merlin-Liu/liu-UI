<template>
  <label
    :class="[{
      'is-disabled': disabled
    }]"
    class="liu-radio"
  >
    <span
      :class="[{ 'is-disabled': disabled }]"
      class="liu-radio__input">
      <span class="liu-radio__inner" />
      <input
        ref="radio"
        :value="label"
        v-model="raidoValue"
        :disabled="disabled"
        type="radio"
        @change="handleChange"
      >
    </span>
    <span class="liu-radio__label">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LiuRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean
  },

  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName === 'LiuRadioGroup') {
          this._radioGroup = parent;
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    },

    raidoValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$refs.radio.checked = this.raidoValue === this.label
      }
    }
  },

  methods: {
    handleChange() {
      this.$emit('change', this.raidoValue);
      // if (this.isGroup) {
      //   this.dispatch('LiuRadioGroup', 'handleChange', this.model);
      // }
    }
  }
}
</script>
