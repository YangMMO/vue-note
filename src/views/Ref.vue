<template>
  <!-- 父组件通过Ref控制子组件 -->
  <!-- 注意$refs只有渲染完成后生效 -->
  <RefChild ref="usernameInput"></RefChild>
</template>

<script>
import RefChild from '../components/ref-child.vue'

export default {
  components: { RefChild },
  name: 'Ref',
  mounted() {
    this.$refs.usernameInput.focusInput()
    this.$refs.usernameInput.clg(123)
  }
}
</script>

<style scoped lang="scss">

</style>