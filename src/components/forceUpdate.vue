<template>
  <!-- 并非真实的forceUpdate示例(失败了)，只是如果页面出现了未更新的情况，可以使用this.$forceUpdate() -->
  <div>
    内容:{{ info }}
  </div>
  <input :value="info.name" @input="handleChange">
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'forceUpdate',
  props: {
    info: Object
  },
  methods: {
    handleChange (e) {
      this.info.name = e.target.value;
      // this.$forceUpdate()  
    }
  },
}
</script>

