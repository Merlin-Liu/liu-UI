<template>
  <div
    class="liu-select"
    @click="toggleMenu"
    v-clickout="clickoutHandle"
  >
    <!-- 输入框 -->
    <liu-input
      ref="input"
      v-model="selectedLabel"
      :readonly="true"
      :placeholder="placeholder"
      :disabled="disabled"
    >
      <template slot="suffix">
        <i class="fa fa-angle-down" :class="{'is-reverse' : visible}"></i>
      </template>
    </liu-input>

    <!-- 下拉框 -->
    <liu-select-dropdown v-show="visible">
      <liu-scrollbar
        native tag="ul"
        wrap-class="liu-select-dropdown__wrap"
        view-class="liu-select-dropdown__list"
      >
        <slot></slot>
      </liu-scrollbar>
    </liu-select-dropdown>
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
import {getValueByPath} from '../../src/utils/utils'
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
    disabled: Boolean
  },

  data() {
    return {
      options: [],
      cachedOptions: [], // options缓存
      selected: {},
      selectedLabel: '',
      visible: false,
      inputWidth: 0 // liu-input的实际宽度
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
    addResizeListener(this.$el, this.handleResize);
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
          ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption
          break
        }
      }
      if(option) {
        return option
      }

      const lebal = (!isObject && !isNull && !isUndefined) ? value : ''

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

    handleOptionClick(option) {
      this.$emit('input', option.value)
      this.visible = false
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
