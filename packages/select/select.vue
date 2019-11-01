<template>
  <div>
    <liu-input></liu-input>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
import { Component, Prop, Mixins } from 'vue-property-decorator'

// component
import LiuInput from '../input'
import LiuOption from './option.vue'

// mixin
import Emitter from '../../src/mixins/emitter'

export default {
  name: 'LiuSelect',
  components: {
    LiuInput,
    LiuOption
  }
}
</script>
