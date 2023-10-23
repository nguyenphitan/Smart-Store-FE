<template>
    <div id="the-header">
        <!-- The header -->
        <div id="the-header-container">
            <!-- Begin top header -->
            <div id="top-header">
                <div class="logo">
                    <router-link to="/">T.A.N</router-link>
                </div>
                <base-search></base-search>
                <div class="d-flex">
                    <div @click="openLoginForm" class="user-info">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="cart-info">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <!-- End top header -->

            <!-- Begin bottom header -->
            <div id="bot-header">
                <div id="bot-container">
                    <!-- Left -->
                    <div class="bot-left">
                        <base-category-card
                            :iconClassLeft="categoryIcon"
                            :iconClassRight="downIcon"
                            :cardName="cardName"
                        ></base-category-card>
                    </div>

                    <!-- Right -->
                    <div class="bot-right">
                        <div class="home t-title" @mouseleave="hideSubItem">
                            <div class="t-hover-red" @mouseenter="showSubItem">Home</div>
                            <base-list-overlay @hideThis="hideThis" :data="homeList" class="sub-item sub-home"></base-list-overlay>
                        </div>
                        <div class="pages" @mouseleave="hideSubItem">
                            <div class="t-title t-hover-red" @mouseenter="showSubItem">Pages</div>
                            <base-list-overlay @hideThis="hideThis" :data="pageList" class="sub-item sub-pages"></base-list-overlay>
                        </div>
                        <div class="pages" @mouseleave="hideSubItem">
                            <div class="t-title t-hover-red" @mouseenter="showSubItem">My Profile</div>
                            <base-list-overlay @hideThis="hideThis" :data="pageList" class="sub-item sub-pages"></base-list-overlay>
                        </div>
                        <div class="track-order">
                            <div class="t-title t-hover-red">Track My Orders</div>
                        </div>
                        <div class="add-new-product">
                            <router-link to="/add-new-product" >Add New Product</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End bottom header -->
        </div>
    </div>
</template>

<script>
import BaseSearch from '../../base/BaseSearch.vue'
import BaseCategoryCard from '../../base/BaseCategoryCard.vue'
import BaseListOverlay from '../../base/BaseListOverlay.vue'

export default {
    name: 'the-header',
    components: {
        BaseSearch,
        BaseCategoryCard,
        BaseListOverlay,
    },
    data() {
        return {
            categoryIcon: 'fa-solid fa-list',
            downIcon: 'fa-solid fa-chevron-down',
            cardName: 'Categories',
            homeList: ['Supper Store', 'Grocery', 'Niche Market'],
            pageList: ['Sale page', 'Vendor', 'Shop'],
        }
    },
    methods: {
        
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
            document.getElementById('the-login').style.display = 'block';
        },


    },

}
</script>

<style scoped>
@import url('../../../styles/layout/header.css');
</style>