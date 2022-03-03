<template>
  <input type="text"
    class="block"
    :value="description"
    @input="emitValue">
</template>

<script>

export default {
  name: 'ArgModifiers',
  props: [
    'description', 'descriptionModifiers'
  ],
  emits: ['update:description'],
  created() {
    console.log('arg:', this.descriptionModifiers) // { capitalize: true }
  },
  methods: {
    emitValue (e) {
      let value = e.target.value
      if (this.descriptionModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:description', value)
    }
  },
}
</script>

