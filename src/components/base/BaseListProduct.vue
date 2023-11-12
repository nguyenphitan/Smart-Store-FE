<template>
    <div id="base-products">
        <!-- Begin container -->
        <div id="list-product-container">
            <div class="render-product">
                <base-card
                    v-for="(data, index) in products" 
                    :key="index"
                    :categoryName="data.category.name"
                    :imgURL="require('@/assets/imgs/' + data.photos)"
                    :price="data.price"
                    :inventory="data.quantity"
                    :productName="data.name"
                    :productId="data.id"
                    @addToCart="addToCard"
                >
                </base-card>
            </div>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios';
import BaseCard from './BaseCard.vue'

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
    },
    methods: {
        // Add product to cart:
        addToCard(e) {
            let productId = e.target.parentElement.nextSibling.innerText;
            const token = localStorage.getItem('token');

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
                })
                .catch((reject) => {
                    console.log(reject);
                });

        },
    },

}
</script>

<style>
@import url('../../styles/base/listProduct.css');
</style>