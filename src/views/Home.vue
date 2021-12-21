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
    margin: 0px 100px;
    transition-duration: 400ms;

  }

  @media screen and (max-width: 1200px){
    .home {
      margin: 0px 50px;
    }
  }
  @media screen and (max-width: 600px){
    .home {
      margin: 0px 0px;
    }
  }
</style>
