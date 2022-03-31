<template>

    <div>
      <slot name="main">111</slot>
    </div>

    <div>
      <slot name="header">222</slot>
    </div>
  
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Slot-child',
  created() {
    // console.log(this)
  },
  // props: {
  //   abc: String,
  // },
  // data() {
  //   return {
  //     abc: this.abc
  //   }
  // },
}
</script>

