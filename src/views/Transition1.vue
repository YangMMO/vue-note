<template>

  <!-- <button @click="show = !show">Toggle</button> -->

  <!-- <div>示例1</div>
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
  </div> -->


  <div>示例6</div>
  <div class="border">
    <button @click="show6 = !show6">Toggle</button>
    <!-- 指定 animation 或 transition 那种方式来结束动画，不加type则自动监听-->
    <Transition name="aaa" type="animation">
      <p v-if="show6" style="text-align: center;">hello</p>
    </Transition>
  </div>

  <div>示例7</div>
  <div class="border">
    <button @click="show7 = !show7">Toggle</button>
    <!-- 认情况下，<Transition> 组件会通过监听过渡根元素上的第一个 transitionend 或者 animationend，加:duration用来指定过渡的持续时间， -->
    <!-- <Transition name="nested" :duration="550"> -->
    <Transition name="nested" :duration="{ enter: 500, leave: 2000 }">
      <div v-if="show7" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>
  </div>

  <div>示例8.1</div>
  <div class="border">
    <!-- 监听 <Transition> 组件事件的方式在过渡过程中挂上钩子函数 -->
    <!-- 如果是JavaScript执行的动画，添加:css 跳过CSS自动探测 done()则是必须的 -->
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
      :css="false"
    >
      123
    </Transition>
  </div>

  <div>示例8.2</div>
  <div class="border">
    <button @click="show8 = !show8">Toggle</button>
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <div class="gsap-box" v-if="show8"></div>
    </Transition>
  </div>

  <div>示例9</div>
  <div class="border">
    <button @click="show9 = !show9">Toggle</button>
    <!-- 过渡重用 -->
    <TransChild>
      <div v-if="show9">Hello</div>
    </TransChild>
  </div>

  <div>示例10</div>
  <div class="border">
    <button @click="show10 = !show10">Toggle</button>
    <!-- 节点初次渲染时应用一个过渡效果 添加 appear -->
    <Transition appear>
      <p v-if="show10">hello</p>
    </Transition>
  </div>

  <div>示例11.1</div>
  <div class="border">
    <!-- 在 v-if / v-else / v-else-if 间切换 但这是错误的写法-->
    <div class="btn-container">
      <Transition name="slide-up" >
          <button v-if="docState === 'saved'"
                  @click="docState = 'edited'">Edit</button>
          <button v-else-if="docState === 'edited'"
                  @click="docState = 'editing'">Save</button>
          <button v-else-if="docState === 'editing'"
                  @click="docState = 'saved'">Cancel</button>
      </Transition>
    </div>
  </div>

  <div>示例11.2</div> 
  <div class="border">
    <!-- 正确写法写法 无position-->
    <div>
      <!-- mode="out-in" mode="in-out" 来实现列队，不同步执行enter和leave-->
      <Transition name="slide-up" mode="out-in" >
          <button v-if="docState === 'saved'"
                  @click="docState = 'edited'">Edit</button>
          <button v-else-if="docState === 'edited'"
                  @click="docState = 'editing'">Save</button>
          <button v-else-if="docState === 'editing'"
                  @click="docState = 'saved'">Cancel</button>
      </Transition>
    </div>
  </div>

  <div>示例12</div> 
  <div class="border">
    <!-- 正确写法写法 无position-->
    <button @click="clickChange">Toggle</button>
    <Transition :name="changeName">
      <p v-if="show11" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>
  </div>


</template>

<script>
import { gsap } from "gsap";
import TransChild from '../components/Trans-child.vue'

export default {
  name: 'Transition',
  components: { TransChild },
  data() {
    return {
      docState: 'saved',
      changeName: 'slide-fade',
      num: 0,
      show1: true, 
      show2: true, 
      show3: true, 
      show4: true, 
      show5: true, 
      show6: true, 
      show7: true, 
      show8: true, 
      show9: true, 
      show10: true, 
      show11: false
    }
  },
  methods: {
    clg (e) {
      console.log(e);
    },
    clickChange () {
      this.show11 = !this.show11
      this.num = this.num + 1
      if (this.num > 2) {
        this.changeName = this.changeName === 'slide-fade' ? 'bounce' : 'slide-fade'
        this.num = 1
      }
    },
    onBeforeEnter (e) {
      gsap.set(e, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1
      })
    },
    onEnter (e, done) {
      // this.clg(e) 
      // done()  //调用回调函数 done 表示过渡结束,如果与 CSS 结合使用，则这个回调是可选参数

      gsap.to(e, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    onAfterEnter (e) { this.clg(e) },
    onEnterCancelled (e) { this.clg(e) },
    onBeforeLeave (e) { this.clg(e) },
    onLeave (e, done) {
      // this.clg(e) 
      // done()  //调用回调函数 done 表示过渡结束,如果与 CSS 结合使用，则这个回调是可选参数
      gsap.to(e, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(e, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    },
    onAfterLeave (e) { this.clg(e) },
    onLeaveCancelled (e) { this.clg(e) }
  },
}
</script>

<style scoped lang="scss">

.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
/* ======================================== */

/* 示例11 */
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.btn-container button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* 示例8 */
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* 示例7 */
.outer, .inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner { 
  background: #ccc;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.nested-enter-active .inner {
	transition-delay: 0.25s;
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

/* 示例4 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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

/* 示例2 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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






@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>