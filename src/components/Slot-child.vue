<template>
  <!-- 插槽模板 -->
  <div>
    <div>123</div>
    <slot name="SlotName"></slot>
  </div>
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Slot-child',
  created() {
  },
}
</script>

