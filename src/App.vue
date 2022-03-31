<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/v-modle">V-Modle</router-link> |
    <router-link to="/emit">Emit</router-link> |
    <router-link to="/customEvent">CustomEvent</router-link> |
    <router-link to="/tab">Tab</router-link> |
    <router-link to="/slot">Slot</router-link> |
    <router-link to="/slot1">Slot1</router-link> |
    <router-link to="/prop">Prop</router-link> |
    <router-link to="/propAttribute">PropAttribute</router-link> |

    <router-link to="/switch">Switch</router-link> |
  </nav>
  <router-view/>
</template>

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
  padding-bottom: 20px;
}
</style>
