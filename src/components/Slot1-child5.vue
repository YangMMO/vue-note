<template>

  <div>
    <slot :abc="greetingMessage" :count="1"></slot>
  </div>
  
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Slot-child5',
  data() {
    return {
      greetingMessage: 'Hello'
    }
  },
}
</script>

