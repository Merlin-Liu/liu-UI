<script>
export default {
  methods: {
    openLoading() {
      const loadingService = this.$loading()
      setTimeout(() => {
        loadingService.close()
      }, 4000)
    }
  }
}
</script>

## Loading 加载

加载数据时显示动效

### 基础用法

:::demo

```html
<template>
  <liu-button @click="openLoading">点击开启Loading</liu-button>
</template>

<script>
export default {
  methods: {
    openLoading() {
      const loadingService = this.$loading()
      setTimeout(() => {
        loadingService.close()
      }, 4000)
    }
  }
}
</script>
```

:::
