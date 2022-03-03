<template>

  <PAChild 
    @change="showChange" 
    data-status="activated"
    data-s="123"
  >
  </PAChild>

</template>

<script>
import PAChild from '../components/PA-child.vue'
// @ is an alias to /src
export default {
  components: { PAChild },
  name: 'Prop-attribute',
  methods: {
    showChange(event) {
      console.log(event.target.value) // 将打印所选选项的值
    }
  }
}

</script>

<style scoped lang="scss">

</style>