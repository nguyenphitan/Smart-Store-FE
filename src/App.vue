<template>
  <div id="app">
    <the-header></the-header>
    <the-body></the-body>
    <the-login :shopName="shopName"></the-login>
    <the-register :shopName="shopName"></the-register>

    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheBody from './components/layout/TheBody.vue'
import TheLogin from './components/layout/TheLogin.vue'
import TheRegister from './components/layout/TheRegister.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheBody,
    TheLogin,
    TheRegister,
  },
  data() {
    return {
      shopName: "Ecommerce",
      buttonName: "Đăng nhập",
      iconClass: 'fa-brands fa-facebook',
      textType: 'text',
      inputPlaceholder: 'example@mail.com',
      carouselData: [require('@/assets/imgs/ef.jpg'), require('@/assets/imgs/ef.jpg'), require('@/assets/imgs/ef.jpg')],
      
    }
  },
}
</script>

<style scoped>
@import url('./styles/main.css');
</style>
