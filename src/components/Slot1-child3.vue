<template>

  <ul>
    <li v-for="(item, index) in items">
      <!-- {{ item }} 父级插槽，不能使用这种方式 -->
      <!-- 添加一个attribute进行绑定即可 -->
      <!-- 接受完全的JavaScript表达式的，比如字符串'' -->
      <slot 
        :item="item"
        :index="index" 
        :value="'haode'" 
      ></slot>
      <!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop -->
    </li>
  </ul>
  
</template>

<script>
// PascalCase，kebab-case 两种命名法，但DOM中只有 kebab-case 有效
export default {
  name: 'Slot-child',
  created() {
  },
  data() {
    return {
      items: ['Feed a cat', 'Buy milk']
    }
  },
}
</script>

