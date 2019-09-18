import { Vue, Component, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component({
  name: 'Bar'
})
export default class Bar extends Vue {
  @Prop(Boolean) readonly vertical: boolean

  render(createElement: CreateElement) {
    return createElement('div', 'i not native bar')
  }

  private get wrap(): Element {
    return (this.$parent as any).warp as Element
  }
}

