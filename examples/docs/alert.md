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
