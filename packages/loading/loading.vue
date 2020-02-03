<template>
  <transition name="liu-loading-fade" @after-level="handleAfterLevel">
    <div v-show="visible" class="liu-loading-mask">
      <div class="liu-loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },

  methods: {
    handleAfterLevel() {
      this.$emit('after-level')
    }
  }
}
</script>
