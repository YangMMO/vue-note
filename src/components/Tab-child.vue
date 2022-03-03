<template>
  <!-- 插槽模板 -->
  <div>
    {{ this.passParameters.currentTab }}
    <slot name="SlotName"></slot>
  </div>
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Tab-child',
  props: ['passParameters'],
  created() {
    console.log(this.passParameters.currentTab)
  },
}
</script>

