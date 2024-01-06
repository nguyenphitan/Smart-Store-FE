<template>
    <div id="base-card">
        <!-- Base card -->
        <router-link :to="{ name: 'details', params: { id: productId}}">
            <div id="base-card-container">
                <div class="card">
                    <div v-if="discount != 0" class="d-flex justify-content-between p-3 position-absolute">
                        <!-- <p class="lead mb-0">Today's Combo Offer</p> -->
                        <div class="bg-info d-flex align-items-center justify-content-center shadow-1-strong sale-off">
                            <p class="text-white mb-0 small">{{discount}}% off</p>
                        </div>
                    </div>
                    <img v-bind:src="imgURL"
                        class="card-img-top" alt="Laptop" />
                    <div class="card-body">
                        <div class="d-flex justify-content-between top-info">
                            <p class="small"><a href="#!" class="text-muted category-name">{{categoryName}}</a></p>
                            <p class="text-muted mb-0 inventory">Available: <span class="fw-bold">{{inventory}}</span></p>
                        </div>

                        <div class="d-flex justify-content-between product-name">
                            <h3 class="mb-0">{{productName}}</h3>
                        </div>
                        <div class="ms-auto text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>

                        <div class="d-flex justify-content-between align-items-center t-top-12">
                            <div class="t-flex">
                                <h5 class="mb-0 product-price"> <div class="unit-price">₫</div> {{formatPrice(price - (price * discount / 100))}}</h5>
                                <h5 v-if="discount != 0" style="margin-left: 8px; color: rgb(125, 135, 156); text-decoration: line-through;" class="mb-0 product-price"> <div class="unit-price">₫</div> {{formatPrice(price)}}</h5>
                            </div>
                            <div @click="addToCard" class="add-to-cart">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <span id="product-id" style="display: none;">{{ productId }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'base-card',
    props: {
        // product: {
        //     type: Object,
        //     default: new {
        //         categoryName: 'Watch',
        //         productName: 'Smart watch black',
        //         price: 1000000,
        //         inventory: 9
        //     }
        // }

        categoryName: {
            type: String,
            default: 'Watch'
        },
        productName: {
            type: String,
            default: 'Smart watch black'
        },
        price: {
            type: Number,
            default: 1000000
        },
        inventory: {
            type: Number,
            default: 0
        },
        imgURL: {
            type: String,
            default: require('@/assets/imgs/flash-2.webp')
        },
        productId: {
            type: Number,
            default: 1
        },
        discount: {
            type: Number,
            default: 0
        },

    },
    created() {
        console.log(this.productId);
    },
    data() {
        return {

        }
    },
    methods: {

        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Add product to cart:
        addToCard(e) {
            if(this.inventory < 0) {
                alert("Product quantity is not enough!");
                return;
            }
            this.$emit('addToCart', e);
            e.preventDefault();
        },

    }

}
</script>

<style scoped>
@import url('../../styles/base/card.css');
</style>