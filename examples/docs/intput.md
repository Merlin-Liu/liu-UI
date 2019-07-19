<script>
export default {
  data () {
    return {
      value: '100000',
      input: '禁用状态',
      clearableValue: '',
      inputIcon: ''
    }
  }
}
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法
:::demo
```html
<template>
  <p>vlaue：{{value}}</p>
  <liu-input v-model="value" placeholder="请输入"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      value: '121212'
    }
  }
}
</script>
```
:::

## 禁用状态
:::demo
```html
<template>
  <liu-input v-model="input" disabled></liu-input>
</template>

<script>
export default {
  data () {
    return {
      input: '禁用状态'
    }
  }
}
</script>
```
:::

## 可清空
:::demo
```html
<template>
  <p>clearableValue: {{clearableValue}}</p>
  <liu-input v-model="clearableValue" clearable></liu-input>
</template>

<script>
export default {
  data () {
    return {
      clearableValue: ''
    }
  }
}
</script>
```
:::

## 带icon的输入框

:::demo 可以通过 slot `prefix`、`suffix` 来放置图标。

```html
<template>
  <liu-input v-model="inputIcon" clearable>
    <i class="fa fa-calendar" slot="suffix"></i>
  </liu-input>
</template>

<script>
export default {
  data () {
    return {
      inputIcon: ''
    }
  }
}
</script>
```
:::

