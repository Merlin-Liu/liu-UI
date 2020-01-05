<style>
  .demo-block .liu-select{
    width: 240px;
  }
</style>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selected: '',

        options2: [{
          value: '选项1',
          label: '黄金糕',
          disabled: true
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true
        }],
        selected2: ''
      }
    }
  }
</script>

# select选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法

:::demo `v-model`的值为当前被选中的`liu-option`的`value`属性值

```html
<template>
  <p>当前选择的value: {{selected}}</p>
  <liu-select v-model="selected">
    <liu-option
      v-for="({label, value}, key) in options"
      :label="label"
      :value="value"
      :key="key"
    ></liu-option>
  </liu-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selected: ''
      }
    }
  }
</script>
```
:::

## 禁用状态

选择器不可用状态

:::demo 为`liu-select`设置`disabled`属性，则整个选择器不可用

```html
<template>
  <liu-select v-model="selected" disabled>
    <liu-option
      v-for="({label, value}, key) in options"
      :label="label"
      :value="value"
      :key="key"
    ></liu-option>
  </liu-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selected: ''
      }
    }
  }
</script>
```
:::


## 有禁用选项

:::demo 在`liu-option`中，设定`disabled`值为`true`，即可禁用该选项

```html
<template>
  <liu-select v-model="selected2">
    <liu-option
      v-for="({label, value, disabled}, key) in options2"
      :label="label"
      :value="value"
      :disabled="disabled"
      :key="key"
    ></liu-option>
  </liu-select>
</template>

<script>
  export default {
    data () {
      return {
        options2: [{
          value: '选项1',
          label: '黄金糕',
          disabled: true
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true
        }],
        selected2: ''
      }
    }
  }
</script>
```
:::
