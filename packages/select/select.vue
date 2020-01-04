<template>
  <div class="liu-select">
    <liu-input></liu-input>
    <div class="liu-select-dropdown">
      <liu-scrollbar
        native tag="ul"
        wrap-class="liu-select-dropdown__wrap"
        view-class="liu-select-dropdown__list"
      >
        <slot></slot>
      </liu-scrollbar>
    </div>
  </div>
</template>

<script type="text/babel">
import { Component, Prop, Mixins } from 'vue-property-decorator'

// component
import LiuInput from '../input'
import LiuScrollbar from '../scrollbar'

// mixin
import Emitter from '../../src/mixins/emitter'

export default {
  name: 'LiuSelect',
  components: {
    LiuInput,
    LiuScrollbar
  }
}
</script>
