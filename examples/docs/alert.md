<style>
  .demo-block .liu-alert {
    margin-bottom: 20px;
  }
</style>

<script>
  export default {
    methods: {
      hello() {
        this.$notify.warning({
          title: 'hello',
          message: 'hello world'
        })
      }
    }
  }
</script>

## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <liu-alert title="成功提示的文案" type="success"></liu-alert>
  <liu-alert title="消息提示的文案" type="info"></liu-alert>
  <liu-alert title="警告提示的文案" type="warning"></liu-alert>
  <liu-alert title="错误提示的文案" type="error"></liu-alert>
</template>
```
:::

### 主题

Alert 组件提供了两个不同的主题：`light`和`dark`。

:::demo 通过设置`effect`属性来改变主题，默认为`light`。
```html
<template>
  <liu-alert title="成功提示的文案" type="success" effect="dark"></liu-alert>
  <liu-alert title="消息提示的文案" type="info" effect="dark"></liu-alert>
  <liu-alert title="警告提示的文案" type="warning" effect="dark"></liu-alert>
  <liu-alert title="错误提示的文案" type="error" effect="dark"></liu-alert>
</template>
```
:::

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

:::demo 在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`true`。你可以设置`close-text`属性来代替右侧的关闭图标，注意：`close-text`必须为文本。设置`close`事件来设置关闭时的回调。
```html
<template>
  <liu-alert title="不可关闭的 alert" type="success" :closable="false"></liu-alert>
  <liu-alert title="自定义 close-text" type="info" close-text="知道了"></liu-alert>
  <liu-alert title="设置了回调的 alert" type="warning" @close="hello"></liu-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        this.$notify.warning('hello world')
      }
    }
  }
</script>
```
:::

### 带有 icon

表示某种状态时提升可读性。

:::demo 通过设置`show-icon`属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
```html
<template>
  <liu-alert title="成功提示的文案" type="success" show-icon></liu-alert>
  <liu-alert title="消息提示的文案" type="info" show-icon></liu-alert>
  <liu-alert title="警告提示的文案" type="warning" show-icon></liu-alert>
  <liu-alert title="错误提示的文案" type="error" show-icon></liu-alert>
</template>
```
:::

### 文字居中

使用 `center` 属性让文字水平居中。

:::demo
```html
<template>
  <liu-alert title="成功提示的文案" type="success" center show-icon></liu-alert>
  <liu-alert title="消息提示的文案" type="info" center show-icon></liu-alert>
  <liu-alert title="警告提示的文案" type="warning" center show-icon></liu-alert>
  <liu-alert title="错误提示的文案" type="error" center show-icon></liu-alert>
</template>
```
:::

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

:::demo 除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
```html
<template>
  <liu-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  </liu-alert>
  <liu-alert
    title="带辅助性文字介绍"
    type="error"
    effect="dark"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  </liu-alert>
</template>
```
:::

### 带有`icon`和辅助性文字介绍

:::demo 最后，这是一个同时具有 icon 和辅助性文字的样例。
```html
<template>
  <liu-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </liu-alert>
  <liu-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </liu-alert>
  <liu-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </liu-alert>
  <liu-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </liu-alert>
</template>
```
:::
