<template>
  <div>
    <navHead></navHead>
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>
<script>
import Footer from './components/Footer'
import navHead from './components/navHead.vue';
export default {
  name: '',
  components: {
    navHead,
    Footer
  }
}
</script>
<style>

</style>