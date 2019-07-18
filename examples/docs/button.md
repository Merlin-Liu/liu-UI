## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

使用的icon来自，Font Awesome图标库。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```html
<template>
  <div>
    <liu-button>默认按钮</liu-button>
    <liu-button type="primary">主要按钮</liu-button>
    <liu-button type="success">成功按钮</liu-button>
    <liu-button type="info">信息按钮</liu-button>
    <liu-button type="warning">警告按钮</liu-button>
    <liu-button type="danger">危险按钮</liu-button>
  </div>

  <div>
    <liu-button plain>默认按钮</liu-button>
    <liu-button type="primary" plain>主要按钮</liu-button>
    <liu-button type="success" plain>成功按钮</liu-button>
    <liu-button type="info" plain>信息按钮</liu-button>
    <liu-button type="warning" plain>警告按钮</liu-button>
    <liu-button type="danger" plain>危险按钮</liu-button>
  </div>

  <div>
    <liu-button round>默认按钮</liu-button>
    <liu-button type="primary" round>主要按钮</liu-button>
    <liu-button type="success" round>成功按钮</liu-button>
    <liu-button type="info" round>信息按钮</liu-button>
    <liu-button type="warning" round>警告按钮</liu-button>
    <liu-button type="danger" round>危险按钮</liu-button>
  </div>

  <div>
    <liu-button circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="primary" circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="success" circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="info" circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="warning" circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="danger" circle>
      <i class="fa fa-address-book"></i>
    </liu-button>
  </div>
</template>
```
:::

### 禁用状态

按钮不可用状态

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html
<template>
  <div>
    <liu-button disabled>默认按钮</liu-button>
    <liu-button type="primary" disabled>主要按钮</liu-button>
    <liu-button type="success" disabled>成功按钮</liu-button>
    <liu-button type="info" disabled>信息按钮</liu-button>
    <liu-button type="warning" disabled>警告按钮</liu-button>
    <liu-button type="danger" disabled>危险按钮</liu-button>
  </div>

  <div>
    <liu-button plain disabled>默认按钮</liu-button>
    <liu-button type="primary" plain disabled>主要按钮</liu-button>
    <liu-button type="success" plain disabled>成功按钮</liu-button>
    <liu-button type="info" plain disabled>信息按钮</liu-button>
    <liu-button type="warning" plain disabled>警告按钮</liu-button>
    <liu-button type="danger" plain disabled>危险按钮</liu-button>
  </div>

  <div>
    <liu-button circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="primary" circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="success" circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="info" circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="warning" circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
    <liu-button type="danger" circle disabled>
      <i class="fa fa-address-book"></i>
    </liu-button>
  </div>
</template>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo
```html
<template>
  <liu-button type="text">文字按钮</liu-button>
  <liu-button type="text" disabled>文字按钮</liu-button>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
```html
<template>
  <liu-button>默认尺寸</liu-button>
  <liu-button size="medium">中等尺寸</liu-button>
  <liu-button size="small">小型尺寸</liu-button>
  <liu-button size="mini">迷你尺寸</liu-button>
</template>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
