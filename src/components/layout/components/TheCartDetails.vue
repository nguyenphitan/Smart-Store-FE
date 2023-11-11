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
                
                <!-- <router-link to="/cart-payment" class="step step-payment">3. Payment</router-link>
                
                <div class="step-line step-line-3"></div> -->
                
                <router-link to="/orders-review" class="step step-review">3. Review</router-link>
            </div>

            <!-- Bottom -->
            <form @submit="goToReview" class="cart-details-bottom">
                <!-- Left -->
                <div class="shipping-address">

                    <p style="font-weight: 600; font-size: 16px;">Shipping Address</p>

                    <div class="shipping-address-wrapper">
                        <!-- col left -->
                        <div class="shipping-address-left">
                            <div class="shipping-item">
                                <p class="address-title">Full Name</p>
                                <input name="fullName" type="text" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Phone Number</p>
                                <input name="phone" type="text" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Zip Code</p>
                                <input name="zip" type="text" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">District</p>
                                <input name="district" type="text" required/>
                            </div>
                        </div>

                        <!-- col right -->
                        <div class="shipping-address-right">
                            <div class="shipping-item">
                                <p class="address-title">Email Address</p>
                                <input name="email" type="email" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Company</p>
                                <input name="company" type="text" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">City</p>
                                <input name="city" type="text" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Detailed Address</p>
                                <input name="detailAddress" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right -->
                <div class="apply-voucher">
                    <div class="cart-sub-total t-flex t-between">
                        <p class="apply-title">SubTotal: </p>
                        <p class="apply-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-shipping t-flex t-between">
                        <p class="apply-title">Shipping: </p>
                        <p class="apply-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-tax t-flex t-between">
                        <p class="apply-title">Tax: </p>
                        <p class="apply-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="cart-discount t-flex t-between">
                        <p class="apply-title">Discount: </p>
                        <p class="apply-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="total-amount t-text-right">
                        <p id="total-price" class="apply-title">{{ formatPrice(totalPrice) }} VND</p>
                    </div>

                    <div class="select-voucher">
                        Voucher
                    </div>

                    <button @click="paymentHandle" type="submit" class="btn-pay t-text-center t-color-red t-border-red">
                        Pay
                    </button>
                </div>

            </form>
            <!-- End bottom -->

        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // this.$route.params.id

    name: "the-cart-details",
    created() { // Get cart detail:
        // Token
        const token = localStorage.getItem('token');
        console.log(token);

        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        let me = this;

        // Call API
        axios
            .get('http://localhost:8080/api/v1/cart', { headers })
            .then((response) => {
                for(let cartResponse of response.data) {
                    this.totalPrice += (cartResponse.product.price * cartResponse.quantity);

                    // build productItem to payment
                    let productItem = {
                        productId: cartResponse.product.id,
                        quanitySelected: cartResponse.quantity
                    };

                    me.productPaymentDTOs.push(productItem);

                    console.log("List: " + me.productPaymentDTOs);

                }
            })
            .catch((reject) => {
                console.log(reject);
            });
    },

    data() {
        return {
            // Subtotal"
            totalPrice: 0,

            // List product to payment:
            productPaymentDTOs: [],

        }
    },

    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Payment handle:
        paymentHandle() {
            console.log(this.productPaymentDTOs);

            // Payment if list product item not empty
            if(this.productPaymentDTOs.length != 0) {
                // Get info:
                let fullName = document.querySelector('input[name="fullName"]').value;
                let phone = document.querySelector('input[name="phone"]').value;
                let zip = document.querySelector('input[name="zip"]').value;
                let district = document.querySelector('input[name="district"]').value;
                let email = document.querySelector('input[name="email"]').value;
                let company = document.querySelector('input[name="company"]').value;
                let city = document.querySelector('input[name="city"]').value;
                let detailAddress = document.querySelector('input[name="detailAddress"]').value;
    
                // Total price:
                // let total = document.getElementById('total-price').innerText;
    
                // Request:
                let paymentRequest = {
                    productInfo: this.productPaymentDTOs,
                    fullName: fullName,
                    phone: phone,
                    zip: zip,
                    district: district,
                    email: email,
                    company: company,
                    city: city,
                    detailAddress: detailAddress,
                    total: 199000
                };
    
                // Call api:
                const token = localStorage.getItem('token');
    
                // header
                const headers = {
                    Authorization: `Bearer ${token}`,
                };
    
                axios
                    .post('http://localhost:8080/api/v1/payment', paymentRequest, {headers})
                    .then((response) => {
                        console.log("Pay success!");
                        console.log(response);
    
                        // Go to review page
                        window.location.href = "#/orders-review";
    
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        },

        // Go to review page:
        goToReview() {
            window.location.href = "#/orders-review";
        }

    },

}
</script>

<style>
@import url('../../../styles/layout/cartDetails.css');
</style>