<template>
    <div id="the-admin">
        <!-- Begin container -->
        <div id="admin-container">
            <!-- Begin Navbar left -->
            <div class="admin-nav">
                <!-- Category -->
                <div @click="getAllCategory" class="manager-category">
                    <h5>Categories</h5>
                </div>
                <!-- End category -->

                <!-- Product -->
                <div @click="getAllProduct" class="manager-product">
                    <h5>Products</h5>
                </div>
                <!-- End product -->

                <!-- Product -->
                <div @click="getAllOrder" class="manager-order">
                    <h5>Orders</h5>
                </div>
                <!-- End product -->



                <!-- Discount -->
                <!-- End Discount -->
                <!-- ... -->
            </div>
            <!-- End Navbar left -->

            <!-- Begin view right -->
            <div class="admin-context-view">
                <the-add-category></the-add-category>
                <base-list-category :listCategory="listCategory"></base-list-category>
                <base-list-product-admin :listProduct="listProduct"></base-list-product-admin>
                <base-list-order-manager :listOrders="listOrders"></base-list-order-manager>
            </div>
            <!-- End view right -->
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseListCategory from '@/components/base/admin/BaseListCategory.vue'
import BaseListProductAdmin from '@/components/base/admin/BaseListProductAdmin.vue';
import TheAddCategory from './TheAddCategory.vue';
import BaseListOrderManager from '@/components/base/admin/BaseListOrderManager.vue';
import axios from 'axios';

export default {
    name: 'the-admin',
    components: {
        BaseListCategory,
        BaseListProductAdmin,
        TheAddCategory,
        BaseListOrderManager,
    },

    beforeCreate() {
        // Get all category
        let me = this;

        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                me.listCategory = response.data;
                me.openCategoryManager();
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all category
    },
    
    data() {
        return {
            // List of category
            listCategory: [
                {name: 'Car', imgSrc: 'urus.webp'},
                {name: 'Mobile Phone', imgSrc: '30.webp'},
            ],

            // List of product
            listProduct: [],

            // List of order
            listOrders: [],
            
        }
    },

    methods: {
        // Open category manager
        openCategoryManager() {
            document.getElementById("base-list-category").style.display = 'block';
            document.getElementById("base-list-product-admin").style.display = 'none';
            document.getElementById("base-list-order-manager").style.display = 'none';
        },

        // Open product manager
        openProductManager() {
            document.getElementById("base-list-product-admin").style.display = 'block';
            document.getElementById("base-list-category").style.display = 'none';
            document.getElementById("base-list-order-manager").style.display = 'none';
        },

        // Open order manager
        openOrderManager() {
            document.getElementById("base-list-order-manager").style.display = 'block';
            document.getElementById("base-list-category").style.display = 'none';
            document.getElementById("base-list-product-admin").style.display = 'none';
        },

        // Begin load List product
        getAllCategory() {
            let me = this;

            axios
                .get("http://localhost:8080/api/v1/category")
                .then((response) => {
                    console.log('Get all category success!');
                    me.listCategory = response.data;
                    me.openCategoryManager();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End load List product

        // Begin load List product
        getAllProduct() {
            let me = this;

            axios
                .get("http://localhost:8080/api/v1/products")
                .then((response) => {
                    console.log('Get all product success!');
                    me.listProduct = response.data;

                    // open product list:
                    me.openProductManager();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End load List product

        // Begin load List order
        getAllOrder() {
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
                    me.listOrders = response.data;

                    // open order manager
                    me.openOrderManager();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End load List order

    },
    


}
</script>

<style>
@import url('../../../styles/layout/admin/adminHome.css');
</style>