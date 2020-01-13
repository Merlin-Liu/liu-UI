## Tag 标签

用于标记和选择。

### 基础用法

:::demo 由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

```html
<template>
  <liu-tag>标签一</liu-tag>
  <liu-tag type="success">标签二</liu-tag>
  <liu-tag type="info">标签三</liu-tag>
  <liu-tag type="warning">标签四</liu-tag>
  <liu-tag type="danger">标签五</liu-tag>
</template>
```
:::

### 可移除标签

:::demo 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

```html
<template>
  <liu-tag closeable>标签一</liu-tag>
  <liu-tag type="success" closeable>标签二</liu-tag>
  <liu-tag type="info" closeable>标签三</liu-tag>
  <liu-tag type="warning" closeable>标签四</liu-tag>
  <liu-tag type="danger" closeable>标签五</liu-tag>
</template>
```
:::

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
  <liu-tag closeable>默认标签</liu-tag>
  <liu-tag size="medium" closeable>中等标签</liu-tag>
  <liu-tag size="small" closeable>小型标签</liu-tag>
  <liu-tag size="mini" closeable>超小标签</liu-tag>
</template>
```
:::

### 不同主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`

:::demo 通过设置`effect`属性来改变主题，默认为 `light`
```html
<template>
  <div>
    <span>light</span>
    <liu-tag>标签一</liu-tag>
    <liu-tag type="success">标签二</liu-tag>
    <liu-tag type="info">标签三</liu-tag>
    <liu-tag type="warning">标签四</liu-tag>
    <liu-tag type="danger">标签五</liu-tag>
  </div>
  <br>
  <div>
    <span style="width: 45px">drak</span>
    <liu-tag effect="dark">标签一</liu-tag>
    <liu-tag type="success" effect="dark">标签二</liu-tag>
    <liu-tag type="info" effect="dark">标签三</liu-tag>
    <liu-tag type="warning" effect="dark">标签四</liu-tag>
    <liu-tag type="danger" effect="dark">标签五</liu-tag>
  </div>
  <br>
  <div>
    <span style="width: 45px">plain</span>
    <liu-tag effect="plain">标签一</liu-tag>
    <liu-tag type="success" effect="plain">标签二</liu-tag>
    <liu-tag type="info" effect="plain">标签三</liu-tag>
    <liu-tag type="warning" effect="plain">标签四</liu-tag>
    <liu-tag type="danger" effect="plain">标签五</liu-tag>
  </div>
</template>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | success/info/warning/danger | — |
| closeable | 是否可关闭 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| effect | 主题 | string | dark / light / plain | light |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |
