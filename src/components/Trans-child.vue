<template>
  <Transition
    @enter="onEnter"
    @leave="onLeave">
    <slot></slot> <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: 'Trans-child',
  methods: {
    onEnter (e, done) {
      gsap.to(e, {
        duration: 1,
        scaleX: 1,
        scaleY: 2,
        opacity: 1,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    onLeave (e, done) {
      gsap.to(e, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(e, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>