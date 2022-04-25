<template>
  {{ posts[0] }}
</template>

<script>

export default {
  name: 'Child',
  async setup() {
    // const res = await fetch('https://jsonplaceholder.typicode.com')

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const posts = await res.json()

    return {
      posts
    }
  }
}
</script>

<style scoped lang="scss">

</style>

