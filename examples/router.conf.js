import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const COMPOENENT_NAME_MAP = {
  alert: '警告',
  button: '按钮',
  input: '输入框',
  loading: '加载效果',
  notification: '通知',
  radio: '单选框',
  scrollbar: '滚动条',
  select: '选择器',
  tag: '标签',
  tree: '树形控件'
}

const context = require.context('./docs', false, /\.md$/)
const componentRouterList = context.keys().map(url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('.')
  const name = url.substring(start + 1, end)
  const path = `/${name}`

  return {
    path,
    name: COMPOENENT_NAME_MAP[name],
    component: require(`./docs${path}.md`).default
  }
})
componentRouterList.unshift({
  path: '/',
  name: '首页',
  redirect: '/alert'
})

export const componentRouters = componentRouterList

export default new Router({
  routes: componentRouterList
});

