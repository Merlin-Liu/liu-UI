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
body {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

body > div:first-child {
  position: relative;
  width: 1200px;
  margin: 0 auto;

  & > ul {
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 0 6px;
    padding: 0;
    background-color: rgb(204,232,207);
    li {
      display: block;
      width: 110px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;

      &.title {
        color: #F56c6c;
        font-size: 20px;
        font-weight: bold;
      }

      & > a {
        &.router-link-active {
          color: #F56c6c;
          text-decoration: underline;
        }
      }
    }
  }

  .main {
    min-height: 100vh;
    margin-left: 130px;
    padding: 10px 20px;
    background-color: rgb(204,232,207);

    > p {
      color: #909399;
    }
  }
}

.language-javascript {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
}
</style>
