<template>
  <!-- V-model 多绑 -->
  <p>First name: {{ firstName }}</p>
  <p>Last name: {{ lastName }}</p>
  <CustomInput
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  ></CustomInput>

  <Modifiers
    v-model.capitalize="myText"
  ></Modifiers>

  {{ myText }}

  <ArgModifiers
    v-model:description.capitalize="myText1"
  ></ArgModifiers>
  {{ myText1 }}
</template>

<script>
import CustomInput from '../components/CE-child.vue'
import Modifiers from '../components/Modifiers.vue'
import ArgModifiers from '../components/ArgModifiers.vue'
// @ is an alias to /src
export default {
  components: { CustomInput, Modifiers, ArgModifiers },
  name: 'CustomEvent',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      myText: '123',
      myText1: '663',
    };
  },
}
</script>

<style scoped lang="scss">
  .block {
    display: block;
  }
</style>