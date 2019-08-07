<template>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LiuRadioButton extends Vue {
  name: 'LiuRadioButton'

  @Prop(Number) readonly propA: number
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean

  created() {}
}
</script>
