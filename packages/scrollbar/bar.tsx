import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Bar'
})
export default class Bar extends Vue {
  private render() {
    return <div></div>
  }
}

