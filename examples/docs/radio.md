<script>
  export default {
    data () {
      return {
        radio: '1',
        radio1: '3',
        radio2: '广州',
        radio3: '1',
        radio4: '1',
        radio5: '1',
        radio6: '1',
        radio7: '深圳',
        radio8: '上海',
        radio9: '西二旗'
      }
    },
    
    methods: {
      change(val) {
         console.log(val)
      }
    }
  }
</script>

<style>
  .demo-block .liu-radio-group {
    display: block;
    margin-bottom: 10px;
  }
</style>

# 单选框
在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用`Select`选择器。

:::demo 要使用`Radio`组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应`Radio label`属性的值，`label`可以是`String、Number`或`Boolean`。
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

:::demo 结合`liu-radio-group`元素和子元素`liu-radio`可以实现单选组，在`liu-radio-group`中绑定`v-model`，在`liu-radio`中设置好`label`即可，无需再给每一个`liu-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数value。
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

### 按钮样式

按钮样式的单选组合。

:::demo 只需要把`liu-radio`元素换成`liu-radio-button`元素即可，此外，`Liu-UI`还提供了`size`属性。
```html
<template>
  <p>radio2：{{radio2}}</p>
  <liu-radio-group v-model="radio2" @change="change">
    <liu-radio-button label="广州" disabled></liu-radio-button>
    <liu-radio-button label="深圳"></liu-radio-button>
    <liu-radio-button label="上海"></liu-radio-button>
    <liu-radio-button label="西二旗"></liu-radio-button>
  </liu-radio-group>

  <liu-radio-group v-model="radio7" size="medium" @change="change">
    <liu-radio-button label="广州" disabled></liu-radio-button>
    <liu-radio-button label="深圳"></liu-radio-button>
    <liu-radio-button label="上海"></liu-radio-button>
    <liu-radio-button label="西二旗"></liu-radio-button>
  </liu-radio-group>

  <liu-radio-group v-model="radio8" size="small" @change="change">
    <liu-radio-button label="广州" disabled></liu-radio-button>
    <liu-radio-button label="深圳"></liu-radio-button>
    <liu-radio-button label="上海"></liu-radio-button>
    <liu-radio-button label="西二旗"></liu-radio-button>
  </liu-radio-group>

  <liu-radio-group v-model="radio9" size="mini" @change="change">
    <liu-radio-button label="广州" disabled></liu-radio-button>
    <liu-radio-button label="深圳"></liu-radio-button>
    <liu-radio-button label="上海"></liu-radio-button>
    <liu-radio-button label="西二旗"></liu-radio-button>
  </liu-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio2: '广州',
        radio7: '深圳',
        radio8: '上海',
        radio9: '西二旗'
      }
    }
  }
</script>
```
:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的单选框。
```html
<template>
  <div>
    <liu-radio v-model="radio3" label="1" border>备选项1</liu-radio>
    <liu-radio v-model="radio3" label="2" border>备选项2</liu-radio>
  </div>
  <div style="margin-top: 20px">
    <liu-radio v-model="radio4" label="1" border size="medium">备选项1</liu-radio>
    <liu-radio v-model="radio4" label="2" border size="medium">备选项2</liu-radio>
  </div>
  <div style="margin-top: 20px">
    <liu-radio-group v-model="radio5" size="small">
      <liu-radio label="1" border>备选项1</liu-radio>
      <liu-radio label="2" border disabled>备选项2</liu-radio>
    </liu-radio-group>
  </div>
  <div style="margin-top: 20px">
    <liu-radio-group v-model="radio6" size="mini" disabled>
      <liu-radio label="1" border>备选项1</liu-radio>
      <liu-radio label="2" border>备选项2</liu-radio>
    </liu-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: '1',
        radio4: '1',
        radio5: '1',
        radio6: '1',
      }
    }
  }
</script>
```
:::

### error examples

:::demo 
```html
<template>
  <liu-radio-button label="err"></liu-radio-button>
</template>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
