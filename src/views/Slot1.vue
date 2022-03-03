<template>
  <!-- 对插槽模板填充数据 -->
  <SlotChild1>
    <i>icon </i>
    Delete {{ item }}
  </SlotChild1>
  
</template>

<script>
import SlotChild1 from '../components/Slot1-child.vue'
// @ is an alias to /src
export default {
  name: 'Slot',
  components: { SlotChild1 },
  data() {
    return {
      item: 'frist'
    }
  },
}
</script>

<style scoped lang="scss">

</style>