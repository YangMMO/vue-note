<template>

  <button>
    <slot>如果父级没有则渲染此文本</slot>
  </button>
 
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Slot-child',
  created() {
  },
}
</script>

