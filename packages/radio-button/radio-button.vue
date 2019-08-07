<template>
  <div>
    <liu-button type="primary" round size="mini" @click="btnClick">Click Me</liu-button>
    <p>{{a}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LiuRadioButton extends Vue {
  name: 'LiuRadioButton'

  @Prop(Number) readonly propA: number
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean

  a: boolean = false

  get isGroup(): boolean {
    return this.a
  }

  set isGroup(val: boolean) {
    this.a = val
  }

  btnClick(): void {
    this.a = !this.a
  }
}
</script>
