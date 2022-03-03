<template>
  <CustomInput :model-value="444" >
  </CustomInput>
</template>

<script>
import CustomInput from '../components/Input.vue'

export default {
  components: { CustomInput },
  name: 'Prop',
  created() {
    // console.log(this.passParameters.currentTab)
  },
  updated() {
    console.log('num:' + this.searchText);
  },
}
</script>

<style scoped lang="scss">

</style>