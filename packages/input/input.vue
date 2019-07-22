<template>
  <div
    :class="[
      type === 'textarea' ? 'liu-textarea' : 'liu-input',
      size ? 'liu-input--' + size : '',
      {
        'is-disabled': disabled,
        'is-exceed': isExceed,
        'liu-input-group': $slots.prepend || $slots.append,
        'liu-input-group--prepend': $slots.prepend,
        'liu-input-group--append': $slots.append,
        'liu-input--prefix': $slots.prefix,
        'liu-input--suffix': $slots.suffix || isClear || showPasswordIcon || isWordLimitVisible
      }
    ]"
  >
    <template v-if="type !== 'textarea'">
      <!-- input-prepend -->
      <div v-if="$slots.prepend" class="liu-input-group__prepend">
        <slot name="prepend" />
      </div>

      <!-- input prefix -->
      <span v-if="$slots.prefix" class="liu-input__prefix">
        <slot name="prefix" />
      </span>

      <!-- input inner -->
      <input
        ref="input"
        :type="type === 'password' ? (passwordVisible ? 'password' : 'text') : type"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
        class="liu-input__inner"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >

      <!-- input suffix -->
      <span v-if="$slots.suffix || isClear || showPasswordIcon || isWordLimitVisible" class="liu-input__suffix">
        <slot name="suffix" />
        <i
          v-if="isClear"
          class="fa fa-times-circle liu-input__clear"
          @click="clear"
        />
        <i
          v-if="showPasswordIcon"
          class="fa fa-eye liu-input__eye"
          @click="togglePasswordVisible"
        />
        <span v-if="isWordLimitVisible" class="liu-input__count">
          {{ textLength }}/{{ upperLimit }}
        </span>
      </span>

      <!-- input-append -->
      <div v-if="$slots.append" class="liu-input-group__append">
        <slot name="append" />
      </div>
    </template>

    <textarea
      v-else
      ref="textarea"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :style="textareaStyle"
      v-bind="$attrs"
      class="liu-textarea__inner"
      @input="handleInput"
    />
    <span v-if="isWordLimitVisible && type === 'textarea'" class="liu-input__count">
      {{ textLength }}/{{ upperLimit }}
    </span>
  </div>
</template>

<script>
import calcTextareaDomHeight from './calcTextareaDomHeight'

export default {
  name: 'LiuInput',

  inheritAttrs: false,

  props: {
    value: [String, Number],
    size: String,
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean,
    readonly: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    autosize: [Boolean, Object],
    showWordLimit: Boolean
  },

  data: () => ({
    passwordVisible: true,
    textareaStyle: ''
  }),

  computed: {
    isClear() {
      return this.clearable && !this.disabled && !this.readonly && this.value
    },

    showPasswordIcon() {
      return this.type === 'password' && !this.disabled && !this.readonly && this.value
    },

    isWordLimitVisible() {
      return this.showWordLimit && this.$attrs.maxlength &&
        (this.type === 'text' || this.type === 'textarea') && !this.disabled && !this.readonly && !this.showPassword
    },

    textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }
      return (this.value || '').length
    },

    upperLimit() {
      return this.$attrs.maxlength
    },

    isExceed() {
      return this.isWordLimitVisible && this.textLength >= this.upperLimit
    },

    input() {
      return this.$refs.input || this.$refs.textarea
    }
  },

  watch: {
    value() {
      this.$nextTick(this.resizeTextarea)
    }
  },

  mounted() {
    this.resizeTextarea()
  },

  methods: {
    focus() {
      this.input.focus()
    },

    blur() {
      this.input.blur()
    },

    handleInput(event) {
      this.$emit('input', event.target.value)
    },

    handleFocus(event) {
      this.$emit('focus', event);
    },

    handleBlur(event) {
      this.$emit('blur', event);
    },

    handleChange(event) {
      this.$emit('change', event.target.value);
    },

    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },

    togglePasswordVisible() {
      this.passwordVisible = !this.passwordVisible
      this.focus()
    },

    resizeTextarea() {
      const {type, autosize} = this
      if (type !== 'textarea') return

      if (!autosize) {
        this.textareaStyle = {
          minHeight: calcTextareaDomHeight(this.$refs.textarea).minHeight
        }
      } else {
        const {minRows, maxRows} = autosize
        this.textareaStyle = calcTextareaDomHeight(this.$refs.textarea, minRows, maxRows)
      }
    }
  }
}
</script>

