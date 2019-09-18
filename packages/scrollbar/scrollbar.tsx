import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import { VNode, CreateElement, VNodeChildren } from 'vue'

import Bar from './bar.tsx'

// import { warpJSX } from './element'

@Component({
  name: 'LiuScrollBar',
  components: {
    Bar
  }
})
export default class LiuScrollBar extends Vue {
  @Prop(Boolean) readonly native: boolean
  @Prop(Boolean) readonly noresize: boolean // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  @Prop({ type: Object }) readonly wrapStyle?: object
  @Prop(String) readonly wrapClass: string
  @Prop({ type: Object }) readonly viewStyle?: object
  @Prop(String) readonly viewClass: string
  @Prop({ type: String, default: 'div'}) readonly tag: string

  private sizeWidth: '0'
  private sizeHeight: '0'
  private moveX: 0
  private moveY: 0

  private get warp(): Element {
    return this.$refs.warp as Element
  }

  private render(h: CreateElement) {
    const style = this.wrapStyle

    const view = h(this.tag, {
      class: ['liu-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize',
    }, this.$slots.default)

    const wrap= (
      <div
        ref="wrap"
        style={ style }
        onScroll={ this.handleScroll }
        class={ [this.wrapClass, 'liu-scrollbar__wrap'] }>
        { [view] }
      </div>
    )

    let nodes: Array<VNodeChildren>
    if (!this.native) {
      nodes = [ wrap, <Bar/>, <Bar/> ]
    }
    else {
      nodes = [
        <div
          ref="wrap"
          style={ style }
          class={ [this.wrapClass, 'liu-scrollbar__wrap'] }>
          { [view] }
        </div>
      ]
    }

    return h('div', {class: 'liu-scrollbar'}, nodes)
  }

  private handleScroll(): void {
    console.log('scoll!')
  }
}

