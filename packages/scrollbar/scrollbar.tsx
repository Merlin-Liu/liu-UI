import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import { VNode, CreateElement } from 'vue'

import { warpJSX } from './element'

@Component({
  name: 'LiuScorllbar'
})
export default class LiuScorllbar extends Vue {
  @Prop(Boolean) readonly native: boolean
  @Prop(Boolean) readonly noresize: boolean // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  @Prop({ type: Object, default: {} }) readonly wrapStyle: object
  @Prop(String) readonly wrapClass: string
  @Prop({ type: Object, default: {} }) readonly viewStyle: object
  @Prop(String) readonly viewClass: string
  @Prop({ type: String, default: 'div'}) readonly tag: string

  private sizeWidth: '0'
  private sizeHeight: '0'
  private moveX: 0
  private moveY: 0

  private get warp(): Element {
    return this.$refs.warp as Element
  }

  private render(createElement: CreateElement) {
    const style = this.wrapStyle

    const view = createElement(this.tag, {
      class: ['liu-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default)

    const wrap:JSX.Element = warpJSX
  }

  private handleScroll(): void {

  }
}

