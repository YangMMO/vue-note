<template>
  <!-- 对插槽模板填充数据 -->
  <SlotChild1>
    <i>icon </i>
    Delete {{ item }}
  </SlotChild1>

  <div>————————————————————————————————</div>

  <!-- 具名插槽：指定传到哪个插槽 -->
  <!-- 只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法 -->
  <SlotChild2>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
    <!-- 不带name的默认default -->
    <template v-slot:default> 
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </SlotChild2>

  <div>————————————————————————————————</div>

  <!-- v-slot:default="slotProps" 是定义插槽prop名字 -->
  <!-- 不带default这类参数的v-slot被假定对应默认插槽 -->
  <div>定义插槽prop名字</div>
  <SlotChild3>
    <template v-slot:default="slotProps">
      <i>icon </i>
      <span>{{ slotProps.item }}</span>
      <span > // {{slotProps.value}}</span>
    </template>
  </SlotChild3>

  <div>————————————————————————————————</div>

  <!-- 解构prop，将index 重命名为 i, =为定义备用内容，如果index找不到则使用备用-->
  <div>解构</div>
  <SlotChild3 v-slot="{ index : i = 'undef..'}">
      <i>icon </i>
      <span>{{ i }}</span>
  </SlotChild3>

  <div>————————————————————————————————</div>

  <!--  赋值abc -->
  <div>动态参数</div>
  <SlotChild4>
    <template v-slot:[abc]>
      <div>我是语法糖和动态插槽</div>
    </template>
  </SlotChild4>
  <button @click="click">{{ abc == "main" ? 'switch header ': 'switch main' }}</button>
</template>

<script>
import SlotChild1 from '../components/Slot1-child1.vue'
import SlotChild2 from '../components/Slot1-child2.vue'
import SlotChild3 from '../components/Slot1-child3.vue'
import SlotChild4 from '../components/Slot1-child4.vue'
// @ is an alias to /src
export default {
  name: 'Slot',
  components: { SlotChild1, SlotChild2, SlotChild3, SlotChild4 },
  data() {
    return {
      item: 'frist',
      abc: "main",
    }
  },
  methods: {
    ccc (e) {
      console.log(e)
    },
    click (e) {
      if( this.abc === 'main') {
        this.abc = 'header'
        console.log('header');
      } else {
        this.abc = "main"
        console.log('main');
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>