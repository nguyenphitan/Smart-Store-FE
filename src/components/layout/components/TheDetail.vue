<template>
    <div id="the-detail">
        <!-- Top -->
        <!-- <div class="order-step">
            <div class="step step-add">1. Cart</div>
            <div class="step-line"></div>
            <div class="step step-detail">2. Details</div>
            <div class="step-line"></div>
            <div class="step step-payment">3. Payment</div>
            <div class="step-line"></div>
            <div class="step step-review">4. Review</div>
        </div> -->

        <!-- Bottom -->
        <div class="product-detail">
            <!-- Image -->
            <div class="product-img">
                <!-- Big image -->
                <div class="big-img">
                    <img v-bind:src="require('@/assets/imgs/' + productDetail.photos)" alt="" width="300px">
                </div>

                <!-- Small image -->
                <div class="small-img" style="margin-top: 20px;">
                    <img v-bind:src="require('@/assets/imgs/' + productDetail.photos)" alt="" width="65px" style="margin-right: 8px;">
                    <img v-bind:src="require('@/assets/imgs/' + productDetail.photos)" alt="" width="65px">
                </div>
            </div>

            <!-- Information -->
            <div class="product-info">
                <h2 class="product-name">{{productDetail.name}}</h2>
                <div class="product-category">Category: <span style="font-weight: bold;">{{ productDetail.category.name }}</span> </div>
                <div class="product-rated">Rated:
                    <div style="display: inline; padding: 0 4px;" class="ms-auto text-warning">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    (50)
                </div>
                <div class="product-price">{{ formatPrice(productDetail.price) }}đ</div>
                <!-- if product.quantity > 0 show: Stock Available else show: Non-Stock -->
                <div class="product-inventory">Stock Available</div>

                <!-- Begin select quantity -->
                <div class="quantity-selector d-flex flex-row">
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>

                    <input id="form1" min="1" name="quantity" value="1" type="number"
                      class="form-control form-control-sm" style="width: 50px;" />

                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                </div>
                <!-- End select quantity -->

                <base-button @onClickEvent="addManyProductToCart" class="add-to-cart" :buttonName="'Add to Cart'"></base-button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import axios from 'axios';

export default {
    name: "the-detail",
    components: { 
        BaseButton,
    },
    props: {
    },
    beforeCreate() {
        // console.log('The id is: ' + this.$route.params.id);
        axios
            .get(`http://localhost:8080/api/v1/products/${this.$route.params.id}`)
            .then((response) => {
                console.log("Get detail success!");
                this.productDetail = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
    },
    data() {
        return {
            // Product detail
            productDetail: {},
        }
    },
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Add many product to cart:
        addManyProductToCart(e) {
            console.log(e);
            let quantity = document.getElementById("form1").value;
            let productId = this.$route.params.id;
            const token = localStorage.getItem('token');

            // request
            let productRequest = {
                idProduct: Number(productId),
                quantitySelected: quantity
            }

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Call API
            axios
                .post('http://localhost:8080/api/v1/cart', productRequest, { headers })
                .then((response) => {
                    console.log("Get detail product success!");
                    console.log(response.data);
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                });

        }
    },

}
</script>

<style>
@import url('../../../styles/layout/details.css');
</style>