<template>
    <div class="demo">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <!-- 使用component 可以切换组件 -->
      <!-- <keep-alive> 缓存失活（失去激活，既不活动的）组件 -->
      <!-- suspense 异步时挂起，显示loading 实现性功能，需要搭配使用，在keep下 -->
      <keep-alive>
          <component :is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>


</template>

<script>
import { defineAsyncComponent } from 'vue'
import tabHome from '../components/tab-home.vue'
// import tabPosts from '../components/tab-posts.vue'
import tabArchive from '../components/tab-archive.vue'

// @ is an alias to /src
export default {
  // components: { tabHome, tabPosts, tabArchive },
  components: { 
    tabHome,
    //通过异步的形式局部注册组件
    tabPosts: defineAsyncComponent({
      // 加载函数
      loader: () => import('../components/tab-posts.vue'),
      //加载中
      loadingComponent: tabArchive,
        // 展示加载组件前的延迟时间，默认为 200ms
      delay: 10,

      // 加载失败后展示的组件
      // errorComponent: ErrorComponent,
      errorComponent: tabHome,
      // 如果提供了一个 timeout 时间限制，并超时了
      // 也会显示这里配置的报错组件，默认值是：Infinity
      timeout: 3000
    }),
    tabArchive,
  },
  name: 'DynamicAsync',
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      // console.log('tab-' + this.currentTab.toLowerCase())
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}

</script>

<style scoped lang="scss">
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .demo-tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>


