<template>

  <!-- 1.传入 tag 作为元素包装器 -->
  <!-- 2.过渡模式不可用 mode="out-in" -->
  <!-- 3.元素必须有 key -->
  <!-- 4.class 会被用应用到每一个元素，而非组-容器上 -->
  <!-- DOM 模板写法 <transition-group> -->
  <div>示例1</div>
  <div class="border">
    <button @click="delF">del</button>
    <button @click="addF">add</button>
    <TransitionGroup name="list" tag="ul" >
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>

  <div>示例2</div>
  <div class="border">
    <input v-model="query" @keyup="computedList" />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) in computedList"
        :key="item.msg"
        :data-index="index"
      >
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>


</template>

<script>
import gsap from 'gsap'

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
]

export default {
  name: 'TransitionGroup',
  data() {
    return {
      items: [],
      num: 0,
      query: '',
    }
  },
  methods: {
    delF () {
      let a = this.generateRandomValInGivenNum(0, this.items.length)
      this.items.splice(a, 1)　
    },
    addF () {
      let a = this.generateRandomValInGivenNum(0, this.items.length)
      this.items.splice(a, 0, this.num++)
    },
    onBeforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter (el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    onLeave (el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
  },
  created() {
    for (let i = 0; i < 5; i++) {
      this.items.push(this.num)
      this.num++
    }
    // this.computedList = this.computedListResult()
    // console.log(this)
  },
  computed: {
    computedList() {
      return list.filter((item) => item.msg.toLowerCase().includes(this.query))
    }
  },
}
</script>

<style scoped lang="scss">
.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
/* ------------------------ */
// move 和 position 确保从流布局删除，以便正确计算移动动画
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>