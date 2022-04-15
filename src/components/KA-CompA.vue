<template>
   <p>Current component: A</p>
   <span>count: {{ count }}</span>
   <button @click="count++">++</button>
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'KA-CompA',
  data() {
    return {
      count: 0,
    }
  },
  activated() {
    console.log('CompA activated 缓存示例生命周期')
  },
  deactivated() {
    console.log('CompA deactivated 缓存示例生命周期')
  },
}
</script>

