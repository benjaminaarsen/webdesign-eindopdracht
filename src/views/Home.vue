<template>
  <div class="home">
    <HeroImage />
    <BezorgenText />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '@/components/HeroImage.vue'
import BezorgenText from '@/components/BezorgenText.vue'
export default {
  name: 'Home',
  components: {
    HeroImage,
    BezorgenText
  }
}
</script>


