<template>
    <div id="base-carousel-card">
        <!-- Base carousel card -->
        <div id="carousel-card-container">
            <!-- Begin top category -->
            <VueSlickCarousel
                v-bind="settings" 
                v-if="status == categoryStatus"
            >
                <!-- Using top category card for carousel -->
                <base-top-category
                    v-for="(data, key) in datas" :key="key"
                    :categoryName="data.categoryName"
                    :imgURL="data.imgURL"
                ></base-top-category>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import BaseTopCategory from './BaseTopCategory.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'base-carousel-card',
    components: {
        BaseTopCategory,
        VueSlickCarousel,
    },
    props: {
        datas: { // Array object data of baseCard [ {}, {}, {}, ... ]
            type: Array,
            default: new Array()
        },
        status: {
            type: String,
            default: 'status'
        },
        settings: {
            type: Object,
            default: new Object()
        }
    },
    data() {
        return {
            productStatus: 'product-card',
            categoryStatus: 'top-category',
            
        }
    },

}
</script>

<style scoped>
@import url('../../styles/base/carouselCard.css');
</style>