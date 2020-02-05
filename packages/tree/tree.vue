<template>
  <div class="liu-tree">
    <liu-tree-node
      v-for="(child, index) in rootData.childNodes"
      :node="child"
      :key="index"
    />
  </div>
</template>

<script>
import TreeStore from './tree-store'

import LiuTreeNode from './tree-node.vue'

export default {
  name: 'LiuTree',

  components: {
    LiuTreeNode
  },

  props: {
    data: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default() {
        return {}
      }
    },
    indent: {
      type: Number,
      default: 18
    }
  },

  data() {
    return {
      rootData: null
    }
  },

  created() {
    this.isRoot = true

    this.store = new TreeStore({data: this.data})
    this.rootData = this.store.root
  },

  mounted() {
    console.log(this.rootData)
  }
}
</script>
