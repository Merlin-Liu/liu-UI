<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'

// component
import LiuOption from './option.vue'

// mixin
import Emitter from '../../src/mixins/emitter'

@Component({
  name: 'LiuSelect',
  components: {
    LiuOption
  }
})
export default class LiuSelect extends Mixins(Emitter) {
}
</script>
