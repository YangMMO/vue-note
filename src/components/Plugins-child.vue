<template>

  <div>{{ a }}</div>
</template>

<script>
import { inject } from  'vue'

export default {
  name: 'Plugins-child',
  setup(props) {
    // 通过 inject 来访问插件
    const i18n = inject('i18n')
    return {
      a: i18n.cn.header.hello
    }
  }
}
</script>

