<template>
  <!-- Provide / Inject -->
  <div>
    {{ todos }}
  </div>
  <div>
    <Middleware></Middleware>
  </div>
  <button @click="click">++</button>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import Middleware from '../components/Middleware.vue'
// @ is an alias to /src
export default {
  components: { Middleware },
  name: 'Provide',
  data() {
    return {
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  // provide: {
  //   user: 'John Doe',
  //   // todoLength: this.todos.length   //示例property不起作用，会报错，必须转换为返回对象的函数
  // },
  // provide () { //provide和inject绑定非响应性
  //   return {
  //     todoLength: this.todos.length
  //   }
  // },
  provide () {  //响应写法
    return {
      todoLength: computed(() => this.todos)
    }
  },
  methods: {
    click (e) {
      this.todos.push('aa')
      console.log(this.todos)
    }
  },
  // computed: {
  //   addArray() {
  //     return this.todos.push('aa')
  //   }
  // }
}
</script>

<style scoped lang="scss">

</style>