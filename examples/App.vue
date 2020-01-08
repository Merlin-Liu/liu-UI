<template>
  <div>
    <ul>
      <li class="title">Liu-UI</li>
      <li v-for="(item, index) in componentRouters" :key="index">
        <router-link
          tag="a"
          :to="item.path"
        >{{ item.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { componentRouters } from './router.conf'

export default {
  data: () => ({
    componentRouters
  })
}
</script>

<style lang="scss">
body > div:first-child {
  width: 1000px;
  margin: 0 auto;
  & > ul {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    margin: 6px;
    padding: 0;
    li {
      display: block;
      width: 100px;
      margin: 4px 2px;
      padding: 5px;
      border: 1px dashed snow;
      list-style: none;
      text-align: center;
      font-size: 20px;
      font-weight: 900;
      background-color: rgb(204,232,207);

      &.title {
        color: red;
      }
    }
  }
  .main {
    background-color: rgb(204,232,207);
    padding: 10px 20px;
  }
}
</style>
