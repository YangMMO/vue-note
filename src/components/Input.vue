<template>
  <!-- v-model -->

  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>

export default {
  name: 'Input',
  // props: ['modelValue'],  //  无类型检查
  props: {             //检查类型
    modelValue: {
      type: Number,
      default: 123,
    },
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // 或任何其他构造函数
  },
  emits: ['update:modelValue'],
  created() {
    console.log('input:' + this.modelValue)
  },
  updated() {
    console.log('input up:' + this.modelValue)
  },
}
</script>

