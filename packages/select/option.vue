<template>
  <li
    class="liu-select-dropdown__item"
    :class="{'is-disabled': disabled}"
    @click.stop="selectOptionClick"
  >
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
  @Prop({ type: Boolean, default: false }) readonly disabled?: Boolean

  @Inject('select') select;

  private get isObject(): boolean {
    return (Object.prototype as any).toString.call(this.value).toLowerCase() === '[object object]'
  }

  public get currentLabel(): any {
    return this.label || (this.isObject ? '' : this.value)
  }

  // 这里需要阻止事件向上冒泡，否则会触发父级的事件
  private selectOptionClick() {
    if (!this.disabled) {
      this.dispatch('LiuSelect', 'handleOptionClick', [this, true])
    }
  }

  public created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
  }
}
</script>
