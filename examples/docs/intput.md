<script>
export default {
  data () {
    return {
      value: '100000',
      input: '禁用状态',
      clearableValue: '',
      inputIcon: '',
      password: '123',
      input1: '',
      input2: '',
      textarea: '',
      textarea1: ''
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
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: ''
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
</template>

<script>
export default {
  data () {
    return {
      textarea1: ''
    }
  }
}
</script>
```

:::
