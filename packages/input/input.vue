<template>
  <div
    class='liu-input'
    :class="[
      size ? 'liu-input--' + size : '',
      {
        'is-disabled': disabled,
        'liu-input--suffix': clearable
      }
    ]"
  >

    <span class='liu-input__prefix' v-if="$slots.prefix">
      <slot name='perfix'></slot>
    </span>

    <input
      class="liu-input__inner"
      :type="type"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :tabindex="tabindex"
      @input="handleInput"
      v-bind="$attrs"
    />

    <span class='liu-input__suffix' v-if="$slots.suffix || isClear">
      <slot name='suffix'></slot>
      <i class="fa fa-times-circle" v-if="isClear" @click="clear"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LiuInput',

  inheritAttrs: false,

  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean,
    readonly: Boolean,
    size: String,
    tabindex: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isClear() {
      return this.clearable && !this.disabled && !this.readonly && this.value
    }
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },

    clear() {
      this.$emit('input', '')
    }
  }
}
</script>

