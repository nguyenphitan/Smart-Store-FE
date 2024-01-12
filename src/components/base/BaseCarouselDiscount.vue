<template>
    <div id="base-carousel-discount">
        <!-- Base carousel card -->
        <div id="carousel-discount-container">
            <!-- Begin product discount -->
            <VueSlickCarousel 
                v-bind="settings" 
                v-if="productDiscounts.length > 0"
            >
                <!-- Using product card for carousel -->
                <base-card 
                    v-for="(product, key) in productDiscounts" 
                    :key="key"
                    :categoryName="product.category.name" 
                    :imgURL="require('@/assets/imgs/' + product.photos)"
                    :inventory="product.quantity"
                    :price="product.price"
                    :productName="product.name"
                    :discount="product.discount"
                    :productId="product.id"
                    @addToCart="addToCart"
                ></base-card>
            </VueSlickCarousel>
            <!-- End product discount -->

        </div>
    </div>
</template>

<script>
import BaseCard from './BaseCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from 'axios'
import { EventBus } from '@/eventBus'

export default {
    name: 'base-carousel-discount',
    components: {
        BaseCard,
        VueSlickCarousel,
    },
    props: {
        productDiscounts: {
            type: Array,
            default: new Array()
        },
        settings: {
            type: Object,
            default: new Object()
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        // Add product to cart:
        addToCart(e) {
            let productId = e.target.parentElement.nextSibling.innerText;
            console.log(productId);
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
    },

}
</script>

<style scoped>
@import url('../../styles/base/carouselCard.css');
</style>