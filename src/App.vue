<template>
  <div id="app">
    <the-header></the-header>
    <the-login :shopName="shopName"></the-login>
    <the-register :shopName="shopName"></the-register>
    <router-view></router-view>

  </div>
</template>

<script>
import TheHeader from './components/layout/components/TheHeader.vue'
import TheLogin from './components/layout/components/TheLogin.vue'
import TheRegister from './components/layout/components/TheRegister.vue'

export default {
  name: 'App',
  components: {
      TheHeader,
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
