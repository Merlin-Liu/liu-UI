<template>
  <div>
    <ul>
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
      width: 80px;
      margin: 2px;
      padding: 5px;
      border: 1px dashed snow;
      list-style: none;
      text-align: center;
      background-color: rgb(204,232,207);
    }
  }
  .main {
    background-color: rgb(204,232,207);
    padding: 10px 20px;
  }
}
</style>
