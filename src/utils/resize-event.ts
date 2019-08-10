import ResizeObserver from 'resize-observer-polyfill'
import { ObserverElement } from '../../types'

const resizeHandler = function(entries: any[]) {
  for (const entry of entries) {
    const listeners = (entry.target as ObserverElement).__resizeListeners

    if (listeners) {
      listeners.map(fn => fn())
    }
  }

}

export const addResizeListener = function(element: ObserverElement, fn: Function): void {
  if (element.__resizeListeners) {
    element.__resizeListeners = []
    element.__resizeObsever = new ResizeObserver(resizeHandler)
    element.__resizeObsever.observe(element)
  }

  element.__resizeListeners.push(fn);
}
