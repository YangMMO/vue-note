<template>

  <!-- 与 main.js & ./plugins/i18n 有关-->
  <!-- 这里模拟的取i18n的cn和en的hello值 -->
  <h1>{{ $translate('cn.header.hello') }}</h1>
  <h1>{{ $translate('en.hello') }}</h1>

  <PluginsChild></PluginsChild>

</template>

<script>
import PluginsChild from '../components/Plugins-child.vue'

export default {
  name: 'Plugins',
  components: { PluginsChild },
}
</script>

<style scoped lang="scss">

</style>