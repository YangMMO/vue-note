<template>
  <div>
  <button
     v-for="tab in tabs"
     v-bind:key="tab"
     v-bind:class="['tab-button', { active: currentTab === tab }]"
     v-on:click="currentTab = tab"
   >
    {{ tab }}
  </button>

  <!-- is 用于组件，当组件改变时 -->
  <TabChild 
  v-bind:is="currentTabComponent" 
  class="tab" 
  :pass-parameters="{tabs, currentTab}"
  >
    <template v-slot:SlotName>  
      <span>
        page 和 插槽组合
      </span>
    </template>
  </TabChild>
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
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
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