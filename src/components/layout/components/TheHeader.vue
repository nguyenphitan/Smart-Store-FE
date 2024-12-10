<template>
    <div id="the-header">
        <!-- The header -->
        <div id="the-header-container">
            <!-- Begin top header -->
            <div id="top-header">
                <div class="logo">
                    <router-link to="/">Furniture</router-link>
                </div>
                <base-search></base-search>
                <div class="d-flex" @mouseleave="hideLogout">
                    <div @click="openLoginForm" class="user-info">
                        <i v-if="userProfile.avatarUrl == null" class="fa-solid fa-user"></i>
                        <img 
                            @click="showLogout($event)"
                            v-if="userProfile.avatarUrl != null" 
                            :src="require('@/assets/imgs/' + userProfile.avatarUrl)" 
                            alt="avatar">
                    </div>
                    <div @click="logoutAccount" class="t-logout">Logout</div>
                    <div class="cart-info">
                        <router-link v-if="this.role != 'ADMIN'" to="/cart" >
                            <div class="cart-size">{{ cartSize }}</div>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </router-link>

                        <div v-if="this.role == 'ADMIN'">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End top header -->

            <!-- Begin bottom header -->
            <div id="bot-header">
                <div id="bot-container">
                    <!-- Left -->
                    <div class="bot-left" style="height: 20px;">
                        <!-- <base-category-card
                            :iconClassLeft="categoryIcon"
                            :iconClassRight="downIcon"
                            :cardName="cardName"
                        ></base-category-card> -->
                    </div>

                    <!-- Right -->
                    <div class="bot-right">
                        <div class="home t-title">
                            <a href="/" class="t-hover-red">Home</a>
                            <base-list-overlay @hideThis="hideThis" :data="homeList" class="sub-item sub-home"></base-list-overlay>
                        </div>
                        <div v-if="this.role != 'ADMIN'" class="pages">
                            <router-link :to="{ name: 'flashDeals'}" class="t-title t-hover-red">Flash Deals</router-link>
                            <base-list-overlay @hideThis="hideThis" :data="pageList" class="sub-item sub-pages"></base-list-overlay>
                        </div>
                        <!-- <div v-if="this.role != 'ADMIN'" class="track-order">
                            <a href="#show-products" class="t-title t-hover-red">Products</a>
                        </div> -->
                        <div class="pages">
                            <router-link :to="{ name: 'profile'}" class="t-title t-hover-red">My Profile</router-link>
                            <base-list-overlay @hideThis="hideThis" :data="pageList" class="sub-item sub-pages"></base-list-overlay>
                        </div>
                        <div class="pages">
                            <router-link :to="{ name: 'aboutUs'}" class="t-title t-hover-red">About Us</router-link>
                            <base-list-overlay @hideThis="hideThis" :data="pageList" class="sub-item sub-pages"></base-list-overlay>
                        </div>
                        <!-- <div class="add-new-product">
                            <router-link to="/add-new-product" >Add New Product</router-link>
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- End bottom header -->
        </div>
    </div>
</template>

<script>
import BaseSearch from '../../base/BaseSearch.vue'
// import BaseCategoryCard from '../../base/BaseCategoryCard.vue'
import BaseListOverlay from '../../base/BaseListOverlay.vue'
import axios from 'axios'
import { EventBus } from '@/eventBus'

export default {
    name: 'the-header',
    components: {
        BaseSearch,
        // BaseCategoryCard,
        BaseListOverlay,
    },
    beforeCreate() {
        let me = this;
        const token = localStorage.getItem('token');
        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Load cart size
        axios
            .get("http://localhost:8080/api/v1/cart/size", {headers})
            .then((response) => {
                console.log(response.data);
                me.cartSize = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End load cart size

        // Load user info
        axios
            .get("http://localhost:8080/api/v1/user-profile", {headers})
            .then((response) => {
                console.log('Get user profile success');
                console.log(response.data);
                me.userProfile = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End load user info
    },
    mounted() {
        EventBus.$on("reloadCartSize", () => {
            let me = this;
            const token = localStorage.getItem('token');
            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Load cart size
            axios
                .get("http://localhost:8080/api/v1/cart/size", {headers})
                .then((response) => {
                    console.log(response.data);
                    me.cartSize = response.data;
                })
                .catch((reject) => {
                    console.log(reject);
                });
            // End load cart size
        });
    },
    data() {
        return {
            // Cart size
            cartSize: 0,
            // User info
            userProfile: {},

            categoryIcon: 'fa-solid fa-list',
            downIcon: 'fa-solid fa-chevron-down',
            cardName: 'Categories',
            homeList: ['Supper Store', 'Grocery', 'Niche Market'],
            pageList: ['Sale page', 'Vendor', 'Shop', 'About us'],
            role: localStorage.getItem("role"),
        }
    },
    methods: {

        // Show logout:
        showLogout(e) {
            e.preventDefault();
            console.log(e.target);
            if(this.userProfile.avatarUrl != null && this.userProfile.id != null) {
                document.querySelector('#the-header .t-logout').style.display = 'flex';
            }
        },

        // Hide logout:
        hideLogout() {
            if(this.userProfile.avatarUrl != null || this.userProfile.id != null) {
                document.querySelector('#the-header .t-logout').style.display = 'none';
            }
        },
        
        // Show/Hide sub item when hover into title:
        showSubItem(e) {
            let subElement = e.target.nextSibling; 
            subElement.classList.add('t-block');
        },

        hideSubItem(e) {
            let subElement = e.target.lastChild;
            if(subElement.classList.contains('t-block')) {
                subElement.classList.remove('t-block');
            }
        },

        hideThis(e) {
            if(e.target.classList.contains('t-block')) {
                e.target.classList.remove('t-block');
            }
        },

        // Open login form
        openLoginForm() {
            if(this.userProfile.id == null) {
                document.getElementById('the-login').style.display = 'block';
            } else {
                // show logout
                document.querySelector('#the-header .t-logout').style.display = 'flex';
            }
        },

        // Handle logout:
        logoutAccount() {
            let me = this;
            if(this.userProfile.avatarUrl != null || this.userProfile.id != null) {
                // clear storage:
                localStorage.clear();
                sessionStorage.clear();

                // call api:
                axios
                    .get("http://localhost:8080/api/v1/auth/logout")
                    .then((response) => {
                        console.log(response.data);
                        me.userProfile = {};
                        me.cartSize = 0;
                        // hide logout
                        document.querySelector('#the-header .t-logout').style.display = 'none';
                        window.location.href = '/#/';
                        window.location.reload();
                    })
                    .catch((reject) => {
                        alert("Logout fail!");
                        console.log(reject);
                    });
            }
        }


    },

}
</script>

<style scoped>
@import url('../../../styles/layout/header.css');
</style>