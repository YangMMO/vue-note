<template>
  <p class="oncebox" >
    <span v-once>我是一次性值：{{onceV}}</span> | 
  </p>
  <button @click="handleForceUpdate">强制更新</button>
</template>

<script>

export default {
  name: 'VOnce',
  data(){
    return{
	    onceV:0,
    }
  },
  mounted(){
    setInterval(()=>{
      this.onceV++
    },1000)
	},
}
</script>

<style scoped lang="scss">

</style>