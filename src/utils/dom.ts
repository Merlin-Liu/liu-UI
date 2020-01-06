import Vue from 'vue'

const isServer = Vue.prototype.$isServer

export const on = (function(): Function {
  // 服务端渲染情况
  if (isServer) {
    return () => {}
  }

  if (document.addEventListener) {
    return function (element, eventName, handler) {
      if (element && eventName && handler) {
        element.addEventListener(eventName, handler, false)
      }
    }
  }
  else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    }
  }

})()
