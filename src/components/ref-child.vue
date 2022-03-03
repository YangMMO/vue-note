<template>
  <!-- HTML 元素指定 -->
  <input ref="input" />
</template>

<script>
export default {
  name: 'ref-child',
  methods: {
    focusInput() {
      this.$refs.input.focus()
    },
    clg(param) {
      console.log(param)
    }
  },
  // mounted() {
  //   this.focusInput()
  // }
}
</script>

