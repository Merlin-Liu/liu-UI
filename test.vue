<template>
  <div>
    <liu-button type="danger" @click="handleClick">121212</liu-button>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),

  mounted() {
    this.$on('handleClick', value => {
      alert('1212121')
      console.log(value)
    })
  },

  methods: {
    handleClick() {
      this.$emit('handleClick', 12121212)
    }
  }
}
</script>
