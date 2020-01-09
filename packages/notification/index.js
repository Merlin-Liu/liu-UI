import Vue from 'vue'
import NotificationVue from './notification.vue'

const NotificationConstructor = Vue.extend(NotificationVue)

const instanceArray = []
let seed = 0

function Notification(options = {}) {
  if (Vue.prototype.$isServer) return

  const id = 'liu-notification-' + seed++
  const userOnClose = options.onClose
  options.onClose = () => {
    Notification.close(id, userOnClose)
  }

  const instance = new NotificationConstructor({data: options})
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true

  // 同时存在多个Notification，顺序从上向下排列
  let verticalOffset = options.offset || 0
  const position = options.position || 'top-right'
  instanceArray.filter(i => i.position === position).forEach(item => {
    verticalOffset += (item.$el.offsetHeight + 16)
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  instanceArray.push(instance)
  return instance
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type;
    return Notification(options);
  }
})

Notification.close = function(id, userOnClose) {
  const len = instanceArray.length
  let index = -1
  const instance = instanceArray.filter((instance, i) => {
    if (instance.id === id) {
      index = i
      return true
    } else {
      return false
    }
  })[0]

  if (!instance) return

  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }

  instanceArray.splice(index, 1)

  // 存在多个Notification排列的情况
  // close中间的Notification，该Notify下面的Notify整体要移动，顶上来
  if (len <= 1) return
  const position = instance.position
  const removedNotifyHeight = instance.$el.offsetHeight
  for (let i = index; i < len - 1; i++) { // i = index；从删除的地方开始向下循环，上面的不需要移动
    if (instanceArray[i].position === position) {
      const updatedTop = parseInt(instanceArray[i].$el.style.top, 10) - removedNotifyHeight - 16 + 'px'
      instanceArray[i].$el.style.top = updatedTop
    }
  }
}

Notification.closeAll = function() {
  for (let i = instanceArray.length - 1; i >= 0; i--) {
    instanceArray[i].close();
  }
}

export default Notification
