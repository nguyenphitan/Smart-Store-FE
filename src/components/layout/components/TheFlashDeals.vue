<template>
    <div id="the-flash-deals">
        <!-- Container -->
        <div id="flash-deals-container">
            <h2 class="flash-deal-title">
                <span class="t-color-red">Flash Deals, </span> 
                <span style="color: rgb(125, 135, 156);">Enjoy Upto 80% Discounts</span>
            </h2>
            <!-- Show list product discount -->
            <div id="show-products">
                <!-- Left -->
                <div id="product-category" style="position: sticky; top: 124px; left: 0;">
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
                        :products="listProducts"
                        :totalPage="productPageable.totalPages"
                        @goToPage="goToPage"
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
            .get(`http://localhost:8080/api/v1/products?isDiscount=${1}`)
            .then((response) => {
                me.productPageable = response.data;
                me.listProducts = response.data.content;
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
        listProducts: {
            deep: true
        }
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // product pageable
            productPageable: {},

            // List of product discounts
            listProducts: [],

            // List of category
            listCategory: [],
        }
    },
    methods: {
        // active category filter:
        activeCategoryFilter(e, categoryId) {
            this.clearCategoryOtherActive();
            if(e.target.classList.contains("category-card-container")) {
                e.target.classList.add("category-active");
                e.target.setAttribute("t-categoryId", categoryId);
            } else if(e.target.parentElement.classList.contains("category-card-container")) {
                e.target.parentElement.classList.add("category-active");
                e.target.parentElement.setAttribute("t-categoryId", categoryId);
            } else if(e.target.parentElement.parentElement.classList.contains("category-card-container")) {
                e.target.parentElement.parentElement.classList.add("category-active");
                e.target.parentElement.parentElement.setAttribute("t-categoryId", categoryId);
            }
        },

        // Clear category other active:
        clearCategoryOtherActive() {
            let categories = document.querySelectorAll("#the-flash-deals .category-active");
            for(let category of categories) {
                category.classList.remove("category-active");
                category.removeAttribute("t-categoryId");
            }
        },

        // scroll to list product top:
        scrollToListProduct() {
            let productDiv = document.querySelector("#the-flash-deals #list-product");
            productDiv.scrollIntoView({behavior: 'smooth'});
        },

        // Filter by category:
        filterByCategory(e, categoryId) {
            console.log(e.target);
            this.activeCategoryFilter(e, categoryId);

            // clear input search:
            document.querySelector("#show-products #search-product").value = '';

            let me = this;

            // All category:
            if(categoryId == 0) {
                axios
                    .get(`http://localhost:8080/api/v1/products?isDiscount=${1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            }
            else {
                axios
                    .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&categoryId=${categoryId}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
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

            let categoryFilter = document.querySelector("#the-flash-deals .category-active");
            let searchText = e.target.value;
            console.log(searchText);
            if(searchText == '') {
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&categoryId=${categoryId}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                        
                } else {
                    // Get all product
                    axios
                        .get(`http://localhost:8080/api/v1/products?isDiscount=${1}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }

            }
            else {
                // Search product (like)
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&categoryId=${categoryId}&search=${searchText}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                        
                } else {
                    axios
                        .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&search=${searchText}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }
            }

        },

        // Go to page:
        goToPage(page) {
            console.log(page);
            let me = this;

            let categoryFilter = document.querySelector("#the-flash-deals .category-active");
            let searchText = document.querySelector("#show-products #search-product").value;
            
            if(searchText != '') {
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&categoryId=${categoryId}&search=${searchText}&page=${page-1}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });

                } else {
                    axios
                    .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&search=${searchText}&page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
                }
                    
            } else if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                let categoryId = categoryFilter.getAttribute("t-categoryId");

                axios
                    .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&categoryId=${categoryId}&page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            } else {
                axios
                    .get(`http://localhost:8080/api/v1/products?isDiscount=${1}&page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        },
    },
}
</script>

<style>
@import url('../../../styles/layout/flashDeals.css');
</style>