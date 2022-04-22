<template>

  <!-- 与 main.js & ./plugins/i18n 有关-->
  <!-- 这里模拟的取i18n的cn和en的hello值 -->
  <h1>{{ $translate('cn.header.hello') }}</h1>
  <h1>{{ $translate('en.hello') }}</h1>

</template>

<script>

export default {
  name: 'Plugins',

}
</script>

<style scoped lang="scss">

</style>