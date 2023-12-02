<template>
    <div id="the-flash-deals">
        <!-- Container -->
        <div id="flash-deals-container">
            <h2 class="flash-deal-title">
                <span class="t-color-red">Flash Deals, </span> 
                <span style="color: rgb(125, 135, 156);">Enjoy Upto 80% discounts</span>
            </h2>
            <!-- Show list product discount -->
            <div id="show-products">
                <!-- Left -->
                <div id="product-category">
                    <div class="category-container">
                        <div class="phone-nav" style="padding: 0 8px;">
                            <base-category-card
                                @filterByCategory="filterByCategory"
                                :cardName="'All'"
                                :extendIcon="false"
                                :categoryId="0"
                            ></base-category-card>
                            <base-category-card
                                @filterByCategory="filterByCategory"
                                v-for="(item, key) in listCategory"
                                :key="key"
                                :cardName="item.name"
                                :iconClassLeft="item.iconClassLeft"
                                :extendIcon="false"
                                :categoryId="item.id"
                                :imgSrc="item.imgSrc"
                            ></base-category-card>
                            <div>
                                <input @change="searchProductByName" id="search-product" type="text" name="search-product" placeholder="Enter name..."/>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Right -->
                <div id="list-product">
                    <h3 style="font-weight: bold;">Products</h3>
                    <!-- Begin render list product -->
                    <base-list-product
                        :products="productDiscounts"
                    ></base-list-product>
                    <!-- End render list product -->
                </div>

            </div>
            <!-- End show list product discount -->
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseListProduct from '@/components/base/BaseListProduct.vue';
import BaseCategoryCard from '@/components/base/BaseCategoryCard.vue'
import axios from 'axios';

export default {
    name: 'the-flash-deals',
    components: {
        BaseListProduct,
        BaseCategoryCard,
    },
    beforeCreate() {
        let me = this;

        // Get all product discount
        axios
            .get("http://localhost:8080/api/v1/products/discounts")
            .then((response) => {
                console.log('Get all product discount success!');
                console.log(response.data);
                me.productDiscounts = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all product discount

        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                console.log(response.data);
                me.listCategory = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all category

    },
    watch: {
        productDiscounts: {
            deep: true
        }
    },
    data() {
        return {
            // List of product discounts
            productDiscounts: [],

            // List of category
            listCategory: [],
        }
    },
    methods: {
        // Filter by category:
        filterByCategory(e, categoryId) {
            console.log(e.target);
            let me = this;

            // All category:
            if(categoryId == 0) {
                // Get all product
                axios
                    .get("http://localhost:8080/api/v1/products/discounts")
                    .then((response) => {
                        console.log('Get all product discount success!');
                        console.log(response.data);
                        me.productDiscounts = response.data;
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            }
            else {
                // token
                const token = localStorage.getItem('token');
    
                // header
                const headers = {
                    Authorization: `Bearer ${token}`,
                };
    
                axios
                    .get(`http://localhost:8080/api/v1/products/category/discounts/${categoryId}`, {headers})
                    .then((response) => {
                        console.log('Filter by category success!');
                        console.log(response.data);
                        me.productDiscounts = response.data;
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        },

        // Search product:
        searchProductByName(e) {
            let me = this;
            console.log(e.target);

            let searchText = e.target.value;
            console.log(searchText);
            if(searchText == '') {
                // Get all product
                axios
                    .get("http://localhost:8080/api/v1/products/discounts")
                    .then((response) => {
                        console.log('Get all product discount success!');
                        console.log(response.data);
                        me.productDiscounts = response.data;
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
            else {
                // Search product (like)
                axios
                    .get(`http://localhost:8080/api/v1/products/discounts/search?name=${searchText}`)
                    .then((response) => {
                        console.log('Search product success!');
                        console.log(response.data);
                        me.productDiscounts = response.data;
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        }
    },
}
</script>

<style>
@import url('../../../styles/layout/flashDeals.css');
</style>