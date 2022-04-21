<template>

  <div>自定义指令 如：v-focus</div>
  <div class="border">
    <input v-focus>
  </div>

  <div>钩子参数</div>
  <div class="border">
    <div  v-my-directive:foo.bar="baz"></div>
    <div  v-my-directive:ccc.active="value"></div>
  </div>

  <div>简化形式</div>
  <div class="border">
    <div v-color="color">testcolor</div>
  </div>

  <div>传入js对象字面量</div>
  <div class="border">
    <div v-demo="{ color: 'white', text: 'hello!' }"> 传入color: 'white', text: 'hello!'</div>
  </div>

  <div>在组件上使用（不推荐）</div>
  <div class="border">
    <!-- 指令不能通过 v-bind="$attrs" 来传递给一个不同的元素。总而言之，不推荐在组件上使用自定义指令 -->
    <CDChild v-demo="{ color: 'green', text: 'hello!' }"></CDChild>
  </div>


</template>

<script>
import CDChild from '../components/CD-child.vue'

// 选项式写法
export default {
  name: 'CustomDirectives',
  components: {
    CDChild
  },
  setup() {
    return {
      //
    }
  },
  data() {
    return {
      baz: '123 这是binding的value值',
      value: '456 这是[arg]的value值',
      color: 'red',
      // test: '1111'
    }
  },
  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
    myDirective: { // 指令钩子可以提供几种钩子函数 (都是可选的)
      // 在绑定元素的 attribute 前
      // 或事件监听器应用前调用
      created(el, binding, vnode, prevVnode) {
        // 下面会介绍各个参数的细节.
        // 除了 el 外，你应该将这些参数都视为只读的
        console.log(binding);
      },
      // 在元素被插入到 DOM 前调用
      beforeMount() {},
      // 在绑定元素的父组件
      // 及他自己的所有子节点都挂载完成后调用
      mounted() {},
      // 绑定元素的父组件更新前调用
      beforeUpdate() {},
      // 在绑定元素的父组件
      // 及他自己的所有子节点都更新后调用
      updated() {},
      // 绑定元素的父组件卸载前调用
      beforeUnmount() {},
      // 绑定元素的父组件卸载后调用
      unmounted() {}
    },
    color: (el, binding) => {
      el.style.color = binding.value;
    },
    demo: (el, binding) => {
      // console.log(binding.value);
      el.style.color = binding.value.color;
      el.innerHTML = binding.value.text;
    }
  },
}

// import { mounted } from 'vue'

// 组合式API写法
// const vFocus = {
//   mounted: (el) => el.focus()
// }

</script>

<style scoped lang="scss">

</style>