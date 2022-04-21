<template>

  <div>生命周期挂钩</div>
  <div class="border box-flex">
    <img alt="lifecycle" src="../assets/lifecycle.png" class="lifecycle">

  </div>
</template>

<script>

// @ is an alias to /src
export default {
  name: 'LifecycleHooks',
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
.lifecycle {
  width: 720px;
}
.box-flex {
  display: flex;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: rgb(0, 163, 82);
}
.purple {
  color: purple;
}
</style>