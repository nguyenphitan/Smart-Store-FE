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
            <div class="cart-details-bottom">
                <!-- Left -->
                <div class="shipping-address">

                    <p style="font-weight: 600; font-size: 16px;">Shipping Address</p>

                    <div class="shipping-address-wrapper">
                        <!-- col left -->
                        <div class="shipping-address-left">
                            <div class="shipping-item">
                                <p class="address-title">Full Name <span class="t-color-red">*</span> </p>
                                <input name="fullName" type="text" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Phone Number <span class="t-color-red">*</span></p>
                                <input name="phone" type="text" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Zip Code <span class="t-color-red">*</span></p>
                                <input name="zip" type="text" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">District <span class="t-color-red">*</span></p>
                                <input name="district" type="text" @focus="resetWarningInput" required/>
                            </div>
                        </div>

                        <!-- col right -->
                        <div class="shipping-address-right">
                            <div class="shipping-item">
                                <p class="address-title">Email Address <span class="t-color-red">*</span></p>
                                <input name="email" type="email" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Company <span class="t-color-red">*</span></p>
                                <input name="company" type="text" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">City <span class="t-color-red">*</span></p>
                                <input name="city" type="text" @focus="resetWarningInput" required/>
                            </div>
                            <div class="shipping-item">
                                <p class="address-title">Detailed Address <span class="t-color-red">*</span></p>
                                <input name="detailAddress" type="text" @focus="resetWarningInput" required/>
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

                    <div class="cart-discount t-flex t-between">
                        <p class="apply-title">Discount: </p>
                        <p class="apply-title">{{ formatPrice(discountValue) }} VND</p>
                    </div>

                    <div class="total-amount t-text-right">
                        <p id="total-price" class="apply-title">{{ formatPrice(amount) }} VND</p>
                    </div>

                    <div class="select-voucher">
                        Voucher
                    </div>

                    <button @click="paymentHandle" class="btn-pay t-text-center t-color-red t-border-red">
                        Pay
                    </button>
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
                    let productPrice = cartResponse.product.price;
                    let productDiscount = cartResponse.product.discount;

                    me.totalPrice += (cartResponse.product.price * cartResponse.quantity);
                    me.discountValue += productPrice * productDiscount / 100;
                    me.amount = me.totalPrice - me.discountValue;

                    // build productItem to payment
                    let productItem = {
                        productId: cartResponse.product.id,
                        quanitySelected: cartResponse.quantity
                    };

                    me.productPaymentDTOs.push(productItem);
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

            // Discount 
            discountValue: 0,

            // Amount
            amount: 0,

            // List product to payment:
            productPaymentDTOs: [],

        }
    },
    mounted () {
        window.scrollTo(0, 0)
    },

    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Validate input:
        validateInput() {
            // Get info:
            let fullName = document.querySelector('input[name="fullName"]');
            let phone = document.querySelector('input[name="phone"]');
            let zip = document.querySelector('input[name="zip"]');
            let district = document.querySelector('input[name="district"]');
            let email = document.querySelector('input[name="email"]');
            let company = document.querySelector('input[name="company"]');
            let city = document.querySelector('input[name="city"]');
            let detailAddress = document.querySelector('input[name="detailAddress"]');

            let inputs = [fullName, phone, zip, district, email, company, city, detailAddress];

            for(let input of inputs) {
                if(input.value.trim() == '') {
                    input.style.borderColor = "red";
                    return;
                }
            }
        },

        // Reset warning input:
        resetWarningInput(e) {
            e.target.style.border = "1px solid rgb(218, 225, 231)";
        },

        // Payment handle:
        paymentHandle() {
            if(this.amount <= 0) {
                alert("Payment fail!");
                return;
            }
            console.log(this.productPaymentDTOs);
            // let me = this;

            // Get info:
            let fullName = document.querySelector('input[name="fullName"]').value;
            let phone = document.querySelector('input[name="phone"]').value;
            let zip = document.querySelector('input[name="zip"]').value;
            let district = document.querySelector('input[name="district"]').value;
            let email = document.querySelector('input[name="email"]').value;
            let company = document.querySelector('input[name="company"]').value;
            let city = document.querySelector('input[name="city"]').value;
            let detailAddress = document.querySelector('input[name="detailAddress"]').value;

            this.validateInput();

            // Payment if list product item not empty and info not empty
            if(this.productPaymentDTOs.length != 0 
                && fullName.trim() != '' 
                && phone.trim() != '' 
                && zip.trim() != '' 
                && district.trim() != '' 
                && email.trim() != '' 
                && company.trim() != '' 
                && city.trim() != '' 
                && detailAddress.trim() != ''
            ) {
    
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
                    total: this.amount
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
                        window.location.reload();
    
                    })
                    .catch((reject) => {
                        alert("Pay fail!");
                        console.log(reject);
                    });
            }

        },

        // Go to review page:
        // goToReview() {
        //     window.location.href = "#/orders-review";
        // }

    },

}
</script>

<style>
@import url('../../../styles/layout/cartDetails.css');
</style>