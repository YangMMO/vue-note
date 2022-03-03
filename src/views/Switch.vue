<template>
<!-- 回头再学 -->
  <div>
    123
  </div>
</template>

<script>
import TabChild from '../components/Tab-child.vue'
// @ is an alias to /src
export default {
  name: 'Tab',
  components: { TabChild },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    handleLoadItem () {
      switch (this.currentTab) {
        case 'Home': return <div>Home</div>; break
        case 'Posts': return <div>Posts</div>; break
        case 'Archive': return <div>Archive</div>; break
      }
    }
  },
  created() {
    
  },

}
</script>

<style scoped lang="scss">
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
    
    // .active {
    //   background: #e0e0e0;
    // }
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>