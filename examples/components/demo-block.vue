<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <div class="description" v-if="$slots.default">
        <slot></slot>
    </div>
    <slot name="highlight"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.demo-block {
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #409eff;
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 0;
    background-color: #fff;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  strong {
    font-weight: normal;
  }

  td, th {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }

  th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: normal;
  }

  td {
    color: #333;
  }

  th:first-child, td:first-child {
    padding-left: 10px;
  }
}
</style>

