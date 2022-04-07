<template>
  <div class="border">
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </div>


</template>

<script>

export default {
  name: 'Transition',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
</style>