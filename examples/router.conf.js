import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const context = require.context('./docs', false, /\.md$/)
const componentRouters = context.keys().map(url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('.')
  const name = url.substring(start + 1, end)
  const path = `/${name}`

  return {
    path,
    name,
    component: require(`./docs${path}.md`).default
  }
})

export default new Router({
  routes: [
    ...componentRouters
  ]
});

