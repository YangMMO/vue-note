<template>
  <div></div>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'tab-home',
  data() {
    return {
      msg: '',
    }
  },
}
</script>

