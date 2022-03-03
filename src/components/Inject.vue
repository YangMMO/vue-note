<template>
  <!-- 无需模板 -->
  length: {{ todoLength.value.length }}
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Inject',
  inject: [ 'todoLength' ],  // 注入写法，此次先注释
  created() {
    console.log(this.todoLength.value) 
  },
}
</script>

