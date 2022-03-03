<template>
  <!-- emit传参 -->
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <div>123</div>
    <button @click="$emit('enlargeText', 0.1)">
      Enlarge text
    </button>
  </div>
</template>

<script>

export default {
  name: 'BlogPost',
  props: ['title','postFontSize','modelValue'],
  emits: ['update:modelValue'],
  mounted() {
    console.log(this.postFontSize)
  },
}
</script>

