import Vue from 'vue'
import {on} from '@/src/utils/dom'

const LISTENTIP = '@@clickoutTip'

const listenedClickoutEleList = []
let startClickEvent
let seed = 0

// 鼠标事件监听
if (!Vue.prototype.$isServer) {
  on(document, 'mousedown', event => {
    startClickEvent = event
  })

  on(document, 'mouseup', event => {
    listenedClickoutEleList.forEach(element => {
      element[LISTENTIP].documentHandler(event, startClickEvent)
    })
  })
}

function createDocumentHandler(element, binding, vnode) {
  return (mouseupEvent = {}, mousedownEvent = {}) => {
    element[LISTENTIP].bindingFn()
  }
}

// clickout指令
// v-clickout="handleClickout"
// 点击组件外外触发
export default {
  bind(element, binding, vnode) {
    listenedClickoutEleList.push(element)
    const id = seed++
    element[LISTENTIP] = {
      id,
      documentHandler: createDocumentHandler(element, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },

  update(element, binding, vnode) {
    element[LISTENTIP].documentHandler = createDocumentHandler(element, binding, vnode)
    element[LISTENTIP].methodName = binding.expression
    element[LISTENTIP].bindingFn = binding.bindingFn
  },

  unbind(element) {
    const len = listenedClickoutEleList.length
    for (let i = 0; i < len; i++) {
      if (listenedClickoutEleList[i][LISTENTIP].id === element[LISTENTIP].id) {
        listenedClickoutEleList.splice(i, 1)
        break
      }
    }

    delete element[LISTENTIP]
  }
}

