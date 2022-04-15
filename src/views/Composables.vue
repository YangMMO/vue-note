<template>
  <div class="border">
    Mouse position is at: {{ x }}, {{ y }}>
  </div>
  
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Composables',
  setup(props) {
    const x = ref(0)
    const y = ref(0)
    return {
      x: x,
      y: y,
    }
  },
  methods: {
    update(event) {
      x.value = event.pageX
      y.value = event.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  // unmounted() {
  //   window.removeEventListener('mousemove', this.update)
  // },
}
</script>

<style scoped lang="scss">

</style>