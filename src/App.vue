<template>
  <nav class="box">
    <router-link to="/">Home</router-link>
    <router-link to="/lifecycle-hooks">LifecycleHooks</router-link>
    <router-link to="/v-modle">V-Modle</router-link>
    <router-link to="/emit">Emit</router-link>
    <router-link to="/tab">Tab</router-link>
    <router-link to="/slot">Slot</router-link>
    <router-link to="/slot1">Slot1</router-link>
    <router-link to="/prop">Prop</router-link>
    <router-link to="/propAttribute">PropAttribute</router-link>
    <router-link to="/customEvent">CustomEvent</router-link>
    <router-link to="/provide">Provide</router-link>
    <router-link to="/dynamic-async">DynamicAsync</router-link>
    <router-link to="/ref">Ref</router-link>
    <router-link to="/dom-update">DomUpdate</router-link>
    <router-link to="/v-once">V-Once</router-link>
    <router-link to="/transition">Transition</router-link>
    <router-link to="/transition1">Transition1</router-link>
    <router-link to="/transition-group">TransitionGroup</router-link>
    <router-link to="/keep-alive">KeepAlive</router-link>
    <router-link to="/teleport">Teleport</router-link>
    <router-link to="/composables">Composables</router-link>
    <router-link to="/custom-directives">CustomDirectives</router-link>
    
    <router-link to="/suspense">Suspense</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      item: 'frist',
    }
  },
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

nav {
  padding: 5px;
  background: #d6dce2;
}


.border {
  border: 1px #e0e0e0 solid;
  padding: 20px;
}
.box a {
  border: 1px #e0e0e0 solid;
  background: #f5f5f5;
  padding: 2px 4px;
  margin: 4px;
  border-radius: 4px;
  display: inline-block;
  color: #000;
  text-decoration: none;
  font-size: 14px;
}
</style>
