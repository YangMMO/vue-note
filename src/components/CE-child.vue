<template>
  <div class="block">
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
      
    <input v-model.lazy="firstName" />

  </div>
  
</template>

<script>

export default {
  name: 'CE-child',
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
}
</script>

