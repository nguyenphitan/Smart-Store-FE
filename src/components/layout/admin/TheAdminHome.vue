<template>
    <div id="the-admin">
        <!-- Begin container -->
        <div id="admin-container">
            <!-- Begin Navbar left -->
            <div class="admin-nav" style="position: sticky; top: 124px; left: 0;">
                <!-- Category -->
                <div @click="getAllCategory" class="manager-category">
                    <h5><i class="fa-solid fa-list" style="margin-right: 8px;"></i> Categories</h5>
                </div>
                <!-- End category -->

                <!-- Product -->
                <div @click="getAllProduct" class="manager-product">
                    <h5><i class="fa-brands fa-product-hunt" style="margin-right: 8px;"></i> Products</h5>
                </div>
                <!-- End product -->

                <!-- Order -->
                <div @click="getAllOrder" class="manager-order">
                    <h5><i class="fa-solid fa-cart-arrow-down" style="margin-right: 8px;"></i> Orders</h5>
                </div>
                <!-- End order -->

                <!-- Statistics -->
                <router-link to="/admin/statistics" class="manager-statistics">
                    <h5><i class="fa-solid fa-chart-simple" style="margin-right: 8px;"></i> Statistics</h5>
                </router-link>
                <!-- End Statistics -->


                <!-- Discount -->
                <!-- End Discount -->
                <!-- ... -->
            </div>
            <!-- End Navbar left -->

            <!-- Begin view right -->
            <div class="admin-context-view">
                <the-add-category></the-add-category>
                <base-list-category :listCategory="listCategory"></base-list-category>
                <base-list-product-admin :listProduct="listProduct" @reloadPage="reloadProductPage"></base-list-product-admin>
                <base-list-order-manager :listOrders="listOrders" @reloadPage="reloadOrderPage"></base-list-order-manager>
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
        let role = localStorage.getItem("role");
        if(role != "ADMIN") {
            window.location.href = "/#/";
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
                .get('http://localhost:8080/api/v1/admin/order', { headers })
                .then((response) => {
                    console.log(response.data);
                    me.listOrders = response.data;

                    // open order manager
                    me.openOrderManager();
                })
                .catch((reject) => {
                    console.log(reject);
                });
                
        } else {
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
        }

    },
    mounted () {
        window.scrollTo(0, 0)
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
        // reloadProductPage
        reloadProductPage(e) {
            console.log(e.target);
            // clear input search and select box
            document.querySelector('#base-list-product-admin .search-text').value = '';
            document.querySelector('#base-list-product-admin #admin-filter').selectedIndex = 0;
            this.getAllProduct();
        },
        
        // reloadOrderPage
        reloadOrderPage(e) {
            console.log(e.target);
            this.getAllOrder();
        },


        // Open category manager
        openCategoryManager() {
            document.getElementById("base-list-category").style.display = 'block';
            document.getElementById("base-list-product-admin").style.display = 'none';
            document.getElementById("base-list-order-manager").style.display = 'none';

            document.querySelector('#the-admin .admin-nav .manager-category').classList.add('t-active');
            document.querySelector('#the-admin .admin-nav .manager-product').classList.remove('t-active');
            document.querySelector('#the-admin .admin-nav .manager-order').classList.remove('t-active');
        },

        // Open product manager
        openProductManager() {
            document.getElementById("base-list-product-admin").style.display = 'block';
            document.getElementById("base-list-category").style.display = 'none';
            document.getElementById("base-list-order-manager").style.display = 'none';

            document.querySelector('#the-admin .admin-nav .manager-category').classList.remove('t-active');
            document.querySelector('#the-admin .admin-nav .manager-product').classList.add('t-active');
            document.querySelector('#the-admin .admin-nav .manager-order').classList.remove('t-active');
        },

        // Open order manager
        openOrderManager() {
            document.getElementById("base-list-order-manager").style.display = 'block';
            document.getElementById("base-list-category").style.display = 'none';
            document.getElementById("base-list-product-admin").style.display = 'none';

            document.querySelector('#the-admin .admin-nav .manager-category').classList.remove('t-active');
            document.querySelector('#the-admin .admin-nav .manager-product').classList.remove('t-active');
            document.querySelector('#the-admin .admin-nav .manager-order').classList.add('t-active');
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
                .get(`http://localhost:8080/api/v1/products?size=${1000}`)
                .then((response) => {
                    console.log('Get all product success!');
                    me.listProduct = response.data.content;

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
                .get('http://localhost:8080/api/v1/admin/order', { headers })
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