import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Bar'
})
export default class Bar extends Vue {
  render(h) {
    return h('div', {}, 'i not native bar')
  }
}

