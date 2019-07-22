<style>
.demo-block .liu-input {
  width: 180px;
  margin-right: 15px;
}
.demo-block .liu-input-group {
  width: 100%;
}
.demo-block .liu-input:not(:last-child) {
  margin-bottom: 10px;
}
.demo-block .liu-textarea:not(:last-child) {
  margin-bottom: 10px;
}
</style>

<script>
export default {
  data () {
    return {
      value: '100000',
      input: '',
      clearableValue: '',
      inputIcon: '',
      password: '1234',
      input1: '',
      input2: '',
      input5: '',
      input3: '',
      input6: '',
      input7: '',
      input8: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: ''
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
  <liu-input v-model="input" disabled placeholder="请输入内容"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
```

:::

## 密码框

:::demo
```html
<template>
  <liu-input v-model="password" type="password"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      password: '1234'
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
  <liu-input v-model="inputIcon" clearable>
    <i class="fa fa-id-card-o" slot="prefix"></i>
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

## 复合型输入框

可前置元素或后置元素

:::demo 可以通过 slot `prepend`、`append` 来放置前置或后置内容。

```html
<template>
  <liu-input v-model="input1">
    <template slot="prepend">https://</template>
    <template slot="append">.com</template>
  </liu-input>

  <liu-input v-model="input2">
    <template slot="prepend"><liu-button>btn</liu-button></template>
  </liu-input>
  
  <liu-input v-model="input3">
      <template slot="append"><liu-button>btn</liu-button></template>
    </liu-input>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
```

:::

##  尺寸

:::demo 提供`size`属性控制输入框尺寸，除了默认的尺寸外，还提供`medium`、`small`、`nimi`三种尺寸。

```html
<template>
  <liu-input v-model="input5">
    <i class="fa fa-id-card-o" slot="prefix"></i>
  </liu-input>
  <liu-input v-model="input6" size="medium">
    <i class="fa fa-id-card-o" slot="prefix"></i>
  </liu-input>
  <liu-input v-model="input7" size="small">
    <i class="fa fa-id-card-o" slot="prefix"></i>
  </liu-input>
  <liu-input v-model="input8" size="mini">
    <i class="fa fa-id-card-o" slot="prefix"></i>
  </liu-input>
</template>

<script>
export default {
  data () {
    return {
      input5: '',
      input6: '',
      input7: '',
      input8: ''
    }
  }
}
</script>
```

:::

## 文本域

用于输入多行文本信息，通过将`type`属性的值指定为`textarea`。

:::demo 可通过textarea的原生属性`rows`控制文本域高度。

```html
<template>
  <p>textarea: {{textarea}}</p>
  <liu-input :rows="10" v-model="textarea" type="textarea" placeholder="请输入内容"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      textarea: ''
    }
  }
}
</script>
```

:::

## 自动调整文本域

可通过`autosize`设置文本域跟随自适应文本内容，`autosize`还可以设置为一个对象，指定最大行和最小行。

:::demo

```html
<template>
  <p>textarea: {{textarea1}}</p>
  <liu-input autosize v-model="textarea1" type="textarea" placeholder="请输入内容"></liu-input>
  <liu-input :autosize="{maxRows: 6, minRows: 4}" v-model="textarea2" type="textarea" placeholder="请输入内容"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
```

:::

## 输入长度限制

可通过`autosize`设置文本域跟随自适应文本内容，`autosize`还可以设置为一个对象，指定最大行和最小行。

:::demo

```html
<template>
  <liu-input
    maxlength="10"
    show-word-limit
    v-model="textarea3"
    placeholder="请输入内容"
    ></liu-input>
  <liu-input type="textarea"  maxlength="10" show-word-limit v-model="textarea4" placeholder="请输入内容"></liu-input>
</template>

<script>
export default {
  data () {
    return {
      textarea3: '',
      textarea4: ''
    }
  }
}
</script>
```

:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | medium / small / mini  | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |
| tabindex | 输入框的tabindex | string | - | - |

### Input Slots
| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

### Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |
