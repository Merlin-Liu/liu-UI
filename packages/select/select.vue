<template>
  <div
    class="liu-select"
    :class="[size ? 'liu-select--' + size : '']"
    @click="toggleMenu"
    v-clickout="clickoutHandle"
  >
    <!-- 输入框 -->
    <liu-input
      ref="input"
      v-model="selectedLabel"
      :readonly="true"
      :name="name"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
    >
      <template slot="suffix">
        <i
          v-if="showCloseIcon"
          class="fa fa-times-circle"
          @click.stop="clearSelected"
        />
        <i
          v-else
          class="fa fa-angle-down"
          :class="{'is-reverse' : visible}"
        />
      </template>
    </liu-input>

    <!-- 下拉框 -->
    <transition name="liu-zoom-in-top">
      <liu-select-dropdown v-show="visible">
        <liu-scrollbar
          v-show="options.length > 0"
          native-tag="ul"
          wrap-class="liu-select-dropdown__wrap"
          view-class="liu-select-dropdown__list"
        >
          <slot></slot>
        </liu-scrollbar>
        <p
          v-if="options.length === 0"
          class="liu-select-dropdown__empty"
        >无数据</p>
      </liu-select-dropdown>
    </transition>
  </div>
</template>

<script type="text/babel">
// directive
import clickout from '@/src/utils/click-out'

// component
import LiuInput from '../input'
import LiuSelectDropdown from './select-dropdown'
import LiuScrollbar from '../scrollbar'

// mixin
import Emitter from '../../src/mixins/emitter'

// uitl
import {getValueByPath, valueEquals} from '../../src/utils/utils'
import {addResizeListener, removeResizeListener} from '../../src/utils/resize-event'

export default {
  name: 'LiuSelect',

  directives: {
    clickout
  },

  provide() {
    return {
      'select': this
    };
  },

  props: {
    value: {
      required: true
    },
    placeholder: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    size: String,
    name: String
  },

  data() {
    return {
      options: [],
      cachedOptions: [], // options缓存
      selected: {},
      selectedLabel: '',
      visible: false,
      inputWidth: 0, // liu-input的实际宽度
      inputHovering: false // 鼠标滑动进liu-input中的标记
    }
  },

  computed: {
    showCloseIcon() {
      const hasValue = this.value !== undefined && this.value !== null && this.value !== ''

      return this.clearable && this.inputHovering && hasValue && !this.disabled
    }
  },

  watch: {
    value() {
      this.setSelected()
    }
  },

  components: {
    LiuInput,
    LiuSelectDropdown,
    LiuScrollbar
  },

  created() {
    this.$on('handleOptionClick', this.handleOptionClick)
  },

  mounted() {
    // 监听select最外层容器宽度变化
    addResizeListener(this.$el, this.handleResize)
    this.setSelected()
  },

  beforeDestroy() {
    if (this.$el && this.handleResize) {
      removeResizeListener(this.$el, this.handleResize)
    }
  },

  methods: {
    toggleMenu() {
      if (!this.disabled) {
        this.visible = !this.visible
        this.$refs['input'].focus()
      }
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val)
      }
    },

    // 点击到了元素外面，关闭dropdown
    clickoutHandle() {
      this.visible = false
    },

    getOption(value) {
      let option
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';

      for(let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i]
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, 'value') === getValueByPath(value, 'value')
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption
          break
        }
      }
      if(option) {
        return option
      }

      const label = (!isObject && !isNull && !isUndefined) ? value : ''

      return {
        value,
        currentLabel: label
      }
    },

    setSelected() {
      const option = this.getOption(this.value)
      this.selectedLabel = option.currentLabel;
      this.selected = option;
    },

    clearSelected() {
      const value = ''
      this.visible = false
      this.$emit('input', value)
      this.emitChange(value)
      this.$emit('clear')
    },

    handleOptionClick(option) {
      this.$emit('input', option.value)
      this.visible = false
      this.emitChange(option.value)
      this.$refs['input'].focus()
    },

    resetInputWidth() {
      // 将this.inputWidth设置为当前input的宽度
      // 用来触发liu-select-dropdown的minWidth的更新
      this.inputWidth = this.$refs['input'].$el.getBoundingClientRect().width;
    },

    handleResize() {
      this.resetInputWidth()
    }
  }
}
</script>
