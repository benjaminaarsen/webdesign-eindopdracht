<template>
  <div class="main">
    <Menu />
    <div class="header-curve" />
    <router-view/>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap');
  .main {
    position: relative;
    display:block;
    width: 100%;
    overflow: hidden;
  }
  .header-curve {
    width: 100%;
    background: var(--primary-color);
    height: 50vh;
    top: -15vh;
    left: 0;
    right: 0;
    bottom: auto;
    border-radius: 50%;
    transform: scale(1.4);
    position: absolute;
    z-index: -1;
  }
#app {
  font-family: 'Cairo';
  font-weight: 800;
  text-align: center;
}
p {
  font-weight: 500;
}
body {
  margin: 0px 0px;
  background: var(--secondary-color)
}
:root {
  --primary-color: #0d0a02;
  --primary-color-shade: #1a1405;
  --secondary-color: #fbb31c;
  --secondary-color-shade: #d89d1d;
  --accent-color: #e41a26;
}
</style>
