<template>
    <div id="the-cart-payment">
        <div id="cart-payment-container">
            <!-- Top -->
            <div class="order-step">
                <router-link to="/cart" class="step step-add">1. Cart</router-link>
                
                <div class="step-line step-line-1"></div>

                <router-link to="/cart-details" class="step step-detail">2. Details</router-link>

                <div class="step-line step-line-2"></div>
                
                <!-- <router-link to="/cart-payment" class="step step-payment">3. Payment</router-link>
                
                <div class="step-line step-line-3"></div> -->
                
                <div class="step step-review">3. Review</div>
            </div>
            <!-- End top -->

            <!-- Bottom -->
            <div class="cart-payment-bottom t-flex">
                <!-- Left -->
                <div class="cart-payment-method t-w-100">
                    <div class="t-w-100">
                        <!-- Payment by VNPay -->
                        <div class="vnpay-payment t-w-100">
                            <input id="vnpay-method" type="radio" name="input-payment-method" /> 
                            <label for="vnpay-method">Pay With VNPay</label>
                        </div>
                        <!-- End payment by VNPay -->

                        <!-- Payment on delivery -->
                        <div class="delivery-payment t-w-100">
                            <input id="delivery-method" type="radio" name="input-payment-method" /> 
                            <label for="delivery-method">Cash On Delivery</label>
                        </div>
                        <!-- End payment on delivery -->
                    </div>

                    <!-- Begin button -->
                    <div class="payment-btn-area t-flex t-between t-w-100">
                        <div class="back-to-details t-border-red t-w-100 t-color-red t-bold-600 t-flex t-align-center t-justify-center t-pointer">
                            Back to checkout details
                        </div>
                        <div class="btn-payment t-bold-600 t-color-white t-bg-red t-w-100 t-bold-600 t-flex t-align-center t-justify-center t-pointer">
                            Pay
                        </div>
                    </div>
                    <!-- End button -->

                </div>

                <!-- Right -->
                <div class="payment-amount t-w-30">
                    <div class="cart-sub-total t-flex t-between">
                        <p class="payment-amount-title">SubTotal: </p>
                        <p class="payment-amount-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-shipping t-flex t-between">
                        <p class="payment-amount-title">Shipping: </p>
                        <p class="payment-amount-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-tax t-flex t-between">
                        <p class="payment-amount-title">Tax: </p>
                        <p class="payment-amount-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-discount t-flex t-between">
                        <p class="payment-amount-title">Discount: </p>
                        <p class="payment-amount-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="total-amount t-text-right">
                        <p class="payment-amount-title" style="margin-bottom: unset;">{{ formatPrice(totalPrice) }} VND</p>
                    </div>
                </div>

            </div>
            <!-- End Bottom -->

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "the-cart-payment",
    created() { // Get cart detail:
        // Token
        const token = localStorage.getItem('token');
        console.log(token);

        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Call API
        axios
            .get('http://localhost:8080/api/v1/cart', { headers })
            .then((response) => {
                for(let cartResponse of response.data) {
                    this.totalPrice += (cartResponse.product.price * cartResponse.quantity);
                }

            })
            .catch((reject) => {
                console.log(reject);
            });
    },

    data() {
        return {
            // Subtotal
            totalPrice: 0,
        }
    },

    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
}
</script>

<style>
@import url('../../../styles/layout/cartPayment.css');
</style>