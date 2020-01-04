<template>
  <div class="container">
    <ul class="left-slider">
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
  .container {
    width: 960px;
    margin: 0 auto;
    .left-slider {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>
