<template>
  <!-- 并非真实的forceUpdate示例(失败了)，只是如果页面出现了未更新的情况，可以使用this.$forceUpdate() -->
  <ForceUpdate :info="info"></ForceUpdate>
</template>

<script>
import ForceUpdate from '../components/forceUpdate.vue'
export default {
  name: 'DomUpdate',
  components: { ForceUpdate },
  data() {
    return {
      info: {}
    }
  },
  // methods: {
    
  // },

}
</script>

<style scoped lang="scss">

</style>