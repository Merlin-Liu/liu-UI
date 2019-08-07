<script>
  export default {
    data () {
      return {
        radio: '1',
        radio1: '3'
      }
    },
    
    methods: {
      change(val) {
         console.log(val)
      }
    }
  }
</script>

# 单选框
在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
```html
<template>
  <p>radio：{{radio}}</p>
  <liu-radio v-model="radio" label="1">备选项</liu-radio>
  <liu-radio v-model="radio" label="2">备选项</liu-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 单选框组

适用于在多个互斥的选项中选择的场景。

:::demo 结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
```html
<template>
  <p>{{radio1}}</p>
  <liu-radio-group v-model="radio1">
    <liu-radio label="3">备选项</liu-radio>
    <liu-radio label="6">备选项</liu-radio>
    <liu-radio label="9">备选项</liu-radio>
  </liu-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '3'
      };
    }
  }
</script>
```
:::
