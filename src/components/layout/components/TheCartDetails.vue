<template>
    <div id="the-cart-details">
        <!-- Begin container -->
        <div id="cart-details-container">

            <!-- Top -->
            <div class="order-step">
                <router-link to="/cart" class="step step-add">1. Cart</router-link>
                
                <div class="step-line step-line-1"></div>

                <router-link to="/cart-details" class="step step-detail">2. Details</router-link>

                <div class="step-line step-line-2"></div>
                
                <div class="step step-payment">3. Payment</div>
                
                <div class="step-line step-line-3"></div>
                
                <div class="step step-review">4. Review</div>
            </div>

            <!-- Bottom -->
            <div class="cart-details-bottom">
                <!-- Left -->
                <div class="shipping-address">

                    <p style="font-weight: 600; font-size: 16px;">Shipping Address</p>

                    <div class="shipping-address-wrapper">
                        <!-- col left -->
                        <div class="shipping-address-left">
                            <div class="shipping-item">
                                <p class="address-title">Full Name</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Phone Number</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Zip Code</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">District</p>
                                <input type="text" />
                            </div>
                        </div>

                        <!-- col right -->
                        <div class="shipping-address-right">
                            <div class="shipping-item">
                                <p class="address-title">Email Address</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Company</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">City</p>
                                <input type="text" />
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Detailed Address</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right -->
                <div class="apply-voucher">
                    <div class="cart-sub-total t-flex t-between">
                        <p>SubTotal: </p>
                        <p>{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-shipping t-flex t-between">
                        <p>Shipping: </p>
                        <p>{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-tax t-flex t-between">
                        <p>Tax: </p>
                        <p>{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-discount t-flex t-between">
                        <p>Discount: </p>
                        <p>{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="total-amount t-text-right">
                        <p>{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="select-voucher">
                        Voucher
                    </div>

                    <div class="btn-apply-voucher t-text-center t-color-red t-border-red">
                        Apply Voucher
                    </div>
                </div>

            </div>
            <!-- End bottom -->

        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "the-cart-details",
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
@import url('../../../styles/layout/cartDetails.css');
</style>