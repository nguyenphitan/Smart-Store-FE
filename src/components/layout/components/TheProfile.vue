<template>
    <div id="the-profile">
        <!-- Begin Navbar left -->
        <div class="user-nav">
            <!-- Profile -->
            <div @click="getUserProfile" class="user-profile">
                <h5>Profile</h5>
            </div>
            <!-- End Profile -->

            <!-- Orders -->
            <div v-if="this.role != 'ADMIN'" @click="getUserOrders" class="user-order">
                <h5>My Orders</h5>
            </div>
            <!-- End Orders -->
        </div>
        <!-- End Navbar left -->

        <div class="user-context-view">
            <base-user-profile :userProfile="userProfile"></base-user-profile>
            <base-list-order-manager :listOrders="userOrders" @reloadPage="reloadPage"></base-list-order-manager>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BaseUserProfile from '@/components/base/BaseUserProfile.vue';
import BaseListOrderManager from '@/components/base/admin/BaseListOrderManager.vue';

export default {
    name: "the-profile",
    components: {
        BaseUserProfile,
        BaseListOrderManager,
    },
    beforeCreate() {
        // Token
        const token = localStorage.getItem('token');

        if(token == null) {
            document.getElementById('the-login').style.display = 'block';
            return;
        }

        // back to orderList when click Order List button from order detail
        let isOrderListClick = this.$route.params.isOrderList;
        if(isOrderListClick == 1) {
            let me = this;
            // Token
            const token = localStorage.getItem('token');
            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            // Call API
            axios
                .get('http://localhost:8080/api/v1/order', { headers })
                .then((response) => {
                    console.log(response.data);
                    me.userOrders = response.data;
                    me.openUserOrders();
                })
                .catch((reject) => {
                    console.log(reject);
                });

            return;
        }

        let me = this;

        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Load user info
        axios
            .get("http://localhost:8080/api/v1/user-profile", {headers})
            .then((response) => {
                console.log('Get user profile success');
                console.log(response.data);
                me.userProfile = response.data;
                me.openUserProfile();
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End load user info
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // User profile
            userProfile: {},

            // User orders
            userOrders: [],

            role: localStorage.getItem("role"),
        }
    },
    methods: {
        // reload page order:
        reloadPage(e) {
            console.log(e.target);
            this.getUserOrders();
        },

        // Open user profile
        openUserProfile() {
            document.querySelector('#the-profile #base-user-profile').style.display = 'block';
            document.querySelector('#the-profile #base-list-order-manager').style.display = 'none';
            document.querySelector('#the-profile .user-profile').classList.add('t-active');
            document.querySelector('#the-profile .user-order').classList.remove('t-active');
        },
        // End open user profile

        // Open user orders
        openUserOrders() {
            document.querySelector('#the-profile #base-user-profile').style.display = 'none';
            document.querySelector('#the-profile #base-list-order-manager').style.display = 'block';
            document.querySelector('#the-profile .user-profile').classList.remove('t-active');
            document.querySelector('#the-profile .user-order').classList.add('t-active');
        },
        // End open user orders

        // Begin load user profile
        getUserProfile() {
            let me = this;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            axios
                .get("http://localhost:8080/api/v1/user-profile", {headers})
                .then((response) => {
                    console.log('Get user profile success');
                    console.log(response.data);
                    me.userProfile = response.data;
                    me.openUserProfile();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End load user profile

        // Begin load user orders
        getUserOrders() {
            let me = this;
            // Token
            const token = localStorage.getItem('token');
            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            // Call API
            axios
                .get('http://localhost:8080/api/v1/order', { headers })
                .then((response) => {
                    console.log(response.data);
                    me.userOrders = response.data;
                    me.openUserOrders();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End load user orders
    },
    
}
</script>

<style>
@import url('../../../styles/layout/profile.css');
</style>