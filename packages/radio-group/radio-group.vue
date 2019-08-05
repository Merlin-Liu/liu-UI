<template>
  <div class="liu-radio-group" @keydown="handleKeydown">
    <slot/>
  </div>
</template>

<script>
const keyCodeMap = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
})

export default {
  name: 'LiuRadioGroup',

  props: {
    value: {},
    size: String,
    disabled: Boolean
  },

  created() {
    this.$on('handleChange', v => {
      console.log(v)
      this.$emit('change', v)
    })
  },

  mounted() {
    // 当radioGroup没有默认选项时，按tab键可以到第一个radio
    const radioList = this.$el.querySelectorAll('[type=radio]')
    const firstRadio = radioList[0]
    const allNoCheck = Array.prototype.some.call(radioList, radio => radio.checked)

    if (firstRadio && allNoCheck) {
      firstRadio.tabIndex = 0
    }
  },

  methods: {
    handleKeydown({target, keyCode, stopPropagation, preventDefault}) {
      const radioList = this.$el.querySelectorAll('[type=radio]')
      const length = radioList.length
      const index = Array.prototype.indexOf.call(radioList, target)

      stopPropagation()
      preventDefault()
      switch (keyCode) {
        case keyCodeMap.LEFT:
        case keyCodeMap.UP:
          let radio = index === 0 ? radioList[length - 1] : radioList[index - 1]
          radio.focus()
          radio.click()
          break
        case keyCodeMap.RIGHT:
        case keyCodeMap.DOWN:
          radio = index === length - 1 ? radioList[0] : radioList[index + 1]
          radio.focus()
          radio.click()
          break
        default:
          break
      }
    }
  }
}
</script>
