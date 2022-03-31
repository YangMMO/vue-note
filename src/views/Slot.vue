<template>
  <!-- 对插槽模板填充数据 -->
  <SlotChild>
    <!-- v-slot: 可缩写 # 指定插入位置 -->
    <template v-slot:SlotName>  
      <alert-box>
        Something bad happened 直接使用插槽.
      </alert-box>
    </template>
  </SlotChild>
  
</template>

<script>
import SlotChild from '../components/Slot-child.vue'
// @ is an alias to /src
export default {
  name: 'Slot',
  components: { SlotChild }
}
</script>

<style scoped lang="scss">

</style>