<template>
  <!-- <div>{{ title }}</div> -->
  <CustomInput
    :model-value="searchText"
    @update:model-value="searchText = $event"
   ></CustomInput>
</template>

<script>
import { reactive, toRefs } from 'vue'
import CustomInput from '../components/Input.vue'
// @ is an alias to /src
export default {
  components: { CustomInput },
  name: 'V-model',
  data () {
    return {
      searchText: 456,
      text: '123'
    }
  },
  updated() {
    console.log('num:' + this.searchText);
  },
  created() {
    console.log(this.title)
  },
  setup(props) {
    
  }
}
</script>

<style scoped lang="scss">

</style>