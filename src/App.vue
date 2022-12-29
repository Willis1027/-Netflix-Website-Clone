<template>
  <Header/>
  <Swiper/>
  <Feature/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Feature from './components/Feature.vue'
import Swiper from './components/Swiper.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Feature,
    Swiper,
    Footer
  }
}
</script>

<style lang="scss">
#app {

}
</style>
