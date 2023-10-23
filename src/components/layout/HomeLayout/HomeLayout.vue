<template>
    <div id="home-layout">
        <the-body></the-body>
        <the-login :shopName="shopName"></the-login>
        <the-register :shopName="shopName"></the-register>

        <br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>
import TheBody from '../components/TheBody.vue'
import TheLogin from '../components/TheLogin.vue'
import TheRegister from '../components/TheRegister.vue'

export default {
    name: 'home-layout',
    components: {
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

<style>

</style>