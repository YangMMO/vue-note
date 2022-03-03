<template>
  <Inject></Inject>
</template>

<script>

import Inject from '../components/Inject.vue'

export default {
  name: 'Middleware',
  components: { Inject },
  // created() {
  //   console.log(`Injected property: ${this.user}`) // > 注入的 property: John Doe
  // },
}
</script>

