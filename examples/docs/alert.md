<style>
  .liu-alert {
    margin-bottom: 20px;
  }
</style>

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
