<template>
    <div id="base-products">
        <!-- Begin container -->
        <div id="list-product-container">
            <h3 style="font-weight: bold; color: #929090; text-align: center; font-size: 24px;" v-if="this.products.length == 0">No Products</h3>
            <div class="render-product">
                <base-card
                    v-for="(product, index) in products" 
                    :key="index"    
                    :categoryName="product.category.name"
                    :imgURL="require('@/assets/imgs/' + product.photos)"
                    :price="product.price"
                    :inventory="product.quantity"
                    :productName="product.name"
                    :productId="product.id"
                    :discount="product.discount"
                    @addToCart="addToCart"
                >
                </base-card>
            </div>
            <div v-if="this.products.length > 0" style="display: flex; justify-content: right;">
                <!-- Paging -->
                <t-paginate
                    :page-count="totalPage"
                    :click-handler="goToPage"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'t-paging'">
                </t-paginate>
            </div>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios';
import BaseCard from './BaseCard.vue'
import { EventBus } from '@/eventBus';

export default {
    name: 'base-list-product',
    components: {
        BaseCard,
    },
    props: {
        products: {
            type: Array,
            default: new Array()
        },
        totalPage: {
            type: Number,
            default: 0
        },
    },
    methods: {
        // Add product to cart:
        addToCart(e) {
            let productId = e.target.parentElement.nextSibling.innerText;
            const token = localStorage.getItem('token');

            if(token == null) {
                document.getElementById('the-login').style.display = 'block';
                return;
            }

            // request
            let productRequest = {
                idProduct: Number(productId),
                quantitySelected: 1 // default 1
            }

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Call API
            axios
                .post('http://localhost:8080/api/v1/cart', productRequest, { headers })
                .then((response) => {
                    console.log("Add product to cart success!");
                    console.log(response.data);
                    alert("Add to cart success!");
                    EventBus.$emit("reloadCartSize");
                    // window.location.reload();
                })
                .catch((reject) => {
                    alert("Add to cart fail!");
                    console.log(reject);
                });

        },

        // Go to page:
        goToPage(page) {
            this.$emit("goToPage", page);
        },
    },

}
</script>

<style>
@import url('../../styles/base/listProduct.css');
</style>