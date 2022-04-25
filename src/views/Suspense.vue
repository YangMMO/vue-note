<template>

  <!-- <Suspense> 组件有两个插槽：#default 和 #fallback。两个插槽都只允许一个直接子节点 -->
  <div></div>
  <Suspense>
    <template #default>
      <Child />
    </template>
    <template #fallback>
      <h3>稍等，加载中...123</h3>
    </template>
  </Suspense>

  <!-- 结合其他组件嵌套顺序 -->
  <!-- <RouterView v-slot="{ Component }"> -->
    <!-- <template v-if="Component"> -->
      <!-- <Transition mode="out-in"> -->
        <!-- <KeepAlive> -->
          <!-- <Suspense> -->
            <!-- 主要内容 -->
            <!-- <Child /> -->

            <!-- 加载中状态 -->
            <!-- <template #fallback> -->
              <!-- 正在加载... -->
            <!-- </template> -->
          <!-- </Suspense> -->
        <!-- </KeepAlive> -->
      <!-- </Transition> -->
    <!-- </template> -->
  <!-- </RouterView> -->
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Suspense',
  components: { 
    Child: defineAsyncComponent(() => import('../components/Suspense-child.vue'))
  },
  errorCaptured(e,err,instance,info) {
    // <Suspense> 组件自身目前还不提供错误处理
    // 使用 errorCaptured 选项或者 onErrorCaptured() 在使用到 <Suspense> 的父组件中捕获和处理异步错误
    console.log(info);
    // 通过return false来阻止错误继续传递，即表示“这个错误已经被处理了，应当被忽略”，它将阻止其他的 errorCaptured 钩子或 app.config.errorHandler 因这个错误而被调用。
    return false;
  },
}
</script>

<style scoped lang="scss">

</style>

