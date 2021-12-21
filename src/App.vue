<template>
  <Menu />
  <router-view/>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@800&display=swap');

#app {
  font-family: 'Cairo';
  text-align: center;
}
body {
  margin: 0px 0px;
  background: var(--secondary-color)
}
:root {
  --primary-color: #0d0a02;
  --primary-color-shade: #1a1405;
  --secondary-color: #fbb31c;
}
</style>
