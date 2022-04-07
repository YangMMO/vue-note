<template>

  <!-- <button @click="show = !show">Toggle</button> -->

  <div>示例1</div>
  <div class="border">
    <button @click="show1 = !show1">Toggle</button>
    <Transition>
      <p v-if="show1">hello</p>
    </Transition>
  </div>

  <div>示例2</div>
  <div class="border">
    <button @click="show2 = !show2">Toggle</button>
    <Transition name="fade">
      <p v-if="show2">hello</p>
    </Transition>
  </div>

  <div>示例3</div>
  <div class="border">
    <button @click="show3 = !show3">Toggle</button>
    <Transition name="slide-fade">
      <p v-if="show3">hello</p>
    </Transition>
  </div>

  <div>示例4</div>
  <div class="border">
    <button @click="show4 = !show4">Toggle</button>
    <Transition name="bounce">
      <p v-if="show4" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>
  </div>

  <div>示例5</div>
  <div class="border">
    <button @click="show5 = !show5">Toggle</button>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show5">hello</p>
    </Transition>
  </div>


  <div>示例6</div>
  <div class="border">
    <button @click="show6 = !show6">Toggle</button>
    <!-- 指定 animation 或 transition 那种方式来结束动画，不加type则自动监听-->
    <Transition name="aaa" type="animation">
      <p v-if="show6" style="text-align: center;">hello</p>
    </Transition>
  </div>

</template>

<script>

export default {
  name: 'Transition',
  data() {
    return {
      show1: true, show2: true, show3: true, show4: true, show5: true, show6: true, 
    }
  }
}
</script>

<style scoped lang="scss">
.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}

/* 示例1 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 示例2 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 示例3 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* 示例4 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

/* 示例6 */
.aaa-enter-active {
  transition: all 5s ease-out;
  animation: bounce-in 2s;
}

.aaa-leave-active {
  transition: all 5s ease-in;
  animation: bounce-in 2s;
}

.aaa-enter-from,
.aaa-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>