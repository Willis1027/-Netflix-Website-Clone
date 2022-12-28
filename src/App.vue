<template>
  <Header/>
  <Feature/>
  <Swiper/>
</template>

<script>
import Header from './components/Header.vue'
import Feature from './components/Feature.vue'
import Swiper from './components/Swiper.vue'

export default {
  name: 'App',
  components: {
    Header,
    Feature,
    Swiper
  }
}
</script>

<style lang="scss">
#app {

}
</style>
