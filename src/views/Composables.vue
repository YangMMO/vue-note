<template>

  <div>组合式API</div>
  <div class="border">
    Mouse1 position is at: {{ x }}, {{ y }}>(ref)
    <br>
    Mouse2 position is at: {{ mouse.x }}, {{ mouse.y }}>(reactive)
  </div>

  <div>请求静态链接示例</div>
  <div class="border">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded: 此处只显示了data[0]
      <pre>{{ data[0] }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>

  <div>异步状态示例</div>
  <div>请求动态URL</div>
  <div class="border">
    Load post id: 
    <button v-for="i in 5" @click="id = i">{{ i }}</button>
    <div>{{ url }}</div>

    <div v-if="error1">
      <p>Oops! Error encountered: {{ error1.message }}</p>
      <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data1">Data loaded: <pre>{{ data1 }}</pre></div>
    <div v-else>Loading...</div>
  </div>

</template>

<script>

import { ref, computed, reactive }  from 'vue'
import { useMouse }  from '../components/Composables-child1.js'
import { useFetch, useFetch1 }  from '../components/Composables-child3.js'


export default {
  name: '123',
  // setup(props) {     //可以使用setup或data
  // },
  setup() {
    /* 正确写法是在setup中写 */
    /* useMouse中含有生命周期，所以要在选项式内写，如果是组合式写法则无需关系 */
    // 约定与最佳时实践，以use命名，如果希望以对象 property 的形式从组合式函数中返回状态，你可以将要返回的对象用 reactive() 包装，这样其中的 ref 会被自动解包
    const { x, y } = useMouse()
    const mouse = reactive(useMouse())

    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'

    const { data, error } = useFetch(baseUrl)

    const id = ref('1')
    const url = computed(() => baseUrl + id.value)
    // 实现了静态地址与动态地址的判断
    const { data1, error1, retry } = useFetch1(url)  //或 baseUrl

    return {
      x, y, mouse, data, error, url, id, data1, error1, retry
    };

    // return {
    //   x:x,
    //   y:y,
    //   mouse:mouse,

    //   data:data,
    //   error:error,

    //   id: id,
    //   data1:data1,
    //   error1:error1,
    //   retry: retry,

    //   url: computed(() => baseUrl + id.value),
    // };
  },
  mounted() {
    // setup() 暴露的 property 可以在通过 `this` 访问到
    console.log(this.x, this.y)
  },
  // methods: {
  //   onClick(i) {
  //     this.id = i
  //   },
  //   // retry: retry,
  // },
}

</script>

<style scoped lang="scss">

</style>