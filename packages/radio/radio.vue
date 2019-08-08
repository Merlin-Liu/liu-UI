<template>
  <label
    :class="[
      (border && radioSize) ? 'liu-radio--' + radioSize : '',
      {
        'is-disabled': isDisabled,
        'is-bordered': border,
        'is-checked': raidoValue === label
      }
    ]"
    class="liu-radio"
  >
    <span
      :class="{
        'is-disabled': isDisabled,
        'is-checked': raidoValue === label
      }"
      class="liu-radio__input">
      <span class="liu-radio__inner" />
      <input
        ref="radio"
        type="radio"
        class="liu-radio__original"
        :name="name"
        :disabled="isDisabled"
        :value="label"
        v-model="raidoValue"
        @change="handleChange"
        tabindex="-1"
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
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'LiuRadioGroup') {
          this.parentRadioGroup = parent;
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
        return this.isGroup ? this.parentRadioGroup.value : this.value
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
    },

    isDisabled() {
      return this.isGroup
        ? this.parentRadioGroup.disabled || this.disabled
        : this.disabled
    },

    radioSize() {
      return this.isGroup ? this.parentRadioGroup.size : this.size
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.raidoValue)

        if (this.isGroup) {
          this.dispatch('LiuRadioGroup', 'handleChange', this.raidoValue);
        }
      })
    }
  }
}
</script>
