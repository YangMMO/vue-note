<template>
  <!-- Teleport -->
  <div>错误示例</div>
  <!-- 如果父节点outer 设置动画 会破幻模态框布局结构 -->
  <!-- 模态框的z-index被outer所约束 -->
  <div class="outer border">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModal1 />
    </div>
  </div>

  <div>正确示例</div>
  <div class="outer border">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModal2 />
    </div>
  </div>


  <div>Teleport 和 Transition 示例</div>
  <div class="border">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <Teleport to="body">
      <!-- 不影响 通过 prop 传参 -->
      <MyModal3 :show="showModal" @close="showModal = false">
        <template #header>
          <h3>自定插槽文本</h3>
        </template>
      </MyModal3>
    </Teleport>
  </div>

  <div>禁用传送门</div>
  <div class="border">
    <button id="show-modal" @click="isMobile = !isMobile">切换为 {{!isMobile}}</button>
    <Teleport to="body" :disabled="isMobile">
      <!-- false 则允许传送，true 为禁止传送 -->
      <div>123</div>
    </Teleport>
  </div>

  <div>同一目标多个传送</div>
  <div class="border">
    <!-- 顺序则为 A B -->
    <Teleport to="body" :disabled="isMobile">
      <div>A</div>
    </Teleport>
    <Teleport to="body">
      <div>B</div>
    </Teleport>
  </div>
</template>

<script>
import MyModal1 from '../components/MyModal1.vue'
import MyModal2 from '../components/MyModal2.vue'
import MyModal3 from '../components/MyModal3.vue'

export default {
  components: { MyModal1, MyModal2, MyModal3 },
  name: 'Teleport',
  data() {
    return {
      showModal: false,
      isMobile: true
    }
  }
}
</script>

<style scoped lang="scss">
.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
</style>