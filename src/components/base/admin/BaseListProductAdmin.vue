<template>
    <div id="base-list-product-admin" style="height: 600px; overflow: scroll;">
        <!-- Container -->
        <div id="product-admin-container">
            <div class="function-area">
                <div class="t-flex" style="margin-left: 16px; margin-top: 16px;">
                    <div class="admin-search-product">
                        <input @change="searchProductByName" type="text" name="searchText" class="search-text">
                    </div>

                    <div class="admin-filter-product">
                        <select 
                            @change="filterByCategory" 
                            name="admin-filter" 
                            id="admin-filter">
                            <option value="0">All</option>
                            <option 
                                v-for="(category, index) in categories" 
                                :key="index" 
                                :value="category.id"
                            >{{ category.name }}</option>
                        </select>
                    </div>
                </div>
                
                <div class="btn-add-new-product">
                    <router-link to="/add-new-product" class="add-new-page" >Add New</router-link>
                </div>
            </div>
            
            <base-admin-product-row
                v-for="(product, index) in listProduct"
                :key="index"
                :id="product.id"
                :name="product.name"
                :imgSrc="product.photos"
                :category="product.category.name"
                :categoryId="product.category.id"
                :quantity="product.quantity"
                :price="product.price"
                :discount="product.discount"
                @reloadPage="reloadPage"
            >
            </base-admin-product-row>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
import axios from 'axios';
import BaseAdminProductRow from './BaseAdminProductRow.vue';

export default {
    name: 'base-product-admin',
    components: {
        BaseAdminProductRow,
    },
    props: {
        listProduct: {
            type: Array,
            default: new Array()
        },
    },
    watch: {
        listProduct: {
            deep: true
        }
    },
    data() {
        return {
            // list of category:
            categories: [],
        }
    },
    beforeCreate() {
        // Get all category
        let me = this;

        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                me.categories = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all category

    },
    methods: {
        reloadPage(e) {
            this.$emit("reloadPage", e);
        },

        // Filter by category:
        filterByCategory(e) {
            console.log(e.target);
            let categoryId = e.target.value;

            // clear input search:
            document.querySelector("#base-list-product-admin .search-text").value = '';

            let me = this;

            // All category:
            if(categoryId == 0) {
                axios
                    .get(`http://localhost:8080/api/v1/products?size=${1000}`)
                    .then((response) => {
                        me.listProduct = response.data.content;
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            }
            else {
                axios
                    .get(`http://localhost:8080/api/v1/products?size=${1000}&categoryId=${categoryId}`)
                    .then((response) => {
                        me.listProduct = response.data.content;
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

            let categoryId = document.querySelector("#base-list-product-admin #admin-filter").value;
            let searchText = e.target.value;
            console.log(searchText);
            if(searchText == '') {
                if(categoryId != null && categoryId != 0) {
                    axios
                        .get(`http://localhost:8080/api/v1/products?size=${1000}&categoryId=${categoryId}`)
                        .then((response) => {
                            me.listProduct = response.data.content;
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                } else {
                    // Get all product
                    axios
                        .get(`http://localhost:8080/api/v1/products?size=${1000}`)
                        .then((response) => {
                            me.listProduct = response.data.content;
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }
            }
            else {
                if(categoryId != null && categoryId != 0) {
                    axios
                        .get(`http://localhost:8080/api/v1/products?size=${1000}&search=${searchText}&categoryId=${categoryId}`)
                        .then((response) => {
                            me.listProduct = response.data.content;
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                } else {
                    axios
                        .get(`http://localhost:8080/api/v1/products?size=${1000}&search=${searchText}`)
                        .then((response) => {
                            me.listProduct = response.data.content;
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }
            }

        },

    },
}
</script>

<style scoped>

#product-admin-container {
    position: relative;
}

.function-area {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background: rgb(246, 249, 252);
    padding-bottom: 16px;
}

.admin-search-product {
}

.admin-search-product input {
    height: 36px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    padding: 4px 12px;
    width: 250px;
}

.admin-filter-product {
    margin-left: 16px;
}

.admin-filter-product select {
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0 12px;
}

.btn-add-new-product {
    margin-left: 16px;
}

.btn-add-new-product .add-new-page {
    padding: 8px 12px;
    background-color: rgb(233, 69, 96);
    color: white;
    border-radius: 8px;
    margin-right: 16px;
    margin-top: 16px;
    display: block;
}
</style>