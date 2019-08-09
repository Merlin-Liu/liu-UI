<template>
  <label
    :class="[
      radioSize ? 'liu-radio-button--' + radioSize : '',
      {
        'is-disabled': isDisabled,
        'is-active': raidoValue === label
      }
    ]"
    class="liu-radio-button"
  >

    <input
      class="liu-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="raidoValue"
      :name="name"
      :disabled="isDisabled"
      tabindex="-1"
      @change="handleChange"
    />

    <span
      class="liu-radio-button__inner"
      :style="raidoValue === label ? activeStyle : null"
    >
      <slot/>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts">
// import { VNode } from 'vue'
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import Emitter from '../../src/mixins/emitter'
import { LiuRadioGroup } from '../../types';

@Component({
  name: 'LiuRadioButton'
})
export default class LiuRadioButton extends Mixins(Emitter) {
  @Prop({ type: [Number, String], required: true }) readonly label: number | string
  @Prop([Boolean]) readonly disabled: boolean
  @Prop([String]) readonly name: string

  parentRadioGroup: LiuRadioGroup

  private get hasParentRadioGroup(): boolean {
    let parent = this.$parent
    while(parent) {
       if (parent.$options.name === 'LiuRadioGroup') {
        this.parentRadioGroup = parent as LiuRadioGroup
        return true
      }
      else {
        parent = parent.$parent
      }
    }

    this.parentRadioGroup = {} as LiuRadioGroup
    return false
  }

  private get raidoValue(): number | string {
    return this.parentRadioGroup.value
  }
  private set raidoValue(val: number | string) {
    this.parentRadioGroup.$emit('input', val)
  }

  get isDisabled(): boolean {
    return this.disabled || this.parentRadioGroup.disabled
  }

  get radioSize(): string {
    return this.parentRadioGroup.size
  }

  get activeStyle(): object {
    const { fill = '', textColor: color = '' } = this.parentRadioGroup
    return {
      backgroundColor: fill,
      borderColor: fill,
      boxShadow: fill ? `-1px 0 0 0 ${fill}` : '',
      color
    }
  }

  created() {
    if (!this.hasParentRadioGroup) {
      console.error('liu-UI errors!', 'radio-button组件必须被radio-group包裹')
    }
  }

  handleChange(): void {
    this.$nextTick(() => {
      this.dispatch('LiuRadioGroup', 'handleChange', this.raidoValue)
    })
  }
}
</script>
