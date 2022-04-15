<template>
  <!-- KeepAlive 缓存组件实例 -->
  <div>示例1</div>
  <div class="border">
    <label><input type="radio" v-model="current" value="CompA" /> A</label>
    <label><input type="radio" v-model="current" value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>

  <div>示例2</div>
  <div class="border">
    <label><input type="radio" v-model="current" value="CompA" /> A</label>
    <label><input type="radio" v-model="current" value="CompB" /> B</label>
    <!-- include 包含 填的是文件名 -->
    <!-- exclude 排除 填的是文件名-->
    <!-- 英文 include="a,b" -->
    <!-- 正则 :include="/a|b/ -->
    <!-- 数组 :include="['a','b'] -->
    <KeepAlive exclude="KA-CompA">
      <component :is="current"></component>
    </KeepAlive>
  </div>

  <div>示例3</div>
  <div class="border">
    <label><input type="radio" v-model="current" value="CompA" /> A</label>
    <label><input type="radio" v-model="current" value="CompB" /> B</label>
    <label><input type="radio" v-model="current" value="CompC" /> C</label>
    <!-- max 最大缓存数量 最久的缓存示例会被销毁 -->
    <KeepAlive :max="2">
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script>
import CompA from '../components/KA-CompA.vue'
import CompB from '../components/KA-CompB.vue'
import CompC from '../components/ref-child.vue'



export default {
  components: { CompA, CompB, CompC },
  name: 'KeepAlive',
  data(){
    return{
	    current: 'CompA',
    }
  },
}
</script>

<style scoped lang="scss">
.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
</style>