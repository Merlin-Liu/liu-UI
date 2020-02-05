import objectMerge from '@/src/utils/merge'

export default class TreeNode {
  constructor(options) {
    this.data = null
    this.childNodes = []
    this.level = 0
    this.expanded = false // 子节点是否展开

    for (const key in options) {
      this[key] = options[key]
    }

    options.data && this.setData(options.data)
  }

  setData(data) {
    this.data = data

    const children = this.getChildren()
    for (let i = 0, len = children.length; i < len; i++) {
      this.insertChild({data: children[i]})
    }

    // 是否为叶子节点标识
    this.isLeaf = this.childNodes.length === 0
  }

  insertChild(child) {
    const children = this.getChildren()
    if (children.indexOf(child.data) === -1) {
      children.push(child.data)
    }

    objectMerge(child, {
      parent: this,
      level: this.level + 1
    })

    this.childNodes.push(new TreeNode(child))
  }

  getChildren() {
    const data = this.data

    if (this.level === 0) {
      return data
    }

    if (!data.children) {
      return []
    }

    return data.children
  }

  expand() {
    this.expanded = true
  }

  collapse() {
    this.expanded = false
  }
}
