<template>
  <!-- <div class="container">
    <h1>ToDoList</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div> -->

  <div :style="{ fontSize: postFontSize + 'em'}">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += $event"
      :postFontSize="postFontSize"
    ></BlogPost>


    
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import BlogPost from '../components/BlogPost.vue'
// @ is an alias to /src
export default {
  components: { BlogPost },
  name: 'Emit',
  setup () {

  },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>