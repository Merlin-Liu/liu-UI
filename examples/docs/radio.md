<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    },
    
    methods: {
      change(val) {
         console.log(val)
      }
    }
  }
</script>

# Button 按钮
在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
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
