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
        },{
          value: '选项11',
          label: '黄金糕1'
        }, {
          value: '选项21',
          label: '双皮奶'
        }, {
          value: '选项31',
          label: '蚵仔煎1'
        }, {
          value: '选项41',
          label: '龙须面1'
        }, {
          value: '选项51',
          label: '北京烤鸭1'
        }],
        selected: ''
      }
    }
  }
</script>

# select

### 基本用法

:::demo
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
