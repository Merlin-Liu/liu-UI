<template>
  <div
    :class="[
      type === 'textarea' ? 'liu-textarea' : 'liu-input',
      size ? 'liu-input--' + size : '',
      {
        'is-disabled': disabled,
        'liu-input--prefix': $slots.prefix,
        'liu-input--suffix': $slots.suffix || clearable
      }
    ]"
  >

    <template v-if="type !== 'textarea'">
      <!-- input-prepend -->
      <div class="liu-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>

      <!-- input prefix -->
      <span class='liu-input__prefix' v-if="$slots.prefix">
        <slot name='prefix'></slot>
      </span>

      <!-- input inner -->
      <input
        class="liu-input__inner"
        :type="type === 'password' ? (passwordVisible ? 'password' : 'text') : type"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :tabindex="tabindex"
        @input="handleInput"
        v-bind="$attrs"
      />

      <!-- input suffix -->
      <span class='liu-input__suffix' v-if="$slots.suffix || isClear || showPasswordIcon">
        <slot name='suffix'></slot>
        <i class="fa fa-times-circle" v-if="isClear" @click="clear"/>
        <i class="fa fa-eye" v-if="showPasswordIcon" @click="togglePasswordVisible"></i>
      </span>

      <!-- input-append -->
      <div class="liu-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>

    <textarea
      v-else
      class="liu-textarea__inner"
      :value="value"
      @input="handleInput"
      :readonly="readonly"
      :disabled="disabled"
      v-bind="$attrs"
    />

  </div>
</template>

<script>
export default {
  name: 'LiuInput',

  inheritAttrs: false,

  data: () => ({
    passwordVisible: true
  }),

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
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    autosize: [Boolean, Object]
  },

  computed: {
    isClear() {
      return this.clearable && !this.disabled && !this.readonly && this.value
    },

    showPasswordIcon() {
      return this.type === 'password' && !this.disabled && !this.readonly && this.value
    }
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },

    clear() {
      this.$emit('input', '')
    },

    togglePasswordVisible() {
      this.passwordVisible = !this.passwordVisible
    },

    resizeTextarea() {
      const { type, autosize } = this
      if (type !== 'textarea') return

    }
  }
}
</script>

