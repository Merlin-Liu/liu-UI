import ResizeObserver from 'resize-observer-polyfill'
import { ObserverElement } from '../../types'

const resizeHandler:ResizeObserverCallback = function(entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    const listeners = (entry.target as ObserverElement).__resizeListeners

    if (listeners) {
      listeners.map(fn => fn())
    }
  }
}

export const addResizeListener = function(element: ObserverElement, fn: Function): void {
  if (!element.__resizeListeners) {
    element.__resizeListeners = []
    element.__resizeObsever = new ResizeObserver(resizeHandler)
    element.__resizeObsever.observe(element)
  }

  element.__resizeListeners.push(fn);
}

export const removeResizeListener = function(element: ObserverElement, fn: Function): void {
  if (!element || !element.__resizeListeners) return

  element.__resizeListeners.splice(element.__resizeListeners.indexOf(fn), 1)

  if (!element.__resizeListeners) element.__resizeObsever.disconnect()
}
