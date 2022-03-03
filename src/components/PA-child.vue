<template>
  <div>
    <input type="datetime-local" v-bind="$attrs" />
  </div>

  <select>
    <option value="1">Yesterday</option>
    <option value="2">Today</option>
    <option value="3">Tomorrow</option>
  </select>
</template>

<script>

export default {
  name: 'PA-child',
  created() {
    // 通过this.$attrs可访问父级非prop 的 attribute
    // 当组件返回单个根节点时，非 prop 的 attribute 将自动添加到根节点的 attribute 中。
    console.log(this.$attrs) // { onChange: () => {}  }
  },
  // inheritAttrs: false,    //禁用 Attribute 继承
}
</script>

