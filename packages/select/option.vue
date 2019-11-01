<template>
  <li>
    <slot>{{ currentLabel }}</slot>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'

import Emitter from '../../src/mixins/emitter'

@Component({
  name: 'LiuOption'
})
export default class LiuOption extends Mixins(Emitter) {
  @Prop() readonly value: string | number | boolean | object
  @Prop() readonly label?: string | number
  @Prop({ type: Boolean, default: false }) readonly disable?: Boolean

  private get isObject(): boolean {
    return (Object.prototype as any).toString.call(this.value).toLowerCase() === '[object object]'
  }

  private get currentLabel(): any {
    return this.label || (this.isObject ? '' : this.value)
  }
}
</script>
