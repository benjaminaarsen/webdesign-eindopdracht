<template>
  <div class="home">
    <HeroImage />
    <BezorgenText />
    <AfhalenText />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '@/components/HeroImage.vue'
import BezorgenText from '@/components/BezorgenText.vue'
import AfhalenText from '@/components/AfhalenText.vue'
export default {
  name: 'Home',
  components: {
    HeroImage,
    BezorgenText,
    AfhalenText
  }
}
</script>


