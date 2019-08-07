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
import Emitter from '../../src/mixins/emitter'

export default {
  name: 'LiuRadio',

  mixins: [Emitter],

  props: {
    value: {},
    label: {},
    disabled: Boolean
  },

  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'LiuRadioGroup') {
          this._radioGroup = parent;
          return true
        }
        else {
          parent = parent.$parent
        }
      }
      return false
    },

    raidoValue: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('LiuRadioGroup', 'input', val)
        }
        else {
          this.$emit('input', val)
        }
        this.$refs.radio.checked = this.raidoValue === this.label
      }
    }
  },

  methods: {
    handleChange() {
      this.$emit('change', this.raidoValue)

      if (this.isGroup) {
        this.dispatch('LiuRadioGroup', 'handleChange', this.raidoValue);
      }
    }
  }
}
</script>
