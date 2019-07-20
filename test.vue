<template>
  <div>
    <liu-input v-model="value1" show-word-limit maxlength="10" />
    <liu-input v-model="value2" type="textarea" />
    <liu-input v-model="value3" type="textarea" autosize/>
    <liu-input v-model="value4" :autosize="{ maxRows: 10, minRows: 5 }" type="textarea"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    value1: '',
    value2: '',
    value3: '',
    value4: ''
  })
}
</script>
