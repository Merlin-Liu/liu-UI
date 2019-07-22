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
