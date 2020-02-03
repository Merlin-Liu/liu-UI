export default function(instance, callback, speed = 300, once = false) {
  if (!instance || !callback) return

  let called = false
  const afterLevelCallback = function() {
    if (called) return

    called = true
    callback && callback.apply(null, arguments)
  }

  if (once) {
    instance.$once('after-level', afterLevelCallback)
  } else {
    instance.$on('after-level', afterLevelCallback)
  }

  setTimeout(() => {
    afterLevelCallback()
  }, speed + 100)
}
