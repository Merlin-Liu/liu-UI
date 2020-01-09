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
        selected2: '',

        options3: [
          {
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
        }
        ],
        selected3: '',
      }
    }
  }
</script>

## select选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基本用法

:::demo `v-model`的值为当前被选中的`liu-option`的`value`属性值

```html
<template>
  <p>当前选择的value: {{selected}}</p>
  <liu-select v-model="selected" size="small">
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

### 禁用状态

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


### 有禁用选项

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

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

:::demo 为`liu-select`设置`clearable`属性，则可将选择器清空。

```html
<template>
  <liu-select v-model="selected3" clearable>
    <liu-option
      v-for="({label, value}, key) in options3"
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
        options3: [{
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
        selected3: ''
      }
    }
  }
</script>
```
:::

### Select Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 是否可以清空选项 | boolean | — | false |
| name | select input 的 name 属性 | string | — | — |
| placeholder | 占位符 | string | — | 请选择 |

### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Select Slots
|   name  | 说明     |
|---------|---------|
|    —    | Option 组件列表 |
| prefix  | Select 组件头部内容 |
| empty | 无选项时的列表 |

### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |
