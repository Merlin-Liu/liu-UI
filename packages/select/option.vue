<template>
  <li class="liu-select-dropdown__item" @click="selectOptionClick">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Inject } from 'vue-property-decorator'

import Emitter from '../../src/mixins/emitter'

@Component({
  name: 'LiuOption',
})
export default class LiuOption extends Mixins(Emitter) {
  @Prop() readonly value: string | number | boolean | object
  @Prop() readonly label?: string | number
  @Prop({ type: Boolean, default: false }) readonly disable?: Boolean

  @Inject('select') select;

  private get isObject(): boolean {
    return (Object.prototype as any).toString.call(this.value).toLowerCase() === '[object object]'
  }

  private get currentLabel(): any {
    return this.label || (this.isObject ? '' : this.value)
  }



  private selectOptionClick() {
    this.dispatch('LiuSelect', 'handleOptionClick', [this, true])
  }

  public created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
  }
}
</script>
