<template>
  <div>
    <liu-button type="primary" round size="mini" @click="btnClick">Click Me</liu-button>
    <p>{{a}}</p>
  </div>
</template>

<script lang="ts">
// import { VNode } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import Emitter from '../../src/mixins/emitter'

@Component({
  name: 'LiuRadioButton',
  mixins: [Emitter],
})
export default class LiuRadioButton extends Vue {
  @Prop([Number, String]) readonly value: number | string
  @Prop([Number, String]) readonly label: number | string
  @Prop([String, Boolean]) readonly disabled: boolean

  _radioGriup: any

  get isGroup(): boolean {
    let parent: Vue = this.$parent
    while(parent) {
      if (parent.$options.name === 'LiuRadioGroup') {
        this._radioGriup = parent
        return true
      }
      else {
        parent = parent.$parent
      }
    }

    return false
  }

  get raidoValue(): number | string {
    return this.isGroup ? this._radioGriup.value : this.value
  }
  set raidoValue(val: number | string) {
    if (this.isGroup) {
      this.dispatch('LiuRadioGroup', 'input', val)
    }
    else
    {
      this.$emit('input', val)
    }
  }

  btnClick(): void {
  }
}
</script>
