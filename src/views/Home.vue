<template>
  <div class="home">
    <HeroImage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '@/components/HeroImage.vue'

export default {
  name: 'Home',
  components: {
    HeroImage
  }
}
</script>

<style lang="scss">
  .home {
    margin: 0px 30px;
  }
</style>
