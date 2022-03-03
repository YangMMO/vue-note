<template>
  <input type="text"
    class="block"
    :value="modelValue"
    @input="emitValue">
</template>

<script>

export default {
  name: 'Modifiers',
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  created() {
    // console.log(this.modelModifiers) // { capitalize: true }
  },
  methods: {
    emitValue (e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
}
</script>

