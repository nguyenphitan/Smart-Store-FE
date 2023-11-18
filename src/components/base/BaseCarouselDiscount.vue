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

}
</script>

<style scoped>
@import url('../../styles/base/carouselCard.css');
</style>