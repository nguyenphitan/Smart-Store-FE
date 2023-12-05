<template>
    <div id="base-mini-card">
        <!-- Base mini card -->
        <div id="mini-card-container">
            <router-link :to="{ name: 'details', params: { id: productId}}" class="card">
                <div class="product-img">
                    <img v-bind:src="imgURL" class="card-img-top" alt="Laptop" />
                </div>
                <div class="card-body">
                    <div :class="iconStar == false ? 
                        'd-flex align-items-center t-display-none'
                        : 'd-flex align-items-center t-text-center'">
                        <div class="ms-auto text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <!-- <span class="t-left-8" v-text="'(' + evaluate + ')'"></span> -->
                    </div>

                    <div :class="iconStar == false ? 
                        'd-flex justify-content-between'
                        : 'd-flex justify-content-between t-top-4 t-text-center'">
                        <h5 class="mb-0 product-name">{{productName}}</h5>
                    </div>

                    <div :class="iconStar == false ? 
                        'd-flex justify-content-between align-items-center t-top-4' 
                        : 'd-flex justify-content-between align-items-center t-top-4 t-text-center'">
                        <h5 class="mb-0 product-price"> <div class="unit-price">₫</div> {{formatPrice(price)}}</h5>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'base-mini-card',
    props: {
        productName: {
            type: String,
            default: 'Smart watch'
        },
        price: {
            type: Number,
            default: 100000
        },
        imgURL: {
            type: String,
            default: require('@/assets/imgs/bgwatch.webp')
        },
        iconStar: {
            type: Boolean,
            default: false
        },
        productId: {
            type: Number,
            default: 1
        },
    },
    methods: {

        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }

}
</script>

<style scoped>
@import url('../../styles/base/miniCard.css');
</style>