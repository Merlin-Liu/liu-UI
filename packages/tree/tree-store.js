import TreeNode from './tree-node.js'

export default class TreeStore {
  constructor(options) {
    this.root = new TreeNode({
      data: options.data
    })
  }
}
