<template>
  <div class="home">
    <HeroImage />
    <BezorgenText />
    <AfhalenText />
    <OpeningsTijden />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '@/components/HeroImage.vue'
import BezorgenText from '@/components/BezorgenText.vue'
import AfhalenText from '@/components/AfhalenText.vue'
import OpeningsTijden from '@/components/OpeningsTijden.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    HeroImage,
    BezorgenText,
    AfhalenText,
    OpeningsTijden,
    Footer,
  }
}
</script>


