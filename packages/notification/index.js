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
}

Notification.closeAll = function() {
  for (let i = instanceArray.length - 1; i >= 0; i--) {
    instanceArray[i].close();
  }
}

export default Notification
