import ResizeObserver from 'resize-observer-polyfill'

export declare class ObserverElement extends Element {
  target: Element

  __resizeListeners: Function[]

  __resizeObsever: ResizeObserver
}
