<template>
  <div class="liu-tree-node">
    <!-- content -->
    <div
      :style="{ 'padding-left': (node.level - 1) * root.indent + 'px' }"
      class="liu-tree-node__content"
    >
      <!-- expand icon -->
      <span
        :class="{
          'is-leaf': node.isLeaf,
          'is-expand': expand
        }"
        class="fa fa-chevron-circle-right liu-tree-node__expand-icon"
        @click.stop="handleExpandIconClick"
      />

      <!-- label -->
      <span>{{ node.data.label }}</span>
    </div>

    <!-- children -->
    <div v-if="expand" class="liu-tree-node_children">
      <liu-tree-node
        v-for="(child, index) in node.childNodes"
        :node="child"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiuTreeNode',
  componentName: 'LiuTreeNode',

  props: {
    node: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      expand: false
    }
  },

  watch: {
    'node.expanded'(expanded) {
      this.expand = expanded
    }
  },

  created() {
    // 设置根节点
    const parent = this.$parent
    if (parent.isRoot) {
      this.root = parent
    } else {
      this.root = parent.root
    }

    // 展开
    if (this.node.expanded) {
      this.expand = true
    }
  },

  methods: {
    handleExpandIconClick() {
      if (this.node.isLeaf) return

      this.node.expanded ? this.node.collapse() : this.node.expand()
    }
  }
}
</script>
