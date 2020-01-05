<template>
  <div
    class="liu-select-dropdown"
    :style="{minWidth: minWidth}"
  >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'liuSelectDropdown',

  componentName: 'liuSelectDropdown',

  data() {
    return {
      minWidth: ''
    };
  },

  watch: {
    '$parent.inputWidth' (inputWidth) {
      this.minWidth = inputWidth + 'px'
    }
  }
}
</script>
